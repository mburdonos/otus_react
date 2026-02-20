import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-M7gFYERx.js";import"./preload-helper-PPVm8Dsz.js";const m="_container_6sb42_1",u="_image_6sb42_11",g="_category_6sb42_19",y="_title_6sb42_27",_="_description_6sb42_34",T="_price_6sb42_41",x="_addToCart_6sb42_48",t={container:m,image:u,category:g,title:y,description:_,price:T,addToCart:x},s=({title:o,category:l,description:d,price:r,imageUrl:c,discount:p=!1})=>(r=p?r*.9:r,e.jsxs("div",{className:t.container,children:[e.jsx("img",{src:c||"not_found.jpg",alt:o,className:t.image}),e.jsx("p",{className:t.category,children:l}),e.jsx("h1",{className:t.title,children:o}),e.jsx("div",{className:t.description,children:d}),e.jsxs("p",{className:t.price,children:["₽",p?e.jsxs(e.Fragment,{children:[e.jsx("del",{children:r.toLocaleString("ru-RU")}),e.jsxs("div",{children:["₽",(r*.9).toLocaleString("ru-RU")]})]}):r.toLocaleString("ru-RU")]}),e.jsx("button",{type:"button",className:t.addToCart,"aria-label":"Добавить в корзину",children:"В корзину"})]}));s.displayName="OperationDetail";s.__docgenInfo={description:"",methods:[],displayName:"OperationDetail",props:{title:{required:!0,tsType:{name:"string"},description:""},category:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""},discount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b={title:"ui/online_store/OperationDetail",component:s,tags:["autodocs"],argTypes:{title:{control:"text",description:"Название товара/операции"},category:{control:"text",description:"Категория товара"},description:{control:"text",description:"Полное описание товара"},price:{control:"number",description:"Цена в рублях"},imageUrl:{control:"text",description:"URL изображения"}}},i={args:{title:"Смартфон Apple iPhone 15 Pro Max",category:"Смартфоны",description:"Флагманский смартфон с титановым корпусом, дисплеем Super Retina XDR и камерой 48 МП. Процессор A17 Pro, 6 ГБ ОЗУ, 256 ГБ памяти. Поддержка USB-C, Dynamic Island, iOS 17. Время работы батареи до 29 часов. Доступен в цветах: Natural Titanium, White Titanium, Blue Titanium.",price:199990,imageUrl:"iphone_15.jpg"}},a={args:{title:"Курс по React и TypeScript",category:"Онлайн-образование",description:"Полный курс по разработке на React с использованием TypeScript. Изучите компоненты, хуки, маршрутизацию, работу с API и тестирование. 30 видеоуроков, домашние задания, поддержка наставника. Доступ навсегда.",price:9990,imageUrl:""}},n={args:{title:"Блокнот A5 на пружине",category:"Офисные товары",description:"Удобный блокнот формата A5 с белой бумагой и твёрдой обложкой. 100 листов, пружинный механизм, подходит для записей и эскизов.",price:199,imageUrl:"note.jpg",discount:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Смартфон Apple iPhone 15 Pro Max',
    category: 'Смартфоны',
    description: 'Флагманский смартфон с титановым корпусом, дисплеем Super Retina XDR и камерой 48 МП. ' + 'Процессор A17 Pro, 6 ГБ ОЗУ, 256 ГБ памяти. Поддержка USB-C, Dynamic Island, iOS 17. ' + 'Время работы батареи до 29 часов. Доступен в цветах: Natural Titanium, White Titanium, Blue Titanium.',
    price: 199990,
    imageUrl: 'iphone_15.jpg'
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Курс по React и TypeScript',
    category: 'Онлайн-образование',
    description: 'Полный курс по разработке на React с использованием TypeScript. ' + 'Изучите компоненты, хуки, маршрутизацию, работу с API и тестирование. ' + '30 видеоуроков, домашние задания, поддержка наставника. Доступ навсегда.',
    price: 9990,
    imageUrl: ''
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Блокнот A5 на пружине',
    category: 'Офисные товары',
    description: 'Удобный блокнот формата A5 с белой бумагой и твёрдой обложкой. ' + '100 листов, пружинный механизм, подходит для записей и эскизов.',
    price: 199,
    imageUrl: 'note.jpg',
    discount: true
  }
}`,...n.parameters?.docs?.source}}};const N=["Default","NoImage","LowPrice"];export{i as Default,n as LowPrice,a as NoImage,N as __namedExportsOrder,b as default};
