_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[111],{"2HsF":function(e,n,r){!function(e){"use strict";var n=Object.freeze({__proto__:null,white:"#FFFFFF",black:"#061621",focus:"#019EE2",gray:{dark3:"#21313C",dark2:"#3D4F58",dark1:"#5D6C74",base:"#89979B",light1:"#B8C4C2",light2:"#E7EEEC",light3:"#F9FBFA"},green:{dark3:"#0B3B35",dark2:"#116149",dark1:"#09804C",base:"#13AA52",light2:"#C3E7CA",light3:"#E4F4E4"},blue:{dark3:"#0D324F",dark2:"#1A567E",base:"#007CAD",light1:"#9DD0E7",light2:"#C5E4F2",light3:"#E1F2F6"},yellow:{dark3:"#543E07",dark2:"#86681D",base:"#FFDD49",light2:"#FEF2C8",light3:"#FEF7E3"},red:{dark3:"#570B08",dark2:"#8F221B",dark1:"#B1371F",base:"#CF4A22",light2:"#F9D3C5",light3:"#FCEBE2"}});e.uiColors=n,Object.defineProperty(e,"__esModule",{value:!0})}(n)},"9F/H":function(e,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return p}));var t=r("oYCi"),a=r("h4VS"),o=(r("mXGw"),r("Hn8F")),c=r("ufKc"),l=r("hnBo"),i=r("2HsF");function u(){var e=Object(a.a)(["\n                  color: ",";\n                "]);return u=function(){return e},e}function s(){var e=Object(a.a)(["\n                  color: ",";\n                "]);return s=function(){return e},e}function d(){var e=Object(a.a)(["\n                  color: ",";\n                "]);return d=function(){return e},e}function f(){var e=Object(a.a)(["\n            min-width: 400px;\n          "]);return f=function(){return e},e}var b={darkMode:{type:"boolean",default:!1,label:"Dark Mode"},disabled:{type:"boolean",default:!1,label:"Disabled"},name:{type:"text",default:"Users",label:"Name"},children:{type:"text",default:"Find a user",label:"Children"}};function p(){return Object(t.jsx)(l.a,{knobsConfig:b,children:function(e){var n=e.children,r=e.name,a=e.disabled,l=e.darkMode;return Object(t.jsx)("div",{className:Object(o.a)(f()),children:Object(t.jsxs)(c.b,{darkMode:l,"aria-label":"Example usage of Tab component",children:[Object(t.jsx)(c.a,{default:!0,name:r,children:Object(t.jsx)("div",{className:Object(o.a)(d(),l?i.uiColors.white:i.uiColors.gray.dark3),children:n})}),Object(t.jsx)(c.a,{name:"Teams",children:Object(t.jsx)("div",{className:Object(o.a)(s(),l?i.uiColors.white:i.uiColors.gray.dark3),children:"Grant teams of users access to projects"})}),Object(t.jsx)(c.a,{name:"API Keys",disabled:a,children:Object(t.jsx)("div",{className:Object(o.a)(u(),l?i.uiColors.white:i.uiColors.gray.dark3),children:"Manage your infrastructure in code"})})]})})}})}},Hn8F:function(e,n,r){"use strict";r.d(n,"a",(function(){return c})),r.d(n,"b",(function(){return o}));var t=r("NEv/"),a=Object(t.a)(),o=(a.flush,a.hydrate,a.cx),c=(a.merge,a.getRegisteredStyles,a.injectGlobal,a.keyframes,a.css);a.sheet,a.cache},ufKc:function(e,n,r){"use strict";r.d(n,"a",(function(){return ne})),r.d(n,"b",(function(){return ee}));var t=r("mXGw"),a=r.n(t),o=r("W0B4"),c=r.n(o),l=r("5MD+"),i=r("G0rA"),u=r("QmRY"),s=r("726h"),d=r("q7FG"),f=r("jGqM"),b=r("kI+E"),p=r("5iLb"),h=r("WM7k");function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function g(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function O(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?g(Object(r),!0).forEach((function(n){v(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function y(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(t=(c=l.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(e){a=!0,o=e}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return w(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function C(){var e=j(["\n  cursor: pointer;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return C=function(){return e},e}function E(){var e=j(["\n  background-color: transparent;\n  border: 0px;\n  padding: 12px 16px;\n  text-decoration: none;\n  max-width: 300px;\n  white-space: nowrap;\n  transition: 150ms color ease-in-out;\n  font-family: ",";\n  font-weight: 600;\n  font-size: 16px;\n  position: relative;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 4px;\n    border-radius: 4px 4px 0 0;\n    transition: all 150ms ease-in-out;\n    background-color: transparent;\n    transform: scaleX(0.8);\n  }\n\n  &:hover:after {\n    transform: scaleX(0.95);\n  }\n\n  &:active:after {\n    &:after {\n      transform: scaleX(1);\n      background-color: ",";\n    }\n  }\n"]);return E=function(){return e},e}function x(){var e=j(["\n  &:after {\n    transform: scaleX(1);\n    background-color: ",";\n  }\n\n  &:hover:after {\n    transform: scaleX(1);\n    background-color: ",";\n  }\n"]);return x=function(){return e},e}function F(){var e=j(["\n      &:focus {\n        color: #43b1e5;\n\n        &:after {\n          background-color: ",";\n        }\n      }\n    "]);return F=function(){return e},e}function D(){var e=j(["\n      &:hover {\n        cursor: pointer;\n\n        &:not(:focus) {\n          color: ",";\n\n          &:after {\n            background-color: ",";\n          }\n        }\n      }\n    "]);return D=function(){return e},e}function N(){var e=j(["\n      color: ",";\n    "]);return N=function(){return e},e}function T(){var e=j(["\n      &:focus {\n        color: ",";\n\n        &:after {\n          background-color: ",";\n        }\n      }\n    "]);return T=function(){return e},e}function S(){var e=j(["\n      &:hover {\n        cursor: pointer;\n\n        &:not(:focus) {\n          color: ",";\n\n          &:after {\n            background-color: ",";\n          }\n        }\n      }\n    "]);return S=function(){return e},e}function A(){var e=j(["\n      color: ",";\n    "]);return A=function(){return e},e}var M={light:{listTitleColor:Object(l.css)(A(),i.a.gray.dark1),listTitleHover:Object(l.css)(S(),i.a.gray.dark3,i.a.gray.light2),listTitleFocus:Object(l.css)(T(),i.a.blue.base,i.a.blue.base)},dark:{listTitleColor:Object(l.css)(N(),i.a.gray.light1),listTitleHover:Object(l.css)(D(),i.a.white,i.a.gray.dark1),listTitleFocus:Object(l.css)(F(),i.a.blue.base)}},_=Object(l.css)(x(),i.a.green.base,i.a.green.base),P=Object(l.css)(E(),p.b.default,i.a.green.base),R=Object(l.css)(C()),B=function(e){var n,r=e.selected,o=void 0!==r&&r,c=e.disabled,i=void 0!==c&&c,u=e.children,s=e.className,d=e.darkMode,p=e.parentRef,g=y(e,["selected","disabled","children","className","darkMode","parentRef"]),j=Object(b.d)().usingKeyboard,w=k(Object(t.useState)(!1),2),C=w[0],E=w[1],x=Object(t.useRef)(null),F=d?Q.Dark:Q.Light;Object(t.useEffect)((function(){var e,n=Array.from(null!==(e=null==p?void 0:p.children)&&void 0!==e?e:[]),r=document.activeElement;r&&-1!==n.indexOf(r)&&!i&&o&&x.current&&x.current.focus()}),[p,i,o,x]),Object(h.c)((function(){var e=x.current;null!=e&&e.scrollWidth>300&&E(!0)}),[x,E]);var D=O(v({className:Object(l.cx)(P,M[F].listTitleColor,(n={},v(n,_,o),v(n,M[F].listTitleFocus,j),v(n,R,C),v(n,M[F].listTitleHover,!i&&!o),n),s),role:"tab",tabIndex:o?0:-1},"aria-selected",o),g);return"string"==typeof g.href?a.a.createElement(f.a,m({as:"a",ref:x},D),u):a.a.createElement(f.a,m({as:"button",ref:x},D),u)};B.displayName="TabTitle";var I,H=u.b.create("tab"),K=u.b.create("tab-panel"),X=a.a.memo((function(e){var n=e.child,r=e.selected,o=e.tabRef,c=e.panelRef,l=y(e,["child","selected","tabRef","panelRef"]),i=n.props,u=i.id,s=i.name,f=Object(t.useMemo)((function(){return K.generate()}),[]),b=Object(t.useMemo)((function(){return null!=u?u:H.generate()}),[u]),p=a.a.createElement(B,m({},l,{selected:r,id:b,"aria-controls":f}),s),h=Object(t.useMemo)((function(){return a.a.cloneElement(n,v({id:f,selected:r},"aria-labelledby",b))}),[n,f,r,b]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{container:o},p),a.a.createElement(d.a,{container:c},h))}));function z(){var e=j(["\n  cursor: not-allowed;\n"]);return z=function(){return e},e}function G(){var e=j(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  width: 100%;\n  overflow-x: auto;\n\n  /* Remove scrollbar */\n\n  /* Chrome, Edge, Safari and Opera */\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  -ms-overflow-style: none; /* IE */\n  scrollbar-width: none; /* Firefox */\n"]);return G=function(){return e},e}function L(){var e=j(["\n      border-bottom: 1px solid ",";\n    "]);return L=function(){return e},e}function W(){var e=j(["\n      color: ",";\n    "]);return W=function(){return e},e}function q(){var e=j(["\n      color: ",";\n\n      &:hover:not(:focus) {\n        color: ",";\n      }\n    "]);return q=function(){return e},e}function J(){var e=j(["\n      border-bottom: 1px solid ",";\n    "]);return J=function(){return e},e}function U(){var e=j(["\n      color: ",";\n    "]);return U=function(){return e},e}function Y(){var e=j(["\n      color: ",";\n\n      &:hover:not(:focus) {\n        color: ",";\n      }\n    "]);return Y=function(){return e},e}X.displayName="InternalTab";var Q={Dark:"dark",Light:"light"},V=(v(I={},Q.Light,{activeStyle:Object(l.css)(Y(),i.a.green.dark2,i.a.green.dark2),disabledColor:Object(l.css)(U(),i.a.gray.light1),underlineColor:Object(l.css)(J(),i.a.gray.light2)}),v(I,Q.Dark,{activeStyle:Object(l.css)(q(),i.a.green.light2,i.a.green.light2),disabledColor:Object(l.css)(W(),i.a.gray.dark1),underlineColor:Object(l.css)(L(),i.a.gray.dark2)}),I),$=Object(l.css)(G()),Z=Object(l.css)(z());function ee(e){var n;Object(s.c)(e,"Tabs");var r=e.children,o=e.setSelected,c=e.selected,i=e.className,d=e.darkMode,f=void 0!==d&&d,b=e.as,p=void 0===b?"button":b,h=e["aria-labelledby"],g=e["aria-label"],j=y(e,["children","setSelected","selected","className","darkMode","as","aria-labelledby","aria-label"]),w=f?Q.Dark:Q.Light,C=k(Object(t.useState)(null),2),E=C[0],x=C[1],F=k(Object(t.useState)(null),2),D=F[0],N=F[1],T=(v(n={},"aria-label",g),v(n,"aria-labelledby",h),n),S=Object(t.useMemo)((function(){return a.a.Children.toArray(r)}),[r]),A="number"==typeof c,M=k(Object(t.useState)(S.findIndex((function(e){return e.props.default||0}))),2),_=M[0],P=M[1],R=A?c:_,B=A?o:P,I=Object(t.useCallback)((function(e,n){B(n)}),[B]),H=Object(t.useCallback)((function(){var e=S.filter((function(e){return!e.props.disabled})).map((function(e){return S.indexOf(e)}));return[e,e.indexOf(R)]}),[S,R]),K=Object(t.useCallback)((function(e){if(!e.metaKey&&!e.ctrlKey)if(e.keyCode===u.f.ArrowRight){var n=k(H(),2),r=n[0],t=n[1];B(r[(t+1)%r.length])}else if(e.keyCode===u.f.ArrowLeft){var a=k(H(),2),o=a[0],c=a[1];B(o[(c-1+o.length)%o.length])}}),[H,B]),z=a.a.Children.map(r,(function(e,n){var r;if(!Object(u.e)(e,"Tab"))return e;var t=n===R,o=e.props,c=o.disabled,i=o.onClick,s=o.onKeyDown,d=o.className,b=y(o,["disabled","onClick","onKeyDown","className"]),h=O({as:p,disabled:c,darkMode:f,parentRef:E,className:Object(l.cx)((r={},v(r,V[w].activeStyle,t),v(r,Object(l.cx)(V[w].disabledColor,Z),c),r),d),onKeyDown:function(e){null==s||s(e),K(e)},onClick:c?void 0:function(e){null==i||i(e),I(e,n)}},b);return a.a.createElement(X,m({child:e,selected:t,tabRef:E,panelRef:D},h))}));return a.a.createElement("div",m({},j,{className:i}),z,a.a.createElement("div",m({className:Object(l.cx)($,V[w].underlineColor),role:"tablist",ref:x,"aria-orientation":"horizontal"},T)),a.a.createElement("div",{ref:N}))}function ne(e){var n=e.selected,r=e.children,t=y(e,["selected","children"]);return delete t.default,delete t.name,delete t.onClick,a.a.createElement("div",m({},t,{role:"tabpanel"}),n?r:null)}ee.displayName="Tabs",ee.propTypes={children:c.a.node,setSelected:c.a.func,selected:c.a.number,className:c.a.string,as:c.a.oneOfType([c.a.string,c.a.func])},ne.displayName="Tab",ne.propTypes={selected:c.a.bool,children:c.a.node,name:c.a.oneOfType([c.a.string,c.a.node]),content:c.a.node,disabled:c.a.bool,ariaControl:c.a.string}},zDlf:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/tabs/example",function(){return r("9F/H")}])}},[["zDlf",0,1,2,3,4,5,6,7,8,16,18]]]);