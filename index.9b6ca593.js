var e=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(o,r,l)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[r]=l;import{_ as t,d as n,q as c,a as s,c as u,R as i,D as m,e as p}from"./index.2ee04863.js";var b=t(n({props:{name:null,multicolor:{type:Boolean,default:!1},color:{default:"currentColor"},size:{default:"unset"}},setup(e){const t=e,n=c((()=>{const{name:e}=t;return((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&a(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&a(e,n,t[n]);return e})({color:t.color,"font-size":t.size},t.multicolor?{background:`url(./img/${e}.svg) no-repeat`,"background-size":"100% 100%","background-color":"transparent"}:{mask:`url(./img/${e}.svg) 0% 0% / 100% 100% no-repeat`,"-webkit-mask":`url(./img/${e}.svg) 0% 0% / 100% 100% no-repeat`,"background-color":"currentColor"})}));return(e,o)=>(s(),u("div",{class:"m-icon h-20px w-20px",style:i(m(n)),onClick:o[0]||(o[0]=o=>e.$emit("click"))},null,4))}}),[["__scopeId","data-v-f6bdf6aa"]]);const d={class:""},f=n({setup:e=>(e,o)=>(s(),u("div",d,[p(b,{name:"a",color:"red",multicolor:""}),p(b,{name:"b",color:"blue",multicolor:""}),p(b,{name:"c",color:"#666666"}),p(b,{name:"bug-single",color:"#666666"}),p(b,{name:"yue-single",color:"#fff"}),p(b,{name:"dingyue-single",color:"#000",multicolor:""})]))});export{f as default};
