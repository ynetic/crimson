import{a as e,j as a}from"./emotion-react-jsx-runtime.browser.esm-B1TMS0DI.js";import{L as p,a as s,b as t,c as C}from"./ListItem-DOfIr4Po.js";import{I as l}from"./Icon-Bht7JVrg.js";import{k as O,l as U,m as R}from"./index-BBMM-L_h.js";import{r as u}from"./index-BwDkhjyp.js";import{B as h}from"./Box-BzSzghsi.js";import{S}from"./Switch-Dc1xjfAn.js";import"./extends-CF3RwP-h.js";import"./emotion-styled-base.browser.esm-Dp_FgEmo.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-react.browser.esm-C1IUp0_c.js";import"./constants-IjE9pQe9.js";import"./types-FAVVMtnh.js";import"./motion-r4PA4Vsg.js";const X={title:"Design System/List",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};function T(n){return e(h,{minWidth:400,children:a(p,{...n,children:[e(s,{children:e(t,{primary:"Inbox",secondary:"All your emails"})}),e(s,{children:e(t,{primary:"Drafts",secondary:"Unfinished emails"})})]})})}function j(n){const[o,f]=u.useState(1),r=i=>{f(i)};return e(h,{minWidth:400,children:a(p,{...n,children:[a(s,{secondaryAction:e(l,{icon:O}),onClick:()=>r(1),selected:o===1,children:[e(C,{children:e(l,{icon:U})}),e(t,{primary:"Inbox",secondary:"All your emails"})]}),e(s,{secondaryAction:e(l,{icon:R}),onClick:()=>r(2),selected:o===2,children:e(t,{inset:!0,primary:"Drafts",secondary:"Unfinished emails"})})]})})}function B(n){const[o,f]=u.useState(1),[r,i]=u.useState({inbox:!1,drafts:!0}),y=W=>{f(W)};return e(h,{minWidth:400,children:a(p,{...n,children:[a(s,{secondaryAction:e(S,{checked:r.inbox,onToggle:()=>i({...r,inbox:!r.inbox})}),onClick:()=>y(1),selected:o===1,children:[e(C,{children:e(l,{icon:U})}),e(t,{primary:"Inbox",secondary:"All your emails"})]}),e(s,{secondaryAction:e(S,{checked:r.drafts,onToggle:()=>i({...r,drafts:!r.drafts})}),onClick:()=>y(2),selected:o===2,children:e(t,{inset:!0,primary:"Drafts",secondary:"Unfinished emails"})})]})})}const c={args:{},render:T},d={args:{},render:j},m={args:{},render:B};var g,x,I;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: SimpleUsage
}`,...(I=(x=c.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var A,k,b;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  render: DefaultRenderWithOptions
}`,...(b=(k=d.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var D,L,w;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {},
  render: SecondaryActionsRender
}`,...(w=(L=m.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const Y=["Default","Selected","SecondaryActions"];export{c as Default,m as SecondaryActions,d as Selected,Y as __namedExportsOrder,X as default};
