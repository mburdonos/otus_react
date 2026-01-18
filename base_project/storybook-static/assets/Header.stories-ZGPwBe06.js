import{H as r}from"./Header-CpLkCcbm.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DH2DIW6S.js";import"./preload-helper-PPVm8Dsz.js";import"./Logo-BE_3gcoZ.js";const m={title:"UI/base_components/Header",component:r,tags:["autodocs"],argTypes:{title:{control:"text",description:"Заголовок страницы, отображается справа от логотипа"},className:{control:"text",description:"Дополнительный класс для кастомизации"}}},e={args:{title:"Главная страница"}},a={args:{title:"Очень длинный заголовок страницы, который может переноситься"}},t={args:{title:"Кратко",className:"compact-header"},parameters:{css:`
      .compact-header {
        padding: 8px 16px;
        gap: 10px;
      }
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Главная страница'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Очень длинный заголовок страницы, который может переноситься'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Кратко',
    className: 'compact-header'
  },
  parameters: {
    css: \`
      .compact-header {
        padding: 8px 16px;
        gap: 10px;
      }
    \`
  }
}`,...t.parameters?.docs?.source}}};const i=["Default","WithLongTitle","Compact"];export{t as Compact,e as Default,a as WithLongTitle,i as __namedExportsOrder,m as default};
