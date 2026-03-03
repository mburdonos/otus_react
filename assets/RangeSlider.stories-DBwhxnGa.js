import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-4iUjYcL6.js";import"./preload-helper-PPVm8Dsz.js";const v="_content_32vwn_1",h="_rangeInput_32vwn_6",x="_track_32vwn_29",j="_fill_32vwn_37",w="_range_values_32vwn_45",n={content:v,rangeInput:h,track:x,fill:j,range_values:w},d=({min:a=0,max:s=100,step:i=1})=>{const[t,m]=p.useState(a),[l,g]=p.useState(s),_=u=>{const r=parseInt(u.target.value,10);r<l&&m(r)},f=u=>{const r=parseInt(u.target.value,10);r>t&&g(r)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:n.content,children:[e.jsx("input",{type:"range",min:a,max:s,step:i,value:t,onChange:_,className:n.rangeInput}),e.jsx("input",{type:"range",min:a,max:s,step:i,value:l,onChange:f,className:n.rangeInput}),e.jsx("div",{className:n.track,children:e.jsx("div",{className:n.fill,style:{left:`${(t-a)/(s-a)*100}%`,width:`${(l-t)/(s-a)*100}%`}})}),e.jsxs("div",{className:n.range_values,children:[e.jsx("span",{children:t}),e.jsx("span",{children:l})]})]})})};d.__docgenInfo={description:"",methods:[],displayName:"RangeSlider",props:{min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const N={title:"ui/online_store/RangeSlider",component:d},o={args:{min:0,max:100,step:1}},c={args:{min:10,max:500,step:10}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    min: 10,
    max: 500,
    step: 10
  }
}`,...c.parameters?.docs?.source}}};const S=["Default","CustomRange"];export{c as CustomRange,o as Default,S as __namedExportsOrder,N as default};
