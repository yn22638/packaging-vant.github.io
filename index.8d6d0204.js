import{e as s,f as a,aZ as e,t as n,aP as t,m as o,a_ as c,g as l,b as i,Y as r,ao as d,aO as u,I as p,aQ as m,L as b,Z as v,h as f,A as h,C as x,o as g,c as w,d as k,az as C,a as y,w as j,aX as A}from"./index.a1c71987.js";import{B as I}from"./index.0b2847f4.js";/* empty css              *//* empty css               */import{M as O}from"./index.25326e15.js";const[B,S]=s("action-sheet"),T=a({},e,{title:String,round:n,actions:t(),closeIcon:o("cross"),closeable:n,cancelText:String,description:String,closeOnPopstate:n,closeOnClickAction:Boolean,safeAreaInsetBottom:n}),P=[...c,"round","closeOnPopstate","safeAreaInsetBottom"];const U=f(l({name:B,props:T,emits:["select","cancel","update:show"],setup(s,{slots:a,emit:e}){const n=s=>e("update:show",s),t=()=>{n(!1),e("cancel")},o=()=>{if(s.title)return i("div",{class:S("header")},[s.title,s.closeable&&i(p,{name:s.closeIcon,class:[S("close"),m],onClick:t},null)])},c=()=>{if(a.cancel||s.cancelText)return[i("div",{class:S("gap")},null),i("button",{type:"button",class:S("cancel"),onClick:t},[a.cancel?a.cancel():s.cancelText])]},l=(s,e)=>s.loading?i(b,{class:S("loading-icon")},null):a.action?a.action({action:s,index:e}):[i("span",{class:S("name")},[s.name]),s.subname&&i("div",{class:S("subname")},[s.subname])],f=(a,t)=>{const{color:o,loading:c,callback:r,disabled:d,className:u}=a;return i("button",{type:"button",style:{color:o},class:[S("item",{loading:c,disabled:d}),u],onClick:()=>{d||c||(r&&r(a),s.closeOnClickAction&&n(!1),v((()=>e("select",a,t))))}},[l(a,t)])},h=()=>{if(s.description||a.description){const e=a.description?a.description():s.description;return i("div",{class:S("description")},[e])}};return()=>i(u,r({class:S(),position:"bottom","onUpdate:show":n},d(s,P)),{default:()=>{var e;return[o(),h(),i("div",{class:S("content")},[s.actions.map(f),null==(e=a.default)?void 0:e.call(a)]),c()]}})}}));const Z={class:""},_=k(" 请选择 "),z=l({setup(s){const a=h(!1),e=h(!0),n=h(""),t=[{name:"选项一"},{name:"选项二"},{name:"选项三"}],o=()=>A("取消"),c=s=>{const{name:a}=s;n.value=a};return x((async()=>{setTimeout((()=>{e.value=!1}),3e3)})),(s,l)=>{const r=I,d=U;return g(),w("div",Z,[k(C("当前选择的是："+n.value)+" ",1),y("div",null,[i(r,{type:"primary",onClick:l[0]||(l[0]=s=>a.value=!0)},{default:j((()=>[_])),_:1})]),i(d,{show:a.value,"onUpdate:show":l[1]||(l[1]=s=>a.value=s),actions:t,"cancel-text":"取消","close-on-click-action":"",onCancel:o,onSelect:c},null,8,["show"]),i(O,{show:e.value},null,8,["show"])])}}});export{z as default};