import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-M7gFYERx.js";import"./preload-helper-PPVm8Dsz.js";const h="_content_32vwn_1",x="_rangeInput_32vwn_6",w="_track_32vwn_29",b="_fill_32vwn_37",y="_range_values_32vwn_45",r={content:h,rangeInput:x,track:w,fill:b,range_values:y},d=({min:a=0,max:s=100,step:m=1,value:j=[a,s],onChange:i})=>{const[t,g]=p.useState(a),[u,f]=p.useState(s),v=c=>{const n=parseInt(c.target.value,0);n<u&&(g(n),i?.([n,u]))},_=c=>{const n=parseInt(c.target.value,0);n>t&&(f(n),i?.([t,n]))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:r.content,children:[e.jsx("input",{type:"range",min:a,max:s,step:m,value:t,onChange:v,className:r.rangeInput}),e.jsx("input",{type:"range",min:a,max:s,step:m,value:u,onChange:_,className:r.rangeInput}),e.jsx("div",{className:r.track,children:e.jsx("div",{className:r.fill,style:{left:`${(t-a)/(s-a)*100}%`,width:`${(u-t)/(s-a)*100}%`}})}),e.jsxs("div",{className:r.range_values,children:[e.jsx("span",{children:t}),e.jsx("span",{children:u})]})]})})};d.__docgenInfo={description:"",methods:[],displayName:"RangeSlider",props:{min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},value:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[min, max]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: [number, number]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"values"}],return:{name:"void"}}},description:""}}};const S={title:"ui/online_store/RangeSlider",component:d},l={args:{min:0,max:100,step:1}},o={args:{min:10,max:500,step:10}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    min: 10,
    max: 500,
    step: 10
  }
}`,...o.parameters?.docs?.source}}};const C=["Default","CustomRange"];export{o as CustomRange,l as Default,C as __namedExportsOrder,S as default};
