import{_ as e,g as a,i as l,o as s,c as o,R as n,D as t,A as i,W as c,ax as u,P as d,Q as r,a as v,b as p,C as m,Z as f,aM as x,a4 as b,w as _,a1 as k,b0 as y,d as h,aX as w}from"./index.127bd108.js";import{B as g}from"./index.8eede4b4.js";import{F as C}from"./index.eba44077.js";import{_ as F}from"./index.e7c85b9e.js";const j=["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极"];const z=["data-index"];var I=e(a({props:{index:null},emits:{"icon-click":e=>!0},setup(e,{emit:a}){const i=e,c=l((()=>j[i.index])),u=l((()=>`url(https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${i.index}.gif)`)),d=()=>{a("icon-click",`[${c.value}]`)};return(a,l)=>(s(),o("div",{class:"h-24px w-24px icon",style:n({"background-image":t(u)}),"data-index":e.index,onClick:d},null,12,z))}}),[["__scopeId","data-v-4693ba9a"]]);const K={class:"flex w-full px-10px pt-10px emotion box-border"};var M=e(a({props:{show:{type:Boolean}},emits:{"icon-click":e=>!0},setup(e,{emit:a}){const l=i([...j]),n=e=>e+Math.random(),t=(e,a,l)=>1===e?7*a-l:21*(e-1)+7*a-l,m=e=>{a("icon-click",e)};return(a,i)=>c((s(),o("div",K,[(s(!0),o(d,null,r(Math.ceil(l.value.length/21),(e=>(s(),o("div",{key:n(e),class:"w-full p-15px emotion__page box-border"},[(s(),o(d,null,r(3,(a=>v("div",{key:n(a),class:"flex p-10px justify-between box-border"},[(s(),o(d,null,r(7,((l,s)=>p(I,{key:n(s),index:t(e,a,s+1),onIconClick:m},null,8,["index"]))),64))]))),64))])))),128))],512)),[[u,e.show]])}}),[["__scopeId","data-v-228dd2b4"]]);const V={class:"bg-fff w-full send-box"},q={class:"flex py-6px px-12px send-box__content justify-between items-center"},B=h(" 按住 说话 "),D=h(" 发送 "),O={class:"send-box__features"};var T=e(a({setup(e){const a=i(!1),l=i(!1),n=i(!0),t=i(!1),d=i(""),r=i(null),h=()=>{a.value=!a.value,a.value||f((()=>{r.value.focus()})),n.value=!0,t.value=!1},j=()=>{t.value=!1},z=()=>{t.value=n.value,n.value=!n.value},I=()=>{w("请输入")},K=()=>{w("选择照片")},T=e=>{e.preventDefault(),l.value=!0,t.value=!1},$=()=>{l.value=!1},A=e=>{d.value+=e};return m((()=>{f((()=>{r.value.focus()}))})),(e,i)=>{const m=C,f=g;return s(),o("div",V,[v("div",q,[v("div",{class:x(["flex rounded-1/2 h-22px w-22px justify-center items-center",""+(a.value?"bg-fff":"bg-primary")]),onClick:h},[p(F,{name:""+(a.value?"keyboard":"voice"),size:18,color:""+(a.value?"#525252":"#FFFFFF"),onClick:K},null,8,["name","color"])],2),c(p(m,{class:"content__field",modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=e=>d.value=e),ref_key:"field",ref:r,placeholder:"请输入文字",onKeypress:b(j,["enter","native"]),onFocus:I},null,8,["modelValue","onKeypress"]),[[u,!a.value]]),c(p(f,{class:x(["content__voice",{"content__voice--active":l.value}]),type:"default",size:"small",onTouchstart:T,onTouchend:$},{default:_((()=>[B])),_:1},8,["class"]),[[u,a.value]]),p(F,{class:"mr-10px",name:""+(n.value?"emotion-happy":"keyboard"),size:"18",color:"#525252",onClick:z},null,8,["name"]),p(y,{name:"fade",mode:"out-in"},{default:_((()=>[d.value?(s(),k(f,{key:1,class:"content__send-btn",type:"primary",size:"small",onClick:j},{default:_((()=>[D])),_:1})):(s(),k(F,{key:0,name:"pic-one",size:18,color:"#525252",onClick:K}))])),_:1})]),c(v("div",O,[p(M,{show:"",onIconClick:A})],512),[[u,t.value]])])}}}),[["__scopeId","data-v-f63d7260"]]);const $={class:"min-h-full bg-f8 chat"},A=a({setup:e=>(e,a)=>(s(),o("div",$,[p(T)]))});export{A as default};
