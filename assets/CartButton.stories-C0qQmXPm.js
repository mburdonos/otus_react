import{j as n}from"./jsx-runtime-u17CrQMm.js";const r="_cartButton_1g90d_1",a="_addButton_1g90d_10",c="_minusButton_1g90d_19",d="_plusButton_1g90d_20",i="_buttonGroup_1g90d_30",p="_inputField_1g90d_36",t={cartButton:r,addButton:a,minusButton:c,plusButton:d,buttonGroup:i,inputField:p},s=({count:u})=>u===0?n.jsx("button",{type:"button",className:t.cartButton+" "+t.addButton,"aria-label":"Добавить в корзину",children:"В корзину"}):n.jsxs("div",{className:t.buttonGroup,children:[n.jsx("button",{type:"button",className:t.cartButton+" "+t.minusButton,"aria-label":"Уменьшить количество",children:"−"}),n.jsx("input",{type:"number",value:u,readOnly:!0,className:t.inputField,"aria-label":"Количество товара"}),n.jsx("button",{type:"button",className:t.cartButton+" "+t.plusButton,"aria-label":"Увеличить количество",children:"+"})]});s.displayName="CartButton";s.__docgenInfo={description:"",methods:[],displayName:"CartButton",props:{count:{required:!0,tsType:{name:"number"},description:""}}};const m={title:"ui/online_store/CartButton",component:s,tags:["autodocs"],argTypes:{count:{control:"number",description:"Количество товара в корзине",defaultValue:0}}},o={args:{count:0}},e={args:{count:3}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3
  }
}`,...e.parameters?.docs?.source}}};const _=["Empty","WithCount"];export{o as Empty,e as WithCount,_ as __namedExportsOrder,m as default};
