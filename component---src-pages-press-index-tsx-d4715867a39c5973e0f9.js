"use strict";(self.webpackChunkhackusu_site=self.webpackChunkhackusu_site||[]).push([[652],{56875:function(e,t,r){r.d(t,{M:function(){return p}});var n=r(42982),a=r(67294),o=r(73217),i=r(37697);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=function(e,t,r){return t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},p=(0,a.forwardRef)((function(e,t){var r=(0,o.Z3)("Center",{},e),c=r.inline,s=r.sx,p=function(e,t){var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u){var a,o=l(u(e));try{for(o.s();!(a=o.n()).done;)n=a.value,t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return r}(r,["inline","sx"]);return a.createElement(i.x,function(e,t){for(var r in t||(t={}))f.call(t,r)&&d(e,r,t[r]);if(u){var n,a=l(u(t));try{for(a.s();!(n=a.n()).done;)r=n.value,m.call(t,r)&&d(e,r,t[r])}catch(o){a.e(o)}finally{a.f()}}return e}({ref:t,sx:[{display:c?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}].concat((0,n.Z)(Array.isArray(s)?s:[s]))},p))}));p.displayName="@mantine/core/Center"},52028:function(e,t,r){r.d(t,{i:function(){return S}});var n=r(4942),a=r(67294),o=r(73217),i=r(47569),l={xs:1,sm:2,md:3,lg:4,xl:5},c=(0,i.k)((function(e,t){var r=t.size,n=t.variant,a=t.color;return{root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center",color:"dark"===a?e.colors.dark[1]:e.fn.themeColor(a,6),"&::before":{content:'""',flex:1,height:1,borderTop:"".concat(e.fn.size({size:r,sizes:l}),"px ").concat(n," ").concat(e.fn.themeColor(a,"dark"===e.colorScheme?3:4)),marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:"".concat(e.fn.size({size:r,sizes:l}),"px ").concat(n," ").concat(e.fn.themeColor(a,"dark"===e.colorScheme?3:4)),marginLeft:e.spacing.xs}},horizontal:{border:0,borderTopWidth:e.fn.size({size:r,sizes:l}),borderTopColor:e.fn.themeColor(a,"dark"===e.colorScheme?3:4),borderTopStyle:n,margin:0},vertical:{border:0,alignSelf:"stretch",height:"100%",borderLeftWidth:e.fn.size({size:r,sizes:l}),borderLeftColor:e.fn.themeColor(a,4),borderLeftStyle:n}}})),s=r(37697),u=r(34468);function f(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=function(e,t,r){return t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},w=function(e,t){for(var r in t||(t={}))g.call(t,r)&&v(e,r,t[r]);if(y){var n,a=f(y(t));try{for(a.s();!(n=a.n()).done;){r=n.value;b.call(t,r)&&v(e,r,t[r])}}catch(o){a.e(o)}finally{a.f()}}return e},x={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},S=(0,a.forwardRef)((function(e,t){var r,i,l,m=(0,o.Z3)("Divider",x,e),d=m.className,v=m.color,S=m.orientation,k=m.size,E=m.label,O=m.labelPosition,j=m.labelProps,z=m.variant,A=m.styles,U=m.classNames,C=function(e,t){var r={};for(var n in e)g.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&y){var a,o=f(y(e));try{for(o.s();!(a=o.n()).done;)n=a.value,t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return r}(m,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames"]),I=(0,o.rZ)(),P=v||("dark"===I.colorScheme?"dark":"gray"),N=c({color:P,size:k,variant:z},{classNames:U,styles:A,name:"Divider"}),T=N.classes,H=N.cx,W="vertical"===S,M=!W,D=!!E&&M;return a.createElement(s.x,w({ref:t,className:H(T.root,(r={},(0,n.Z)(r,T.vertical,W),(0,n.Z)(r,T.horizontal,M),(0,n.Z)(r,T.withLabel,D),r),d)},C),!!E&&M&&a.createElement(u.x,(i=w({},j),l={color:P,size:(null==j?void 0:j.size)||"xs",sx:{marginTop:2},className:H(T.label,T[O])},p(i,h(l))),E))}));S.displayName="@mantine/core/Divider"},22888:function(e,t,r){r.d(t,{M:function(){return O}});var n=r(67294),a=r(73217),o=r(47569),i=r(42982);function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=function(e,t,r){return t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},p=function(e,t){for(var r in t||(t={}))f.call(t,r)&&d(e,r,t[r]);if(u){var n,a=l(u(t));try{for(a.s();!(n=a.n()).done;){r=n.value;m.call(t,r)&&d(e,r,t[r])}}catch(o){a.e(o)}finally{a.f()}}return e},h=(0,o.k)((function(e,t){var r=t.spacing,n=t.breakpoints,a=t.cols,o=function(e,t){if(0===t.length)return t;var r="maxWidth"in t[0]?"maxWidth":"minWidth",n=(0,i.Z)(t).sort((function(t,n){return e.fn.size({size:n[r],sizes:e.breakpoints})-e.fn.size({size:t[r],sizes:e.breakpoints})}));return"minWidth"===r?n.reverse():n}(e,n).reduce((function(t,n){var a="maxWidth"in n?"max-width":"min-width",o=e.fn.size({size:"max-width"===a?n.maxWidth:n.minWidth,sizes:e.breakpoints});return t["@media (".concat(a,": ").concat(o+("max-width"===a?0:1),"px)")]={gridTemplateColumns:"repeat(".concat(n.cols,", minmax(0, 1fr))"),gap:e.fn.size({size:n.spacing||r,sizes:e.spacing})},t}),{});return{root:p({boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(".concat(a,", minmax(0, 1fr))"),gap:e.fn.size({size:r,sizes:e.spacing})},o)}})),y=r(37697);function g(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=Object.defineProperty,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,k=function(e,t,r){return t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},E={breakpoints:[],cols:1,spacing:"md"},O=(0,n.forwardRef)((function(e,t){var r=(0,a.Z3)("SimpleGrid",E,e),o=r.className,i=r.breakpoints,l=r.cols,c=r.spacing,s=r.children,u=r.classNames,f=r.styles,m=function(e,t){var r={};for(var n in e)x.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&w){var a,o=g(w(e));try{for(o.s();!(a=o.n()).done;)n=a.value,t.indexOf(n)<0&&S.call(e,n)&&(r[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return r}(r,["className","breakpoints","cols","spacing","children","classNames","styles"]),d=h({breakpoints:i,cols:l,spacing:c},{classNames:u,styles:f,name:"SimpleGrid"}),p=d.classes,b=d.cx;return n.createElement(y.x,function(e,t){for(var r in t||(t={}))x.call(t,r)&&k(e,r,t[r]);if(w){var n,a=g(w(t));try{for(a.s();!(n=a.n()).done;)r=n.value,S.call(t,r)&&k(e,r,t[r])}catch(o){a.e(o)}finally{a.f()}}return e}({className:b(p.root,o),ref:t},m),s)}));O.displayName="@mantine/core/SimpleGrid"},8187:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(63366),a=r(37697),o=r(73217),i=r(92230),l=r(47569),c=r(24458),s=r(34468),u=r(52028),f=r(67294),m=(0,l.k)((function(e){return{title:{paddingBottom:e.spacing.md,letterSpacing:"0.05em",fontSize:2*e.fontSizes.xl,textAlign:"center"},description:{fontSize:1.2*e.fontSizes.xl}}})),d=function(e){var t=e.title,r=e.children,n=m().classes;return f.createElement(a.x,{mb:40},f.createElement(c.D,{order:2,className:n.title},t),f.createElement(i.W,{size:"sm"},f.createElement(s.x,{align:"center",weight:"300",className:n.description},r)),f.createElement(u.i,{mt:30,size:"md",mx:"auto",sx:{maxWidth:"200px"}}))},p=["title","subtitle","children","fullWidth","background","width"],h={white:{},light:function(e){return{backgroundColor:e.colors.gray[1],background:"url("+r(67260).Z+")",backgroundAttachment:"fixed",backgroundSize:"cover",border:"1px solid "+e.colors.gray[3]}}},y={white:{},light:{}},g=function(e){var t=e.title,r=e.subtitle,l=e.children,c=e.fullWidth,s=e.background,u=void 0===s?"white":s,m=e.width,g=(0,n.Z)(e,p),b=f.createElement(f.Fragment,null,t&&f.createElement(d,{title:t},r),l);return f.createElement(a.x,Object.assign({sx:h[u],py:75},g),f.createElement(o.Me,{defaultProps:y[u]},c?b:f.createElement(i.W,{size:m},b)))}},87342:function(e,t,r){r.r(t),r.d(t,{default:function(){return ze}});var n=r(54871),a=r(47569),o=r(34468),i=r(56875),l=r(86319),c=r(24458),s=r(83128),u=r(808),f=r(22888),m=r(37697),d=r(92230),p=r(67294),h=r(73217);function y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=Object.defineProperty,v=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,S=function(e,t,r){return t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r};function k(e){return p.createElement("svg",function(e,t){for(var r in t||(t={}))w.call(t,r)&&S(e,r,t[r]);if(v){var n,a=y(v(t));try{for(a.s();!(n=a.n()).done;)r=n.value,x.call(t,r)&&S(e,r,t[r])}catch(o){a.e(o)}finally{a.f()}}return e}({width:"20",height:"20",viewBox:"0 0 409.294 409.294",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),p.createElement("path",{d:"M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z"}))}function E(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=Object.defineProperty,z=Object.defineProperties,A=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,P=function(e,t,r){return t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},N=function(e,t){for(var r in t||(t={}))C.call(t,r)&&P(e,r,t[r]);if(U){var n,a=E(U(t));try{for(a.s();!(n=a.n()).done;){r=n.value;I.call(t,r)&&P(e,r,t[r])}}catch(o){a.e(o)}finally{a.f()}}return e},T=(0,a.k)((function(e,t){var r,n,a=t.color;return{root:(r=N({},e.fn.fontStyles()),n={fontSize:e.fontSizes.lg,lineHeight:e.lineHeight,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,margin:0,borderTopRightRadius:e.radius.sm,borderBottomRightRadius:e.radius.sm,padding:"".concat(e.spacing.md,"px ").concat(e.spacing.lg,"px")},z(r,A(n))),inner:{display:"flex"},body:{flex:1,overflow:"hidden",textOverflow:"ellipsis"},icon:{color:e.fn.themeColor(a,"dark"===e.colorScheme?6:7),marginRight:e.spacing.lg,marginTop:2,width:22},cite:{display:"block",fontSize:e.fontSizes.sm,marginTop:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],overflow:"hidden",textOverflow:"ellipsis"}}}));function H(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M=Object.defineProperty,D=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,_=function(e,t,r){return t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},F={color:"gray",icon:p.createElement(k,null)},L=(0,p.forwardRef)((function(e,t){var r=(0,h.Z3)("Blockquote",F,e),n=r.className,a=r.color,o=r.icon,i=r.cite,l=r.children,c=r.classNames,s=r.styles,u=function(e,t){var r={};for(var n in e)Z.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&D){var a,o=H(D(e));try{for(o.s();!(a=o.n()).done;)n=a.value,t.indexOf(n)<0&&R.call(e,n)&&(r[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return r}(r,["className","color","icon","cite","children","classNames","styles"]),f=T({color:a},{classNames:c,styles:s,name:"Blockquote"}),d=f.classes,y=f.cx;return p.createElement(m.x,function(e,t){for(var r in t||(t={}))Z.call(t,r)&&_(e,r,t[r]);if(D){var n,a=H(D(t));try{for(a.s();!(n=a.n()).done;)r=n.value,R.call(t,r)&&_(e,r,t[r])}catch(o){a.e(o)}finally{a.f()}}return e}({component:"blockquote",className:y(d.root,n),ref:t},u),p.createElement("div",{className:d.inner},o&&p.createElement("div",{className:d.icon},o),p.createElement("div",{className:d.body},l,i&&p.createElement("cite",{className:d.cite},i))))}));L.displayName="@mantine/core/Blockquote";var B=r(62396),$=r(8187),G=r(65317),q=[{label:"Students",value:"279",description:"From high school seniors, all the way to Ph.D. students!"},{label:"Schools",value:"12",description:"Students attended from 12 different universities, community colleges, and high schools from across Utah and Idaho"},{label:"Projects",value:"80",description:"Competition categories include game development, security, data analytics, and more!"}],V=r(1597),Y=r(57856),J=(0,a.k)((function(e){var t,r;return{stats:(t={padding:e.spacing.xl,backgroundColor:e.colors.blue[6],color:e.white},t[e.fn.smallerThan("sm")]={padding:e.spacing.lg},t[e.fn.smallerThan("xs")]={padding:e.spacing.md},t),stat:{"& + &":(r={paddingLeft:e.spacing.xl,marginLeft:e.spacing.xl,borderLeft:"1px solid rgba(255, 255, 255, 0.6)"},r[e.fn.smallerThan("xs")]={paddingLeft:0,marginLeft:0,borderLeft:0,paddingTop:e.spacing.xs,marginTop:e.spacing.xl,borderTop:"1px solid rgba(255, 255, 255, 0.6)"},r)},value:{fontSize:2*e.fontSizes.xl,fontWeight:800,marginTop:e.spacing.xs,marginBottom:e.spacing.xs/2},label:{fontSize:e.fontSizes.md,fontWeight:600,textTransform:"uppercase",marginBottom:e.spacing.xs/2},description:{fontSize:e.fontSizes.sm,marginBottom:e.spacing.xs,opacity:.9,lineHeight:1.2}}})),X=function(){var e=J().classes;return p.createElement($.Z,{title:"About HackUSU",subtitle:"Started in 2015, HackUSU is an annual 24 hr technology competiton and conference hosted at Utah State University (USU)."},p.createElement(o.x,{size:"xl"},"Every year, hundreds of students come to USU from across Utah and Idaho to build projects and attend workshops related to topics from game development and data analytics to hardware and security. The event venue is open overnight, and many teams stay up working all 24 hours!"),p.createElement(i.M,null,p.createElement(l.z,{component:V.rU,to:G.Hb.pressPhotos,mt:20,rightIcon:p.createElement(Y.olP,{size:18})},"Download images from past events")),p.createElement(c.D,{order:3,mt:30},"What is hacking?"),p.createElement(o.x,{mt:10},"\"Hacking\" at this event isn't about breaking into computer systems, it's about quickly building a project that showcases your skills and demonstrates your ability to think outside the box."),p.createElement(c.D,{order:3,mt:30},"Who can participate?"),p.createElement(o.x,{mt:10},"All college students and high school seniors are invited to participate! Most are from USU, but about 30% typically come in from other schools across Utah and Idaho. Students of all skill levels are welcome to attend to learn more!"),p.createElement(c.D,{order:3,mt:30},"What can students do at the event?"),p.createElement(o.x,{mt:10},"HackUSU is a 24 hour overnight event with plenty of things offered including:",p.createElement("ul",null,p.createElement("li",null,"Competitions to build projects related to software development, data analytics, hardware, and more!"),p.createElement("li",null,"Workshops to learn more about a variety of technical topics"),p.createElement("li",null,"Activities to get to know students from other programs and schools"),p.createElement("li",null,"Network with employers to find out about internship and career opportunities"),p.createElement("li",null,"Free food and unlimited snacks!"))),p.createElement(c.D,{order:3,mt:30},"What recources are available for media use?"),p.createElement(o.x,{mt:10},"On this page, we have stats about HackUSU, information about attending, and links to past articles written about the event. The"," ",p.createElement(s.e,{underline:!0,href:"https://www.usu.edu/umac/media-relations/photos/index",target:"_blank"},"University Marketing and Communications")," ","website provides general photos of USU campus. We also have photos from past HackUSU events available for media use."),p.createElement(l.z,{component:V.rU,to:G.Hb.pressPhotos,mt:10,rightIcon:p.createElement(Y.olP,{size:18})},"Download images from past events"),p.createElement(u.X,{shadow:"sm",className:e.stats,radius:"lg",my:40},p.createElement(c.D,{order:3,align:"center",mb:"lg"},"HackUSU 2022 Stats"),p.createElement(f.M,{cols:3,spacing:0,breakpoints:[{maxWidth:"xs",cols:1}]},q.map((function(t){return p.createElement(m.x,{className:e.stat},p.createElement(o.x,{className:e.value},t.value),p.createElement(o.x,{className:e.label},t.label),p.createElement(o.x,{className:e.description},t.description))})))),p.createElement(d.W,{size:"sm"},p.createElement(B.Z,null,p.createElement(L,{my:40,cite:"– Chandler Peterson, Student"},"I really loved the workshops, they helped me get a foot in the door for many concepts I wanted to learn more about but did not know where I could learn about it.")),p.createElement(B.Z,null,p.createElement(L,{my:40,cite:"– Cory Christensen, Student"},"Hackathons aren't just about gaining programming skills. They are about building up our communities, and becoming an innovative generation. This is something awesome, and I'm proud to be a part of it."))))},Q=(0,a.k)((function(e,t){var r=t.padding,n=t.first,a=t.last;return{cardSection:{display:"block",marginLeft:-1*e.fn.size({size:r,sizes:e.spacing}),marginRight:-1*e.fn.size({size:r,sizes:e.spacing}),marginTop:n?-1*e.fn.size({size:r,sizes:e.spacing}):void 0,marginBottom:a?-1*e.fn.size({size:r,sizes:e.spacing}):void 0}}}));function K(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var te=Object.defineProperty,re=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,oe=function(e,t,r){return t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ie=(0,p.forwardRef)((function(e,t){var r=e,n=r.className,a=r.padding,o=void 0===a?0:a,i=r.component,l=r.first,c=r.last,s=function(e,t){var r={};for(var n in e)ne.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&re){var a,o=K(re(e));try{for(o.s();!(a=o.n()).done;)n=a.value,t.indexOf(n)<0&&ae.call(e,n)&&(r[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return r}(r,["className","padding","component","first","last"]),u=Q({padding:o,first:l,last:c},{name:"Card"}),f=u.classes,d=u.cx;return p.createElement(m.x,function(e,t){for(var r in t||(t={}))ne.call(t,r)&&oe(e,r,t[r]);if(re){var n,a=K(re(t));try{for(a.s();!(n=a.n()).done;)r=n.value,ae.call(t,r)&&oe(e,r,t[r])}catch(o){a.e(o)}finally{a.f()}}return e}({component:i||"div",className:d(f.cardSection,n),ref:t},s))}));ie.displayName="@mantine/core/CardSection";var le=(0,a.k)((function(e){return{root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}}}));function ce(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ue=Object.defineProperty,fe=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,pe=function(e,t,r){return t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},he={p:"md"},ye=(0,p.forwardRef)((function(e,t){var r=(0,h.Z3)("Card",he,e),n=r.component,a=r.className,o=r.p,i=r.radius,l=r.children,c=r.classNames,s=r.styles,f=function(e,t){var r={};for(var n in e)me.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&fe){var a,o=ce(fe(e));try{for(o.s();!(a=o.n()).done;)n=a.value,t.indexOf(n)<0&&de.call(e,n)&&(r[n]=e[n])}catch(i){o.e(i)}finally{o.f()}}return r}(r,["component","className","p","radius","children","classNames","styles"]),m=le(null,{name:"Card",classNames:c,styles:s}),d=m.classes,y=m.cx,g=p.Children.toArray(l),b=g.map((function(e,t){return"object"==typeof e&&e&&"type"in e&&e.type===ie?(0,p.cloneElement)(e,{padding:o,first:0===t,last:t===g.length-1}):e}));return p.createElement(u.X,function(e,t){for(var r in t||(t={}))me.call(t,r)&&pe(e,r,t[r]);if(fe){var n,a=ce(fe(t));try{for(a.s();!(n=a.n()).done;)r=n.value,de.call(t,r)&&pe(e,r,t[r])}catch(o){a.e(o)}finally{a.f()}}return e}({className:y(d.root,a),radius:i,p:o,component:n||"div",ref:t},f),b)}));ye.Section=ie,ye.displayName="@mantine/core/Card";var ge=r(42361),be=r(50547),ve=[{title:"Aggies facilitate a 24-hour hacking event at Huntsman Hall",link:"https://usustatesman.com/aggies-facilitate-a-24-hour-hacking-event-at-huntsman-hall/",image:"https://usustatesman.com/wp-content/uploads/2022/03/03152022_-1050x700.jpg",source:"The Utah Statesman",year:2022},{title:"Utah College Students, High School Seniors Invited to 'HackUSU' March 18-19",link:"https://www.usu.edu/today/story/utah-college-students-high-school-seniors-invited-to-hackusu-march-18-19",image:"https://www.usu.edu/today/images/stories/xl/SCI_1HackUSU_USTFeb2022_UST.jpg",source:"Utah State TODAY",year:2022},{title:"HackUSU hosts annual 'Hackathon'",link:"https://usustatesman.com/hackusu-hosts-annual-hackathon/",image:"https://usustatesman.com/wp-content/uploads/2018/11/20181117_hackathon_rimando6-1050x700.jpg",source:"The Utah Statesman",year:2018},{title:"'A creative solution': USU student explains 'hacking'",link:"https://www.hjnews.com/allaccess/a-creative-solution-usu-student-explains-hacking/article_e666fc76-63a5-5d79-9ce9-99cd55534a0d.html",image:"https://bloximages.chicago2.vip.townnews.com/hjnews.com/content/tncms/assets/v3/editorial/0/4b/04b8b7b3-ea6d-5de1-a78b-4d45f8e71590/57f969367480f.image.jpg?resize=1742%2C1189",source:"The Herald Journal",year:2016},{title:"Hackers For the Greater Good Unite At Utah State",link:"https://www.upr.org/utah-news/2015-10-13/hackers-for-the-greater-good-unite-at-utah-state",image:"https://npr.brightspotcdn.com/dims4/default/d2b1425/2147483647/strip/true/crop/3888x2395+0+99/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fupr%2Ffiles%2F201510%2FIMG_3072.JPG",source:"Utah Public Radio",year:2015},{title:"USU students team with youngsters for Hack Day",link:"https://www.hjnews.com/family/usu-students-team-with-youngsters-for-hack-day/article_05501846-ace3-5740-a1c1-ae2ed1e35c10.html",image:"https://bloximages.chicago2.vip.townnews.com/hjnews.com/content/tncms/assets/v3/editorial/f/30/f30baa8a-4b7f-5ec3-9925-bc9b2bbd4d78/56193d91f0af7.image.jpg?resize=1433%2C500",source:"The Herald Journal",year:2015},{title:"USU students create 'Tron'-inspired virtual world as part of hackUstate competition",link:"https://www.cachevalleydaily.com/news/archive/2015/11/10/f534ed30-8785-11e5-8ef7-3f115cda475c/#.YkHlfhDMLzc",image:"https://www.cachevalleydaily.com/wp-content/uploads/2015/11/3d15ee9b64077cc4f972487355721afa-970x546.jpg",source:"Cache Valley Daily",year:2015},{title:"Hackathons — Through the Eyes of a Statistician",link:"https://medium.com/the-data-experience/hackathons-through-the-eyes-of-a-statistician-b53ad0e6ecba",image:"https://miro.medium.com/max/1400/1*V7h8B0wec__R2sY2CjwunQ.jpeg",source:"Medium",year:2015}],we=function(e){var t=e.article;return p.createElement(ye,{shadow:"sm",p:"lg"},p.createElement(ye.Section,null,p.createElement(ge.E,{src:t.image,height:160,alt:"Norway"})),p.createElement(be.Z,{direction:"column",position:"apart",sx:{height:"120px"}},p.createElement(o.x,{my:10,mb:5,weight:"bold",sx:{flexGrow:1},lineClamp:2},t.title),p.createElement(l.z,{component:V.rU,to:t.link,target:"_blank",variant:"light",color:"blue",fullWidth:!0,style:{display:"block"}},"Read on ",t.source)))},xe=function(e){var t=e.articles;return p.createElement(f.M,{cols:3,spacing:"lg",mt:30,breakpoints:[{maxWidth:"md",cols:2,spacing:"md"},{maxWidth:"xs",cols:1,spacing:"sm"}]},t.map((function(e){return p.createElement(we,{key:e.title,article:e})})))},Se=function(){return p.createElement($.Z,{title:"Featured Articles"},p.createElement(c.D,{order:3,my:"xl"},"HackUSU 2022"),p.createElement(xe,{articles:ve.filter((function(e){return 2022===e.year}))}),p.createElement(c.D,{order:3,my:"xl"},"Previous Events"),p.createElement(xe,{articles:ve.filter((function(e){return e.year<2022}))}))},ke=r(64815),Ee=(0,a.k)((function(e){return{}})),Oe=function(){Ee().classes;return p.createElement($.Z,{title:"Attending HackUSU",background:"light"},p.createElement(c.D,{order:3,mt:30},"Registration"),p.createElement(o.x,{mt:10},"Email us at"," ",p.createElement(s.e,{href:"mailto:"+ke.gj,target:"_blank"},ke.gj)," ","if you plan on attending HackUSU so we can add you to the guest list."),p.createElement(c.D,{order:3,mt:30},"Parking and Check-in"),p.createElement(o.x,{mt:10},"Members of the media should contact us at"," ",p.createElement(s.e,{href:"mailto:"+ke.gj,target:"_blank"},ke.gj)," ","to arrange parking on campus. We will coordinate with the USU Parking Office to provide any necissary permits for free."),p.createElement(o.x,{mt:10},"After arriving, please check-in at the north entrance of Huntsman Hall to pick up your badge. You are welcome to attend all portions of the event and join us for any of the meals."))},je=r(8571);function ze(){return p.createElement(n.Z,null,p.createElement(je.Z,null,"PRESS RESOURCES"),p.createElement(X,null),p.createElement(Oe,null),p.createElement(Se,null))}},64815:function(e,t,r){r.d(t,{$3:function(){return a},gR:function(){return o},gj:function(){return n}});var n="hackusu@aggies.usu.edu",a="March 24-25",o="435-797-1939"}}]);
//# sourceMappingURL=component---src-pages-press-index-tsx-d4715867a39c5973e0f9.js.map