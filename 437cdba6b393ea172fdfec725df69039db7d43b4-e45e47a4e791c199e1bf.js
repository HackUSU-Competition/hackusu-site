"use strict";(self.webpackChunkhackusu_site=self.webpackChunkhackusu_site||[]).push([[464],{6233:function(e,t,a){a.d(t,{M:function(){return x}});var r=a(7294),n=a(6172),i=a(47),s=a(4258),o=a(58),l=a(6768);var c=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&g(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&g(e,a,t[a]);return e},h=(0,i.k)(((e,{spacing:t,breakpoints:a,cols:r,verticalSpacing:n})=>{const i=null!=n,c=function(e,t){if(0===t.length)return t;const a="maxWidth"in t[0]?"maxWidth":"minWidth",r=[...t].sort(((t,r)=>(0,o.oI)((0,s.a)({size:r[a],sizes:e.breakpoints}))-(0,o.oI)((0,s.a)({size:t[a],sizes:e.breakpoints}))));return"minWidth"===a?r.reverse():r}(e,a).reduce(((a,r)=>{var c,u;const d="maxWidth"in r?"max-width":"min-width",p=(0,s.a)({size:"max-width"===d?r.maxWidth:r.minWidth,sizes:e.breakpoints,units:"em"}),g=(0,o.oI)(p)-("max-width"===d?1:0);return a[`@media (${d}: ${(0,l.em)(g)})`]={gridTemplateColumns:`repeat(${r.cols}, minmax(0, 1fr))`,gap:`${(0,s.a)({size:null!=(c=r.verticalSpacing)?c:i?n:t,sizes:e.spacing})} ${(0,s.a)({size:null!=(u=r.spacing)?u:t,sizes:e.spacing})}`},a}),{});return{root:m({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${r}, minmax(0, 1fr))`,gap:`${(0,s.a)({size:i?n:t,sizes:e.spacing})} ${(0,s.a)({size:t,sizes:e.spacing})}`},c)}})),f=a(2850),y=Object.defineProperty,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const E={breakpoints:[],cols:1,spacing:"md"},x=(0,r.forwardRef)(((e,t)=>{const a=(0,n.N4)("SimpleGrid",E,e),{className:i,breakpoints:s,cols:o,spacing:l,verticalSpacing:c,children:u,unstyled:d,variant:p}=a,g=((e,t)=>{var a={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&b)for(var r of b(e))t.indexOf(r)<0&&w.call(e,r)&&(a[r]=e[r]);return a})(a,["className","breakpoints","cols","spacing","verticalSpacing","children","unstyled","variant"]),{classes:m,cx:y}=h({breakpoints:s,cols:o,spacing:l,verticalSpacing:c},{name:"SimpleGrid",unstyled:d,variant:p});return r.createElement(f.x,((e,t)=>{for(var a in t||(t={}))v.call(t,a)&&k(e,a,t[a]);if(b)for(var a of b(t))w.call(t,a)&&k(e,a,t[a]);return e})({className:y(m.root,i),ref:t},g),u)}));x.displayName="@mantine/core/SimpleGrid"},3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,o=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return W},L:function(){return h},M:function(){return x},P:function(){return E},S:function(){return D},_:function(){return o},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return p},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function p(e,t,a,r,n,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(m,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,y);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,s({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const k=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,k);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],L=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},O={image:i().object.isRequired,alt:I},$=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],z=new Set;let T,j;const P=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:d,class:p,onStartLoad:g,onLoad:m,onError:h}=e,f=o(e,$);const{width:y,height:b,layout:v}=n,w=u(y,b,v),{style:k,className:E}=w,x=o(w,N),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,y,b);return(0,r.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(C);if(j&&z.has(C))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(s({isLoading:!0,isLoaded:z.has(C),image:n},f)),z.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=o(S.current,C,z,i,g,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{z.has(C)&&j&&(S.current.innerHTML=j(s({isLoading:z.has(C),isLoaded:z.has(C),image:n},f)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},x,{style:s({},k,i,{backgroundColor:c}),className:`${E}${d?` ${d}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},W=(0,r.memo)((function(e){return e.image?(0,r.createElement)(P,e):null}));W.propTypes=O,W.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function _(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=o(t,R);return i&&console.warn(i),n?r.createElement(e,s({image:n},l)):(console.warn("Image not loaded",a),null)}}const q=_((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:c="lazy",imgClassName:g,imgStyle:m,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=o(e,S);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),m=s({objectFit:y,objectPosition:b,backgroundColor:f},m);const{width:w,height:k,layout:I,images:O,placeholder:$,backgroundColor:N}=l,z=u(w,k,I),{style:T,className:j}=z,P=o(z,C),W={fallback:void 0,sources:[]};return O.fallback&&(W.fallback=s({},O.fallback,{srcSet:O.fallback.srcSet?L(O.fallback.srcSet):void 0})),O.sources&&(W.sources=O.sources.map((e=>s({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,s({},P,{style:s({},T,i,{backgroundColor:f}),className:`${j}${a?` ${a}`:""}`}),r.createElement(h,{layout:I,width:w,height:k},r.createElement(E,s({},p($,!1,I,w,k,N,y,b))),r.createElement(x,s({"data-gatsby-image-ssr":"",className:g},v,d("eager"===c,!1,W,c,m)))))})),A=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:I,width:A,height:A,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=F;const D=_(W);D.displayName="StaticImage",D.propTypes=F}}]);
//# sourceMappingURL=437cdba6b393ea172fdfec725df69039db7d43b4-e45e47a4e791c199e1bf.js.map