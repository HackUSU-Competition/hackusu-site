"use strict";(self.webpackChunkhackusu_site=self.webpackChunkhackusu_site||[]).push([[652],{8252:function(e,t,a){a.d(t,{C:function(){return n},k:function(){return o}});var i=a(7294);const r=(0,i.createContext)({padding:0}),o=r.Provider,n=()=>(0,i.useContext)(r).padding},1901:function(e,t,a){a.d(t,{Z:function(){return m}});var i=a(7294),r=a(6172),o=a(8427),n=a(6485),M=a(8643),l=(0,a(47).k)((e=>({root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}}))),s=a(8252),c=Object.defineProperty,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,j=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const I={padding:"md"},d=(0,i.forwardRef)(((e,t)=>{const a=(0,r.N4)("Card",I,e),{className:o,padding:c,radius:d,children:m,unstyled:y,variant:L}=a,T=((e,t)=>{var a={};for(var i in e)g.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&u)for(var i of u(e))t.indexOf(i)<0&&N.call(e,i)&&(a[i]=e[i]);return a})(a,["className","padding","radius","children","unstyled","variant"]),{classes:D,cx:z}=l(null,{name:"Card",unstyled:y,variant:L}),x=i.Children.toArray(m),S=x.map(((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===M.u?(0,i.cloneElement)(e,{variant:L,padding:c,"data-first":0===t||void 0,"data-last":t===x.length-1||void 0}):e));return i.createElement(s.k,{value:{padding:c}},i.createElement(n.X,((e,t)=>{for(var a in t||(t={}))g.call(t,a)&&j(e,a,t[a]);if(u)for(var a of u(t))N.call(t,a)&&j(e,a,t[a]);return e})({className:z(D.root,o),radius:d,p:c,ref:t},T),S))}));d.Section=M.u,d.displayName="@mantine/core/Card";const m=(0,o.F)(d)},8643:function(e,t,a){a.d(t,{u:function(){return L}});var i=a(7294),r=a(6172),o=a(8427),n=a(8252),M=a(47),l=a(4258),s=a(6768),c=(0,M.k)(((e,{padding:t,withBorder:a,inheritPadding:i})=>{const r=(0,l.a)({size:t,sizes:e.spacing}),o=`calc(-1 * ${r})`,n="dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3];return{cardSection:{display:"block",marginLeft:o,marginRight:o,paddingLeft:i?r:void 0,paddingRight:i?r:void 0,borderTop:a?`${(0,s.h)(1)} solid ${n}`:void 0,borderBottom:a?`${(0,s.h)(1)} solid ${n}`:void 0,"& + &":{borderTop:0},"&[data-first]":{marginTop:o,borderTop:0,borderBottom:a?`${(0,s.h)(1)} solid ${n}`:void 0},"&[data-last]":{marginBottom:o,borderBottom:0}}}})),u=a(2850),g=Object.defineProperty,N=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const m={withBorder:!1,inheritPadding:!1},y=(0,i.forwardRef)(((e,t)=>{const a=(0,r.N4)("CardSection",m,e),{className:o,withBorder:M,inheritPadding:l,unstyled:s,variant:g}=a,y=((e,t)=>{var a={};for(var i in e)j.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&N)for(var i of N(e))t.indexOf(i)<0&&I.call(e,i)&&(a[i]=e[i]);return a})(a,["className","withBorder","inheritPadding","unstyled","variant"]),{classes:L,cx:T}=c({padding:(0,n.C)(),withBorder:M,inheritPadding:l},{name:"Card",unstyled:s,variant:g});return i.createElement(u.x,((e,t)=>{for(var a in t||(t={}))j.call(t,a)&&d(e,a,t[a]);if(N)for(var a of N(t))I.call(t,a)&&d(e,a,t[a]);return e})({className:T(L.cardSection,o),ref:t},y))}));y.displayName="@mantine/core/CardSection";const L=(0,o.F)(y)},4168:function(e,t,a){a.d(t,{i:function(){return z}});var i=a(7294),r=a(6172),o=a(6768),n=a(47),M=a(4258);const l={xs:(0,o.h)(1),sm:(0,o.h)(2),md:(0,o.h)(3),lg:(0,o.h)(4),xl:(0,o.h)(5)};function s(e,t){const a=e.fn.variant({variant:"outline",color:t}).border;return"string"==typeof t&&(t in e.colors||t.split(".")[0]in e.colors)?a:void 0===t?"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]:t}var c=(0,n.k)(((e,{color:t},{size:a,variant:i})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:(0,o.h)(1),borderTop:`${(0,M.a)({size:a,sizes:l})} ${i} ${s(e,t)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${(0,M.a)({size:a,sizes:l})} ${i} ${s(e,t)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===t?e.colors.dark[1]:e.fn.themeColor(t,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:(0,o.h)((0,M.a)({size:a,sizes:l})),borderTopColor:s(e,t),borderTopStyle:i,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:(0,o.h)((0,M.a)({size:a,sizes:l})),borderLeftColor:s(e,t),borderLeftStyle:i}}))),u=a(2850),g=a(5918),N=Object.defineProperty,j=Object.defineProperties,I=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,L=(e,t,a)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,T=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&L(e,a,t[a]);if(d)for(var a of d(t))y.call(t,a)&&L(e,a,t[a]);return e};const D={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},z=(0,i.forwardRef)(((e,t)=>{const a=(0,r.N4)("Divider",D,e),{className:n,color:M,orientation:l,size:s,label:N,labelPosition:L,labelProps:z,variant:x,styles:S,classNames:p,unstyled:b}=a,E=((e,t)=>{var a={};for(var i in e)m.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&d)for(var i of d(e))t.indexOf(i)<0&&y.call(e,i)&&(a[i]=e[i]);return a})(a,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:h,cx:f}=c({color:M},{classNames:p,styles:S,unstyled:b,name:"Divider",variant:x,size:s}),w="vertical"===l,A="horizontal"===l,C=!!N&&A,O=!(null==z?void 0:z.color);return i.createElement(u.x,T({ref:t,className:f(h.root,{[h.vertical]:w,[h.horizontal]:A,[h.withLabel]:C},n),role:"separator"},E),C&&i.createElement(g.x,(k=T({},z),U={size:(null==z?void 0:z.size)||"xs",mt:(0,o.h)(2),className:f(h.label,h[L],{[h.labelDefaultStyles]:O})},j(k,I(U))),N));var k,U}));z.displayName="@mantine/core/Divider"},9786:function(e,t,a){a.d(t,{Z:function(){return j}});var i=a(2850),r=a(6172),o=a(9724),n=a(47),M=a(4331),l=a(5918),s=a(4168),c=a(7294);const u=(0,n.k)((e=>({title:{paddingBottom:e.spacing.md,letterSpacing:"0.05em",fontSize:"calc("+e.fontSizes.xl+" * 2)",textAlign:"center"},description:{fontSize:"calc("+e.fontSizes.xl+" * 1.2)"}})));var g=e=>{let{title:t,children:a}=e;const{classes:r}=u();return c.createElement(i.x,{mb:40},c.createElement(M.D,{order:2,className:r.title},t),c.createElement(o.W,{size:"sm"},c.createElement(l.x,{align:"center",weight:300,className:r.description},a)),c.createElement(s.i,{mt:30,size:"md",mx:"auto",sx:{maxWidth:"200px"}}))};const N={white:{},light:e=>({backgroundColor:e.colors.gray[1],border:"1px solid "+e.colors.gray[3]}),pattern:{background:"url("+a(7260).Z+")",backgroundSize:"cover"}};var j=e=>{const{title:t,subtitle:a,children:n,fullWidth:M,background:l="white",width:s,...u}=e,j=c.createElement(c.Fragment,null,t&&c.createElement(g,{title:t},a),n);return c.createElement(i.x,Object.assign({sx:N[l],py:75},u),c.createElement(r.Me,null,M?j:c.createElement(o.W,{size:s},j)))}},3061:function(e,t,a){a.r(t),a.d(t,{Head:function(){return Ge},default:function(){return Pe}});var i=a(7129),r=a(9219),o=a(47),n=a(5918),M=a(4331),l=a(6485),s=a(6233),c=a(2850),u=a(9724),g=a(7294),N=a(6172),j=a(6768),I=Object.defineProperty,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,L=(e,t,a)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function T(e){return g.createElement("svg",((e,t)=>{for(var a in t||(t={}))m.call(t,a)&&L(e,a,t[a]);if(d)for(var a of d(t))y.call(t,a)&&L(e,a,t[a]);return e})({width:(0,j.h)(20),height:(0,j.h)(20),viewBox:"0 0 409.294 409.294",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),g.createElement("path",{d:"M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z"}))}var D=Object.defineProperty,z=Object.defineProperties,x=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&E(e,a,t[a]);if(S)for(var a of S(t))b.call(t,a)&&E(e,a,t[a]);return e},f=(0,o.k)(((e,{color:t})=>{return{root:(a=h({},e.fn.fontStyles()),i={fontSize:e.fontSizes.lg,lineHeight:e.lineHeight,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,margin:0,borderTopRightRadius:e.radius.sm,borderBottomRightRadius:e.radius.sm,padding:`${e.spacing.md} ${e.spacing.lg}`},z(a,x(i))),inner:{display:"flex"},body:{flex:1,overflow:"hidden",textOverflow:"ellipsis"},icon:{color:e.fn.variant({variant:"filled",color:t}).background,marginRight:e.spacing.lg,marginTop:(0,j.h)(2),width:(0,j.h)(22)},cite:{display:"block",fontSize:e.fontSizes.sm,marginTop:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],overflow:"hidden",textOverflow:"ellipsis"}};var a,i})),w=Object.defineProperty,A=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const U={color:"gray",icon:g.createElement(T,null)},v=(0,g.forwardRef)(((e,t)=>{const a=(0,N.N4)("Blockquote",U,e),{className:i,color:r,icon:o,cite:n,children:M,classNames:l,styles:s,unstyled:u,variant:j}=a,I=((e,t)=>{var a={};for(var i in e)C.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&A)for(var i of A(e))t.indexOf(i)<0&&O.call(e,i)&&(a[i]=e[i]);return a})(a,["className","color","icon","cite","children","classNames","styles","unstyled","variant"]),{classes:d,cx:m}=f({color:r},{classNames:l,styles:s,unstyled:u,name:"Blockquote",variant:j});return g.createElement(c.x,((e,t)=>{for(var a in t||(t={}))C.call(t,a)&&k(e,a,t[a]);if(A)for(var a of A(t))O.call(t,a)&&k(e,a,t[a]);return e})({component:"blockquote",className:m(d.root,i),ref:t},I),g.createElement("div",{className:d.inner},o&&g.createElement("div",{className:d.icon},o),g.createElement("div",{className:d.body},M,n&&g.createElement("cite",{className:d.cite},n))))}));v.displayName="@mantine/core/Blockquote";var Y=a(1084),Z=a(9786),Q=a(6706);const P=(0,o.k)((e=>({stats:{padding:e.spacing.xl,backgroundColor:e.colors.blue[6],color:e.white,[e.fn.smallerThan("sm")]:{padding:e.spacing.lg},[e.fn.smallerThan("xs")]:{padding:e.spacing.md}},stat:{"& + &":{paddingLeft:e.spacing.xl,marginLeft:e.spacing.xl,borderLeft:"1px solid rgba(255, 255, 255, 0.6)",[e.fn.smallerThan("xs")]:{paddingLeft:0,marginLeft:0,borderLeft:0,paddingTop:e.spacing.xs,marginTop:e.spacing.xl,borderTop:"1px solid rgba(255, 255, 255, 0.6)"}}},value:{fontSize:50,fontWeight:800,marginTop:e.spacing.xs},label:{fontSize:e.fontSizes.md,fontWeight:600,textTransform:"uppercase",marginBottom:8},description:{fontSize:e.fontSizes.sm,marginBottom:e.spacing.xs,opacity:.9,lineHeight:1.2}})));var G=()=>{const{classes:e}=P();return g.createElement(Z.Z,{title:"About HackUSU",subtitle:"Started in 2015, HackUSU is an annual 24 hr technology competiton and conference hosted at Utah State University."},g.createElement(n.x,{size:"xl",mb:60},"Every year, hundreds of students come to USU from across Utah and Idaho to build projects and attend workshops related to topics from game development and data analytics to hardware and security. The event venue is open overnight, and many teams stay up working all 24 hours!"),g.createElement(M.D,{order:3,mt:30},"What is hacking?"),g.createElement(n.x,{mt:10},"\"Hacking\" at this event isn't about breaking into computer systems, it's about quickly building a project that showcases your skills and demonstrates your ability to think outside the box."),g.createElement(M.D,{order:3,mt:30},"Who can participate?"),g.createElement(n.x,{mt:10},"All college students and high school seniors are invited to participate! Most are from USU, but about 30% typically come in from other schools across Utah and Idaho. Students of all skill levels are welcome to attend to learn more!"),g.createElement(M.D,{order:3,mt:30},"What can students do at the event?"),g.createElement(n.x,{mt:10},"HackUSU is a 24 hour overnight event with plenty of activities offered including:",g.createElement("ul",null,g.createElement("li",null,"Competitions to build projects related to software development, data analytics, hardware, and more!"),g.createElement("li",null,"Workshops to learn more about a variety of technical topics"),g.createElement("li",null,"Activities to get to know students from other programs and schools"),g.createElement("li",null,"Network with employers to find out about internship and career opportunities"),g.createElement("li",null,"Free food and snacks!"))),g.createElement(l.X,{shadow:"sm",className:e.stats,radius:"lg",my:40},g.createElement(M.D,{order:3,align:"center",mb:"lg"},"HackUSU 2023 Stats"),g.createElement(s.M,{cols:3,spacing:0,breakpoints:[{maxWidth:"xs",cols:1}]},[{label:"Students",value:Q.fH.numStudents,description:"From high school seniors, all the way to Ph.D. students!"},{label:"Schools",value:Q.fH.numSchools,description:"Students attended from 12 different universities, community colleges, and high schools from across Utah and Idaho"},{label:"Projects",value:Q.fH.numProjects,description:"Competition categories included game development, security, data analytics, and more!"}].map(((t,a)=>g.createElement(c.x,{className:e.stat,key:a},g.createElement(n.x,{className:e.value},t.value),g.createElement(n.x,{className:e.label},t.label),g.createElement(n.x,{className:e.description},t.description)))))),g.createElement(u.W,{size:"sm"},g.createElement(Y.Z,null,g.createElement(v,{my:40,cite:"– Chandler Peterson, Student"},"I really loved the workshops, they helped me get a foot in the door for many concepts I wanted to learn more about but did not know where I could learn about it.")),g.createElement(Y.Z,null,g.createElement(v,{my:40,cite:"– Cory Christensen, Student"},"Hackathons aren't just about gaining programming skills. They are about building up our communities, and becoming an innovative generation. This is something awesome, and I'm proud to be a part of it."))))},W=a(8216);const[R,J]=(0,W.R)("Grid component was not found in tree");var X=a(4258),H=a(9147),B=Object.defineProperty,F=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,_=(e,t,a)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,K=(e,t)=>{for(var a in t||(t={}))V.call(t,a)&&_(e,a,t[a]);if(F)for(var a of F(t))$.call(t,a)&&_(e,a,t[a]);return e};const q=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?100/(t/e)+"%":void 0,ee=(e,t,a)=>a||"auto"===e||"content"===e?"unset":q(e,t),te=(e,t)=>{if(e)return"auto"===e||t?1:0},ae=(e,t)=>0===e?0:e?100/(t/e)+"%":void 0,ie=(e,t)=>void 0!==e?`calc(${(0,X.a)({size:e,sizes:t.spacing})} / 2)`:void 0;function re({sizes:e,offsets:t,orders:a,theme:i,columns:r,gutters:o,grow:n}){return H.j1.reduce(((M,l)=>(M[`@media (min-width: ${(0,j.em)(i.breakpoints[l])})`]={order:a[l],flexBasis:q(e[l],r),padding:ie(o[l],i),flexShrink:0,width:"content"===e[l]?"auto":void 0,maxWidth:ee(e[l],r,n),marginLeft:ae(t[l],r),flexGrow:te(e[l],n)},M)),{})}var oe=(0,o.k)(((e,{gutter:t,gutterXs:a,gutterSm:i,gutterMd:r,gutterLg:o,gutterXl:n,grow:M,offset:l,offsetXs:s,offsetSm:c,offsetMd:u,offsetLg:g,offsetXl:N,columns:j,span:I,xs:d,sm:m,md:y,lg:L,xl:T,order:D,orderXs:z,orderSm:x,orderMd:S,orderLg:p,orderXl:b})=>({col:K({boxSizing:"border-box",flexGrow:te(I,M),order:D,padding:ie(t,e),marginLeft:ae(l,j),flexBasis:q(I,j),flexShrink:0,width:"content"===I?"auto":void 0,maxWidth:ee(I,j,M)},re({sizes:{xs:d,sm:m,md:y,lg:L,xl:T},offsets:{xs:s,sm:c,md:u,lg:g,xl:N},orders:{xs:z,sm:x,md:S,lg:p,xl:b},gutters:{xs:a,sm:i,md:r,lg:o,xl:n},theme:e,columns:j,grow:M}))}))),ne=Object.defineProperty,Me=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,ce=(e,t,a)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const ue={};const ge=(0,g.forwardRef)(((e,t)=>{const a=(0,N.N4)("GridCol",ue,e),{children:i,span:r,offset:o,offsetXs:n,offsetSm:M,offsetMd:l,offsetLg:s,offsetXl:u,xs:j,sm:I,md:d,lg:m,xl:y,order:L,orderXs:T,orderSm:D,orderMd:z,orderLg:x,orderXl:S,className:p,id:b,unstyled:E,variant:h}=a,f=((e,t)=>{var a={};for(var i in e)le.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&Me)for(var i of Me(e))t.indexOf(i)<0&&se.call(e,i)&&(a[i]=e[i]);return a})(a,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled","variant"]),w=J(),A=r||w.columns,{classes:C,cx:O}=oe({gutter:w.gutter,gutterXs:w.gutterXs,gutterSm:w.gutterSm,gutterMd:w.gutterMd,gutterLg:w.gutterLg,gutterXl:w.gutterXl,offset:o,offsetXs:n,offsetSm:M,offsetMd:l,offsetLg:s,offsetXl:u,xs:j,sm:I,md:d,lg:m,xl:y,order:L,orderXs:T,orderSm:D,orderMd:z,orderLg:x,orderXl:S,grow:w.grow,columns:w.columns,span:A},{unstyled:E,name:"Grid",variant:h});return!function(e){return"auto"===e||"content"===e||"number"==typeof e&&e>0&&e%1==0}(A)||A>w.columns?null:g.createElement(c.x,((e,t)=>{for(var a in t||(t={}))le.call(t,a)&&ce(e,a,t[a]);if(Me)for(var a of Me(t))se.call(t,a)&&ce(e,a,t[a]);return e})({className:O(C.col,p),ref:t},f),i)}));ge.displayName="@mantine/core/Col";var Ne=Object.defineProperty,je=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,me=(e,t,a)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ye=(e,t)=>{for(var a in t||(t={}))Ie.call(t,a)&&me(e,a,t[a]);if(je)for(var a of je(t))de.call(t,a)&&me(e,a,t[a]);return e};function Le(e,t){return H.j1.reduce(((a,i)=>(void 0!==e[i]&&(a[`@media (min-width: ${t.breakpoints[i]})`]={margin:`calc(-${(0,X.a)({size:e[i],sizes:t.spacing})} / 2)`}),a)),{})}var Te=(0,o.k)(((e,{justify:t,align:a,gutter:i,gutterXs:r,gutterSm:o,gutterMd:n,gutterLg:M,gutterXl:l})=>({root:ye({margin:`calc(-${(0,X.a)({size:i,sizes:e.spacing})} / 2)`,display:"flex",flexWrap:"wrap",justifyContent:t,alignItems:a},Le({xs:r,sm:o,md:n,lg:M,xl:l},e))}))),De=Object.defineProperty,ze=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,pe=(e,t,a)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const be={gutter:"md",justify:"flex-start",align:"stretch",columns:12},Ee=(0,g.forwardRef)(((e,t)=>{const a=(0,N.N4)("Grid",be,e),{gutter:i,gutterXs:r,gutterSm:o,gutterMd:n,gutterLg:M,gutterXl:l,children:s,grow:u,justify:j,align:I,columns:d,className:m,id:y,unstyled:L,variant:T}=a,D=((e,t)=>{var a={};for(var i in e)xe.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&ze)for(var i of ze(e))t.indexOf(i)<0&&Se.call(e,i)&&(a[i]=e[i]);return a})(a,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled","variant"]),{classes:z,cx:x}=Te({gutter:i,justify:j,align:I,gutterXs:r,gutterSm:o,gutterMd:n,gutterLg:M,gutterXl:l},{unstyled:L,name:"Grid",variant:T});return g.createElement(R,{value:{gutter:i,gutterXs:r,gutterSm:o,gutterMd:n,gutterLg:M,gutterXl:l,grow:u,columns:d}},g.createElement(c.x,((e,t)=>{for(var a in t||(t={}))xe.call(t,a)&&pe(e,a,t[a]);if(ze)for(var a of ze(t))Se.call(t,a)&&pe(e,a,t[a]);return e})({className:x(z.root,m),ref:t},D),s))}));Ee.Col=ge,Ee.displayName="@mantine/core/Grid";var he=a(1389),fe=a(3285);var we=()=>g.createElement(Z.Z,{title:"Attending HackUSU for Media",background:"light"},g.createElement(Ee,{align:"center",justify:"center"},g.createElement(Ee.Col,{sm:6,md:5},g.createElement(he.E,{src:a(2076).Z,alt:"Location pin illustration",sx:{maxWidth:500,marginInline:"auto"}})),g.createElement(Ee.Col,{sm:6,md:7},g.createElement(M.D,{order:3,mt:30},"Registration"),g.createElement(n.x,{mt:10},"Email us at"," ",g.createElement(fe.e,{href:"mailto:"+Q.gj,target:"_blank"},Q.gj)," ","if you plan on attending HackUSU so we can add you to the guest list."),g.createElement(M.D,{order:3,mt:30},"Parking and Check-in"),g.createElement(n.x,{mt:10},"Members of the media should contact us at"," ",g.createElement(fe.e,{href:"mailto:"+Q.gj,target:"_blank"},Q.gj)," ","to arrange parking on campus. We will coordinate with the USU Parking Office to provide any necessary permits for free."),g.createElement(n.x,{mt:10},"After arriving, please check-in at the north entrance of Huntsman Hall to pick up your badge. You are welcome to attend all portions of the event and join us for any of the meals.")))),Ae=a(1901),Ce=a(5157),Oe=a(2691),ke=a(1883);const Ue=[{title:"USU hosts annual hackathon",link:"https://usustatesman.com/usu-hosts-annual-hackathon/",image:"https://usustatesman.com/wp-content/uploads/2023/03/20230330_lifestyles_hackathon-1050x817.jpg",source:"The Utah Statesman",year:2023},{title:"Aggies facilitate a 24-hour hacking event at Huntsman Hall",link:"https://usustatesman.com/aggies-facilitate-a-24-hour-hacking-event-at-huntsman-hall/",image:"https://usustatesman.com/wp-content/uploads/2022/03/03152022_-1050x700.jpg",source:"The Utah Statesman",year:2022},{title:"Utah College Students, High School Seniors Invited to 'HackUSU' March 18-19",link:"https://www.usu.edu/today/story/utah-college-students-high-school-seniors-invited-to-hackusu-march-18-19",image:"https://www.usu.edu/today/images/stories/xl/SCI_1HackUSU_USTFeb2022_UST.jpg",source:"Utah State TODAY",year:2022},{title:"HackUSU hosts annual 'Hackathon'",link:"https://usustatesman.com/hackusu-hosts-annual-hackathon/",image:"https://usustatesman.com/wp-content/uploads/2018/11/20181117_hackathon_rimando6-1050x700.jpg",source:"The Utah Statesman",year:2018},{title:"'A creative solution': USU student explains 'hacking'",link:"https://www.hjnews.com/allaccess/a-creative-solution-usu-student-explains-hacking/article_e666fc76-63a5-5d79-9ce9-99cd55534a0d.html",image:"https://bloximages.chicago2.vip.townnews.com/hjnews.com/content/tncms/assets/v3/editorial/0/4b/04b8b7b3-ea6d-5de1-a78b-4d45f8e71590/57f969367480f.image.jpg?resize=1742%2C1189",source:"The Herald Journal",year:2016},{title:"Hackers For the Greater Good Unite At Utah State",link:"https://www.upr.org/utah-news/2015-10-13/hackers-for-the-greater-good-unite-at-utah-state",image:"https://npr.brightspotcdn.com/dims4/default/d2b1425/2147483647/strip/true/crop/3888x2395+0+99/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fupr%2Ffiles%2F201510%2FIMG_3072.JPG",source:"Utah Public Radio",year:2015},{title:"USU students team with youngsters for Hack Day",link:"https://www.hjnews.com/family/usu-students-team-with-youngsters-for-hack-day/article_05501846-ace3-5740-a1c1-ae2ed1e35c10.html",image:"https://bloximages.chicago2.vip.townnews.com/hjnews.com/content/tncms/assets/v3/editorial/f/30/f30baa8a-4b7f-5ec3-9925-bc9b2bbd4d78/56193d91f0af7.image.jpg?resize=1433%2C500",source:"The Herald Journal",year:2015},{title:"USU students create 'Tron'-inspired virtual world as part of hackUstate competition",link:"https://www.cachevalleydaily.com/news/archive/2015/11/10/f534ed30-8785-11e5-8ef7-3f115cda475c/#.YkHlfhDMLzc",image:"https://www.cachevalleydaily.com/wp-content/uploads/2015/11/3d15ee9b64077cc4f972487355721afa-970x546.jpg",source:"Cache Valley Daily",year:2015},{title:"Hackathons — Through the Eyes of a Statistician",link:"https://medium.com/the-data-experience/hackathons-through-the-eyes-of-a-statistician-b53ad0e6ecba",image:"https://miro.medium.com/max/1400/1*V7h8B0wec__R2sY2CjwunQ.jpeg",source:"Medium",year:2015}],ve=e=>{let{article:t}=e;return g.createElement(Ae.Z,{shadow:"sm",p:"lg"},g.createElement(Ae.Z.Section,null,g.createElement(he.E,{src:t.image,height:160,withPlaceholder:!0})),g.createElement(Ce.K,{sx:{height:"120px"}},g.createElement(n.x,{my:10,mb:5,weight:"bold",sx:{flexGrow:1},lineClamp:2},t.title),g.createElement(Oe.z,{component:ke.rU,to:t.link,target:"_blank",variant:"light",color:"blue",fullWidth:!0,style:{display:"block"}},"Read on ",t.source)))},Ye=e=>{let{articles:t}=e;return g.createElement(s.M,{cols:3,spacing:"lg",mt:30,breakpoints:[{maxWidth:"md",cols:2,spacing:"md"},{maxWidth:"xs",cols:1,spacing:"sm"}]},t.map((e=>g.createElement(ve,{key:e.title,article:e}))))};var Ze=()=>g.createElement(Z.Z,{title:"Featured Articles"},g.createElement(Ye,{articles:Ue})),Qe=a(4001);function Pe(){return g.createElement(i.Z,null,g.createElement(r.Z,null,"Press Resources"),g.createElement(G,null),g.createElement(we,null),g.createElement(Ze,null))}const Ge=()=>g.createElement(Qe.H,null)},2076:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDkwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBmaWxsPSJ0cmFuc3BhcmVudCIgZD0iTTAgMGg5MDB2NjAwSDB6IiAvPgoJPHBhdGggZD0iTTM1NC40NyAyMzIuMDE1YzI5LjA1LTM2LjY2NyA5MC43OC01Mi4wMDcgMTMyLjA0NyAyLjk1OCAzNS4wMDUgNDYuNjIxIDUwLjI1NSA0OS4yODggNzYuODYgNTguMTU4IDE3LjU2OCA1Ljg1OSA0Ni4zMTUgMTMuNzk4IDI5LjU2NCA1OS4xNDUtMjEuOTI0IDU5LjM1MS0xMzAuMzg2IDc1LjM4My0xODkuNjkgNTMuMjI5LTU2LjcxMS0yMS4xODMtMTAxLjUwMi0xMDYuOTU1LTQ4Ljc4MS0xNzMuNDl6IiBmaWxsPSJ1cmwoI2EpIiAvPgoJPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtNDYxLjQ1MiAxNDIuMTI5LTkuNTgxLTkuNTgxIDkuNTgxLTkuNTggOS41OCA5LjU4LTkuNTggOS41ODF6bTE5Ni4wNjkgMjE3LjU1OC0xMC44NDQtMTAuODQ0TDY1Ny41MjEgMzM4bDEwLjg0MyAxMC44NDMtMTAuODQzIDEwLjg0NHoiIHN0cm9rZT0iI0UxRTRFNSIgc3Ryb2tlLXdpZHRoPSI1LjA4NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgoJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NjkgNDExcy05MC03MS44NjUtOTAtMTM3LjQ5N0MzNzkgMjI1LjE3MiA0MTkuMjk4IDE4NiA0NjkgMTg2YzQ5LjcwMyAwIDkwIDM5LjE3MiA5MCA4Ny41MDNDNTU5IDMzOS4xMzUgNDY5IDQxMSA0NjkgNDExeiIgZmlsbD0iIzFDMzM0RiIgc3Ryb2tlPSIjMUMzMzRGIiBzdHJva2Utd2lkdGg9IjI4Ljc3MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgoJPHBhdGggZD0iTTQ2OC45ODEgMjY1LjQ1NWMtNi4wMDQgMC0xMC44MyA0Ljc1LTEwLjgzIDEwLjU2NHM0Ljg2NCAxMC41MjYgMTAuODY4IDEwLjUyNmM2LjAwNCAwIDEwLjgzLTQuNzEyIDEwLjgzLTEwLjU2NC4wMzgtNS43NzYtNC44MjYtMTAuNTI2LTEwLjg2OC0xMC41MjYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0OC45MjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KCTxwYXRoIGQ9Ik00OTAuMTI2IDEzMC4xODFjNzIuNzc5LTE0LjM1IDEyOC40NTcgNjUuMzA0IDExMC44ODUgMTIzLjk1MiIgc3Ryb2tlPSIjRTFFNEU1IiBzdHJva2Utd2lkdGg9IjEuODI5IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IjcuNiA3LjYiIC8+Cgk8cGF0aCBkPSJNNTg5Ljk4NSAyNjkuOTYyYy00LjYwNiAyLjQ2NC02LjM2IDguMTg2LTMuODk3IDEyLjc5MiAyLjQ0NyA0LjYwNiA4LjE4NSA2LjM2IDEyLjc5MSAzLjg5NyA0LjYwNi0yLjQ2MyA2LjM2MS04LjE4NSAzLjg5Ny0xMi43OTEtMi40NjMtNC42MjMtOC4xODUtNi4zNjEtMTIuNzkxLTMuODk4eiIgZmlsbD0iI0UxRTRFNSIgLz4KCTxwYXRoIGQ9Im01NTQuMzA1IDUxNi41MzMtNDA3LjM1NS0uOTI4YTI3Ni4zMyAyNzYuMzMgMCAwIDEgOC45MzMtNS4wODFjOS42NTEtNS4yNjQgMjMuNzU1LTEyLjI5OCA0MS41MzMtMTkuMzYgMzUuNTYyLTE0LjEyNiA4NS43OC0yOC4zNDMgMTQ0LjQzOC0yOC43MzYgNTguOTI2LS4zOTYgMTExLjg2NCAxMy4zNDIgMTUxLjE4MSAyNy41NiAxOS42NTMgNy4xMDcgMzUuODkgMTQuMzI5IDQ3Ljc1OSAxOS45NTdhNzg4LjcyNCA3ODguNzI0IDAgMCAxIDEzLjUxMSA2LjU4OHoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI0UxRTRFNSIgc3Ryb2tlLXdpZHRoPSI0IiAvPgoJPHBhdGggZD0ibTc3NC45OSA1MTYuNTMzLTMyMy4wNzQtLjczNmMxLjY0MS0uOTYgMy42MS0yLjA4IDUuODkxLTMuMzI0IDcuNzE3LTQuMjA5IDE4Ljk5OC05LjgzNiAzMy4yMTktMTUuNDg1IDI4LjQ0Ny0xMS4zIDY4LjYxNS0yMi42NyAxMTUuNTMtMjIuOTg1IDQ3LjEyOS0uMzE2IDg5LjQ3NyAxMC42NzEgMTIwLjkzNiAyMi4wNDggMTUuNzI0IDUuNjg2IDI4LjcxNiAxMS40NjUgMzguMjEzIDE1Ljk2OWE1ODIuNDUgNTgyLjQ1IDAgMCAxIDkuMjg1IDQuNTEzek0xNDguNTc3IDI0OS41ODFjMi44MTQtMTEuNDA1IDI5LjQwMy0yOC4wNjEgNDMuNjEyLTE4LjAyIDQuMzYxLTIxLjcyNyA4LjQ0MS0zNS4yNzYgMjIuNjktNDUuOTggMTQuMjQ5LTEwLjcwMyAzOC4wMjQgMy4yODggNDEuODQzIDMyLjU5MSAzLjgxOC0xMi4wNDYgMjMuMjMyLTI4LjI4MSAzOC44MjgtMTQuNTkxIDE0LjQzIDEyLjY2NyAxNS44NzcgMzMuODkzIDE0LjM3IDQ1Ljk4SDE0OC41Nzd2LjAyem01NzUuODEtMTguMDMzYy0xLjU5Mi02LjQ2Ny0xNi42MzUtMTUuOTEyLTI0LjY3NC0xMC4yMTgtMi40NjctMTIuMzItNC43NzUtMjAuMDA0LTEyLjgzNy0yNi4wNzMtOC4wNjItNi4wNy0yMS41MTMgMS44NjQtMjMuNjczIDE4LjQ4MS0yLjE2MS02LjgzMS0xMy4xNDUtMTYuMDM4LTIxLjk2OC04LjI3NS04LjE2NCA3LjE4NC04Ljk4MyAxOS4yMi04LjEzIDI2LjA3NGg5MS4yODJ2LjAxMXpNNjA3IDE0OC43OTFjMS4xMTMtNC41MjEgMTEuNjI5LTExLjEyNCAxNy4yNDktNy4xNDQgMS43MjUtOC42MTMgMy4zMzktMTMuOTg0IDguOTc0LTE4LjIyNyA1LjYzNi00LjI0MyAxNS4wNCAxLjMwMyAxNi41NSAxMi45MiAxLjUxLTQuNzc2IDkuMTg5LTExLjIxMiAxNS4zNTctNS43ODUgNS43MDggNS4wMjIgNi4yOCAxMy40MzYgNS42ODQgMTguMjI4SDYwN3YuMDA4em0xMDEgMzJjMS4xMTMtNC41MjEgMTEuNjI5LTExLjEyNCAxNy4yNDktNy4xNDQgMS43MjUtOC42MTMgMy4zMzktMTMuOTg0IDguOTc0LTE4LjIyNyA1LjYzNi00LjI0MyAxNS4wNCAxLjMwMyAxNi41NSAxMi45MiAxLjUxLTQuNzc2IDkuMTg5LTExLjIxMiAxNS4zNTctNS43ODUgNS43MDggNS4wMjIgNi4yOCAxMy40MzYgNS42ODQgMTguMjI4SDcwOHYuMDA4em0tMzMyLjQ1Mi0yNi40NjhjLTEuNTkxLTYuNDY4LTE2LjYzNS0xNS45MTMtMjQuNjc0LTEwLjIxOC0yLjQ2Ny0xMi4zMjEtNC43NzUtMjAuMDA1LTEyLjgzNy0yNi4wNzQtOC4wNjEtNi4wNy0yMS41MTMgMS44NjQtMjMuNjczIDE4LjQ4MS0yLjE2MS02LjgzMS0xMy4xNDQtMTYuMDM3LTIxLjk2OC04LjI3NC04LjE2NCA3LjE4My04Ljk4MyAxOS4yMi04LjEzIDI2LjA3M2g5MS4yODJ2LjAxMnoiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI0UxRTRFNSIgc3Ryb2tlLXdpZHRoPSI0IiAvPgoJPGNpcmNsZSByPSI2LjkxOSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMzI5LjkxOSAyODAuOTE5KSIgZmlsbD0iI0UxRTRFNSIgLz4KCTxjaXJjbGUgY3g9IjM4Ni42MjMiIGN5PSIxNjcuMzY1IiByPSI3LjEzOSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAzODYuNjIzIDE2Ny4zNjUpIiBmaWxsPSIjRTFFNEU1IiAvPgoJPHBhdGggZD0iTTMyNS41MzcgMzYyLjEyNGMzLjY3MyA1LjM0NSAxLjA5MSAxMy41MDIgMS4wOTEgMTMuNTAycy04LjUzNS0uNTE1LTEyLjIwMy01Ljg2NGMtMy42NzMtNS4zNDYtMS4wOTUtMTMuNDk5LTEuMDk1LTEzLjQ5OXM4LjUzNS41MTUgMTIuMjA3IDUuODYxem0zMzQuOTQ3LTkxLjY1Yy0zLjY3IDUuMzQzLTEuMDkgMTMuNDk1LTEuMDkgMTMuNDk1czguNTMtLjUxNSAxMi4xOTctNS44NjJjMy42NzEtNS4zNDIgMS4wOTQtMTMuNDkxIDEuMDk0LTEzLjQ5MXMtOC41My41MTUtMTIuMjAxIDUuODU4ek01NjguNDIgNDAxLjExOWMtMy42NzEgNS4zNDMtMS4wOTEgMTMuNDk1LTEuMDkxIDEzLjQ5NXM4LjUzLS41MTUgMTIuMTk3LTUuODYyYzMuNjcxLTUuMzQyIDEuMDk0LTEzLjQ5MSAxLjA5NC0xMy40OTFzLTguNTMuNTE1LTEyLjIgNS44NTh6bTEyLjE5OC0yMzIuMjE0Yy0yLjc3OSA0LjA0NS0uODI2IDEwLjIxOC0uODI2IDEwLjIxOHM2LjQ1OS0uMzkgOS4yMzYtNC40MzhjMi43NzktNC4wNDYuODI4LTEwLjIxNi44MjgtMTAuMjE2cy02LjQ1OS4zOS05LjIzOCA0LjQzNnoiIGZpbGw9IiNFMUU0RTUiIC8+Cgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxOS4yNzEgNDcyLjI1NmMwIDExLjMzNy03LjQ0OCAyMS41MzEtMTYuNjM1IDIxLjUzMS05LjE4OCAwLTE2LjYzNi0xMC4xOTQtMTYuNjM2LTIxLjUzMUMxODYgNDYwLjkyIDE5Ny40MzcgNDI4IDIwMi42MzYgNDI4YzUuMTk4IDAgMTYuNjM1IDMyLjkyIDE2LjYzNSA0NC4yNTZ6IiBmaWxsPSIjRTFFNEU1IiBzdHJva2U9IiNFMUU0RTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgoJPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgoJCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAzLjAyNSA0NDIuMzY3aC0uMDIyYy0uNjIxIDAtMS4xMjMuNTIxLTEuMTIzIDEuMTYydjYxLjZoMi4yNjh2LTYxLjZjMC0uNjQxLS41MDMtMS4xNjItMS4xMjMtMS4xNjJ6IiAvPgoJPC9tYXNrPgoJPHBhdGggZD0iTTIwMS44OCA1MDUuMTI5aC0zYTMgMyAwIDAgMCAzIDN2LTN6bTIuMjY4IDB2M2EzIDMgMCAwIDAgMy0zaC0zem0tMS4xMjMtNjUuNzYyaC0uMDIydjZoLjAyMnYtNnptLS4wMjIgMGMtMi4zNzQgMC00LjEyMyAxLjk2Mi00LjEyMyA0LjE2Mmg2YzAgLjkxNy0uNzQ0IDEuODM4LTEuODc3IDEuODM4di02em0tNC4xMjMgNC4xNjJ2NjEuNmg2di02MS42aC02em0zIDY0LjZoMi4yNjh2LTZoLTIuMjY4djZ6bTUuMjY4LTN2LTYxLjZoLTZ2NjEuNmg2em0wLTYxLjZjMC0yLjIwMS0xLjc1LTQuMTYyLTQuMTIzLTQuMTYydjZhMS44NTcgMS44NTcgMCAwIDEtMS44NzctMS44MzhoNnoiIGZpbGw9IiNFMUU0RTUiIG1hc2s9InVybCgjYikiIC8+Cgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwNC45NjggNDQxLjgxOWMwIDE1Ljk2LTEwLjQ4NSAzMC4zMS0yMy40MTkgMzAuMzEtMTIuOTM1IDAtMjMuNDItMTQuMzUtMjMuNDItMzAuMzEgMC0xNS45NTkgMTYuMTAxLTYyLjMwMyAyMy40Mi02Mi4zMDMgNy4zMTggMCAyMy40MTkgNDYuMzQ0IDIzLjQxOSA2Mi4zMDN6IiBmaWxsPSIjRTFFNEU1IiBzdHJva2U9IiNFMUU0RTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgoJPHBhdGggZD0iTTI4Mi4wNjUgNDAxLjI0MmguMDMyYy4wMDUgMCAuMDE4IDAgLjAzOS4wMjEuMDIxLjAyMy4wNDIuMDYuMDQyLjExNXY4NS4yMTloLS4xOTR2LTg1LjIxOWMwLS4wNTUuMDItLjA5Mi4wNDItLjExNS4wMi0uMDIxLjAzMy0uMDIxLjAzOS0uMDIxaDB6IiBzdHJva2U9IiNFMUU0RTUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgoJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNzkuNzEzIDQ1OS41NDljMCAxMi4wNDgtNy45MTUgMjIuODgxLTE3LjY3OSAyMi44ODFzLTE3LjY3OS0xMC44MzMtMTcuNjc5LTIyLjg4MSAxMi4xNTUtNDcuMDMzIDE3LjY3OS00Ny4wMzNjNS41MjUgMCAxNy42NzkgMzQuOTg1IDE3LjY3OSA0Ny4wMzN6IiBmaWxsPSIjRTFFNEU1IiBzdHJva2U9IiNFMUU0RTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgoJPG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPgoJCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzYyLjQ0OCA0MjcuNzg1aC0uMDI0Yy0uNjU5IDAtMS4xOTQuNTUzLTEuMTk0IDEuMjM1djY1LjQ2NGgyLjQxMVY0MjkuMDJjMC0uNjgyLS41MzQtMS4yMzUtMS4xOTMtMS4yMzV6IiAvPgoJPC9tYXNrPgoJPHBhdGggZD0iTTM2MS4yMyA0OTQuNDg0aC0zYTMgMyAwIDAgMCAzIDN2LTN6bTIuNDExIDB2M2EzIDMgMCAwIDAgMy0zaC0zem0tMS4xOTMtNjkuNjk5aC0uMDI0djZoLjAyNHYtNnptLS4wMjQgMGMtMi40MTMgMC00LjE5NCAxLjk5NC00LjE5NCA0LjIzNWg2YzAgLjg3Ni0uNzEyIDEuNzY1LTEuODA2IDEuNzY1di02em0tNC4xOTQgNC4yMzV2NjUuNDY0aDZWNDI5LjAyaC02em0zIDY4LjQ2NGgyLjQxMXYtNmgtMi40MTF2NnptNS40MTEtM1Y0MjkuMDJoLTZ2NjUuNDY0aDZ6bTAtNjUuNDY0YzAtMi4yNDEtMS43ODEtNC4yMzUtNC4xOTMtNC4yMzV2NmExLjc4NiAxLjc4NiAwIDAgMS0xLjgwNy0xLjc2NWg2eiIgZmlsbD0iI0UxRTRFNSIgbWFzaz0idXJsKCNjKSIgLz4KCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjM5IDQ1Mi42MjRjMCAxNC4wNjktOS4yNDMgMjYuNzE5LTIwLjY0NSAyNi43MTlzLTIwLjY0Ni0xMi42NS0yMC42NDYtMjYuNzE5IDE0LjE5NC01NC45MjQgMjAuNjQ2LTU0LjkyNGM2LjQ1MSAwIDIwLjY0NSA0MC44NTUgMjAuNjQ1IDU0LjkyNHoiIGZpbGw9IiNFMUU0RTUiIHN0cm9rZT0iI0UxRTRFNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+Cgk8bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MTguODM4IDQxNS41M2gtLjAyOGMtLjc3IDAtMS4zOTMuNjQ2LTEuMzkzIDEuNDQzdjc2LjQ0NmgyLjgxNXYtNzYuNDQ2YzAtLjc5Ny0uNjI0LTEuNDQzLTEuMzk0LTEuNDQzeiIgLz4KCTwvbWFzaz4KCTxwYXRoIGQ9Ik02MTcuNDE3IDQ5My40MTloLTNhMyAzIDAgMCAwIDMgM3YtM3ptMi44MTUgMHYzYTMgMyAwIDAgMCAzLTNoLTN6bS0xLjM5NC04MC44ODloLS4wMjh2NmguMDI4di02em0tLjAyOCAwYy0yLjUyMyAwLTQuMzkzIDIuMDg4LTQuMzkzIDQuNDQzaDZjMCAuNzYxLS42MjMgMS41NTctMS42MDcgMS41NTd2LTZ6bS00LjM5MyA0LjQ0M3Y3Ni40NDZoNnYtNzYuNDQ2aC02em0zIDc5LjQ0NmgyLjgxNXYtNmgtMi44MTV2NnptNS44MTUtM3YtNzYuNDQ2aC02djc2LjQ0Nmg2em0wLTc2LjQ0NmMwLTIuMzU2LTEuODcxLTQuNDQzLTQuMzk0LTQuNDQzdjZhMS41ODIgMS41ODIgMCAwIDEtMS42MDYtMS41NTdoNnoiIGZpbGw9IiNFMUU0RTUiIG1hc2s9InVybCgjZCkiIC8+Cgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ1Mi4wMTcgNDgxLjgzM2MwIDcuNjY3LTUuMDM3IDE0LjU2MS0xMS4yNSAxNC41NjEtNi4yMTQgMC0xMS4yNTEtNi44OTQtMTEuMjUxLTE0LjU2MXM3LjczNS0yOS45MyAxMS4yNTEtMjkuOTNjMy41MTUgMCAxMS4yNSAyMi4yNjMgMTEuMjUgMjkuOTN6IiBmaWxsPSIjRTFFNEU1IiBzdHJva2U9IiNFMUU0RTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgoJPG1hc2sgaWQ9ImUiIGZpbGw9IiNmZmYiPgoJCTxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDQxLjAzIDQ2MS42MmgtLjAxNWMtLjQyIDAtLjc2LjM1MS0uNzYuNzg1djQxLjY1OWgxLjUzNXYtNDEuNjU5YS43NzMuNzczIDAgMCAwLS43Ni0uNzg1eiIgLz4KCTwvbWFzaz4KCTxwYXRoIGQ9Ik00NDAuMjU1IDUwNC4wNjRoLTNhMyAzIDAgMCAwIDMgM3YtM3ptMS41MzUgMHYzYTMgMyAwIDAgMCAzLTNoLTN6bS0uNzYtNDUuNDQ0aC0uMDE1djZoLjAxNXYtNnptLS4wMTUgMGMtMi4xNzMgMC0zLjc2IDEuNzkzLTMuNzYgMy43ODVoNmEyLjIyNyAyLjIyNyAwIDAgMS0yLjI0IDIuMjE1di02em0tMy43NiAzLjc4NXY0MS42NTloNnYtNDEuNjU5aC02em0zIDQ0LjY1OWgxLjUzNXYtNmgtMS41MzV2NnptNC41MzUtM3YtNDEuNjU5aC02djQxLjY1OWg2em0wLTQxLjY1OWMwLTEuOTkzLTEuNTg4LTMuNzg1LTMuNzYtMy43ODV2NmEyLjIyOCAyLjIyOCAwIDAgMS0yLjI0LTIuMjE1aDZ6IiBmaWxsPSIjRTFFNEU1IiBtYXNrPSJ1cmwoI2UpIiAvPgoJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NTIuMDgyIDQ3My4zMTdjMCA3LjY2Ny01LjAzNyAxNC41NjEtMTEuMjUxIDE0LjU2MS02LjIxMyAwLTExLjI1LTYuODk0LTExLjI1LTE0LjU2MXM3LjczNS0yOS45MyAxMS4yNS0yOS45M2MzLjUxNiAwIDExLjI1MSAyMi4yNjMgMTEuMjUxIDI5LjkzeiIgZmlsbD0iI0UxRTRFNSIgc3Ryb2tlPSIjRTFFNEU1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KCTxtYXNrIGlkPSJmIiBmaWxsPSIjZmZmIj4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU0MS4wOTUgNDUzLjEwM2gtLjAxNmEuNzczLjc3MyAwIDAgMC0uNzU5Ljc4NnY0MS42NTloMS41MzR2LTQxLjY1OWEuNzczLjc3MyAwIDAgMC0uNzU5LS43ODZ6IiAvPgoJPC9tYXNrPgoJPHBhdGggZD0iTTU0MC4zMiA0OTUuNTQ4aC0zYTMgMyAwIDAgMCAzIDN2LTN6bTEuNTM0IDB2M2EzIDMgMCAwIDAgMy0zaC0zem0tLjc1OS00NS40NDVoLS4wMTZ2NmguMDE2di02em0tLjAxNiAwYy0yLjE3MyAwLTMuNzU5IDEuNzk0LTMuNzU5IDMuNzg2aDZhMi4yMjcgMi4yMjcgMCAwIDEtMi4yNDEgMi4yMTR2LTZ6bS0zLjc1OSAzLjc4NnY0MS42NTloNnYtNDEuNjU5aC02em0zIDQ0LjY1OWgxLjUzNHYtNmgtMS41MzR2NnptNC41MzQtM3YtNDEuNjU5aC02djQxLjY1OWg2em0wLTQxLjY1OWMwLTEuOTkzLTEuNTg3LTMuNzg2LTMuNzU5LTMuNzg2djZhMi4yMjcgMi4yMjcgMCAwIDEtMi4yNDEtMi4yMTRoNnoiIGZpbGw9IiNFMUU0RTUiIG1hc2s9InVybCgjZikiIC8+Cgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcxNS42NzUgNDY3Ljc5M2MwIDExLjQ3NC03LjUzOCAyMS43OTEtMTYuODM3IDIxLjc5MVM2ODIgNDc5LjI2NyA2ODIgNDY3Ljc5MyA2OTMuNTc2IDQyMyA2OTguODM4IDQyM2M1LjI2MSAwIDE2LjgzNyAzMy4zMTkgMTYuODM3IDQ0Ljc5M3oiIGZpbGw9IiNFMUU0RTUiIHN0cm9rZT0iI0UxRTRFNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+Cgk8bWFzayBpZD0iZyIgZmlsbD0iI2ZmZiI+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OTkuMjMyIDQzNy41NDFoLS4wMjNjLS42MjggMC0xLjEzNy41MjctMS4xMzcgMS4xNzd2NjIuMzQ2aDIuMjk2di02Mi4zNDZjMC0uNjUtLjUwOS0xLjE3Ny0xLjEzNi0xLjE3N3oiIC8+Cgk8L21hc2s+Cgk8cGF0aCBkPSJNNjk4LjA3MiA1MDEuMDY0aC0zYTMgMyAwIDAgMCAzIDN2LTN6bTIuMjk2IDB2M2EzIDMgMCAwIDAgMy0zaC0zem0tMS4xMzYtNjYuNTIzaC0uMDIzdjZoLjAyM3YtNnptLS4wMjMgMGMtMi4zODIgMC00LjEzNyAxLjk2OS00LjEzNyA0LjE3N2g2YzAgLjkwOC0uNzM3IDEuODIzLTEuODYzIDEuODIzdi02em0tNC4xMzcgNC4xNzd2NjIuMzQ2aDZ2LTYyLjM0NmgtNnptMyA2NS4zNDZoMi4yOTZ2LTZoLTIuMjk2djZ6bTUuMjk2LTN2LTYyLjM0NmgtNnY2Mi4zNDZoNnptMC02Mi4zNDZjMC0yLjIwOS0xLjc1Ni00LjE3Ny00LjEzNi00LjE3N3Y2YTEuODQzIDEuODQzIDAgMCAxLTEuODY0LTEuODIzaDZ6IiBmaWxsPSIjRTFFNEU1IiBtYXNrPSJ1cmwoI2cpIiAvPgoJPGRlZnM+CgkJPGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNDcwLjE5MyIgeTE9IjUzNi4xNTEiIHgyPSI0NjQuODAyIiB5Mj0iLTM2LjA3MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiAvPgoJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFRUUiIC8+CgkJPC9saW5lYXJHcmFkaWVudD4KCTwvZGVmcz4KPC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-press-index-tsx-99e9d778a75d619825c8.js.map