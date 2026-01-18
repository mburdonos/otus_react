import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CdM7U4i8.js";import"./preload-helper-PPVm8Dsz.js";const p="_item_1vmq2_1",l="_image_1vmq2_9",d="_content_1vmq2_18",u="_title_1vmq2_22",g="_price_1vmq2_29",v="_removeButton_1vmq2_35",t={item:p,image:l,content:d,title:u,price:g,removeButton:v},s=({title:i,price:c,imageUrl:n,onRemove:m})=>e.jsxs("div",{className:t.item,children:[e.jsx("img",{src:n||"not_found.jpg",alt:i,className:t.image}),e.jsxs("div",{className:t.content,children:[e.jsx("h3",{className:t.title,children:i}),e.jsxs("p",{className:t.price,children:["₽",c.toLocaleString()]})]}),e.jsx("button",{type:"button",className:t.removeButton,onClick:m,"aria-label":"Удалить товар из корзины",children:"×"})]});s.displayName="CartItem";s.__docgenInfo={description:"",methods:[],displayName:"CartItem",props:{title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const R={title:"ui/online_store/CartItem",component:s,tags:["autodocs"],argTypes:{title:{control:"text",description:"Название товара"},price:{control:"number",description:"Цена в рублях"},imageUrl:{control:"text",description:"URL изображения товара"},onRemove:{action:"removed",description:"Обработчик нажатия кнопки удаления"}}},o={args:{title:"Ноутбук Lenovo IdeaPad",price:49990,imageUrl:"https://via.placeholder.com/80x80?text=Laptop",onRemove:()=>alert("Товар удалён!")}},r={args:{title:"Очень длинное название товара, которое может переноситься на следующую строку",price:1290,imageUrl:"https://via.placeholder.com/80x80?text=Book",onRemove:()=>console.log("Товар удалён")}},a={args:{title:'Книга "JavaScript для начинающих"',price:1290,imageUrl:"",onRemove:()=>{}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Ноутбук Lenovo IdeaPad',
    price: 49990,
    imageUrl: 'https://via.placeholder.com/80x80?text=Laptop',
    onRemove: () => alert('Товар удалён!')
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Очень длинное название товара, которое может переноситься на следующую строку',
    price: 1290,
    imageUrl: 'https://via.placeholder.com/80x80?text=Book',
    onRemove: () => console.log('Товар удалён')
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Книга "JavaScript для начинающих"',
    price: 1290,
    imageUrl: '',
    // Пустой URL
    onRemove: () => {}
  }
}`,...a.parameters?.docs?.source}}};const q=["Default","WithLongTitle","NoImage"];export{o as Default,a as NoImage,r as WithLongTitle,q as __namedExportsOrder,R as default};
