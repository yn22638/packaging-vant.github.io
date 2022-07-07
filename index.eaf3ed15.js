import{_ as a,g as l,b2 as e,A as s,j as o,o as t,c as d,a as r,R as p,D as c,aA as u,d as n,az as x,Z as i,C as v,b as f,E as g,F as b}from"./index.2cddf1de.js";const h={class:"relative"};var _=a(l({props:{height:{default:4},loadState:{default:0},groundColor:{default:"#ebedf0"},loadGroundColor:{default:"#1989fa"}},setup(a){const l=a,{loadState:v}=e(l),f=s(),g=s(),b=s(0);return o(v,(()=>{i((()=>{const a=f.value.clientWidth-g.value.clientWidth;+v.value>100?b.value=a:b.value=a*(+v.value/100)}))}),{deep:!0}),(l,e)=>(t(),d("div",h,[r("div",{class:"w-full overflow-hidden",ref_key:"progressRef",ref:f,style:p({height:`${a.height}px`,backgroundColor:a.groundColor,borderRadius:`${a.height}px`})},[r("p",{class:"h-full",style:p({width:`${c(v)}%`,backgroundColor:a.loadGroundColor})},null,4)],4),r("div",{ref_key:"titleRef",ref:g,class:"rounded-full text-fff text-center min-w-2.8em absolute box-border",style:p({left:`${b.value}px`,backgroundColor:a.loadGroundColor,top:"-10px"})},[u(l.$slots,"title",{},(()=>[n(x(`${c(v)}%`),1)]),!0)],4)]))}}),[["__scopeId","data-v-40f16bd0"]]);const m=a=>(g("data-v-c6237ccc"),a=a(),b(),a),C={class:"min-h-full progress__demo"},$=m((()=>r("div",{class:"px-16px pt-24px"},[r("p",{class:"font-bold text-18px progress__title"},"m-progress"),r("p",{class:"pt-12px pb-16px text-13px leading-20px progress__introduce"}," 介绍：加载进度条组件，实现原理也很简单，通过一个div来控制底色，再用一个同高的不同色并且动态宽度的标签，充满在里面，实现加载的进度，具体请看 m-progress 中README.md ")],-1))),k={class:"px-20px pb-20px"},y=m((()=>r("p",{class:"pb-20px"},"默认样式",-1))),R={class:"px-20px pb-20px"},w=m((()=>r("p",{class:"pb-20px"},"给他加一个计时器，让他进行加载效果",-1))),I={class:"px-20px pb-20px"},A=m((()=>r("p",{class:"pb-20px"},"加载条高度",-1))),E={class:"px-20px pb-20px"},G=m((()=>r("p",{class:"pb-20px"},"自定义颜色",-1))),j=m((()=>r("br",null,null,-1))),D=m((()=>r("br",null,null,-1)));var S=a(l({setup(a){s("1");const l=s(0);return v((()=>{const a=setInterval((()=>{l.value++,l.value>=100&&clearInterval(a)}),100)})),(a,e)=>(t(),d("div",C,[$,r("div",k,[y,f(_,{"load-state":"10"})]),r("div",R,[w,f(_,{"load-state":l.value},null,8,["load-state"])]),r("div",I,[A,f(_,{"load-state":"40",height:8})]),r("div",E,[G,f(_,{"load-state":"30","load-ground-color":"red"}),j,f(_,{"load-state":"50","load-ground-color":"green","ground-color":"#969799"}),D,f(_,{"load-state":"70","load-ground-color":"orange"})])]))}}),[["__scopeId","data-v-c6237ccc"]]);export{S as default};