import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-DH2DIW6S.js";import"./preload-helper-PPVm8Dsz.js";const p="_card_1dglc_1",l="_image_1dglc_9",m="_title_1dglc_17",g="_description_1dglc_24",u="_price_1dglc_35",_="_addToCart_1dglc_42",r={card:p,image:l,title:m,description:g,price:u,addToCart:_},s=({title:o,description:c,price:d,imageUrl:n})=>e.jsxs("div",{className:r.card,children:[e.jsx("img",{src:n||"not_found.jpg",alt:o,className:r.image}),e.jsx("h3",{className:r.title,children:o}),e.jsx("p",{className:r.description,children:c}),e.jsxs("p",{className:r.price,children:["₽",d.toLocaleString()]}),e.jsx("button",{type:"button",className:r.addToCart,"aria-label":"Добавить в корзину",children:"В корзину"})]});s.displayName="ProductCard";s.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""}}};const y={title:"ui/online_store/ProductCard",component:s,tags:["autodocs"],argTypes:{title:{control:"text",description:"Название товара"},description:{control:"text",description:"Описание товара (обрезается до 3 строк)"},price:{control:"number",description:"Цена в рублях"},imageUrl:{control:"text",description:"URL изображения товара"}}},t={args:{title:"Ноутбук Lenovo IdeaPad",description:"Мощный ноутбук для работы и учёбы. Процессор Intel Core i5, 8 ГБ ОЗУ, SSD 256 ГБ. Лёгкий и компактный.",price:49990,imageUrl:"/lenovo.png"}},a={args:{title:"Смартфон Samsung Galaxy S23",description:"Флагманский смартфон с камерой 50 МП, процессором Snapdragon 8 Gen 2, 8 ГБ ОЗУ и 256 ГБ памяти. Поддержка 5G, защита IP68, экран 120 Гц. Идеально для фото и игр. Долговечная батарея, быстрая зарядка. Стильный дизайн, несколько цветовых вариантов.",price:69990,imageUrl:"samsung_a23.jpeg"}},i={args:{title:'Книга "JavaScript для начинающих"',description:"Подробное руководство по JavaScript для новичков. От основ до продвинутых тем.",price:1290,imageUrl:""}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Ноутбук Lenovo IdeaPad',
    description: 'Мощный ноутбук для работы и учёбы. Процессор Intel Core i5, 8 ГБ ОЗУ, SSD 256 ГБ. Лёгкий и компактный.',
    price: 49990,
    imageUrl: '/lenovo.png'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Смартфон Samsung Galaxy S23',
    description: 'Флагманский смартфон с камерой 50 МП, процессором Snapdragon 8 Gen 2, 8 ГБ ОЗУ и 256 ГБ памяти. Поддержка 5G, защита IP68, экран 120 Гц. Идеально для фото и игр. Долговечная батарея, быстрая зарядка. Стильный дизайн, несколько цветовых вариантов.',
    price: 69990,
    imageUrl: 'samsung_a23.jpeg'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Книга "JavaScript для начинающих"',
    description: 'Подробное руководство по JavaScript для новичков. От основ до продвинутых тем.',
    price: 1290,
    imageUrl: '' // Пустой URL — можно обработать в компоненте
  }
}`,...i.parameters?.docs?.source}}};const C=["Default","WithLongDescription","NoImage"];export{t as Default,i as NoImage,a as WithLongDescription,C as __namedExportsOrder,y as default};
