import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CdM7U4i8.js";import{H as c}from"./Header-DawXu-j2.js";import"./preload-helper-PPVm8Dsz.js";import"./Logo-BuBnv687.js";const d="_layout_t1uaw_1",u="_main_t1uaw_8",r={layout:d,main:u},a=({title:o,children:s,className:l})=>e.jsxs("div",{className:`${r.layout} ${l||""}`,children:[e.jsx(c,{title:o}),e.jsx("main",{className:r.main,children:s})]});a.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{title:{required:!0,tsType:{name:"string"},description:"Заголовок страницы, передаётся в Header"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Основной контент страницы"},className:{required:!1,tsType:{name:"string"},description:"Дополнительный класс для кастомизации"}}};const j={title:"UI/base_components/Layout",component:a,tags:["autodocs"],argTypes:{title:{control:"text",description:"Заголовок страницы, передаётся в компонент Header"},children:{control:"text",description:"Основной контент страницы"},className:{control:"text",description:"Дополнительный класс для кастомизации"}}},i={args:{title:"Главная страница",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Добро пожаловать!"}),e.jsx("p",{children:"Это основной контент страницы. Здесь может быть текст, изображения, формы и другие компоненты."})]})}},t={args:{title:"Статья",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Длинная статья"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),e.jsx("p",{children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Пункт списка 1"}),e.jsx("li",{children:"Пункт списка 2"}),e.jsx("li",{children:"Пункт списка 3"})]})]})}},n={args:{title:"",children:e.jsx("p",{children:"Пустой контент."})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Главная страница',
    children: <div>
        <h2>Добро пожаловать!</h2>
        <p>
          Это основной контент страницы. Здесь может быть текст, изображения, 
          формы и другие компоненты.
        </p>
      </div>
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Статья',
    children: <div>
        <h2>Длинная статья</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>Пункт списка 1</li>
          <li>Пункт списка 2</li>
          <li>Пункт списка 3</li>
        </ul>
      </div>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: '',
    children: <p>Пустой контент.</p>
  }
}`,...n.parameters?.docs?.source}}};const f=["Default","WithLongContent","Minimal"];export{i as Default,n as Minimal,t as WithLongContent,f as __namedExportsOrder,j as default};
