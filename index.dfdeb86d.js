import{g as n,h as o,i,m as a,n as e,d as l,u as t,B as s,e as d,I as r,p as c,L as g,j as u}from"./index.2977117e.js";const[p,b]=n("button");const f=u(l({name:p,props:o({},i,{tag:a("button"),text:String,icon:String,type:a("default"),size:a("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:a("button"),loadingSize:e,loadingText:String,loadingType:String,iconPosition:a("left")}),emits:["click"],setup(n,{emit:o,slots:i}){const a=t(),e=()=>n.loading?i.loading?i.loading():d(g,{size:n.loadingSize,type:n.loadingType,class:b("loading")},null):i.icon?d("div",{class:b("icon")},[i.icon()]):n.icon?d(r,{name:n.icon,class:b("icon"),classPrefix:n.iconPrefix},null):void 0,l=()=>{let o;if(o=n.loading?n.loadingText:i.default?i.default():n.text,o)return d("span",{class:b("text")},[o])},u=()=>{const{color:o,plain:i}=n;if(o){const n={color:i?o:"white"};return i||(n.background=o),o.includes("gradient")?n.border=0:n.borderColor=o,n}},p=i=>{n.loading?c(i):n.disabled||(o("click",i),a())};return()=>{const{tag:o,type:i,size:a,block:t,round:r,plain:c,square:g,loading:f,disabled:x,hairline:y,nativeType:B,iconPosition:m}=n,S=[b([i,a,{plain:c,block:t,round:r,square:g,loading:f,disabled:x,hairline:y}]),{[s]:y}];return d(o,{type:B,class:S,style:u(),disabled:x,onClick:p},{default:()=>[d("div",{class:b("content")},["left"===m&&e(),l(),"right"===m&&e()])]})}}}));export{f as B};
