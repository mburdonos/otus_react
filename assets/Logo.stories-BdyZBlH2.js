import{L as t}from"./Logo-DvRLjEK8.js";import"./jsx-runtime-u17CrQMm.js";const c={title:"UI/base_components/Logo",component:t,tags:["autodocs"],argTypes:{text:{control:"text",description:'Текст внутри логотипа (по умолчанию "LOGO")'},className:{control:"text",description:"Дополнительный класс для кастомной стилизации"}}},e={args:{text:"MYBRAND"}},s={args:{text:"APP"}},r={args:{text:"SM",className:"small-logo"},parameters:{css:`
      .small-logo {
        width: 40px;
        height: 40px;
        font-size: 0.8rem;
      }
    `}},a={args:{text:"BIG",className:"large-logo"},parameters:{css:`
      .large-logo {
        width: 800px;
        height: 80px;
        font-size: 1.2rem;
      }
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'MYBRAND'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'APP'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'SM',
    className: 'small-logo'
  },
  parameters: {
    css: \`
      .small-logo {
        width: 40px;
        height: 40px;
        font-size: 0.8rem;
      }
    \`
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'BIG',
    className: 'large-logo'
  },
  parameters: {
    css: \`
      .large-logo {
        width: 800px;
        height: 80px;
        font-size: 1.2rem;
      }
    \`
  }
}`,...a.parameters?.docs?.source}}};const m=["Default","WithCustomText","Small","Large"];export{e as Default,a as Large,r as Small,s as WithCustomText,m as __namedExportsOrder,c as default};
