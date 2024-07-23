import{S as v}from"./Select-BX1Ha6hR.js";import"./emotion-react-jsx-runtime.browser.esm-B1TMS0DI.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./BaseSelect-BNrCIJ0J.js";import"./emotion-styled-base.browser.esm-Dp_FgEmo.js";import"./floating-ui.react-C1nSsq-1.js";import"./index-DxjWwZXO.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./Typography-Dt8omQSu.js";import"./HelperText-jNN1mvHL.js";import"./clsx-B-dksMZM.js";import"./RequiredIndicator-YENVr-Jc.js";const E={title:"Design System/Select",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},a=[{label:"Green",value:"green"},{label:"Blue",value:"blue"},{label:"Red",value:"red"},{label:"Yellow",value:"yellow"},{label:"Orange",value:"orange"},{label:"Pink",value:"pink"},{label:"Purple",value:"purple"},{label:"Grey",value:"grey"}],o={args:{placeholder:"Select...",options:a.map(e=>e.label)}},l={args:{placeholder:"Select...",options:a.map(e=>e.label),onChange:e=>console.log(e),value:a[3].label}},r={args:{placeholder:"Select...",options:a,onChange:e=>console.log(e),value:a[3]}},t={args:{placeholder:"Select...",options:a,onChange:e=>console.log(e),searchable:!0}};var s,n,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select...',
    options: options.map(item => item.label)
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select...',
    options: options.map(item => item.label),
    onChange: items => console.log(items),
    value: options[3].label
  }
}`,...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,g,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select...',
    options,
    onChange: items => console.log(items),
    value: options[3]
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var S,h,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select...',
    options,
    onChange: items => console.log(items),
    searchable: true
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const R=["Default","SingleSelectWithValue","WithObjectValues","SearchableSingleSelect"];export{o as Default,t as SearchableSingleSelect,l as SingleSelectWithValue,r as WithObjectValues,R as __namedExportsOrder,E as default};
