import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-M7gFYERx.js";import"./preload-helper-PPVm8Dsz.js";const d="_content_1h4jw_1",m="_column_title_1h4jw_20",n={content:d,column_title:m},u=(r,s)=>(r.length>s&&(r=r.substring(0,s),r+="..."),r),l=({sumOperation:r=0,category:s="base category",description:c,lengthDescription:p=30})=>e.jsx("div",{className:n.content,children:e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:n.column_title,children:"sum_operation: "}),e.jsx("td",{children:r})]}),e.jsxs("tr",{children:[e.jsx("td",{className:n.column_title,children:"category: "}),e.jsx("td",{children:s})]}),c?e.jsxs("tr",{children:[e.jsx("td",{className:n.column_title,children:"description: "}),e.jsx("td",{children:u(c,p)})]}):null]})});l.__docgenInfo={description:"",methods:[],displayName:"ShortOperation",props:{sumOperation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},category:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'base category'",computed:!1}},size:{required:!0,tsType:{name:"union",raw:"'small' | 'big'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'big'"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},lengthDescription:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"30",computed:!1}}}};const _={title:"UI/income_expenses/ShortOperation",component:l,tags:["autodocs"],argTypes:{sumOperation:{control:"number",description:"Сумма операции"},category:{control:"text",description:"Категория операции"},description:{control:"text",description:"Описание операции"},size:{control:"radio",options:["small","big"],description:"Размер компонента"},lengthDescription:{control:"range",min:10,max:100,step:5,description:"Максимальная длина описания (с обрезкой)"}}},t={args:{sumOperation:1500,category:"Продукты",description:"Покупка в супермаркете на сумму 1500 рублей",lengthDescription:30}},o={args:{...t.args}},a={args:{...t.args,description:"Очень длинное описание, которое будет обрезано до указанной длины с добавлением многоточия...",lengthDescription:20}},i={args:{sumOperation:0,category:"",lengthDescription:30}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sumOperation: 1500,
    category: 'Продукты',
    description: 'Покупка в супермаркете на сумму 1500 рублей',
    lengthDescription: 30
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'Очень длинное описание, которое будет обрезано до указанной длины с добавлением многоточия...',
    lengthDescription: 20
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sumOperation: 0,
    category: '',
    lengthDescription: 30
  }
}`,...i.parameters?.docs?.source}}};const f=["Default","BigSize","LongDescription","EmptyValues"];export{o as BigSize,t as Default,i as EmptyValues,a as LongDescription,f as __namedExportsOrder,_ as default};
