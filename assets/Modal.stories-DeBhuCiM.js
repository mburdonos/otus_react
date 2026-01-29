import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as n}from"./Modal-zaJ1N8BB.js";import"./iframe-C3N5KnWD.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"UI/base_components/Modal",component:n,tags:["autodocs"],argTypes:{visible:{control:"boolean",description:"Видимость модального окна"},children:{control:"text",description:"Содержимое модального окна"}}},r={args:{visible:!0,children:"Это содержимое модального окна."}},i={args:{visible:!1,children:"Это содержимое не будет видно, так как visible=false."}},s={args:{visible:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"Длинный текст внутри модального окна."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Пункт списка 1"}),e.jsx("li",{children:"Пункт списка 2"}),e.jsx("li",{children:"Пункт списка 3"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    children: 'Это содержимое модального окна.'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false,
    children: 'Это содержимое не будет видно, так как visible=false.'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    children: <div>
        <p>Длинный текст внутри модального окна.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>Пункт списка 1</li>
          <li>Пункт списка 2</li>
          <li>Пункт списка 3</li>
        </ul>
      </div>
  }
}`,...s.parameters?.docs?.source}}};const c=["Default","Hidden","WithLongContent"];export{r as Default,i as Hidden,s as WithLongContent,c as __namedExportsOrder,d as default};
