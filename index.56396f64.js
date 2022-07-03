import{l as e,a5 as t,a6 as a,U as l,a7 as n,V as o,a8 as i,e as s,g as r,A as d,a9 as c,aa as u,i as v,ab as p,f,ac as h,j as b,ad as g,b as m,n as x,m as y,s as w,ae as k,N as I,h as B,t as C,T as S,af as $,ag as z,C as R,ah as T,ai as A,aj as j,ak as V,al as L,am as W,an as Z,Y as N,ao as O,Z as F,H,ap as _,aq as M,ar as U,as as D,r as X,at as q,au as E,av as Y,aw as G,W as J,ax as K,ay as P,o as Q,c as ee,d as te,az as ae,a as le,D as ne,aA as oe,a0 as ie,aB as se,w as re,a1 as de,aC as ce}from"./index.24ac1391.js";import{B as ue}from"./index.2c538c12.js";import{u as ve,F as pe}from"./index.b648aa5c.js";import{u as fe}from"./use-refs.5c6e690b.js";const[he,be]=s("sticky");const ge=B(r({name:he,props:{zIndex:x,position:y("top"),container:Object,offsetTop:w(0),offsetBottom:w(0)},emits:["scroll","change"],setup(e,{emit:a,slots:s}){const r=d(),x=c(r),y=u({fixed:!1,width:0,height:0,transform:0}),w=v((()=>p("top"===e.position?e.offsetTop:e.offsetBottom))),B=v((()=>{const{fixed:e,height:t,width:a}=y;if(e)return{width:`${a}px`,height:`${t}px`}})),C=v((()=>{if(!y.fixed)return;const t=f(h(e.zIndex),{width:`${y.width}px`,height:`${y.height}px`,[e.position]:`${w.value}px`});return y.transform&&(t.transform=`translate3d(0, ${y.transform}px, 0)`),t})),S=()=>{if(!r.value||k(r))return;const{container:l,position:n}=e,o=I(r),i=t(window);if(y.width=o.width,y.height=o.height,"top"===n)if(l){const e=I(l),t=e.bottom-w.value-y.height;y.fixed=w.value>o.top&&e.bottom>0,y.transform=t<0?t:0}else y.fixed=w.value>o.top;else{const{clientHeight:e}=document.documentElement;if(l){const t=I(l),a=e-t.top-w.value-y.height;y.fixed=e-w.value<o.bottom&&e>t.top,y.transform=a<0?-a:0}else y.fixed=e-w.value<o.bottom}(e=>{a("scroll",{scrollTop:e,isFixed:y.fixed})})(i)};return b((()=>y.fixed),(e=>a("change",e))),g("scroll",S,{target:x}),function(e,t){if(!l||!window.IntersectionObserver)return;const a=new IntersectionObserver((e=>{t(e[0].intersectionRatio>0)}),{root:document.body}),s=()=>{e.value&&a.unobserve(e.value)};n(s),o(s),i((()=>{e.value&&a.observe(e.value)}))}(r,S),()=>{var e;return m("div",{ref:r,style:B.value},[m("div",{class:be({fixed:y.fixed}),style:C.value},[null==(e=s.default)?void 0:e.call(s)])])}}})),[me,xe]=s("tab");var ye=r({name:me,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:x,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:C},setup(e,{slots:t}){const a=v((()=>{const t={},{type:a,color:l,disabled:n,isActive:o,activeColor:i,inactiveColor:s}=e;l&&"card"===a&&(t.borderColor=l,n||(o?t.backgroundColor=l:t.color=l));const r=o?i:s;return r&&(t.color=r),t})),l=()=>{const a=m("span",{class:xe("text",{ellipsis:!e.scrollable})},[t.title?t.title():e.title]);return e.dot||S(e.badge)&&""!==e.badge?m($,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[a]}):a};return()=>m("div",{id:e.id,role:"tab",class:[xe([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:a.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[l()])}});const[we,ke]=s("tabs");var Ie=r({name:we,props:{count:z(Number),inited:Boolean,animated:Boolean,duration:z(x),swipeable:Boolean,lazyRender:Boolean,currentIndex:z(Number)},emits:["change"],setup(e,{emit:t,slots:a}){const l=d(),n=e=>t("change",e),o=()=>{var t;const o=null==(t=a.default)?void 0:t.call(a);return e.animated||e.swipeable?m(T,{ref:l,loop:!1,class:ke("track"),duration:1e3*+e.duration,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:n},{default:()=>[o]}):o},i=t=>{const a=l.value;a&&a.state.active!==t&&a.swipeTo(t,{immediate:!e.inited})};return b((()=>e.currentIndex),i),R((()=>{i(e.currentIndex)})),()=>m("div",{class:ke("content",{animated:e.animated||e.swipeable})},[o()])}});const[Be,Ce]=s("tabs"),Se={type:y("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:w(0),duration:w(.3),animated:Boolean,ellipsis:C,swipeable:Boolean,scrollspy:Boolean,offsetTop:w(0),background:String,lazyRender:C,lineWidth:x,lineHeight:x,beforeChange:Function,swipeThreshold:w(5),titleActiveColor:String,titleInactiveColor:String},$e=Symbol(Be);var ze=r({name:Be,props:Se,emits:["click","change","scroll","disabled","rendered","click-tab","update:active"],setup(l,{emit:n,slots:o}){let s,r,f;const h=d(),x=d(),y=d(),w=ve(),B=c(h),[C,$]=fe(),{children:z,linkChildren:R}=A($e),T=u({inited:!1,position:"",lineStyle:{},currentIndex:-1}),X=v((()=>z.length>l.swipeThreshold||!l.ellipsis||l.shrink)),q=v((()=>({borderColor:l.color,background:l.background}))),E=(e,t)=>{var a;return null!=(a=e.name)?a:t},Y=v((()=>{const e=z[T.currentIndex];if(e)return E(e,T.currentIndex)})),G=v((()=>p(l.offsetTop))),J=v((()=>l.sticky?G.value+s:0)),K=t=>{const a=x.value,n=C.value;if(!(X.value&&a&&n&&n[T.currentIndex]))return;const o=n[T.currentIndex].$el;!function(t,a,l){let n=0;const o=t.scrollLeft,i=0===l?1:Math.round(1e3*l/16);!function l(){t.scrollLeft+=(a-o)/i,++n<i&&e(l)}()}(a,o.offsetLeft-(a.offsetWidth-o.offsetWidth)/2,t?0:+l.duration)},P=()=>{const e=T.inited;F((()=>{const t=C.value;if(!t||!t[T.currentIndex]||"line"!==l.type||k(h.value))return;const a=t[T.currentIndex].$el,{lineWidth:n,lineHeight:o}=l,i=a.offsetLeft+a.offsetWidth/2,s={width:H(n),backgroundColor:l.color,transform:`translateX(${i}px) translateX(-50%)`};if(e&&(s.transitionDuration=`${l.duration}s`),S(o)){const e=H(o);s.height=e,s.borderRadius=e}T.lineStyle=s}))},Q=e=>{const t=(e=>{const t=e<T.currentIndex?-1:1;for(;e>=0&&e<z.length;){if(!z[e].disabled)return e;e+=t}})(e);if(!S(t))return;const a=z[t],o=E(a,t),i=null!==T.currentIndex;T.currentIndex=t,o!==l.active&&(n("update:active",o),i&&n("change",o,a.title))},ee=e=>{const t=z.find(((t,a)=>E(t,a)===e)),a=t?z.indexOf(t):0;Q(a)},te=(n=!1)=>{if(l.scrollspy){const o=z[T.currentIndex].$el;if(o&&B.value){const i=D(o,B.value)-J.value;r=!0,function(l,n,o,i){let s=t(l);const r=s<n,d=0===o?1:Math.round(1e3*o/16),c=(n-s)/d;!function t(){s+=c,(r&&s>n||!r&&s<n)&&(s=n),a(l,s),r&&s<n||!r&&s>n?e(t):i&&e(i)}()}(B.value,i,n?0:+l.duration,(()=>{r=!1}))}}},ae=e=>{f=e.isFixed,n("scroll",e)},le=()=>z.map(((e,t)=>m(ye,N({key:e.id,id:`${w}-${t}`,ref:$(t),type:l.type,color:l.color,style:e.titleStyle,class:e.titleClass,shrink:l.shrink,isActive:t===T.currentIndex,controls:e.id,scrollable:X.value,activeColor:l.titleActiveColor,inactiveColor:l.titleInactiveColor,onClick:a=>((e,t,a)=>{const{title:o,disabled:i}=z[t],s=E(z[t],t);i?n("disabled",s,o):(_(l.beforeChange,{args:[s],done:()=>{Q(t),te()}}),n("click",s,o),M(e)),n("click-tab",{name:s,title:o,event:a,disabled:i})})(e,t,a)},O(e,["dot","badge","title","disabled","showZeroBadge"])),{title:e.$slots.title}))),ne=()=>{if("line"===l.type&&z.length)return m("div",{class:Ce("line"),style:T.lineStyle},null)},oe=()=>{var e,t;const{type:a,border:n}=l;return m("div",{ref:y,class:[Ce("wrap"),{[Z]:"line"===a&&n}]},[m("div",{ref:x,role:"tablist",class:Ce("nav",[a,{shrink:l.shrink,complete:X.value}]),style:q.value,"aria-orientation":"horizontal"},[null==(e=o["nav-left"])?void 0:e.call(o),le(),ne(),null==(t=o["nav-right"])?void 0:t.call(o)])])};b([()=>l.color,j],P),b((()=>l.active),(e=>{e!==Y.value&&ee(e)})),b((()=>z.length),(()=>{T.inited&&(ee(l.active),P(),F((()=>{K(!0)})))})),b((()=>T.currentIndex),(()=>{K(),P(),f&&!l.scrollspy&&U(Math.ceil(D(h.value)-G.value))}));return V({resize:P,scrollTo:e=>{F((()=>{ee(e),te(!0)}))}}),L(P),W(P),i((()=>{ee(l.active),F((()=>{T.inited=!0,y.value&&(s=I(y.value).height),K(!0)}))})),g("scroll",(()=>{if(l.scrollspy&&!r){const e=(()=>{for(let e=0;e<z.length;e++){const{top:t}=I(z[e].$el);if(t>J.value)return 0===e?0:e-1}return z.length-1})();Q(e)}}),{target:B}),R({id:w,props:l,setLine:P,onRendered:(e,t)=>n("rendered",e,t),currentName:Y,scrollIntoView:K}),()=>{var e;return m("div",{ref:h,class:Ce([l.type])},[l.sticky?m(ge,{container:h.value,offsetTop:G.value,onScroll:ae},{default:()=>{var e;return[oe(),null==(e=o["nav-bottom"])?void 0:e.call(o)]}}):[oe(),null==(e=o["nav-bottom"])?void 0:e.call(o)],m(Ie,{count:z.length,inited:T.inited,animated:l.animated,duration:l.duration,swipeable:l.swipeable,lazyRender:l.lazyRender,currentIndex:T.currentIndex,onChange:Q},{default:()=>{var e;return[null==(e=o.default)?void 0:e.call(o)]}})])}}});const Re=Symbol(),[Te,Ae]=s("tab");const je=B(r({name:Te,props:f({},X,{dot:Boolean,name:x,badge:x,title:String,disabled:Boolean,titleClass:q,titleStyle:[String,Object],showZeroBadge:C}),setup(e,{slots:t}){const a=ve(),l=d(!1),{parent:n,index:o}=E($e);if(!n)return;const i=()=>{var t;return null!=(t=e.name)?t:o.value},s=v((()=>{const t=i()===n.currentName.value;return t&&!l.value&&(l.value=!0,n.props.lazyRender&&F((()=>{n.onRendered(i(),e.title)}))),t}));return b((()=>e.title),(()=>{n.setLine(),n.scrollIntoView()})),Y(Re,s),()=>{var e;const i=`${n.id}-${o.value}`,{animated:r,swipeable:d,scrollspy:c,lazyRender:u}=n.props;if(!t.default&&!r)return;const v=c||s.value;if(r||d)return m(G,{id:a,role:"tabpanel",class:Ae("panel-wrapper",{inactive:!s.value}),tabindex:s.value?0:-1,"aria-hidden":!s.value,"aria-labelledby":i},{default:()=>{var e;return[m("div",{class:Ae("panel")},[null==(e=t.default)?void 0:e.call(t)])]}});const p=l.value||c||!u?null==(e=t.default)?void 0:e.call(t):null;return V({id:a}),J(m("div",{id:a,role:"tabpanel",class:Ae("panel"),tabindex:v?0:-1,"aria-labelledby":i},[p]),[[K,v]])}}})),Ve=B(ze);const Le={class:""},We=r({props:{title:null},setup(e){const{data1:t,data2:a}=P("data",{data1:"",data2:""}),l=P("inputValue","");return(n,o)=>(Q(),ee("div",Le,[te(ae(e.title)+" ",1),le("div",null,ae(ne(t)+"-count")+" "+ae(ne(a)+"-count"),1),te(" "+ae("父组件传过来的内容: "+ne(l)),1)]))}}),Ze={class:""},Ne=te(" children "),Oe=r({setup:e=>(e,t)=>(Q(),ee("div",Ze,[Ne,oe(e.$slots,"default"),oe(e.$slots,"grade"),m(We,{title:"我是grandson"})]))}),Fe={class:""},He=le("div",null," 1111",-1),_e=te("奶娘"),Me=te("确定"),Ue=r({setup(e){d(0);let t=d(0);const a=d(""),l=v((()=>({0:"children",1:""}[t.value]))),n=()=>{Y("inputValue",a.value),a.value=""};return Y("data",{data1:"给子孙的数据1",data2:"给子孙的数据2"}),(e,o)=>{const i=je,s=Ve,r=pe,d=ue,c=ie;return Q(),ee("div",Fe,[m(s,{active:ne(t),"onUpdate:active":o[0]||(o[0]=e=>se(t)?t.value=e:t=e)},{default:re((()=>[m(i,{title:"children"}),m(i,{title:"标签 2"}),m(i,{title:"标签 3"}),m(i,{title:"标签 4"})])),_:1},8,["active"]),(Q(),de(ce(ne(l)))),He,le("div",null,[m(Oe,null,{grade:re((()=>[_e])),_:1})]),m(c,null,{default:re((()=>[m(r,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),label:"内容",placeholder:"传给子用户的内容"},null,8,["modelValue"]),m(d,{type:"primary",onClick:n},{default:re((()=>[Me])),_:1})])),_:1})])}}});export{Ue as default};
