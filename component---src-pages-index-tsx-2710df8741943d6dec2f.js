"use strict";(self.webpackChunkhackusu_site=self.webpackChunkhackusu_site||[]).push([[691],{7405:function(e,t,a){a.r(t),a.d(t,{Head:function(){return le},default:function(){return se}});var n=a(2850),o=a(9724),r=a(1389),i=a(4331),s=a(6233),l=a(5918),c=a(7294),d=a(6172),m=a(47),h=Object.defineProperty,u=Object.defineProperties,g=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,M=(e,t,a)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))w.call(t,a)&&M(e,a,t[a]);if(b)for(var a of b(t))p.call(t,a)&&M(e,a,t[a]);return e},f=(0,m.k)(((e,{ratio:t})=>{return{root:{position:"relative",maxWidth:"100%","&::before":{content:'""',height:0,display:"block",paddingBottom:1/t*100+"%"},"&::after":{content:'""',display:"table",clear:"both"},"& > *:not(style)":(a=y({},e.fn.cover()),n={overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},u(a,g(n))),"& > img, & > video":{objectFit:"cover"}}};var a,n})),v=Object.defineProperty,k=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const x=(0,c.forwardRef)(((e,t)=>{const a=(0,d.N4)("AspectRatio",{},e),{className:o,ratio:r,children:i,unstyled:s,variant:l}=a,m=((e,t)=>{var a={};for(var n in e)j.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&k)for(var n of k(e))t.indexOf(n)<0&&E.call(e,n)&&(a[n]=e[n]);return a})(a,["className","ratio","children","unstyled","variant"]),{classes:h,cx:u}=f({ratio:r},{name:"AspectRatio",unstyled:s,variant:l});return c.createElement(n.x,((e,t)=>{for(var a in t||(t={}))j.call(t,a)&&N(e,a,t[a]);if(k)for(var a of k(t))E.call(t,a)&&N(e,a,t[a]);return e})({ref:t,className:u(h.root,o)},m),i)}));x.displayName="@mantine/core/AspectRatio";var D=a(5157),L=a(4372),I=a(3415),z=a(2813),C=(a(7727),a(8935)),S=a(9733),A=a(5687),O=a(3285),T=a(3843),U=a(7317),P=a(2078),J=a(9786),Z=a(5986),W=a(1511),H=a(6706),Y=a(6310);const G=Y.Ry().shape({name:Y.Z_().required("Required"),email:Y.Z_().required("Required").email("Invalid email"),message:Y.Z_().required("Required")});var R=e=>{const t=(0,T.c)({validate:(0,U.X)(G),initialValues:{name:"",email:"",message:""}}),[a,n]=c.useState(!1),[o,r]=c.useState(!1),[i,s]=c.useState(!1);return c.createElement(J.Z,Object.assign({title:"Have a question?",subtitle:"Send us a message!",width:"sm"},e),c.createElement("form",{onSubmit:t.onSubmit((e=>{n(!0),r(!1),s(!1);const{name:a,email:o,message:i}=e;(0,Z.c)({from:a,subject:"Contact Form Submission",message:i,data:{Name:a,Email:o}}).then((()=>{t.reset(),s(!0)})).catch((()=>r(!0))).finally((()=>n(!1)))})),noValidate:!0},c.createElement(D.K,{spacing:"md"},c.createElement(C.o,Object.assign({required:!0,label:"Name"},t.getInputProps("name"))),c.createElement(C.o,Object.assign({required:!0,label:"Email"},t.getInputProps("email"))),c.createElement(S.g,Object.assign({required:!0,placeholder:"Your message...",label:"Message",autosize:!0,minRows:3},t.getInputProps("message")))),o&&c.createElement(A.b,{icon:c.createElement(W.Z,{size:16}),title:"Submission Error",color:"red",mt:"xl"},"There was a problem with the service used to handle form submissions. Please email us at"," ",c.createElement(O.e,{href:"mailto:"+H.gj},H.gj),"."),i&&c.createElement(A.b,{icon:c.createElement(W.Z,{size:16}),title:"Submission Received!",color:"green",mt:"xl"},"Thank you for contacting us! If you have any additional questions, you can email us at"," ",c.createElement(O.e,{href:"mailto:"+H.gj},H.gj),"."),c.createElement(I.Z,{position:"right",mt:"xl"},c.createElement(P.Z,{loading:a,type:"submit"},"Submit"))))},Q=a(7129),q=a(113),B=a(2581),F=["size","color"];function X(e){var t=e.size,a=void 0===t?24:t,n=e.color,o=void 0===n?"currentColor":n,r=(0,B.Kd)(e,F);return c.createElement("svg",(0,B.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-device-gamepad-2",width:a,height:a,viewBox:"0 0 24 24",stroke:o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r),c.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"}),c.createElement("path",{d:"M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"}),c.createElement("path",{d:"M8 9v2"}),c.createElement("path",{d:"M7 10h2"}),c.createElement("path",{d:"M14 10h2"}))}var V=["size","color"];function K(e){var t=e.size,a=void 0===t?24:t,n=e.color,o=void 0===n?"currentColor":n,r=(0,B.Kd)(e,V);return c.createElement("svg",(0,B.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chart-dots",width:a,height:a,viewBox:"0 0 24 24",stroke:o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r),c.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M3 3v18h18"}),c.createElement("circle",{cx:"9",cy:"9",r:"2"}),c.createElement("circle",{cx:"19",cy:"7",r:"2"}),c.createElement("circle",{cx:"14",cy:"15",r:"2"}),c.createElement("line",{x1:"10.16",y1:"10.62",x2:"12.5",y2:"13.5"}),c.createElement("path",{d:"M15.088 13.328l2.837 -4.586"}))}var _=["size","color"];function $(e){var t=e.size,a=void 0===t?24:t,n=e.color,o=void 0===n?"currentColor":n,r=(0,B.Kd)(e,_);return c.createElement("svg",(0,B.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-robot",width:a,height:a,viewBox:"0 0 24 24",stroke:o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r),c.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"}),c.createElement("path",{d:"M10 16h4"}),c.createElement("circle",{cx:"8.5",cy:"11.5",r:".5",fill:"currentColor"}),c.createElement("circle",{cx:"15.5",cy:"11.5",r:".5",fill:"currentColor"}),c.createElement("path",{d:"M9 7l-1 -4"}),c.createElement("path",{d:"M15 7l1 -4"}))}var ee=["size","color"];function te(e){var t=e.size,a=void 0===t?24:t,n=e.color,o=void 0===n?"currentColor":n,r=(0,B.Kd)(e,ee);return c.createElement("svg",(0,B.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-bulb",width:a,height:a,viewBox:"0 0 24 24",stroke:o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r),c.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"}),c.createElement("path",{d:"M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"}),c.createElement("line",{x1:"9.7",y1:"17",x2:"14.3",y2:"17"}))}var ae=["size","color"];function ne(e){var t=e.size,a=void 0===t?24:t,n=e.color,o=void 0===n?"currentColor":n,r=(0,B.Kd)(e,ae);return c.createElement("svg",(0,B.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:a,height:a,viewBox:"0 0 24 24",stroke:o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},r),c.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),c.createElement("polyline",{points:"7 8 3 12 7 16"}),c.createElement("polyline",{points:"17 8 21 12 17 16"}),c.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"}))}var oe=a(8032),re=a(7580);const ie=()=>c.createElement(c.Fragment,null,c.createElement("html",{lang:"en"}),c.createElement("title",null,"HackUSU 2024"),c.createElement("meta",{name:"description",content:"We're HackUSU, Utah's largest and oldest student-run hackathon. Join hundreds of students and professionals at Utah State University for competitions and workshops related software, data analytics, hardware, and more!"}));function se(){return c.createElement(Q.Z,null,c.createElement(n.x,{pt:50,sx:e=>({backgroundColor:e.colors.navy[8],background:"url("+a(8855).Z+")",backgroundSize:"cover"})},c.createElement(o.W,{size:800,pt:50,px:50,pb:100},c.createElement(r.E,{src:a(8571).Z,alt:"HackUSU Logo",fit:"contain",width:"100%"}),c.createElement(i.D,{order:2,align:"center",pt:50,sx:{color:"white",fontSize:"1.5rem"}},"HackUSU 2023 has already happened, but we look forward to seeing you next year!")),c.createElement("img",{src:a(9329).Z,alt:"section divider",style:{width:"100%",height:"10vw",objectFit:"fill"}})),c.createElement(J.Z,{title:"What is HackUSU?",subtitle:"400+ Students • 24 Hours"},c.createElement(s.M,{breakpoints:[{maxWidth:"xs",cols:1}],cols:2,spacing:"xl"},[{title:"24-hr Hackathon",description:"Build a software or hardware project to compete against other teams. All college students and high school seniors are invited!"},{title:"Workshops",description:"We'll have many great workshops and tech talks on a variety of topics. Check back closer to the event for a complete list!"},{title:"Networking",description:"Come network with our sponsors and potential employers. There will be many industry experts to learn from and learn more about their companies!"},{title:"Free Food",description:"We'll provide dinner on Friday, and breakfast, lunch, and dinner on Saturday. There will also be plenty of snacks available the entire event!"}].map(((e,t)=>{let{title:a,description:o}=e;return c.createElement(n.x,{mx:"auto",sx:{maxWidth:300},key:t},c.createElement(i.D,{order:3,align:"center"},a),c.createElement(l.x,{align:"center"},o))})))),c.createElement(x,{ratio:2.5},c.createElement(oe.S,{src:"../images/event-photos/Mike Johnson Photo-04439.jpg",alt:"Students working on a project at HackUSU",layout:"fullWidth",__imageData:a(9409)})),c.createElement(J.Z,{title:"Competition Categories",subtitle:"We'll award separate prizes for both beginner and experienced teams in each cateogry!",background:"pattern",width:"sm"},c.createElement(D.K,{spacing:"xl"},[{title:"Game Dev",icon:X,description:"Any game, any technology. Try recreating a retro game, or design a brand new one we haven't seen before!"},{title:"Data Analytics & Visualization",icon:K,description:"Find a dataset online, then demonstrate ways of gaining interesting insights or displaying data in a creative way!"},{title:"Hardware",icon:$,description:"Show us your creation utilizing physical hardware including Raspberry Pi's, PCBs, or microcontrollers!"},{title:"AI & Machine Learning",icon:te,description:"Can you write a program that learns how to solve a problem?"},{title:"General",icon:ne,description:"All projects that  are too unique and don't fit the other categories!"}].map((e=>{let{title:t,icon:a,description:o}=e;return c.createElement(L.Z,{key:t,sx:{overflow:"visible"},shadow:"sm",ml:25,mr:10,py:"lg"},c.createElement(I.Z,null,c.createElement(z.q,{color:"blue",size:"lg",radius:"xl",sx:{position:"absolute",left:-28,border:"5px solid white",boxShadow:"2px 2px 5px 0 rgba(0, 0, 0, 0.2)"}},a({size:24})),c.createElement(n.x,{pl:30},c.createElement(l.x,{weight:"bold",size:"lg"},t),c.createElement(l.x,null,o))))})))),c.createElement(x,{ratio:1.7},c.createElement(oe.S,{src:"../images/event-photos/Mike Johnson Photo-04404.jpg",alt:"A group of students wearing HackUSU shirts",layout:"fullWidth",__imageData:a(9963)})),c.createElement(J.Z,{title:"FAQ",width:"sm"},[{question:"When and where is HackUSU?",answer:"Our 2023 event has already happened, and we're looking forward to next year! HackUSU will be "+H.$3.monthYear+" in Huntsman Hall, Utah State University."},{question:"Are there other things to do besides the competition?",answer:"Yes, we'll have workshops and other activities running the whole time! You'll also be able to network with employers, and get help from experts on other projects."},{question:"Do I need to know how to code?",answer:"Nope, there will be workshops for all skill levels from introductory to graduate level."},{question:"Can I start now?",answer:"You can't use any code that was written before the start of the hackathon. However, you can form your team and begin thinking of ideas now!"},{question:"What is the max team size?",answer:"Each team can have 1 to 4 students. Only team members present at the award ceremony will be eligible to receive prizes."},{question:"Who can attend HackUSU?",answer:"All university or college students and high school seniors are welcome! Participants must be current students or have graduated in the last 12 months. There is no restriction on major."},{question:"Does it cost anything to attend?",answer:"HackUSU is completely free! There's no entry fee, and we'll provide enough food and snacks for the entire 24 hours. How neat is that?"},{question:"Can I stay in the building overnight?",answer:"Absolutely! You can stay up all night working, bring a sleeping bag, or leave to sleep off-campus."}].map(((e,t)=>{let{question:a,answer:o}=e;return c.createElement(n.x,{mb:"xl",key:t},c.createElement(i.D,{order:3},a),c.createElement(l.x,null,o))}))),c.createElement(J.Z,{title:"2023 Sponsors",width:"md"},c.createElement(q.Z,{sponsors:re.b})),c.createElement(R,null))}const le=()=>c.createElement(ie,null)},9329:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEyMDAgMTIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMCwxMjApIj4KICAgICAgICA8cGF0aCBkPSJNMCwwTDAsNDYuMjlDNDcuNzksNjguNDkgMTAzLjU5LDc4LjQ2IDE1OCw3NC4yOUMyMjguMzYsNjguOTIgMjk0LjMzLDQwLjk4IDM2NC44LDM2Ljc5QzQzOC42NCwzMi40MyA1MTIuMzQsNTMuNjcgNTgzLDcyLjA1QzY1Mi4yNyw5MC4wNSA3MjEuMyw5Ni45MyA3OTIuNCw4NS4xM0M4MjguNTUsNzkuMTMgODYyLjI1LDY3LjI5IDg5Ni44NSw1NS43OUM5ODkuNDksMjUgMTExMywtMTQuMjkgMTIwMCw1Mi40N0wxMjAwLDBMMCwwWiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1vcGFjaXR5OjAuMjU7ZmlsbC1ydWxlOm5vbnplcm87IiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMCwxMjApIj4KICAgICAgICA8cGF0aCBkPSJNMCwwTDAsMTUuODFDMTMsMzYuOTIgMjcuNjQsNTYuODYgNDcuNjksNzIuMDVDOTkuNDEsMTExLjI3IDE2NSwxMTEgMjI0LjU4LDkxLjU4QzI1NS43Myw4MS40MyAyODQuNjcsNjUuNTEgMzE0LjI1LDUxLjc4QzM1NS4xNywzMi43OCAzOTguOTgsNS43OCA0NDUuMDgsMi4xMUM0ODEuMzQsLTAuNzQgNTE1Ljk4LDExLjUzIDU0My42OCwzMy42N0M1NzUuNDUsNTkuMDYgNjA2LDk1LjY3IDY0Ny4zMSwxMDYuNjdDNjg3Ljc1LDExNy40NiA3MjguNjYsOTkuOTggNzY2LjQ0LDgyLjM5QzgwNC4yMiw2NC44IDg0MS42LDQzLjM5IDg4My4zNiwzOS4zNEM5NDMuMDksMzMuNDkgOTk2LjY0LDYyLjIyIDEwNTIuMjYsNzguMThDMTA4Mi40Niw4Ni44NCAxMTExLjI2LDg0LjM1IDExMzkuMzUsNzAuNjhDMTE2MS43OCw1OS43OSAxMTg3LjM1LDQzLjc1IDEyMDAsMjEuNDRMMTIwMCwwTDAsMFoiIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtb3BhY2l0eTowLjU7ZmlsbC1ydWxlOm5vbnplcm87IiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMCwxMjApIj4KICAgICAgICA8cGF0aCBkPSJNMCwwTDAsNS42M0MxNDkuOTMsNTkgMzE0LjA5LDcxLjMyIDQ3NS44Myw0Mi41N0M1MTguODMsMzQuOTMgNTYwLjA2LDIyLjQ1IDYwMy40NCwxNi4xMUM2NjIuNDQsNy40OCA3MTUuOTIsMjguMzUgNzY5LDUxLjUxQzgyNy45Myw3Ny4yMiA4ODYsOTUuMjQgOTUxLjIsOTBDMTAzNy43Myw4MyAxMTIzLjY2LDQ0LjI5IDEyMDAsNS4xOUwxMjAwLDBMMCwwWiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87IiAvPgogICAgPC9nPgo8L3N2Zz4="},9409:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/58ec3cac299d48ab1624ec6b7cb1633a/5267c/Mike%20Johnson%20Photo-04439.jpg","srcSet":"/static/58ec3cac299d48ab1624ec6b7cb1633a/7284f/Mike%20Johnson%20Photo-04439.jpg 750w,\\n/static/58ec3cac299d48ab1624ec6b7cb1633a/29ba9/Mike%20Johnson%20Photo-04439.jpg 1080w,\\n/static/58ec3cac299d48ab1624ec6b7cb1633a/c8896/Mike%20Johnson%20Photo-04439.jpg 1366w,\\n/static/58ec3cac299d48ab1624ec6b7cb1633a/5267c/Mike%20Johnson%20Photo-04439.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/58ec3cac299d48ab1624ec6b7cb1633a/57584/Mike%20Johnson%20Photo-04439.webp 750w,\\n/static/58ec3cac299d48ab1624ec6b7cb1633a/984df/Mike%20Johnson%20Photo-04439.webp 1080w,\\n/static/58ec3cac299d48ab1624ec6b7cb1633a/4a276/Mike%20Johnson%20Photo-04439.webp 1366w,\\n/static/58ec3cac299d48ab1624ec6b7cb1633a/9c00f/Mike%20Johnson%20Photo-04439.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.6666666666666666}')},9963:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#c8d8d8","images":{"fallback":{"src":"/static/1f339db27e3cb8327f1e45046ebf0b20/5267c/Mike%20Johnson%20Photo-04404.jpg","srcSet":"/static/1f339db27e3cb8327f1e45046ebf0b20/7284f/Mike%20Johnson%20Photo-04404.jpg 750w,\\n/static/1f339db27e3cb8327f1e45046ebf0b20/29ba9/Mike%20Johnson%20Photo-04404.jpg 1080w,\\n/static/1f339db27e3cb8327f1e45046ebf0b20/c8896/Mike%20Johnson%20Photo-04404.jpg 1366w,\\n/static/1f339db27e3cb8327f1e45046ebf0b20/5267c/Mike%20Johnson%20Photo-04404.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/1f339db27e3cb8327f1e45046ebf0b20/57584/Mike%20Johnson%20Photo-04404.webp 750w,\\n/static/1f339db27e3cb8327f1e45046ebf0b20/984df/Mike%20Johnson%20Photo-04404.webp 1080w,\\n/static/1f339db27e3cb8327f1e45046ebf0b20/4a276/Mike%20Johnson%20Photo-04404.webp 1366w,\\n/static/1f339db27e3cb8327f1e45046ebf0b20/9c00f/Mike%20Johnson%20Photo-04404.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.6666666666666666}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2710df8741943d6dec2f.js.map