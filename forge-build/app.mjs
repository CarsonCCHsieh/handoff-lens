var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key2, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key2) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key2, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key2, r) : d(target, key2)) || r;
  return c > 3 && r && Object.defineProperty(target, key2, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key2) {
    decorator(target, key2, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key2 = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key2], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key2] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail2(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail2(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail2(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    __setModuleDefault = Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/@forge/bridge/out/router/targets.js
var require_targets = __commonJS({
  "node_modules/@forge/bridge/out/router/targets.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationTarget = void 0;
    exports.NavigationTarget = {
      /**
       * The view page for pages, blogs and custom content. Takes a contentId to identify the content.
       */
      ContentView: "contentView",
      /**
       * The edit page for pages, blogs and custom content. Takes a contentId to identify the content.
       */
      ContentEdit: "contentEdit",
      /**
       * The list/collector page for pages, blogs and custom content contained in a space. Takes a spaceKey and a contentType to identify the content type for pages and blogs. Takes a moduleKey for custom content.
       */
      ContentList: "contentList",
      /**
       * The space view page. Takes a spaceKey to identify the space.
       */
      SpaceView: "spaceView",
      /**
       * The page within a specific module. Takes a moduleKey to identify the correct module.
       */
      Module: "module",
      /**
       * The profile page for a specific user. Takes an accountId to identify the user.
       */
      UserProfile: "userProfile",
      /**
       * A dashboard in Jira. Takes a dashboardId to identify the dashboard.
       */
      Dashboard: "dashboard",
      /**
       * An issue in Jira. Takes an issueKey to identify the issue.
       */
      Issue: "issue",
      /**
       * The project settings details of a Jira project. Takes a projectKey to identify the project. Only accessible to administrators.
       */
      ProjectSettingsDetails: "projectSettingsDetails"
    };
  }
});

// node_modules/@forge/bridge/out/errors.js
var require_errors = __commonJS({
  "node_modules/@forge/bridge/out/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BridgeAPIError = void 0;
    var BridgeAPIError = class extends Error {
    };
    exports.BridgeAPIError = BridgeAPIError;
  }
});

// node_modules/@forge/bridge/out/bridge.js
var require_bridge = __commonJS({
  "node_modules/@forge/bridge/out/bridge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCallBridge = void 0;
    var errors_1 = require_errors();
    function isBridgeAvailable(bridge) {
      return !!(bridge === null || bridge === void 0 ? void 0 : bridge.callBridge);
    }
    var getCallBridge = () => {
      if (!isBridgeAvailable(globalThis.__bridge)) {
        throw new errors_1.BridgeAPIError(`
      Unable to establish a connection with the Custom UI bridge.
      If you are trying to run your app locally, Forge apps only work in the context of Atlassian products. Refer to https://go.atlassian.com/forge-tunneling-with-custom-ui for how to tunnel when using a local development server.
    `);
      }
      return globalThis.__bridge.callBridge;
    };
    exports.getCallBridge = getCallBridge;
  }
});

// node_modules/@forge/bridge/out/utils/index.js
var require_utils = __commonJS({
  "node_modules/@forge/bridge/out/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withRateLimiter = void 0;
    var errors_1 = require_errors();
    var withRateLimiter = (wrappedFn, maxOps, intervalInMs, exceededErrorMessage) => {
      let start = Date.now();
      let numOps = 0;
      return async (...args) => {
        const now = Date.now();
        const elapsed = now - start;
        if (elapsed > intervalInMs) {
          start = now;
          numOps = 0;
        }
        if (numOps >= maxOps) {
          throw new errors_1.BridgeAPIError(exceededErrorMessage || "Too many invocations.");
        }
        numOps = numOps + 1;
        return wrappedFn(...args);
      };
    };
    exports.withRateLimiter = withRateLimiter;
  }
});

// node_modules/@forge/bridge/out/invoke/invoke.js
var require_invoke = __commonJS({
  "node_modules/@forge/bridge/out/invoke/invoke.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.invoke = invoke;
    exports.makeInvoke = makeInvoke;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var utils_1 = require_utils();
    var callBridge = (0, bridge_1.getCallBridge)();
    var validatePayload = (payload) => {
      if (!payload)
        return;
      if (Object.values(payload).some((val) => typeof val === "function")) {
        throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
      }
    };
    var _invoke = async (functionKey, payload, metadata) => {
      if (typeof functionKey !== "string") {
        throw new errors_1.BridgeAPIError("functionKey must be a string!");
      }
      validatePayload(payload);
      return await callBridge("invoke", { functionKey, payload, metadata });
    };
    var limitedInvoke = (0, utils_1.withRateLimiter)(_invoke, 500, 1e3 * 25, "Resolver calls are rate limited at 500req/25s");
    function invoke(functionKey, payload, metadata) {
      return limitedInvoke(functionKey, payload, metadata);
    }
    function makeInvoke() {
      return invoke;
    }
  }
});

// node_modules/@forge/bridge/out/invoke/index.js
var require_invoke2 = __commonJS({
  "node_modules/@forge/bridge/out/invoke/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_invoke(), exports);
  }
});

// node_modules/@forge/bridge/out/invoke-endpoint/invoke-endpoint.js
var require_invoke_endpoint = __commonJS({
  "node_modules/@forge/bridge/out/invoke-endpoint/invoke-endpoint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvokeType = void 0;
    exports._invokeEndpointFn = _invokeEndpointFn;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var utils_1 = require_utils();
    var MAX_NUM_OPERATIONS = 500;
    var OPERATION_INTERVAL_SEC = 25;
    var OPERATION_INTERVAL_MS = 1e3 * OPERATION_INTERVAL_SEC;
    var InvokeType;
    (function(InvokeType2) {
      InvokeType2["REMOTE"] = "Remote";
      InvokeType2["SERVICE"] = "Container";
    })(InvokeType || (exports.InvokeType = InvokeType = {}));
    var callBridge = (0, bridge_1.getCallBridge)();
    var validatePayload = (payload) => {
      if (!payload)
        return;
      if (Object.values(payload).some((val) => typeof val === "function")) {
        throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
      }
    };
    var _setupInvokeEndpointFn = (invokeType) => async (input) => {
      validatePayload(input);
      const callBridgePayload = {
        ...input,
        invokeType: `ui-${invokeType.toLowerCase()}-fetch`
      };
      const bridgeResponse = await callBridge("invoke", callBridgePayload);
      const { success, payload, error } = bridgeResponse !== null && bridgeResponse !== void 0 ? bridgeResponse : {};
      const response = { ...success ? payload : error };
      if (response && response.headers) {
        for (const header in response.headers) {
          if (Array.isArray(response.headers[header])) {
            response.headers[header] = response.headers[header].join(",");
          }
        }
      }
      return response;
    };
    function _invokeEndpointFn(invokeType) {
      const invokeEndpointFn = _setupInvokeEndpointFn(invokeType);
      return (0, utils_1.withRateLimiter)(invokeEndpointFn, MAX_NUM_OPERATIONS, OPERATION_INTERVAL_MS, `${invokeType} invocation calls are rate limited at ${MAX_NUM_OPERATIONS}/${OPERATION_INTERVAL_SEC}s`);
    }
  }
});

// node_modules/@forge/bridge/out/invoke-endpoint/invoke-remote.js
var require_invoke_remote = __commonJS({
  "node_modules/@forge/bridge/out/invoke-endpoint/invoke-remote.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.invokeRemote = void 0;
    var invoke_endpoint_1 = require_invoke_endpoint();
    var invokeRemote = (input) => {
      const invokeEndpoint = (0, invoke_endpoint_1._invokeEndpointFn)(invoke_endpoint_1.InvokeType.REMOTE);
      return invokeEndpoint(input);
    };
    exports.invokeRemote = invokeRemote;
  }
});

// node_modules/@forge/bridge/out/invoke-endpoint/invoke-service.js
var require_invoke_service = __commonJS({
  "node_modules/@forge/bridge/out/invoke-endpoint/invoke-service.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.invokeService = void 0;
    var invoke_endpoint_1 = require_invoke_endpoint();
    var invokeService = (input) => {
      const invokeEndpoint = (0, invoke_endpoint_1._invokeEndpointFn)(invoke_endpoint_1.InvokeType.SERVICE);
      return invokeEndpoint(input);
    };
    exports.invokeService = invokeService;
  }
});

// node_modules/@forge/bridge/out/invoke-endpoint/index.js
var require_invoke_endpoint2 = __commonJS({
  "node_modules/@forge/bridge/out/invoke-endpoint/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_invoke_remote(), exports);
    tslib_1.__exportStar(require_invoke_service(), exports);
  }
});

// node_modules/@forge/bridge/out/view/submit.js
var require_submit = __commonJS({
  "node_modules/@forge/bridge/out/view/submit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.submit = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var callBridge = (0, bridge_1.getCallBridge)();
    var submit = async (payload) => {
      const success = await callBridge("submit", payload);
      if (success === false) {
        throw new errors_1.BridgeAPIError("this resource's view is not submittable.");
      }
    };
    exports.submit = submit;
  }
});

// node_modules/@forge/bridge/out/view/close.js
var require_close = __commonJS({
  "node_modules/@forge/bridge/out/view/close.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.close = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var callBridge = (0, bridge_1.getCallBridge)();
    var close = async (payload) => {
      try {
        const success = await callBridge("close", payload);
        if (success === false) {
          throw new errors_1.BridgeAPIError("this resource's view is not closable.");
        }
      } catch (e) {
        throw new errors_1.BridgeAPIError("this resource's view is not closable.");
      }
    };
    exports.close = close;
  }
});

// node_modules/@forge/bridge/out/view/open.js
var require_open = __commonJS({
  "node_modules/@forge/bridge/out/view/open.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.open = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var callBridge = (0, bridge_1.getCallBridge)();
    var open = async () => {
      try {
        const success = await callBridge("open");
        if (success === false) {
          throw new errors_1.BridgeAPIError("this resource's view is not openable.");
        }
      } catch (e) {
        throw new errors_1.BridgeAPIError("this resource's view is not openable.");
      }
    };
    exports.open = open;
  }
});

// node_modules/@forge/bridge/out/view/refresh.js
var require_refresh = __commonJS({
  "node_modules/@forge/bridge/out/view/refresh.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.refresh = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var callBridge = (0, bridge_1.getCallBridge)();
    var refresh = async (payload) => {
      const success = await callBridge("refresh", payload);
      if (success === false) {
        throw new errors_1.BridgeAPIError("this resource's view is not refreshable.");
      }
    };
    exports.refresh = refresh;
  }
});

// node_modules/@forge/bridge/out/view/createHistory.js
var require_createHistory = __commonJS({
  "node_modules/@forge/bridge/out/view/createHistory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createHistory = void 0;
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var createHistory = async () => {
      const history = await callBridge("createHistory");
      history.listen((location) => {
        history.location = location;
      });
      return history;
    };
    exports.createHistory = createHistory;
  }
});

// node_modules/@forge/i18n/out/constants.js
var require_constants = __commonJS({
  "node_modules/@forge/i18n/out/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FORGE_SUPPORTED_LOCALE_CODES = exports.I18N_BUNDLE_FOLDER_NAME = exports.I18N_INFO_FILE_NAME = void 0;
    exports.I18N_INFO_FILE_NAME = "i18n-info.json";
    exports.I18N_BUNDLE_FOLDER_NAME = "__LOCALES__";
    exports.FORGE_SUPPORTED_LOCALE_CODES = [
      "zh-CN",
      "zh-TW",
      "cs-CZ",
      "da-DK",
      "nl-NL",
      "en-US",
      "en-GB",
      "et-EE",
      "fi-FI",
      "fr-FR",
      "de-DE",
      "hu-HU",
      "is-IS",
      "it-IT",
      "ja-JP",
      "ko-KR",
      "no-NO",
      "pl-PL",
      "pt-BR",
      "pt-PT",
      "ro-RO",
      "ru-RU",
      "sk-SK",
      "tr-TR",
      "es-ES",
      "sv-SE"
    ];
  }
});

// node_modules/@forge/i18n/out/translationsGetter.js
var require_translationsGetter = __commonJS({
  "node_modules/@forge/i18n/out/translationsGetter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TranslationsGetter = exports.TranslationGetterError = void 0;
    var pushIfNotExists = (array, item) => {
      if (!array.includes(item)) {
        array.push(item);
      }
    };
    var TranslationGetterError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "TranslationGetterError";
      }
    };
    exports.TranslationGetterError = TranslationGetterError;
    var TranslationsGetter = class {
      resourcesAccessor;
      i18nInfoConfig = null;
      translationResources = /* @__PURE__ */ new Map();
      constructor(resourcesAccessor) {
        this.resourcesAccessor = resourcesAccessor;
      }
      async getTranslations(locale, options = { fallback: true }) {
        const i18nInfoConfig = await this.getI18nInfoConfig();
        const { fallback } = options;
        if (!fallback) {
          let translationResource;
          if (i18nInfoConfig.locales.includes(locale)) {
            translationResource = await this.getTranslationResource(locale);
          }
          return {
            translations: translationResource ?? null,
            locale
          };
        }
        for (const targetLocale of this.getLocaleLookupOrder(locale, i18nInfoConfig)) {
          const translationResource = await this.getTranslationResource(targetLocale);
          if (translationResource) {
            return {
              translations: translationResource,
              locale: targetLocale
            };
          }
        }
        return {
          translations: null,
          locale
        };
      }
      async getTranslationsByLocaleLookupOrder(locale) {
        const i18nInfoConfig = await this.getI18nInfoConfig();
        const lookupOrder = this.getLocaleLookupOrder(locale, i18nInfoConfig);
        return await Promise.all(lookupOrder.map(async (targetLocale) => {
          const translationResource = await this.getTranslationResource(targetLocale);
          return {
            locale: targetLocale,
            translations: translationResource
          };
        }));
      }
      reset() {
        this.i18nInfoConfig = null;
        this.translationResources.clear();
      }
      async getTranslationResource(locale) {
        let resource = this.translationResources.get(locale);
        if (!resource) {
          try {
            resource = await this.resourcesAccessor.getTranslationResource(locale);
            this.translationResources.set(locale, resource);
          } catch (error) {
            if (error instanceof TranslationGetterError) {
              throw error;
            }
            throw new TranslationGetterError(`Failed to get translation resource for locale: ${locale}`);
          }
        }
        return resource;
      }
      async getI18nInfoConfig() {
        if (!this.i18nInfoConfig) {
          try {
            this.i18nInfoConfig = await this.resourcesAccessor.getI18nInfoConfig();
          } catch (error) {
            if (error instanceof TranslationGetterError) {
              throw error;
            }
            throw new TranslationGetterError("Failed to get i18n info config");
          }
        }
        return this.i18nInfoConfig;
      }
      getLocaleLookupOrder(locale, config) {
        const { locales, fallback } = config;
        const lookupOrder = [locale];
        const fallbackLocales = fallback[locale];
        if (fallbackLocales && Array.isArray(fallbackLocales) && fallbackLocales.length > 0) {
          lookupOrder.push(...fallbackLocales);
        }
        pushIfNotExists(lookupOrder, config.fallback.default);
        return lookupOrder.filter((locale2) => locales.includes(locale2));
      }
    };
    exports.TranslationsGetter = TranslationsGetter;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    })();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key2) {
      return object == null ? void 0 : object[key2];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key2) {
      var value = getValue(object, key2);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key2) {
      var result = this.has(key2) && delete this.__data__[key2];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key2) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key2];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key2) ? data[key2] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key2) {
      var data = this.__data__;
      return nativeCreate ? data[key2] !== void 0 : hasOwnProperty.call(data, key2);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key2, value) {
      var data = this.__data__;
      this.size += this.has(key2) ? 0 : 1;
      data[key2] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key2) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key2)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key2) {
      var data = this.__data__, index = assocIndexOf(data, key2);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key2) {
      var data = this.__data__, index = assocIndexOf(data, key2);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key2) {
      return assocIndexOf(this.__data__, key2) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key2, value) {
      var data = this.__data__, index = assocIndexOf(data, key2);
      if (index < 0) {
        ++this.size;
        data.push([key2, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key2) {
      var data = map.__data__;
      return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key2) {
      var result = getMapData(this, key2)["delete"](key2);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key2) {
      return getMapData(this, key2).get(key2);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key2) {
      return getMapData(this, key2).has(key2);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key2, value) {
      var data = getMapData(this, key2), size = data.size;
      data.set(key2, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key2)) {
          return cache.get(key2);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key2, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key2) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key2;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/@forge/i18n/out/translationValueGetter.js
var require_translationValueGetter = __commonJS({
  "node_modules/@forge/i18n/out/translationValueGetter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTranslationValueFromContent = exports.getTranslationValue = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var get_1 = tslib_1.__importDefault(require_get());
    var getTranslationValue = (translationLookup, i18nKey, locale) => {
      const translation = translationLookup[locale];
      if (!translation) {
        return null;
      }
      return (0, exports.getTranslationValueFromContent)(translation, i18nKey);
    };
    exports.getTranslationValue = getTranslationValue;
    var getTranslationValueFromContent = (translationContent, i18nKey) => {
      let translationValue = translationContent[i18nKey];
      if (!translationValue) {
        const keyTokens = i18nKey.split(".");
        if (keyTokens.length > 1) {
          translationValue = (0, get_1.default)(translationContent, keyTokens, null);
        }
      }
      return typeof translationValue === "string" ? translationValue : null;
    };
    exports.getTranslationValueFromContent = getTranslationValueFromContent;
  }
});

// node_modules/@forge/i18n/out/translator.js
var require_translator = __commonJS({
  "node_modules/@forge/i18n/out/translator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Translator = void 0;
    var translationValueGetter_1 = require_translationValueGetter();
    var Translator = class {
      locale;
      translationsGetter;
      localeLookupOrderedTranslations = null;
      cache = /* @__PURE__ */ new Map();
      constructor(locale, translationsGetter) {
        this.locale = locale;
        this.translationsGetter = translationsGetter;
      }
      async init() {
        this.localeLookupOrderedTranslations = await this.translationsGetter.getTranslationsByLocaleLookupOrder(this.locale);
      }
      translate(i18nKey) {
        if (!this.localeLookupOrderedTranslations) {
          throw new Error("TranslationLookup not initialized");
        }
        let result = this.cache.get(i18nKey);
        if (result === void 0) {
          for (const { translations } of this.localeLookupOrderedTranslations) {
            const translationValue = (0, translationValueGetter_1.getTranslationValueFromContent)(translations, i18nKey);
            if (translationValue !== null) {
              result = translationValue;
              break;
            }
          }
          result = result ?? null;
          this.cache.set(i18nKey, result);
        }
        return result;
      }
    };
    exports.Translator = Translator;
  }
});

// node_modules/@forge/i18n/out/ensureLocale.js
var require_ensureLocale = __commonJS({
  "node_modules/@forge/i18n/out/ensureLocale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ensureLocale = void 0;
    var constants_1 = require_constants();
    var forgeSupportedLocaleCodesSet = new Set(constants_1.FORGE_SUPPORTED_LOCALE_CODES);
    var localeFallbacks = {
      "en-UK": "en-GB",
      "nb-NO": "no-NO"
    };
    var languageToLocaleCodeMap = constants_1.FORGE_SUPPORTED_LOCALE_CODES.reduce((agg, code) => {
      const [lng] = code.split("-");
      if (!agg[lng]) {
        agg[lng] = code;
      }
      return agg;
    }, {
      nb: "no-NO",
      pt: "pt-PT"
    });
    var ensureLocale = (rawLocale) => {
      const locale = rawLocale.replace("_", "-");
      if (forgeSupportedLocaleCodesSet.has(locale)) {
        return locale;
      }
      return languageToLocaleCodeMap[locale] ?? localeFallbacks[locale] ?? null;
    };
    exports.ensureLocale = ensureLocale;
  }
});

// node_modules/@forge/i18n/out/moduleI18nHelper.js
var require_moduleI18nHelper = __commonJS({
  "node_modules/@forge/i18n/out/moduleI18nHelper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractI18nPropertiesFromModules = exports.extractI18nKeysFromModules = exports.getI18nSupportedModuleEntries = void 0;
    var isObject = (value) => {
      return typeof value === "object" && value !== null && !Array.isArray(value);
    };
    var isI18nValue = (value) => {
      return typeof value?.i18n === "string";
    };
    var isConnectModuleKey = (moduleKey) => moduleKey.startsWith("connect-");
    var isCoreModuleKey = (moduleKey) => moduleKey.startsWith("core:");
    var getI18nKeysFromObject = (obj) => {
      const visited = /* @__PURE__ */ new Set();
      const visit = (value, i18nPath) => {
        if (!isObject(value) || visited.has(value)) {
          return [];
        }
        visited.add(value);
        return Object.entries(value).flatMap(([propKey, propValue]) => {
          const currentPath = [...i18nPath, propKey];
          if (isI18nValue(propValue)) {
            return [{ propertyPath: currentPath, key: propValue.i18n }];
          } else if (Array.isArray(propValue)) {
            return propValue.flatMap((item) => visit(item, currentPath));
          }
          return visit(propValue, currentPath);
        });
      };
      return visit(obj, []);
    };
    var getI18nSupportedModuleEntries = (modules) => {
      return Object.entries(modules).flatMap(([moduleKey, moduleEntries]) => {
        if (!isConnectModuleKey(moduleKey) && !isCoreModuleKey(moduleKey) && moduleEntries && Array.isArray(moduleEntries) && moduleEntries.length > 0) {
          return moduleEntries.map((moduleEntry) => [moduleEntry, moduleKey]);
        }
        return [];
      });
    };
    exports.getI18nSupportedModuleEntries = getI18nSupportedModuleEntries;
    var extractI18nKeysFromModules = (modules) => {
      const i18nKeys = /* @__PURE__ */ new Set();
      for (const moduleEntry of (0, exports.getI18nSupportedModuleEntries)(modules)) {
        const i18nKeysForEntryValue = getI18nKeysFromObject(moduleEntry[0]);
        for (const { key: key2 } of i18nKeysForEntryValue) {
          i18nKeys.add(key2);
        }
      }
      return i18nKeys.size > 0 ? Array.from(i18nKeys) : [];
    };
    exports.extractI18nKeysFromModules = extractI18nKeysFromModules;
    var extractI18nPropertiesFromModules = (modules) => {
      const moduleI18nProperties = [];
      for (const moduleEntry of (0, exports.getI18nSupportedModuleEntries)(modules)) {
        const i18nKeysForEntryValue = getI18nKeysFromObject(moduleEntry[0]);
        for (const i18nObj of i18nKeysForEntryValue) {
          moduleI18nProperties.push({ moduleName: moduleEntry[1], ...i18nObj });
        }
      }
      return moduleI18nProperties;
    };
    exports.extractI18nPropertiesFromModules = extractI18nPropertiesFromModules;
  }
});

// node_modules/@forge/i18n/out/types.js
var require_types = __commonJS({
  "node_modules/@forge/i18n/out/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@forge/i18n/out/index.js
var require_out = __commonJS({
  "node_modules/@forge/i18n/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getI18nSupportedModuleEntries = exports.extractI18nPropertiesFromModules = exports.extractI18nKeysFromModules = exports.getTranslationValue = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_constants(), exports);
    tslib_1.__exportStar(require_translationsGetter(), exports);
    tslib_1.__exportStar(require_translator(), exports);
    tslib_1.__exportStar(require_ensureLocale(), exports);
    var translationValueGetter_1 = require_translationValueGetter();
    Object.defineProperty(exports, "getTranslationValue", { enumerable: true, get: function() {
      return translationValueGetter_1.getTranslationValue;
    } });
    var moduleI18nHelper_1 = require_moduleI18nHelper();
    Object.defineProperty(exports, "extractI18nKeysFromModules", { enumerable: true, get: function() {
      return moduleI18nHelper_1.extractI18nKeysFromModules;
    } });
    Object.defineProperty(exports, "extractI18nPropertiesFromModules", { enumerable: true, get: function() {
      return moduleI18nHelper_1.extractI18nPropertiesFromModules;
    } });
    Object.defineProperty(exports, "getI18nSupportedModuleEntries", { enumerable: true, get: function() {
      return moduleI18nHelper_1.getI18nSupportedModuleEntries;
    } });
    tslib_1.__exportStar(require_types(), exports);
  }
});

// node_modules/@forge/bridge/out/view/getContext.js
var require_getContext = __commonJS({
  "node_modules/@forge/bridge/out/view/getContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getContext = void 0;
    var bridge_1 = require_bridge();
    var i18n_1 = require_out();
    var callBridge = (0, bridge_1.getCallBridge)();
    var getContext = async () => {
      var _a;
      const context = await callBridge("getContext");
      const locale = context === null || context === void 0 ? void 0 : context.locale;
      if (locale) {
        context.locale = (_a = (0, i18n_1.ensureLocale)(locale)) !== null && _a !== void 0 ? _a : locale;
      }
      return context;
    };
    exports.getContext = getContext;
  }
});

// node_modules/@forge/bridge/out/view/changeWindowTitle.js
var require_changeWindowTitle = __commonJS({
  "node_modules/@forge/bridge/out/view/changeWindowTitle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.changeWindowTitle = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var callBridge = (0, bridge_1.getCallBridge)();
    var changeWindowTitle = async (title) => {
      try {
        await callBridge("changeWindowTitle", title);
      } catch (e) {
        throw new errors_1.BridgeAPIError("the window title wasn't changed due to error.");
      }
    };
    exports.changeWindowTitle = changeWindowTitle;
  }
});

// node_modules/@forge/bridge/out/view/theme.js
var require_theme = __commonJS({
  "node_modules/@forge/bridge/out/view/theme.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.theme = void 0;
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    exports.theme = {
      enable: () => callBridge("enableTheming")
    };
  }
});

// node_modules/@forge/bridge/out/utils/blobParser.js
var require_blobParser = __commonJS({
  "node_modules/@forge/bridge/out/utils/blobParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.blobToBase64 = exports.base64ToBlob = void 0;
    var base64ToBlob = (b64string, mimeType) => {
      if (!b64string) {
        return null;
      }
      const base64Data = b64string.includes(";base64") ? b64string.split(",")[1] : b64string;
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: mimeType });
    };
    exports.base64ToBlob = base64ToBlob;
    var blobToBase64 = (blob) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };
    exports.blobToBase64 = blobToBase64;
  }
});

// node_modules/@forge/bridge/out/events/serialiseBlob.js
var require_serialiseBlob = __commonJS({
  "node_modules/@forge/bridge/out/events/serialiseBlob.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.containsSerialisedBlobs = exports.containsBlobs = exports.deserialiseBlobsInPayload = exports.serialiseBlobsInPayload = void 0;
    var blobParser_1 = require_blobParser();
    var isPlainObject = (value) => {
      if (typeof value !== "object" || value === null)
        return false;
      if (Object.prototype.toString.call(value) !== "[object Object]")
        return false;
      const proto = Object.getPrototypeOf(value);
      if (proto === null)
        return true;
      const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
    };
    var blobToBase64WithMetadata = async (blob) => {
      const base64Data = await (0, blobParser_1.blobToBase64)(blob);
      return {
        data: base64Data,
        type: blob.type
      };
    };
    var base64WithMetadataToBlob = (metadata) => {
      return (0, blobParser_1.base64ToBlob)(metadata.data, metadata.type);
    };
    var serialiseBlobsInPayload = async (payload) => {
      if (payload instanceof Blob) {
        const blobData = await blobToBase64WithMetadata(payload);
        return {
          ...blobData,
          // Custom property used to identify serialized blob data for deserialization
          __isBlobData: true
        };
      }
      if (Array.isArray(payload)) {
        return Promise.all(payload.map((item) => (0, exports.serialiseBlobsInPayload)(item)));
      }
      if (payload && isPlainObject(payload)) {
        const entries = await Promise.all(Object.entries(payload).map(async ([key2, value]) => [key2, await (0, exports.serialiseBlobsInPayload)(value)]));
        return Object.fromEntries(entries);
      }
      return payload;
    };
    exports.serialiseBlobsInPayload = serialiseBlobsInPayload;
    var deserialiseBlobsInPayload = (payload) => {
      if (payload && isPlainObject(payload) && "__isBlobData" in payload) {
        const typedData = payload;
        return base64WithMetadataToBlob({
          data: typedData.data,
          type: typedData.type
        });
      }
      if (Array.isArray(payload)) {
        return payload.map((item) => (0, exports.deserialiseBlobsInPayload)(item));
      }
      if (payload && isPlainObject(payload)) {
        const result = {};
        for (const [key2, value] of Object.entries(payload)) {
          result[key2] = (0, exports.deserialiseBlobsInPayload)(value);
        }
        return result;
      }
      return payload;
    };
    exports.deserialiseBlobsInPayload = deserialiseBlobsInPayload;
    var containsBlobs = (payload) => {
      if (payload instanceof Blob) {
        return true;
      }
      if (Array.isArray(payload)) {
        return payload.some((item) => (0, exports.containsBlobs)(item));
      }
      if (payload && isPlainObject(payload)) {
        return Object.values(payload).some((value) => (0, exports.containsBlobs)(value));
      }
      return false;
    };
    exports.containsBlobs = containsBlobs;
    var containsSerialisedBlobs = (payload) => {
      if (payload && isPlainObject(payload) && "__isBlobData" in payload) {
        return true;
      }
      if (Array.isArray(payload)) {
        return payload.some((item) => (0, exports.containsSerialisedBlobs)(item));
      }
      if (payload && isPlainObject(payload)) {
        return Object.values(payload).some((value) => (0, exports.containsSerialisedBlobs)(value));
      }
      return false;
    };
    exports.containsSerialisedBlobs = containsSerialisedBlobs;
  }
});

// node_modules/@forge/bridge/out/events/events.js
var require_events = __commonJS({
  "node_modules/@forge/bridge/out/events/events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.events = void 0;
    var bridge_1 = require_bridge();
    var serialiseBlob_1 = require_serialiseBlob();
    var callBridge = (0, bridge_1.getCallBridge)();
    var wrapCallback = (callback) => {
      return (payload) => {
        let newPayload = payload;
        if ((0, serialiseBlob_1.containsSerialisedBlobs)(payload)) {
          newPayload = (0, serialiseBlob_1.deserialiseBlobsInPayload)(payload);
        }
        return callback(newPayload);
      };
    };
    var emit = async (event, payload) => {
      let newPayload = payload;
      if ((0, serialiseBlob_1.containsBlobs)(payload)) {
        newPayload = await (0, serialiseBlob_1.serialiseBlobsInPayload)(payload);
      }
      return callBridge("emit", { event, payload: newPayload });
    };
    var on = (event, callback) => {
      return callBridge("on", { event, callback: wrapCallback(callback) });
    };
    var emitPublic = async (event, payload) => {
      let newPayload = payload;
      if ((0, serialiseBlob_1.containsBlobs)(payload)) {
        newPayload = await (0, serialiseBlob_1.serialiseBlobsInPayload)(payload);
      }
      return callBridge("emitPublic", { event, payload: newPayload });
    };
    var onPublic = (event, callback) => {
      return callBridge("onPublic", { event, callback: wrapCallback(callback) });
    };
    exports.events = {
      emit,
      on,
      emitPublic,
      onPublic
    };
  }
});

// node_modules/@forge/bridge/out/view/emitReadyEvent.js
var require_emitReadyEvent = __commonJS({
  "node_modules/@forge/bridge/out/view/emitReadyEvent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.emitReadyEvent = void 0;
    var events_1 = require_events();
    var view_1 = require_view();
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var EXTENSION_READY = "EXTENSION_READY";
    var emitReadyEvent = async () => {
      const context = await view_1.view.getContext();
      await events_1.events.emit(EXTENSION_READY, {
        localId: context.localId
      });
      try {
        await callBridge("emitReadyEvent");
      } catch {
      }
    };
    exports.emitReadyEvent = emitReadyEvent;
  }
});

// node_modules/iframe-resizer/js/iframeResizer.js
var require_iframeResizer = __commonJS({
  "node_modules/iframe-resizer/js/iframeResizer.js"(exports, module) {
    console.info(`
IFRAME-RESIZER

Iframe-Resizer 5 is now available via the following two packages:

 * @iframe-resizer/parent
 * @iframe-resizer/child

Additionally their are also new versions of iframe-resizer for React, Vue, and jQuery.

Version 5 of iframe-resizer has been extensively rewritten to use modern browser APIs, which has enabled significantly better performance and greater accuracy in the detection of content resizing events.

Please see https://iframe-resizer.com/upgrade for more details.
`);
    (function(undefined2) {
      if (typeof window === "undefined") return;
      var count = 0, destroyObserver, logEnabled = false, hiddenCheckEnabled = false, msgHeader = "message", msgHeaderLen = msgHeader.length, msgId = "[iFrameSizer]", msgIdLen = msgId.length, pagePosition = null, requestAnimationFrame = window.requestAnimationFrame, resetRequiredMethods = Object.freeze({
        max: 1,
        scroll: 1,
        bodyScroll: 1,
        documentElementScroll: 1
      }), settings = {}, timer = null, defaults = Object.freeze({
        autoResize: true,
        bodyBackground: null,
        bodyMargin: null,
        bodyMarginV1: 8,
        bodyPadding: null,
        checkOrigin: true,
        inPageLinks: false,
        enablePublicMethods: true,
        heightCalculationMethod: "bodyOffset",
        id: "iFrameResizer",
        interval: 32,
        license: "1jqr0si6pnt",
        log: false,
        maxHeight: Infinity,
        maxWidth: Infinity,
        minHeight: 0,
        minWidth: 0,
        mouseEvents: true,
        resizeFrom: "parent",
        scrolling: false,
        sizeHeight: true,
        sizeWidth: false,
        warningTimeout: 5e3,
        tolerance: 0,
        widthCalculationMethod: "scroll",
        onClose: function() {
          return true;
        },
        onClosed: function() {
        },
        onInit: function() {
        },
        onMessage: function() {
          warn("onMessage function not defined");
        },
        onMouseEnter: function() {
        },
        onMouseLeave: function() {
        },
        onResized: function() {
        },
        onScroll: function() {
          return true;
        }
      });
      function getMutationObserver() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }
      function addEventListener(el, evt, func) {
        el.addEventListener(evt, func, false);
      }
      function removeEventListener(el, evt, func) {
        el.removeEventListener(evt, func, false);
      }
      function setupRequestAnimationFrame() {
        var vendors = ["moz", "webkit", "o", "ms"];
        var x;
        for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
          requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
        }
        if (requestAnimationFrame) {
          requestAnimationFrame = requestAnimationFrame.bind(window);
        } else {
          log("setup", "RequestAnimationFrame not supported");
        }
      }
      function getMyID(iframeId) {
        var retStr = "Host page: " + iframeId;
        if (window.top !== window.self) {
          retStr = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + iframeId : "Nested host page: " + iframeId;
        }
        return retStr;
      }
      function formatLogHeader(iframeId) {
        return msgId + "[" + getMyID(iframeId) + "]";
      }
      function isLogEnabled(iframeId) {
        return settings[iframeId] ? settings[iframeId].log : logEnabled;
      }
      function log(iframeId, msg) {
        output("log", iframeId, msg, isLogEnabled(iframeId));
      }
      function info(iframeId, msg) {
        output("info", iframeId, msg, isLogEnabled(iframeId));
      }
      function warn(iframeId, msg) {
        output("warn", iframeId, msg, true);
      }
      function output(type, iframeId, msg, enabled) {
        if (true === enabled && "object" === typeof window.console) {
          console[type](formatLogHeader(iframeId), msg);
        }
      }
      function iFrameListener(event) {
        function resizeIFrame() {
          function resize() {
            setSize(messageData);
            setPagePosition(iframeId);
            on("onResized", messageData);
          }
          ensureInRange("Height");
          ensureInRange("Width");
          syncResize(resize, messageData, "init");
        }
        function processMsg() {
          var data = msg.slice(msgIdLen).split(":");
          var height = data[1] ? parseInt(data[1], 10) : 0;
          var iframe = settings[data[0]] && settings[data[0]].iframe;
          var compStyle = getComputedStyle(iframe);
          return {
            iframe,
            id: data[0],
            height: height + getPaddingEnds(compStyle) + getBorderEnds(compStyle),
            width: data[2],
            type: data[3]
          };
        }
        function getPaddingEnds(compStyle) {
          if (compStyle.boxSizing !== "border-box") {
            return 0;
          }
          var top = compStyle.paddingTop ? parseInt(compStyle.paddingTop, 10) : 0;
          var bot = compStyle.paddingBottom ? parseInt(compStyle.paddingBottom, 10) : 0;
          return top + bot;
        }
        function getBorderEnds(compStyle) {
          if (compStyle.boxSizing !== "border-box") {
            return 0;
          }
          var top = compStyle.borderTopWidth ? parseInt(compStyle.borderTopWidth, 10) : 0;
          var bot = compStyle.borderBottomWidth ? parseInt(compStyle.borderBottomWidth, 10) : 0;
          return top + bot;
        }
        function ensureInRange(Dimension) {
          var max = Number(settings[iframeId]["max" + Dimension]), min = Number(settings[iframeId]["min" + Dimension]), dimension = Dimension.toLowerCase(), size = Number(messageData[dimension]);
          log(iframeId, "Checking " + dimension + " is in range " + min + "-" + max);
          if (size < min) {
            size = min;
            log(iframeId, "Set " + dimension + " to min value");
          }
          if (size > max) {
            size = max;
            log(iframeId, "Set " + dimension + " to max value");
          }
          messageData[dimension] = "" + size;
        }
        function isMessageFromIFrame() {
          function checkAllowedOrigin() {
            function checkList() {
              var i = 0, retCode = false;
              log(
                iframeId,
                "Checking connection is from allowed list of origins: " + checkOrigin
              );
              for (; i < checkOrigin.length; i++) {
                if (checkOrigin[i] === origin) {
                  retCode = true;
                  break;
                }
              }
              return retCode;
            }
            function checkSingle() {
              var remoteHost = settings[iframeId] && settings[iframeId].remoteHost;
              log(iframeId, "Checking connection is from: " + remoteHost);
              return origin === remoteHost;
            }
            return checkOrigin.constructor === Array ? checkList() : checkSingle();
          }
          var origin = event.origin, checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin;
          if (checkOrigin && "" + origin !== "null" && !checkAllowedOrigin()) {
            throw new Error(
              "Unexpected message received from: " + origin + " for " + messageData.iframe.id + ". Message was: " + event.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
            );
          }
          return true;
        }
        function isMessageForUs() {
          return msgId === ("" + msg).slice(0, msgIdLen) && msg.slice(msgIdLen).split(":")[0] in settings;
        }
        function isMessageFromMetaParent() {
          var retCode = messageData.type in { true: 1, false: 1, undefined: 1 };
          if (retCode) {
            log(iframeId, "Ignoring init message from meta parent page");
          }
          return retCode;
        }
        function getMsgBody(offset) {
          return msg.slice(msg.indexOf(":") + msgHeaderLen + offset);
        }
        function forwardMsgFromIFrame(msgBody) {
          log(
            iframeId,
            "onMessage passed: {iframe: " + messageData.iframe.id + ", message: " + msgBody + "}"
          );
          on("onMessage", {
            iframe: messageData.iframe,
            message: JSON.parse(msgBody)
          });
          log(iframeId, "--");
        }
        function getPageInfo() {
          var bodyPosition = document.body.getBoundingClientRect(), iFramePosition = messageData.iframe.getBoundingClientRect();
          return JSON.stringify({
            iframeHeight: iFramePosition.height,
            iframeWidth: iFramePosition.width,
            clientHeight: Math.max(
              document.documentElement.clientHeight,
              window.innerHeight || 0
            ),
            clientWidth: Math.max(
              document.documentElement.clientWidth,
              window.innerWidth || 0
            ),
            offsetTop: parseInt(iFramePosition.top - bodyPosition.top, 10),
            offsetLeft: parseInt(iFramePosition.left - bodyPosition.left, 10),
            scrollTop: window.pageYOffset,
            scrollLeft: window.pageXOffset,
            documentHeight: document.documentElement.clientHeight,
            documentWidth: document.documentElement.clientWidth,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
          });
        }
        function sendPageInfoToIframe(iframe, iframeId2) {
          function debouncedTrigger() {
            trigger("Send Page Info", "pageInfo:" + getPageInfo(), iframe, iframeId2);
          }
          debounceFrameEvents(debouncedTrigger, 32, iframeId2);
        }
        function startPageInfoMonitor() {
          function setListener(type, func) {
            function sendPageInfo() {
              if (settings[id]) {
                sendPageInfoToIframe(settings[id].iframe, id);
              } else {
                stop();
              }
            }
            ;
            ["scroll", "resize"].forEach(function(evt) {
              log(id, type + evt + " listener for sendPageInfo");
              func(window, evt, sendPageInfo);
            });
          }
          function stop() {
            setListener("Remove ", removeEventListener);
          }
          function start() {
            setListener("Add ", addEventListener);
          }
          var id = iframeId;
          start();
          if (settings[id]) {
            settings[id].stopPageInfo = stop;
          }
        }
        function stopPageInfoMonitor() {
          if (settings[iframeId] && settings[iframeId].stopPageInfo) {
            settings[iframeId].stopPageInfo();
            delete settings[iframeId].stopPageInfo;
          }
        }
        function checkIFrameExists() {
          var retBool = true;
          if (null === messageData.iframe) {
            warn(iframeId, "IFrame (" + messageData.id + ") not found");
            retBool = false;
          }
          return retBool;
        }
        function getElementPosition(target) {
          var iFramePosition = target.getBoundingClientRect();
          getPagePosition(iframeId);
          return {
            x: Math.floor(Number(iFramePosition.left) + Number(pagePosition.x)),
            y: Math.floor(Number(iFramePosition.top) + Number(pagePosition.y))
          };
        }
        function scrollRequestFromChild(addOffset) {
          function reposition() {
            pagePosition = newPosition;
            scrollTo();
            log(iframeId, "--");
          }
          function calcOffset() {
            return {
              x: Number(messageData.width) + offset.x,
              y: Number(messageData.height) + offset.y
            };
          }
          function scrollParent() {
            if (window.parentIFrame) {
              window.parentIFrame["scrollTo" + (addOffset ? "Offset" : "")](
                newPosition.x,
                newPosition.y
              );
            } else {
              warn(
                iframeId,
                "Unable to scroll to requested position, window.parentIFrame not found"
              );
            }
          }
          var offset = addOffset ? getElementPosition(messageData.iframe) : { x: 0, y: 0 }, newPosition = calcOffset();
          log(
            iframeId,
            "Reposition requested from iFrame (offset x:" + offset.x + " y:" + offset.y + ")"
          );
          if (window.top === window.self) {
            reposition();
          } else {
            scrollParent();
          }
        }
        function scrollTo() {
          if (false === on("onScroll", pagePosition)) {
            unsetPagePosition();
          } else {
            setPagePosition(iframeId);
          }
        }
        function findTarget(location) {
          function jumpToTarget() {
            var jumpPosition = getElementPosition(target);
            log(
              iframeId,
              "Moving to in page link (#" + hash + ") at x: " + jumpPosition.x + " y: " + jumpPosition.y
            );
            pagePosition = {
              x: jumpPosition.x,
              y: jumpPosition.y
            };
            scrollTo();
            log(iframeId, "--");
          }
          function jumpToParent() {
            if (window.parentIFrame) {
              window.parentIFrame.moveToAnchor(hash);
            } else {
              log(
                iframeId,
                "In page link #" + hash + " not found and window.parentIFrame not found"
              );
            }
          }
          var hash = location.split("#")[1] || "", hashData = decodeURIComponent(hash), target = document.getElementById(hashData) || document.getElementsByName(hashData)[0];
          if (target) {
            jumpToTarget();
          } else if (window.top === window.self) {
            log(iframeId, "In page link #" + hash + " not found");
          } else {
            jumpToParent();
          }
        }
        function onMouse(event2) {
          var mousePos = {};
          if (Number(messageData.width) === 0 && Number(messageData.height) === 0) {
            var data = getMsgBody(9).split(":");
            mousePos = {
              x: data[1],
              y: data[0]
            };
          } else {
            mousePos = {
              x: messageData.width,
              y: messageData.height
            };
          }
          on(event2, {
            iframe: messageData.iframe,
            screenX: Number(mousePos.x),
            screenY: Number(mousePos.y),
            type: messageData.type
          });
        }
        function on(funcName, val) {
          return chkEvent(iframeId, funcName, val);
        }
        function actionMsg() {
          if (settings[iframeId] && settings[iframeId].firstRun) firstRun();
          switch (messageData.type) {
            case "close": {
              closeIFrame(messageData.iframe);
              break;
            }
            case "message": {
              forwardMsgFromIFrame(getMsgBody(6));
              break;
            }
            case "mouseenter": {
              onMouse("onMouseEnter");
              break;
            }
            case "mouseleave": {
              onMouse("onMouseLeave");
              break;
            }
            case "autoResize": {
              settings[iframeId].autoResize = JSON.parse(getMsgBody(9));
              break;
            }
            case "scrollTo": {
              scrollRequestFromChild(false);
              break;
            }
            case "scrollToOffset": {
              scrollRequestFromChild(true);
              break;
            }
            case "pageInfo": {
              sendPageInfoToIframe(
                settings[iframeId] && settings[iframeId].iframe,
                iframeId
              );
              startPageInfoMonitor();
              break;
            }
            case "pageInfoStop": {
              stopPageInfoMonitor();
              break;
            }
            case "inPageLink": {
              findTarget(getMsgBody(9));
              break;
            }
            case "reset": {
              resetIFrame(messageData);
              break;
            }
            case "init": {
              resizeIFrame();
              on("onInit", messageData.iframe);
              break;
            }
            default: {
              if (Number(messageData.width) === 0 && Number(messageData.height) === 0) {
                warn(
                  "Unsupported message received (" + messageData.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"
                );
              } else {
                resizeIFrame();
              }
            }
          }
        }
        function hasSettings(iframeId2) {
          var retBool = true;
          if (!settings[iframeId2]) {
            retBool = false;
            warn(
              messageData.type + " No settings for " + iframeId2 + ". Message was: " + msg
            );
          }
          return retBool;
        }
        function iFrameReadyMsgReceived() {
          for (var iframeId2 in settings) {
            trigger(
              "iFrame requested init",
              createOutgoingMsg(iframeId2),
              settings[iframeId2].iframe,
              iframeId2
            );
          }
        }
        function firstRun() {
          if (settings[iframeId]) {
            settings[iframeId].firstRun = false;
          }
        }
        var msg = event.data, messageData = {}, iframeId = null;
        if ("[iFrameResizerChild]Ready" === msg) {
          iFrameReadyMsgReceived();
        } else if (isMessageForUs()) {
          messageData = processMsg();
          iframeId = messageData.id;
          if (settings[iframeId]) {
            settings[iframeId].loaded = true;
          }
          if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
            log(iframeId, "Received: " + msg);
            if (checkIFrameExists() && isMessageFromIFrame()) {
              actionMsg();
            }
          }
        } else {
          info(iframeId, "Ignored: " + msg);
        }
      }
      function chkEvent(iframeId, funcName, val) {
        var func = null, retVal = null;
        if (settings[iframeId]) {
          func = settings[iframeId][funcName];
          if ("function" === typeof func) {
            retVal = func(val);
          } else {
            throw new TypeError(
              funcName + " on iFrame[" + iframeId + "] is not a function"
            );
          }
        }
        return retVal;
      }
      function removeIframeListeners(iframe) {
        var iframeId = iframe.id;
        delete settings[iframeId];
      }
      function closeIFrame(iframe) {
        var iframeId = iframe.id;
        if (chkEvent(iframeId, "onClose", iframeId) === false) {
          log(iframeId, "Close iframe cancelled by onClose event");
          return;
        }
        log(iframeId, "Removing iFrame: " + iframeId);
        try {
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        } catch (error) {
          warn(error);
        }
        chkEvent(iframeId, "onClosed", iframeId);
        log(iframeId, "--");
        removeIframeListeners(iframe);
        if (destroyObserver) {
          destroyObserver.disconnect();
          destroyObserver = null;
        }
      }
      function getPagePosition(iframeId) {
        if (null === pagePosition) {
          pagePosition = {
            x: window.pageXOffset === undefined2 ? document.documentElement.scrollLeft : window.pageXOffset,
            y: window.pageYOffset === undefined2 ? document.documentElement.scrollTop : window.pageYOffset
          };
          log(
            iframeId,
            "Get page position: " + pagePosition.x + "," + pagePosition.y
          );
        }
      }
      function setPagePosition(iframeId) {
        if (null !== pagePosition) {
          window.scrollTo(pagePosition.x, pagePosition.y);
          log(
            iframeId,
            "Set page position: " + pagePosition.x + "," + pagePosition.y
          );
          unsetPagePosition();
        }
      }
      function unsetPagePosition() {
        pagePosition = null;
      }
      function resetIFrame(messageData) {
        function reset() {
          setSize(messageData);
          trigger("reset", "reset", messageData.iframe, messageData.id);
        }
        log(
          messageData.id,
          "Size reset requested by " + ("init" === messageData.type ? "host page" : "iFrame")
        );
        getPagePosition(messageData.id);
        syncResize(reset, messageData, "reset");
      }
      function setSize(messageData) {
        function setDimension(dimension) {
          if (!messageData.id) {
            log("undefined", "messageData id not set");
            return;
          }
          messageData.iframe.style[dimension] = messageData[dimension] + "px";
          log(
            messageData.id,
            "IFrame (" + iframeId + ") " + dimension + " set to " + messageData[dimension] + "px"
          );
        }
        function chkZero(dimension) {
          if (!hiddenCheckEnabled && "0" === messageData[dimension]) {
            hiddenCheckEnabled = true;
            log(iframeId, "Hidden iFrame detected, creating visibility listener");
            fixHiddenIFrames();
          }
        }
        function processDimension(dimension) {
          setDimension(dimension);
          chkZero(dimension);
        }
        var iframeId = messageData.iframe.id;
        if (settings[iframeId]) {
          if (settings[iframeId].sizeHeight) {
            processDimension("height");
          }
          if (settings[iframeId].sizeWidth) {
            processDimension("width");
          }
        }
      }
      function syncResize(func, messageData, doNotSync) {
        if (doNotSync !== messageData.type && requestAnimationFrame && // including check for jasmine because had trouble getting spy to work in unit test using requestAnimationFrame
        !window.jasmine) {
          log(messageData.id, "Requesting animation frame");
          requestAnimationFrame(func);
        } else {
          func();
        }
      }
      function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
        function postMessageToIFrame() {
          var target = settings[id] && settings[id].targetOrigin;
          log(
            id,
            "[" + calleeMsg + "] Sending msg to iframe[" + id + "] (" + msg + ") targetOrigin: " + target
          );
          iframe.contentWindow.postMessage(msgId + msg, target);
        }
        function iFrameNotFound() {
          warn(id, "[" + calleeMsg + "] IFrame(" + id + ") not found");
        }
        function chkAndSend() {
          if (iframe && "contentWindow" in iframe && null !== iframe.contentWindow) {
            postMessageToIFrame();
          } else {
            iFrameNotFound();
          }
        }
        function warnOnNoResponse() {
          function warning() {
            if (settings[id] && !settings[id].loaded && !errorShown) {
              errorShown = true;
              warn(
                id,
                "IFrame has not responded within " + settings[id].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
              );
            }
          }
          if (!!noResponseWarning && settings[id] && !!settings[id].warningTimeout) {
            settings[id].msgTimeout = setTimeout(
              warning,
              settings[id].warningTimeout
            );
          }
        }
        var errorShown = false;
        id = id || iframe.id;
        if (settings[id]) {
          chkAndSend();
          warnOnNoResponse();
        }
      }
      function createOutgoingMsg(iframeId) {
        return iframeId + ":" + settings[iframeId].bodyMarginV1 + ":" + settings[iframeId].sizeWidth + ":" + settings[iframeId].log + ":" + settings[iframeId].interval + ":" + settings[iframeId].enablePublicMethods + ":" + settings[iframeId].autoResize + ":" + settings[iframeId].bodyMargin + ":" + settings[iframeId].heightCalculationMethod + ":" + settings[iframeId].bodyBackground + ":" + settings[iframeId].bodyPadding + ":" + settings[iframeId].tolerance + ":" + settings[iframeId].inPageLinks + ":" + settings[iframeId].resizeFrom + ":" + settings[iframeId].widthCalculationMethod + ":" + settings[iframeId].mouseEvents;
      }
      function isNumber(value) {
        return typeof value === "number";
      }
      function setupIFrame(iframe, options) {
        function setLimits() {
          function addStyle(style) {
            var styleValue = settings[iframeId][style];
            if (Infinity !== styleValue && 0 !== styleValue) {
              iframe.style[style] = isNumber(styleValue) ? styleValue + "px" : styleValue;
              log(iframeId, "Set " + style + " = " + iframe.style[style]);
            }
          }
          function chkMinMax(dimension) {
            if (settings[iframeId]["min" + dimension] > settings[iframeId]["max" + dimension]) {
              throw new Error(
                "Value for min" + dimension + " can not be greater than max" + dimension
              );
            }
          }
          chkMinMax("Height");
          chkMinMax("Width");
          addStyle("maxHeight");
          addStyle("minHeight");
          addStyle("maxWidth");
          addStyle("minWidth");
        }
        function newId() {
          var id = options && options.id || defaults.id + count++;
          if (null !== document.getElementById(id)) {
            id += count++;
          }
          return id;
        }
        function ensureHasId(iframeId2) {
          if (typeof iframeId2 !== "string") {
            throw new TypeError("Invaild id for iFrame. Expected String");
          }
          if ("" === iframeId2) {
            iframe.id = iframeId2 = newId();
            logEnabled = (options || {}).log;
            log(
              iframeId2,
              "Added missing iframe ID: " + iframeId2 + " (" + iframe.src + ")"
            );
          }
          return iframeId2;
        }
        function setScrolling() {
          log(
            iframeId,
            "IFrame scrolling " + (settings[iframeId] && settings[iframeId].scrolling ? "enabled" : "disabled") + " for " + iframeId
          );
          iframe.style.overflow = false === (settings[iframeId] && settings[iframeId].scrolling) ? "hidden" : "auto";
          switch (settings[iframeId] && settings[iframeId].scrolling) {
            case "omit": {
              break;
            }
            case true: {
              iframe.scrolling = "yes";
              break;
            }
            case false: {
              iframe.scrolling = "no";
              break;
            }
            default: {
              iframe.scrolling = settings[iframeId] ? settings[iframeId].scrolling : "no";
            }
          }
        }
        function setupBodyMarginValues() {
          if ("number" === typeof (settings[iframeId] && settings[iframeId].bodyMargin) || "0" === (settings[iframeId] && settings[iframeId].bodyMargin)) {
            settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin;
            settings[iframeId].bodyMargin = "" + settings[iframeId].bodyMargin + "px";
          }
        }
        function checkReset() {
          var firstRun = settings[iframeId] && settings[iframeId].firstRun, resetRequertMethod = settings[iframeId] && settings[iframeId].heightCalculationMethod in resetRequiredMethods;
          if (!firstRun && resetRequertMethod) {
            resetIFrame({ iframe, height: 0, width: 0, type: "init" });
          }
        }
        function setupIFrameObject() {
          if (settings[iframeId]) {
            settings[iframeId].iframe.iFrameResizer = {
              close: closeIFrame.bind(null, settings[iframeId].iframe),
              removeListeners: removeIframeListeners.bind(
                null,
                settings[iframeId].iframe
              ),
              resize: trigger.bind(
                null,
                "Window resize",
                "resize",
                settings[iframeId].iframe
              ),
              moveToAnchor: function(anchor) {
                trigger(
                  "Move to anchor",
                  "moveToAnchor:" + anchor,
                  settings[iframeId].iframe,
                  iframeId
                );
              },
              sendMessage: function(message) {
                message = JSON.stringify(message);
                trigger(
                  "Send Message",
                  "message:" + message,
                  settings[iframeId].iframe,
                  iframeId
                );
              }
            };
          }
        }
        function init(msg) {
          function iFrameLoaded() {
            trigger("iFrame.onload", msg, iframe, undefined2, true);
            checkReset();
          }
          function createDestroyObserver(MutationObserver2) {
            if (!iframe.parentNode) {
              return null;
            }
            var destroyObserver2 = new MutationObserver2(function(mutations) {
              mutations.forEach(function(mutation) {
                var removedNodes = Array.prototype.slice.call(mutation.removedNodes);
                removedNodes.forEach(function(removedNode) {
                  if (removedNode === iframe) {
                    closeIFrame(iframe);
                  }
                });
              });
            });
            destroyObserver2.observe(iframe.parentNode, {
              childList: true
            });
            return destroyObserver2;
          }
          var MutationObserver = getMutationObserver();
          if (MutationObserver) {
            destroyObserver = createDestroyObserver(MutationObserver);
          }
          addEventListener(iframe, "load", iFrameLoaded);
          trigger("init", msg, iframe, undefined2, true);
        }
        function checkOptions(options2) {
          if ("object" !== typeof options2) {
            throw new TypeError("Options is not an object");
          }
        }
        function copyOptions(options2) {
          for (var option in defaults) {
            if (Object.prototype.hasOwnProperty.call(defaults, option)) {
              settings[iframeId][option] = Object.prototype.hasOwnProperty.call(
                options2,
                option
              ) ? options2[option] : defaults[option];
            }
          }
        }
        function getTargetOrigin(remoteHost) {
          return "" === remoteHost || null !== remoteHost.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : remoteHost;
        }
        function depricate(key2) {
          var splitName = key2.split("Callback");
          if (splitName.length === 2) {
            var name = "on" + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1);
            this[name] = this[key2];
            delete this[key2];
            warn(
              iframeId,
              "Deprecated: '" + key2 + "' has been renamed '" + name + "'. The old method will be removed in the next major version."
            );
          }
        }
        function processOptions(options2) {
          options2 = options2 || {};
          settings[iframeId] = /* @__PURE__ */ Object.create(null);
          settings[iframeId].iframe = iframe;
          settings[iframeId].firstRun = true;
          settings[iframeId].remoteHost = iframe.src && iframe.src.split("/").slice(0, 3).join("/");
          checkOptions(options2);
          Object.keys(options2).forEach(depricate, options2);
          copyOptions(options2);
          if (settings[iframeId]) {
            settings[iframeId].targetOrigin = true === settings[iframeId].checkOrigin ? getTargetOrigin(settings[iframeId].remoteHost) : "*";
          }
        }
        function beenHere() {
          return iframeId in settings && "iFrameResizer" in iframe;
        }
        var iframeId = ensureHasId(iframe.id);
        if (beenHere()) {
          warn(iframeId, "Ignored iFrame, already setup.");
        } else {
          processOptions(options);
          setScrolling();
          setLimits();
          setupBodyMarginValues();
          init(createOutgoingMsg(iframeId));
          setupIFrameObject();
        }
      }
      function debouce(fn, time) {
        if (null === timer) {
          timer = setTimeout(function() {
            timer = null;
            fn();
          }, time);
        }
      }
      var frameTimer = {};
      function debounceFrameEvents(fn, time, frameId) {
        if (!frameTimer[frameId]) {
          frameTimer[frameId] = setTimeout(function() {
            frameTimer[frameId] = null;
            fn();
          }, time);
        }
      }
      function fixHiddenIFrames() {
        function checkIFrames() {
          function checkIFrame(settingId) {
            function chkDimension(dimension) {
              return "0px" === (settings[settingId] && settings[settingId].iframe.style[dimension]);
            }
            function isVisible(el) {
              return null !== el.offsetParent;
            }
            if (settings[settingId] && isVisible(settings[settingId].iframe) && (chkDimension("height") || chkDimension("width"))) {
              trigger(
                "Visibility change",
                "resize",
                settings[settingId].iframe,
                settingId
              );
            }
          }
          Object.keys(settings).forEach(function(key2) {
            checkIFrame(key2);
          });
        }
        function mutationObserved(mutations) {
          log(
            "window",
            "Mutation observed: " + mutations[0].target + " " + mutations[0].type
          );
          debouce(checkIFrames, 16);
        }
        function createMutationObserver() {
          var target = document.querySelector("body"), config = {
            attributes: true,
            attributeOldValue: false,
            characterData: true,
            characterDataOldValue: false,
            childList: true,
            subtree: true
          }, observer = new MutationObserver(mutationObserved);
          observer.observe(target, config);
        }
        var MutationObserver = getMutationObserver();
        if (MutationObserver) {
          createMutationObserver();
        }
      }
      function resizeIFrames(event) {
        function resize() {
          sendTriggerMsg("Window " + event, "resize");
        }
        log("window", "Trigger event: " + event);
        debouce(resize, 16);
      }
      function tabVisible() {
        function resize() {
          sendTriggerMsg("Tab Visible", "resize");
        }
        if ("hidden" !== document.visibilityState) {
          log("document", "Trigger event: Visibility change");
          debouce(resize, 16);
        }
      }
      function sendTriggerMsg(eventName, event) {
        function isIFrameResizeEnabled(iframeId) {
          return settings[iframeId] && "parent" === settings[iframeId].resizeFrom && settings[iframeId].autoResize && !settings[iframeId].firstRun;
        }
        Object.keys(settings).forEach(function(iframeId) {
          if (isIFrameResizeEnabled(iframeId)) {
            trigger(eventName, event, settings[iframeId].iframe, iframeId);
          }
        });
      }
      function setupEventListeners() {
        addEventListener(window, "message", iFrameListener);
        addEventListener(window, "resize", function() {
          resizeIFrames("resize");
        });
        addEventListener(document, "visibilitychange", tabVisible);
        addEventListener(document, "-webkit-visibilitychange", tabVisible);
      }
      function factory() {
        function init(options, element) {
          function chkType() {
            if (!element.tagName) {
              throw new TypeError("Object is not a valid DOM element");
            } else if ("IFRAME" !== element.tagName.toUpperCase()) {
              throw new TypeError(
                "Expected <IFRAME> tag, found <" + element.tagName + ">"
              );
            }
          }
          if (element) {
            chkType();
            setupIFrame(element, options);
            iFrames.push(element);
          }
        }
        function warnDeprecatedOptions(options) {
          if (options && options.enablePublicMethods) {
            warn(
              "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
            );
          }
        }
        var iFrames;
        setupRequestAnimationFrame();
        setupEventListeners();
        return function iFrameResizeF(options, target) {
          iFrames = [];
          warnDeprecatedOptions(options);
          switch (typeof target) {
            case "undefined":
            case "string": {
              Array.prototype.forEach.call(
                document.querySelectorAll(target || "iframe"),
                init.bind(undefined2, options)
              );
              break;
            }
            case "object": {
              init(options, target);
              break;
            }
            default: {
              throw new TypeError("Unexpected data type (" + typeof target + ")");
            }
          }
          return iFrames;
        };
      }
      function createJQueryPublicMethod($) {
        if (!$.fn) {
          info("", "Unable to bind to jQuery, it is not fully loaded.");
        } else if (!$.fn.iFrameResize) {
          $.fn.iFrameResize = function $iFrameResizeF(options) {
            function init(index, element) {
              setupIFrame(element, options);
            }
            return this.filter("iframe").each(init).end();
          };
        }
      }
      if (window.jQuery !== undefined2) {
        createJQueryPublicMethod(window.jQuery);
      }
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
      }
      window.iFrameResize = window.iFrameResize || factory();
    })();
  }
});

// node_modules/iframe-resizer/js/iframeResizer.contentWindow.js
var require_iframeResizer_contentWindow = __commonJS({
  "node_modules/iframe-resizer/js/iframeResizer.contentWindow.js"(exports, module) {
    (function(undefined2) {
      if (typeof window === "undefined") return;
      var autoResize = true, base = 10, bodyBackground = "", bodyMargin = 0, bodyMarginStr = "", bodyObserver = null, bodyPadding = "", calculateWidth = false, doubleEventList = { resize: 1, click: 1 }, eventCancelTimer = 128, firstRun = true, height = 1, heightCalcModeDefault = "bodyOffset", heightCalcMode = heightCalcModeDefault, initLock = true, initMsg = "", inPageLinks = {}, interval = 32, intervalTimer = null, logging = false, mouseEvents = false, msgID = "[iFrameSizer]", msgIdLen = msgID.length, myID = "", resetRequiredMethods = {
        max: 1,
        min: 1,
        bodyScroll: 1,
        documentElementScroll: 1
      }, resizeFrom = "child", sendPermit = true, target = window.parent, targetOriginDefault = "*", tolerance = 0, triggerLocked = false, triggerLockedTimer = null, throttledTimer = 16, width = 1, widthCalcModeDefault = "scroll", widthCalcMode = widthCalcModeDefault, win = window, onMessage = function() {
        warn("onMessage function not defined");
      }, onReady = function() {
      }, onPageInfo = function() {
      }, customCalcMethods = {
        height: function() {
          warn("Custom height calculation function not defined");
          return document.documentElement.offsetHeight;
        },
        width: function() {
          warn("Custom width calculation function not defined");
          return document.body.scrollWidth;
        }
      }, eventHandlersByName = {}, passiveSupported = false;
      function noop() {
      }
      try {
        var options = Object.create(
          {},
          {
            passive: {
              // eslint-disable-next-line getter-return
              get: function() {
                passiveSupported = true;
              }
            }
          }
        );
        window.addEventListener("test", noop, options);
        window.removeEventListener("test", noop, options);
      } catch (error) {
      }
      function addEventListener(el, evt, func, options2) {
        el.addEventListener(evt, func, passiveSupported ? options2 || {} : false);
      }
      function removeEventListener(el, evt, func) {
        el.removeEventListener(evt, func, false);
      }
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      function throttle(func) {
        var context, args, result, timeout = null, previous = 0, later = function() {
          previous = Date.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout) {
            context = args = null;
          }
        };
        return function() {
          var now = Date.now();
          if (!previous) {
            previous = now;
          }
          var remaining = throttledTimer - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > throttledTimer) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) {
              context = args = null;
            }
          } else if (!timeout) {
            timeout = setTimeout(later, remaining);
          }
          return result;
        };
      }
      function formatLogMsg(msg) {
        return msgID + "[" + myID + "] " + msg;
      }
      function log(msg) {
        if (logging && "object" === typeof window.console) {
          console.log(formatLogMsg(msg));
        }
      }
      function warn(msg) {
        if ("object" === typeof window.console) {
          console.warn(formatLogMsg(msg));
        }
      }
      function init() {
        readDataFromParent();
        log("Initialising iFrame (" + window.location.href + ")");
        readDataFromPage();
        setMargin();
        setBodyStyle("background", bodyBackground);
        setBodyStyle("padding", bodyPadding);
        injectClearFixIntoBodyElement();
        checkHeightMode();
        checkWidthMode();
        stopInfiniteResizingOfIFrame();
        setupPublicMethods();
        setupMouseEvents();
        startEventListeners();
        inPageLinks = setupInPageLinks();
        sendSize("init", "Init message from host page");
        onReady();
      }
      function readDataFromParent() {
        function strBool(str) {
          return "true" === str;
        }
        var data = initMsg.slice(msgIdLen).split(":");
        myID = data[0];
        bodyMargin = undefined2 === data[1] ? bodyMargin : Number(data[1]);
        calculateWidth = undefined2 === data[2] ? calculateWidth : strBool(data[2]);
        logging = undefined2 === data[3] ? logging : strBool(data[3]);
        interval = undefined2 === data[4] ? interval : Number(data[4]);
        autoResize = undefined2 === data[6] ? autoResize : strBool(data[6]);
        bodyMarginStr = data[7];
        heightCalcMode = undefined2 === data[8] ? heightCalcMode : data[8];
        bodyBackground = data[9];
        bodyPadding = data[10];
        tolerance = undefined2 === data[11] ? tolerance : Number(data[11]);
        inPageLinks.enable = undefined2 === data[12] ? false : strBool(data[12]);
        resizeFrom = undefined2 === data[13] ? resizeFrom : data[13];
        widthCalcMode = undefined2 === data[14] ? widthCalcMode : data[14];
        mouseEvents = undefined2 === data[15] ? mouseEvents : strBool(data[15]);
      }
      function depricate(key2) {
        var splitName = key2.split("Callback");
        if (splitName.length === 2) {
          var name = "on" + splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1);
          this[name] = this[key2];
          delete this[key2];
          warn(
            "Deprecated: '" + key2 + "' has been renamed '" + name + "'. The old method will be removed in the next major version."
          );
        }
      }
      function readDataFromPage() {
        function readData() {
          var data = window.iFrameResizer;
          log("Reading data from page: " + JSON.stringify(data));
          Object.keys(data).forEach(depricate, data);
          onMessage = "onMessage" in data ? data.onMessage : onMessage;
          onReady = "onReady" in data ? data.onReady : onReady;
          targetOriginDefault = "targetOrigin" in data ? data.targetOrigin : targetOriginDefault;
          heightCalcMode = "heightCalculationMethod" in data ? data.heightCalculationMethod : heightCalcMode;
          widthCalcMode = "widthCalculationMethod" in data ? data.widthCalculationMethod : widthCalcMode;
        }
        function setupCustomCalcMethods(calcMode, calcFunc) {
          if ("function" === typeof calcMode) {
            log("Setup custom " + calcFunc + "CalcMethod");
            customCalcMethods[calcFunc] = calcMode;
            calcMode = "custom";
          }
          return calcMode;
        }
        if ("iFrameResizer" in window && Object === window.iFrameResizer.constructor) {
          readData();
          heightCalcMode = setupCustomCalcMethods(heightCalcMode, "height");
          widthCalcMode = setupCustomCalcMethods(widthCalcMode, "width");
        }
        log("TargetOrigin for parent set to: " + targetOriginDefault);
      }
      function chkCSS(attr, value) {
        if (-1 !== value.indexOf("-")) {
          warn("Negative CSS value ignored for " + attr);
          value = "";
        }
        return value;
      }
      function setBodyStyle(attr, value) {
        if (undefined2 !== value && "" !== value && "null" !== value) {
          document.body.style[attr] = value;
          log("Body " + attr + ' set to "' + value + '"');
        }
      }
      function setMargin() {
        if (undefined2 === bodyMarginStr) {
          bodyMarginStr = bodyMargin + "px";
        }
        setBodyStyle("margin", chkCSS("margin", bodyMarginStr));
      }
      function stopInfiniteResizingOfIFrame() {
        document.documentElement.style.height = "";
        document.body.style.height = "";
        log('HTML & body height set to "auto"');
      }
      function manageTriggerEvent(options2) {
        var listener = {
          add: function(eventName) {
            function handleEvent() {
              sendSize(options2.eventName, options2.eventType);
            }
            eventHandlersByName[eventName] = handleEvent;
            addEventListener(window, eventName, handleEvent, { passive: true });
          },
          remove: function(eventName) {
            var handleEvent = eventHandlersByName[eventName];
            delete eventHandlersByName[eventName];
            removeEventListener(window, eventName, handleEvent);
          }
        };
        if (options2.eventNames && Array.prototype.map) {
          options2.eventName = options2.eventNames[0];
          options2.eventNames.map(listener[options2.method]);
        } else {
          listener[options2.method](options2.eventName);
        }
        log(
          capitalizeFirstLetter(options2.method) + " event listener: " + options2.eventType
        );
      }
      function manageEventListeners(method) {
        manageTriggerEvent({
          method,
          eventType: "Animation Start",
          eventNames: ["animationstart", "webkitAnimationStart"]
        });
        manageTriggerEvent({
          method,
          eventType: "Animation Iteration",
          eventNames: ["animationiteration", "webkitAnimationIteration"]
        });
        manageTriggerEvent({
          method,
          eventType: "Animation End",
          eventNames: ["animationend", "webkitAnimationEnd"]
        });
        manageTriggerEvent({
          method,
          eventType: "Input",
          eventName: "input"
        });
        manageTriggerEvent({
          method,
          eventType: "Mouse Up",
          eventName: "mouseup"
        });
        manageTriggerEvent({
          method,
          eventType: "Mouse Down",
          eventName: "mousedown"
        });
        manageTriggerEvent({
          method,
          eventType: "Orientation Change",
          eventName: "orientationchange"
        });
        manageTriggerEvent({
          method,
          eventType: "Print",
          eventNames: ["afterprint", "beforeprint"]
        });
        manageTriggerEvent({
          method,
          eventType: "Ready State Change",
          eventName: "readystatechange"
        });
        manageTriggerEvent({
          method,
          eventType: "Touch Start",
          eventName: "touchstart"
        });
        manageTriggerEvent({
          method,
          eventType: "Touch End",
          eventName: "touchend"
        });
        manageTriggerEvent({
          method,
          eventType: "Touch Cancel",
          eventName: "touchcancel"
        });
        manageTriggerEvent({
          method,
          eventType: "Transition Start",
          eventNames: [
            "transitionstart",
            "webkitTransitionStart",
            "MSTransitionStart",
            "oTransitionStart",
            "otransitionstart"
          ]
        });
        manageTriggerEvent({
          method,
          eventType: "Transition Iteration",
          eventNames: [
            "transitioniteration",
            "webkitTransitionIteration",
            "MSTransitionIteration",
            "oTransitionIteration",
            "otransitioniteration"
          ]
        });
        manageTriggerEvent({
          method,
          eventType: "Transition End",
          eventNames: [
            "transitionend",
            "webkitTransitionEnd",
            "MSTransitionEnd",
            "oTransitionEnd",
            "otransitionend"
          ]
        });
        if ("child" === resizeFrom) {
          manageTriggerEvent({
            method,
            eventType: "IFrame Resized",
            eventName: "resize"
          });
        }
      }
      function checkCalcMode(calcMode, calcModeDefault, modes, type) {
        if (calcModeDefault !== calcMode) {
          if (!(calcMode in modes)) {
            warn(
              calcMode + " is not a valid option for " + type + "CalculationMethod."
            );
            calcMode = calcModeDefault;
          }
          log(type + ' calculation method set to "' + calcMode + '"');
        }
        return calcMode;
      }
      function checkHeightMode() {
        heightCalcMode = checkCalcMode(
          heightCalcMode,
          heightCalcModeDefault,
          getHeight,
          "height"
        );
      }
      function checkWidthMode() {
        widthCalcMode = checkCalcMode(
          widthCalcMode,
          widthCalcModeDefault,
          getWidth,
          "width"
        );
      }
      function startEventListeners() {
        if (true === autoResize) {
          manageEventListeners("add");
          setupMutationObserver();
        } else {
          log("Auto Resize disabled");
        }
      }
      function disconnectMutationObserver() {
        if (null !== bodyObserver) {
          bodyObserver.disconnect();
        }
      }
      function stopEventListeners() {
        manageEventListeners("remove");
        disconnectMutationObserver();
        clearInterval(intervalTimer);
      }
      function injectClearFixIntoBodyElement() {
        var clearFix = document.createElement("div");
        clearFix.style.clear = "both";
        clearFix.style.display = "block";
        clearFix.style.height = "0";
        document.body.appendChild(clearFix);
      }
      function setupInPageLinks() {
        function getPagePosition() {
          return {
            x: window.pageXOffset === undefined2 ? document.documentElement.scrollLeft : window.pageXOffset,
            y: window.pageYOffset === undefined2 ? document.documentElement.scrollTop : window.pageYOffset
          };
        }
        function getElementPosition(el) {
          var elPosition = el.getBoundingClientRect(), pagePosition = getPagePosition();
          return {
            x: parseInt(elPosition.left, 10) + parseInt(pagePosition.x, 10),
            y: parseInt(elPosition.top, 10) + parseInt(pagePosition.y, 10)
          };
        }
        function findTarget(location) {
          function jumpToTarget(target3) {
            var jumpPosition = getElementPosition(target3);
            log(
              "Moving to in page link (#" + hash + ") at x: " + jumpPosition.x + " y: " + jumpPosition.y
            );
            sendMsg(jumpPosition.y, jumpPosition.x, "scrollToOffset");
          }
          var hash = location.split("#")[1] || location, hashData = decodeURIComponent(hash), target2 = document.getElementById(hashData) || document.getElementsByName(hashData)[0];
          if (undefined2 === target2) {
            log(
              "In page link (#" + hash + ") not found in iFrame, so sending to parent"
            );
            sendMsg(0, 0, "inPageLink", "#" + hash);
          } else {
            jumpToTarget(target2);
          }
        }
        function checkLocationHash() {
          var hash = window.location.hash;
          var href = window.location.href;
          if ("" !== hash && "#" !== hash) {
            findTarget(href);
          }
        }
        function bindAnchors() {
          function setupLink(el) {
            function linkClicked(e) {
              e.preventDefault();
              findTarget(this.getAttribute("href"));
            }
            if ("#" !== el.getAttribute("href")) {
              addEventListener(el, "click", linkClicked);
            }
          }
          Array.prototype.forEach.call(
            document.querySelectorAll('a[href^="#"]'),
            setupLink
          );
        }
        function bindLocationHash() {
          addEventListener(window, "hashchange", checkLocationHash);
        }
        function initCheck() {
          setTimeout(checkLocationHash, eventCancelTimer);
        }
        function enableInPageLinks() {
          if (Array.prototype.forEach && document.querySelectorAll) {
            log("Setting up location.hash handlers");
            bindAnchors();
            bindLocationHash();
            initCheck();
          } else {
            warn(
              "In page linking not fully supported in this browser! (See README.md for IE8 workaround)"
            );
          }
        }
        if (inPageLinks.enable) {
          enableInPageLinks();
        } else {
          log("In page linking not enabled");
        }
        return {
          findTarget
        };
      }
      function setupMouseEvents() {
        if (mouseEvents !== true) return;
        function sendMouse(e) {
          sendMsg(0, 0, e.type, e.screenY + ":" + e.screenX);
        }
        function addMouseListener(evt, name) {
          log("Add event listener: " + name);
          addEventListener(window.document, evt, sendMouse);
        }
        addMouseListener("mouseenter", "Mouse Enter");
        addMouseListener("mouseleave", "Mouse Leave");
      }
      function setupPublicMethods() {
        log("Enable public methods");
        win.parentIFrame = {
          autoResize: function autoResizeF(resize) {
            if (true === resize && false === autoResize) {
              autoResize = true;
              startEventListeners();
            } else if (false === resize && true === autoResize) {
              autoResize = false;
              stopEventListeners();
            }
            sendMsg(0, 0, "autoResize", JSON.stringify(autoResize));
            return autoResize;
          },
          close: function closeF() {
            sendMsg(0, 0, "close");
          },
          getId: function getIdF() {
            return myID;
          },
          getPageInfo: function getPageInfoF(callback) {
            if ("function" === typeof callback) {
              onPageInfo = callback;
              sendMsg(0, 0, "pageInfo");
            } else {
              onPageInfo = function() {
              };
              sendMsg(0, 0, "pageInfoStop");
            }
          },
          moveToAnchor: function moveToAnchorF(hash) {
            inPageLinks.findTarget(hash);
          },
          reset: function resetF() {
            resetIFrame("parentIFrame.reset");
          },
          scrollTo: function scrollToF(x, y) {
            sendMsg(y, x, "scrollTo");
          },
          scrollToOffset: function scrollToF(x, y) {
            sendMsg(y, x, "scrollToOffset");
          },
          sendMessage: function sendMessageF(msg, targetOrigin) {
            sendMsg(0, 0, "message", JSON.stringify(msg), targetOrigin);
          },
          setHeightCalculationMethod: function setHeightCalculationMethodF(heightCalculationMethod) {
            heightCalcMode = heightCalculationMethod;
            checkHeightMode();
          },
          setWidthCalculationMethod: function setWidthCalculationMethodF(widthCalculationMethod) {
            widthCalcMode = widthCalculationMethod;
            checkWidthMode();
          },
          setTargetOrigin: function setTargetOriginF(targetOrigin) {
            log("Set targetOrigin: " + targetOrigin);
            targetOriginDefault = targetOrigin;
          },
          size: function sizeF(customHeight, customWidth) {
            var valString = "" + (customHeight || "") + (customWidth ? "," + customWidth : "");
            sendSize(
              "size",
              "parentIFrame.size(" + valString + ")",
              customHeight,
              customWidth
            );
          }
        };
      }
      function initInterval() {
        if (0 !== interval) {
          log("setInterval: " + interval + "ms");
          intervalTimer = setInterval(function() {
            sendSize("interval", "setInterval: " + interval);
          }, Math.abs(interval));
        }
      }
      function setupBodyMutationObserver() {
        function addImageLoadListners(mutation) {
          function addImageLoadListener(element) {
            if (false === element.complete) {
              log("Attach listeners to " + element.src);
              element.addEventListener("load", imageLoaded, false);
              element.addEventListener("error", imageError, false);
              elements.push(element);
            }
          }
          if (mutation.type === "attributes" && mutation.attributeName === "src") {
            addImageLoadListener(mutation.target);
          } else if (mutation.type === "childList") {
            Array.prototype.forEach.call(
              mutation.target.querySelectorAll("img"),
              addImageLoadListener
            );
          }
        }
        function removeFromArray(element) {
          elements.splice(elements.indexOf(element), 1);
        }
        function removeImageLoadListener(element) {
          log("Remove listeners from " + element.src);
          element.removeEventListener("load", imageLoaded, false);
          element.removeEventListener("error", imageError, false);
          removeFromArray(element);
        }
        function imageEventTriggered(event, type, typeDesc) {
          removeImageLoadListener(event.target);
          sendSize(type, typeDesc + ": " + event.target.src);
        }
        function imageLoaded(event) {
          imageEventTriggered(event, "imageLoad", "Image loaded");
        }
        function imageError(event) {
          imageEventTriggered(event, "imageLoadFailed", "Image load failed");
        }
        function mutationObserved(mutations) {
          sendSize(
            "mutationObserver",
            "mutationObserver: " + mutations[0].target + " " + mutations[0].type
          );
          mutations.forEach(addImageLoadListners);
        }
        function createMutationObserver() {
          var target2 = document.querySelector("body"), config = {
            attributes: true,
            attributeOldValue: false,
            characterData: true,
            characterDataOldValue: false,
            childList: true,
            subtree: true
          };
          observer = new MutationObserver(mutationObserved);
          log("Create body MutationObserver");
          observer.observe(target2, config);
          return observer;
        }
        var elements = [], MutationObserver = window.MutationObserver || window.WebKitMutationObserver, observer = createMutationObserver();
        return {
          disconnect: function() {
            if ("disconnect" in observer) {
              log("Disconnect body MutationObserver");
              observer.disconnect();
              elements.forEach(removeImageLoadListener);
            }
          }
        };
      }
      function setupMutationObserver() {
        var forceIntervalTimer = 0 > interval;
        if (window.MutationObserver || window.WebKitMutationObserver) {
          if (forceIntervalTimer) {
            initInterval();
          } else {
            bodyObserver = setupBodyMutationObserver();
          }
        } else {
          log("MutationObserver not supported in this browser!");
          initInterval();
        }
      }
      function getComputedStyle2(prop, el) {
        var retVal = 0;
        el = el || document.body;
        retVal = document.defaultView.getComputedStyle(el, null);
        retVal = null === retVal ? 0 : retVal[prop];
        return parseInt(retVal, base);
      }
      function chkEventThottle(timer) {
        if (timer > throttledTimer / 2) {
          throttledTimer = 2 * timer;
          log("Event throttle increased to " + throttledTimer + "ms");
        }
      }
      function getMaxElement(side, elements) {
        var elementsLength = elements.length, elVal = 0, maxVal = 0, Side = capitalizeFirstLetter(side), timer = Date.now();
        for (var i = 0; i < elementsLength; i++) {
          elVal = elements[i].getBoundingClientRect()[side] + getComputedStyle2("margin" + Side, elements[i]);
          if (elVal > maxVal) {
            maxVal = elVal;
          }
        }
        timer = Date.now() - timer;
        log("Parsed " + elementsLength + " HTML elements");
        log("Element position calculated in " + timer + "ms");
        chkEventThottle(timer);
        return maxVal;
      }
      function getAllMeasurements(dimensions) {
        return [
          dimensions.bodyOffset(),
          dimensions.bodyScroll(),
          dimensions.documentElementOffset(),
          dimensions.documentElementScroll()
        ];
      }
      function getTaggedElements(side, tag) {
        function noTaggedElementsFound() {
          warn("No tagged elements (" + tag + ") found on page");
          return document.querySelectorAll("body *");
        }
        var elements = document.querySelectorAll("[" + tag + "]");
        if (elements.length === 0) noTaggedElementsFound();
        return getMaxElement(side, elements);
      }
      function getAllElements() {
        return document.querySelectorAll("body *");
      }
      var getHeight = {
        bodyOffset: function getBodyOffsetHeight() {
          return document.body.offsetHeight + getComputedStyle2("marginTop") + getComputedStyle2("marginBottom");
        },
        offset: function() {
          return getHeight.bodyOffset();
        },
        bodyScroll: function getBodyScrollHeight() {
          return document.body.scrollHeight;
        },
        custom: function getCustomWidth() {
          return customCalcMethods.height();
        },
        documentElementOffset: function getDEOffsetHeight() {
          return document.documentElement.offsetHeight;
        },
        documentElementScroll: function getDEScrollHeight() {
          return document.documentElement.scrollHeight;
        },
        max: function getMaxHeight() {
          return Math.max.apply(null, getAllMeasurements(getHeight));
        },
        min: function getMinHeight() {
          return Math.min.apply(null, getAllMeasurements(getHeight));
        },
        grow: function growHeight() {
          return getHeight.max();
        },
        lowestElement: function getBestHeight() {
          return Math.max(
            getHeight.bodyOffset() || getHeight.documentElementOffset(),
            getMaxElement("bottom", getAllElements())
          );
        },
        taggedElement: function getTaggedElementsHeight() {
          return getTaggedElements("bottom", "data-iframe-height");
        }
      }, getWidth = {
        bodyScroll: function getBodyScrollWidth() {
          return document.body.scrollWidth;
        },
        bodyOffset: function getBodyOffsetWidth() {
          return document.body.offsetWidth;
        },
        custom: function getCustomWidth() {
          return customCalcMethods.width();
        },
        documentElementScroll: function getDEScrollWidth() {
          return document.documentElement.scrollWidth;
        },
        documentElementOffset: function getDEOffsetWidth() {
          return document.documentElement.offsetWidth;
        },
        scroll: function getMaxWidth() {
          return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll());
        },
        max: function getMaxWidth() {
          return Math.max.apply(null, getAllMeasurements(getWidth));
        },
        min: function getMinWidth() {
          return Math.min.apply(null, getAllMeasurements(getWidth));
        },
        rightMostElement: function rightMostElement() {
          return getMaxElement("right", getAllElements());
        },
        taggedElement: function getTaggedElementsWidth() {
          return getTaggedElements("right", "data-iframe-width");
        }
      };
      function sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth) {
        function resizeIFrame() {
          height = currentHeight;
          width = currentWidth;
          sendMsg(height, width, triggerEvent);
        }
        function isSizeChangeDetected() {
          function checkTolarance(a, b) {
            var retVal = Math.abs(a - b) <= tolerance;
            return !retVal;
          }
          currentHeight = undefined2 === customHeight ? getHeight[heightCalcMode]() : customHeight;
          currentWidth = undefined2 === customWidth ? getWidth[widthCalcMode]() : customWidth;
          return checkTolarance(height, currentHeight) || calculateWidth && checkTolarance(width, currentWidth);
        }
        function isForceResizableEvent() {
          return !(triggerEvent in { init: 1, interval: 1, size: 1 });
        }
        function isForceResizableCalcMode() {
          return heightCalcMode in resetRequiredMethods || calculateWidth && widthCalcMode in resetRequiredMethods;
        }
        function logIgnored() {
          log("No change in size detected");
        }
        function checkDownSizing() {
          if (isForceResizableEvent() && isForceResizableCalcMode()) {
            resetIFrame(triggerEventDesc);
          } else if (!(triggerEvent in { interval: 1 })) {
            logIgnored();
          }
        }
        var currentHeight, currentWidth;
        if (isSizeChangeDetected() || "init" === triggerEvent) {
          lockTrigger();
          resizeIFrame();
        } else {
          checkDownSizing();
        }
      }
      var sizeIFrameThrottled = throttle(sizeIFrame);
      function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth) {
        function recordTrigger() {
          if (!(triggerEvent in { reset: 1, resetPage: 1, init: 1 })) {
            log("Trigger event: " + triggerEventDesc);
          }
        }
        function isDoubleFiredEvent() {
          return triggerLocked && triggerEvent in doubleEventList;
        }
        if (isDoubleFiredEvent()) {
          log("Trigger event cancelled: " + triggerEvent);
        } else {
          recordTrigger();
          if (triggerEvent === "init") {
            sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth);
          } else {
            sizeIFrameThrottled(
              triggerEvent,
              triggerEventDesc,
              customHeight,
              customWidth
            );
          }
        }
      }
      function lockTrigger() {
        if (!triggerLocked) {
          triggerLocked = true;
          log("Trigger event lock on");
        }
        clearTimeout(triggerLockedTimer);
        triggerLockedTimer = setTimeout(function() {
          triggerLocked = false;
          log("Trigger event lock off");
          log("--");
        }, eventCancelTimer);
      }
      function triggerReset(triggerEvent) {
        height = getHeight[heightCalcMode]();
        width = getWidth[widthCalcMode]();
        sendMsg(height, width, triggerEvent);
      }
      function resetIFrame(triggerEventDesc) {
        var hcm = heightCalcMode;
        heightCalcMode = heightCalcModeDefault;
        log("Reset trigger event: " + triggerEventDesc);
        lockTrigger();
        triggerReset("reset");
        heightCalcMode = hcm;
      }
      function sendMsg(height2, width2, triggerEvent, msg, targetOrigin) {
        function setTargetOrigin() {
          if (undefined2 === targetOrigin) {
            targetOrigin = targetOriginDefault;
          } else {
            log("Message targetOrigin: " + targetOrigin);
          }
        }
        function sendToParent() {
          var size = height2 + ":" + width2, message = myID + ":" + size + ":" + triggerEvent + (undefined2 === msg ? "" : ":" + msg);
          log("Sending message to host page (" + message + ")");
          target.postMessage(msgID + message, targetOrigin);
        }
        if (true === sendPermit) {
          setTargetOrigin();
          sendToParent();
        }
      }
      function receiver(event) {
        var processRequestFromParent = {
          init: function initFromParent() {
            initMsg = event.data;
            target = event.source;
            init();
            firstRun = false;
            setTimeout(function() {
              initLock = false;
            }, eventCancelTimer);
          },
          reset: function resetFromParent() {
            if (initLock) {
              log("Page reset ignored by init");
            } else {
              log("Page size reset by host page");
              triggerReset("resetPage");
            }
          },
          resize: function resizeFromParent() {
            sendSize("resizeParent", "Parent window requested size check");
          },
          moveToAnchor: function moveToAnchorF() {
            inPageLinks.findTarget(getData());
          },
          inPageLink: function inPageLinkF() {
            this.moveToAnchor();
          },
          // Backward compatibility
          pageInfo: function pageInfoFromParent() {
            var msgBody = getData();
            log("PageInfoFromParent called from parent: " + msgBody);
            onPageInfo(JSON.parse(msgBody));
            log(" --");
          },
          message: function messageFromParent() {
            var msgBody = getData();
            log("onMessage called from parent: " + msgBody);
            onMessage(JSON.parse(msgBody));
            log(" --");
          }
        };
        function isMessageForUs() {
          return msgID === ("" + event.data).slice(0, msgIdLen);
        }
        function getMessageType() {
          return event.data.split("]")[1].split(":")[0];
        }
        function getData() {
          return event.data.slice(event.data.indexOf(":") + 1);
        }
        function isMiddleTier() {
          return !(typeof module !== "undefined" && module.exports) && "iFrameResize" in window || window.jQuery !== undefined2 && "iFrameResize" in window.jQuery.prototype;
        }
        function isInitMsg() {
          return event.data.split(":")[2] in { true: 1, false: 1 };
        }
        function callFromParent() {
          var messageType = getMessageType();
          if (messageType in processRequestFromParent) {
            processRequestFromParent[messageType]();
          } else if (!isMiddleTier() && !isInitMsg()) {
            warn("Unexpected message (" + event.data + ")");
          }
        }
        function processMessage() {
          if (false === firstRun) {
            callFromParent();
          } else if (isInitMsg()) {
            processRequestFromParent.init();
          } else {
            log(
              'Ignored message of type "' + getMessageType() + '". Received before initialization.'
            );
          }
        }
        if (isMessageForUs()) {
          processMessage();
        }
      }
      function chkLateLoaded() {
        if ("loading" !== document.readyState) {
          window.parent.postMessage("[iFrameResizerChild]Ready", "*");
        }
      }
      if (!("iframeResizer" in window)) {
        window.iframeChildListener = function(data) {
          receiver({ data, sameDomian: true });
        };
        addEventListener(window, "message", receiver);
        addEventListener(window, "readystatechange", chkLateLoaded);
        chkLateLoaded();
      }
    })();
  }
});

// node_modules/iframe-resizer/index.js
var require_iframe_resizer = __commonJS({
  "node_modules/iframe-resizer/index.js"(exports, module) {
    var iframeResize = require_iframeResizer();
    module.exports = {
      iframeResize,
      iframeResizer: iframeResize,
      // Backwards compatibility
      contentWindow: require_iframeResizer_contentWindow()
    };
  }
});

// node_modules/@forge/bridge/out/view/adf-renderer.js
var require_adf_renderer = __commonJS({
  "node_modules/@forge/bridge/out/view/adf-renderer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createAdfRendererIframeProps = exports.sendMessageWhenReady = void 0;
    var READY_SIGNAL_FALLBACK_DELAY_MS = 1e4;
    var sendMessageWhenReady = (iframe, message, origin) => {
      const sendMessage = () => {
        var _a;
        return (_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, origin);
      };
      const timeoutId = setTimeout(() => {
        window.removeEventListener("message", handleReady);
        sendMessage();
      }, READY_SIGNAL_FALLBACK_DELAY_MS);
      const handleReady = (event) => {
        var _a;
        if (event.source === (iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) && ((_a = event.data) === null || _a === void 0 ? void 0 : _a.source) === "forge-adf-renderer-ready") {
          clearTimeout(timeoutId);
          window.removeEventListener("message", handleReady);
          sendMessage();
        }
      };
      window.addEventListener("message", handleReady);
    };
    exports.sendMessageWhenReady = sendMessageWhenReady;
    var createAdfRendererIframeProps = async (context, iframeId) => {
      const IframeResizer = await Promise.resolve().then(() => __toESM(require_iframe_resizer()));
      const IframeResizerModule = IframeResizer.default || IframeResizer;
      const origin = new URL(document.referrer).origin;
      const src = `${origin}/forge-apps/adf-renderer`;
      const id = iframeId || `forge-adf-renderer-iframe-${crypto.randomUUID()}`;
      const onLoad = () => {
        var _a, _b, _c, _d, _e;
        const iframe = document.getElementById(id);
        const message = {
          type: "adf-document",
          document: (_a = context.extension.macro) === null || _a === void 0 ? void 0 : _a.body,
          timestamp: Date.now(),
          source: "forge-adf-renderer",
          localId: context.localId,
          isEditing: (_c = (_b = context.extension) === null || _b === void 0 ? void 0 : _b.isEditing) !== null && _c !== void 0 ? _c : false,
          contentId: (_e = (_d = context.extension) === null || _d === void 0 ? void 0 : _d.content) === null || _e === void 0 ? void 0 : _e.id
        };
        IframeResizerModule.iframeResizer({
          heightCalculationMethod: "taggedElement",
          widthCalculationMethod: "bodyScroll",
          initCallback: (iframe2) => {
            var _a2;
            (_a2 = iframe2 === null || iframe2 === void 0 ? void 0 : iframe2.iFrameResizer) === null || _a2 === void 0 ? void 0 : _a2.resize();
          }
        }, iframe || "");
        (0, exports.sendMessageWhenReady)(iframe, message, origin);
      };
      setTimeout(() => {
        document.documentElement.style.height = "auto";
        document.body.style.height = "auto";
      }, 200);
      return {
        id,
        src,
        onLoad
      };
    };
    exports.createAdfRendererIframeProps = createAdfRendererIframeProps;
  }
});

// node_modules/@forge/bridge/out/view/onClose.js
var require_onClose = __commonJS({
  "node_modules/@forge/bridge/out/view/onClose.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onClose = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var callBridge = (0, bridge_1.getCallBridge)();
    var onClose = async (payload) => {
      try {
        const success = await callBridge("onClose", payload);
        if (success === false) {
          throw new errors_1.BridgeAPIError("`onClose` call has failed.");
        }
      } catch (e) {
        throw new errors_1.BridgeAPIError("`onClose` failed because this resource's view is not closable.");
      }
    };
    exports.onClose = onClose;
  }
});

// node_modules/@forge/bridge/out/view/getFrameDispatch.js
var require_getFrameDispatch = __commonJS({
  "node_modules/@forge/bridge/out/view/getFrameDispatch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFrameDispatch = void 0;
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var getFrameDispatch = async () => {
      return await callBridge("getFrameDispatch");
    };
    exports.getFrameDispatch = getFrameDispatch;
  }
});

// node_modules/@forge/bridge/out/view/view.js
var require_view = __commonJS({
  "node_modules/@forge/bridge/out/view/view.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.view = void 0;
    var submit_1 = require_submit();
    var close_1 = require_close();
    var open_1 = require_open();
    var refresh_1 = require_refresh();
    var createHistory_1 = require_createHistory();
    var getContext_1 = require_getContext();
    var changeWindowTitle_1 = require_changeWindowTitle();
    var theme_1 = require_theme();
    var emitReadyEvent_1 = require_emitReadyEvent();
    var adf_renderer_1 = require_adf_renderer();
    var onClose_1 = require_onClose();
    var getFrameDispatch_1 = require_getFrameDispatch();
    exports.view = {
      submit: submit_1.submit,
      close: close_1.close,
      onClose: onClose_1.onClose,
      open: open_1.open,
      refresh: refresh_1.refresh,
      createHistory: createHistory_1.createHistory,
      getContext: getContext_1.getContext,
      getFrameDispatch: getFrameDispatch_1.getFrameDispatch,
      theme: theme_1.theme,
      changeWindowTitle: changeWindowTitle_1.changeWindowTitle,
      emitReadyEvent: emitReadyEvent_1.emitReadyEvent,
      createAdfRendererIframeProps: adf_renderer_1.createAdfRendererIframeProps
    };
  }
});

// node_modules/@forge/bridge/out/view/index.js
var require_view2 = __commonJS({
  "node_modules/@forge/bridge/out/view/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_view(), exports);
  }
});

// node_modules/@forge/bridge/out/router/router.js
var require_router = __commonJS({
  "node_modules/@forge/bridge/out/router/router.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.router = void 0;
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var getUrl = async (location) => {
      if (!(location === null || location === void 0 ? void 0 : location.target)) {
        throw new Error("target is required for getUrl");
      }
      const url = await callBridge("getUrl", location);
      if (!url) {
        throw new Error("Failed to get URL");
      }
      try {
        return new URL(url);
      } catch (error) {
        throw new Error(`Failed to parse URL: ${url} (${error})`);
      }
    };
    var navigate = (location) => {
      if (typeof location === "string") {
        return callBridge("navigate", { url: location, type: "same-tab" });
      } else {
        if (!(location === null || location === void 0 ? void 0 : location.target)) {
          throw new Error("target is required for navigation");
        }
        return callBridge("navigate", { ...location, type: "same-tab" });
      }
    };
    var open = (location) => {
      if (typeof location === "string") {
        return callBridge("navigate", { url: location, type: "new-tab" });
      } else {
        if (!(location === null || location === void 0 ? void 0 : location.target)) {
          throw new Error("target is required for navigation");
        }
        return callBridge("navigate", { ...location, type: "new-tab" });
      }
    };
    var reload = async () => callBridge("reload");
    exports.router = {
      getUrl,
      navigate,
      open,
      reload
    };
  }
});

// node_modules/@forge/bridge/out/router/index.js
var require_router2 = __commonJS({
  "node_modules/@forge/bridge/out/router/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_router(), exports);
  }
});

// node_modules/@forge/bridge/out/modal/modal.js
var require_modal = __commonJS({
  "node_modules/@forge/bridge/out/modal/modal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Modal = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var callBridge = (0, bridge_1.getCallBridge)();
    var NAMED_MODAL_SIZES = ["small", "medium", "large", "xlarge", "max", "fullscreen", "resizable"];
    var noop = () => {
    };
    function isNamedModalSize(size) {
      return typeof size === "string" && NAMED_MODAL_SIZES.includes(size);
    }
    function isCustomModalSize(size) {
      if (typeof size !== "object" || size === null)
        return false;
      const s = size;
      return typeof s.width === "string" && (s.height === void 0 || typeof s.height === "string");
    }
    function isValidModalSize(size) {
      return isNamedModalSize(size) || isCustomModalSize(size);
    }
    var Modal = class {
      constructor(opts) {
        var _a, _b;
        this.resource = (opts === null || opts === void 0 ? void 0 : opts.resource) || null;
        this.onClose = (opts === null || opts === void 0 ? void 0 : opts.onClose) || noop;
        this.size = (opts === null || opts === void 0 ? void 0 : opts.size) || "medium";
        this.context = (opts === null || opts === void 0 ? void 0 : opts.context) || {};
        this.closeOnEscape = (_a = opts === null || opts === void 0 ? void 0 : opts.closeOnEscape) !== null && _a !== void 0 ? _a : true;
        this.closeOnOverlayClick = (_b = opts === null || opts === void 0 ? void 0 : opts.closeOnOverlayClick) !== null && _b !== void 0 ? _b : true;
        this.title = (opts === null || opts === void 0 ? void 0 : opts.title) || "";
        this.icon = (opts === null || opts === void 0 ? void 0 : opts.icon) || "";
      }
      async open() {
        if (!isValidModalSize(this.size)) {
          throw new errors_1.BridgeAPIError(`Invalid modal size: ${JSON.stringify(this.size)}. Must be one of the named sizes (${NAMED_MODAL_SIZES.join(", ")}) or a custom dimensions object with a "width" string property and an optional "height" string property.`);
        }
        try {
          const success = await callBridge("openModal", {
            resource: this.resource,
            onClose: this.onClose,
            size: this.size,
            context: this.context,
            closeOnEscape: this.closeOnEscape,
            closeOnOverlayClick: this.closeOnOverlayClick,
            title: this.title,
            icon: this.icon
          });
          if (success === false) {
            throw new errors_1.BridgeAPIError("Unable to open modal.");
          }
        } catch (err) {
          throw new errors_1.BridgeAPIError("Unable to open modal.");
        }
      }
    };
    exports.Modal = Modal;
  }
});

// node_modules/@forge/bridge/out/modal/index.js
var require_modal2 = __commonJS({
  "node_modules/@forge/bridge/out/modal/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_modal(), exports);
  }
});

// node_modules/@forge/bridge/out/fetch/fetch.js
var require_fetch = __commonJS({
  "node_modules/@forge/bridge/out/fetch/fetch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.productFetchApi = exports.remoteFetchApi = void 0;
    var blobParser_1 = require_blobParser();
    var parseFormData = async (form, matchFilePrefix = false) => {
      const parsed = {};
      for (const [key2, value] of form.entries()) {
        const isFileKey = matchFilePrefix ? key2.startsWith("file") : key2 === "file";
        if (isFileKey) {
          const fileName = value.name;
          const fileType = value.type;
          parsed[key2] = await (0, blobParser_1.blobToBase64)(value);
          parsed[`__${key2}Name`] = fileName;
          parsed[`__${key2}Type`] = fileType;
        } else {
          parsed[key2] = value;
        }
      }
      return JSON.stringify(parsed);
    };
    var validateFetchOptions = (init) => {
      if (!init) {
        return init;
      }
      if ("signal" in init) {
        const { signal: _signal, ...rest } = init;
        console.error("Signal is not supported in @forge/bridge and was removed from fetch options. Please use the fetch method from @forge/api for signal support.");
        return rest;
      }
      return init;
    };
    var parseRequest = async (fetchType, init) => {
      const isFormData = (init === null || init === void 0 ? void 0 : init.body) instanceof FormData ? true : false;
      const requestBody = isFormData ? await parseFormData(init === null || init === void 0 ? void 0 : init.body, fetchType === "remote") : init === null || init === void 0 ? void 0 : init.body;
      const req = new Request("", { body: requestBody, method: init === null || init === void 0 ? void 0 : init.method, headers: init === null || init === void 0 ? void 0 : init.headers });
      const headers = Object.fromEntries(req.headers.entries());
      const body = req.method !== "GET" ? await req.text() : null;
      return {
        body,
        headers: new Headers(headers),
        isMultipartFormData: isFormData
      };
    };
    var remoteFetchApi = (callBridge) => {
      const fetch2 = async (remoteKey, init) => {
        const validatedInit = validateFetchOptions(init);
        const { body: requestBody, headers: requestHeaders, isMultipartFormData } = await parseRequest("remote", validatedInit);
        const fetchPayload = {
          remoteKey,
          fetchRequestInit: { ...validatedInit, body: requestBody, headers: [...requestHeaders.entries()] },
          isMultipartFormData
        };
        const { body, headers, statusText, status, isAttachment } = await callBridge("fetchRemote", fetchPayload);
        const responseBody = isAttachment ? (0, blobParser_1.base64ToBlob)(body, headers["content-type"]) : body;
        return new Response(responseBody || null, { headers, status, statusText });
      };
      return {
        requestRemote: (remoteKey, fetchOptions) => fetch2(remoteKey, fetchOptions)
      };
    };
    exports.remoteFetchApi = remoteFetchApi;
    var productFetchApi = (callBridge) => {
      const fetch2 = async (product, restPath, init) => {
        const validatedInit = validateFetchOptions(init);
        const { body: requestBody, headers: requestHeaders, isMultipartFormData } = await parseRequest("product", validatedInit);
        if (!requestHeaders.has("X-Atlassian-Token")) {
          requestHeaders.set("X-Atlassian-Token", "no-check");
        }
        const fetchPayload = {
          product,
          restPath,
          fetchRequestInit: {
            ...validatedInit,
            body: requestBody,
            headers: [...requestHeaders.entries()]
          },
          isMultipartFormData
        };
        const { body, headers, statusText, status, isAttachment } = await callBridge("fetchProduct", fetchPayload);
        const responseBody = isAttachment ? (0, blobParser_1.base64ToBlob)(body, headers["content-type"]) : body;
        return new Response(responseBody || null, { headers, status, statusText });
      };
      return {
        requestConfluence: (restPath, fetchOptions) => fetch2("confluence", restPath, fetchOptions),
        requestJira: (restPath, fetchOptions) => fetch2("jira", restPath, fetchOptions),
        requestBitbucket: (restPath, fetchOptions) => fetch2("bitbucket", restPath, fetchOptions)
      };
    };
    exports.productFetchApi = productFetchApi;
  }
});

// node_modules/@forge/bridge/out/fetch/index.js
var require_fetch2 = __commonJS({
  "node_modules/@forge/bridge/out/fetch/index.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fetchUserRecommendations = exports.requestRemote = exports.requestBitbucket = exports.requestJira = exports.requestConfluence = void 0;
    var bridge_1 = require_bridge();
    var fetch_1 = require_fetch();
    _a = (0, fetch_1.productFetchApi)((0, bridge_1.getCallBridge)()), exports.requestConfluence = _a.requestConfluence, exports.requestJira = _a.requestJira, exports.requestBitbucket = _a.requestBitbucket;
    exports.requestRemote = (0, fetch_1.remoteFetchApi)((0, bridge_1.getCallBridge)()).requestRemote;
    var fetchUserRecommendations = async (input) => {
      const callBridge = (0, bridge_1.getCallBridge)();
      return await callBridge("fetchUserRecommendations", input);
    };
    exports.fetchUserRecommendations = fetchUserRecommendations;
  }
});

// node_modules/@forge/bridge/out/requestTeamworkGraph/index.js
var require_requestTeamworkGraph = __commonJS({
  "node_modules/@forge/bridge/out/requestTeamworkGraph/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.requestTeamworkGraph = void 0;
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var requestTeamworkGraph = async (query, variables) => {
      const response = await callBridge("requestTeamworkGraph", { query, variables });
      return response;
    };
    exports.requestTeamworkGraph = requestTeamworkGraph;
  }
});

// node_modules/@forge/bridge/out/flag/flag.js
var require_flag = __commonJS({
  "node_modules/@forge/bridge/out/flag/flag.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.showFlag = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var callBridge = (0, bridge_1.getCallBridge)();
    var showFlag = (options) => {
      var _a;
      if (!options.id) {
        throw new errors_1.BridgeAPIError('"id" must be defined in flag options');
      }
      const result = callBridge("showFlag", {
        ...options,
        type: (_a = options.type) !== null && _a !== void 0 ? _a : "info"
      });
      return {
        close: async () => {
          await result;
          return callBridge("closeFlag", { id: options.id });
        }
      };
    };
    exports.showFlag = showFlag;
  }
});

// node_modules/@forge/bridge/out/flag/index.js
var require_flag2 = __commonJS({
  "node_modules/@forge/bridge/out/flag/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.showFlag = void 0;
    var flag_1 = require_flag();
    Object.defineProperty(exports, "showFlag", { enumerable: true, get: function() {
      return flag_1.showFlag;
    } });
  }
});

// node_modules/@forge/bridge/out/events/index.js
var require_events2 = __commonJS({
  "node_modules/@forge/bridge/out/events/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_events(), exports);
  }
});

// node_modules/@forge/bridge/out/realtime/realtime.js
var require_realtime = __commonJS({
  "node_modules/@forge/bridge/out/realtime/realtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.realtime = void 0;
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var publish = (channel, payload, options) => {
      return callBridge("publishRealtimeChannel", { channelName: channel, eventPayload: payload, options });
    };
    var subscribe = (channel, callback, options) => {
      return callBridge("subscribeRealtimeChannel", {
        channelName: channel,
        onEvent: callback,
        options
      });
    };
    var publishGlobal = (channel, payload, options) => {
      return callBridge("publishRealtimeChannel", { channelName: channel, eventPayload: payload, options, isGlobal: true });
    };
    var subscribeGlobal = (channel, callback, options) => {
      return callBridge("subscribeRealtimeChannel", {
        channelName: channel,
        onEvent: callback,
        options,
        isGlobal: true
      });
    };
    exports.realtime = {
      publish,
      subscribe,
      publishGlobal,
      subscribeGlobal
    };
  }
});

// node_modules/@forge/bridge/out/realtime/productContext.js
var require_productContext = __commonJS({
  "node_modules/@forge/bridge/out/realtime/productContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bitbucket = exports.Confluence = exports.Jira = void 0;
    var Jira;
    (function(Jira2) {
      Jira2["Board"] = "board";
      Jira2["Issue"] = "issue";
      Jira2["Project"] = "project";
    })(Jira || (exports.Jira = Jira = {}));
    var Confluence;
    (function(Confluence2) {
      Confluence2["Content"] = "content";
      Confluence2["Space"] = "space";
    })(Confluence || (exports.Confluence = Confluence = {}));
    var Bitbucket;
    (function(Bitbucket2) {
      Bitbucket2["Repository"] = "repository";
      Bitbucket2["PullRequest"] = "pullRequest";
    })(Bitbucket || (exports.Bitbucket = Bitbucket = {}));
  }
});

// node_modules/@forge/bridge/out/realtime/index.js
var require_realtime2 = __commonJS({
  "node_modules/@forge/bridge/out/realtime/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bitbucket = exports.Confluence = exports.Jira = exports.realtime = void 0;
    var realtime_1 = require_realtime();
    Object.defineProperty(exports, "realtime", { enumerable: true, get: function() {
      return realtime_1.realtime;
    } });
    var productContext_1 = require_productContext();
    Object.defineProperty(exports, "Jira", { enumerable: true, get: function() {
      return productContext_1.Jira;
    } });
    Object.defineProperty(exports, "Confluence", { enumerable: true, get: function() {
      return productContext_1.Confluence;
    } });
    Object.defineProperty(exports, "Bitbucket", { enumerable: true, get: function() {
      return productContext_1.Bitbucket;
    } });
  }
});

// node_modules/@forge/bridge/out/rovo/open.js
var require_open2 = __commonJS({
  "node_modules/@forge/bridge/out/rovo/open.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.open = exports.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var MAX_AGENT_LENGTH = 30;
    var callBridge = (0, bridge_1.getCallBridge)();
    exports.OPEN_ROVO_BRIDGE_ERROR_MESSAGE = "Unable to open Rovo Chat due to usage in an unsupported product. Only Confluence, Jira and some Jira Service Management modules are supported at this point. See https://developer.atlassian.com/platform/forge/apis-reference/ui-api-bridge/rovo/";
    var transformRovoPayload = (openRovoPayload) => {
      switch (openRovoPayload.type) {
        case "forge":
          return {
            agentName: openRovoPayload.agentName,
            agentKey: openRovoPayload.agentKey,
            prompt: openRovoPayload.prompt
          };
        case "atlassian":
          return {
            agentName: openRovoPayload.agentName,
            prompt: openRovoPayload.prompt
          };
        default:
          return { prompt: openRovoPayload.prompt };
      }
    };
    var open = async (openRovoPayload) => {
      if (openRovoPayload.type === "forge") {
        if (openRovoPayload.agentName.length > MAX_AGENT_LENGTH) {
          throw new Error("rovo agent name too long");
        }
        if (openRovoPayload.agentKey.length > MAX_AGENT_LENGTH) {
          throw new Error("rovo agent key too long");
        }
      }
      const rovoArgs = transformRovoPayload(openRovoPayload);
      const success = await callBridge("openRovo", rovoArgs);
      if (success === false) {
        throw new errors_1.BridgeAPIError(exports.OPEN_ROVO_BRIDGE_ERROR_MESSAGE);
      }
    };
    exports.open = open;
  }
});

// node_modules/@forge/bridge/out/rovo/isEnabled.js
var require_isEnabled = __commonJS({
  "node_modules/@forge/bridge/out/rovo/isEnabled.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEnabled = void 0;
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var isEnabled = () => {
      return callBridge("isRovoEnabled");
    };
    exports.isEnabled = isEnabled;
  }
});

// node_modules/@forge/bridge/out/rovo/rovo.js
var require_rovo = __commonJS({
  "node_modules/@forge/bridge/out/rovo/rovo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rovo = void 0;
    var open_1 = require_open2();
    var isEnabled_1 = require_isEnabled();
    exports.rovo = {
      open: open_1.open,
      isEnabled: isEnabled_1.isEnabled
    };
  }
});

// node_modules/@forge/bridge/out/rovo/index.js
var require_rovo2 = __commonJS({
  "node_modules/@forge/bridge/out/rovo/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_rovo(), exports);
  }
});

// node_modules/@forge/bridge/out/cookieConsent/getCookieConsentPreferences.js
var require_getCookieConsentPreferences = __commonJS({
  "node_modules/@forge/bridge/out/cookieConsent/getCookieConsentPreferences.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCookieConsentPreferences = void 0;
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var getCookieConsentPreferences = async () => {
      var _a;
      try {
        return (_a = await callBridge("getCookieConsentPreferences")) !== null && _a !== void 0 ? _a : null;
      } catch {
        return null;
      }
    };
    exports.getCookieConsentPreferences = getCookieConsentPreferences;
  }
});

// node_modules/@forge/bridge/out/cookieConsent/index.js
var require_cookieConsent = __commonJS({
  "node_modules/@forge/bridge/out/cookieConsent/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_getCookieConsentPreferences(), exports);
  }
});

// node_modules/@forge/bridge/out/i18n/index.js
var require_i18n = __commonJS({
  "node_modules/@forge/bridge/out/i18n/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTranslationFunction = exports.getTranslations = exports.resetTranslationsCache = void 0;
    var i18n_1 = require_out();
    var view_1 = require_view2();
    var frontendResourcesAccessor = {
      getI18nInfoConfig: async () => {
        const resp = await fetch(`./${i18n_1.I18N_BUNDLE_FOLDER_NAME}/${i18n_1.I18N_INFO_FILE_NAME}`);
        if (!resp.ok) {
          throw new Error("Failed to get i18n info config: " + resp.statusText);
        }
        const info = await resp.json();
        return info.config;
      },
      getTranslationResource: async (locale) => {
        const resp = await fetch(`./${i18n_1.I18N_BUNDLE_FOLDER_NAME}/${locale}.json`);
        if (!resp.ok) {
          throw new Error(`Failed to get translation resource for locale: ${locale}`);
        }
        return resp.json();
      }
    };
    var translationsGetter = new i18n_1.TranslationsGetter(frontendResourcesAccessor);
    var resetTranslationsCache = () => {
      translationsGetter.reset();
    };
    exports.resetTranslationsCache = resetTranslationsCache;
    var getTranslations = async (locale = null, options = {
      fallback: true
    }) => {
      let targetLocale = locale;
      if (!targetLocale) {
        const context = await view_1.view.getContext();
        targetLocale = context.locale;
      }
      return await translationsGetter.getTranslations(targetLocale, options);
    };
    exports.getTranslations = getTranslations;
    var createTranslationFunction = async (locale = null) => {
      let targetLocale = locale;
      if (!targetLocale) {
        const context = await view_1.view.getContext();
        targetLocale = context.locale;
      }
      const translator = new i18n_1.Translator(targetLocale, translationsGetter);
      await translator.init();
      return (i18nKey, defaultValue) => {
        var _a, _b;
        return (_b = (_a = translator.translate(i18nKey)) !== null && _a !== void 0 ? _a : defaultValue) !== null && _b !== void 0 ? _b : i18nKey;
      };
    };
    exports.createTranslationFunction = createTranslationFunction;
  }
});

// node_modules/@forge/bridge/out/permissions/permissions.js
var require_permissions = __commonJS({
  "node_modules/@forge/bridge/out/permissions/permissions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.permissions = void 0;
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var egressGet = async (payload) => {
      return callBridge("__permission__egressGet", payload);
    };
    var egressSet = async (payload) => {
      return callBridge("__permission__egressSet", payload);
    };
    var egressDeleteDomain = async (payload) => {
      return callBridge("__permission__egressDeleteDomain", payload);
    };
    var egressDeleteGroup = async (payload) => {
      return callBridge("__permission__egressDeleteGroup", payload);
    };
    var remoteGet = async (payload) => {
      return callBridge("__permission__remoteGet", payload);
    };
    var remoteSet = async (payload) => {
      return callBridge("__permission__remoteSet", payload);
    };
    exports.permissions = {
      egress: {
        get: egressGet,
        set: egressSet,
        deleteDomain: egressDeleteDomain,
        deleteGroup: egressDeleteGroup
      },
      remote: {
        get: remoteGet,
        set: remoteSet
      }
    };
  }
});

// node_modules/@forge/egress/out/egress/url-parser.js
var require_url_parser = __commonJS({
  "node_modules/@forge/egress/out/egress/url-parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseUrl = parseUrl;
    function parseUrl(url) {
      var _a, _b;
      const protocol = (_b = (_a = url.match(/^(.*?:)/)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "https:";
      const hostAndPath = url.replace(protocol, "").replace(/^\/*/, "").replace(/^\\*/, "").split("?")[0].split("#")[0];
      const hostname = hostAndPath.split("/")[0];
      const pathname = hostAndPath.slice(hostname.length) || "/";
      return { protocol, hostname, pathname };
    }
  }
});

// node_modules/@forge/egress/out/egress/utils.js
var require_utils2 = __commonJS({
  "node_modules/@forge/egress/out/egress/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEgressesBasedOnToggles = exports.sortAndGroupEgressPermissionsByDomain = exports.EgressCategory = exports.EgressType = void 0;
    exports.globToRegex = globToRegex;
    var url_parser_1 = require_url_parser();
    function globToRegex(pattern) {
      const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
      const regexPattern = escaped.replace(/\*/g, ".*");
      return new RegExp(`^${regexPattern}$`);
    }
    var sortAndGroupEgressPermissionsByDomain = (egressAddresses) => {
      if ((egressAddresses === null || egressAddresses === void 0 ? void 0 : egressAddresses.length) === 0) {
        return [];
      }
      const protocolRegex = /^(.*?:\/\/)/;
      const domains = /* @__PURE__ */ new Set();
      const wildcardDomains = [];
      egressAddresses.forEach((item) => {
        const itemWithProtocol = protocolRegex.test(item) ? item : `https://${item}`;
        const url = (0, url_parser_1.parseUrl)(itemWithProtocol);
        if (url.hostname.startsWith("*")) {
          domains.add(url.hostname.substring(2));
          wildcardDomains.push(globToRegex(url.hostname));
        } else {
          domains.add(url.hostname);
        }
      });
      return [...domains].sort().reduce((grouped, domain) => {
        if (!wildcardDomains.some((pattern) => pattern.test(domain))) {
          grouped.push(domain);
        }
        return grouped;
      }, []);
    };
    exports.sortAndGroupEgressPermissionsByDomain = sortAndGroupEgressPermissionsByDomain;
    var EgressType;
    (function(EgressType2) {
      EgressType2["FetchBackendSide"] = "FETCH_BACKEND_SIDE";
      EgressType2["FetchClientSide"] = "FETCH_CLIENT_SIDE";
      EgressType2["Fonts"] = "FONTS";
      EgressType2["Frames"] = "FRAMES";
      EgressType2["Images"] = "IMAGES";
      EgressType2["Media"] = "MEDIA";
      EgressType2["Scripts"] = "SCRIPTS";
      EgressType2["Styles"] = "STYLES";
    })(EgressType || (exports.EgressType = EgressType = {}));
    var EgressCategory;
    (function(EgressCategory2) {
      EgressCategory2["ANALYTICS"] = "ANALYTICS";
    })(EgressCategory || (exports.EgressCategory = EgressCategory = {}));
    var getEgressesBasedOnToggles = (input) => {
      const filteredEgresses = input.egress.filter((egress) => {
        var _a;
        if (((_a = egress.category) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === EgressCategory.ANALYTICS) {
          if (input.installationConfig) {
            const analyticsConfig = input.installationConfig.find((config) => config.key.toUpperCase() === "ALLOW_EGRESS_ANALYTICS");
            return (analyticsConfig === null || analyticsConfig === void 0 ? void 0 : analyticsConfig.value) !== false;
          } else {
            return input.overrides.ALLOW_EGRESS_ANALYTICS !== false;
          }
        }
        return true;
      });
      const egressByType = /* @__PURE__ */ new Map();
      for (const egress of filteredEgresses) {
        if (!egressByType.has(egress.type)) {
          egressByType.set(egress.type, egress.addresses);
        }
        egressByType.set(egress.type, [...egressByType.get(egress.type), ...egress.addresses]);
      }
      return [...egressByType.entries()].map(([type, egresses]) => ({
        type,
        addresses: [...new Set(egresses)]
      }));
    };
    exports.getEgressesBasedOnToggles = getEgressesBasedOnToggles;
  }
});

// node_modules/@forge/egress/out/egress/egress-filtering-service.js
var require_egress_filtering_service = __commonJS({
  "node_modules/@forge/egress/out/egress/egress-filtering-service.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EgressFilteringService = void 0;
    var url_parser_1 = require_url_parser();
    var utils_1 = require_utils2();
    var EgressFilteringService = class {
      constructor(allowList) {
        this.URLs = allowList.filter((domainOrURL) => !domainOrURL.startsWith("*")).map((url) => this.parseUrl(url));
        this.wildcardDomains = allowList.filter((domainOrURL) => domainOrURL !== "*").map((url) => this.parseUrl(url)).filter((url) => decodeURIComponent(url.hostname).startsWith("*")).map((url) => ({
          ...url,
          regex: (0, utils_1.globToRegex)(decodeURIComponent(url.hostname))
        }));
        this.allowsEverything = allowList.includes("*");
      }
      parseUrl(url) {
        return (0, url_parser_1.parseUrl)(url);
      }
      containsWildCardEgress() {
        return this.allowsEverything;
      }
      isValidUrl(url) {
        if (this.allowsEverything) {
          return true;
        }
        const parsedUrl = this.parseUrl(url);
        return this.allowedDomainExact(parsedUrl, this.URLs) || this.allowedDomainPattern(parsedUrl, this.wildcardDomains);
      }
      isValidUrlCSP(url) {
        if (this.allowsEverything) {
          return true;
        }
        const parsedUrl = this.parseUrl(url);
        return this.allowedDomainExactAndPath(parsedUrl, this.URLs) || this.allowedDomainPatternAndPath(parsedUrl, this.wildcardDomains);
      }
      allowedDomainExact(domain, allowList) {
        return allowList.filter((allowed) => allowed.protocol === domain.protocol).some((url) => url.hostname === domain.hostname);
      }
      allowedDomainExactAndPath(domain, allowList) {
        return allowList.filter((allowed) => this.protocolMatchesCSP(allowed.protocol, domain.protocol)).filter((allowed) => allowed.hostname === domain.hostname).some((allowed) => this.pathMatches(allowed.pathname, domain.pathname));
      }
      allowedDomainPattern(domain, allowList) {
        return allowList.filter((allowed) => allowed.protocol === domain.protocol).some((pattern) => pattern.regex.test(domain.hostname));
      }
      allowedDomainPatternAndPath(domain, allowList) {
        return allowList.filter((pattern) => this.protocolMatchesCSP(pattern.protocol, domain.protocol)).filter((pattern) => pattern.regex.test(domain.hostname)).some((allowed) => this.pathMatches(allowed.pathname, domain.pathname));
      }
      protocolMatchesCSP(allowedProtocol, requestProtocol) {
        if (allowedProtocol === requestProtocol) {
          return true;
        }
        if (allowedProtocol === "http:" && requestProtocol === "https:") {
          return true;
        }
        if (allowedProtocol === "ws:" && requestProtocol === "wss:") {
          return true;
        }
        return false;
      }
      pathMatches(allowedPath, requestPath) {
        if (allowedPath === "/") {
          return true;
        }
        if (allowedPath.endsWith("/")) {
          return requestPath.startsWith(allowedPath);
        }
        return requestPath === allowedPath;
      }
    };
    exports.EgressFilteringService = EgressFilteringService;
  }
});

// node_modules/@forge/egress/out/egress/index.js
var require_egress = __commonJS({
  "node_modules/@forge/egress/out/egress/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_egress_filtering_service(), exports);
    tslib_1.__exportStar(require_url_parser(), exports);
    tslib_1.__exportStar(require_utils2(), exports);
  }
});

// node_modules/@forge/egress/out/index.js
var require_out2 = __commonJS({
  "node_modules/@forge/egress/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_egress(), exports);
  }
});

// node_modules/@forge/bridge/out/permissions/permissionsUtil.js
var require_permissionsUtil = __commonJS({
  "node_modules/@forge/bridge/out/permissions/permissionsUtil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createPermissionUtils = createPermissionUtils;
    exports.checkPermissions = checkPermissions;
    var egress_1 = require_out2();
    var view_1 = require_view2();
    function extractUrlString(url) {
      if (typeof url === "string") {
        return url;
      }
      if ("address" in url && url.address) {
        return url.address;
      }
      return url.remote || "";
    }
    var RESOURCE_TYPES = ["fonts", "styles", "frames", "images", "media", "scripts"];
    var FETCH_TYPES = ["backend", "client"];
    function createPermissionUtils(runtimePermissions) {
      if (!runtimePermissions) {
        return null;
      }
      const { scopes, external = {} } = runtimePermissions;
      const scopeArray = Array.isArray(scopes) ? scopes : Object.keys(scopes || {});
      return {
        hasScope: (scope) => scopeArray.includes(scope),
        canFetchFrom: (type, url) => {
          var _a;
          const fetchUrls = (_a = external.fetch) === null || _a === void 0 ? void 0 : _a[type];
          if (!(fetchUrls === null || fetchUrls === void 0 ? void 0 : fetchUrls.length))
            return false;
          const allowList = fetchUrls.map(extractUrlString).filter((u) => u.length > 0);
          if (allowList.length === 0)
            return false;
          const egressFilter = new egress_1.EgressFilteringService(allowList);
          const egressFilterWithCSP = egressFilter;
          return type === "client" ? egressFilterWithCSP.isValidUrlCSP(url) : egressFilter.isValidUrl(url);
        },
        canLoadResource: (type, url) => {
          const resourceUrls = external[type];
          if (!(resourceUrls === null || resourceUrls === void 0 ? void 0 : resourceUrls.length))
            return false;
          const allowList = resourceUrls.map(extractUrlString).filter((u) => u.length > 0);
          if (allowList.length === 0)
            return false;
          const egressFilter = new egress_1.EgressFilteringService(allowList);
          const egressFilterWithCSP = egressFilter;
          return egressFilterWithCSP.isValidUrlCSP(url);
        },
        getScopes: () => scopeArray,
        getExternalPermissions: () => external,
        hasAnyPermissions: () => scopeArray.length > 0 || Object.keys(external).length > 0
      };
    }
    function checkScopes(requiredScopes, permissionUtils) {
      if (!(requiredScopes === null || requiredScopes === void 0 ? void 0 : requiredScopes.length)) {
        return void 0;
      }
      const missingScopes = requiredScopes.filter((scope) => !permissionUtils.hasScope(scope));
      return missingScopes.length > 0 ? missingScopes : void 0;
    }
    function checkFetchPermissions(requiredFetch, permissionUtils) {
      if (!(requiredFetch === null || requiredFetch === void 0 ? void 0 : requiredFetch.fetch)) {
        return void 0;
      }
      const missingFetch = {};
      FETCH_TYPES.forEach((type) => {
        var _a;
        const requiredUrls = (_a = requiredFetch.fetch) === null || _a === void 0 ? void 0 : _a[type];
        if (requiredUrls === null || requiredUrls === void 0 ? void 0 : requiredUrls.length) {
          const missingUrls = requiredUrls.filter((url) => !permissionUtils.canFetchFrom(type, url));
          if (missingUrls.length > 0) {
            missingFetch[type] = missingUrls;
          }
        }
      });
      return Object.keys(missingFetch).length > 0 ? missingFetch : void 0;
    }
    function checkResourcePermissions(requiredExternal, permissionUtils) {
      const missingResources = {};
      RESOURCE_TYPES.forEach((type) => {
        const requiredUrls = requiredExternal === null || requiredExternal === void 0 ? void 0 : requiredExternal[type];
        if (requiredUrls === null || requiredUrls === void 0 ? void 0 : requiredUrls.length) {
          const missingUrls = requiredUrls.filter((url) => !permissionUtils.canLoadResource(type, url));
          if (missingUrls.length > 0) {
            missingResources[type] = missingUrls;
          }
        }
      });
      return Object.keys(missingResources).length > 0 ? missingResources : void 0;
    }
    function checkExternalPermissions(requiredExternal, permissionUtils) {
      if (!requiredExternal) {
        return void 0;
      }
      const missingFetch = checkFetchPermissions(requiredExternal, permissionUtils);
      const missingResources = checkResourcePermissions(requiredExternal, permissionUtils);
      if (!missingFetch && !missingResources) {
        return void 0;
      }
      const missingExternal = {};
      if (missingFetch) {
        missingExternal.fetch = missingFetch;
      }
      if (missingResources) {
        Object.assign(missingExternal, missingResources);
      }
      return missingExternal;
    }
    function validateObjectField(value, fieldPath) {
      if (value !== void 0) {
        if (typeof value !== "object" || value === null || Array.isArray(value)) {
          throw new TypeError(`${fieldPath} should be an object, not ${Array.isArray(value) ? "an array" : `a ${typeof value}`}`);
        }
      }
    }
    function validateArrayField(value, fieldPath) {
      if (value !== void 0 && !Array.isArray(value)) {
        throw new TypeError(`${fieldPath} should be an array, not a ${typeof value}`);
      }
    }
    function validatePermissionShape(requiredPermissions) {
      validateArrayField(requiredPermissions.scopes, "scopes");
      const external = requiredPermissions.external;
      if (external === void 0)
        return;
      validateObjectField(external, "external");
      if (external.fetch !== void 0) {
        validateObjectField(external.fetch, "external.fetch");
        for (const type of FETCH_TYPES) {
          validateArrayField(external.fetch[type], `external.fetch.${type}`);
        }
      }
      for (const type of RESOURCE_TYPES) {
        validateArrayField(external[type], `external.${type}`);
      }
    }
    async function checkPermissions(requiredPermissions, runtimePermissions) {
      var _a;
      if (!requiredPermissions) {
        return { granted: false, missing: null };
      }
      validatePermissionShape(requiredPermissions);
      if (!((_a = requiredPermissions.scopes) === null || _a === void 0 ? void 0 : _a.length) && !requiredPermissions.external) {
        return { granted: true, missing: null };
      }
      let permissionsToCheck = runtimePermissions;
      if (!permissionsToCheck) {
        const context = await view_1.view.getContext();
        permissionsToCheck = context.permissions;
      }
      const permissionUtils = createPermissionUtils(permissionsToCheck);
      if (!permissionUtils) {
        return { granted: false, missing: null };
      }
      const missing = {};
      let hasAllRequiredPermissions = true;
      const missingScopes = checkScopes(requiredPermissions.scopes, permissionUtils);
      if (missingScopes) {
        missing.scopes = missingScopes;
        hasAllRequiredPermissions = false;
      }
      const missingExternal = checkExternalPermissions(requiredPermissions.external, permissionUtils);
      if (missingExternal) {
        missing.external = missingExternal;
        hasAllRequiredPermissions = false;
      }
      return {
        granted: hasAllRequiredPermissions,
        missing: hasAllRequiredPermissions ? null : missing
      };
    }
  }
});

// node_modules/@forge/bridge/out/permissions/index.js
var require_permissions2 = __commonJS({
  "node_modules/@forge/bridge/out/permissions/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_permissions(), exports);
    tslib_1.__exportStar(require_permissionsUtil(), exports);
  }
});

// node_modules/@forge/bridge/out/object-store/upload.js
var require_upload = __commonJS({
  "node_modules/@forge/bridge/out/object-store/upload.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.upload = exports.createUploadPromises = void 0;
    var invoke_1 = require_invoke2();
    var errors_1 = require_errors();
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var base64ToBlob = (base64, mimeType) => {
      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: mimeType || "application/octet-stream" });
    };
    var getObjectMetadata = async (blob) => {
      const length = blob.size;
      const arrayBuffer = await blob.arrayBuffer();
      const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
      const hashArray = new Uint8Array(hashBuffer);
      const checksum2 = btoa(String.fromCharCode(...hashArray));
      const checksumType = "SHA256";
      return {
        length,
        checksum: checksum2,
        checksumType
      };
    };
    var createUploadPromises = async ({ functionKey, objects }) => {
      if (!functionKey || functionKey.length === 0) {
        throw new errors_1.BridgeAPIError("functionKey is required to filter and generate presigned URLs");
      }
      if (!Array.isArray(objects) || objects.length === 0) {
        throw new errors_1.BridgeAPIError("objects array is required and must not be empty");
      }
      const blobs = objects.map((obj, index) => {
        if (obj instanceof Blob) {
          return obj;
        }
        const isBase64Object = obj && typeof obj === "object" && "data" in obj && typeof obj.data === "string";
        if (!isBase64Object) {
          throw new errors_1.BridgeAPIError(`Invalid object type at index ${index}. Only Blob or Base64Object (with data string and optional mimeType) are accepted.`);
        }
        try {
          return base64ToBlob(obj.data, obj.mimeType);
        } catch (e) {
          throw new errors_1.BridgeAPIError(`Invalid base64 data at index ${index}. The data string must be valid base64 encoded.`);
        }
      });
      const allObjectMetadata = await Promise.all(blobs.map((blob) => getObjectMetadata(blob)));
      const presignedURLsToObjectMetadata = await (0, invoke_1.invoke)(functionKey, {
        allObjectMetadata
      });
      if (!presignedURLsToObjectMetadata || typeof presignedURLsToObjectMetadata !== "object") {
        throw new errors_1.BridgeAPIError("Invalid response from functionKey");
      }
      const checksumToBlobMap = /* @__PURE__ */ new Map();
      const checksumToIndexMap = /* @__PURE__ */ new Map();
      blobs.forEach((blob, index) => {
        const metadata = allObjectMetadata[index];
        checksumToBlobMap.set(metadata.checksum, blob);
        checksumToIndexMap.set(metadata.checksum, index);
      });
      const uploadPromises = Object.entries(presignedURLsToObjectMetadata).map(([presignedUrl, metadata]) => {
        const { key: key2, checksum: checksum2 } = metadata;
        const object = checksumToBlobMap.get(checksum2);
        const index = checksumToIndexMap.get(checksum2);
        if (index === void 0) {
          return {
            promise: Promise.resolve({
              success: false,
              key: key2,
              error: `Index not found for checksum ${checksum2}`
            }),
            index: -1
          };
        }
        if (!object) {
          return {
            promise: Promise.resolve({
              success: false,
              key: key2,
              error: `Blob not found for checksum ${checksum2}`
            }),
            index
          };
        }
        const uploadPromise = (async () => {
          try {
            const response = await fetch(presignedUrl, {
              method: "PUT",
              body: object,
              headers: {
                "Content-Type": object.type || "application/octet-stream",
                "Content-Length": object.size.toString()
              }
            });
            return {
              success: response.ok,
              key: key2,
              status: response.status,
              error: response.ok ? void 0 : `Upload failed with status ${response.status}`
            };
          } catch (error) {
            return {
              success: false,
              key: key2,
              status: 503,
              error: error instanceof Error ? error.message : "Upload failed"
            };
          }
        })();
        return { promise: uploadPromise, index, objectType: object.type, objectSize: object.size };
      });
      return uploadPromises;
    };
    exports.createUploadPromises = createUploadPromises;
    var upload = async ({ functionKey, objects }) => {
      void callBridge("trackObjectStoreAction", { action: "upload" });
      const uploadPromises = await (0, exports.createUploadPromises)({ functionKey, objects });
      const results = await Promise.all(uploadPromises.map((item) => item.promise));
      return results;
    };
    exports.upload = upload;
  }
});

// node_modules/@forge/bridge/out/object-store/deleteObjects.js
var require_deleteObjects = __commonJS({
  "node_modules/@forge/bridge/out/object-store/deleteObjects.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deleteObjects = void 0;
    var invoke_1 = require_invoke2();
    var errors_1 = require_errors();
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var deleteObjects = async ({ functionKey, keys }) => {
      void callBridge("trackObjectStoreAction", { action: "delete" });
      if (!functionKey || functionKey.length === 0) {
        throw new errors_1.BridgeAPIError("functionKey is required to delete objects");
      }
      if (!Array.isArray(keys) || keys.length === 0) {
        throw new errors_1.BridgeAPIError("keys array is required and must not be empty");
      }
      await Promise.all(keys.map(async (key2) => {
        await (0, invoke_1.invoke)(functionKey, { key: key2 });
      }));
    };
    exports.deleteObjects = deleteObjects;
  }
});

// node_modules/@forge/bridge/out/object-store/download.js
var require_download = __commonJS({
  "node_modules/@forge/bridge/out/object-store/download.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.download = void 0;
    var invoke_1 = require_invoke2();
    var errors_1 = require_errors();
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var download = async ({ functionKey, keys }) => {
      void callBridge("trackObjectStoreAction", { action: "download" });
      if (!functionKey || functionKey.length === 0) {
        throw new errors_1.BridgeAPIError("functionKey is required to filter and generate download URLs");
      }
      if (!Array.isArray(keys) || keys.length === 0) {
        throw new errors_1.BridgeAPIError("keys array is required and must not be empty");
      }
      const downloadUrlsTokeys = await (0, invoke_1.invoke)(functionKey, {
        keys
      });
      if (!downloadUrlsTokeys || typeof downloadUrlsTokeys !== "object") {
        throw new errors_1.BridgeAPIError("Invalid response from functionKey");
      }
      const downloadPromises = Object.entries(downloadUrlsTokeys).map(async ([downloadUrl, key2]) => {
        try {
          const response = await fetch(downloadUrl, {
            method: "GET"
          });
          if (!response.ok) {
            return {
              success: false,
              key: key2,
              status: response.status,
              error: `Download failed with status ${response.status}`
            };
          }
          const blob = await response.blob();
          return {
            success: true,
            key: key2,
            blob,
            status: response.status
          };
        } catch (error) {
          return {
            success: false,
            key: key2,
            status: 503,
            error: error instanceof Error ? error.message : "Download failed"
          };
        }
      });
      const results = await Promise.all(downloadPromises);
      return results;
    };
    exports.download = download;
  }
});

// node_modules/@forge/bridge/out/object-store/getMetadata.js
var require_getMetadata = __commonJS({
  "node_modules/@forge/bridge/out/object-store/getMetadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getMetadata = void 0;
    var index_1 = require_invoke2();
    var errors_1 = require_errors();
    var bridge_1 = require_bridge();
    var callBridge = (0, bridge_1.getCallBridge)();
    var getMetadata = async ({ functionKey, keys }) => {
      void callBridge("trackObjectStoreAction", { action: "getMetadata" });
      if (!functionKey || functionKey.length === 0) {
        throw new errors_1.BridgeAPIError("functionKey is required to filter and generate object metadata");
      }
      if (!Array.isArray(keys) || keys.length === 0) {
        throw new errors_1.BridgeAPIError("keys array is required and must not be empty");
      }
      const results = await Promise.all(keys.map(async (key2) => {
        const result = await (0, index_1.invoke)(functionKey, { key: key2 });
        if (!result || typeof result !== "object") {
          return {
            key: key2,
            error: "Invalid response from functionKey"
          };
        }
        return result;
      }));
      return results;
    };
    exports.getMetadata = getMetadata;
  }
});

// node_modules/@forge/bridge/out/object-store/objectStore.js
var require_objectStore = __commonJS({
  "node_modules/@forge/bridge/out/object-store/objectStore.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUploadPromises = exports.objectStore = void 0;
    var upload_1 = require_upload();
    Object.defineProperty(exports, "createUploadPromises", { enumerable: true, get: function() {
      return upload_1.createUploadPromises;
    } });
    var deleteObjects_1 = require_deleteObjects();
    var download_1 = require_download();
    var getMetadata_1 = require_getMetadata();
    exports.objectStore = {
      upload: upload_1.upload,
      download: download_1.download,
      getMetadata: getMetadata_1.getMetadata,
      delete: deleteObjects_1.deleteObjects
    };
  }
});

// node_modules/@forge/bridge/out/object-store/types.js
var require_types2 = __commonJS({
  "node_modules/@forge/bridge/out/object-store/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@forge/bridge/out/object-store/index.js
var require_object_store = __commonJS({
  "node_modules/@forge/bridge/out/object-store/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_objectStore(), exports);
    tslib_1.__exportStar(require_types2(), exports);
  }
});

// node_modules/@forge/bridge/out/featureFlags/evaluator.js
var require_evaluator = __commonJS({
  "node_modules/@forge/bridge/out/featureFlags/evaluator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Evaluator = void 0;
    var Evaluator = class {
      constructor(results) {
        this.results = results;
      }
      checkFlag(flagName, defaultValue) {
        if (!this.results || !this.results.feature_flags) {
          return defaultValue;
        }
        const featureFlags = this.results.feature_flags;
        let hashedValue = "";
        try {
          hashedValue = this.getHashedValue(flagName);
        } catch (err) {
          console.error("Unexpected error occurred while evaluating flag ", err);
          return defaultValue;
        }
        if (!hashedValue) {
          return defaultValue;
        }
        const evaluatedFlag = featureFlags[hashedValue];
        if (evaluatedFlag) {
          if (evaluatedFlag.disabled) {
            return false;
          }
          return evaluatedFlag.value;
        }
        return defaultValue;
      }
      shutDown() {
        this.results = void 0;
      }
      // To be Updated with proper hashing function
      getHashedValue(flagName) {
        if (typeof flagName !== "string") {
          return "";
        }
        const input = flagName.trim();
        if (input.length === 0) {
          return "";
        }
        let hash = 5381;
        for (let i = 0; i < input.length; i += 1) {
          const charCode = input.charCodeAt(i);
          hash = (hash << 5) + hash + charCode;
          hash |= 0;
        }
        return (hash >>> 0).toString();
      }
    };
    exports.Evaluator = Evaluator;
  }
});

// node_modules/@forge/bridge/out/featureFlags/initFeatureFlags.js
var require_initFeatureFlags = __commonJS({
  "node_modules/@forge/bridge/out/featureFlags/initFeatureFlags.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initFeatureFlags = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var utils_1 = require_utils();
    var maxOps = 500;
    var intervalInMs = 1e3 * 25;
    var callBridge = (0, bridge_1.getCallBridge)();
    var validatePayload = (payload) => {
      if (!payload || !payload.user || !payload.config) {
        throw new errors_1.BridgeAPIError("Missing required parameters. Parameter user is required in the payload.");
      }
      if (!payload.config.environment || !["development", "staging", "production"].includes(payload.config.environment)) {
        throw new errors_1.BridgeAPIError("Invalid environment. Valid environments are: development, staging, production");
      }
      if (Object.values(payload).some((val) => typeof val === "function")) {
        throw new errors_1.BridgeAPIError("Passing functions as part of the payload is not supported!");
      }
    };
    var _initFeatureFlags = (payload) => {
      validatePayload(payload);
      return callBridge("initFeatureFlags", { user: payload.user, config: payload.config });
    };
    exports.initFeatureFlags = (0, utils_1.withRateLimiter)(_initFeatureFlags, maxOps, intervalInMs, `Feature flags initialisation calls are rate limited at ${maxOps}req/${intervalInMs / 1e3}s`);
  }
});

// node_modules/@forge/bridge/out/featureFlags/featureFlags.js
var require_featureFlags = __commonJS({
  "node_modules/@forge/bridge/out/featureFlags/featureFlags.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeatureFlags = void 0;
    var evaluator_1 = require_evaluator();
    var initFeatureFlags_1 = require_initFeatureFlags();
    var FeatureFlags = class {
      constructor() {
        this.initialized = false;
      }
      /**
       * Initialize the feature flags client
       */
      async initialize(user, config = { environment: "development" }) {
        if (this.isInitialized()) {
          return;
        }
        if (!(config === null || config === void 0 ? void 0 : config.environment)) {
          config.environment = "development";
        }
        const result = await (0, initFeatureFlags_1.initFeatureFlags)({ user, config });
        this.initialized = true;
        this.evaluator = new evaluator_1.Evaluator(result);
      }
      /**
       * Check if a feature flag is enabled for the user
       */
      checkFlag(flagName, defaultValue = false) {
        if (!this.isInitialized() || !this.evaluator) {
          throw new Error("FeatureFlags not initialized. Call initialize() first.");
        }
        return this.evaluator.checkFlag(flagName, defaultValue);
      }
      /**
       * Shutdown the feature flags client
       */
      shutdown() {
        if (!this.isInitialized()) {
          return;
        }
        this.initialized = false;
        this.evaluator.shutDown();
      }
      isInitialized() {
        return this.initialized;
      }
    };
    exports.FeatureFlags = FeatureFlags;
  }
});

// node_modules/@forge/bridge/out/featureFlags/index.js
var require_featureFlags2 = __commonJS({
  "node_modules/@forge/bridge/out/featureFlags/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeatureFlags = void 0;
    var featureFlags_1 = require_featureFlags();
    Object.defineProperty(exports, "FeatureFlags", { enumerable: true, get: function() {
      return featureFlags_1.FeatureFlags;
    } });
  }
});

// node_modules/@forge/bridge/out/frontendCustomMetrics/frontendCustomMetrics.js
var require_frontendCustomMetrics = __commonJS({
  "node_modules/@forge/bridge/out/frontendCustomMetrics/frontendCustomMetrics.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.frontendCustomMetrics = void 0;
    var bridge_1 = require_bridge();
    var errors_1 = require_errors();
    var callBridge = (0, bridge_1.getCallBridge)();
    var emit = async (customMetricName, value) => {
      await callBridge("emitFrontendCustomMetric", {
        customMetricName,
        value
      });
    };
    var MAX_METRIC_NAME_LENGTH = 50;
    var METRIC_NAME_REGEX = /^[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?$/;
    var validateMetricName = (name) => {
      if (name.trim().length === 0) {
        throw new errors_1.BridgeAPIError("Custom metric name cannot be empty");
      }
      if (name.length > MAX_METRIC_NAME_LENGTH) {
        throw new errors_1.BridgeAPIError(`Custom metric name cannot exceed ${MAX_METRIC_NAME_LENGTH} characters`);
      }
      if (!METRIC_NAME_REGEX.test(name)) {
        throw new errors_1.BridgeAPIError("Custom metric name must start and end with alphanumeric characters and can only contain letters, numbers, dots (.), and hyphens (-)");
      }
      if (name.includes("..") || name.includes("--")) {
        throw new errors_1.BridgeAPIError("Custom metric name cannot contain consecutive dots or hyphens");
      }
    };
    var counter = (name) => {
      validateMetricName(name);
      return {
        incr: () => emit(name, 1),
        incrBy: (value) => {
          if (value <= 0) {
            throw new errors_1.BridgeAPIError("Counter value must be a positive number");
          }
          return emit(name, value);
        }
      };
    };
    exports.frontendCustomMetrics = { counter };
  }
});

// node_modules/@forge/bridge/out/frontendCustomMetrics/index.js
var require_frontendCustomMetrics2 = __commonJS({
  "node_modules/@forge/bridge/out/frontendCustomMetrics/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_frontendCustomMetrics(), exports);
  }
});

// node_modules/@forge/bridge/out/index.js
var require_out3 = __commonJS({
  "node_modules/@forge/bridge/out/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.i18n = exports.NavigationTarget = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var targets_1 = require_targets();
    Object.defineProperty(exports, "NavigationTarget", { enumerable: true, get: function() {
      return targets_1.NavigationTarget;
    } });
    tslib_1.__exportStar(require_invoke2(), exports);
    tslib_1.__exportStar(require_invoke_endpoint2(), exports);
    tslib_1.__exportStar(require_view2(), exports);
    tslib_1.__exportStar(require_router2(), exports);
    tslib_1.__exportStar(require_modal2(), exports);
    tslib_1.__exportStar(require_fetch2(), exports);
    tslib_1.__exportStar(require_requestTeamworkGraph(), exports);
    tslib_1.__exportStar(require_flag2(), exports);
    tslib_1.__exportStar(require_events2(), exports);
    tslib_1.__exportStar(require_realtime2(), exports);
    tslib_1.__exportStar(require_rovo2(), exports);
    tslib_1.__exportStar(require_cookieConsent(), exports);
    exports.i18n = tslib_1.__importStar(require_i18n());
    tslib_1.__exportStar(require_permissions2(), exports);
    tslib_1.__exportStar(require_object_store(), exports);
    tslib_1.__exportStar(require_featureFlags2(), exports);
    tslib_1.__exportStar(require_frontendCustomMetrics2(), exports);
  }
});

// src/entry.mjs
var import_bridge = __toESM(require_out3(), 1);

// src/core.mjs
var MAX_ISSUES = 5;
var MAX_SNAPSHOT_BYTES = 65536;
var RULE_VERSION = "lens-signals/1";
var KEY = /^[A-Z][A-Z0-9_]{0,19}-[1-9][0-9]{0,8}$/;
var CATEGORIES = /* @__PURE__ */ new Set(["new", "indeterminate", "done"]);
var encoder = new TextEncoder();
var SYNTHETIC_CONTEXT = "synthetic-demo/v1";
var CONTEXT = /^sha256:[a-f0-9]{64}$/;
var LensError = class extends Error {
  constructor(code) {
    super(code);
    this.name = "LensError";
    this.code = code;
  }
};
var fail = (code) => {
  throw new LensError(code);
};
var plain = (value) => value !== null && typeof value === "object" && !Array.isArray(value) && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
function exact(value, fields) {
  if (!plain(value) || Object.keys(value).length !== fields.length || fields.some((key2) => !Object.hasOwn(value, key2))) fail("invalid_snapshot");
}
function iso(value, code = "invalid_snapshot") {
  if (typeof value !== "string" || value.length > 40 || !Number.isFinite(Date.parse(value))) fail(code);
  const result = new Date(value).toISOString();
  if (result !== value) fail(code);
  return result;
}
function due(value, code = "invalid_snapshot") {
  if (value === null) return null;
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(Date.parse(`${value}T00:00:00.000Z`)) || (/* @__PURE__ */ new Date(`${value}T00:00:00.000Z`)).toISOString().slice(0, 10) !== value) fail(code);
  return value;
}
function key(value, code = "invalid_keys") {
  if (typeof value !== "string" || !KEY.test(value)) fail(code);
  return value;
}
function parseKeys(input) {
  if (typeof input !== "string" || input.length > 200) fail("invalid_keys");
  const keys = input.trim().split(/[\s,]+/).filter(Boolean).map((value) => key(value.toUpperCase()));
  if (!keys.length || keys.length > MAX_ISSUES || new Set(keys).size !== keys.length) fail("invalid_keys");
  return keys;
}
function safeIssue(value, code = "invalid_snapshot") {
  exact(value, ["key", "statusCategory", "updated", "dueDate"]);
  if (!CATEGORIES.has(value.statusCategory)) fail(code);
  return {
    key: key(value.key, code),
    statusCategory: value.statusCategory,
    updated: iso(value.updated, code),
    dueDate: due(value.dueDate, code)
  };
}
function normaliseJiraIssue(raw, requestedKey) {
  key(requestedKey);
  if (!plain(raw) || raw.key !== requestedKey || !plain(raw.fields) || !plain(raw.fields.status) || !plain(raw.fields.status.statusCategory) || !CATEGORIES.has(raw.fields.status.statusCategory.key) || typeof raw.fields.updated !== "string" || raw.fields.updated.length > 40 || !Number.isFinite(Date.parse(raw.fields.updated)) || !Object.hasOwn(raw.fields, "duedate")) fail("invalid_response");
  return {
    key: requestedKey,
    statusCategory: raw.fields.status.statusCategory.key,
    updated: new Date(raw.fields.updated).toISOString(),
    dueDate: due(raw.fields.duedate, "invalid_response")
  };
}
function createJiraAdapter(requestJira2, { sourceContext: sourceContext2 = null } = {}) {
  if (typeof requestJira2 !== "function") fail("invalid_adapter");
  if (sourceContext2 !== null && !CONTEXT.test(sourceContext2)) fail("invalid_adapter");
  return Object.freeze({ kind: "jira", sourceContext: sourceContext2, async readIssue(issueKey) {
    key(issueKey);
    let response;
    try {
      response = await requestJira2(
        `/rest/api/3/issue/${encodeURIComponent(issueKey)}?fields=status,updated,duedate`,
        { method: "GET", headers: { Accept: "application/json" } }
      );
    } catch {
      fail("unavailable");
    }
    if (!response || !Number.isInteger(response.status)) fail("invalid_response");
    if (response.status === 403) fail("forbidden");
    if (response.status === 404) fail("not_found");
    if (response.status === 429) fail("rate_limited");
    if (response.status !== 200) fail("unavailable");
    let raw;
    try {
      raw = await response.json();
    } catch {
      fail("invalid_response");
    }
    return normaliseJiraIssue(raw, issueKey);
  } });
}
function canonicalBody(snapshot) {
  return JSON.stringify({
    schemaVersion: 1,
    sourceMode: snapshot.sourceMode,
    sourceContext: snapshot.sourceContext,
    ruleVersion: snapshot.ruleVersion,
    capturedAt: snapshot.capturedAt,
    issues: snapshot.issues.map((issue) => ({
      key: issue.key,
      statusCategory: issue.statusCategory,
      updated: issue.updated,
      dueDate: issue.dueDate
    })).sort((a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0)
  });
}
async function contextFingerprint(cloudId) {
  if (typeof cloudId !== "string" || cloudId.length < 1 || cloudId.length > 128) fail("invalid_context");
  const bytes = await globalThis.crypto.subtle.digest("SHA-256", encoder.encode(`handoff-lens:tenant:v1:${cloudId}`));
  return `sha256:${Array.from(new Uint8Array(bytes), (value) => value.toString(16).padStart(2, "0")).join("")}`;
}
async function checksum(snapshot) {
  const bytes = await globalThis.crypto.subtle.digest("SHA-256", encoder.encode(canonicalBody(snapshot)));
  return Array.from(new Uint8Array(bytes), (value) => value.toString(16).padStart(2, "0")).join("");
}
async function parseSnapshot(text) {
  if (typeof text !== "string" || encoder.encode(text).byteLength > MAX_SNAPSHOT_BYTES) fail("snapshot_too_large");
  let raw;
  try {
    raw = JSON.parse(text);
  } catch {
    fail("invalid_snapshot");
  }
  exact(raw, ["schemaVersion", "sourceMode", "sourceContext", "ruleVersion", "capturedAt", "issues", "digest"]);
  if (raw.schemaVersion !== 1 || !["synthetic", "jira"].includes(raw.sourceMode) || typeof raw.ruleVersion !== "string" || typeof raw.sourceContext !== "string" || (raw.sourceMode === "synthetic" ? raw.sourceContext !== SYNTHETIC_CONTEXT : !CONTEXT.test(raw.sourceContext)) || !/^lens-signals\/[1-9][0-9]{0,3}$/.test(raw.ruleVersion) || !Array.isArray(raw.issues) || raw.issues.length < 1 || raw.issues.length > MAX_ISSUES || typeof raw.digest !== "string" || !/^[a-f0-9]{64}$/.test(raw.digest)) fail("invalid_snapshot");
  const issues = raw.issues.map((value) => safeIssue(value));
  if (new Set(issues.map((value) => value.key)).size !== issues.length) fail("invalid_snapshot");
  const parsed = {
    schemaVersion: 1,
    sourceMode: raw.sourceMode,
    sourceContext: raw.sourceContext,
    ruleVersion: raw.ruleVersion,
    capturedAt: iso(raw.capturedAt),
    issues,
    digest: raw.digest
  };
  if (await checksum(parsed) !== parsed.digest) fail("checksum_mismatch");
  return parsed;
}
function signals(issue, now) {
  const delta = now.getTime() - Date.parse(issue.updated);
  const freshness = delta < -3e5 ? "future" : delta > 48 * 36e5 ? "stale" : "fresh";
  const dueState = issue.dueDate === null ? "none" : issue.dueDate < now.toISOString().slice(0, 10) && issue.statusCategory !== "done" ? "overdue" : "not_overdue";
  return {
    workflow: issue.statusCategory === "done" ? "done" : "open",
    freshness,
    due: dueState,
    outcome: freshness === "future" ? "unknown" : issue.statusCategory !== "done" || freshness === "stale" || dueState === "overdue" ? "attention" : "clear"
  };
}
function compare(current, previous, now, snapshot) {
  if (!previous) return { state: "no_reference", fields: [], ageChanged: false, ruleChanged: false };
  const fields = ["statusCategory", "updated", "dueDate"].filter((field) => current[field] !== previous[field]);
  return {
    state: fields.length ? "changed" : "same",
    fields,
    ageChanged: signals(previous, new Date(snapshot.capturedAt)).freshness !== signals(current, now).freshness,
    ruleChanged: snapshot.ruleVersion !== RULE_VERSION
  };
}
function bounded(promise, timeoutMs) {
  let timer;
  return Promise.race([promise, new Promise((_, reject) => {
    timer = setTimeout(() => reject(new LensError("timeout")), timeoutMs);
  })]).finally(() => clearTimeout(timer));
}
var SAFE_ERRORS = /* @__PURE__ */ new Set(["forbidden", "not_found", "rate_limited", "unavailable", "invalid_response", "timeout"]);
function createLens({ adapter, now = () => /* @__PURE__ */ new Date(), timeoutMs = 8e3 }) {
  if (!adapter || typeof adapter.readIssue !== "function" || !["jira", "synthetic"].includes(adapter.kind) || !Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 15e3) fail("invalid_adapter");
  const sourceContext2 = adapter.kind === "synthetic" ? SYNTHETIC_CONTEXT : adapter.sourceContext;
  if (adapter.kind === "jira" && sourceContext2 !== null && !CONTEXT.test(sourceContext2)) fail("invalid_adapter");
  let busy = false;
  let priorReadsStillPending = 0;
  return Object.freeze({ async inspect({ keys, snapshot = null }) {
    if (busy || priorReadsStillPending > 0) fail("busy");
    if (!Array.isArray(keys) || keys.length < 1 || keys.length > MAX_ISSUES || new Set(keys).size !== keys.length) fail("invalid_keys");
    keys.forEach((value) => key(value));
    const reference = snapshot === null ? null : await parseSnapshot(JSON.stringify(snapshot));
    if (reference && (reference.sourceMode !== adapter.kind || !sourceContext2 || reference.sourceContext !== sourceContext2)) fail("source_mismatch");
    if (busy || priorReadsStillPending > 0) fail("busy");
    busy = true;
    try {
      const capturedAt = iso(now().toISOString(), "invalid_clock");
      const instant = new Date(capturedAt);
      const rows = await Promise.all(keys.map(async (issueKey, index) => {
        priorReadsStillPending++;
        const read = Promise.resolve().then(() => adapter.readIssue(issueKey)).finally(() => {
          priorReadsStillPending--;
        });
        try {
          const current = safeIssue(await bounded(read, timeoutMs), "invalid_response");
          if (current.key !== issueKey) fail("invalid_response");
          const previous = reference?.issues.find((value) => value.key === issueKey) ?? null;
          return {
            slot: index + 1,
            state: "read",
            current,
            previous,
            signals: signals(current, instant),
            comparison: compare(current, previous, instant, reference)
          };
        } catch (error) {
          return { slot: index + 1, state: "unavailable", reason: SAFE_ERRORS.has(error?.code) ? error.code : "unavailable" };
        }
      }));
      const canCompare = rows.some((row) => row.state === "read" && row.previous !== null);
      return {
        schemaVersion: 1,
        ruleVersion: RULE_VERSION,
        capturedAt,
        mode: adapter.kind,
        sourceContext: sourceContext2,
        rows,
        snapshot: reference && canCompare ? {
          capturedAt: reference.capturedAt,
          sourceMode: reference.sourceMode,
          ruleVersion: reference.ruleVersion,
          untrusted: true,
          scopeChanged: reference.issues.length !== keys.length || reference.issues.some((value) => !keys.includes(value.key))
        } : null,
        exportable: Boolean(sourceContext2) && rows.every((row) => row.state === "read")
      };
    } finally {
      busy = false;
    }
  } });
}
async function createSnapshot(report) {
  if (!report || !report.exportable || !Array.isArray(report.rows) || !report.rows.length || report.rows.length > MAX_ISSUES || report.rows.some((row) => row.state !== "read")) fail("incomplete_snapshot");
  if (!["synthetic", "jira"].includes(report.mode)) fail("incomplete_snapshot");
  if (report.mode === "synthetic" ? report.sourceContext !== SYNTHETIC_CONTEXT : !CONTEXT.test(report.sourceContext)) fail("incomplete_snapshot");
  const snapshot = {
    schemaVersion: 1,
    sourceMode: report.mode,
    sourceContext: report.sourceContext,
    ruleVersion: RULE_VERSION,
    capturedAt: iso(report.capturedAt),
    issues: report.rows.map((row) => safeIssue(row.current))
  };
  if (new Set(snapshot.issues.map((value) => value.key)).size !== snapshot.issues.length) fail("invalid_snapshot");
  return { ...snapshot, digest: await checksum(snapshot) };
}

// src/i18n.mjs
var messages = {
  en: {
    lang: "Language",
    title: "A clearer handoff, one snapshot at a time.",
    eyebrow: "HANDOFF LENS / JIRA",
    intro: "Check a small set of Jira signals, then compare them with a portable reference. A signal is a prompt for a conversation, never an approval.",
    synthetic: "SYNTHETIC PREVIEW — authored fixture data only. No Jira connection or Forge deployment.",
    jira: "Read-only Jira signals, checked with your current access.",
    usageMode: "READ ONLY / MANUAL CHECKS",
    limits: "Up to 5 issues per click · manual refresh only · no issue writes or cloud storage",
    keys: "Issues in this handoff",
    keysHint: "Enter 1–5 issue keys, separated by commas. The selected scope may be incomplete.",
    scenario: "Synthetic scenario",
    baseline: "Baseline",
    drift: "Changed status + ageing",
    permission: "One permission denied",
    check: "Check selected issues",
    checking: "Reading selected signals…",
    import: "Import reference JSON (64 KiB max)",
    pasteImport: "Or paste reference JSON",
    pasteLabel: "Reference JSON text",
    pasteHint: "Up to 64 KiB. Import clears this text. Validation starts no Jira reads; choose Check to read issues.",
    importPasted: "Import pasted JSON",
    imported: "Reference validated locally. Its contents remain hidden until each issue can be read again.",
    loaded: "Use reference scope",
    loadedHint: "Use up to five hidden keys from the imported reference for the next explicit read.",
    export: "Download current snapshot",
    clear: "Clear this view",
    empty: "Start with a deliberate check. Nothing runs automatically.",
    caution: "A checksum is not a signature. Imported authorship, times and source labels are unverified. No personal fields are requested; Jira data and downloaded files still require care.",
    noPersistence: "This view uses page memory only. Clear/reload discards accessible state; it does not securely erase memory, downloaded files or Jira data.",
    rules: "Rules / lens-signals/1: selected workflow category, 48-hour freshness, due-date signal. “Signals clear” does not verify dependencies, acceptance, rights or handoff completion. Due dates are compared as UTC calendar dates.",
    readAt: "Read at (this device)",
    referenceAt: "Reference time (untrusted)",
    sourceMode: "Claimed reference source",
    ruleChanged: "Reference rule version differs; current rules were recomputed.",
    scopeChanged: "Selected scope differs. Unread reference entries are withheld.",
    item: "Item",
    unavailable: "Unavailable — reference details withheld.",
    state: "Workflow category",
    updated: "Jira updated metadata",
    due: "Due date",
    noDue: "None",
    freshness: "Freshness",
    fresh: "Within 48 hours",
    stale: "Older than 48 hours",
    future: "Future time / clock uncertainty",
    overdue: "Overdue by the UTC calendar-date convention.",
    outcome: "Signal check",
    clearSignal: "Signals clear",
    attention: "Needs attention",
    unknown: "Unknown",
    comparison: "Reference comparison",
    same: "Selected fields unchanged",
    changed: "Selected fields changed",
    no_reference: "No matching reference",
    ageChanged: "Freshness classification changed with time.",
    previous: "Imported reference fields (untrusted)",
    fields: "Changed fields",
    none: "None",
    forbidden: "Permission denied",
    not_found: "Not found or not visible",
    rate_limited: "Rate limited; no automatic retry",
    timeout: "Timed out; no automatic retry",
    invalid_response: "Unexpected response; no details shown",
    unavailableReason: "Read failed; no automatic retry",
    invalid_keys: "Use 1–5 unique, valid issue keys.",
    invalid_snapshot: "Invalid reference schema. No content was displayed.",
    snapshot_too_large: "Reference exceeds 64 KiB.",
    checksum_mismatch: "Reference checksum does not match its contents.",
    source_mismatch: "Reference source or workspace does not match, or workspace context is unavailable. No reads were started.",
    busy: "Another read is still pending. A timed-out bridge call cannot be cancelled here. Reload only after it has settled.",
    generic: "Operation failed. No provider response or reference details were displayed.",
    done: "Done",
    new: "New",
    indeterminate: "In progress",
    help: "How to review Handoff Lens",
    permissionCaution: "Forge issue panels are visible only to users who can edit the current issue. API reads still require browse/security permissions.",
    importFirst: "Import a reference first.",
    removed: "View cleared.",
    exportUnavailable: "A complete successful read is required before download."
  },
  "zh-Hant": {
    lang: "語言",
    title: "以一份快照，讓交接更清楚。",
    eyebrow: "HANDOFF LENS / JIRA",
    intro: "核對少量 Jira 訊號，再與可攜式參考快照比較。訊號用來提示討論，不能代表核准。",
    synthetic: "合成預覽 — 僅使用人工設計資料，未連接 Jira、未部署 Forge。",
    jira: "依你目前的存取權限，唯讀核對 Jira 訊號。",
    usageMode: "唯讀 / 手動核對",
    limits: "每次最多 5 筆 · 僅手動更新 · 不寫入 issue、不使用雲端儲存",
    keys: "本次交接範圍",
    keysHint: "輸入 1–5 個 issue key，以逗號分隔。選定範圍可能不完整。",
    scenario: "合成情境",
    baseline: "基準",
    drift: "狀態變更與資料老化",
    permission: "其中一筆無權存取",
    check: "核對選定項目",
    checking: "正在讀取選定訊號…",
    import: "匯入參考 JSON（最多 64 KiB）",
    pasteImport: "或貼上參考 JSON",
    pasteLabel: "參考 JSON 文字",
    pasteHint: "最多 64 KiB，按下匯入後會清除文字。驗證不會讀取 Jira；請按核對按鈕讀取工作項目。",
    importPasted: "匯入貼上的 JSON",
    imported: "已在本機驗證格式；每筆重新通過讀取前，不顯示參考內容。",
    loaded: "使用參考範圍",
    loadedHint: "下一次明確讀取時，採用匯入快照中最多五個尚未顯示的 key。",
    export: "下載目前快照",
    clear: "清除此檢視",
    empty: "請明確開始核對，不會自動執行。",
    caution: "雜湊不是簽章。匯入資料的作者、時間與來源標籤未經認證。不要求個人欄位，仍請妥善處理 Jira 資料及下載檔。",
    noPersistence: "僅使用頁面記憶體。清除或重載會捨棄可存取狀態，不代表安全抹除記憶體、下載檔或 Jira 資料。",
    rules: "規則 lens-signals/1：選定狀態分類、48 小時新鮮度與到期訊號。「訊號通過」不驗證依賴、驗收、權利或交接完成；到期日依 UTC 日期比較。",
    readAt: "本機讀取時間",
    referenceAt: "參考時間（未認證）",
    sourceMode: "參考檔自述來源",
    ruleChanged: "參考規則版本不同；已依目前規則重算。",
    scopeChanged: "選定範圍不同；未讀取的參考項目不顯示。",
    item: "項目",
    unavailable: "無法讀取 — 已隱藏對應參考資料。",
    state: "工作流程分類",
    updated: "Jira 更新中繼資料",
    due: "到期日",
    noDue: "無",
    freshness: "新鮮度",
    fresh: "48 小時內",
    stale: "超過 48 小時",
    future: "未來時間／時鐘不確定",
    overdue: "依 UTC 日期比較已逾期。",
    outcome: "訊號核對",
    clearSignal: "訊號通過",
    attention: "需要確認",
    unknown: "未知",
    comparison: "參考比較",
    same: "選定欄位未變",
    changed: "選定欄位已變",
    no_reference: "沒有對應參考",
    ageChanged: "新鮮度分類隨時間改變。",
    previous: "匯入參考欄位（未認證）",
    fields: "變更欄位",
    none: "無",
    forbidden: "權限不足",
    not_found: "不存在或不可見",
    rate_limited: "請求受限，不自動重試",
    timeout: "讀取逾時，不自動重試",
    invalid_response: "回應格式不符，不顯示細節",
    unavailableReason: "讀取失敗，不自動重試",
    invalid_keys: "請輸入 1–5 個有效且不重複的 issue key。",
    invalid_snapshot: "參考格式不符，未顯示內容。",
    snapshot_too_large: "參考檔超過 64 KiB。",
    checksum_mismatch: "參考內容與雜湊不符。",
    source_mismatch: "參考來源或工作區不符，或無法取得工作區資訊；未開始讀取。",
    busy: "先前讀取仍未結束。此處無法取消逾時的 bridge 呼叫，請待其結束後再操作。",
    generic: "操作失敗，未顯示供應商回應或參考細節。",
    done: "完成",
    new: "新增",
    indeterminate: "進行中",
    help: "如何審查 Handoff Lens",
    permissionCaution: "Forge issue panel 僅對目前 issue 有編輯權限的人可見；API 讀取仍需瀏覽與安全權限。",
    importFirst: "請先匯入參考檔。",
    removed: "已清除此檢視。",
    exportUnavailable: "完整讀取成功後才能下載。"
  },
  ja: {
    lang: "言語",
    title: "ひとつのスナップショットで、引き継ぎを明確に。",
    eyebrow: "HANDOFF LENS / JIRA",
    intro: "少数の Jira シグナルを確認し、持ち運べる参照と比較します。シグナルは相談の手がかりであり、承認ではありません。",
    synthetic: "合成プレビュー — 人工データのみ。Jira 接続・Forge デプロイは未実施。",
    jira: "現在のアクセス権で Jira のシグナルを読み取り専用で確認します。",
    usageMode: "読み取り専用 / 手動確認",
    limits: "操作ごとに最大 5 件 · 手動更新のみ · issue 書き込み・クラウド保存なし",
    keys: "今回の引き継ぎ範囲",
    keysHint: "重複のない issue key を 1～5 件、カンマ区切りで入力。選んだ範囲が完全とは限りません。",
    scenario: "合成シナリオ",
    baseline: "基準",
    drift: "状態変更と経時変化",
    permission: "1 件のアクセス拒否",
    check: "選択項目を確認",
    checking: "選択したシグナルを読み取り中…",
    import: "参照 JSON を読み込む（最大 64 KiB）",
    pasteImport: "または参照 JSON を貼り付ける",
    pasteLabel: "参照 JSON テキスト",
    pasteHint: "最大 64 KiB。読み込み操作でテキストを消去します。検証では Jira を取得しません。確認ボタンで課題を取得してください。",
    importPasted: "貼り付けた JSON を読み込む",
    imported: "形式をローカルで検証しました。各 issue の再読み取りに成功するまで参照内容は表示しません。",
    loaded: "参照の範囲を使用",
    loadedHint: "次の明示的な読み取りに、参照内の非表示 key を最大 5 件使用します。",
    export: "現在のスナップショットを保存",
    clear: "この画面をクリア",
    empty: "明示的な確認から始めてください。自動実行はしません。",
    caution: "チェックサムは署名ではありません。参照の作者・時刻・出典表示は未認証です。個人用フィールドは取得しませんが、Jira データと保存ファイルの扱いには注意が必要です。",
    noPersistence: "ページのメモリのみを使用。クリアや再読み込みは状態を破棄しますが、メモリ・保存ファイル・Jira データの安全な消去ではありません。",
    rules: "規則 lens-signals/1：選択範囲の状態分類、48 時間の鮮度、期限。シグナル通過は依存関係・検収・権利・引き継ぎ完了の確認ではありません。期限は UTC 日付で比較します。",
    readAt: "この端末の読み取り時刻",
    referenceAt: "参照の時刻（未認証）",
    sourceMode: "参照が申告する出典",
    ruleChanged: "参照の規則バージョンが異なります。現行規則で再計算しました。",
    scopeChanged: "選択範囲が異なります。未読の参照項目は表示しません。",
    item: "項目",
    unavailable: "読み取れません — 対応する参照内容は非表示です。",
    state: "ワークフロー分類",
    updated: "Jira 更新メタデータ",
    due: "期限",
    noDue: "なし",
    freshness: "鮮度",
    fresh: "48 時間以内",
    stale: "48 時間超",
    future: "未来の時刻／時計の不確実性",
    overdue: "UTC 日付の比較では期限切れです。",
    outcome: "シグナル確認",
    clearSignal: "シグナル通過",
    attention: "要確認",
    unknown: "不明",
    comparison: "参照との比較",
    same: "選択フィールドに変更なし",
    changed: "選択フィールドに変更あり",
    no_reference: "対応する参照なし",
    ageChanged: "時間経過で鮮度の分類が変わりました。",
    previous: "読み込んだ参照フィールド（未認証）",
    fields: "変更フィールド",
    none: "なし",
    forbidden: "権限がありません",
    not_found: "存在しないか表示できません",
    rate_limited: "制限中・自動再試行なし",
    timeout: "タイムアウト・自動再試行なし",
    invalid_response: "想定外の応答・詳細は非表示",
    unavailableReason: "読み取り失敗・自動再試行なし",
    invalid_keys: "有効で重複のない issue key を 1～5 件入力してください。",
    invalid_snapshot: "参照形式が無効です。内容は表示していません。",
    snapshot_too_large: "参照が 64 KiB を超えています。",
    checksum_mismatch: "参照内容とチェックサムが一致しません。",
    source_mismatch: "参照の出典・ワークスペースが異なるか、現在の情報を取得できません。読み取りは開始していません。",
    busy: "以前の読み取りが未完了です。タイムアウトした bridge 呼び出しはここで取り消せません。完了を待ってください。",
    generic: "操作に失敗しました。プロバイダーの応答や参照詳細は表示しません。",
    done: "完了",
    new: "新規",
    indeterminate: "進行中",
    help: "Handoff Lens の確認方法",
    permissionCaution: "Forge issue panel は現在の issue を編集できるユーザーにのみ表示されます。API には別途閲覧・セキュリティ権限が必要です。",
    importFirst: "先に参照を読み込んでください。",
    removed: "画面をクリアしました。",
    exportUnavailable: "すべての読み取り成功後に保存できます。"
  }
};

// src/app.mjs
function mountWorkbench({ adapter, initialKeys: initialKeys2 = "", onScenarioChange = null }) {
  const $ = (id) => document.getElementById(id);
  const lens = createLens({ adapter });
  const state = {
    language: "en",
    snapshot: null,
    report: null,
    serialized: "",
    busy: false,
    useReference: false,
    status: "empty"
  };
  $("issue-keys").value = initialKeys2;
  $("scenario-field").hidden = adapter.kind !== "synthetic";
  const t = (value) => messages[state.language][value] ?? messages.en[value] ?? messages[state.language].generic;
  function node(tag, text, className) {
    const item = document.createElement(tag);
    if (text !== void 0) item.textContent = text;
    if (className) item.className = className;
    return item;
  }
  function datum(parent, label, value) {
    const row = node("div", void 0, "datum");
    row.append(node("dt", label), node("dd", value));
    parent.append(row);
  }
  function issueData(issue) {
    const list = node("dl");
    datum(list, t("state"), t(issue.statusCategory));
    datum(list, t("updated"), issue.updated);
    datum(list, t("due"), issue.dueDate ?? t("noDue"));
    return list;
  }
  function render() {
    document.documentElement.lang = state.language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    $("mode").textContent = t(adapter.kind);
    $("status").textContent = t(state.busy ? "checking" : state.status);
    const meta = $("report-meta");
    const output = $("results");
    meta.replaceChildren();
    output.replaceChildren();
    const report = state.report;
    if (report) {
      meta.append(node("p", `${t("readAt")}: ${report.capturedAt}`, "hint"));
      if (report.snapshot) {
        meta.append(node("p", `${t("referenceAt")}: ${report.snapshot.capturedAt}`, "hint"));
        meta.append(node("p", `${t("sourceMode")}: ${report.snapshot.sourceMode} (${t("unknown")})`, "hint"));
        if (report.snapshot.scopeChanged) meta.append(node("p", t("scopeChanged"), "warning"));
      }
      for (const row of report.rows) {
        const card = node("article", void 0, "issue");
        if (row.state !== "read") {
          card.append(
            node("h2", `${t("item")} ${row.slot}`),
            node("p", t("unavailable"), "warning"),
            node("p", t(row.reason === "unavailable" ? "unavailableReason" : row.reason))
          );
          output.append(card);
          continue;
        }
        const top = node("div", void 0, "card-top");
        top.append(node("h2", row.current.key), node("span", t(row.signals.outcome === "clear" ? "clearSignal" : row.signals.outcome), `pill ${row.signals.outcome}`));
        card.append(top, issueData(row.current));
        card.append(node("p", `${t("freshness")}: ${t(row.signals.freshness)}`, "hint"));
        if (row.signals.due === "overdue") card.append(node("p", t("overdue"), "warning"));
        card.append(node("p", `${t("comparison")}: ${t(row.comparison.state)}`));
        if (row.comparison.fields.length) card.append(node("p", `${t("fields")}: ${row.comparison.fields.join(", ")}`, "hint"));
        if (row.comparison.ageChanged) card.append(node("p", t("ageChanged"), "warning"));
        if (row.comparison.ruleChanged) card.append(node("p", t("ruleChanged"), "warning"));
        if (row.previous) {
          const details = node("details");
          details.append(node("summary", t("previous")), issueData(row.previous));
          card.append(details);
        }
        output.append(card);
      }
    }
    for (const id of ["issue-keys", "scenario", "check", "reference-file", "reference-json", "import-json", "use-scope", "clear"]) $(id).disabled = state.busy;
    $("use-scope").disabled = state.busy || !state.snapshot;
    $("download").disabled = state.busy || !state.serialized;
  }
  function discardReport() {
    state.report = null;
    state.serialized = "";
  }
  function errorCode(error) {
    return Object.hasOwn(messages.en, error?.code) ? error.code : "generic";
  }
  async function importReference(readText) {
    if (state.busy) return;
    state.snapshot = null;
    state.useReference = false;
    discardReport();
    state.busy = true;
    render();
    try {
      state.snapshot = await parseSnapshot(await readText());
      state.status = "imported";
    } catch (error) {
      state.status = errorCode(error);
    } finally {
      state.busy = false;
      render();
    }
  }
  $("language").addEventListener("change", (event) => {
    state.language = Object.hasOwn(messages, event.target.value) ? event.target.value : "en";
    render();
  });
  $("scenario").addEventListener("change", (event) => {
    onScenarioChange?.(event.target.value);
    discardReport();
    state.status = "empty";
    render();
  });
  $("issue-keys").addEventListener("input", () => {
    state.useReference = false;
    discardReport();
    state.status = "empty";
    render();
  });
  $("use-scope").addEventListener("click", () => {
    if (!state.snapshot) {
      state.status = "importFirst";
      render();
      return;
    }
    state.useReference = true;
    $("issue-keys").value = "";
    discardReport();
    state.status = "loadedHint";
    render();
  });
  $("reference-file").addEventListener("change", async (event) => {
    if (state.busy) return;
    const file = event.target.files?.[0];
    if (!file) {
      state.snapshot = null;
      state.useReference = false;
      discardReport();
      state.status = "empty";
      render();
      return;
    }
    $("reference-json").value = "";
    await importReference(async () => {
      if (file.size > MAX_SNAPSHOT_BYTES) throw { code: "snapshot_too_large" };
      return file.text();
    });
    $("reference-file").value = "";
  });
  $("import-json").addEventListener("click", async () => {
    if (state.busy) return;
    const text = $("reference-json").value;
    $("reference-json").value = "";
    $("reference-file").value = "";
    await importReference(() => text);
  });
  $("scope-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (state.busy) return;
    state.busy = true;
    discardReport();
    render();
    try {
      const keys = state.useReference && state.snapshot ? state.snapshot.issues.map((issue) => issue.key) : parseKeys($("issue-keys").value);
      state.report = await lens.inspect({ keys, snapshot: state.snapshot });
      if (state.report.exportable) state.serialized = JSON.stringify(await createSnapshot(state.report), null, 2);
      state.status = "limits";
    } catch (error) {
      state.status = errorCode(error);
    } finally {
      state.busy = false;
      render();
    }
  });
  $("download").addEventListener("click", () => {
    if (!state.serialized || state.busy) return;
    const url = URL.createObjectURL(new Blob([state.serialized], { type: "application/json" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `handoff-lens-${adapter.kind}-snapshot.json`;
    anchor.hidden = true;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  });
  $("clear").addEventListener("click", () => {
    if (state.busy) return;
    state.snapshot = null;
    state.useReference = false;
    discardReport();
    $("issue-keys").value = "";
    $("reference-file").value = "";
    $("reference-json").value = "";
    state.status = "removed";
    render();
  });
  render();
}

// src/entry.mjs
var initialKeys = "";
var sourceContext = null;
var contextTimer;
try {
  const context = await Promise.race([
    import_bridge.view.getContext(),
    new Promise((_, reject) => {
      contextTimer = setTimeout(() => reject(new Error("context_unavailable")), 8e3);
    })
  ]);
  const candidate = context?.extension?.issue?.key;
  if (typeof candidate === "string") initialKeys = parseKeys(candidate).join(", ");
  if (typeof context?.cloudId === "string") sourceContext = await contextFingerprint(context.cloudId);
} catch {
} finally {
  clearTimeout(contextTimer);
}
mountWorkbench({ adapter: createJiraAdapter(import_bridge.requestJira, { sourceContext }), initialKeys });
