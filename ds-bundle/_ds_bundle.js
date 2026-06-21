/* @ds-bundle: {"namespace":"PorterDS","components":[{"name":"Badge","sourcePath":"components/general/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/general/Button/Button.jsx"},{"name":"Card","sourcePath":"components/general/Card/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/general/Eyebrow/Eyebrow.jsx"},{"name":"Heading","sourcePath":"components/general/Heading/Heading.jsx"}],"sourceHashes":{"components/general/Badge/Badge.jsx":"d2b641a4decf","components/general/Badge/Badge.d.ts":"a36a6e793935","components/general/Badge/Badge.prompt.md":"bebca733a6cb","components/general/Button/Button.jsx":"1229125f87d7","components/general/Button/Button.d.ts":"0ef87e7a4728","components/general/Button/Button.prompt.md":"23d91ce3133e","components/general/Card/Card.jsx":"6da97b736882","components/general/Card/Card.d.ts":"f3d3a866aa60","components/general/Card/Card.prompt.md":"76340796968e","components/general/Eyebrow/Eyebrow.jsx":"46dc89fb35f0","components/general/Eyebrow/Eyebrow.d.ts":"130ef4aa4704","components/general/Eyebrow/Eyebrow.prompt.md":"a1475c277c0d","components/general/Heading/Heading.jsx":"30adce62cd2d","components/general/Heading/Heading.d.ts":"9a90af48f33f","components/general/Heading/Heading.prompt.md":"36b639996fb7"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var PorterDS = (() => {
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
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
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

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx6(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx6;
      module.exports.jsxs = jsx6;
      module.exports.jsxDEV = jsx6;
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/index.es.js
  var index_es_exports = {};
  __export(index_es_exports, {
    Badge: () => Badge,
    Button: () => Button,
    Card: () => Card,
    Eyebrow: () => Eyebrow,
    Heading: () => Heading
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  function Button({
    variant = "purple",
    size = "md",
    className,
    children,
    ...rest
  }) {
    const cls = [
      "pds-btn",
      `pds-btn--${variant}`,
      `pds-btn--${size}`,
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: cls, ...rest, children });
  }
  function Card({
    background = "white",
    bordered = false,
    className,
    children,
    ...rest
  }) {
    const cls = [
      "pds-card",
      background !== "white" ? `pds-card--${background}` : "",
      bordered ? "pds-card--bordered" : "",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: cls, ...rest, children });
  }
  function Badge({
    variant = "purple",
    className,
    children,
    ...rest
  }) {
    const cls = ["pds-badge", `pds-badge--${variant}`, className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: cls, ...rest, children });
  }
  function Eyebrow({ className, children, ...rest }) {
    const cls = ["pds-eyebrow", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: cls, ...rest, children });
  }
  function Heading({
    level = "h1",
    as,
    className,
    children,
    ...rest
  }) {
    const Tag = as ?? (level === "h2" ? "h2" : "h1");
    const cls = ["pds-heading", `pds-heading--${level}`, className].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Tag, { className: cls, ...rest, children });
  }
  return __toCommonJS(index_es_exports);
})();
window.PorterDS=PorterDS.__dsMainNs?Object.assign({},PorterDS,PorterDS.__dsMainNs,{__dsMainNs:undefined}):PorterDS;
