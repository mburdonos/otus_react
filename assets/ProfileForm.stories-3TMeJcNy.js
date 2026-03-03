import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as _}from"./iframe-DiO9YRQs.js";import{c as b,a as C}from"./index-DUZ7yuVU.js";import{F as N,g as k,R as I,I as V}from"./validation-CAXF9i-E.js";import{u as j}from"./useTranslation-DRQw9zOk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bz8MayoH.js";import"./index-aFMTpqz1.js";import"./client-CCFq_1L9.js";import"./index-l9QAyoBH.js";const w="_root_d5edd_2",E="_error_d5edd_6",B="_success_d5edd_10",T="_warning_d5edd_14",v={root:w,error:E,success:B,warning:T},A=t.jsx(I,{}),F=_.memo(({className:e,onChange:o,onBlur:s,autoFocusElement:g,touched:r,value:l,errors:c,disabled:i,submitCount:m})=>{const{t:a}=j(),{validateStatus:n,help:d}=k(c,r,m),M=n?v[n]:"";return t.jsx(N,{className:b(v.root,M,e),title:"Имя: ",required:!0,validateStatus:n,help:d,children:t.jsx(C,{prefix:A,disabled:i,ref:g,"data-cy":"input",autoFocus:!1,name:"name",onChange:o,onBlur:s,value:l,placeholder:a("Введите имя пользователя")})})});F.displayName="NameField";F.__docgenInfo={description:"",methods:[],displayName:"NameField"};const P="_root_1nh8k_2",R="_error_1nh8k_6",D="_success_1nh8k_10",U="_warning_1nh8k_14",x={root:P,error:R,success:D,warning:U},y=_.memo(({className:e,onChange:o,onBlur:s,touched:g,value:r,errors:l,disabled:c,submitCount:i})=>{const{t:m}=j(),{validateStatus:a,help:n}=k(l,g,i),d=a?x[a]:"";return t.jsx(N,{className:b(x.root,d,e),title:"Описание: ",validateStatus:a,help:n,children:t.jsx(V.TextArea,{disabled:c,name:"about",onChange:o,onBlur:s,value:r,placeholder:m("Введите описание")})})});y.displayName="AboutField";y.__docgenInfo={description:"",methods:[],displayName:"AboutField"};const W="_root_cvc0m_2",q="_disabled_cvc0m_17",$={root:W,disabled:q},S=_.memo(({className:e,formManager:o,formElement:s,autoFocusElement:g,disabled:r})=>{const{values:l,touched:c,errors:i,submitCount:m,handleBlur:a,handleSubmit:n,handleChange:d}=o;return t.jsxs("form",{ref:s,onSubmit:n,className:b($.root,r&&$.disabled,e),children:[t.jsx(F,{autoFocusElement:g,onBlur:a,onChange:d,value:l.name,errors:i.name,submitCount:m,touched:c.name,disabled:r}),t.jsx(y,{onBlur:a,onChange:d,value:l.about,errors:i.about,submitCount:m,touched:c.about,disabled:r})]})});S.displayName="ProfileForm";S.__docgenInfo={description:"",methods:[],displayName:"ProfileForm"};const u={values:{name:"Иван Иванов",about:"Разработчик с 5‑летним опытом"},touched:{name:!1,about:!1},errors:{name:"",about:""},submitCount:0,isSubmitting:!1,isValidating:!1,handleBlur:e=>{e&&console.log("Blur event:",e.target.name)},handleSubmit:e=>{e&&(e.preventDefault(),console.log("Form submitted"))},handleChange:e=>{if(e){const{name:o,value:s}=e.target;console.log("Change event:",o,s),u.values={...u.values,[o]:s}}},setFieldValue:async(e,o)=>{console.log(`Setting field ${e} to ${o}`)},setTouched:async e=>{console.log("Setting touched fields:",e)},resetForm:async()=>{console.log("Resetting form")},validateForm:async e=>(console.log("Validating form with values:",e),{}),setErrors:async e=>{console.log("Setting errors:",e)},setStatus:async e=>{console.log("Setting status:",e)},setValues:async(e,o)=>{let s;typeof e=="function"?s=e(u.values):s=e,console.log("Setting values:",s,"shouldValidate:",o)},setFieldError:async(e,o)=>{console.log(`Setting error for ${e}: ${o}`)},setFieldTouched:async(e,o,s)=>{console.log(`Setting touched for ${e}: ${o}, shouldValidate: ${s}`)},submitForm:async()=>{console.log("Submitting form programmatically")},validateField:async e=>{console.log("Validating field:",e)},setSubmitting:async e=>{console.log("Setting submitting state:",e)},setFormikState:(e,o)=>{console.log("Updating formik state:",e,"callback:",o),o&&o()}},Z={title:"UI/forms/ProfileForm",component:S,tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Отключает все поля формы"}}},p={args:{formManager:u}},f={args:{formManager:{...u,values:{name:"",about:""},errors:{name:"Имя обязательно для заполнения",about:"Описание слишком короткое"},touched:{name:!0,about:!0}}}},h={args:{formManager:u,disabled:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    formManager: mockFormManager
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    formManager: mockFormManager,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};const ee=["Filled","WithErrors","Disabled"];export{h as Disabled,p as Filled,f as WithErrors,ee as __namedExportsOrder,Z as default};
