import{e,t as a,g as l,ai as s,b as n,an as t,h as o,f as r,aG as d,n as u,A as i,au as c,i as v,b3 as p,j as b,ak as g,$ as m,Y as f,ao as h,b4 as y,W as x,ax as k,Z as V,l as j}from"./index.dd7c45e3.js";const[B,C]=e("collapse"),S=Symbol(B);const z=o(l({name:B,props:{border:a,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}},emits:["change","update:modelValue"],setup(e,{emit:a,slots:l}){const{linkChildren:o}=s(S),r=e=>{a("change",e),a("update:modelValue",e)};return o({toggle:(a,l)=>{const{accordion:s,modelValue:n}=e;r(s?a===n?"":a:l?n.concat(a):n.filter((e=>e!==a)))},isExpanded:a=>{const{accordion:l,modelValue:s}=e;return l?s===a:s.includes(a)}}),()=>{var a;return n("div",{class:[C(),{[t]:e.border}]},[null==(a=l.default)?void 0:a.call(l)])}}})),[A,E]=e("collapse-item"),L=["icon","title","value","label","right-icon"];const R=o(l({name:A,props:r({},d,{name:u,isLink:a,disabled:Boolean,readonly:Boolean,lazyRender:a}),setup(e,{slots:a}){const l=i(),s=i(),{parent:t,index:o}=c(S);if(!t)return;const r=v((()=>{var a;return null!=(a=e.name)?a:o.value})),u=v((()=>t.isExpanded(r.value))),B=i(u.value),C=p((()=>B.value||!e.lazyRender)),z=()=>{u.value?l.value&&(l.value.style.height=""):B.value=!1};b(u,((e,a)=>{if(null===a)return;e&&(B.value=!0);(e?V:j)((()=>{if(!s.value||!l.value)return;const{offsetHeight:a}=s.value;if(a){const s=`${a}px`;l.value.style.height=e?"0":s,y((()=>{l.value&&(l.value.style.height=e?s:"0")}))}else z()}))}));const A=(e=!u.value)=>{t.toggle(r.value,e)},R=()=>{e.disabled||e.readonly||A()},$=()=>{const{border:l,disabled:s,readonly:t}=e,o=h(e,Object.keys(d));return t&&(o.isLink=!1),(s||t)&&(o.clickable=!1),n(m,f({role:"button",class:E("title",{disabled:s,expanded:u.value,borderless:!l}),"aria-expanded":String(u.value),onClick:R},o),h(a,L))},w=C((()=>{var e;return x(n("div",{ref:l,class:E("wrapper"),onTransitionend:z},[n("div",{ref:s,class:E("content")},[null==(e=a.default)?void 0:e.call(a)])]),[[k,B.value]])}));return g({toggle:A}),()=>n("div",{class:[E({border:o.value&&e.border})]},[$(),w()])}}));export{R as C,z as a};
