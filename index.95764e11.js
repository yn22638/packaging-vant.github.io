import{e as a,f as s,aZ as e,t as n,aP as t,m as o,a_ as c,g as l,b as i,Y as r,ao as d,aO as u,I as p,aQ as m,L as b,Z as f,h as v,A as h,C as x,o as g,c as w,d as k,az as C,a as y,w as j,aX as A}from"./index.f06822f1.js";import{B as I}from"./index.5a337ef6.js";/* empty css              *//* empty css               */import{M as O}from"./index.0cabeef0.js";const[B,S]=a("action-sheet"),T=s({},e,{title:String,round:n,actions:t(),closeIcon:o("cross"),closeable:n,cancelText:String,description:String,closeOnPopstate:n,closeOnClickAction:Boolean,safeAreaInsetBottom:n}),P=[...c,"round","closeOnPopstate","safeAreaInsetBottom"];const U=v(l({name:B,props:T,emits:["select","cancel","update:show"],setup(a,{slots:s,emit:e}){const n=a=>e("update:show",a),t=()=>{n(!1),e("cancel")},o=()=>{if(a.title)return i("div",{class:S("header")},[a.title,a.closeable&&i(p,{name:a.closeIcon,class:[S("close"),m],onClick:t},null)])},c=()=>{if(s.cancel||a.cancelText)return[i("div",{class:S("gap")},null),i("button",{type:"button",class:S("cancel"),onClick:t},[s.cancel?s.cancel():a.cancelText])]},l=(a,e)=>a.loading?i(b,{class:S("loading-icon")},null):s.action?s.action({action:a,index:e}):[i("span",{class:S("name")},[a.name]),a.subname&&i("div",{class:S("subname")},[a.subname])],v=(s,t)=>{const{color:o,loading:c,callback:r,disabled:d,className:u}=s;return i("button",{type:"button",style:{color:o},class:[S("item",{loading:c,disabled:d}),u],onClick:()=>{d||c||(r&&r(s),a.closeOnClickAction&&n(!1),f((()=>e("select",s,t))))}},[l(s,t)])},h=()=>{if(a.description||s.description){const e=s.description?s.description():a.description;return i("div",{class:S("description")},[e])}};return()=>i(u,r({class:S(),position:"bottom","onUpdate:show":n},d(a,P)),{default:()=>{var e;return[o(),h(),i("div",{class:S("content")},[a.actions.map(v),null==(e=s.default)?void 0:e.call(s)]),c()]}})}}));const Z={class:""},_=k(" 请选择 "),z=l({setup(a){const s=h(!1),e=h(!0),n=h(""),t=[{name:"选项一"},{name:"选项二"},{name:"选项三"}],o=()=>A("取消"),c=a=>{const{name:s}=a;n.value=s};return x((async()=>{setTimeout((()=>{e.value=!1}),3e3)})),(a,l)=>{const r=I,d=U;return g(),w("div",Z,[k(C("当前选择的是："+n.value)+" ",1),y("div",null,[i(r,{type:"primary",onClick:l[0]||(l[0]=a=>s.value=!0)},{default:j((()=>[_])),_:1})]),i(d,{show:s.value,"onUpdate:show":l[1]||(l[1]=a=>s.value=a),actions:t,"cancel-text":"取消","close-on-click-action":"",onCancel:o,onSelect:c},null,8,["show"]),i(O,{show:e.value},null,8,["show"])])}}});export{z as default};
