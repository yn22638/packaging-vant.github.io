var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,n=(e,l)=>{for(var a in l||(l={}))u.call(l,a)&&s(e,a,l[a]);if(t)for(var a of t(l))o.call(l,a)&&s(e,a,l[a]);return e},d=(e,t)=>l(e,a(t));import{_ as r,g as i,A as c,C as p,o as f,c as m,a as v,P as h,Q as b,aM as x,R as _,aX as g,b as y,w as V,E as C,F as U,D as k}from"./index.51c74a41.js";import{C as w,a as O}from"./index.d7e35be7.js";const j={class:"rate"},D=["src","data-index","onClick"];var I=r(i({props:{count:{default:5},width:{default:20},height:{default:20},emptyUrl:{default:""},fillUrl:null,isDisable:{type:Boolean,default:!1}},setup(e){const l=e,a=c({emptyUrl:l.emptyUrl||"./stars-empty.45aba80c.png",fillUrl:l.fillUrl||"./stars-fill.97668d0e.png",isChecked:!1}),t=c([]),u=c(0),o=c(0),s=c(0),r=c(),i=c(),y=c(0),V=c(0),C=e=>{e&&1===e.touches.length&&(o.value=r.value.offsetWidth,y.value=i.value[0].offsetWidth,u.value=e.touches[0].clientX)},U=e=>{if(s.value=0,e){let a=parseInt(""+(e.touches[0].clientX-u.value)/o.value*(l.count+2));if(a>0){const e=a>l.count+2?l.count+2:a;s.value=V.value+e}else V.value=parseInt(""+u.value/y.value),s.value=a+V.value>l.count+2?l.count+2:a+V.value}t.value=t.value.map(((e,l)=>d(n({},e),{isChecked:s.value>=l+1})))};return p((()=>{for(let e=0;e<l.count;e++){let u=n({},a.value);l.isDisable&&(u=d(n({},u),{isChecked:e<3})),t.value.push(u)}})),(a,u)=>(f(),m("div",j,[v("div",{class:x(["inline-flex","items-center",""+(e.isDisable?"rate-disable":"rate-select")]),ref_key:"rateRef",ref:r},[(f(!0),m(h,null,b(t.value,((a,u)=>(f(),m("img",{ref_for:!0,ref_key:"rateIconRef",ref:i,src:a.isChecked?a.fillUrl:a.emptyUrl,key:u,class:x(["px-3px","box-content"]),style:_({width:`${e.width}px`,height:`${e.height}px`}),"data-index":u,onTouchstart:C,onTouchmove:U,onClick:e=>{return a=u,void(l.isDisable||(a||!t.value[0].isChecked||t.value[1].isChecked||g("最低给一颗星呢亲~"),t.value=t.value.map(((e,l)=>d(n({},e),{isChecked:l<=a})))));var a}},null,44,D)))),128))],2)]))}}),[["__scopeId","data-v-190f382d"]]);const P=e=>(C("data-v-4377c9f4"),e=e(),U(),e),R={class:"min-h-full rate__demo"},X=P((()=>v("div",{class:"px-16px pt-24px"},[v("p",{class:"font-bold text-18px rate__title"},"m-rate"),v("p",{class:"pt-12px pb-16px text-13px leading-20px rate__introduce"}," 介绍：通过不同的icon，来实现各种评分效果，具体icon有哪些，可以看[icon组件]，m-rate组件可以动态控制评分的颜色、样式、大小、数量、具体快来试试看吧！ 由于 iconfont 有问题，所有图标暂时用图片，但是图片对比 css 生成的图标，体积大很多，所以后期会改成 iconfont 图标 ")],-1))),$=P((()=>v("p",{class:"mb-4px"},"下面是评分组件的默认效果",-1))),E=P((()=>v("p",{class:"mb-4px"},"这里默认count给了8",-1))),T=P((()=>v("p",{class:"mb-4px"},"这里宽高分别给了30",-1))),W=P((()=>v("p",{class:"mb-4px"},"点赞评分效果",-1))),A=P((()=>v("p",{class:"mb-4px"},"花朵好评效果",-1))),B=P((()=>v("p",{class:"mb-4px"},"禁用",-1))),F=P((()=>v("p",{class:"mb-4px"},"正在开发中~",-1)));var M=r(i({setup(e){const l=c("1"),a=e=>{l.value=`${e}`};return(e,t)=>{const u=w,o=O;return f(),m("div",R,[X,y(o,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),accordion:"",onChange:a},{default:V((()=>[y(u,{title:"默认效果",name:"1"},{default:V((()=>[$,y(I)])),_:1})])),_:1},8,["modelValue"]),y(o,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),accordion:"",onChange:a},{default:V((()=>[y(u,{title:"自定义数量",name:"2"},{default:V((()=>[E,y(I,{count:8})])),_:1})])),_:1},8,["modelValue"]),y(o,{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e),accordion:"",onChange:a},{default:V((()=>[y(u,{title:"自定义宽高",name:"3"},{default:V((()=>[T,y(I,{height:30,width:30})])),_:1})])),_:1},8,["modelValue"]),y(o,{modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=e=>l.value=e),accordion:"",onChange:a},{default:V((()=>[y(u,{title:"自定义评分-点赞",name:"5"},{default:V((()=>[W,y(I,{"empty-url":k("./fabulous-empty.a0d41501.png"),"fill-url":k("./fabulous-fill.2a94a932.png")},null,8,["empty-url","fill-url"])])),_:1})])),_:1},8,["modelValue"]),y(o,{modelValue:l.value,"onUpdate:modelValue":t[4]||(t[4]=e=>l.value=e),accordion:"",onChange:a},{default:V((()=>[y(u,{title:"自定义评分-花朵",name:"6"},{default:V((()=>[A,y(I,{"empty-url":k("./flower-empty.11d7f1de.png"),"fill-url":k("./flower-fill.308a5fa0.png")},null,8,["empty-url","fill-url"])])),_:1})])),_:1},8,["modelValue"]),y(o,{modelValue:l.value,"onUpdate:modelValue":t[5]||(t[5]=e=>l.value=e),accordion:"",onChange:a},{default:V((()=>[y(u,{title:"禁用状态",name:"7"},{default:V((()=>[B,y(I,{"is-disable":""})])),_:1})])),_:1},8,["modelValue"]),y(o,{modelValue:l.value,"onUpdate:modelValue":t[6]||(t[6]=e=>l.value=e),accordion:"",onChange:a},{default:V((()=>[y(u,{title:"自定义颜色",name:"4"},{default:V((()=>[F])),_:1})])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-4377c9f4"]]);export{M as default};
