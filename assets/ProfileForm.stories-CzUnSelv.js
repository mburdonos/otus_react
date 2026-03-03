import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as _}from"./iframe-DNsrmbc1.js";import{c as b,a as C}from"./index-FHPEaNxv.js";import{F as N,g as k,R as V,I as w}from"./validation-CiE-uu1H.js";import{u as j}from"./useTranslation-DVnQYmpw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7BEqw9x.js";import"./index-D9IQGAFt.js";import"./client-b-Cs71_b.js";import"./index-Df4xRFJR.js";const I="_root_d5edd_2",E="_error_d5edd_6",B="_success_d5edd_10",T="_warning_d5edd_14",x={root:I,error:E,success:B,warning:T},A=a.jsx(V,{}),F=_.memo(({className:e,onChange:o,onBlur:s,autoFocusElement:u,touched:r,value:l,errors:c,disabled:i,submitCount:m})=>{const{t}=j(),{validateStatus:n,help:d}=k(c,r,m),M=n?x[n]:"";return a.jsx(N,{className:b(x.root,M,e),title:"Имя: ",required:!0,validateStatus:n,help:d,children:a.jsx(C,{prefix:A,disabled:i,ref:u,"data-cy":"input",autoFocus:!0,name:"name",onChange:o,onBlur:s,value:l,placeholder:t("Введите имя пользователя")})})});F.displayName="NameField";F.__docgenInfo={description:"",methods:[],displayName:"NameField"};const P="_root_1nh8k_2",R="_error_1nh8k_6",D="_success_1nh8k_10",W="_warning_1nh8k_14",v={root:P,error:R,success:D,warning:W},y=_.memo(({className:e,onChange:o,onBlur:s,touched:u,value:r,errors:l,disabled:c,submitCount:i})=>{const{t:m}=j(),{validateStatus:t,help:n}=k(l,u,i),d=t?v[t]:"";return a.jsx(N,{className:b(v.root,d,e),title:"Описание: ",validateStatus:t,help:n,children:a.jsx(w.TextArea,{disabled:c,name:"about",onChange:o,onBlur:s,value:r,placeholder:m("Введите описание")})})});y.displayName="AboutField";y.__docgenInfo={description:"",methods:[],displayName:"AboutField"};const q="_root_cvc0m_2",O="_disabled_cvc0m_17",$={root:q,disabled:O},S=_.memo(({className:e,formManager:o,formElement:s,autoFocusElement:u,disabled:r})=>{const{values:l,touched:c,errors:i,submitCount:m,handleBlur:t,handleSubmit:n,handleChange:d}=o;return a.jsxs("form",{ref:s,onSubmit:n,className:b($.root,r&&$.disabled,e),children:[a.jsx(F,{autoFocusElement:u,onBlur:t,onChange:d,value:l.name,errors:i.name,submitCount:m,touched:c.name,disabled:r}),a.jsx(y,{onBlur:t,onChange:d,value:l.about,errors:i.about,submitCount:m,touched:c.about,disabled:r})]})});S.displayName="ProfileForm";S.__docgenInfo={description:"",methods:[],displayName:"ProfileForm"};const h={values:{name:"Иван Иванов",about:"Разработчик с 5‑летним опытом"},touched:{name:!1,about:!1},errors:{name:"",about:""},submitCount:0,isSubmitting:!1,isValidating:!1,handleBlur:e=>{e&&console.log("Blur event:",e.target.name)},handleSubmit:e=>{e&&(e.preventDefault(),console.log("Form submitted"))},handleChange:e=>{e&&console.log("Change event:",e.target.name,e.target.value)},setFieldValue:async(e,o)=>{console.log(`Setting field ${e} to ${o}`)},setTouched:async e=>{console.log("Setting touched fields:",e)},resetForm:async()=>{console.log("Resetting form")},validateForm:async e=>(console.log("Validating form with values:",e),{}),setErrors:async e=>{console.log("Setting errors:",e)},setStatus:async e=>{console.log("Setting status:",e)},setValues:async(e,o)=>{let s;typeof e=="function"?s=e(h.values):s=e,console.log("Setting values:",s,"shouldValidate:",o)},setFieldError:async(e,o)=>{console.log(`Setting error for ${e}: ${o}`)},setFieldTouched:async(e,o,s)=>{console.log(`Setting touched for ${e}: ${o}, shouldValidate: ${s}`)},submitForm:async()=>{console.log("Submitting form programmatically")},validateField:async e=>{console.log("Validating field:",e)},setSubmitting:async e=>{console.log("Setting submitting state:",e)},setFormikState:(e,o)=>{console.log("Updating formik state:",e,"callback:",o),o&&o()}},Z={title:"Forms/ProfileForm",component:S,tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Отключает все поля формы"}}},g={args:{formManager:h}},p={args:{formManager:{...h,values:{name:"",about:""},errors:{name:"Имя обязательно для заполнения",about:"Описание слишком короткое"},touched:{name:!0,about:!0}}}},f={args:{formManager:h,disabled:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    formManager: mockFormManager
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    formManager: {
      ...mockFormManager,
      values: {
        name: '',
        about: ''
      },
      errors: {
        name: 'Имя обязательно для заполнения',
        about: 'Описание слишком короткое'
      },
      touched: {
        name: true,
        about: true
      }
    }
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    formManager: mockFormManager,
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};const ee=["Filled","WithErrors","Disabled"];export{f as Disabled,g as Filled,p as WithErrors,ee as __namedExportsOrder,Z as default};
