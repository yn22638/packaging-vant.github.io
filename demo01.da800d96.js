import{d as s,a,c as e,b as p,az as n,D as r,e as t,w as l,f as d}from"./index.2ee04863.js";import{B as o}from"./index.bbfc905b.js";const x={class:"p-20px"},c=p("p",{class:"text-20px"},"v3 原理 Proxy 探索",-1),i=p("p",{class:"pt-12px pb-40px"},"如果对象里有这个属性，就返回属性值，如果没有，就返回默认值66",-1),m=d("改名字 click"),u=s({setup(s){const d=new Proxy({name:"小明",aeg:18,address:"河北省-秦皇岛市"},{get:(s,a)=>s.hasOwnProperty(a)?s[a]:66,set:(s,a,e)=>(s[a]=e,!0)}),u=()=>{d.aeg=20};return(s,f)=>{const b=o;return a(),e("div",x,[c,i,p("p",null,n(`name:${r(d).name}`),1),p("p",null,n(`sex:${r(d).sex}`),1),p("p",null,n(`aeg:${r(d).aeg}`),1),p("p",null,n(`address:${r(d).address}`),1),t(b,{type:"primary",size:"mini",onClick:u},{default:l((()=>[m])),_:1})])}}});export{u as default};
