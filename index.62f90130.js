import{g as e,k as a,n as t,d as r,r as l,G as n,q as o,H as i,J as s,e as u,K as d,M as v,N as c,p as m,y as b,O as g,j as h}from"./index.2977117e.js";const[p,f]=e("slider");const y=h(r({name:p,props:{min:a(0),max:a(100),step:a(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:t,buttonSize:t,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}},emits:["change","drag-end","drag-start","update:modelValue"],setup(e,{emit:a,slots:t}){let r,h,p;const y=l(),V=l(),N=n(),x=o((()=>Number(e.max)-Number(e.min))),w=o((()=>{const a=e.vertical?"width":"height";return{background:e.inactiveColor,[a]:i(e.barHeight)}})),S=a=>e.range&&Array.isArray(a),C=()=>{const{modelValue:a,min:t}=e;return S(a)?100*(a[1]-a[0])/x.value+"%":100*(a-Number(t))/x.value+"%"},k=o((()=>{const a={[e.vertical?"height":"width"]:C(),background:e.activeColor};V.value&&(a.transition="none");return a[e.vertical?e.reverse?"bottom":"top":e.reverse?"right":"left"]=(()=>{const{modelValue:a,min:t}=e;return S(a)?100*(a[0]-Number(t))/x.value+"%":"0%"})(),a})),B=a=>{const t=+e.min,r=+e.max,l=+e.step;a=g(a,t,r);const n=Math.round((a-t)/l)*l;return v(t,n)},T=(e,a)=>JSON.stringify(e)===JSON.stringify(a),z=(t,r)=>{t=S(t)?(a=>{var t,r;const l=null!=(t=a[0])?t:Number(e.min),n=null!=(r=a[1])?r:Number(e.max);return l>n?[n,l]:[l,n]})(t).map(B):B(t),T(t,e.modelValue)||a("update:modelValue",t),r&&!T(t,p)&&a("change",t)},A=a=>{if(a.stopPropagation(),e.disabled||e.readonly)return;const{min:t,reverse:r,vertical:l,modelValue:n}=e,o=c(y),i=l?o.height:o.width,s=Number(t)+(l?r?o.bottom-a.clientY:a.clientY-o.top:r?o.right-a.clientX:a.clientX-o.left)/i*x.value;if(S(n)){const[e,a]=n;z(s<=(e+a)/2?[s,a]:[e,s],!0)}else z(s,!0)},H=t=>{if(e.disabled||e.readonly)return;"start"===V.value&&a("drag-start",t),m(t,!0),N.move(t),V.value="dragging";const l=c(y);let n=(e.vertical?N.deltaY.value:N.deltaX.value)/(e.vertical?l.height:l.width)*x.value;if(e.reverse&&(n=-n),S(p)){const a=e.reverse?1-r:r;h[a]=p[a]+n}else h=p+n;z(h)},J=t=>{e.disabled||e.readonly||("dragging"===V.value&&(z(h,!0),a("drag-end",t)),V.value="")},O=a=>{if("number"==typeof a){return f("button-wrapper",["left","right"][a])}return f("button-wrapper",e.reverse?"left":"right")},X=(a,r)=>{if("number"==typeof r){const e=t[0===r?"left-button":"right-button"];if(e)return e({value:a})}return t.button?t.button({value:a}):u("div",{class:f("button"),style:b(e.buttonSize)},null)},Y=a=>{const t="number"==typeof a?e.modelValue[a]:e.modelValue;return u("div",{role:"slider",class:O(a),tabindex:e.disabled?void 0:0,"aria-valuemin":e.min,"aria-valuenow":t,"aria-valuemax":e.max,"aria-disabled":e.disabled||void 0,"aria-readonly":e.readonly||void 0,"aria-orientation":e.vertical?"vertical":"horizontal",onTouchstart:t=>{"number"==typeof a&&(r=a),(a=>{e.disabled||e.readonly||(N.start(a),h=e.modelValue,p=S(h)?h.map(B):B(h),V.value="start")})(t)},onTouchmove:H,onTouchend:J,onTouchcancel:J,onClick:d},[X(t,a)])};return z(e.modelValue),s((()=>e.modelValue)),()=>u("div",{ref:y,style:w.value,class:f({vertical:e.vertical,disabled:e.disabled}),onClick:A},[u("div",{class:f("bar"),style:k.value},[e.range?[Y(0),Y(1)]:Y()])])}}));export{y as S};
