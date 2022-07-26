import{T as t,z as e,g as n,d as o,ag as a,at as l,l as s,n as i,aP as u,r,aa as c,G as d,au as m,ak as f,s as p,e as v,p as h,O as g,h as x,k as b,m as y,ai as I,q as C,ab as w,L as H,t as T,aQ as k,aY as N}from"./index.2977117e.js";function V(n){if(!t(n))return n;if(Array.isArray(n))return n.map((t=>V(t)));if(e(n)){const t={};return Object.keys(n).forEach((e=>{t[e]=V(n[e])})),t}return n}const[O,S]=n("picker-column");const B=Symbol(O),D=t=>e(t)&&t.disabled;var M=o({name:O,props:{textKey:a(String),readonly:Boolean,allowHtml:Boolean,className:l,itemHeight:a(Number),defaultIndex:s(0),swipeDuration:a(i),initialOptions:u(),visibleItemCount:a(i)},emits:["change"],setup(t,{emit:n,slots:o}){let a,l,s,i,u;const x=r(),b=c({index:t.defaultIndex,offset:0,duration:0,options:V(t.initialOptions)}),y=d(),I=()=>b.options.length,C=()=>t.itemHeight*(+t.visibleItemCount-1)/2,w=(e,o)=>{const l=-(e=(t=>{for(let e=t=g(t,0,I());e<I();e++)if(!D(b.options[e]))return e;for(let e=t-1;e>=0;e--)if(!D(b.options[e]))return e})(e)||0)*t.itemHeight,s=()=>{e!==b.index&&(b.index=e,o&&n("change",e))};a&&l!==b.offset?u=s:s(),b.offset=l},H=e=>{JSON.stringify(e)!==JSON.stringify(b.options)&&(b.options=V(e),w(t.defaultIndex))},T=n=>e(n)&&t.textKey in n?n[t.textKey]:n,k=e=>g(Math.round(-e/t.itemHeight),0,I()-1),N=()=>{a=!1,b.duration=0,u&&(u(),u=null)},O=e=>{if(!t.readonly){if(y.start(e),a){const t=function(t){const{transform:e}=window.getComputedStyle(t),n=e.slice(7,e.length-1).split(", ")[5];return Number(n)}(x.value);b.offset=Math.min(0,t-C()),l=b.offset}else l=b.offset;b.duration=0,s=Date.now(),i=l,u=null}},M=e=>{if(t.readonly)return;y.move(e),y.isVertical()&&(a=!0,h(e,!0)),b.offset=g(l+y.deltaY.value,-I()*t.itemHeight,t.itemHeight);const n=Date.now();n-s>300&&(s=n,i=b.offset)},K=()=>{if(t.readonly)return;const e=b.offset-i,n=Date.now()-s;if(n<300&&Math.abs(e)>15)return void((e,n)=>{const o=Math.abs(e/n);e=b.offset+o/.003*(e<0?-1:1);const a=k(e);b.duration=+t.swipeDuration,w(a,!0)})(e,n);const o=k(b.offset);b.duration=200,w(o,!0),setTimeout((()=>{a=!1}),0)},$=()=>{const e={height:`${t.itemHeight}px`};return b.options.map(((n,l)=>{const s=T(n),i=D(n),r={role:"button",style:e,tabindex:i?-1:0,class:S("item",{disabled:i,selected:l===b.index}),onClick:()=>(e=>{a||t.readonly||(u=null,b.duration=200,w(e,!0))})(l)},c={class:"van-ellipsis",[t.allowHtml?"innerHTML":"textContent"]:s};return v("li",r,[o.option?o.option(n):v("div",c,null)])}))};return w(b.index),m(B),f({state:b,setIndex:w,getValue:()=>b.options[b.index],setValue:t=>{const{options:e}=b;for(let n=0;n<e.length;n++)if(T(e[n])===t)return w(n)},setOptions:H,stopMomentum:N}),p((()=>t.initialOptions),H),p((()=>t.defaultIndex),(t=>w(t))),()=>v("div",{class:[S(),t.className],onTouchstart:O,onTouchmove:M,onTouchend:K,onTouchcancel:K},[v("ul",{ref:x,style:{transform:`translate3d(0, ${b.offset+C()}px, 0)`,transitionDuration:`${b.duration}ms`,transitionProperty:b.duration?"all":"none"},class:S("wrapper"),onTransitionend:N},[$()])])}});const[K,$,j]=n("picker"),P={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:b(44),showToolbar:T,swipeDuration:b(1e3),visibleItemCount:b(6),cancelButtonText:String,confirmButtonText:String};var E=o({name:K,props:x({},P,{columns:u(),valueKey:String,defaultIndex:b(0),toolbarPosition:y("top"),columnsFieldNames:Object}),emits:["confirm","cancel","change"],setup(t,{emit:e,slots:n}){const o=r(!1),a=r([]),{text:l,values:s,children:i}=x({text:t.valueKey||"text",values:"values",children:"children"},t.columnsFieldNames),{children:u,linkChildren:c}=I(B);c();const d=C((()=>w(t.itemHeight))),m=C((()=>{const e=t.columns[0];if("object"==typeof e){if(i in e)return"cascade";if(s in e)return"object"}return"plain"})),g=()=>u.map((t=>t.state.index)),b=(t,e)=>{const n=u[t];n&&(n.setOptions(e),o.value=!0)},y=e=>{let n={[i]:t.columns};const o=g();for(let t=0;t<=e;t++)n=n[i][o[t]];for(;n&&n[i];)e++,b(e,n[i]),n=n[i][n.defaultIndex||0]},T=t=>u[t],V=t=>{const e=T(t);if(e)return e.getValue()},O=(t,e)=>{const n=T(t);n&&(n.setValue(e),"cascade"===m.value&&y(t))},S=t=>{const e=T(t);if(e)return e.state.index},D=(t,e)=>{const n=T(t);n&&(n.setIndex(e),"cascade"===m.value&&y(t))},K=()=>u.map((t=>t.getValue())),P=t=>{"plain"===m.value?e(t,V(0),S(0)):e(t,K(),g())},E=()=>{u.forEach((t=>t.stopMomentum())),P("confirm")},z=()=>P("cancel"),A=()=>{const e=t.cancelButtonText||j("cancel");return v("button",{type:"button",class:[$("cancel"),k],onClick:z},[n.cancel?n.cancel():e])},F=()=>{const e=t.confirmButtonText||j("confirm");return v("button",{type:"button",class:[$("confirm"),k],onClick:E},[n.confirm?n.confirm():e])},J=()=>{if(t.showToolbar){const e=n.toolbar||n.default;return v("div",{class:$("toolbar")},[e?e():[A(),n.title?n.title():t.title?v("div",{class:[$("title"),"van-ellipsis"]},[t.title]):void 0,F()]])}},L=()=>a.value.map(((o,a)=>{var i;return v(M,{textKey:l,readonly:t.readonly,allowHtml:t.allowHtml,className:o.className,itemHeight:d.value,defaultIndex:null!=(i=o.defaultIndex)?i:+t.defaultIndex,swipeDuration:t.swipeDuration,initialOptions:o[s],visibleItemCount:t.visibleItemCount,onChange:()=>(t=>{"cascade"===m.value&&y(t),"plain"===m.value?e("change",V(0),S(0)):e("change",K(),t)})(a)},{option:n.option})})),Y=t=>{if(o.value){const e={height:`${d.value}px`},n={backgroundSize:`100% ${(t-d.value)/2}px`};return[v("div",{class:$("mask"),style:n},null),v("div",{class:[N,$("frame")],style:e},null)]}},q=()=>{const e=d.value*+t.visibleItemCount,n={height:`${e}px`};return v("div",{class:$("columns"),style:n,onTouchmove:h},[L(),Y(e)])};return p((()=>t.columns),(()=>{const{columns:e}=t;"plain"===m.value?a.value=[{[s]:e}]:"cascade"===m.value?(()=>{var e;const n=[];let o={[i]:t.columns};for(;o&&o[i];){const a=o[i];let l=null!=(e=o.defaultIndex)?e:+t.defaultIndex;for(;a[l]&&a[l].disabled;){if(!(l<a.length-1)){l=0;break}l++}n.push({[s]:o[i],className:o.className,defaultIndex:l}),o=a[l]}a.value=n})():a.value=e,o.value=a.value.some((t=>t[s]&&0!==t[s].length))}),{immediate:!0}),f({confirm:E,getValues:K,setValues:t=>{t.forEach(((t,e)=>{O(e,t)}))},getIndexes:g,setIndexes:t=>{t.forEach(((t,e)=>{D(e,t)}))},getColumnIndex:S,setColumnIndex:D,getColumnValue:V,setColumnValue:O,getColumnValues:t=>{const e=T(t);if(e)return e.state.options},setColumnValues:b}),()=>{var e,o;return v("div",{class:$()},["top"===t.toolbarPosition?J():null,t.loading?v(H,{class:$("loading")},null):null,null==(e=n["columns-top"])?void 0:e.call(n),q(),null==(o=n["columns-bottom"])?void 0:o.call(n),"bottom"===t.toolbarPosition?J():null])}}});export{P as p,E as s};
