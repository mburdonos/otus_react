import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C3N5KnWD.js";import"./preload-helper-PPVm8Dsz.js";const u="_content_b3c1u_1",p="_column_title_b3c1u_10",m="_changes_b3c1u_30",t={content:u,column_title:p,changes:m},c=({sum_operation:i=0,category:l="base category",description:d="base category description",date_time:o=new Date("2026-01-01")})=>e.jsxs("div",{className:t.content,children:[e.jsxs("table",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:t.column_title,children:"sum_operation: "}),e.jsx("td",{children:i})]}),e.jsxs("tr",{children:[e.jsx("td",{className:t.column_title,children:"category: "}),e.jsx("td",{children:l})]}),e.jsxs("tr",{children:[e.jsx("td",{className:t.column_title,children:"description: "}),e.jsx("td",{children:d})]}),e.jsxs("tr",{children:[e.jsx("td",{className:t.column_title,children:"date: "}),e.jsxs("td",{children:[o.toLocaleDateString("ru-RU")," ",o.toLocaleTimeString("ru-RU")]})]})]}),e.jsx("button",{className:t.changes,children:"Редактировать"})]});c.__docgenInfo={description:"",methods:[],displayName:"FullOperationInfo",props:{sum_operation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},category:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'base category'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'base category description'",computed:!1}},date_time:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"new Date('2026-01-01')",computed:!1}}}};const h={title:"UI/income_expenses/FullOperationInfo",component:c,tags:["autodocs"],argTypes:{sum_operation:{control:"number",description:"Сумма операции (число)",defaultValue:1500},category:{control:"text",description:"Категория операции",defaultValue:"Продукты"},description:{control:"text",description:"Подробное описание операции",defaultValue:"Покупка в супермаркете"},date_time:{control:{type:"date"},description:"Дата и время операции",defaultValue:new Date("2026-01-15T10:30:00")}}},a={args:{sum_operation:2500,category:"Развлечения",description:"Билет в кино и попкорн",date_time:new Date("2026-01-14T19:45:00")}},s={args:{...a.args,description:"Очень подробное описание операции, которое занимает несколько строк и демонстрирует, как компонент обрабатывает длинный текст."}},r={args:{sum_operation:0,category:"",description:"",date_time:new Date}},n={args:{...a.args,date_time:new Date("2026-12-31T23:59:00")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sum_operation: 2500,
    category: 'Развлечения',
    description: 'Билет в кино и попкорн',
    date_time: new Date('2026-01-14T19:45:00')
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'Очень подробное описание операции, которое занимает несколько строк и демонстрирует, как компонент обрабатывает длинный текст.'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    sum_operation: 0,
    category: '',
    description: '',
    date_time: new Date()
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    date_time: new Date('2026-12-31T23:59:00')
  }
}`,...n.parameters?.docs?.source}}};const x=["Default","WithLongDescription","MinimalValues","FutureDate"];export{a as Default,n as FutureDate,r as MinimalValues,s as WithLongDescription,x as __namedExportsOrder,h as default};
