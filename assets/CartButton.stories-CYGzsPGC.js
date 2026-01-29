import{j as n}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C3N5KnWD.js";import"./preload-helper-PPVm8Dsz.js";const u="_cartButton_1g90d_1",a="_addButton_1g90d_10",c="_minusButton_1g90d_19",i="_plusButton_1g90d_20",d="_buttonGroup_1g90d_30",p="_inputField_1g90d_36",t={cartButton:u,addButton:a,minusButton:c,plusButton:i,buttonGroup:d,inputField:p},e=({count:s})=>s===0?n.jsx("button",{type:"button",className:t.cartButton+" "+t.addButton,"aria-label":"Добавить в корзину",children:"В корзину"}):n.jsxs("div",{className:t.buttonGroup,children:[n.jsx("button",{type:"button",className:t.cartButton+" "+t.minusButton,"aria-label":"Уменьшить количество",children:"−"}),n.jsx("input",{type:"number",value:s,readOnly:!0,className:t.inputField,"aria-label":"Количество товара"}),n.jsx("button",{type:"button",className:t.cartButton+" "+t.plusButton,"aria-label":"Увеличить количество",children:"+"})]});e.displayName="CartButton";e.__docgenInfo={description:"",methods:[],displayName:"CartButton",props:{count:{required:!0,tsType:{name:"number"},description:""}}};const B={title:"ui/online_store/CartButton",component:e,tags:["autodocs"],argTypes:{count:{control:"number",description:"Количество товара в корзине",defaultValue:0}}},o={args:{count:0}},r={args:{count:3}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    count: 3
  }
}`,...r.parameters?.docs?.source}}};const b=["Empty","WithCount"];export{o as Empty,r as WithCount,b as __namedExportsOrder,B as default};
