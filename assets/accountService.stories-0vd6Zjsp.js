import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-DUSNYq9a.js";import"./preload-helper-PPVm8Dsz.js";const s={Standard:"Standard",Premium:"Premium",Gold:"Gold",Free:"Free"},a={Car:"Car",Toy:"Toy",Food:"Food"},h={[s.Standard]:.1,[s.Premium]:.2,[s.Gold]:.3,[s.Free]:0},g={[s.Standard]:{[a.Car]:.05},[s.Premium]:{[a.Food]:.1},[s.Gold]:{[a.Car]:.15,[a.Toy]:.05},[s.Free]:{}};class x{constructor(){this.userDiscounts=h,this.productDiscounts=g}getDiscountForUser(c){return this.userDiscounts[c]||0}getProductDiscountForUser(c,r){return this.productDiscounts[c]?.[r]||0}calculateTotalDiscount(c,r){const u=this.getDiscountForUser(c),i=this.getProductDiscountForUser(c,r),d=u+i;return Number(Math.min(d,1).toFixed(2))}}const y="_title_mxo9k_2",D="_calculator_mxo9k_5",S="_select_mxo9k_6",j="_result_mxo9k_7",o={title:y,calculator:D,select:S,result:j},p=new x,b={title:"UI/services/AccountService",parameters:{layout:"centered"}},l=()=>{const[n,c]=m.useState(s.Standard),[r,u]=m.useState(a.Car),i=p.getDiscountForUser(n),d=p.getProductDiscountForUser(n,r),v=p.calculateTotalDiscount(n,r);return e.jsxs("div",{className:o.calculator,children:[e.jsx("h3",{className:o.title,children:"Калькулятор скидок"}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{className:o.label,children:"Пользователь:"}),e.jsx("select",{value:n,onChange:t=>c(t.target.value),className:o.select,children:Object.values(s).map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs("div",{style:{marginBottom:"15px"},children:[e.jsx("label",{className:o.label,children:"Товар:"}),e.jsx("select",{value:r,onChange:t=>u(t.target.value),className:o.select,children:Object.values(a).map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs("div",{className:o.result,children:[e.jsxs("p",{children:["Базовая: ",e.jsxs("strong",{children:[i*100,"%"]})]}),e.jsxs("p",{children:["Специфичная: ",e.jsxs("strong",{children:[d*100,"%"]})]}),e.jsx("p",{children:e.jsxs("strong",{children:["Итого: ",v*100,"%"]})})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"InteractiveCalculator"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [user, setUser] = React.useState<UserType>(UserType.Standard);
  const [product, setProduct] = React.useState<ProductType>(ProductType.Car);
  const base = accountService.getDiscountForUser(user);
  const productDisc = accountService.getProductDiscountForUser(user, product);
  const total = accountService.calculateTotalDiscount(user, product);
  return <div className={styles.calculator}>
      <h3 className={styles.title}>Калькулятор скидок</h3>

      <div style={{
      marginBottom: '15px'
    }}>
        <label className={styles.label}>Пользователь:</label>
        <select value={user} onChange={e => setUser(e.target.value as UserType)} className={styles.select}>
          {Object.values(UserType).map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>

      <div style={{
      marginBottom: '15px'
    }}>
        <label className={styles.label}>Товар:</label>
        <select value={product} onChange={e => setProduct(e.target.value as ProductType)} className={styles.select}>
          {Object.values(ProductType).map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className={styles.result}>
        <p>Базовая: <strong>{base * 100}%</strong></p>
        <p>Специфичная: <strong>{productDisc * 100}%</strong></p>
        <p><strong>Итого: {total * 100}%</strong></p>
      </div>
    </div>;
}`,...l.parameters?.docs?.source}}};const C=["InteractiveCalculator"];export{l as InteractiveCalculator,C as __namedExportsOrder,b as default};
