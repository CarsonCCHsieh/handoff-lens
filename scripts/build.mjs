// Local esbuild only. `forge build` is a separate cloud upload command.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'forge-build');
const evidence = path.join(root, '.local/build');
const allowedFiles = ['app.mjs', 'help.html', 'icon.svg', 'index.html', 'style.css', 'THIRD_PARTY_NOTICES.txt'];
await fs.mkdir(output, { recursive: true });
await fs.mkdir(evidence, { recursive: true });
const unexpected = (await fs.readdir(output)).filter(name => !allowedFiles.includes(name));
if (unexpected.length) throw new Error('Unexpected files in Forge resource; inspect them before building.');
const result = await build({
  absWorkingDir: root,
  entryPoints: ['src/entry.mjs'],
  outfile: 'forge-build/app.mjs',
  bundle: true, platform: 'browser', format: 'esm', target: ['es2022'],
  treeShaking: true, minify: false, sourcemap: false, legalComments: 'none',
  metafile: true, logLevel: 'silent', charset: 'utf8'
});
for (const name of ['index.html', 'help.html', 'style.css', 'icon.svg']) {
  await fs.copyFile(path.join(root, 'public', name), path.join(output, name));
}
const packages = JSON.parse(await fs.readFile(path.join(root, 'licenses/runtime-packages.json'), 'utf8'));
const notices = [];
for (const item of packages) {
  notices.push(`${item.name}@${item.version}\nLicense: ${item.license}\n`);
  for (const file of item.notices) notices.push(await fs.readFile(path.join(root, file.path), 'utf8'));
  if (item.supplementalProvenance) notices.push(JSON.stringify(item.supplementalProvenance, null, 2));
}
await fs.writeFile(path.join(output, 'THIRD_PARTY_NOTICES.txt'), notices.join('\n\n---\n\n') + '\n');
await fs.writeFile(path.join(evidence, 'esbuild-metafile.json'), JSON.stringify(result.metafile, null, 2) + '\n');
console.log(JSON.stringify({ kind: 'local-esbuild', resourceFiles: allowedFiles.length,
  publicForgeSDK: true, warnings: result.warnings.length, cloudUpload: false }));
