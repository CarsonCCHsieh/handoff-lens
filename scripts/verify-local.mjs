// Static resource checks only; this does not replace authenticated Forge lint.
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = relative => fs.readFile(path.join(root, relative), 'utf8');
const expected = ['THIRD_PARTY_NOTICES.txt', 'app.mjs', 'help.html', 'icon.svg', 'index.html', 'style.css'].sort();
assert.deepEqual((await fs.readdir(path.join(root, 'forge-build'))).sort(), expected);
const meta = JSON.parse(await read('.local/build/esbuild-metafile.json'));
assert.equal(meta.outputs['forge-build/app.mjs'].imports.length, 0);
assert.ok(Object.values(meta.inputs).every(input => input.imports.every(item => !item.external)));
assert.ok(!Object.keys(meta.inputs).some(name => /synthetic|preview|tests\//.test(name)));
for (const html of ['index.html', 'help.html']) {
  for (const match of (await read('forge-build/' + html)).matchAll(/\b(?:src|href)="([^"]+)"/g)) {
    assert.ok(match[1].startsWith('./') && !match[1].includes('..'));
    assert.ok((await fs.stat(path.join(root, 'forge-build', match[1]))).isFile());
  }
}
assert.ok((await read('forge-build/index.html')).includes("connect-src 'none'"));
assert.doesNotMatch(await read('forge-build/style.css'), /@import|url\s*\(/i);
const manifest = (await read('manifest.yml')).split('\n').filter(line => !line.trimStart().startsWith('#')).join('\n');
assert.doesNotMatch(manifest, /\b(function|resolver|storage|sql|remotes|scheduledTrigger|webtrigger|rovo:agent|container):/i);
assert.doesNotMatch(manifest, /write:|storage:app|render:\s*native/);
assert.match(manifest, /read:jira-work/);
assert.match(manifest, /path:\s*forge-build/);
assert.match(await read('src/entry.mjs'), /import \{ requestJira, view \} from '@forge\/bridge'/);
const appSources = await Promise.all(['src/entry.mjs', 'src/core.mjs', 'src/app.mjs'].map(read));
assert.doesNotMatch(appSources.join('\n'), /\b(?:fetch|invoke|WebSocket|XMLHttpRequest|sendBeacon|setInterval|localStorage|sessionStorage)\b/);
console.log(JSON.stringify({ passed: true, resourceFiles: expected.length,
  syntheticRuntimeDependencies: 0, externalImports: 0, staticAssetsLocal: true,
  forgeLintExecuted: false, realJiraVerified: false }));
