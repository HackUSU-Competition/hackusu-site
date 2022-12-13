"use strict";(self.webpackChunkmantine_gatsby_template=self.webpackChunkmantine_gatsby_template||[]).push([[878],{22888:function(e,t,n){n.d(t,{M:function(){return E}});var r=n(67294),a=n(59e3),i=n(47569),o=n(42982);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=function(e,t,n){return t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},d=function(e,t){for(var n in t||(t={}))f.call(t,n)&&p(e,n,t[n]);if(u){var r,a=l(u(t));try{for(a.s();!(r=a.n()).done;){n=r.value;m.call(t,n)&&p(e,n,t[n])}}catch(i){a.e(i)}finally{a.f()}}return e},y=(0,i.k)((function(e,t){var n=t.spacing,r=t.breakpoints,a=t.cols,i=function(e,t){if(0===t.length)return t;var n="maxWidth"in t[0]?"maxWidth":"minWidth",r=(0,o.Z)(t).sort((function(t,r){return e.fn.size({size:r[n],sizes:e.breakpoints})-e.fn.size({size:t[n],sizes:e.breakpoints})}));return"minWidth"===n?r.reverse():r}(e,r).reduce((function(t,r){var a="maxWidth"in r?"max-width":"min-width",i=e.fn.size({size:"max-width"===a?r.maxWidth:r.minWidth,sizes:e.breakpoints});return t["@media (".concat(a,": ").concat(i+("max-width"===a?0:1),"px)")]={gridTemplateColumns:"repeat(".concat(r.cols,", minmax(0, 1fr))"),gap:e.fn.size({size:r.spacing||n,sizes:e.spacing})},t}),{});return{root:d({boxSizing:"border-box",display:"grid",gridTemplateColumns:"repeat(".concat(a,", minmax(0, 1fr))"),gap:e.fn.size({size:n,sizes:e.spacing})},i)}})),b=n(37697);function h(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=Object.defineProperty,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=function(e,t,n){return t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},z={breakpoints:[],cols:1,spacing:"md"},E=(0,r.forwardRef)((function(e,t){var n=(0,a.Z3)("SimpleGrid",z,e),i=n.className,o=n.breakpoints,l=n.cols,c=n.spacing,s=n.children,u=n.classNames,f=n.styles,m=function(e,t){var n={};for(var r in e)x.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&w){var a,i=h(w(e));try{for(i.s();!(a=i.n()).done;)r=a.value,t.indexOf(r)<0&&O.call(e,r)&&(n[r]=e[r])}catch(o){i.e(o)}finally{i.f()}}return n}(n,["className","breakpoints","cols","spacing","children","classNames","styles"]),p=y({breakpoints:o,cols:l,spacing:c},{classNames:u,styles:f,name:"SimpleGrid"}),d=p.classes,g=p.cx;return r.createElement(b.x,function(e,t){for(var n in t||(t={}))x.call(t,n)&&S(e,n,t[n]);if(w){var r,a=h(w(t));try{for(a.s();!(r=a.n()).done;)n=r.value,O.call(t,n)&&S(e,n,t[n])}catch(i){a.e(i)}finally{a.f()}}return e}({className:g(d.root,i),ref:t},m),s)}));E.displayName="@mantine/core/SimpleGrid"},99353:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(42982),a=n(92230),i=n(83128),o=n(34468),l=n(86319),c=n(22888),s=n(81922),u=n(49981),f=n(8571),m=n(65317),p=n(1597),d=n(67294),y=n(57856);function b(){return d.createElement(u.Z,null,d.createElement(f.Z,null,"PRESS PHOTOS"),d.createElement(a.W,null,d.createElement(i.e,{component:p.rU,to:m.Hb.press},"← Press Resources"),d.createElement(o.x,{my:20},"The following page contains images that can be used by members of the media."),d.createElement(l.z,{rightIcon:d.createElement(y.UWx,{size:14})},"Download All Images"),d.createElement(c.M,{cols:3,spacing:"lg",mt:30,breakpoints:[{maxWidth:"md",cols:2,spacing:"md"},{maxWidth:"xs",cols:1,spacing:"sm"}]},(0,r.Z)(Array(10)).map((function(e,t){return d.createElement(s.E,{width:200,height:200,key:t,src:null,alt:"With default placeholder",withPlaceholder:!0})})))))}}}]);
//# sourceMappingURL=component---src-pages-press-photos-tsx-92e939cd226938269cee.js.map