(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.10 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-blue-50:oklch(97% .014 254.604);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--font-weight-medium:500;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.inline-flex{display:inline-flex}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.w-10{width:calc(var(--spacing)*10)}.w-auto{width:auto}.w-fit{width:fit-content}.w-full{width:100%}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.items-center{align-items:center}.justify-center{justify-content:center}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-none{border-radius:0}.border{border-style:var(--tw-border-style);border-width:1px}.border-blue-600{border-color:var(--color-blue-600)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-transparent{background-color:#0000}.bg-yellow-400{background-color:var(--color-yellow-400)}.p-0{padding:calc(var(--spacing)*0)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.text-black{color:var(--color-black)}.text-blue-600{color:var(--color-blue-600)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media (hover:hover){.hover\\:bg-blue-50:hover{background-color:var(--color-blue-50)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-yellow-500:hover{background-color:var(--color-yellow-500)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import B, { useRef as L, useCallback as T, useEffect as A, useState as H, useMemo as Le, useLayoutEffect as Ze, useContext as Qe, createContext as et, forwardRef as tt, Fragment as Z, isValidElement as rt, cloneElement as nt, createElement as ot } from "react";
var V = { exports: {} }, C = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function at() {
  if (ge) return C;
  ge = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, o, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), o.key !== void 0 && (l = "" + o.key), "key" in o) {
      i = {};
      for (var u in o)
        u !== "key" && (i[u] = o[u]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: l,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return C.Fragment = r, C.jsx = t, C.jsxs = t, C;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function it() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    function e(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === ze ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case b:
          return "Fragment";
        case w:
          return "Profiler";
        case h:
          return "StrictMode";
        case Be:
          return "Suspense";
        case Ue:
          return "SuspenseList";
        case Ke:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case g:
            return "Portal";
          case Ge:
            return (a.displayName || "Context") + ".Provider";
          case N:
            return (a._context.displayName || "Context") + ".Consumer";
          case Ye:
            var d = a.render;
            return a = a.displayName, a || (a = d.displayName || d.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case qe:
            return d = a.displayName || null, d !== null ? d : e(a.type) || "Memo";
          case fe:
            d = a._payload, a = a._init;
            try {
              return e(a(d));
            } catch {
            }
        }
      return null;
    }
    function r(a) {
      return "" + a;
    }
    function t(a) {
      try {
        r(a);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var E = d.error, $ = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return E.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), r(a);
      }
    }
    function n(a) {
      if (a === b) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === fe)
        return "<...>";
      try {
        var d = e(a);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var a = q.A;
      return a === null ? null : a.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(a) {
      if (de.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, d) {
      function E() {
        ve || (ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: E,
        configurable: !0
      });
    }
    function s() {
      var a = e(this.type);
      return be[a] || (be[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function c(a, d, E, $, F, P, z, J) {
      return E = P.ref, a = {
        $$typeof: m,
        type: a,
        key: d,
        props: P,
        _owner: F
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: s
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function v(a, d, E, $, F, P, z, J) {
      var y = d.children;
      if (y !== void 0)
        if ($)
          if (Je(y)) {
            for ($ = 0; $ < y.length; $++)
              f(y[$]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(y);
      if (de.call(d, "key")) {
        y = e(a);
        var S = Object.keys(d).filter(function(Xe) {
          return Xe !== "key";
        });
        $ = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", Ee[y + $] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          y,
          S,
          y
        ), Ee[y + $] = !0);
      }
      if (y = null, E !== void 0 && (t(E), y = "" + E), l(d) && (t(d.key), y = "" + d.key), "key" in d) {
        E = {};
        for (var X in d)
          X !== "key" && (E[X] = d[X]);
      } else E = d;
      return y && u(
        E,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), c(
        a,
        y,
        P,
        F,
        o(),
        E,
        z,
        J
      );
    }
    function f(a) {
      typeof a == "object" && a !== null && a.$$typeof === m && a._store && (a._store.validated = 1);
    }
    var p = B, m = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), Ge = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), Be = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Ke = Symbol.for("react.activity"), ze = Symbol.for("react.client.reference"), q = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, Je = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(a) {
        return a();
      }
    };
    var ve, be = {}, pe = p["react-stack-bottom-frame"].bind(
      p,
      i
    )(), me = K(n(i)), Ee = {};
    M.Fragment = b, M.jsx = function(a, d, E, $, F) {
      var P = 1e4 > q.recentlyCreatedOwnerStacks++;
      return v(
        a,
        d,
        E,
        !1,
        $,
        F,
        P ? Error("react-stack-top-frame") : pe,
        P ? K(n(a)) : me
      );
    }, M.jsxs = function(a, d, E, $, F) {
      var P = 1e4 > q.recentlyCreatedOwnerStacks++;
      return v(
        a,
        d,
        E,
        !0,
        $,
        F,
        P ? Error("react-stack-top-frame") : pe,
        P ? K(n(a)) : me
      );
    };
  }()), M;
}
var $e;
function ut() {
  return $e || ($e = 1, process.env.NODE_ENV === "production" ? V.exports = at() : V.exports = it()), V.exports;
}
var st = ut();
function Oe(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = Oe(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function lt() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = Oe(e)) && (n && (n += " "), n += r);
  return n;
}
const ye = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, we = lt, ct = (e, r) => (t) => {
  var n;
  if ((r == null ? void 0 : r.variants) == null) return we(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: i } = r, l = Object.keys(o).map((c) => {
    const v = t == null ? void 0 : t[c], f = i == null ? void 0 : i[c];
    if (v === null) return null;
    const p = ye(v) || ye(f);
    return o[c][p];
  }), u = t && Object.entries(t).reduce((c, v) => {
    let [f, p] = v;
    return p === void 0 || (c[f] = p), c;
  }, {}), s = r == null || (n = r.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, v) => {
    let { class: f, className: p, ...m } = v;
    return Object.entries(m).every((g) => {
      let [b, h] = g;
      return Array.isArray(h) ? h.includes({
        ...i,
        ...u
      }[b]) : {
        ...i,
        ...u
      }[b] === h;
    }) ? [
      ...c,
      f,
      p
    ] : c;
  }, []);
  return we(e, l, s, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
};
function ft(...e) {
  return e.filter(Boolean).join(" ");
}
const Fe = typeof document < "u" ? B.useLayoutEffect : () => {
};
function dt(e) {
  const r = L(null);
  return Fe(() => {
    r.current = e;
  }, [
    e
  ]), T((...t) => {
    const n = r.current;
    return n == null ? void 0 : n(...t);
  }, []);
}
const R = (e) => {
  var r;
  return (r = e == null ? void 0 : e.ownerDocument) !== null && r !== void 0 ? r : document;
}, _ = (e) => e && "window" in e && e.window === e ? e : R(e).defaultView || window;
function vt(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function bt(e) {
  return vt(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let pt = !1;
function ue() {
  return pt;
}
function Re(e, r) {
  if (!ue()) return r && e ? e.contains(r) : !1;
  if (!e || !r) return !1;
  let t = r;
  for (; t !== null; ) {
    if (t === e) return !0;
    t.tagName === "SLOT" && t.assignedSlot ? t = t.assignedSlot.parentNode : bt(t) ? t = t.host : t = t.parentNode;
  }
  return !1;
}
const re = (e = document) => {
  var r;
  if (!ue()) return e.activeElement;
  let t = e.activeElement;
  for (; t && "shadowRoot" in t && (!((r = t.shadowRoot) === null || r === void 0) && r.activeElement); ) t = t.shadowRoot.activeElement;
  return t;
};
function _e(e) {
  return ue() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function U(e) {
  var r;
  return typeof window > "u" || window.navigator == null ? !1 : ((r = window.navigator.userAgentData) === null || r === void 0 ? void 0 : r.brands.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent);
}
function se(e) {
  var r;
  return typeof window < "u" && window.navigator != null ? e.test(((r = window.navigator.userAgentData) === null || r === void 0 ? void 0 : r.platform) || window.navigator.platform) : !1;
}
function O(e) {
  if (process.env.NODE_ENV === "test") return e;
  let r = null;
  return () => (r == null && (r = e()), r);
}
const le = O(function() {
  return se(/^Mac/i);
}), mt = O(function() {
  return se(/^iPhone/i);
}), Et = O(function() {
  return se(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  le() && navigator.maxTouchPoints > 1;
}), gt = O(function() {
  return mt() || Et();
});
O(function() {
  return le() || gt();
});
O(function() {
  return U(/AppleWebKit/i) && !ht();
});
const ht = O(function() {
  return U(/Chrome/i);
}), $t = O(function() {
  return U(/Android/i);
});
O(function() {
  return U(/Firefox/i);
});
function ke() {
  let e = L(/* @__PURE__ */ new Map()), r = T((o, i, l, u) => {
    let s = u != null && u.once ? (...c) => {
      e.current.delete(l), l(...c);
    } : l;
    e.current.set(l, {
      type: i,
      eventTarget: o,
      fn: s,
      options: u
    }), o.addEventListener(i, s, u);
  }, []), t = T((o, i, l, u) => {
    var s;
    let c = ((s = e.current.get(l)) === null || s === void 0 ? void 0 : s.fn) || l;
    o.removeEventListener(i, c, u), e.current.delete(l);
  }, []), n = T(() => {
    e.current.forEach((o, i) => {
      t(o.eventTarget, o.type, i, o.options);
    });
  }, [
    t
  ]);
  return A(() => n, [
    n
  ]), {
    addGlobalListener: r,
    removeGlobalListener: t,
    removeAllGlobalListeners: n
  };
}
function yt(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : $t() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Se(e) {
  let r = e;
  return r.nativeEvent = e, r.isDefaultPrevented = () => r.defaultPrevented, r.isPropagationStopped = () => r.cancelBubble, r.persist = () => {
  }, r;
}
function wt(e, r) {
  Object.defineProperty(e, "target", {
    value: r
  }), Object.defineProperty(e, "currentTarget", {
    value: r
  });
}
function je(e) {
  let r = L({
    isFocused: !1,
    observer: null
  });
  Fe(() => {
    const n = r.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let t = dt((n) => {
    e == null || e(n);
  });
  return T((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      r.current.isFocused = !0;
      let o = n.target, i = (l) => {
        if (r.current.isFocused = !1, o.disabled) {
          let u = Se(l);
          t(u);
        }
        r.current.observer && (r.current.observer.disconnect(), r.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), r.current.observer = new MutationObserver(() => {
        if (r.current.isFocused && o.disabled) {
          var l;
          (l = r.current.observer) === null || l === void 0 || l.disconnect();
          let u = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: u
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: u
          }));
        }
      }), r.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    t
  ]);
}
let Tt = !1, I = null, ne = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map(), k = !1, oe = !1;
const xt = {
  Tab: !0,
  Escape: !0
};
function ce(e, r) {
  for (let t of ne) t(e, r);
}
function Pt(e) {
  return !(e.metaKey || !le() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function G(e) {
  k = !0, Pt(e) && (I = "keyboard", ce("keyboard", e));
}
function x(e) {
  I = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (k = !0, ce("pointer", e));
}
function Ae(e) {
  yt(e) && (k = !0, I = "virtual");
}
function Ne(e) {
  e.target === window || e.target === document || Tt || !e.isTrusted || (!k && !oe && (I = "virtual", ce("virtual", e)), k = !1, oe = !1);
}
function Ce() {
  k = !1, oe = !0;
}
function ae(e) {
  if (typeof window > "u" || typeof document > "u" || D.get(_(e))) return;
  const r = _(e), t = R(e);
  let n = r.HTMLElement.prototype.focus;
  r.HTMLElement.prototype.focus = function() {
    k = !0, n.apply(this, arguments);
  }, t.addEventListener("keydown", G, !0), t.addEventListener("keyup", G, !0), t.addEventListener("click", Ae, !0), r.addEventListener("focus", Ne, !0), r.addEventListener("blur", Ce, !1), typeof PointerEvent < "u" ? (t.addEventListener("pointerdown", x, !0), t.addEventListener("pointermove", x, !0), t.addEventListener("pointerup", x, !0)) : process.env.NODE_ENV === "test" && (t.addEventListener("mousedown", x, !0), t.addEventListener("mousemove", x, !0), t.addEventListener("mouseup", x, !0)), r.addEventListener("beforeunload", () => {
    Me(e);
  }, {
    once: !0
  }), D.set(r, {
    focus: n
  });
}
const Me = (e, r) => {
  const t = _(e), n = R(e);
  r && n.removeEventListener("DOMContentLoaded", r), D.has(t) && (t.HTMLElement.prototype.focus = D.get(t).focus, n.removeEventListener("keydown", G, !0), n.removeEventListener("keyup", G, !0), n.removeEventListener("click", Ae, !0), t.removeEventListener("focus", Ne, !0), t.removeEventListener("blur", Ce, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", x, !0), n.removeEventListener("pointermove", x, !0), n.removeEventListener("pointerup", x, !0)) : process.env.NODE_ENV === "test" && (n.removeEventListener("mousedown", x, !0), n.removeEventListener("mousemove", x, !0), n.removeEventListener("mouseup", x, !0)), D.delete(t));
};
function Lt(e) {
  const r = R(e);
  let t;
  return r.readyState !== "loading" ? ae(e) : (t = () => {
    ae(e);
  }, r.addEventListener("DOMContentLoaded", t)), () => Me(e, t);
}
typeof document < "u" && Lt();
function De() {
  return I !== "pointer";
}
const Ot = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Ft(e, r, t) {
  let n = R(t == null ? void 0 : t.target);
  const o = typeof window < "u" ? _(t == null ? void 0 : t.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? _(t == null ? void 0 : t.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? _(t == null ? void 0 : t.target).HTMLElement : HTMLElement, u = typeof window < "u" ? _(t == null ? void 0 : t.target).KeyboardEvent : KeyboardEvent;
  return e = e || n.activeElement instanceof o && !Ot.has(n.activeElement.type) || n.activeElement instanceof i || n.activeElement instanceof l && n.activeElement.isContentEditable, !(e && r === "keyboard" && t instanceof u && !xt[t.key]);
}
function Rt(e, r, t) {
  ae(), A(() => {
    let n = (o, i) => {
      Ft(!!(t != null && t.isTextInput), o, i) && e(De());
    };
    return ne.add(n), () => {
      ne.delete(n);
    };
  }, r);
}
function _t(e) {
  let { isDisabled: r, onFocus: t, onBlur: n, onFocusChange: o } = e;
  const i = T((s) => {
    if (s.target === s.currentTarget)
      return n && n(s), o && o(!1), !0;
  }, [
    n,
    o
  ]), l = je(i), u = T((s) => {
    const c = R(s.target), v = c ? re(c) : re();
    s.target === s.currentTarget && v === _e(s.nativeEvent) && (t && t(s), o && o(!0), l(s));
  }, [
    o,
    t,
    l
  ]);
  return {
    focusProps: {
      onFocus: !r && (t || o || n) ? u : void 0,
      onBlur: !r && (n || o) ? i : void 0
    }
  };
}
function kt(e) {
  let { isDisabled: r, onBlurWithin: t, onFocusWithin: n, onFocusWithinChange: o } = e, i = L({
    isFocusWithin: !1
  }), { addGlobalListener: l, removeAllGlobalListeners: u } = ke(), s = T((f) => {
    f.currentTarget.contains(f.target) && i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, u(), t && t(f), o && o(!1));
  }, [
    t,
    o,
    i,
    u
  ]), c = je(s), v = T((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const p = R(f.target), m = re(p);
    if (!i.current.isFocusWithin && m === _e(f.nativeEvent)) {
      n && n(f), o && o(!0), i.current.isFocusWithin = !0, c(f);
      let g = f.currentTarget;
      l(p, "focus", (b) => {
        if (i.current.isFocusWithin && !Re(g, b.target)) {
          let h = new p.defaultView.FocusEvent("blur", {
            relatedTarget: b.target
          });
          wt(h, g);
          let w = Se(h);
          s(w);
        }
      }, {
        capture: !0
      });
    }
  }, [
    n,
    o,
    c,
    l,
    s
  ]);
  return r ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: v,
      onBlur: s
    }
  };
}
let Y = !1, Q = 0;
function ie() {
  Y = !0, setTimeout(() => {
    Y = !1;
  }, 50);
}
function Te(e) {
  e.pointerType === "touch" && ie();
}
function St() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Te) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", ie), Q++, () => {
      Q--, !(Q > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Te) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", ie));
    };
}
function jt(e) {
  let { onHoverStart: r, onHoverChange: t, onHoverEnd: n, isDisabled: o } = e, [i, l] = H(!1), u = L({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  A(St, []);
  let { addGlobalListener: s, removeAllGlobalListeners: c } = ke(), { hoverProps: v, triggerHoverEnd: f } = Le(() => {
    let p = (b, h) => {
      if (u.pointerType = h, o || h === "touch" || u.isHovered || !b.currentTarget.contains(b.target)) return;
      u.isHovered = !0;
      let w = b.currentTarget;
      u.target = w, s(R(b.target), "pointerover", (N) => {
        u.isHovered && u.target && !Re(u.target, N.target) && m(N, N.pointerType);
      }, {
        capture: !0
      }), r && r({
        type: "hoverstart",
        target: w,
        pointerType: h
      }), t && t(!0), l(!0);
    }, m = (b, h) => {
      let w = u.target;
      u.pointerType = "", u.target = null, !(h === "touch" || !u.isHovered || !w) && (u.isHovered = !1, c(), n && n({
        type: "hoverend",
        target: w,
        pointerType: h
      }), t && t(!1), l(!1));
    }, g = {};
    return typeof PointerEvent < "u" ? (g.onPointerEnter = (b) => {
      Y && b.pointerType === "mouse" || p(b, b.pointerType);
    }, g.onPointerLeave = (b) => {
      !o && b.currentTarget.contains(b.target) && m(b, b.pointerType);
    }) : process.env.NODE_ENV === "test" && (g.onTouchStart = () => {
      u.ignoreEmulatedMouseEvents = !0;
    }, g.onMouseEnter = (b) => {
      !u.ignoreEmulatedMouseEvents && !Y && p(b, "mouse"), u.ignoreEmulatedMouseEvents = !1;
    }, g.onMouseLeave = (b) => {
      !o && b.currentTarget.contains(b.target) && m(b, "mouse");
    }), {
      hoverProps: g,
      triggerHoverEnd: m
    };
  }, [
    r,
    t,
    n,
    o,
    u,
    s,
    c
  ]);
  return A(() => {
    o && f({
      currentTarget: u.target
    }, u.pointerType);
  }, [
    o
  ]), {
    hoverProps: v,
    isHovered: i
  };
}
function At(e = {}) {
  let { autoFocus: r = !1, isTextInput: t, within: n } = e, o = L({
    isFocused: !1,
    isFocusVisible: r || De()
  }), [i, l] = H(!1), [u, s] = H(() => o.current.isFocused && o.current.isFocusVisible), c = T(() => s(o.current.isFocused && o.current.isFocusVisible), []), v = T((m) => {
    o.current.isFocused = m, l(m), c();
  }, [
    c
  ]);
  Rt((m) => {
    o.current.isFocusVisible = m, c();
  }, [], {
    isTextInput: t
  });
  let { focusProps: f } = _t({
    isDisabled: n,
    onFocusChange: v
  }), { focusWithinProps: p } = kt({
    isDisabled: !n,
    onFocusWithinChange: v
  });
  return {
    isFocused: i,
    isFocusVisible: u,
    focusProps: n ? p : f
  };
}
var Nt = Object.defineProperty, Ct = (e, r, t) => r in e ? Nt(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, ee = (e, r, t) => (Ct(e, typeof r != "symbol" ? r + "" : r, t), t);
let Mt = class {
  constructor() {
    ee(this, "current", this.detect()), ee(this, "handoffState", "pending"), ee(this, "currentId", 0);
  }
  set(r) {
    this.current !== r && (this.handoffState = "pending", this.currentId = 0, this.current = r);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, He = new Mt();
function Dt(e) {
  var r, t;
  return He.isServer ? null : e ? "ownerDocument" in e ? e.ownerDocument : "current" in e ? (t = (r = e.current) == null ? void 0 : r.ownerDocument) != null ? t : document : null : document;
}
function Ht(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((r) => setTimeout(() => {
    throw r;
  }));
}
function Ie() {
  let e = [], r = { addEventListener(t, n, o, i) {
    return t.addEventListener(n, o, i), r.add(() => t.removeEventListener(n, o, i));
  }, requestAnimationFrame(...t) {
    let n = requestAnimationFrame(...t);
    return r.add(() => cancelAnimationFrame(n));
  }, nextFrame(...t) {
    return r.requestAnimationFrame(() => r.requestAnimationFrame(...t));
  }, setTimeout(...t) {
    let n = setTimeout(...t);
    return r.add(() => clearTimeout(n));
  }, microTask(...t) {
    let n = { current: !0 };
    return Ht(() => {
      n.current && t[0]();
    }), r.add(() => {
      n.current = !1;
    });
  }, style(t, n, o) {
    let i = t.style.getPropertyValue(n);
    return Object.assign(t.style, { [n]: o }), this.add(() => {
      Object.assign(t.style, { [n]: i });
    });
  }, group(t) {
    let n = Ie();
    return t(n), this.add(() => n.dispose());
  }, add(t) {
    return e.includes(t) || e.push(t), () => {
      let n = e.indexOf(t);
      if (n >= 0) for (let o of e.splice(n, 1)) o();
    };
  }, dispose() {
    for (let t of e.splice(0)) t();
  } };
  return r;
}
function It() {
  let [e] = H(Ie);
  return A(() => () => e.dispose(), [e]), e;
}
let Vt = (e, r) => {
  He.isServer ? A(e, r) : Ze(e, r);
};
function Wt(e) {
  let r = L(e);
  return Vt(() => {
    r.current = e;
  }, [e]), r;
}
let xe = function(e) {
  let r = Wt(e);
  return B.useCallback((...t) => r.current(...t), [r]);
};
function Gt(e) {
  let r = e.width / 2, t = e.height / 2;
  return { top: e.clientY - t, right: e.clientX + r, bottom: e.clientY + t, left: e.clientX - r };
}
function Yt(e, r) {
  return !(!e || !r || e.right < r.left || e.left > r.right || e.bottom < r.top || e.top > r.bottom);
}
function Bt({ disabled: e = !1 } = {}) {
  let r = L(null), [t, n] = H(!1), o = It(), i = xe(() => {
    r.current = null, n(!1), o.dispose();
  }), l = xe((u) => {
    if (o.dispose(), r.current === null) {
      r.current = u.currentTarget, n(!0);
      {
        let s = Dt(u.currentTarget);
        o.addEventListener(s, "pointerup", i, !1), o.addEventListener(s, "pointermove", (c) => {
          if (r.current) {
            let v = Gt(c);
            n(Yt(v, r.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(s, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: t, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let Ut = et(void 0);
function qt() {
  return Qe(Ut);
}
function Pe(...e) {
  return Array.from(new Set(e.flatMap((r) => typeof r == "string" ? r.split(" ") : []))).filter(Boolean).join(" ");
}
function Ve(e, r, ...t) {
  if (e in r) {
    let o = r[e];
    return typeof o == "function" ? o(...t) : o;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(r).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Ve), n;
}
var Kt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Kt || {}), zt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(zt || {});
function Jt() {
  let e = Zt();
  return T((r) => Xt({ mergeRefs: e, ...r }), [e]);
}
function Xt({ ourProps: e, theirProps: r, slot: t, defaultTag: n, features: o, visible: i = !0, name: l, mergeRefs: u }) {
  u = u ?? Qt;
  let s = We(r, e);
  if (i) return W(s, t, n, l, u);
  let c = o ?? 0;
  if (c & 2) {
    let { static: v = !1, ...f } = s;
    if (v) return W(f, t, n, l, u);
  }
  if (c & 1) {
    let { unmount: v = !0, ...f } = s;
    return Ve(v ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return W({ ...f, hidden: !0, style: { display: "none" } }, t, n, l, u);
    } });
  }
  return W(s, t, n, l, u);
}
function W(e, r = {}, t, n, o) {
  let { as: i = t, children: l, refName: u = "ref", ...s } = te(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [u]: e.ref } : {}, v = typeof l == "function" ? l(r) : l;
  "className" in s && s.className && typeof s.className == "function" && (s.className = s.className(r)), s["aria-labelledby"] && s["aria-labelledby"] === s.id && (s["aria-labelledby"] = void 0);
  let f = {};
  if (r) {
    let p = !1, m = [];
    for (let [g, b] of Object.entries(r)) typeof b == "boolean" && (p = !0), b === !0 && m.push(g.replace(/([A-Z])/g, (h) => `-${h.toLowerCase()}`));
    if (p) {
      f["data-headlessui-state"] = m.join(" ");
      for (let g of m) f[`data-${g}`] = "";
    }
  }
  if (i === Z && (Object.keys(j(s)).length > 0 || Object.keys(j(f)).length > 0)) if (!rt(v) || Array.isArray(v) && v.length > 1) {
    if (Object.keys(j(s)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(j(s)).concat(Object.keys(j(f))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = v.props, m = p == null ? void 0 : p.className, g = typeof m == "function" ? (...w) => Pe(m(...w), s.className) : Pe(m, s.className), b = g ? { className: g } : {}, h = We(v.props, j(te(s, ["ref"])));
    for (let w in f) w in h && delete f[w];
    return nt(v, Object.assign({}, h, f, c, { ref: o(rr(v), c.ref) }, b));
  }
  return ot(i, Object.assign({}, te(s, ["ref"]), i !== Z && c, i !== Z && f), v);
}
function Zt() {
  let e = L([]), r = T((t) => {
    for (let n of e.current) n != null && (typeof n == "function" ? n(t) : n.current = t);
  }, []);
  return (...t) => {
    if (!t.every((n) => n == null)) return e.current = t, r;
  };
}
function Qt(...e) {
  return e.every((r) => r == null) ? void 0 : (r) => {
    for (let t of e) t != null && (typeof t == "function" ? t(r) : t.current = r);
  };
}
function We(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let r = {}, t = {};
  for (let n of e) for (let o in n) o.startsWith("on") && typeof n[o] == "function" ? (t[o] != null || (t[o] = []), t[o].push(n[o])) : r[o] = n[o];
  if (r.disabled || r["aria-disabled"]) for (let n in t) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(n) && (t[n] = [(o) => {
    var i;
    return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
  }]);
  for (let n in t) Object.assign(r, { [n](o, ...i) {
    let l = t[n];
    for (let u of l) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      u(o, ...i);
    }
  } });
  return r;
}
function er(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let r = {}, t = {};
  for (let n of e) for (let o in n) o.startsWith("on") && typeof n[o] == "function" ? (t[o] != null || (t[o] = []), t[o].push(n[o])) : r[o] = n[o];
  for (let n in t) Object.assign(r, { [n](...o) {
    let i = t[n];
    for (let l of i) l == null || l(...o);
  } });
  return r;
}
function tr(e) {
  var r;
  return Object.assign(tt(e), { displayName: (r = e.displayName) != null ? r : e.name });
}
function j(e) {
  let r = Object.assign({}, e);
  for (let t in r) r[t] === void 0 && delete r[t];
  return r;
}
function te(e, r = []) {
  let t = Object.assign({}, e);
  for (let n of r) n in t && delete t[n];
  return t;
}
function rr(e) {
  return B.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
let nr = "button";
function or(e, r) {
  var t;
  let n = qt(), { disabled: o = n || !1, autoFocus: i = !1, ...l } = e, { isFocusVisible: u, focusProps: s } = At({ autoFocus: i }), { isHovered: c, hoverProps: v } = jt({ isDisabled: o }), { pressed: f, pressProps: p } = Bt({ disabled: o }), m = er({ ref: r, type: (t = l.type) != null ? t : "button", disabled: o || void 0, autoFocus: i }, s, v, p), g = Le(() => ({ disabled: o, hover: c, focus: u, active: f, autofocus: i }), [o, c, u, f, i]);
  return Jt()({ ourProps: m, theirProps: l, slot: g, defaultTag: nr, name: "Button" });
}
let ar = tr(or);
const ir = ct(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-yellow-400 text-black hover:bg-yellow-500",
        tertiary: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50"
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6",
        xl: "h-14 px-8"
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg"
      },
      // New options
      width: {
        auto: "w-auto",
        full: "w-full",
        fit: "w-fit"
      },
      icon: {
        none: "",
        left: "flex-row",
        right: "flex-row-reverse",
        only: "justify-center p-0 w-10 h-10"
      },
      uppercase: {
        true: "uppercase",
        false: ""
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
      shadow: "none",
      width: "auto",
      icon: "none",
      uppercase: !1
    }
  }
), lr = ({
  className: e,
  variant: r,
  size: t,
  rounded: n,
  shadow: o,
  width: i,
  icon: l,
  uppercase: u,
  children: s,
  ...c
}) => /* @__PURE__ */ st.jsx(
  ar,
  {
    className: ft(
      ir({ variant: r, size: t, rounded: n, shadow: o, width: i, icon: l, uppercase: u }),
      e
    ),
    ...c,
    children: s
  }
);
export {
  lr as Button
};
