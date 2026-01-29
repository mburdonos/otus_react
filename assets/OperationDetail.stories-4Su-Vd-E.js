import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C3N5KnWD.js";import"./preload-helper-PPVm8Dsz.js";const l="_container_6sb42_1",m="_image_6sb42_11",g="_category_6sb42_19",u="_title_6sb42_27",_="_description_6sb42_34",y="_price_6sb42_41",T="_addToCart_6sb42_48",t={container:l,image:m,category:g,title:u,description:_,price:y,addToCart:T},n=({title:o,category:c,description:p,price:d,imageUrl:s})=>e.jsxs("div",{className:t.container,children:[e.jsx("img",{src:s||"not_found.jpg",alt:o,className:t.image}),e.jsx("p",{className:t.category,children:c}),e.jsx("h1",{className:t.title,children:o}),e.jsx("div",{className:t.description,children:p}),e.jsxs("p",{className:t.price,children:["₽",d.toLocaleString("ru-RU")]}),e.jsx("button",{type:"button",className:t.addToCart,"aria-label":"Добавить в корзину",children:"В корзину"})]});n.displayName="OperationDetail";n.__docgenInfo={description:"",methods:[],displayName:"OperationDetail",props:{title:{required:!0,tsType:{name:"string"},description:""},category:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""}}};const S={title:"ui/online_store/OperationDetail",component:n,tags:["autodocs"],argTypes:{title:{control:"text",description:"Название товара/операции"},category:{control:"text",description:"Категория товара"},description:{control:"text",description:"Полное описание товара"},price:{control:"number",description:"Цена в рублях"},imageUrl:{control:"text",description:"URL изображения"}}},r={args:{title:"Смартфон Apple iPhone 15 Pro Max",category:"Смартфоны",description:"Флагманский смартфон с титановым корпусом, дисплеем Super Retina XDR и камерой 48 МП. Процессор A17 Pro, 6 ГБ ОЗУ, 256 ГБ памяти. Поддержка USB-C, Dynamic Island, iOS 17. Время работы батареи до 29 часов. Доступен в цветах: Natural Titanium, White Titanium, Blue Titanium.",price:199990,imageUrl:"iphone_15.jpg"}},i={args:{title:"Курс по React и TypeScript",category:"Онлайн-образование",description:"Полный курс по разработке на React с использованием TypeScript. Изучите компоненты, хуки, маршрутизацию, работу с API и тестирование. 30 видеоуроков, домашние задания, поддержка наставника. Доступ навсегда.",price:9990,imageUrl:""}},a={args:{title:"Блокнот A5 на пружине",category:"Офисные товары",description:"Удобный блокнот формата A5 с белой бумагой и твёрдой обложкой. 100 листов, пружинный механизм, подходит для записей и эскизов.",price:199,imageUrl:"note.jpg"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Смартфон Apple iPhone 15 Pro Max',
    category: 'Смартфоны',
    description: 'Флагманский смартфон с титановым корпусом, дисплеем Super Retina XDR и камерой 48 МП. ' + 'Процессор A17 Pro, 6 ГБ ОЗУ, 256 ГБ памяти. Поддержка USB-C, Dynamic Island, iOS 17. ' + 'Время работы батареи до 29 часов. Доступен в цветах: Natural Titanium, White Titanium, Blue Titanium.',
    price: 199990,
    imageUrl: 'iphone_15.jpg'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Курс по React и TypeScript',
    category: 'Онлайн-образование',
    description: 'Полный курс по разработке на React с использованием TypeScript. ' + 'Изучите компоненты, хуки, маршрутизацию, работу с API и тестирование. ' + '30 видеоуроков, домашние задания, поддержка наставника. Доступ навсегда.',
    price: 9990,
    imageUrl: ''
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Блокнот A5 на пружине',
    category: 'Офисные товары',
    description: 'Удобный блокнот формата A5 с белой бумагой и твёрдой обложкой. ' + '100 листов, пружинный механизм, подходит для записей и эскизов.',
    price: 199,
    imageUrl: 'note.jpg'
  }
}`,...a.parameters?.docs?.source}}};const N=["Default","NoImage","LowPrice"];export{r as Default,a as LowPrice,i as NoImage,N as __namedExportsOrder,S as default};
