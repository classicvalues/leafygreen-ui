_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[105],{"/a+d":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/stepper/example",function(){return t("M7WD")}])},"5sI4":function(e,n,t){e.exports=function(e,n,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(n);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var s={small:14,default:16,large:20,xlarge:24};function u(){var e=l(["\n    flex-shrink: 0;\n  "]);return u=function(){return e},e}function p(){var e=l(["\n    color: ",";\n  "]);return p=function(){return e},e}var f=function(n){var r,a=n.className,l=n.size,f=void 0===l?16:l,b=n.title,d=n["aria-label"],m=n["aria-labelledby"],y=n.fill,g=n.role,h=void 0===g?"img":g,O=c(n,["className","size","title","aria-label","aria-labelledby","fill","role"]),v=t.css(p(),y),j=t.css(u()),x=function(e,n,t){var r,a,i=t["aria-label"],c=t["aria-labelledby"],l=t.title;switch(e){case"img":return i||c||l?(o(r={},"aria-labelledby",c),o(r,"aria-label",i),o(r,"title",l),r):{"aria-label":(a=n,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(h,"Ellipsis",(o(r={title:b},"aria-label",d),o(r,"aria-labelledby",m),r));return e.createElement("svg",i({className:t.cx(o({},v,null!=y),j,a),height:"number"==typeof f?f:s[f],width:"number"==typeof f?f:s[f],role:h},x,O,{viewBox:"0 0 16 16"}),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.75 6C3.7165 6 4.5 6.7835 4.5 7.75C4.5 8.7165 3.7165 9.5 2.75 9.5C1.7835 9.5 1 8.7165 1 7.75C1 6.7835 1.7835 6 2.75 6ZM7.75 6C8.7165 6 9.5 6.7835 9.5 7.75C9.5 8.7165 8.7165 9.5 7.75 9.5C6.7835 9.5 6 8.7165 6 7.75C6 6.7835 6.7835 6 7.75 6ZM14.5 7.75C14.5 6.7835 13.7165 6 12.75 6C11.7835 6 11 6.7835 11 7.75C11 8.7165 11.7835 9.5 12.75 9.5C13.7165 9.5 14.5 8.7165 14.5 7.75Z",fill:"currentColor"}))};return f.displayName="Ellipsis",f.isGlyph=!0,f.propTypes={fill:a.default.string,size:a.default.oneOfType([a.default.number,a.default.string]),className:a.default.string},f}(t("mXGw"),t("W0B4"),t("5MD+"))},M7WD:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return he}));var r=t("rePB"),a=t("oYCi"),o=t("mXGw"),i=t.n(o),c=t("W0B4"),l=t.n(c),s=t("5MD+"),u=t("KQAK"),p=t.n(u),f=t("5sI4"),b=t.n(f),d=t("+xY2"),m=t("QmRY"),y=t("G0rA");function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}}(e,n)||w(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,n){if(e){if("string"==typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?S(e,n):void 0}}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function E(){var e=j(["\n  background-color: white;\n  border-color: ",";\n  color: ",";\n"]);return E=function(){return e},e}function P(){var e=j(["\n  background-color: ",";\n  border-color: #464c4f;\n  color: white;\n"]);return P=function(){return e},e}function N(){var e=j(["\n  background-color: white;\n  border-color: ",";\n  color: ",";\n"]);return N=function(){return e},e}function k(){var e=j(["\n  display: flex;\n  position: absolute;\n\n  align-items: center;\n  justify-content: center;\n  top: calc(100% - 12px);\n\n  height: 24px;\n  min-width: 24px;\n  max-width: max-content;\n\n  font-size: 12px;\n  line-height: 14px;\n\n  border-radius: 12px;\n  border: 1px solid;\n"]);return k=function(){return e},e}function B(){var e=j(["\n  position: relative;\n  height: ","px;\n  width: 100%;\n\n  background: ",";\n  border-bottom: 1px solid;\n  border-top: 1px solid;\n  border-color: ",";\n"]);return B=function(){return e},e}function A(){var e=j(["\n  left: ","px;\n  transition: left 700ms;\n"]);return A=function(){return e},e}function C(){var e=j(["\n  left: 0;\n  transition: left 700ms;\n"]);return C=function(){return e},e}function D(){var e=j(["\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n"]);return D=function(){return e},e}function z(){var e=j(["\n  color: ",";\n  z-index: 1;\n\n  &:last-of-type {\n    z-index: 0;\n  }\n\n  ",", "," {\n    & > *,\n    &:before,\n    &:after {\n      background: ",";\n      border-color: ",";\n    }\n  }\n"]);return z=function(){return e},e}function T(){var e=j(["\n  filter: drop-shadow(0px 4px 4px ",");\n  z-index: 3;\n\n  &:last-of-type:not(:first-of-type) {\n    ",":before {\n      transform: skewX(","rad);\n    }\n\n    ",":before {\n      transform: skewX(-","rad);\n    }\n  }\n"]);return T=function(){return e},e}function M(){var e=j(["\n  overflow: hidden;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n"]);return M=function(){return e},e}function _(){var e=j(["\n  flex: 1;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: calc(100% + 2px);\n  min-width: 0; // https://css-tricks.com/flexbox-truncated-text/\n  margin-left: -","px;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  padding-left: ","px;\n  padding-right: 16px;\n\n  color: ",";\n  font-family: Akzidenz, 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n\n  z-index: 2;\n\n  &:first-of-type {\n    margin-left: 0;\n    padding-left: 16px;\n\n    ",", "," {\n      &:before {\n        transform: none;\n      }\n    }\n  }\n\n  &:last-of-type {\n    padding-left: calc(","px);\n\n    ",", "," {\n      &:after {\n        transform: none;\n      }\n    }\n  }\n"]);return _=function(){return e},e}function I(){var e=j(["\n  ",";\n\n  & > * {\n    border-top: none;\n  }\n\n  &:before,\n  &:after {\n    border-top: none;\n    transform-origin: 50% 100%;\n    transform: skewX(","rad);\n  }\n"]);return I=function(){return e},e}function X(){var e=j(["\n  ",";\n\n  & > * {\n    border-bottom: none;\n  }\n\n  &:before,\n  &:after {\n    border-bottom: none;\n    transform-origin: 50% 0%;\n    transform: skewX(","rad);\n  }\n"]);return X=function(){return e},e}function L(){var e=j(["\n  display: inline-block;\n\n  height: 50%;\n  width: 100%;\n\n  & > *,\n  &:before,\n  &:after {\n    display: inline-block;\n    height: 100%;\n    background: white;\n    border: 1px solid #dee0e3;\n  }\n\n  & > * {\n    width: calc(100% - ","px);\n    margin-right: -","px;\n    border-left: none;\n    border-right: none;\n  }\n\n  &:before,\n  &:after {\n    content: '';\n    width: ","px;\n  }\n\n  &:before {\n    border-right: none;\n  }\n\n  &:after {\n    border-left: none;\n  }\n"]);return L=function(){return e},e}function R(){var e=j(["\n  display: flex;\n  flex-wrap: wrap;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n\n  // Safari doesn't correctly position absolutely positioned elements inside flex containers\n  // https://developers.google.com/web/updates/2016/06/absolute-positioned-children\n  left: 0;\n  top: 0;\n"]);return R=function(){return e},e}function G(){var e=j(["\n  display: flex;\n  position: absolute;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  transition: opacity 700ms, visibility 700ms;\n"]);return G=function(){return e},e}var W={stepBoxTop:Object(m.c)("step-box-top"),stepBoxBottom:Object(m.c)("step-box-bottom")},Z=Object(s.css)(G()),q=Object(s.css)(R()),Y=Object(s.css)(L(),16,16,16),$=Object(s.css)(X(),Y,Math.atan(2/3)),H=Object(s.css)(I(),Y,-Math.atan(2/3)),J=Object(s.css)(_(),17,32,y.a.gray.dark3,W.stepBoxTop.selector,W.stepBoxBottom.selector,48,W.stepBoxTop.selector,W.stepBoxBottom.selector),K=Object(s.css)(M()),Q=Object(s.css)(T(),Object(d.a)(.75,y.a.black),W.stepBoxTop.selector,Math.atan(2/3),W.stepBoxBottom.selector,Math.atan(2/3)),U=Object(s.css)(z(),y.a.gray.base,W.stepBoxTop.selector,W.stepBoxBottom.selector,y.a.gray.light3,y.a.gray.light2),F=Object(s.css)(D()),V=Object(s.css)(C()),ee=Object(s.css)(A(),-32),ne=Object(s.css)(B(),48,y.a.gray.light3,y.a.gray.light2),te=Object(s.css)(k()),re=Object(s.css)(N(),y.a.green.base,y.a.green.base),ae=Object(s.css)(P(),y.a.gray.dark2),oe=Object(s.css)(E(),y.a.gray.light1,y.a.gray.base),ie=Object(s.css)("padding: 0 8px;"),ce=Object(s.css)("cursor: pointer;");function le(e){var n,t,r=e.children,a=e.state,o=e.stepLabel,c=e.isPreview,l=e.className,u=function(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["children","state","stepLabel","isPreview","className"]),f="current"===a,b="upcoming"===a,d="completed"===a;return i.a.createElement("div",h({className:"".concat(Object(s.cx)(J,(n={},g(n,Q,f),g(n,U,b),g(n,ce,c),n))," ").concat(l)},u),o&&i.a.createElement("div",{className:Object(s.cx)(te,(t={},g(t,ae,f),g(t,re,d),g(t,oe,b),g(t,ce,c),t))},d?i.a.createElement(p.a,null):i.a.createElement("div",{className:ie},o)),i.a.createElement("div",{className:Object(s.cx)(K,g({},ce,c))},r),i.a.createElement("div",{className:q},i.a.createElement("span",h({className:$},W.stepBoxTop.prop),i.a.createElement("div",null)),i.a.createElement("span",h({className:H},W.stepBoxBottom.prop),i.a.createElement("div",null))))}function se(e){var n=e.children,t=e.currentStep,r=e.maxDisplayedSteps,a=void 0===r?Array.isArray(n)?n.length:1:r,c=e.className,l=x(Object(o.useState)("current"),2),u=l[0],p=l[1],f=(Array.isArray(n)?n:[n]).map((function(e,n){var r;return r=n<t?"completed":n===t?"current":"upcoming",{"aria-label":fe(e.props.children),"aria-current":t===n?"step":void 0,step:n,stepLabel:(n+1).toString(),state:r,children:e,isPreview:!1}})),b=f.length,d=be({currentStep:t,numSteps:b,maxDisplayedSteps:a}),m=d.rangeStart,y=d.rangeEnd,O=pe(f,{currentStep:t,rangeStart:m,rangeEnd:y}),j={current:O};return m>0&&(O[0].onMouseOver=function(){p("previous")},j.previous=pe(f,v({currentStep:t},be({currentStep:m-1,numSteps:b,maxDisplayedSteps:a}))).map((function(e){return v({},e,{isPreview:!0})}))),y<b-1&&(O[O.length-1].onMouseOver=function(){p("next")},j.next=pe(f,v({currentStep:t},be({currentStep:y,numSteps:b,maxDisplayedSteps:a}))).map((function(e){return v({},e,{isPreview:!0})}))),Object.entries(j).forEach((function(e){var n=x(e,2),t=n[0],r=n[1];r.forEach((function(e,n){var a;n<r.length-1&&(e.className=Object(s.cx)((g(a={},V,u===t),g(a,ee,u!==t),a)))}))})),i.a.createElement("ol",{className:Object(s.cx)(ne,c),onMouseLeave:function(){return p("current")}},Object.entries(j).map((function(e){var n=x(e,2),t=n[0],r=n[1];return i.a.createElement("li",{key:t,className:Object(s.cx)(Z,g({},F,u!==t))},r.map((function(e,n){return i.a.createElement(le,h({key:n},e))})))})))}le.displayName="Step",se.displayName="Stepper",se.propTypes={children:l.a.node.isRequired,currentStep:l.a.number.isRequired,maxDisplayedSteps:l.a.number};var ue=function(e){var n=e.children;return i.a.createElement(i.a.Fragment,null,n)};function pe(e,n){var t,r=n.currentStep,a=n.rangeStart,o=n.rangeEnd,c=[];return a>0&&c.push({"aria-label":"Previous steps",step:"previous",stepLabel:"+".concat(a),state:a>r+1?"upcoming":"completed",children:i.a.createElement(b.a,null),isPreview:!0}),c.push.apply(c,function(e){if(Array.isArray(e))return S(e)}(t=e.slice(a,o).map((function(e){return v({},e)})))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||w(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o<e.length&&c.push({"aria-label":"Next steps",step:"next",stepLabel:"+".concat(e.length-o),state:"upcoming",children:i.a.createElement(b.a,null),isPreview:!0}),c}function fe(e){return e instanceof Array?e.map((function(e){return fe(e)})).join(""):e.toString()}function be(e){var n=e.currentStep,t=e.numSteps,r=e.maxDisplayedSteps;if(t<=r)return{rangeStart:0,rangeEnd:t};if(n+1<r)return{rangeStart:0,rangeEnd:r-1};if(n>t-r)return{rangeStart:t-r+1,rangeEnd:t};var a=n-(n-r+1)%(r-2);return{rangeStart:a,rangeEnd:a+r-2}}ue.displayName="Step",ue.propTypes={children:l.a.oneOfType([l.a.string,l.a.number,l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number]))]).isRequired};var de=t("hnBo");function me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var ye={currentStep:{type:"number",default:0,label:"Current Step"}};function ge(e){var n=e.currentStep,t=n>6?6:n<0?0:n;return Object(a.jsx)("div",{style:{width:1e3},children:Object(a.jsxs)(se,{currentStep:t,maxDisplayedSteps:5,children:[Object(a.jsx)(ue,{children:"Overview"}),Object(a.jsx)(ue,{children:"Configuration"}),Object(a.jsx)(ue,{children:"Update"}),Object(a.jsx)(ue,{children:"Install"}),Object(a.jsx)(ue,{children:"Billing"}),Object(a.jsx)(ue,{children:"Address"}),Object(a.jsx)(ue,{children:"Confirmation"})]})})}function he(){return Object(a.jsx)(de.a,{knobsConfig:ye,children:function(e){return Object(a.jsx)(ge,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?me(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))}})}}},[["/a+d",0,1,2,3,4,5,6,7,8,12,16,18]]]);