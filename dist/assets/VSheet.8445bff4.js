import{m as c,u as S,g as O,a as R,b as T,c as _,h as I,d as U,e as M}from"./color.0572ba87.js";import{g as d,b,_ as f,e as k,h,p,m as F,d as D,t as z}from"./index.33fd6a90.js";import{m as J,d as W,e as Y,u as q,f as H,g as K}from"./position.142dff95.js";const ie=d()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...c()},setup(e,n){let{slots:t}=n;return S(()=>b(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)),{}}}),g=["sm","md","lg","xl","xxl"],V=(()=>g.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),P=(()=>g.reduce((e,n)=>(e["offset"+f(n)]={type:[String,Number],default:null},e),{}))(),N=(()=>g.reduce((e,n)=>(e["order"+f(n)]={type:[String,Number],default:null},e),{}))(),v={col:Object.keys(V),offset:Object.keys(P),order:Object.keys(N)};function Q(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const s=n.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const X=["auto","start","end","center","baseline","stretch"],ce=d()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...V,offset:{type:[String,Number],default:null},...P,order:{type:[String,Number],default:null},...N,alignSelf:{type:String,default:null,validator:e=>X.includes(e)},...c()},setup(e,n){let{slots:t}=n;const a=k(()=>{const s=[];let o;for(o in v)v[o].forEach(l=>{const u=e[l],i=Q(o,l,u);i&&s.push(i)});const r=s.some(l=>l.startsWith("v-col-"));return s.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return h(e.tag,{class:a.value},(s=t.default)==null?void 0:s.call(t))}}}),Z=["sm","md","lg","xl","xxl"],m=["start","end","center"],j=["space-between","space-around","space-evenly"];function y(e,n){return Z.reduce((t,a)=>(t[e+f(a)]=n(),t),{})}const ee=[...m,"baseline","stretch"],L=e=>ee.includes(e),$=y("align",()=>({type:String,default:null,validator:L})),te=[...m,...j],E=e=>te.includes(e),w=y("justify",()=>({type:String,default:null,validator:E})),ne=[...m,...j,"stretch"],A=e=>ne.includes(e),B=y("alignContent",()=>({type:String,default:null,validator:A})),C={align:Object.keys($),justify:Object.keys(w),alignContent:Object.keys(B)},se={align:"align",justify:"justify",alignContent:"align-content"};function ae(e,n,t){let a=se[e];if(t!=null){if(n){const s=n.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const de=d()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:L},...$,justify:{type:String,default:null,validator:E},...w,alignContent:{type:String,default:null,validator:A},...B,...c()},setup(e,n){let{slots:t}=n;const a=k(()=>{const s=[];let o;for(o in C)C[o].forEach(r=>{const l=e[r],u=ae(o,r,l);u&&s.push(u)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return h(e.tag,{class:["v-row",a.value]},(s=t.default)==null?void 0:s.call(t))}}});const oe=p({color:String,...J(),...O(),...R(),...W(),...Y(),...T(),...c(),...F()},"v-sheet"),fe=d()({name:"VSheet",props:{...oe()},setup(e,n){let{slots:t}=n;const{themeClasses:a}=D(e),{backgroundColorClasses:s,backgroundColorStyles:o}=_(z(e,"color")),{borderClasses:r}=q(e),{dimensionStyles:l}=I(e),{elevationClasses:u}=U(e),{locationStyles:i}=H(e),{positionClasses:x}=K(e),{roundedClasses:G}=M(e);return S(()=>b(e.tag,{class:["v-sheet",a.value,s.value,r.value,u.value,x.value,G.value],style:[o.value,l.value,i.value]},t)),{}}});export{ie as V,de as a,ce as b,fe as c};