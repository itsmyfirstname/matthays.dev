import{l as i,i as c,u as g,b as f,ag as m,O as k,ah as V,ai as O,aj as _,f as x,z as R,A as T,B as I,D as U,E as D,g as F,j as z,n as J,a7 as H,X as W,G as X,H as Y,J as q,L as K,M as Q,s as Z}from"./index.c20184be.js";const ie=i()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...c()},setup(e,n){let{slots:t}=n;return g(()=>f(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)),{}}}),y=["sm","md","lg","xl","xxl"],h=(()=>y.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),P=(()=>y.reduce((e,n)=>(e["offset"+m(n)]={type:[String,Number],default:null},e),{}))(),j=(()=>y.reduce((e,n)=>(e["order"+m(n)]={type:[String,Number],default:null},e),{}))(),b={col:Object.keys(h),offset:Object.keys(P),order:Object.keys(j)};function p(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const ee=["auto","start","end","center","baseline","stretch"],ce=i()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...h,offset:{type:[String,Number],default:null},...P,order:{type:[String,Number],default:null},...j,alignSelf:{type:String,default:null,validator:e=>ee.includes(e)},...c()},setup(e,n){let{slots:t}=n;const s=k(()=>{const a=[];let l;for(l in b)b[l].forEach(r=>{const u=e[r],d=p(l,r,u);d&&a.push(d)});const o=a.some(r=>r.startsWith("v-col-"));return a.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return V(e.tag,{class:s.value},(a=t.default)==null?void 0:a.call(t))}}}),te=["sm","md","lg","xl","xxl"],v=["start","end","center"],L=["space-between","space-around","space-evenly"];function S(e,n){return te.reduce((t,s)=>(t[e+m(s)]=n(),t),{})}const ne=[...v,"baseline","stretch"],N=e=>ne.includes(e),$=S("align",()=>({type:String,default:null,validator:N})),ae=[...v,...L],E=e=>ae.includes(e),B=S("justify",()=>({type:String,default:null,validator:E})),se=[...v,...L,"stretch"],w=e=>se.includes(e),A=S("alignContent",()=>({type:String,default:null,validator:w})),C={align:Object.keys($),justify:Object.keys(B),alignContent:Object.keys(A)},le={align:"align",justify:"justify",alignContent:"align-content"};function oe(e,n,t){let s=le[e];if(t!=null){if(n){const a=n.replace(e,"");s+=`-${a}`}return s+=`-${t}`,s.toLowerCase()}}const de=i()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:N},...$,justify:{type:String,default:null,validator:E},...B,alignContent:{type:String,default:null,validator:w},...A,...c()},setup(e,n){let{slots:t}=n;const s=k(()=>{const a=[];let l;for(l in C)C[l].forEach(o=>{const r=e[o],u=oe(l,o,r);u&&a.push(u)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return V(e.tag,{class:["v-row",s.value]},(a=t.default)==null?void 0:a.call(t))}}});const fe=i()({name:"VMain",props:{scrollable:Boolean,...c({tag:"main"})},setup(e,n){let{slots:t}=n;const{mainStyles:s}=O(),{ssrBootStyles:a}=_();return g(()=>f(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[s.value,a.value]},{default:()=>{var l,o;return[e.scrollable?f("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(o=t.default)==null?void 0:o.call(t)]}})),{}}});const re=x({color:String,...R(),...T(),...I(),...U(),...D(),...F(),...c(),...z()},"v-sheet"),ge=i()({name:"VSheet",props:{...re()},setup(e,n){let{slots:t}=n;const{themeClasses:s}=J(e),{backgroundColorClasses:a,backgroundColorStyles:l}=H(W(e,"color")),{borderClasses:o}=X(e),{dimensionStyles:r}=Y(e),{elevationClasses:u}=q(e),{locationStyles:d}=K(e),{positionClasses:G}=Q(e),{roundedClasses:M}=Z(e);return g(()=>f(e.tag,{class:["v-sheet",s.value,a.value,o.value,u.value,G.value,M.value],style:[l.value,r.value,d.value]},t)),{}}});export{ie as V,de as a,ce as b,ge as c,fe as d};
