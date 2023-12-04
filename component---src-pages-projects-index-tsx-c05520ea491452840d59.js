"use strict";(self.webpackChunkhackusu_site=self.webpackChunkhackusu_site||[]).push([[845],{5687:function(e,t,r){r.d(t,{b:function(){return E}});var a=r(7294),o=r(6172),n=r(8589),i=r(47),l=r(6768),s=Object.defineProperty,g=Object.defineProperties,c=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&D(e,r,t[r]);if(M)for(var r of M(t))A.call(t,r)&&D(e,r,t[r]);return e},I=(e,t)=>g(e,c(t));function u({variant:e,color:t,theme:r}){if("filled"===e){return{backgroundColor:r.fn.variant({variant:"filled",color:t}).background,color:r.white}}if("outline"===e){const e=r.fn.variant({variant:"outline",color:t});return{color:e.color,borderColor:e.border,backgroundColor:"dark"===r.colorScheme?r.colors.dark[6]:r.white}}if("light"===e){const e=r.fn.variant({variant:"light",color:t});return{backgroundColor:e.background,color:e.color}}return null}var h=(0,i.k)(((e,{radius:t,color:r},{variant:a})=>({root:m(I(m({},e.fn.fontStyles()),{position:"relative",overflow:"hidden",paddingTop:e.spacing.sm,paddingBottom:e.spacing.sm,paddingLeft:e.spacing.md,paddingRight:e.spacing.sm,borderRadius:e.fn.radius(t),border:`${(0,l.h)(1)} solid transparent`}),u({variant:a,color:r,theme:e})),wrapper:{display:"flex"},body:{flex:1},title:{boxSizing:"border-box",margin:0,marginBottom:e.spacing.xs,display:"flex",alignItems:"center",justifyContent:"space-between",lineHeight:e.lineHeight,fontSize:e.fontSizes.sm,fontWeight:700,"&[data-with-close-button]":{paddingRight:e.spacing.md}},label:{display:"block",overflow:"hidden",textOverflow:"ellipsis"},icon:{lineHeight:1,width:(0,l.h)(20),height:(0,l.h)(20),display:"flex",alignItems:"center",justifyContent:"flex-start",marginRight:e.spacing.md,marginTop:1},message:I(m({},e.fn.fontStyles()),{lineHeight:e.lineHeight,textOverflow:"ellipsis",overflow:"hidden",fontSize:e.fontSizes.sm,color:"filled"===a?e.white:"dark"===e.colorScheme?"light"===a?e.white:e.colors.dark[0]:e.black}),closeButton:{width:(0,l.h)(10),height:(0,l.h)(10),color:"filled"===a?e.white:"dark"===e.colorScheme?"light"===a?e.white:e.colors.dark[0]:e.black}}))),y=r(2850),p=r(7433),w=Object.defineProperty,f=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const T={variant:"light"},E=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("Alert",T,e),{id:i,className:l,title:s,variant:g,children:c,color:M,classNames:d,icon:A,styles:D,onClose:m,radius:I,withCloseButton:u,closeButtonLabel:w,unstyled:E}=r,x=((e,t)=>{var r={};for(var a in e)N.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&f)for(var a of f(e))t.indexOf(a)<0&&b.call(e,a)&&(r[a]=e[a]);return r})(r,["id","className","title","variant","children","color","classNames","icon","styles","onClose","radius","withCloseButton","closeButtonLabel","unstyled"]),{classes:v,cx:S}=h({color:M,radius:I},{classNames:d,styles:D,unstyled:E,variant:g,name:"Alert"}),z=(0,n.M)(i),j=s&&`${z}-title`,k=`${z}-body`;return a.createElement(y.x,((e,t)=>{for(var r in t||(t={}))N.call(t,r)&&C(e,r,t[r]);if(f)for(var r of f(t))b.call(t,r)&&C(e,r,t[r]);return e})({id:z,role:"alert","aria-labelledby":j,"aria-describedby":k,className:S(v.root,v[g],l),ref:t},x),a.createElement("div",{className:v.wrapper},A&&a.createElement("div",{className:v.icon},A),a.createElement("div",{className:v.body},s&&a.createElement("div",{className:v.title,"data-with-close-button":u||void 0},a.createElement("span",{id:j,className:v.label},s)),a.createElement("div",{id:k,className:v.message},c)),u&&a.createElement(p.P,{className:v.closeButton,onClick:m,variant:"transparent",size:16,iconSize:16,"aria-label":w})))}));E.displayName="@mantine/core/Alert"},8252:function(e,t,r){r.d(t,{C:function(){return i},k:function(){return n}});var a=r(7294);const o=(0,a.createContext)({padding:0}),n=o.Provider,i=()=>(0,a.useContext)(o).padding},1901:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7294),o=r(6172),n=r(8427),i=r(6485),l=r(8643),s=(0,r(47).k)((e=>({root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}}))),g=r(8252),c=Object.defineProperty,M=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const m={padding:"md"},I=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("Card",m,e),{className:n,padding:c,radius:I,children:u,unstyled:h,variant:y}=r,p=((e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&M)for(var a of M(e))t.indexOf(a)<0&&A.call(e,a)&&(r[a]=e[a]);return r})(r,["className","padding","radius","children","unstyled","variant"]),{classes:w,cx:f}=s(null,{name:"Card",unstyled:h,variant:y}),N=a.Children.toArray(u),b=N.map(((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===l.u?(0,a.cloneElement)(e,{variant:y,padding:c,"data-first":0===t||void 0,"data-last":t===N.length-1||void 0}):e));return a.createElement(g.k,{value:{padding:c}},a.createElement(i.X,((e,t)=>{for(var r in t||(t={}))d.call(t,r)&&D(e,r,t[r]);if(M)for(var r of M(t))A.call(t,r)&&D(e,r,t[r]);return e})({className:f(w.root,n),radius:I,p:c,ref:t},p),b))}));I.Section=l.u,I.displayName="@mantine/core/Card";const u=(0,n.F)(I)},8643:function(e,t,r){r.d(t,{u:function(){return y}});var a=r(7294),o=r(6172),n=r(8427),i=r(8252),l=r(47),s=r(4258),g=r(6768),c=(0,l.k)(((e,{padding:t,withBorder:r,inheritPadding:a})=>{const o=(0,s.a)({size:t,sizes:e.spacing}),n=`calc(-1 * ${o})`,i="dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3];return{cardSection:{display:"block",marginLeft:n,marginRight:n,paddingLeft:a?o:void 0,paddingRight:a?o:void 0,borderTop:r?`${(0,g.h)(1)} solid ${i}`:void 0,borderBottom:r?`${(0,g.h)(1)} solid ${i}`:void 0,"& + &":{borderTop:0},"&[data-first]":{marginTop:n,borderTop:0,borderBottom:r?`${(0,g.h)(1)} solid ${i}`:void 0},"&[data-last]":{marginBottom:n,borderBottom:0}}}})),M=r(2850),d=Object.defineProperty,A=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const u={withBorder:!1,inheritPadding:!1},h=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("CardSection",u,e),{className:n,withBorder:l,inheritPadding:s,unstyled:g,variant:d}=r,h=((e,t)=>{var r={};for(var a in e)D.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&A)for(var a of A(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r})(r,["className","withBorder","inheritPadding","unstyled","variant"]),{classes:y,cx:p}=c({padding:(0,i.C)(),withBorder:l,inheritPadding:s},{name:"Card",unstyled:g,variant:d});return a.createElement(M.x,((e,t)=>{for(var r in t||(t={}))D.call(t,r)&&I(e,r,t[r]);if(A)for(var r of A(t))m.call(t,r)&&I(e,r,t[r]);return e})({className:p(y.cardSection,n),ref:t},h))}));h.displayName="@mantine/core/CardSection";const y=(0,n.F)(h)},4168:function(e,t,r){r.d(t,{i:function(){return f}});var a=r(7294),o=r(6172),n=r(6768),i=r(47),l=r(4258);const s={xs:(0,n.h)(1),sm:(0,n.h)(2),md:(0,n.h)(3),lg:(0,n.h)(4),xl:(0,n.h)(5)};function g(e,t){const r=e.fn.variant({variant:"outline",color:t}).border;return"string"==typeof t&&(t in e.colors||t.split(".")[0]in e.colors)?r:void 0===t?"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]:t}var c=(0,i.k)(((e,{color:t},{size:r,variant:a})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:(0,n.h)(1),borderTop:`${(0,l.a)({size:r,sizes:s})} ${a} ${g(e,t)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${(0,l.a)({size:r,sizes:s})} ${a} ${g(e,t)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===t?e.colors.dark[1]:e.fn.themeColor(t,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:(0,n.h)((0,l.a)({size:r,sizes:s})),borderTopColor:g(e,t),borderTopStyle:a,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:(0,n.h)((0,l.a)({size:r,sizes:s})),borderLeftColor:g(e,t),borderLeftStyle:a}}))),M=r(2850),d=r(5918),A=Object.defineProperty,D=Object.defineProperties,m=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&y(e,r,t[r]);if(I)for(var r of I(t))h.call(t,r)&&y(e,r,t[r]);return e};const w={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},f=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("Divider",w,e),{className:i,color:l,orientation:s,size:g,label:A,labelPosition:y,labelProps:f,variant:N,styles:b,classNames:C,unstyled:T}=r,E=((e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&I)for(var a of I(e))t.indexOf(a)<0&&h.call(e,a)&&(r[a]=e[a]);return r})(r,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:x,cx:v}=c({color:l},{classNames:C,styles:b,unstyled:T,name:"Divider",variant:N,size:g}),S="vertical"===s,z="horizontal"===s,j=!!A&&z,k=!(null==f?void 0:f.color);return a.createElement(M.x,p({ref:t,className:v(x.root,{[x.vertical]:S,[x.horizontal]:z,[x.withLabel]:j},i),role:"separator"},E),j&&a.createElement(d.x,(L=p({},f),O={size:(null==f?void 0:f.size)||"xs",mt:(0,n.h)(2),className:v(x.label,x[y],{[x.labelDefaultStyles]:k})},D(L,m(O))),A));var L,O}));f.displayName="@mantine/core/Divider"},6233:function(e,t,r){r.d(t,{M:function(){return N}});var a=r(7294),o=r(6172),n=r(47),i=r(4258),l=r(58),s=r(6768);var g=Object.defineProperty,c=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&A(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&A(e,r,t[r]);return e},m=(0,n.k)(((e,{spacing:t,breakpoints:r,cols:a,verticalSpacing:o})=>{const n=null!=o,g=function(e,t){if(0===t.length)return t;const r="maxWidth"in t[0]?"maxWidth":"minWidth",a=[...t].sort(((t,a)=>(0,l.oI)((0,i.a)({size:a[r],sizes:e.breakpoints}))-(0,l.oI)((0,i.a)({size:t[r],sizes:e.breakpoints}))));return"minWidth"===r?a.reverse():a}(e,r).reduce(((r,a)=>{var g,c;const M="maxWidth"in a?"max-width":"min-width",d=(0,i.a)({size:"max-width"===M?a.maxWidth:a.minWidth,sizes:e.breakpoints,units:"em"}),A=(0,l.oI)(d)-("max-width"===M?1:0);return r[`@media (${M}: ${(0,s.em)(A)})`]={gridTemplateColumns:`repeat(${a.cols}, minmax(0, 1fr))`,gap:`${(0,i.a)({size:null!=(g=a.verticalSpacing)?g:n?o:t,sizes:e.spacing})} ${(0,i.a)({size:null!=(c=a.spacing)?c:t,sizes:e.spacing})}`},r}),{});return{root:D({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${a}, minmax(0, 1fr))`,gap:`${(0,i.a)({size:n?o:t,sizes:e.spacing})} ${(0,i.a)({size:t,sizes:e.spacing})}`},g)}})),I=r(2850),u=Object.defineProperty,h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const f={breakpoints:[],cols:1,spacing:"md"},N=(0,a.forwardRef)(((e,t)=>{const r=(0,o.N4)("SimpleGrid",f,e),{className:n,breakpoints:i,cols:l,spacing:s,verticalSpacing:g,children:c,unstyled:M,variant:d}=r,A=((e,t)=>{var r={};for(var a in e)y.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&h)for(var a of h(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["className","breakpoints","cols","spacing","verticalSpacing","children","unstyled","variant"]),{classes:D,cx:u}=m({breakpoints:i,cols:l,spacing:s,verticalSpacing:g},{name:"SimpleGrid",unstyled:M,variant:d});return a.createElement(I.x,((e,t)=>{for(var r in t||(t={}))y.call(t,r)&&w(e,r,t[r]);if(h)for(var r of h(t))p.call(t,r)&&w(e,r,t[r]);return e})({className:u(D.root,n),ref:t},A),c)}));N.displayName="@mantine/core/SimpleGrid"},9786:function(e,t,r){r.d(t,{Z:function(){return D}});var a=r(2850),o=r(6172),n=r(9724),i=r(47),l=r(4331),s=r(5918),g=r(4168),c=r(7294);const M=(0,i.k)((e=>({title:{paddingBottom:e.spacing.md,letterSpacing:"0.05em",fontSize:`calc(${e.fontSizes.xl} * 2)`,textAlign:"center"},description:{fontSize:`calc(${e.fontSizes.xl} * 1.2)`}})));var d=e=>{let{title:t,children:r}=e;const{classes:o}=M();return c.createElement(a.x,{mb:40},c.createElement(l.D,{order:2,className:o.title},t),c.createElement(n.W,{size:"sm"},c.createElement(s.x,{align:"center",weight:300,className:o.description},r)),c.createElement(g.i,{mt:30,size:"md",mx:"auto",sx:{maxWidth:"200px"}}))};const A={white:{},light:e=>({backgroundColor:e.colors.gray[1],border:`1px solid ${e.colors.gray[3]}`}),pattern:{background:`url(${r(7260).Z})`,backgroundSize:"cover"}};var D=e=>{const{title:t,subtitle:r,children:i,fullWidth:l,background:s="white",width:g,...M}=e,D=c.createElement(c.Fragment,null,t&&c.createElement(d,{title:t},r),i);return c.createElement(a.x,Object.assign({sx:A[s],py:75},M),c.createElement(o.Me,null,l?D:c.createElement(n.W,{size:g},D)))}},9219:function(e,t,r){var a=r(47),o=r(2850),n=r(9724),i=r(4331),l=r(7294);const s=(0,a.k)((e=>({container:{backgroundImage:`url(${r(5307).Z})`,backgroundColor:e.colors.navy[8]},text:{color:e.white,paddingTop:120,paddingBottom:47,letterSpacing:"0.05em",fontSize:40,textAlign:"center",[e.fn.smallerThan("sm")]:{fontSize:30}}})));t.Z=e=>{let{children:t}=e;const{classes:r}=s();return l.createElement(o.x,{className:r.container},l.createElement(n.W,null,l.createElement(i.D,{order:1,className:r.text},t)))}},4001:function(e,t,r){r.d(t,{H:function(){return o}});var a=r(7294);const o=()=>a.createElement(a.Fragment,null,a.createElement("html",{lang:"en"}),a.createElement("title",null,"HackUSU 2024"),a.createElement("meta",{name:"description",content:"We're HackUSU, Utah's largest and oldest student-run hackathon. Join hundreds of students and professionals at Utah State University for competitions and workshops related software, data analytics, hardware, and more!"}),a.createElement("meta",{name:"theme-color",content:"#0b1928"}))},8512:function(e,t,r){r.r(t),r.d(t,{Head:function(){return te},default:function(){return ee}});var a=r(9219),o=r(7294),n=r(4001),i=r(5548),l=r(9786),s=r(5687),g=r(6233);const c={title:"Zen Garden",category:"hardware",video:{type:"youtube",embedId:"R83iP5Q-EOI"},description:"We 3D modeled, printed, and developed software to drive mini tractors to rake the sand in a Zen Garden. The brains of the tractors are ESP32 microcontrollers. The ESP32 controls 2 stepper motors using tank controls to propel, and steer the tractor forward. The esp32 also hosts a wi-fi network. If connected to the tractor wi-fi, an internet browser navigated to 192.168.4.1 a joystick will be displayed. The joystick can then control the tractor, allowing one to get their Zen on and feel relaxed and rested.",sourceCodeUrl:"https://github.com/daniel-morty/hackusu2023",teamMembers:["Aaron Roth","Daniel Mortenson","Carter Nettesheim"],tools:["Free RTOS","ESP async web server","stepper motor","arduino","Fusion 360","Ultimaker Cura"]},M=[{title:"TohDoh",category:"general",video:{type:"link",url:"https://drive.google.com/file/d/1eNfafNn6g6ua_Ea_WNCtbNGLmmuOoB9-/view"},description:"TohDoh: “Pick up grandma” Scheduling web app! To-do apps have been a hot topic especially within the programming classes at USU. Well now you never need to worry about forgetting to pick up grandma because our team has created a to-do app that will end all to-do apps – TohDoh! On the TohDoh web app you can enter your work or class schedule to auto fill into your calendar. Then you can put the various tasks you need to do for work, school, and life with an estimation of how long each will take. TohDoh will then auto-schedule these different tasks as availability permits in your schedule. Your generated schedule can then be imported into any calendar with an .ics file that TohDoh can download to your computer.",sourceCodeUrl:"https://github.com/WesleyEdwards/tohdoh",teamMembers:["Josh McClung","Wesley Edwards","Elise Francis","Abby Israelsen"],tools:["React","TypeScript","Express","Prisma","MaterialUI","generate-ical"]},{title:"Bloons Tower Defense 1 Clone",category:"game dev",video:{type:"link",url:"https://drive.google.com/file/d/14R-HZYNPK8FdrtLpZXiT5St24TGm-P1B/view"},description:"I recreated an Adobe Flash game from my childhood, Bloons Tower Defense 1! I used the assets from the original game. It's built using TypeScript and renders to an HTML canvas.",sourceCodeUrl:"https://drive.google.com/file/d/1dgStZf_djGRaVld89Z8fmG2h1HYEOTDN/view?usp=share_link",teamMembers:["Kollin Murphy"],tools:["TypeScript","Vite"]},{title:"Shakespearean English Translator and Generator",category:"ai & ml",video:{type:"link",url:"https://drive.google.com/file/d/1VyThO4XGhG_7FoOieU4CKuyomUoOpqvi/view"},description:"Our project takes a LLM (GPT2) and finetunes it to our specific use case, translating or generating Shakespearean English. After training the model, we then created a web app using Flask which loads and leverages our model or translation and generation. Through out web app we can feed prompts to our model and either receive a translation or generated text.",teamMembers:["Cailean Bushnell","Landon Work"],tools:["Pandas","Numpy","torch","tqdm","GPT2"]},{title:"National Parks Interactive Planning",category:"data analytics",video:{type:"link",url:"https://drive.google.com/file/d/1aU7nfhIUR2znQEAwvvzvHYCxQoP8832v/view?usp=sharing"},description:"Our project is an online website that displays an interactive map along with the top 5 parks to visit in the current month. This list was made by us from a consideration of multiple factors including weather and visitor information. The interactive map allows you to select parks and when selected will bring you to a new page that shows the best months to visit that park based on your weather preferences of rain, and temperature. It also displays a line chart of the current monthly average visitors, along with recommendations of things to do around each park. ",sourceCodeUrl:"https://drive.google.com/file/d/1CUb-W-SqxEJIqdChvg4cGwKroGwKfOds/view?usp=sharing",teamMembers:["Isaac Holcomb","Isaac Black","Tom Waite","Kaden Yardley"],tools:["Streamlit","Pandas","OpenAI","Plotly","Numpy","LeafMap"]},{title:"MINDful Hand",category:"hardware",video:{type:"link",url:"https://drive.google.com/file/d/1tys-Eq0Ul1Rv0Oboey_nwtMVoASc8zKw/view"},description:"This project involves creating a mechanical hand using recycled materials that can be controlled by the user's thoughts using brain control technology. The hand is controlled using machine learning algorithms based on data acquired from the user's brain signals. The project uses Python and scikit-learn for machine learning, the Lab Streaming Layer for data acquisition, and an Arduino for hardware control. Pyserial is used to send commands from the Python code to the Arduino to control the movement of the hand. The project aims to promote sustainability by using recycled materials and cutting-edge technology to create a more innovative and sustainable future.",sourceCodeUrl:"https://github.com/AlexBerryhill/MINDful-Hand",teamMembers:["Alexander Berryhill"],tools:["ScikitLearn","Pyserial","Muse2","pyLSL","BlueMuse"]},{title:"Crime",category:"data analytics",video:{type:"link",url:"https://drive.google.com/file/d/1Wbwk4coIygeOMv9RPreURawQFHFQPOwj/view"},description:"Los Angeles has a reputation for being one of the most crime-ridden cities in the United States. While the city has made significant progress in reducing crime rates in recent years, it still struggles with a variety of criminal activities, including gang violence, drug trafficking, theft, and property crimes. The city's high population density, economic inequality, and the large number of tourists contribute to the challenges law enforcement faces in maintaining public safety. Despite the efforts of law enforcement agencies and community organizations, crime in Los Angeles remains a serious concern for residents and visitors alike.",sourceCodeUrl:"https://storymaps.arcgis.com/stories/04f0a81a3af84462a6d1dc6ef935e9c3",teamMembers:["Sigmund Seranilla","Trevor Neri"],tools:["ArcGIS","Google Colab","Python","Pandas"]},{title:"Graph Neural Network for Drug Discovery",category:"ai & ml",video:{type:"link",url:"https://drive.google.com/file/d/154VbLJV0i6hrDdtcazp9r1vVdMq4d2Wv/view"},description:"Our project uses a Graph Neural Network, or GNN, to analyze the Zinc database and identify potential drug candidates. The Zinc database is a large collection of purchasable compounds that can be used for drug discovery. Traditional methods for identifying potential drug candidates from this database don't work well, though, because the compounds are represented as nodes in a graph with various relationships represented as edges in the graph, such as similarity or chemical properties. By using a GNN and leveraging the graph structure of the database, we aim to overcome these limitations and discover new drugs that could save lives.",sourceCodeUrl:"https://github.com/TylerEnglish/GP_Graph_Net",teamMembers:["Logan Ray","Tyler English","Randy Pierce","Michael Harris"],tools:["Streamlit","Pytorch Geometric","Pickle","Torch","Matplotlib"]},{title:"The Matrix IRL",category:"game dev",video:{type:"link",url:"https://drive.google.com/file/d/1sXz27F1hYYAGuCZp9h4p216AxI_gBQHD/view"},description:"Networking between multiple VR HMDs to support multiple concurrent users in a single Virtual Environment interacting with each other and the environment. To showcase this feature, we built a nice park scene complete with a ping-pong table, football, mini golf course, basketball court, and a maze. Users can enjoy playing these games with up to 10 total users. Our scene also included relaxing background music which was filtered out by our recording software so is not found in the video.",sourceCodeUrl:"https://github.com/logan-nielsen/The-Matrix-IRL-HackUSU",teamMembers:["Justin Roylance","Logan Nielsen"],tools:["Normcore"]},{title:"EasyHeal",category:"general",video:{type:"link",url:"https://drive.google.com/file/d/1aH3FRPi5G5gkKxlMccXwh63gwCH6PwcY/view"},description:"Coping with loss can be a daily challenge, and many people struggle to find ways to honor and remember their loved ones. Our web application is designed to provide personalized support and companionship for those experiencing loss. Through our platform, users can celebrate the lives of their loved ones and express their feelings in a way that feels authentic and meaningful to them. Our aim is to offer a space of comfort and healing for individuals who are navigating this difficult journey.",sourceCodeUrl:"",teamMembers:["Lesliee Cruz","Na Rah"],tools:["React","MUI","Firebase","MongoDB"]}];var d=r(1901),A=r(8643),D=r(2691),m=r(3415),I=r(4331),u=r(5157),h=r(6172),y=r(6768),p=r(47),w=r(4258),f=Object.defineProperty,N=Object.defineProperties,b=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&x(e,r,t[r]);if(C)for(var r of C(t))E.call(t,r)&&x(e,r,t[r]);return e};const S={xs:(0,y.h)(16),sm:(0,y.h)(20),md:(0,y.h)(26),lg:(0,y.h)(32),xl:(0,y.h)(40)},z=["filled","light","gradient","outline","default"];function j({theme:e,variant:t,color:r,gradient:a}){if(!z.includes(t))return null;const o=e.fn.variant({variant:t,color:r||e.primaryColor,gradient:a,primaryFallback:!1});return{backgroundColor:o.background,color:o.color,backgroundImage:"gradient"===t?o.background:void 0,border:`${(0,y.h)("gradient"===t?0:1)} solid ${o.border}`}}var k=(0,p.k)(((e,{color:t,radius:r,gradient:a},{variant:o,size:n})=>{const i=(0,w.a)({size:n,sizes:S});return{root:v((l=v({},e.fn.fontStyles()),s={display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:i,height:i,minWidth:i,minHeight:i,borderRadius:e.fn.radius(r)},N(l,b(s))),j({theme:e,variant:o,gradient:a,color:t}))};var l,s})),L=r(2850),O=Object.defineProperty,Y=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const W={size:"md",variant:"filled"},B=(0,o.forwardRef)(((e,t)=>{const r=(0,h.N4)("ThemeIcon",W,e),{className:a,size:n,radius:i,variant:l,color:s,children:g,gradient:c,unstyled:M}=r,d=((e,t)=>{var r={};for(var a in e)U.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&Y)for(var a of Y(e))t.indexOf(a)<0&&P.call(e,a)&&(r[a]=e[a]);return r})(r,["className","size","radius","variant","color","children","gradient","unstyled"]),{classes:A,cx:D}=k({variant:l,radius:i,color:s,gradient:c},{name:"ThemeIcon",unstyled:M,variant:l,size:n});return o.createElement(L.x,((e,t)=>{for(var r in t||(t={}))U.call(t,r)&&Z(e,r,t[r]);if(Y)for(var r of Y(t))P.call(t,r)&&Z(e,r,t[r]);return e})({className:D(A.root,a),ref:t},d),g)}));B.displayName="@mantine/core/ThemeIcon";var G=r(5918),R=r(3285),H=r(2581),F=["size","color"];function J(e){var t=e.size,r=void 0===t?24:t,a=e.color,n=void 0===a?"currentColor":a,i=(0,H.Kd)(e,F);return o.createElement("svg",(0,H.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-player-play",width:r,height:r,viewBox:"0 0 24 24",stroke:n,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M7 4v16l13 -8z"}))}var Q=["size","color"];function $(e){var t=e.size,r=void 0===t?24:t,a=e.color,n=void 0===a?"currentColor":a,i=(0,H.Kd)(e,Q);return o.createElement("svg",(0,H.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user",width:r,height:r,viewBox:"0 0 24 24",stroke:n,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("circle",{cx:"12",cy:"7",r:"4"}),o.createElement("path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}))}var V=["size","color"];function X(e){var t=e.size,r=void 0===t?24:t,a=e.color,n=void 0===a?"currentColor":a,i=(0,H.Kd)(e,V);return o.createElement("svg",(0,H.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-tools",width:r,height:r,viewBox:"0 0 24 24",stroke:n,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"}),o.createElement("line",{x1:"14.5",y1:"5.5",x2:"18.5",y2:"9.5"}),o.createElement("polyline",{points:"12 8 7 3 3 7 8 12"}),o.createElement("line",{x1:"7",y1:"8",x2:"5.5",y2:"9.5"}),o.createElement("polyline",{points:"16 12 21 17 17 21 12 16"}),o.createElement("line",{x1:"16",y1:"17",x2:"14.5",y2:"18.5"}))}var _=r(7032);const K=e=>{let{project:t}=e;const{0:r,1:a}=(0,o.useState)(!1),n=t.description.length>300;return o.createElement(d.Z,{shadow:"sm"},"youtube"===t.video.type?o.createElement(A.u,null,o.createElement("iframe",{width:"100%",src:`https://www.youtube-nocookie.com/embed/${t.video.embedId}`,frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{aspectRatio:"16/9"}})):o.createElement(A.u,null,o.createElement(D.z,{rightIcon:o.createElement(J,null),component:"a",href:t.video.url,target:"_blank",fullWidth:!0,size:"xl",radius:0,variant:"filled"},"Watch Demo")),o.createElement(m.Z,{position:"apart",mb:"md",mt:"sm"},o.createElement(I.D,{order:3,size:"2rem"},t.title)),o.createElement(m.Z,{spacing:"xl",align:"flex-start"},o.createElement(u.K,{sx:{flexGrow:1,flexBasis:0,minWidth:250}},o.createElement(m.Z,{noWrap:!0,align:"flex-start"},o.createElement(B,null,o.createElement($,null)),o.createElement(G.x,null,t.teamMembers.join(", "))),o.createElement(m.Z,{noWrap:!0,align:"flex-start"},o.createElement(B,null,o.createElement(X,null)),o.createElement(G.x,null,t.tools.join(", "))),t.sourceCodeUrl&&o.createElement(m.Z,{noWrap:!0,align:"flex-start"},o.createElement(B,null,o.createElement(_.Z,null)),o.createElement(R.e,{href:t.sourceCodeUrl,target:"_blank"},(()=>{const{hostname:e,pathname:r}=new URL(t.sourceCodeUrl);return e+r})()))),o.createElement(L.x,{sx:{flexGrow:1,flexBasis:0,minWidth:250}},o.createElement(G.x,null,t.description.slice(0,r?void 0:300),n&&!r&&"..."),n&&o.createElement(R.e,{onClick:()=>a(!r),style:{cursor:"pointer"}},r?"Show Less":"Show More"))))};var q=r(6706);function ee(){return o.createElement(i.Z,null,o.createElement(a.Z,null,"Featured Projects"),o.createElement(l.Z,{title:"2023 Grand Champion",background:"pattern"},o.createElement(K,{project:c})),o.createElement(l.Z,{title:"Featured 2023 Submissions",subtitle:"These are just some of the great projects teams have created at HackUSU!",width:"xl"},o.createElement(s.b,{title:"Want your project featured?",mb:"xl",variant:"filled",maw:700,mx:"auto",color:"green"},"Email ",q.gj," with your name and project category"),o.createElement(g.M,{cols:3,breakpoints:[{maxWidth:1e3,cols:2,spacing:"md"},{maxWidth:800,cols:1,spacing:"md"}],spacing:"xl"},M.map(((e,t)=>o.createElement(K,{key:t,project:e}))))))}const te=()=>o.createElement(n.H,null)},5307:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDQgMzA0IiB3aWR0aD0iMzA0IiBoZWlnaHQ9IjMwNCI+PHBhdGggZmlsbD0iIzFmMzk1NyIgZD0iTTQ0LjEgMjI0YTUgNSAwIDEgMSAwIDJIMHYtMmg0NC4xem0xNjAgNDhhNSA1IDAgMSAxIDAgMkg4MnYtMmgxMjIuMXptNTcuOC00NmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem0wIDE2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTYuMi0xMTRhNSA1IDAgMSAxIDAgMmgtODYuMmE1IDUgMCAxIDEgMC0yaDg2LjJ6bS0yNTYtNDhhNSA1IDAgMSAxIDAgMkgwdi0yaDEyLjF6bTE4NS44IDM0YTUgNSAwIDEgMSAwLTJoODYuMmE1IDUgMCAxIDEgMCAyaC04Ni4yek0yNTggMTIuMWE1IDUgMCAxIDEtMiAwVjBoMnYxMi4xem0tNjQgMjA4YTUgNSAwIDEgMS0yIDB2LTU0LjJhNSA1IDAgMSAxIDIgMHY1NC4yem00OC0xOTguMlY4MGg2MnYyaC02NFYyMS45YTUgNSAwIDEgMSAyIDB6bTE2IDE2VjY0aDQ2djJoLTQ4VjM3LjlhNSA1IDAgMSAxIDIgMHptLTEyOCA5NlYyMDhoMTZ2MTIuMWE1IDUgMCAxIDEtMiAwVjIxMGgtMTZ2LTc2LjFhNSA1IDAgMSAxIDIgMHptLTUuOS0yMS45YTUgNSAwIDEgMSAwIDJIMTE0djQ4SDg1LjlhNSA1IDAgMSAxIDAtMkgxMTJ2LTQ4aDEyLjF6bS02LjIgMTMwYTUgNSAwIDEgMSAwLTJIMTc2di03NC4xYTUgNSAwIDEgMSAyIDBWMjQyaC02MC4xem0tMTYtNjRhNSA1IDAgMSAxIDAtMkgxMTR2NDhoMTAuMWE1IDUgMCAxIDEgMCAySDExMnYtNDhoLTEwLjF6TTY2IDI4NC4xYTUgNSAwIDEgMS0yIDBWMjc0SDUwdjMwaC0ydi0zMmgxOHYxMi4xek0yMzYuMSAxNzZhNSA1IDAgMSAxIDAgMkgyMjZ2OTRoNDh2MzJoLTJ2LTMwaC00OHYtOThoMTIuMXptMjUuOC0zMGE1IDUgMCAxIDEgMC0ySDI3NHY0NC4xYTUgNSAwIDEgMS0yIDBWMTQ2aC0xMC4xem0tNjQgOTZhNSA1IDAgMSAxIDAtMkgyMDh2LTgwaDE2di0xNGgtNDIuMWE1IDUgMCAxIDEgMC0ySDIyNnYxOGgtMTZ2ODBoLTEyLjF6bTg2LjItMjEwYTUgNSAwIDEgMSAwIDJIMjcyVjBoMnYzMmgxMC4xek05OCAxMDEuOVYxNDZINTMuOWE1IDUgMCAxIDEgMC0ySDk2di00Mi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMzRhNSA1IDAgMSAxIDAtMkg4MFYwaDJ2MzRINTMuOXptNjAuMSAzLjlWNjZIODJ2NjRINjkuOWE1IDUgMCAxIDEgMC0ySDgwVjY0aDMyVjM3LjlhNSA1IDAgMSAxIDIgMHpNMTAxLjkgODJhNSA1IDAgMSAxIDAtMkgxMjhWMzcuOWE1IDUgMCAxIDEgMiAwVjgyaC0yOC4xem0xNi02NGE1IDUgMCAxIDEgMC0ySDE0NnY0NC4xYTUgNSAwIDEgMS0yIDBWMThoLTI2LjF6bTEwMi4yIDI3MGE1IDUgMCAxIDEgMCAySDk4djE0aC0ydi0xNmgxMjQuMXpNMjQyIDE0OS45VjE2MGgxNnYzNGgtMTZ2NjJoNDh2NDhoLTJ2LTQ2aC00OHYtNjZoMTZ2LTMwaC0xNnYtMTIuMWE1IDUgMCAxIDEgMiAwek01My45IDE4YTUgNSAwIDEgMSAwLTJINjRWMkg0OFYwaDE4djE4SDUzLjl6bTExMiAzMmE1IDUgMCAxIDEgMC0ySDE5MlYwaDUwdjJoLTQ4djQ4aC0yOC4xem0tNDgtNDhhNSA1IDAgMCAxLTkuOC0yaDIuMDdhMyAzIDAgMSAwIDUuNjYgMEgxNzh2MzRoLTE4VjIxLjlhNSA1IDAgMSAxIDIgMFYzMmgxNFYyaC01OC4xem0wIDk2YTUgNSAwIDEgMSAwLTJIMTM3bDMyLTMyaDM5VjIxLjlhNSA1IDAgMSAxIDIgMFY2NmgtNDAuMTdsLTMyIDMySDExNy45em0yOC4xIDkwLjFhNSA1IDAgMSAxLTIgMHYtNzYuNTFMMTc1LjU5IDgwSDIyNFYyMS45YTUgNSAwIDEgMSAyIDBWODJoLTQ5LjU5TDE0NiAxMTIuNDF2NzUuNjl6bTE2IDMyYTUgNSAwIDEgMS0yIDB2LTk5LjUxTDE4NC41OSA5NkgzMDAuMWE1IDUgMCAwIDEgMy45LTMuOXYyLjA3YTMgMyAwIDAgMCAwIDUuNjZ2Mi4wN2E1IDUgMCAwIDEtMy45LTMuOUgxODUuNDFMMTYyIDEyMS40MXY5OC42OXptLTE0NC02NGE1IDUgMCAxIDEtMiAwdi0zLjUxbDQ4LTQ4VjQ4aDMyVjBoMnY1MEg2NnY1NS40MWwtNDggNDh2Mi42OXpNNTAgNTMuOXY0My41MWwtNDggNDhWMjA4aDI2LjFhNSA1IDAgMSAxIDAgMkgwdi02NS40MWw0OC00OFY1My45YTUgNSAwIDEgMSAyIDB6bS0xNiAxNlY4OS40MWwtMzQgMzR2LTIuODJsMzItMzJWNjkuOWE1IDUgMCAxIDEgMiAwek0xMi4xIDMyYTUgNSAwIDEgMSAwIDJIOS40MUwwIDQzLjQxVjQwLjZMOC41OSAzMmgzLjUxem0yNjUuOCAxOGE1IDUgMCAxIDEgMC0yaDE4LjY5bDcuNDEtNy40MXYyLjgyTDI5Ny40MSA1MEgyNzcuOXptLTE2IDE2MGE1IDUgMCAxIDEgMC0ySDI4OHYtNzEuNDFsMTYtMTZ2Mi44MmwtMTQgMTRWMjEwaC0yOC4xem0tMjA4IDMyYTUgNSAwIDEgMSAwLTJINjR2LTIyLjU5TDQwLjU5IDE5NEgyMS45YTUgNSAwIDEgMSAwLTJINDEuNDFMNjYgMjE2LjU5VjI0Mkg1My45em0xNTAuMiAxNGE1IDUgMCAxIDEgMCAySDk2di01Ni42TDU2LjYgMTYySDM3LjlhNSA1IDAgMSAxIDAtMmgxOS41TDk4IDIwMC42VjI1NmgxMDYuMXptLTE1MC4yIDJhNSA1IDAgMSAxIDAtMkg4MHYtNDYuNTlMNDguNTkgMTc4SDIxLjlhNSA1IDAgMSAxIDAtMkg0OS40MUw4MiAyMDguNTlWMjU4SDUzLjl6TTM0IDM5Ljh2MS42MUw5LjQxIDY2SDB2LTJoOC41OUwzMiA0MC41OVYwaDJ2MzkuOHpNMiAzMDAuMWE1IDUgMCAwIDEgMy45IDMuOUgzLjgzQTMgMyAwIDAgMCAwIDMwMi4xN1YyNTZoMTh2NDhoLTJ2LTQ2SDJ2NDIuMXpNMzQgMjQxdjYzaC0ydi02Mkgwdi0yaDM0djF6TTE3IDE4SDB2LTJoMTZWMGgydjE4aC0xem0yNzMtMmgxNHYyaC0xNlYwaDJ2MTZ6bS0zMiAyNzN2MTVoLTJ2LTE0aC0xNHYxNGgtMnYtMTZoMTh2MXpNMCA5Mi4xQTUuMDIgNS4wMiAwIDAgMSA2IDk3YTUgNSAwIDAgMS02IDQuOXYtMi4wN2EzIDMgMCAxIDAgMC01LjY2VjkyLjF6TTgwIDI3MmgydjMyaC0ydi0zMnptMzcuOSAzMmgtMi4wN2EzIDMgMCAwIDAtNS42NiAwaC0yLjA3YTUgNSAwIDAgMSA5LjggMHpNNS45IDBBNS4wMiA1LjAyIDAgMCAxIDAgNS45VjMuODNBMyAzIDAgMCAwIDMuODMgMEg1Ljl6bTI5NC4yIDBoMi4wN0EzIDMgMCAwIDAgMzA0IDMuODNWNS45YTUgNSAwIDAgMS0zLjktNS45em0zLjkgMzAwLjF2Mi4wN2EzIDMgMCAwIDAtMS44MyAxLjgzaC0yLjA3YTUgNSAwIDAgMSAzLjktMy45ek05NyAxMDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tNDggMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzItMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgOTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNDRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNDkgMzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMzMgNjhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi00OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMjQwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptODAtMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTEyIDE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgMTgwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgODRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA2NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnoiPjwvcGF0aD48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-projects-index-tsx-c05520ea491452840d59.js.map