import"./iframe-DH2DIW6S.js";import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./preload-helper-PPVm8Dsz.js";const d="_content_1h4jw_1",m="_column_title_1h4jw_20",n={content:d,column_title:m},u=(s,t)=>(s.length>t&&(s=s.substring(0,t),s+="..."),s),c=({sum_operation:s=0,category:t="base category",description:l="base category description",size:g="small",length_description:p=30})=>e.jsx("div",{className:n.content,children:e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:n.column_title,children:"sum_operation: "}),e.jsx("td",{children:s})]}),e.jsxs("tr",{children:[e.jsx("td",{className:n.column_title,children:"category: "}),e.jsx("td",{children:t})]}),e.jsxs("tr",{children:[e.jsx("td",{className:n.column_title,children:"description: "}),e.jsx("td",{children:u(l,p)})]})]})});c.__docgenInfo={description:"",methods:[],displayName:"ShortOperation",props:{sum_operation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},category:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'base category'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'base category description'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'big'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'big'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},length_description:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"30",computed:!1}}}};const y={title:"UI/income_expenses/ShortOperation",component:c,tags:["autodocs"],argTypes:{sum_operation:{control:"number",description:"Сумма операции"},category:{control:"text",description:"Категория операции"},description:{control:"text",description:"Описание операции"},size:{control:"radio",options:["small","big"],description:"Размер компонента"},length_description:{control:"range",min:10,max:100,step:5,description:"Максимальная длина описания (с обрезкой)"}}},r={args:{sum_operation:1500,category:"Продукты",description:"Покупка в супермаркете на сумму 1500 рублей",size:"small",length_description:30}},o={args:{...r.args,size:"big"}},a={args:{...r.args,description:"Очень длинное описание, которое будет обрезано до указанной длины с добавлением многоточия...",length_description:20}},i={args:{sum_operation:0,category:"",description:"",size:"small",length_description:30}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    sum_operation: 1500,
    category: 'Продукты',
    description: 'Покупка в супермаркете на сумму 1500 рублей',
    size: 'small',
    length_description: 30
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'big'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'Очень длинное описание, которое будет обрезано до указанной длины с добавлением многоточия...',
    length_description: 20
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sum_operation: 0,
    category: '',
    description: '',
    size: 'small',
    length_description: 30
  }
}`,...i.parameters?.docs?.source}}};const j=["Default","BigSize","LongDescription","EmptyValues"];export{o as BigSize,r as Default,i as EmptyValues,a as LongDescription,j as __namedExportsOrder,y as default};
