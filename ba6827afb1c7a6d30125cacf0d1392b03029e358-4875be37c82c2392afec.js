(self.webpackChunkhackusu_site=self.webpackChunkhackusu_site||[]).push([[887],{1084:function(M,A,D){"use strict";D.d(A,{Z:function(){return N}});var g=D(7294),I=D(3096),t=D.n(I);const e="animate__animated",n="undefined"==typeof window;let w;n||(w=window);const i=({offset:M=150,duration:A=1,style:D,className:I,initiallyVisible:i=!1,animateIn:N,afterAnimatedIn:C,animateOut:T,delay:y=0,animatePreScroll:a=!0,afterAnimatedOut:r,scrollableParentSelector:u,animateOnce:o=!1,children:S})=>{const[E,c]=(0,g.useState)(e),[x,z]=(0,g.useState)({animationDuration:`${A}s`,opacity:i?1:0}),Y=(0,g.useRef)(null),l=(0,g.useRef)(!1),L=(0,g.useRef)({onScreen:!1,inViewport:!1}),j=(0,g.useRef)(void 0),m=(0,g.useRef)(void 0),s=(0,g.useRef)(w),f=(0,g.useCallback)((M=>{let A=0;for(;M&&void 0!==M.offsetTop&&void 0!==M.clientTop;)A+=M.offsetTop+M.clientTop,M=M.offsetParent;return A}),[]),p=(0,g.useCallback)((()=>void 0!==s.current.pageYOffset?s.current.pageYOffset:s.current.scrollTop),[s]),h=(0,g.useCallback)((()=>void 0!==s.current.innerHeight?s.current.innerHeight:s.current.clientHeight),[s]),d=(0,g.useCallback)((()=>p()+M),[M,p]),O=(0,g.useCallback)((()=>p()+h()-M),[M,p,h]),U=(0,g.useCallback)((M=>M>=d()&&M<=O()),[d,O]),b=(0,g.useCallback)((M=>M<d()),[d]),k=(0,g.useCallback)((M=>M>O()),[O]),Z=(0,g.useCallback)(((M,A)=>U(M)||U(A)||b(M)&&k(A)),[U,b,k]),v=(0,g.useCallback)((M=>M<p()),[p]),J=(0,g.useCallback)((M=>M>p()+h()),[p,h]),Q=(0,g.useCallback)(((M,A)=>!v(A)&&!J(M)),[v,J]),W=(0,g.useCallback)((()=>{const M=f(Y.current)-f(s.current),A=M+Y.current.clientHeight;return{inViewport:Z(M,A),onScreen:Q(M,A)}}),[f,Y,Z,Q,s]),V=(0,g.useCallback)(((M,A)=>M.inViewport!==A.inViewport||M.onScreen!==A.onScreen),[]),B=(0,g.useCallback)(((M,D)=>{j.current=setTimeout((()=>{l.current=!0,c(`${e} ${M}`),z({animationDuration:`${A}s`}),m.current=setTimeout(D,1e3*A)}),y)}),[l,y,A]),F=(0,g.useCallback)((M=>{B(N,(()=>{o||(z({animationDuration:`${A}s`,opacity:1}),l.current=!1);const D=W();M&&M(D)}))}),[l,N,o,A,B,W]),H=(0,g.useCallback)((M=>{B(T,(()=>{c(e),z({animationDuration:`${A}s`,opacity:0});const D=W();D.inViewport&&N?F(C):l.current=!1,M&&M(D)}))}),[l,B,N,A,C,F,T,W]),G=(0,g.useCallback)((()=>{if(!l.current){const{current:M}=L,D=W();V(M,D)&&(clearTimeout(j.current),D.onScreen?D.inViewport&&N?F(C):D.onScreen&&M.inViewport&&T&&"1"===Y.current.style.opacity&&H(r):(c(e),z({animationDuration:`${A}s`,opacity:i?1:0})),L.current=D)}}),[C,r,N,F,T,A,i,V,H,W]),R=(0,g.useMemo)((()=>t()((()=>{G()}),50)),[G]);return(0,g.useEffect)((()=>{if(!n){const M=u;return s.current=M?document.querySelector(M):window,s.current&&s.current.addEventListener?s.current.addEventListener("scroll",R):console.warn(`Cannot find element by locator: ${u}`),a&&G(),()=>{clearTimeout(j.current),clearTimeout(m.current),window&&window.removeEventListener&&window.removeEventListener("scroll",R)}}}),[G,u,s,R,a]),g.createElement("div",{ref:Y,className:I?`${I} ${E}`:E,style:Object.assign({},x,D)},S)};var N=M=>{let{children:A,...D}=M;return g.createElement(i,{duration:.5,animateIn:"animate__fadeInUp",animateOnce:!0},A)}},9219:function(M,A,D){"use strict";var g=D(47),I=D(2850),t=D(9724),e=D(4331),n=D(7294);const w=(0,g.k)((M=>({container:{backgroundImage:"url("+D(5307).Z+")",backgroundColor:M.colors.navy[8]},text:{color:M.white,paddingTop:5*M.spacing.xl,paddingBottom:2*M.spacing.xl,letterSpacing:"0.05em",fontSize:2*M.fontSizes.xl,textAlign:"center",[M.fn.smallerThan("sm")]:{fontSize:1.5*M.fontSizes.xl}}})));A.Z=M=>{let{children:A}=M;const{classes:D}=w();return n.createElement(I.x,{className:D.container},n.createElement(t.W,null,n.createElement(e.D,{order:1,className:D.text},A)))}},3096:function(M,A,D){var g="Expected a function",I=NaN,t="[object Symbol]",e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,i=/^0o[0-7]+$/i,N=parseInt,C="object"==typeof D.g&&D.g&&D.g.Object===Object&&D.g,T="object"==typeof self&&self&&self.Object===Object&&self,y=C||T||Function("return this")(),a=Object.prototype.toString,r=Math.max,u=Math.min,o=function(){return y.Date.now()};function S(M,A,D){var I,t,e,n,w,i,N=0,C=!1,T=!1,y=!0;if("function"!=typeof M)throw new TypeError(g);function a(A){var D=I,g=t;return I=t=void 0,N=A,n=M.apply(g,D)}function S(M){var D=M-i;return void 0===i||D>=A||D<0||T&&M-N>=e}function x(){var M=o();if(S(M))return z(M);w=setTimeout(x,function(M){var D=A-(M-i);return T?u(D,e-(M-N)):D}(M))}function z(M){return w=void 0,y&&I?a(M):(I=t=void 0,n)}function Y(){var M=o(),D=S(M);if(I=arguments,t=this,i=M,D){if(void 0===w)return function(M){return N=M,w=setTimeout(x,A),C?a(M):n}(i);if(T)return w=setTimeout(x,A),a(i)}return void 0===w&&(w=setTimeout(x,A)),n}return A=c(A)||0,E(D)&&(C=!!D.leading,e=(T="maxWait"in D)?r(c(D.maxWait)||0,A):e,y="trailing"in D?!!D.trailing:y),Y.cancel=function(){void 0!==w&&clearTimeout(w),N=0,I=i=t=w=void 0},Y.flush=function(){return void 0===w?n:z(o())},Y}function E(M){var A=typeof M;return!!M&&("object"==A||"function"==A)}function c(M){if("number"==typeof M)return M;if(function(M){return"symbol"==typeof M||function(M){return!!M&&"object"==typeof M}(M)&&a.call(M)==t}(M))return I;if(E(M)){var A="function"==typeof M.valueOf?M.valueOf():M;M=E(A)?A+"":A}if("string"!=typeof M)return 0===M?M:+M;M=M.replace(e,"");var D=w.test(M);return D||i.test(M)?N(M.slice(2),D?2:8):n.test(M)?I:+M}M.exports=function(M,A,D){var I=!0,t=!0;if("function"!=typeof M)throw new TypeError(g);return E(D)&&(I="leading"in D?!!D.leading:I,t="trailing"in D?!!D.trailing:t),S(M,A,{leading:I,maxWait:A,trailing:t})}},5307:function(M,A){"use strict";A.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDQgMzA0IiB3aWR0aD0iMzA0IiBoZWlnaHQ9IjMwNCI+PHBhdGggZmlsbD0iIzFmMzk1NyIgZD0iTTQ0LjEgMjI0YTUgNSAwIDEgMSAwIDJIMHYtMmg0NC4xem0xNjAgNDhhNSA1IDAgMSAxIDAgMkg4MnYtMmgxMjIuMXptNTcuOC00NmE1IDUgMCAxIDEgMC0ySDMwNHYyaC00Mi4xem0wIDE2YTUgNSAwIDEgMSAwLTJIMzA0djJoLTQyLjF6bTYuMi0xMTRhNSA1IDAgMSAxIDAgMmgtODYuMmE1IDUgMCAxIDEgMC0yaDg2LjJ6bS0yNTYtNDhhNSA1IDAgMSAxIDAgMkgwdi0yaDEyLjF6bTE4NS44IDM0YTUgNSAwIDEgMSAwLTJoODYuMmE1IDUgMCAxIDEgMCAyaC04Ni4yek0yNTggMTIuMWE1IDUgMCAxIDEtMiAwVjBoMnYxMi4xem0tNjQgMjA4YTUgNSAwIDEgMS0yIDB2LTU0LjJhNSA1IDAgMSAxIDIgMHY1NC4yem00OC0xOTguMlY4MGg2MnYyaC02NFYyMS45YTUgNSAwIDEgMSAyIDB6bTE2IDE2VjY0aDQ2djJoLTQ4VjM3LjlhNSA1IDAgMSAxIDIgMHptLTEyOCA5NlYyMDhoMTZ2MTIuMWE1IDUgMCAxIDEtMiAwVjIxMGgtMTZ2LTc2LjFhNSA1IDAgMSAxIDIgMHptLTUuOS0yMS45YTUgNSAwIDEgMSAwIDJIMTE0djQ4SDg1LjlhNSA1IDAgMSAxIDAtMkgxMTJ2LTQ4aDEyLjF6bS02LjIgMTMwYTUgNSAwIDEgMSAwLTJIMTc2di03NC4xYTUgNSAwIDEgMSAyIDBWMjQyaC02MC4xem0tMTYtNjRhNSA1IDAgMSAxIDAtMkgxMTR2NDhoMTAuMWE1IDUgMCAxIDEgMCAySDExMnYtNDhoLTEwLjF6TTY2IDI4NC4xYTUgNSAwIDEgMS0yIDBWMjc0SDUwdjMwaC0ydi0zMmgxOHYxMi4xek0yMzYuMSAxNzZhNSA1IDAgMSAxIDAgMkgyMjZ2OTRoNDh2MzJoLTJ2LTMwaC00OHYtOThoMTIuMXptMjUuOC0zMGE1IDUgMCAxIDEgMC0ySDI3NHY0NC4xYTUgNSAwIDEgMS0yIDBWMTQ2aC0xMC4xem0tNjQgOTZhNSA1IDAgMSAxIDAtMkgyMDh2LTgwaDE2di0xNGgtNDIuMWE1IDUgMCAxIDEgMC0ySDIyNnYxOGgtMTZ2ODBoLTEyLjF6bTg2LjItMjEwYTUgNSAwIDEgMSAwIDJIMjcyVjBoMnYzMmgxMC4xek05OCAxMDEuOVYxNDZINTMuOWE1IDUgMCAxIDEgMC0ySDk2di00Mi4xYTUgNSAwIDEgMSAyIDB6TTUzLjkgMzRhNSA1IDAgMSAxIDAtMkg4MFYwaDJ2MzRINTMuOXptNjAuMSAzLjlWNjZIODJ2NjRINjkuOWE1IDUgMCAxIDEgMC0ySDgwVjY0aDMyVjM3LjlhNSA1IDAgMSAxIDIgMHpNMTAxLjkgODJhNSA1IDAgMSAxIDAtMkgxMjhWMzcuOWE1IDUgMCAxIDEgMiAwVjgyaC0yOC4xem0xNi02NGE1IDUgMCAxIDEgMC0ySDE0NnY0NC4xYTUgNSAwIDEgMS0yIDBWMThoLTI2LjF6bTEwMi4yIDI3MGE1IDUgMCAxIDEgMCAySDk4djE0aC0ydi0xNmgxMjQuMXpNMjQyIDE0OS45VjE2MGgxNnYzNGgtMTZ2NjJoNDh2NDhoLTJ2LTQ2aC00OHYtNjZoMTZ2LTMwaC0xNnYtMTIuMWE1IDUgMCAxIDEgMiAwek01My45IDE4YTUgNSAwIDEgMSAwLTJINjRWMkg0OFYwaDE4djE4SDUzLjl6bTExMiAzMmE1IDUgMCAxIDEgMC0ySDE5MlYwaDUwdjJoLTQ4djQ4aC0yOC4xem0tNDgtNDhhNSA1IDAgMCAxLTkuOC0yaDIuMDdhMyAzIDAgMSAwIDUuNjYgMEgxNzh2MzRoLTE4VjIxLjlhNSA1IDAgMSAxIDIgMFYzMmgxNFYyaC01OC4xem0wIDk2YTUgNSAwIDEgMSAwLTJIMTM3bDMyLTMyaDM5VjIxLjlhNSA1IDAgMSAxIDIgMFY2NmgtNDAuMTdsLTMyIDMySDExNy45em0yOC4xIDkwLjFhNSA1IDAgMSAxLTIgMHYtNzYuNTFMMTc1LjU5IDgwSDIyNFYyMS45YTUgNSAwIDEgMSAyIDBWODJoLTQ5LjU5TDE0NiAxMTIuNDF2NzUuNjl6bTE2IDMyYTUgNSAwIDEgMS0yIDB2LTk5LjUxTDE4NC41OSA5NkgzMDAuMWE1IDUgMCAwIDEgMy45LTMuOXYyLjA3YTMgMyAwIDAgMCAwIDUuNjZ2Mi4wN2E1IDUgMCAwIDEtMy45LTMuOUgxODUuNDFMMTYyIDEyMS40MXY5OC42OXptLTE0NC02NGE1IDUgMCAxIDEtMiAwdi0zLjUxbDQ4LTQ4VjQ4aDMyVjBoMnY1MEg2NnY1NS40MWwtNDggNDh2Mi42OXpNNTAgNTMuOXY0My41MWwtNDggNDhWMjA4aDI2LjFhNSA1IDAgMSAxIDAgMkgwdi02NS40MWw0OC00OFY1My45YTUgNSAwIDEgMSAyIDB6bS0xNiAxNlY4OS40MWwtMzQgMzR2LTIuODJsMzItMzJWNjkuOWE1IDUgMCAxIDEgMiAwek0xMi4xIDMyYTUgNSAwIDEgMSAwIDJIOS40MUwwIDQzLjQxVjQwLjZMOC41OSAzMmgzLjUxem0yNjUuOCAxOGE1IDUgMCAxIDEgMC0yaDE4LjY5bDcuNDEtNy40MXYyLjgyTDI5Ny40MSA1MEgyNzcuOXptLTE2IDE2MGE1IDUgMCAxIDEgMC0ySDI4OHYtNzEuNDFsMTYtMTZ2Mi44MmwtMTQgMTRWMjEwaC0yOC4xem0tMjA4IDMyYTUgNSAwIDEgMSAwLTJINjR2LTIyLjU5TDQwLjU5IDE5NEgyMS45YTUgNSAwIDEgMSAwLTJINDEuNDFMNjYgMjE2LjU5VjI0Mkg1My45em0xNTAuMiAxNGE1IDUgMCAxIDEgMCAySDk2di01Ni42TDU2LjYgMTYySDM3LjlhNSA1IDAgMSAxIDAtMmgxOS41TDk4IDIwMC42VjI1NmgxMDYuMXptLTE1MC4yIDJhNSA1IDAgMSAxIDAtMkg4MHYtNDYuNTlMNDguNTkgMTc4SDIxLjlhNSA1IDAgMSAxIDAtMkg0OS40MUw4MiAyMDguNTlWMjU4SDUzLjl6TTM0IDM5Ljh2MS42MUw5LjQxIDY2SDB2LTJoOC41OUwzMiA0MC41OVYwaDJ2MzkuOHpNMiAzMDAuMWE1IDUgMCAwIDEgMy45IDMuOUgzLjgzQTMgMyAwIDAgMCAwIDMwMi4xN1YyNTZoMTh2NDhoLTJ2LTQ2SDJ2NDIuMXpNMzQgMjQxdjYzaC0ydi02Mkgwdi0yaDM0djF6TTE3IDE4SDB2LTJoMTZWMGgydjE4aC0xem0yNzMtMmgxNHYyaC0xNlYwaDJ2MTZ6bS0zMiAyNzN2MTVoLTJ2LTE0aC0xNHYxNGgtMnYtMTZoMTh2MXpNMCA5Mi4xQTUuMDIgNS4wMiAwIDAgMSA2IDk3YTUgNSAwIDAgMS02IDQuOXYtMi4wN2EzIDMgMCAxIDAgMC01LjY2VjkyLjF6TTgwIDI3MmgydjMyaC0ydi0zMnptMzcuOSAzMmgtMi4wN2EzIDMgMCAwIDAtNS42NiAwaC0yLjA3YTUgNSAwIDAgMSA5LjggMHpNNS45IDBBNS4wMiA1LjAyIDAgMCAxIDAgNS45VjMuODNBMyAzIDAgMCAwIDMuODMgMEg1Ljl6bTI5NC4yIDBoMi4wN0EzIDMgMCAwIDAgMzA0IDMuODNWNS45YTUgNSAwIDAgMS0zLjktNS45em0zLjkgMzAwLjF2Mi4wN2EzIDMgMCAwIDAtMS44MyAxLjgzaC0yLjA3YTUgNSAwIDAgMSAzLjktMy45ek05NyAxMDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tNDggMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMzItMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgOTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNDRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS05NiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptOTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi02NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTMyIDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2IDBhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNNDkgMzZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMzIgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMzMgNjhhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNi00OGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMjQwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0tMTYtNjRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptLTE2LTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptODAtMTc2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYgMGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNi0xNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTMyIDQ4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTYtMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wLTMyYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMTEyIDE3NmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bS0xNiAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAgMTZhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0wIDE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgMTgwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnptMCAxNmEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTAtMzJhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0xNiAwYTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnpNMTcgODRhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2em0zMiA2NGEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTE2LTE2YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNnoiPjwvcGF0aD48L3N2Zz4="}}]);
//# sourceMappingURL=ba6827afb1c7a6d30125cacf0d1392b03029e358-4875be37c82c2392afec.js.map