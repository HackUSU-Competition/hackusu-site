"use strict";(self.webpackChunkhackusu_site=self.webpackChunkhackusu_site||[]).push([[845],{5687:function(e,t,r){r.d(t,{b:function(){return E}});var a=r(7294),o=r(6172),i=r(8589),n=r(47),l=r(6768),g=Object.defineProperty,s=Object.defineProperties,M=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))A.call(t,r)&&D(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&D(e,r,t[r]);return e},m=(e,t)=>s(e,M(t));function u({variant:e,color:t,theme:r}){if("filled"===e){return{backgroundColor:r.fn.variant({variant:"filled",color:t}).background,color:r.white}}if("outline"===e){const e=r.fn.variant({variant:"outline",color:t});return{color:e.color,borderColor:e.border,backgroundColor:"dark"===r.colorScheme?r.colors.dark[6]:r.white}}if("light"===e){const e=r.fn.variant({variant:"light",color:t});return{backgroundColor:e.background,color:e.color}}return null}var h=(0,n.k)(((e,{radius:t,color:r},{variant:a})=>({root:I(m(I({},e.fn.fontStyles()),{position:"relative",overflow:"hidden",paddingTop:e.spacing.sm,paddingBottom:e.spacing.sm,paddingLeft:e.spacing.md,paddingRight:e.spacing.sm,borderRadius:e.fn.radius(t),border:`${(0,l.h)(1)} solid transparent`}),u({variant:a,color:r,theme:e})),wrapper:{display:"flex"},body:{flex:1},title:{boxSizing:"border-box",margin:0,marginBottom:e.spacing.xs,display:"flex",alignItems:"center",justifyContent:"space-between",lineHeight:e.lineHeight,fontSize:e.fontSizes.sm,fontWeight:700,"&[data-with-close-button]":{paddingRight:e.spacing.md}},label:{display:"block",overflow:"hidden",textOverflow:"ellipsis"},icon:{lineHeight:1,width:(0,l.h)(20),height:(0,l.h)(20),display:"flex",alignItems:"center",justifyContent:"flex-start",marginRight:e.spacing.md,marginTop:1},message:m(I({},e.fn.fontStyles()),{lineHeight:e.lineHeight,textOverflow:"ellipsis",overflow:"hidden",fontSize:e.fontSizes.sm,color:"filled"===a?e.white:"dark"===e.colorScheme?"light"===a?e.white:e.colors.dark[0]:e.black}),closeButton:{width:(0,l.h)(10),height:(0,l.h)(10),color:"filled"===a?e.white:"dark"===e.colorScheme?"light"===a?e.white:e.colors.dark[0]:e.black}}))),w=r(2850),y=r(7433),p=Object.defineProperty,N=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const b={variant:"light"},E=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("Alert",b,e),{id:n,className:l,title:g,variant:s,children:M,color:c,classNames:A,icon:d,styles:D,onClose:I,radius:m,withCloseButton:u,closeButtonLabel:p,unstyled:E}=r,x=((e,t)=>{var r={};for(var a in e)f.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&N)for(var a of N(e))t.indexOf(a)<0&&C.call(e,a)&&(r[a]=e[a]);return r})(r,["id","className","title","variant","children","color","classNames","icon","styles","onClose","radius","withCloseButton","closeButtonLabel","unstyled"]),{classes:v,cx:S}=h({color:c,radius:m},{classNames:A,styles:D,unstyled:E,variant:s,name:"Alert"}),z=(0,i.M)(n),j=g&&`${z}-title`,k=`${z}-body`;return a.createElement(w.x,((e,t)=>{for(var r in t||(t={}))f.call(t,r)&&T(e,r,t[r]);if(N)for(var r of N(t))C.call(t,r)&&T(e,r,t[r]);return e})({id:z,role:"alert","aria-labelledby":j,"aria-describedby":k,className:S(v.root,v[s],l),ref:t},x),a.createElement("div",{className:v.wrapper},d&&a.createElement("div",{className:v.icon},d),a.createElement("div",{className:v.body},g&&a.createElement("div",{className:v.title,"data-with-close-button":u||void 0},a.createElement("span",{id:j,className:v.label},g)),a.createElement("div",{id:k,className:v.message},M)),u&&a.createElement(y.P,{className:v.closeButton,onClick:I,variant:"transparent",size:16,iconSize:16,"aria-label":p})))}));E.displayName="@mantine/core/Alert"},8252:function(e,t,r){r.d(t,{C:function(){return n},k:function(){return i}});var a=r(7294);const o=(0,a.createContext)({padding:0}),i=o.Provider,n=()=>(0,a.useContext)(o).padding},1901:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7294),o=r(6172),i=r(8427),n=r(6485),l=r(8643),g=(0,r(47).k)((e=>({root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}}))),s=r(8252),M=Object.defineProperty,c=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const I={padding:"md"},m=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("Card",I,e),{className:i,padding:M,radius:m,children:u,unstyled:h,variant:w}=r,y=((e,t)=>{var r={};for(var a in e)A.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r})(r,["className","padding","radius","children","unstyled","variant"]),{classes:p,cx:N}=g(null,{name:"Card",unstyled:h,variant:w}),f=a.Children.toArray(u),C=f.map(((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===l.u?(0,a.cloneElement)(e,{variant:w,padding:M,"data-first":0===t||void 0,"data-last":t===f.length-1||void 0}):e));return a.createElement(s.k,{value:{padding:M}},a.createElement(n.X,((e,t)=>{for(var r in t||(t={}))A.call(t,r)&&D(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&D(e,r,t[r]);return e})({className:N(p.root,i),radius:m,p:M,ref:t},y),C))}));m.Section=l.u,m.displayName="@mantine/core/Card";const u=(0,i.F)(m)},8643:function(e,t,r){r.d(t,{u:function(){return w}});var a=r(7294),o=r(6172),i=r(8427),n=r(8252),l=r(47),g=r(4258),s=r(6768),M=(0,l.k)(((e,{padding:t,withBorder:r,inheritPadding:a})=>{const o=(0,g.a)({size:t,sizes:e.spacing}),i=`calc(-1 * ${o})`,n="dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3];return{cardSection:{display:"block",marginLeft:i,marginRight:i,paddingLeft:a?o:void 0,paddingRight:a?o:void 0,borderTop:r?`${(0,s.h)(1)} solid ${n}`:void 0,borderBottom:r?`${(0,s.h)(1)} solid ${n}`:void 0,"& + &":{borderTop:0},"&[data-first]":{marginTop:i,borderTop:0,borderBottom:r?`${(0,s.h)(1)} solid ${n}`:void 0},"&[data-last]":{marginBottom:i,borderBottom:0}}}})),c=r(2850),A=Object.defineProperty,d=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const u={withBorder:!1,inheritPadding:!1},h=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("CardSection",u,e),{className:i,withBorder:l,inheritPadding:g,unstyled:s,variant:A}=r,h=((e,t)=>{var r={};for(var a in e)D.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&I.call(e,a)&&(r[a]=e[a]);return r})(r,["className","withBorder","inheritPadding","unstyled","variant"]),{classes:w,cx:y}=M({padding:(0,n.C)(),withBorder:l,inheritPadding:g},{name:"Card",unstyled:s,variant:A});return a.createElement(c.x,((e,t)=>{for(var r in t||(t={}))D.call(t,r)&&m(e,r,t[r]);if(d)for(var r of d(t))I.call(t,r)&&m(e,r,t[r]);return e})({className:y(w.cardSection,i),ref:t},h))}));h.displayName="@mantine/core/CardSection";const w=(0,i.F)(h)},6233:function(e,t,r){r.d(t,{M:function(){return f}});var a=r(7294),o=r(6172),i=r(47),n=r(4258),l=r(58),g=r(6768);var s=Object.defineProperty,M=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(M)for(var r of M(t))A.call(t,r)&&d(e,r,t[r]);return e},I=(0,i.k)(((e,{spacing:t,breakpoints:r,cols:a,verticalSpacing:o})=>{const i=null!=o,s=function(e,t){if(0===t.length)return t;const r="maxWidth"in t[0]?"maxWidth":"minWidth",a=[...t].sort(((t,a)=>(0,l.oI)((0,n.a)({size:a[r],sizes:e.breakpoints}))-(0,l.oI)((0,n.a)({size:t[r],sizes:e.breakpoints}))));return"minWidth"===r?a.reverse():a}(e,r).reduce(((r,a)=>{var s,M;const c="maxWidth"in a?"max-width":"min-width",A=(0,n.a)({size:"max-width"===c?a.maxWidth:a.minWidth,sizes:e.breakpoints,units:"em"}),d=(0,l.oI)(A)-("max-width"===c?1:0);return r[`@media (${c}: ${(0,g.em)(d)})`]={gridTemplateColumns:`repeat(${a.cols}, minmax(0, 1fr))`,gap:`${(0,n.a)({size:null!=(s=a.verticalSpacing)?s:i?o:t,sizes:e.spacing})} ${(0,n.a)({size:null!=(M=a.spacing)?M:t,sizes:e.spacing})}`},r}),{});return{root:D({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${a}, minmax(0, 1fr))`,gap:`${(0,n.a)({size:i?o:t,sizes:e.spacing})} ${(0,n.a)({size:t,sizes:e.spacing})}`},s)}})),m=r(2850),u=Object.defineProperty,h=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const N={breakpoints:[],cols:1,spacing:"md"},f=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("SimpleGrid",N,e),{className:i,breakpoints:n,cols:l,spacing:g,verticalSpacing:s,children:M,unstyled:c,variant:A}=r,d=((e,t)=>{var r={};for(var a in e)w.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&h)for(var a of h(e))t.indexOf(a)<0&&y.call(e,a)&&(r[a]=e[a]);return r})(r,["className","breakpoints","cols","spacing","verticalSpacing","children","unstyled","variant"]),{classes:D,cx:u}=I({breakpoints:n,cols:l,spacing:g,verticalSpacing:s},{name:"SimpleGrid",unstyled:c,variant:A});return a.createElement(m.x,((e,t)=>{for(var r in t||(t={}))w.call(t,r)&&p(e,r,t[r]);if(h)for(var r of h(t))y.call(t,r)&&p(e,r,t[r]);return e})({className:u(D.root,i),ref:t},d),M)}));f.displayName="@mantine/core/SimpleGrid"},9034:function(e,t,r){r.d(t,{k:function(){return E}});var a=r(7294),o=r(6172),i=r(6768),n=r(47),l=r(4258),g=Object.defineProperty,s=Object.defineProperties,M=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))A.call(t,r)&&D(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&D(e,r,t[r]);return e};const m={xs:(0,i.h)(16),sm:(0,i.h)(20),md:(0,i.h)(26),lg:(0,i.h)(32),xl:(0,i.h)(40)},u=["filled","light","gradient","outline","default"];function h({theme:e,variant:t,color:r,gradient:a}){if(!u.includes(t))return null;const o=e.fn.variant({variant:t,color:r||e.primaryColor,gradient:a,primaryFallback:!1});return{backgroundColor:o.background,color:o.color,backgroundImage:"gradient"===t?o.background:void 0,border:`${(0,i.h)("gradient"===t?0:1)} solid ${o.border}`}}var w=(0,n.k)(((e,{color:t,radius:r,gradient:a},{variant:o,size:i})=>{const n=(0,l.a)({size:i,sizes:m});return{root:I((g=I({},e.fn.fontStyles()),c={display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:n,height:n,minWidth:n,minHeight:n,borderRadius:e.fn.radius(r)},s(g,M(c))),h({theme:e,variant:o,gradient:a,color:t}))};var g,c})),y=r(2850),p=Object.defineProperty,N=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const b={size:"md",variant:"filled"},E=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("ThemeIcon",b,e),{className:i,size:n,radius:l,variant:g,color:s,children:M,gradient:c,unstyled:A}=r,d=((e,t)=>{var r={};for(var a in e)f.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&N)for(var a of N(e))t.indexOf(a)<0&&C.call(e,a)&&(r[a]=e[a]);return r})(r,["className","size","radius","variant","color","children","gradient","unstyled"]),{classes:D,cx:I}=w({variant:g,radius:l,color:s,gradient:c},{name:"ThemeIcon",unstyled:A,variant:g,size:n});return a.createElement(y.x,((e,t)=>{for(var r in t||(t={}))f.call(t,r)&&T(e,r,t[r]);if(N)for(var r of N(t))C.call(t,r)&&T(e,r,t[r]);return e})({className:I(D.root,i),ref:t},d),M)}));E.displayName="@mantine/core/ThemeIcon"},9786:function(e,t,r){r.d(t,{Z:function(){return D}});var a=r(2850),o=r(6172),i=r(9724),n=r(47),l=r(4331),g=r(5918),s=r(4168),M=r(7294);const c=(0,n.k)((e=>({title:{paddingBottom:e.spacing.md,letterSpacing:"0.05em",fontSize:`calc(${e.fontSizes.xl} * 2)`,textAlign:"center"},description:{fontSize:`calc(${e.fontSizes.xl} * 1.2)`}})));var A=e=>{let{title:t,children:r}=e;const{classes:o}=c();return M.createElement(a.x,{mb:40},M.createElement(l.D,{order:2,className:o.title},t),M.createElement(i.W,{size:"sm"},M.createElement(g.x,{align:"center",weight:300,className:o.description},r)),M.createElement(s.i,{mt:30,size:"md",mx:"auto",sx:{maxWidth:"200px"}}))};const d={white:{},light:e=>({backgroundColor:e.colors.gray[1],border:`1px solid ${e.colors.gray[3]}`}),pattern:{background:`url(${r(7260).Z})`,backgroundSize:"cover"}};var D=e=>{const{title:t,subtitle:r,children:n,fullWidth:l,background:g="white",width:s,...c}=e,D=M.createElement(M.Fragment,null,t&&M.createElement(A,{title:t},r),n);return M.createElement(a.x,Object.assign({sx:d[g],py:75},c),M.createElement(o.Me,null,l?D:M.createElement(i.W,{size:s},D)))}},9219:function(e,t,r){var a=r(47),o=r(2850),i=r(9724),n=r(4331),l=r(7294);const g=(0,a.k)((e=>({container:{backgroundImage:`url(${r(5307).Z})`,backgroundColor:e.colors.navy[8]},text:{color:e.white,paddingTop:120,paddingBottom:47,letterSpacing:"0.05em",fontSize:40,textAlign:"center",[e.fn.smallerThan("sm")]:{fontSize:30}}})));t.Z=e=>{let{children:t}=e;const{classes:r}=g();return l.createElement(o.x,{className:r.container},l.createElement(i.W,null,l.createElement(n.D,{order:1,className:r.text},t)))}},7354:function(e,t,r){r.r(t),r.d(t,{Head:function(){return k},default:function(){return j}});var a=r(9219),o=r(7294),i=r(4001),n=r(283),l=r(9786),g=r(5687),s=r(6233);const M={title:"Zen Garden",category:"hardware",video:{type:"youtube",embedId:"R83iP5Q-EOI"},description:"We 3D modeled, printed, and developed software to drive mini tractors to rake the sand in a Zen Garden. The brains of the tractors are ESP32 microcontrollers. The ESP32 controls 2 stepper motors using tank controls to propel, and steer the tractor forward. The esp32 also hosts a wi-fi network. If connected to the tractor wi-fi, an internet browser navigated to 192.168.4.1 a joystick will be displayed. The joystick can then control the tractor, allowing one to get their Zen on and feel relaxed and rested.",sourceCodeUrl:"https://github.com/daniel-morty/hackusu2023",teamMembers:["Aaron Roth","Daniel Mortenson","Carter Nettesheim"],tools:["Free RTOS","ESP async web server","stepper motor","arduino","Fusion 360","Ultimaker Cura"]},c=[{title:"TohDoh",category:"general",video:{type:"link",url:"https://drive.google.com/file/d/1eNfafNn6g6ua_Ea_WNCtbNGLmmuOoB9-/view"},description:"TohDoh: “Pick up grandma” Scheduling web app! To-do apps have been a hot topic especially within the programming classes at USU. Well now you never need to worry about forgetting to pick up grandma because our team has created a to-do app that will end all to-do apps – TohDoh! On the TohDoh web app you can enter your work or class schedule to auto fill into your calendar. Then you can put the various tasks you need to do for work, school, and life with an estimation of how long each will take. TohDoh will then auto-schedule these different tasks as availability permits in your schedule. Your generated schedule can then be imported into any calendar with an .ics file that TohDoh can download to your computer.",sourceCodeUrl:"https://github.com/WesleyEdwards/tohdoh",teamMembers:["Josh McClung","Wesley Edwards","Elise Francis","Abby Israelsen"],tools:["React","TypeScript","Express","Prisma","MaterialUI","generate-ical"]},{title:"Bloons Tower Defense 1 Clone",category:"game dev",video:{type:"link",url:"https://drive.google.com/file/d/14R-HZYNPK8FdrtLpZXiT5St24TGm-P1B/view"},description:"I recreated an Adobe Flash game from my childhood, Bloons Tower Defense 1! I used the assets from the original game. It's built using TypeScript and renders to an HTML canvas.",sourceCodeUrl:"https://drive.google.com/file/d/1dgStZf_djGRaVld89Z8fmG2h1HYEOTDN/view?usp=share_link",teamMembers:["Kollin Murphy"],tools:["TypeScript","Vite"]},{title:"Shakespearean English Translator and Generator",category:"ai & ml",video:{type:"link",url:"https://drive.google.com/file/d/1VyThO4XGhG_7FoOieU4CKuyomUoOpqvi/view"},description:"Our project takes a LLM (GPT2) and finetunes it to our specific use case, translating or generating Shakespearean English. After training the model, we then created a web app using Flask which loads and leverages our model or translation and generation. Through out web app we can feed prompts to our model and either receive a translation or generated text.",teamMembers:["Cailean Bushnell","Landon Work"],tools:["Pandas","Numpy","torch","tqdm","GPT2"]},{title:"National Parks Interactive Planning",category:"data analytics",video:{type:"link",url:"https://drive.google.com/file/d/1aU7nfhIUR2znQEAwvvzvHYCxQoP8832v/view?usp=sharing"},description:"Our project is an online website that displays an interactive map along with the top 5 parks to visit in the current month. This list was made by us from a consideration of multiple factors including weather and visitor information. The interactive map allows you to select parks and when selected will bring you to a new page that shows the best months to visit that park based on your weather preferences of rain, and temperature. It also displays a line chart of the current monthly average visitors, along with recommendations of things to do around each park. ",sourceCodeUrl:"https://drive.google.com/file/d/1CUb-W-SqxEJIqdChvg4cGwKroGwKfOds/view?usp=sharing",teamMembers:["Isaac Holcomb","Isaac Black","Tom Waite","Kaden Yardley"],tools:["Streamlit","Pandas","OpenAI","Plotly","Numpy","LeafMap"]},{title:"MINDful Hand",category:"hardware",video:{type:"link",url:"https://drive.google.com/file/d/1tys-Eq0Ul1Rv0Oboey_nwtMVoASc8zKw/view"},description:"This project involves creating a mechanical hand using recycled materials that can be controlled by the user's thoughts using brain control technology. The hand is controlled using machine learning algorithms based on data acquired from the user's brain signals. The project uses Python and scikit-learn for machine learning, the Lab Streaming Layer for data acquisition, and an Arduino for hardware control. Pyserial is used to send commands from the Python code to the Arduino to control the movement of the hand. The project aims to promote sustainability by using recycled materials and cutting-edge technology to create a more innovative and sustainable future.",sourceCodeUrl:"https://github.com/AlexBerryhill/MINDful-Hand",teamMembers:["Alexander Berryhill"],tools:["ScikitLearn","Pyserial","Muse2","pyLSL","BlueMuse"]},{title:"Crime",category:"data analytics",video:{type:"link",url:"https://drive.google.com/file/d/1Wbwk4coIygeOMv9RPreURawQFHFQPOwj/view"},description:"Los Angeles has a reputation for being one of the most crime-ridden cities in the United States. While the city has made significant progress in reducing crime rates in recent years, it still struggles with a variety of criminal activities, including gang violence, drug trafficking, theft, and property crimes. The city's high population density, economic inequality, and the large number of tourists contribute to the challenges law enforcement faces in maintaining public safety. Despite the efforts of law enforcement agencies and community organizations, crime in Los Angeles remains a serious concern for residents and visitors alike.",sourceCodeUrl:"https://storymaps.arcgis.com/stories/04f0a81a3af84462a6d1dc6ef935e9c3",teamMembers:["Sigmund Seranilla","Trevor Neri"],tools:["ArcGIS","Google Colab","Python","Pandas"]},{title:"Graph Neural Network for Drug Discovery",category:"ai & ml",video:{type:"link",url:"https://drive.google.com/file/d/154VbLJV0i6hrDdtcazp9r1vVdMq4d2Wv/view"},description:"Our project uses a Graph Neural Network, or GNN, to analyze the Zinc database and identify potential drug candidates. The Zinc database is a large collection of purchasable compounds that can be used for drug discovery. Traditional methods for identifying potential drug candidates from this database don't work well, though, because the compounds are represented as nodes in a graph with various relationships represented as edges in the graph, such as similarity or chemical properties. By using a GNN and leveraging the graph structure of the database, we aim to overcome these limitations and discover new drugs that could save lives.",sourceCodeUrl:"https://github.com/TylerEnglish/GP_Graph_Net",teamMembers:["Logan Ray","Tyler English","Randy Pierce","Michael Harris"],tools:["Streamlit","Pytorch Geometric","Pickle","Torch","Matplotlib"]},{title:"The Matrix IRL",category:"game dev",video:{type:"link",url:"https://drive.google.com/file/d/1sXz27F1hYYAGuCZp9h4p216AxI_gBQHD/view"},description:"Networking between multiple VR HMDs to support multiple concurrent users in a single Virtual Environment interacting with each other and the environment. To showcase this feature, we built a nice park scene complete with a ping-pong table, football, mini golf course, basketball court, and a maze. Users can enjoy playing these games with up to 10 total users. Our scene also included relaxing background music which was filtered out by our recording software so is not found in the video.",sourceCodeUrl:"https://github.com/logan-nielsen/The-Matrix-IRL-HackUSU",teamMembers:["Justin Roylance","Logan Nielsen"],tools:["Normcore"]},{title:"EasyHeal",category:"general",video:{type:"link",url:"https://drive.google.com/file/d/1aH3FRPi5G5gkKxlMccXwh63gwCH6PwcY/view"},description:"Coping with loss can be a daily challenge, and many people struggle to find ways to honor and remember their loved ones. Our web application is designed to provide personalized support and companionship for those experiencing loss. Through our platform, users can celebrate the lives of their loved ones and express their feelings in a way that feels authentic and meaningful to them. Our aim is to offer a space of comfort and healing for individuals who are navigating this difficult journey.",sourceCodeUrl:"",teamMembers:["Lesliee Cruz","Na Rah"],tools:["React","MUI","Firebase","MongoDB"]}];var A=r(1901),d=r(8643),D=r(2691),I=r(3415),m=r(4331),u=r(5157),h=r(9034),w=r(5918),y=r(3285),p=r(2850),N=r(2581),f=["size","color"];function C(e){var t=e.size,r=void 0===t?24:t,a=e.color,i=void 0===a?"currentColor":a,n=(0,N.Kd)(e,f);return o.createElement("svg",(0,N.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-player-play",width:r,height:r,viewBox:"0 0 24 24",stroke:i,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},n),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M7 4v16l13 -8z"}))}var T=["size","color"];function b(e){var t=e.size,r=void 0===t?24:t,a=e.color,i=void 0===a?"currentColor":a,n=(0,N.Kd)(e,T);return o.createElement("svg",(0,N.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user",width:r,height:r,viewBox:"0 0 24 24",stroke:i,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},n),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("circle",{cx:"12",cy:"7",r:"4"}),o.createElement("path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}))}var E=["size","color"];function x(e){var t=e.size,r=void 0===t?24:t,a=e.color,i=void 0===a?"currentColor":a,n=(0,N.Kd)(e,E);return o.createElement("svg",(0,N.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-tools",width:r,height:r,viewBox:"0 0 24 24",stroke:i,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},n),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"}),o.createElement("line",{x1:"14.5",y1:"5.5",x2:"18.5",y2:"9.5"}),o.createElement("polyline",{points:"12 8 7 3 3 7 8 12"}),o.createElement("line",{x1:"7",y1:"8",x2:"5.5",y2:"9.5"}),o.createElement("polyline",{points:"16 12 21 17 17 21 12 16"}),o.createElement("line",{x1:"16",y1:"17",x2:"14.5",y2:"18.5"}))}var v=r(7032);const S=e=>{let{project:t}=e;const{0:r,1:a}=(0,o.useState)(!1),i=t.description.length>300;return o.createElement(A.Z,{shadow:"sm"},"youtube"===t.video.type?o.createElement(d.u,null,o.createElement("iframe",{width:"100%",src:`https://www.youtube-nocookie.com/embed/${t.video.embedId}`,frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{aspectRatio:"16/9"}})):o.createElement(d.u,null,o.createElement(D.z,{rightIcon:o.createElement(C,null),component:"a",href:t.video.url,target:"_blank",fullWidth:!0,size:"xl",radius:0,variant:"filled"},"Watch Demo")),o.createElement(I.Z,{position:"apart",mb:"md",mt:"sm"},o.createElement(m.D,{order:3,size:"2rem"},t.title)),o.createElement(I.Z,{spacing:"xl",align:"flex-start"},o.createElement(u.K,{sx:{flexGrow:1,flexBasis:0,minWidth:250}},o.createElement(I.Z,{noWrap:!0,align:"flex-start"},o.createElement(h.k,null,o.createElement(b,null)),o.createElement(w.x,null,t.teamMembers.join(", "))),o.createElement(I.Z,{noWrap:!0,align:"flex-start"},o.createElement(h.k,null,o.createElement(x,null)),o.createElement(w.x,null,t.tools.join(", "))),t.sourceCodeUrl&&o.createElement(I.Z,{noWrap:!0,align:"flex-start"},o.createElement(h.k,null,o.createElement(v.Z,null)),o.createElement(y.e,{href:t.sourceCodeUrl,target:"_blank"},(()=>{const{hostname:e,pathname:r}=new URL(t.sourceCodeUrl);return e+r})()))),o.createElement(p.x,{sx:{flexGrow:1,flexBasis:0,minWidth:250}},o.createElement(w.x,null,t.description.slice(0,r?void 0:300),i&&!r&&"..."),i&&o.createElement(y.e,{onClick:()=>a(!r),style:{cursor:"pointer"}},r?"Show Less":"Show More"))))};var z=r(6706);function j(){return o.createElement(n.Z,null,o.createElement(a.Z,null,"Featured Projects"),o.createElement(l.Z,{title:"2023 Grand Champion",background:"pattern"},o.createElement(S,{project:M})),o.createElement(l.Z,{title:"Featured 2023 Submissions",subtitle:"These are just some of the great projects teams have created at HackUSU!",width:"xl"},o.createElement(g.b,{title:"Want your project featured?",mb:"xl",variant:"filled",maw:700,mx:"auto",color:"green"},"Email ",z.gj," with your name and project category"),o.createElement(s.M,{cols:3,breakpoints:[{maxWidth:1e3,cols:2,spacing:"md"},{maxWidth:800,cols:1,spacing:"md"}],spacing:"xl"},c.map(((e,t)=>o.createElement(S,{key:t,project:e}))))))}const k=()=>o.createElement(i.H,{title:"Featured Projects"})},5307:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDQgMzA0IiB3aWR0aD0iMzA0IiBoZWlnaHQ9IjMwNCI+PHBhdGggZmlsbD0iIzFmMzk1NyIgZD0iTTQ0LjEgMjI0YTUgNSAwIDEgMSAwIDJIMHYtMmg0NC4xem0xNjAgNDhhNSA1IDAgMSAxIDAgMkg4MnYtMmgxMjIuMXptNTcuOC00NmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem0wIDE2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTYuMi0xMTRhNSA1IDAgMSAxIDAgMmgtODYuMmE1IDUgMCAxIDEgMC0yaDg2LjJ6bS0yNTYtNDhhNSA1IDAgMSAxIDAgMkgwdi0yaDEyLjF6bTE4NS44IDM0YTUgNSAwIDEgMSAwLTJoODYuMmE1IDUgMCAxIDEgMCAyaC04Ni4yek0yNTggMTIuMWE1IDUgMCAxIDEtMiAwVjBoMnYxMi4xem0tNjQgMjA4YTUgNSAwIDEgMS0yIDB2LTU0LjJhNSA1IDAgMSAxIDIgMHY1NC4yem00OC0xOTguMlY4MGg2MnYyaC02NFYyMS45YTUgNSAwIDEgMSAyIDB6bTE2IDE2VjY0aDQ2djJoLTQ4VjM3LjlhNSA1IDAgMSAxIDIgMHptLTEyOCA5NlYyMDhoMTZ2MTIuMWE1IDUgMCAxIDEtMiAwVjIxMGgtMTZ2LTc2LjFhNSA1IDAgMSAxIDIgMHptLTUuOS0yMS45YTUgNSAwIDEgMSAwIDJIMTE0djQ4SDg1LjlhNSA1IDAgMSAxIDAtMkgxMTJ2LTQ4aDEyLjF6bS02LjIgMTMwYTUgNSAwIDEgMSAwLTJIMTc2di03NC4xYTUgNSAwIDEgMSAyIDBWMjQyaC02MC4xem0tMTYtNjRhNSA1IDAgMSAxIDAtMkgxMTR2NDhoMTAuMWE1IDUgMCAxIDEgMCAySDExMnYtNDhoLTEwLjF6TTY2IDI4NC4xYTUgNSAwIDEgMS0yIDBWMjc0SDUwdjMwaC0ydi0zMmgxOHYxMi4xek0yMzYuMSAxNzZhNSA1IDAgMSAxIDAgMkgyMjZ2OTRoNDh2MzJoLTJ2LTMwaC00OHYtOThoMTIuMXptMjUuOC0zMGE1IDUgMCAxIDEgMC0ySDI3NHY0NC4xYTUgNSAwIDEgMS0yIDBWMTQ2aC0xMC4xem0tNjQgOTZhNSA1IDAgMSAxIDAtMkgyMDh2LTgwaDE2di0xNGgtNDIuMWE1IDUgMCAxIDEgMC0ySDIyNnYxOGgtMTZ2ODBoLTEyLjF6bTg2LjItMjEwYTUgNSAwIDEgMSAwIDJIMjcyVjBoMnYzMmgxMC4xek05OCAxMDEuOVYxNDZINTMuOWE1IDUgMCAxIDEgMC0ySDk2di00Mi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMzRhNSA1IDAgMSAxIDAtMkg4MFYwaDJ2MzRINTMuOXptNjAuMSAzLjlWNjZIODJ2NjRINjkuOWE1IDUgMCAxIDEgMC0ySDgwVjY0aDMyVjM3LjlhNSA1IDAgMSAxIDIgMHpNMTAxLjkgODJhNSA1IDAgMSAxIDAtMkgxMjhWMzcuOWE1IDUgMCAxIDEgMiAwVjgyaC0yOC4xem0xNi02NGE1IDUgMCAxIDEgMC0ySDE0NnY0NC4xYTUgNSAwIDEgMS0yIDBWMThoLTI2LjF6bTEwMi4yIDI3MGE1IDUgMCAxIDEgMCAySDk4djE0aC0ydi0xNmgxMjQuMXpNMjQyIDE0OS45VjE2MGgxNnYzNGgtMTZ2NjJoNDh2NDhoLTJ2LTQ2aC00OHYtNjZoMTZ2LTMwaC0xNnYtMTIuMWE1IDUgMCAxIDEgMiAwek01My45IDE4YTUgNSAwIDEgMSAwLTJINjRWMkg0OFYwaDE4djE4SDUzLjl6bTExMiAzMmE1IDUgMCAxIDEgMC0ySDE5MlYwaDUwdjJoLTQ4djQ4aC0yOC4xem0tNDgtNDhhNSA1IDAgMCAxLTkuOC0yaDIuMDdhMyAzIDAgMSAwIDUuNjYgMEgxNzh2MzRoLTE4VjIxLjlhNSA1IDAgMSAxIDIgMFYzMmgxNFYyaC01OC4xem0wIDk2YTUgNSAwIDEgMSAwLTJIMTM3bDMyLTMyaDM5VjIxLjlhNSA1IDAgMSAxIDIgMFY2NmgtNDAuMTdsLTMyIDMySDExNy45em0yOC4xIDkwLjFhNSA1IDAgMSAxLTIgMHYtNzYuNTFMMTc1LjU5IDgwSDIyNFYyMS45YTUgNSAwIDEgMSAyIDBWODJoLTQ5LjU5TDE0NiAxMTIuNDF2NzUuNjl6bTE2IDMyYTUgNSAwIDEgMS0yIDB2LTk5LjUxTDE4NC41OSA5NkgzMDAuMWE1IDUgMCAwIDEgMy45LTMuOXYyLjA3YTMgMyAwIDAgMCAwIDUuNjZ2Mi4wN2E1IDUgMCAwIDEtMy45LTMuOUgxODUuNDFMMTYyIDEyMS40MXY5OC42OXptLTE0NC02NGE1IDUgMCAxIDEtMiAwdi0zLjUxbDQ4LTQ4VjQ4aDMyVjBoMnY1MEg2NnY1NS40MWwtNDggNDh2Mi42OXpNNTAgNTMuOXY0My41MWwtNDggNDhWMjA4aDI2LjFhNSA1IDAgMSAxIDAgMkgwdi02NS40MWw0OC00OFY1My45YTUgNSAwIDEgMSAyIDB6bS0xNiAxNlY4OS40MWwtMzQgMzR2LTIuODJsMzItMzJWNjkuOWE1IDUgMCAxIDEgMiAwek0xMi4xIDMyYTUgNSAwIDEgMSAwIDJIOS40MUwwIDQzLjQxVjQwLjZMOC41OSAzMmgzLjUxem0yNjUuOCAxOGE1IDUgMCAxIDEgMC0yaDE4LjY5bDcuNDEtNy40MXYyLjgyTDI5Ny40MSA1MEgyNzcuOXptLTE2IDE2MGE1IDUgMCAxIDEgMC0ySDI4OHYtNzEuNDFsMTYtMTZ2Mi44MmwtMTQgMTRWMjEwaC0yOC4xem0tMjA4IDMyYTUgNSAwIDEgMSAwLTJINjR2LTIyLjU5TDQwLjU5IDE5NEgyMS45YTUgNSAwIDEgMSAwLTJINDEuNDFMNjYgMjE2LjU5VjI0Mkg1My45em0xNTAuMiAxNGE1IDUgMCAxIDEgMCAySDk2di01Ni42TDU2LjYgMTYySDM3LjlhNSA1IDAgMSAxIDAtMmgxOS41TDk4IDIwMC42VjI1NmgxMDYuMXptLTE1MC4yIDJhNSA1IDAgMSAxIDAtMkg4MHYtNDYuNTlMNDguNTkgMTc4SDIxLjlhNSA1IDAgMSAxIDAtMkg0OS40MUw4MiAyMDguNTlWMjU4SDUzLjl6TTM0IDM5Ljh2MS42MUw5LjQxIDY2SDB2LTJoOC41OUwzMiA0MC41OVYwaDJ2MzkuOHpNMiAzMDAuMWE1IDUgMCAwIDEgMy45IDMuOUgzLjgzQTMgMyAwIDAgMCAwIDMwMi4xN1YyNTZoMTh2NDhoLTJ2LTQ2SDJ2NDIuMXpNMzQgMjQxdjYzaC0ydi02Mkgwdi0yaDM0djF6TTE3IDE4SDB2LTJoMTZWMGgydjE4aC0xem0yNzMtMmgxNHYyaC0xNlYwaDJ2MTZ6bS0zMiAyNzN2MTVoLTJ2LTE0aC0xNHYxNGgtMnYtMTZoMTh2MXpNMCA5Mi4xQTUuMDIgNS4wMiAwIDAgMSA2IDk3YTUgNSAwIDAgMS02IDQuOXYtMi4wN2EzIDMgMCAxIDAgMC01LjY2VjkyLjF6TTgwIDI3MmgydjMyaC0ydi0zMnptMzcuOSAzMmgtMi4wN2EzIDMgMCAwIDAtNS42NiAwaC0yLjA3YTUgNSAwIDAgMSA5LjggMHpNNS45IDBBNS4wMiA1LjAyIDAgMCAxIDAgNS45VjMuODNBMyAzIDAgMCAwIDMuODMgMEg1Ljl6bTI5NC4yIDBoMi4wN0EzIDMgMCAwIDAgMzA0IDMuODNWNS45YTUgNSAwIDAgMS0zLjktNS45em0zLjkgMzAwLjF2Mi4wN2EzIDMgMCAwIDAtMS44MyAxLjgzaC0yLjA3YTUgNSAwIDAgMSAzLjktMy45ek05NyAxMDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tNDggMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzItMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgOTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNDRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNDkgMzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMzMgNjhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi00OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMjQwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptODAtMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTEyIDE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgMTgwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgODRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA2NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnoiPjwvcGF0aD48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-d2582454c228126ffc13.js.map