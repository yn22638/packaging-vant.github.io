import{g as e,o as a,c as l,W as t,b6 as u,a as s,aB as n,az as o,aU as p,_ as d,A as i,b as r,w as v,E as x,F as c,aX as h}from"./index.2cddf1de.js";import{C as m,a as f}from"./index.1b4a02d5.js";const g={class:""},_=["type","maxlength","placeholder"],b={key:0,class:"text-right"},y=e({props:{value:{default:""},type:{default:"text"},isShowTextLength:{type:Boolean,default:!0},maxlength:{default:50},placeholder:{default:"请输入内容"}},emits:["on-blur"],setup(e,{emit:d}){const i=e,r=()=>{d("on-blur",i.value)};return(d,i)=>(a(),l("div",g,[t(s("input",{class:"h-42px w-full","onUpdate:modelValue":i[0]||(i[0]=e=>n(value)?value.value=e:null),type:e.type,maxlength:e.maxlength,placeholder:e.placeholder,onBlur:r},null,40,_),[[u,e.value]]),e.isShowTextLength?(a(),l("p",b,o(`${e.value.length}/${e.maxlength}`),1)):p("",!0)]))}});const w={class:"min-h-full input__demo"},B=(e=>(x("data-v-57633f11"),e=e(),c(),e))((()=>s("div",{class:"px-16px pt-24px"},[s("p",{class:"font-bold text-18px input__title"},"m-input"),s("p",{class:"pt-12px pb-16px text-13px leading-20px input__introduce"},"介绍：通过input原生属性与事件，针对于展示效果，字体颜色，样式等进一步封装 ")],-1)));var $=d(e({setup(e){const t=i("1"),u=i(""),s=i(""),n=e=>{t.value=`${e}`},o=e=>{u.value=e,h(`当前输入框的值是：${e}`)},p=e=>{s.value=e,h(`当前输入框的值是：${e}`)};return(e,d)=>{const i=m,x=f;return a(),l("div",w,[B,r(x,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=e=>t.value=e),accordion:"",onChange:n},{default:v((()=>[r(i,{title:"默认样式",name:"1"},{default:v((()=>[r(y,{value:u.value,"is-show-text-length":!1,onOnBlur:o},null,8,["value"])])),_:1}),r(i,{title:"统计输入字数/最大输入字数",name:"2"},{default:v((()=>[r(y,{value:s.value,onOnBlur:p},null,8,["value"])])),_:1})])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-57633f11"]]);export{$ as default};