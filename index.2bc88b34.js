import{g as o,n as r,t as a,m as s,d as e,r as i,S as l,q as n,H as t,T as d,s as c,U as u,V as v,e as g,W as f,X as h,Y as m,Z as p,I as w,j as S}from"./index.799f4c08.js";const[y,z]=o("image");const x=S(e({name:y,props:{src:String,alt:String,fit:String,position:String,round:Boolean,width:r,height:r,radius:r,lazyLoad:Boolean,iconSize:r,showError:a,errorIcon:s("photo-fail"),iconPrefix:String,showLoading:a,loadingIcon:s("photo")},emits:["load","error"],setup(o,{emit:r,slots:a}){const s=i(!1),e=i(!0),S=i(),{$Lazyload:y}=l().proxy,x=n((()=>{const r={width:t(o.width),height:t(o.height)};return d(o.radius)&&(r.overflow="hidden",r.borderRadius=t(o.radius)),r}));c((()=>o.src),(()=>{s.value=!1,e.value=!0}));const I=o=>{e.value=!1,r("load",o)},L=o=>{s.value=!0,e.value=!1,r("error",o)},$=(r,a,s)=>s?s():g(w,{name:r,size:o.iconSize,class:a,classPrefix:o.iconPrefix},null),j=()=>{if(s.value||!o.src)return;const r={alt:o.alt,class:z("img"),style:{objectFit:o.fit,objectPosition:o.position}};return o.lazyLoad?f(g("img",m({ref:S},r),null),[[h("lazy"),o.src]]):g("img",m({src:o.src,onLoad:I,onError:L},r),null)},P=({el:o})=>{const r=()=>{o===S.value&&e.value&&I()};S.value?r():p(r)},b=({el:o})=>{o!==S.value||s.value||L()};return y&&u&&(y.$on("loaded",P),y.$on("error",b),v((()=>{y.$off("loaded",P),y.$off("error",b)}))),()=>{var r;return g("div",{class:z({round:o.round}),style:x.value},[j(),e.value&&o.showLoading?g("div",{class:z("loading")},[$(o.loadingIcon,z("loading-icon"),a.loading)]):s.value&&o.showError?g("div",{class:z("error")},[$(o.errorIcon,z("error-icon"),a.error)]):void 0,null==(r=a.default)?void 0:r.call(a)])}}}));export{x as I};
