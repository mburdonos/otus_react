import{r as c}from"./iframe-DX2bSrA0.js";import{j as o}from"./jsx-runtime-u17CrQMm.js";import{P as f}from"./ProductCard-mbqdt-z6.js";import"./preload-helper-PPVm8Dsz.js";const h=()=>{const s=["Смартфон X10","Ноутбук ProBook","Наушники Wireless","Планшет AirTab","Умные часы Watch+"],n=["Современный гаджет с мощным процессором и OLED‑дисплеем.","Производительный ноутбук для работы и творчества.","Беспроводные наушники с активным шумоподавлением.","Лёгкий планшет с высоким разрешением экрана.","Часы с мониторингом здоровья и GPS."],a=["/iphone_15.jpg","/lenovo.png","/not_found.jpg","/note.jpg","/samsung_a23.jpeg","/vite.svg"],p=s[Math.floor(Math.random()*s.length)],t=n[Math.floor(Math.random()*n.length)],i=Math.floor(Math.random()*5e4)+5e3,e=a[Math.floor(Math.random()*a.length)];return{id:Date.now()+Math.floor(Math.random()*3),title:p,description:t,price:i,imageUrl:e}},g=({initialProducts:s=[],itemsPerLoad:n=5})=>{const[a,p]=c.useState(s),[t,i]=c.useState(!1),e=c.useRef(null),u=()=>{i(!0);const r=Array.from({length:n},h);p(m=>[...m,...r]),i(!1)};return c.useEffect(()=>{const r=new IntersectionObserver(m=>{m[0].isIntersecting&&!t&&u()},{threshold:.1});return e.current&&r.observe(e.current),()=>{e.current&&r.unobserve(e.current)}},[t]),o.jsxs("div",{className:"product-list",children:[o.jsx("div",{className:"products-grid",children:a.map(r=>o.jsx(f,{...r},r.id))}),o.jsx("div",{ref:e,style:{height:"1px"}}),t&&o.jsx("div",{className:"loading",children:"Загружаем товары..."})]})};g.__docgenInfo={description:"",methods:[],displayName:"ProductList",props:{initialProducts:{required:!1,tsType:{name:"Array",elements:[{name:"ProductCardProps"}],raw:"ProductCardProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},itemsPerLoad:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}}}};const M={title:"UI/online_store/ProductList",component:g,args:{itemsPerLoad:3}},d={args:{initialProducts:[{id:1,title:"Тестовый товар 1",description:"Описание тестового товара 1",price:1e3,imageUrl:"/iphone_15.jpg"},{id:2,title:"Тестовый товар 2",description:"Описание тестового товара 2",price:2e3,imageUrl:"/lenovo.png"}]}},l={args:{initialProducts:[]}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    initialProducts: [{
      id: 1,
      title: 'Тестовый товар 1',
      description: 'Описание тестового товара 1',
      price: 1000,
      imageUrl: '/iphone_15.jpg'
    }, {
      id: 2,
      title: 'Тестовый товар 2',
      description: 'Описание тестового товара 2',
      price: 2000,
      imageUrl: '/lenovo.png'
    }]
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    initialProducts: []
  }
}`,...l.parameters?.docs?.source}}};const _=["Default","Empty"];export{d as Default,l as Empty,_ as __namedExportsOrder,M as default};
