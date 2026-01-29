import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-C3N5KnWD.js";import{M as x}from"./Modal-zaJ1N8BB.js";import"./preload-helper-PPVm8Dsz.js";const _="_container_161ae_1",b="_inputGroup_161ae_6",f="_label_161ae_10",g="_input_161ae_6",h="_button_161ae_31",e={container:_,inputGroup:b,label:f,input:g,button:h},i=({initialText:l=""})=>{const[s,c]=r.useState(l),[p,o]=r.useState(!1),u=()=>{o(!0)},d=()=>{o(!1)};return t.jsxs("div",{className:e.container,children:[t.jsxs("div",{className:e.inputGroup,children:[t.jsx("label",{htmlFor:"text-input",className:e.label,children:"Введите текст:"}),t.jsx("input",{id:"text-input",type:"text",value:s,onChange:m=>c(m.target.value),className:e.input})]}),t.jsx("button",{onClick:u,className:e.button,children:"Открыть модальное окно"}),p&&t.jsx(x,{visible:!0,handleCloseModal:d,children:s||"Текст не введён"})]})};i.__docgenInfo={description:"",methods:[],displayName:"ModalInput",props:{initialText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const y={title:"UI/base_components/ModalInput",component:i,tags:["autodocs"],argTypes:{initialText:{control:"text",description:"Начальный текст в инпуте"}}},a={args:{initialText:""}},n={args:{initialText:"Привет из Storybook!"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: ''
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Привет из Storybook!'
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","WithInitialText"];export{a as Default,n as WithInitialText,v as __namedExportsOrder,y as default};
