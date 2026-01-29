import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as c,L as s}from"./Header-B4hDlG9X.js";import{T as n}from"./ThemeToggle-B_nPodrZ.js";import"./iframe-C3N5KnWD.js";import"./preload-helper-PPVm8Dsz.js";import"./Logo-C0alvbh7.js";import"./index-Cpmp2-ha.js";const h={title:"UI/base_components/Header",component:c,tags:["autodocs"],decorators:[r=>e.jsx(n,{children:e.jsx(s,{children:e.jsx(r,{})})})],argTypes:{title:{control:"text",description:"Заголовок страницы, отображается справа от логотипа"},className:{control:"text",description:"Дополнительный класс для кастомизации"}}},a={args:{title:"main_page"},decorators:[r=>e.jsx(n,{children:e.jsx(s,{children:e.jsx(r,{})})})]},o={args:{title:"long_title"},decorators:[r=>e.jsx(n,{children:e.jsx(s,{children:e.jsx(r,{})})})]},t={args:{title:"short_title",className:"compact-header"},decorators:[r=>e.jsx(n,{children:e.jsx(s,{children:e.jsx(r,{})})})],parameters:{css:`
      .compact-header {
        padding: 8px 16px;
        gap: 10px;
      }
    `}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'main_page'
  },
  decorators: [Story => <ThemeProvider>
        <LanguageProvider>
        <Story />
        </LanguageProvider>
      </ThemeProvider>]
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'long_title'
  },
  decorators: [Story => <ThemeProvider>
        <LanguageProvider>
        <Story />
        </LanguageProvider>
      </ThemeProvider>]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'short_title',
    className: 'compact-header'
  },
  decorators: [Story => <ThemeProvider>
        <LanguageProvider>
        <Story />
        </LanguageProvider>
      </ThemeProvider>],
  parameters: {
    css: \`
      .compact-header {
        padding: 8px 16px;
        gap: 10px;
      }
    \`
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","WithLongTitle","Compact"];export{t as Compact,a as Default,o as WithLongTitle,u as __namedExportsOrder,h as default};
