import{_ as a,g as l,A as e,o as i,c as o,a as t,b as n,w as d,P as u,E as c,F as s,d as r}from"./index.78e2a79d.js";import{C as m,a as p}from"./index.a830dfb7.js";import{B as v}from"./index.80826647.js";import{M as f}from"./index.accc8c85.js";const _=a=>(c("data-v-3384230e"),a=a(),s(),a),g={class:"min-h-full loading__demo"},x=_((()=>t("div",{class:"px-16px pt-24px"},[t("p",{class:"font-bold text-18px loading__title"},"m-loading"),t("p",{class:"pt-12px pb-16px text-13px leading-20px loading__introduce"},"介绍：纯手动封装，通过背景透明度，来实现底色效果，在运动 icon，加上animation动画实现动态效果，还可以自定义加载文字，主要运动场景：当我们点击保存或者局部提交，更改数据的时候，网不好或者后端响应慢，那么使用这个加载中的状态，不会出现点击穿透,最后加载完成记得关闭 loading ")],-1))),k=_((()=>t("p",null,"全屏加载状态 ，点击看效果",-1))),y=r("click"),h=_((()=>t("p",null,"点击看效果",-1))),C=r("set click"),z=_((()=>t("p",null,"下面按钮数字对应不同的加载时间，单位为秒，快来点击看效果吧！",-1))),M=r("0.5s click"),b=r("3s click"),w=r("6s click"),j=r("10s click"),F=_((()=>t("p",null,"点击看效果",-1))),I=r("set click"),T=_((()=>t("p",null,"点击看效果",-1))),$=r("set click"),E=_((()=>t("p",null,"点击看效果",-1))),V=r("set click");var B=a(l({setup(a){const l=e(!1),c=e("1"),s=e(void 0),r=e(void 0),_=e(void 0),B=e(void 0),A=a=>{c.value=`${a}`},P=()=>{K(),J(2e3)},U=()=>{K(),s.value="你好，我是自定义标题哈",J(2e3)},q=()=>{K(),_.value="#5ac725",r.value="#f9ae3d",J(2e3)},D=()=>{K();const a=["loading-four-625c1m9l","loading-two","loading-one","loading","loading-three"],l=Math.floor(Math.random()*a.length);_.value=L(),r.value=L(),B.value=a[l],J(1e3)},G=()=>{K(),_.value="#00BFFF",r.value="#90EE90",B.value="loading-four-625c1m9l",J(2e3)},H=a=>{K(),J(100*a)},J=a=>{l.value=!0,setTimeout((()=>{l.value=!1}),a)},K=()=>{s.value=void 0,_.value=void 0,r.value=void 0,B.value=void 0},L=()=>`rgb(${Math.floor(256*Math.random())},${Math.floor(256*Math.random())},${Math.floor(256*Math.random())})`;return(a,e)=>{const J=v,K=m,L=p;return i(),o(u,null,[t("div",g,[x,n(L,{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=a=>c.value=a),accordion:"",onChange:A},{default:d((()=>[n(K,{title:"默认加载",name:"1"},{default:d((()=>[k,n(J,{type:"primary",size:"mini",onClick:P},{default:d((()=>[y])),_:1})])),_:1}),n(K,{title:"自定义加载标题",name:"2"},{default:d((()=>[h,n(J,{type:"primary",size:"mini",onClick:U},{default:d((()=>[C])),_:1})])),_:1}),n(K,{title:"自定义加载时间",name:"3"},{default:d((()=>[z,n(J,{type:"primary",size:"mini",onClick:e[0]||(e[0]=a=>H(5))},{default:d((()=>[M])),_:1}),n(J,{type:"success",size:"mini",onClick:e[1]||(e[1]=a=>H(30))},{default:d((()=>[b])),_:1}),n(J,{type:"danger",size:"mini",onClick:e[2]||(e[2]=a=>H(60))},{default:d((()=>[w])),_:1}),n(J,{type:"warning",size:"mini",onClick:e[3]||(e[3]=a=>H(100))},{default:d((()=>[j])),_:1})])),_:1}),n(K,{title:"自定义Icon & Text 颜色",name:"4"},{default:d((()=>[F,n(J,{type:"primary",size:"mini",onClick:q},{default:d((()=>[I])),_:1})])),_:1}),n(K,{title:"自定义加载Icon",name:"5"},{default:d((()=>[T,n(J,{type:"primary",size:"mini",onClick:G},{default:d((()=>[$])),_:1})])),_:1}),n(K,{title:"随机加载Icon & 随机颜色",name:"6"},{default:d((()=>[E,n(J,{type:"primary",size:"mini",onClick:D},{default:d((()=>[V])),_:1})])),_:1})])),_:1},8,["modelValue"])]),n(f,{show:l.value,loadingText:s.value,"loading-icon-color":r.value,"loading-text-color":_.value,name:B.value},null,8,["show","loadingText","loading-icon-color","loading-text-color","name"])],64)}}}),[["__scopeId","data-v-3384230e"]]);export{B as default};
