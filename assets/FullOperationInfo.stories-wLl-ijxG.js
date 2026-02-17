import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-XTyXaWuH.js";import"./preload-helper-PPVm8Dsz.js";const h="_content_b3c1u_1",f="_column_title_b3c1u_10",_="_changes_b3c1u_30",s={content:h,column_title:f,changes:_},d=({sumOperation:l=0,category:u="base category",dateTime:c=new Date("2026-01-01"),...p})=>{const m=Object.entries(p);return e.jsxs("div",{className:s.content,children:[e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:s.column_title,children:"sum_operation: "}),e.jsx("td",{children:l})]}),e.jsxs("tr",{children:[e.jsx("td",{className:s.column_title,children:"category: "}),e.jsx("td",{children:u})]}),e.jsxs("tr",{children:[e.jsx("td",{className:s.column_title,children:"date: "}),e.jsxs("td",{children:[c.toLocaleDateString("ru-RU")," ",c.toLocaleTimeString("ru-RU")]})]}),m.map(([i,g])=>e.jsxs("tr",{children:[e.jsx("td",{children:i}),e.jsx("td",{children:g})]},i))]}),e.jsx("button",{className:s.changes,children:"Редактировать"})]})};d.__docgenInfo={description:"",methods:[],displayName:"FullOperationInfo",props:{sumOperation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},category:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'base category'",computed:!1}},dateTime:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"new Date('2026-01-01')",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},countGoods:{required:!1,tsType:{name:"number"},description:""}}};const j={title:"UI/income_expenses/FullOperationInfo",component:d,tags:["autodocs"],argTypes:{sumOperation:{control:"number",description:"Сумма операции (число)",defaultValue:1500},category:{control:"text",description:"Категория операции",defaultValue:"Продукты"},dateTime:{control:{type:"date"},description:"Дата и время операции",defaultValue:new Date("2026-01-15T10:30:00")}}},t={args:{sumOperation:2500,category:"Развлечения",description:"Билет в кино и попкорн",dateTime:new Date("2026-01-14T19:45:00")}},r={args:{...t.args,countGoods:3}},a={args:{...t.args,description:"Очень подробное описание операции, которое занимает несколько строк и демонстрирует, как компонент обрабатывает длинный текст."}},n={args:{sumOperation:0,category:"",description:"",dateTime:new Date}},o={args:{...t.args,dateTime:new Date("2026-12-31T23:59:00")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    sumOperation: 2500,
    category: 'Развлечения',
    description: 'Билет в кино и попкорн',
    dateTime: new Date('2026-01-14T19:45:00')
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    countGoods: 3
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'Очень подробное описание операции, которое занимает несколько строк и демонстрирует, как компонент обрабатывает длинный текст.'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    sumOperation: 0,
    category: '',
    description: '',
    dateTime: new Date()
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dateTime: new Date('2026-12-31T23:59:00')
  }
}`,...o.parameters?.docs?.source}}};const y=["Default","WithOtherField","WithLongDescription","MinimalValues","FutureDate"];export{t as Default,o as FutureDate,n as MinimalValues,a as WithLongDescription,r as WithOtherField,y as __namedExportsOrder,j as default};
