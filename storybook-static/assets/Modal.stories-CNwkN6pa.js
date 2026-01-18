import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CdM7U4i8.js";import"./preload-helper-PPVm8Dsz.js";const l="_modalOverlay_14mwi_1",d="_modalContent_14mwi_14",c="_closeButton_14mwi_23",m="_modalBody_14mwi_40",o={modalOverlay:l,modalContent:d,closeButton:c,modalBody:m},r=({visible:i,children:a})=>i?e.jsx("div",{className:o.modalOverlay,children:e.jsxs("div",{className:o.modalContent,children:[e.jsx("button",{className:o.closeButton,type:"button",children:"×"}),e.jsx("div",{className:o.modalBody,children:a})]})}):null;r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const v={title:"UI/base_components/Modal",component:r,tags:["autodocs"],argTypes:{visible:{control:"boolean",description:"Видимость модального окна"},children:{control:"text",description:"Содержимое модального окна"}}},s={args:{visible:!0,children:"Это содержимое модального окна."}},n={args:{visible:!1,children:"Это содержимое не будет видно, так как visible=false."}},t={args:{visible:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"Длинный текст внутри модального окна."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Пункт списка 1"}),e.jsx("li",{children:"Пункт списка 2"}),e.jsx("li",{children:"Пункт списка 3"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    children: 'Это содержимое модального окна.'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false,
    children: 'Это содержимое не будет видно, так как visible=false.'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["Default","Hidden","WithLongContent"];export{s as Default,n as Hidden,t as WithLongContent,g as __namedExportsOrder,v as default};
