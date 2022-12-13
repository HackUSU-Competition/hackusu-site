"use strict";(self.webpackChunkhackusu_site=self.webpackChunkhackusu_site||[]).push([[878],{2888:function(e,t,r){r.d(t,{M:function(){return S}});var n=r(7294),a=r(5849),o=r(7569),i=r(2982);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=function(e,t,r){return t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},d=function(e,t){for(var r in t||(t={}))f.call(t,r)&&p(e,r,t[r]);if(u){var n,a=l(u(t));try{for(a.s();!(n=a.n()).done;){r=n.value;m.call(t,r)&&p(e,r,t[r])}}catch(o){a.e(o)}finally{a.f()}}return e},y=(0,o.k)((function(e,t){var r=t.spacing,n=t.breakpoints,a=t.cols,o=function(e,t){if(0===t.length)return t;var r="maxWidth"in t[0]?"maxWidth":"minWidth",n=(0,i.Z)(t).sort((function(t,n){return e.fn.size({size:n[r],sizes:e.breakpoints})-e.fn.size({size:t[r],sizes:e.breakpoints})}));return"minWidth"===r?n.reverse():n}(e,n).reduce((function(t,n){var a="maxWidth"in n?"max-width":"min-width",o=e.fn.size({size:"max-width"===a?n.maxWidth:n.minWidth,sizes:e.breakpoints});return t["@media (".concat(a,": ").concat(o+("max-width"===a?0:1),"px)")]={gridTemplateColumns:"repeat(".concat(n.cols,", minmax(0, 1fr))"),gap:e.fn.size({size:n.spacing||r,sizes:e.spacing})},t}),{});return{root:d({boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(".concat(a,", minmax(0, 1fr))"),gap:e.fn.size({size:r,sizes:e.spacing})},o)}})),h=r(7697);function b(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=Object.defineProperty,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,z=function(e,t,r){return t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},O={breakpoints:[],cols:1,spacing:"md"},S=(0,n.forwardRef)((function(e,t){var r=(0,a.Z3)("SimpleGrid",O,e),o=r.className,i=r.breakpoints,l=r.cols,c=r.spacing,s=r.children,u=r.classNames,f=r.styles,m=function(e,t){var r={};for(var n in e)x.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&w){var a,o=b(w(e));try{for(o.s();!(a=o.n()).done;)n=a.value,t.indexOf(n)<0&&E.call(e,n)&&(r[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return r}(r,["className","breakpoints","cols","spacing","children","classNames","styles"]),p=y({breakpoints:i,cols:l,spacing:c},{classNames:u,styles:f,name:"SimpleGrid"}),d=p.classes,v=p.cx;return n.createElement(h.x,function(e,t){for(var r in t||(t={}))x.call(t,r)&&z(e,r,t[r]);if(w){var n,a=b(w(t));try{for(a.s();!(n=a.n()).done;)r=n.value,E.call(t,r)&&z(e,r,t[r])}catch(o){a.e(o)}finally{a.f()}}return e}({className:v(d.root,o),ref:t},m),s)}));S.displayName="@mantine/core/SimpleGrid"},1033:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7728),a=r(7294),o=["size","color"];function i(e){var t=e.size,r=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,c=(0,n.Kd)(e,o);return a.createElement("svg",(0,n.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-download",width:r,height:r,viewBox:"0 0 24 24",stroke:l,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c),a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}),a.createElement("polyline",{points:"7 11 12 16 17 11"}),a.createElement("line",{x1:"12",y1:"4",x2:"12",y2:"16"}))}},2761:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n=r(2982),a=r(7294),o=r(5849),i=r(7697);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=function(e,t,r){return t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},d={w:0,h:0},y=(0,a.forwardRef)((function(e,t){var r=(0,o.Z3)("Space",d,e),c=r.w,s=r.h,y=r.sx,h=function(e,t){var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u){var a,o=l(u(e));try{for(o.s();!(a=o.n()).done;)n=a.value,t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return r}(r,["w","h","sx"]);return a.createElement(i.x,function(e,t){for(var r in t||(t={}))f.call(t,r)&&p(e,r,t[r]);if(u){var n,a=l(u(t));try{for(a.s();!(n=a.n()).done;)r=n.value,m.call(t,r)&&p(e,r,t[r])}catch(o){a.e(o)}finally{a.f()}}return e}({ref:t,sx:[function(e){var t=e.fn.size({size:c,sizes:e.spacing}),r=e.fn.size({size:s,sizes:e.spacing});return{width:t,height:r,minWidth:t,minHeight:r}}].concat((0,n.Z)(Array.isArray(y)?y:[y]))},h))}));y.displayName="@mantine/core/Space";var h=r(7569),b=r(2230),v=r(3128),g=r(4468),w=r(547),x=r(6319),E=r(2888),z=r(808),O=r(2361),S=r(3218),k=r(4731),A=r(6626),j=r(3125),I=r(5317),P=r(1597),W=r(1033),Z=(0,h.k)((function(e){return{image:{cursor:"pointer","&:hover":{opacity:.8}}}}));function C(){var e=Z().classes,t=(0,a.useState)(!1),o=t[0],i=t[1],l=a.useState(),c=l[0],s=l[1];return a.createElement(A.Z,null,a.createElement(j.Z,null,"PAST PHOTOS"),a.createElement(b.W,null,a.createElement(y,{h:"lg"}),a.createElement(v.e,{component:P.rU,to:I.Hb.press},"← Press Resources"),a.createElement(g.x,{my:20},"The following images can be used by members of the media for reporting about HackUSU."),a.createElement(w.Z,{position:"right"},a.createElement(x.z,{rightIcon:a.createElement(W.Z,{size:14})},"Download All Images")),a.createElement(E.M,{cols:3,spacing:"lg",mt:30,breakpoints:[{maxWidth:"md",cols:2,spacing:"md"},{maxWidth:"xs",cols:1,spacing:"sm"}]},(0,n.Z)(Array(10)).map((function(t,n){var o=r(7162).Z;return a.createElement(z.X,{shadow:"sm",className:e.image},a.createElement(O.E,{onClick:function(){s(o),i(!0)},mx:"auto",key:n,radius:"sm",src:o,alt:"With default placeholder",withPlaceholder:!0}))})))),a.createElement(S.h,null,a.createElement(k.u,{overflow:"inside",opened:o,onClose:function(){return i(!1)},size:"100vh",padding:"xs",title:a.createElement(x.z,{component:"a",href:c,download:!0,variant:"subtle",rightIcon:a.createElement(W.Z,{size:16})},"Download"),styles:{header:{marginBottom:10},close:{marginRight:15}}},a.createElement(O.E,{fit:"contain",mx:"auto",radius:"sm",src:c,alt:"With default placeholder",withPlaceholder:!0}))))}}}]);
//# sourceMappingURL=component---src-pages-press-photos-tsx-349a358cb1c55daee6ad.js.map