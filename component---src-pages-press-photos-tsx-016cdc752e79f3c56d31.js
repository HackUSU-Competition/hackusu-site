"use strict";(self.webpackChunkhackusu_site=self.webpackChunkhackusu_site||[]).push([[878],{2888:function(e,t,n){n.d(t,{M:function(){return S}});var r=n(7294),a=n(5849),o=n(7569),i=n(2982);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=function(e,t,n){return t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},p=function(e,t){for(var n in t||(t={}))f.call(t,n)&&d(e,n,t[n]);if(u){var r,a=l(u(t));try{for(a.s();!(r=a.n()).done;){n=r.value;m.call(t,n)&&d(e,n,t[n])}}catch(o){a.e(o)}finally{a.f()}}return e},h=(0,o.k)((function(e,t){var n=t.spacing,r=t.breakpoints,a=t.cols,o=function(e,t){if(0===t.length)return t;var n="maxWidth"in t[0]?"maxWidth":"minWidth",r=(0,i.Z)(t).sort((function(t,r){return e.fn.size({size:r[n],sizes:e.breakpoints})-e.fn.size({size:t[n],sizes:e.breakpoints})}));return"minWidth"===n?r.reverse():r}(e,r).reduce((function(t,r){var a="maxWidth"in r?"max-width":"min-width",o=e.fn.size({size:"max-width"===a?r.maxWidth:r.minWidth,sizes:e.breakpoints});return t["@media (".concat(a,": ").concat(o+("max-width"===a?0:1),"px)")]={gridTemplateColumns:"repeat(".concat(r.cols,", minmax(0, 1fr))"),gap:e.fn.size({size:r.spacing||n,sizes:e.spacing})},t}),{});return{root:p({boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(".concat(a,", minmax(0, 1fr))"),gap:e.fn.size({size:n,sizes:e.spacing})},o)}})),y=n(7697);function b(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=Object.defineProperty,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,k=function(e,t,n){return t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},z={breakpoints:[],cols:1,spacing:"md"},S=(0,r.forwardRef)((function(e,t){var n=(0,a.Z3)("SimpleGrid",z,e),o=n.className,i=n.breakpoints,l=n.cols,c=n.spacing,s=n.children,u=n.classNames,f=n.styles,m=function(e,t){var n={};for(var r in e)x.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&w){var a,o=b(w(e));try{for(o.s();!(a=o.n()).done;)r=a.value,t.indexOf(r)<0&&E.call(e,r)&&(n[r]=e[r])}catch(i){o.e(i)}finally{o.f()}}return n}(n,["className","breakpoints","cols","spacing","children","classNames","styles"]),d=h({breakpoints:i,cols:l,spacing:c},{classNames:u,styles:f,name:"SimpleGrid"}),p=d.classes,g=d.cx;return r.createElement(y.x,function(e,t){for(var n in t||(t={}))x.call(t,n)&&k(e,n,t[n]);if(w){var r,a=b(w(t));try{for(a.s();!(r=a.n()).done;)n=r.value,E.call(t,n)&&k(e,n,t[n])}catch(o){a.e(o)}finally{a.f()}}return e}({className:g(p.root,o),ref:t},m),s)}));S.displayName="@mantine/core/SimpleGrid"},1033:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7728),a=n(7294),o=["size","color"];function i(e){var t=e.size,n=void 0===t?24:t,i=e.color,l=void 0===i?"currentColor":i,c=(0,r.Kd)(e,o);return a.createElement("svg",(0,r.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-download",width:n,height:n,viewBox:"0 0 24 24",stroke:l,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c),a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a.createElement("path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}),a.createElement("polyline",{points:"7 11 12 16 17 11"}),a.createElement("line",{x1:"12",y1:"4",x2:"12",y2:"16"}))}},9353:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(2982),a=n(7569),o=n(2230),i=n(9732),l=n(3128),c=n(4468),s=n(547),u=n(6319),f=n(2888),m=n(808),d=n(2361),p=n(3218),h=n(4731),y=n(6626),b=n(3125),g=n(5317),v=n(1597),w=n(7294),x=n(1033),E=(0,a.k)((function(e){return{image:{cursor:"pointer","&:hover":{opacity:.8}}}}));function k(){var e=E().classes,t=(0,w.useState)(!1),a=t[0],k=t[1],z=w.useState(),S=z[0],O=z[1];return w.createElement(y.Z,null,w.createElement(b.Z,null,"PAST PHOTOS"),w.createElement(o.W,null,w.createElement(i.T,{h:"lg"}),w.createElement(l.e,{component:v.rU,to:g.Hb.press},"← Press Resources"),w.createElement(c.x,{my:20},"The following images can be used by members of the media for reporting about HackUSU."),w.createElement(s.Z,{position:"right"},w.createElement(u.z,{rightIcon:w.createElement(x.Z,{size:14})},"Download All Images")),w.createElement(f.M,{cols:3,spacing:"lg",mt:30,breakpoints:[{maxWidth:"md",cols:2,spacing:"md"},{maxWidth:"xs",cols:1,spacing:"sm"}]},(0,r.Z)(Array(10)).map((function(t,r){var a=n(7162).Z;return w.createElement(m.X,{shadow:"sm",className:e.image},w.createElement(d.E,{onClick:function(){O(a),k(!0)},mx:"auto",key:r,radius:"sm",src:a,alt:"With default placeholder",withPlaceholder:!0}))})))),w.createElement(p.h,null,w.createElement(h.u,{overflow:"inside",opened:a,onClose:function(){return k(!1)},size:"100vh",padding:"xs",title:w.createElement(u.z,{component:"a",href:S,download:!0,variant:"subtle",rightIcon:w.createElement(x.Z,{size:16})},"Download"),styles:{header:{marginBottom:10},close:{marginRight:15}}},w.createElement(d.E,{fit:"contain",mx:"auto",radius:"sm",src:S,alt:"With default placeholder",withPlaceholder:!0}))))}}}]);
//# sourceMappingURL=component---src-pages-press-photos-tsx-016cdc752e79f3c56d31.js.map