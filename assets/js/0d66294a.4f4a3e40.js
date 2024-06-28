/*! For license information please see 0d66294a.4f4a3e40.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19053],{83935:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>y});var r=n(74848),a=n(28453),s=n(96540);const c={id:"category-create-input",title:"CategoryCreateInput"},o=void 0,i={id:"types/inputs/category-create-input",title:"CategoryCreateInput",description:"No description",source:"@site/api/types/inputs/category-create-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/category-create-input",permalink:"/api/types/inputs/category-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category-create-input",title:"CategoryCreateInput"},sidebar:"schemaSidebar",previous:{title:"CancelPolicyInput",permalink:"/api/types/inputs/cancel-policy-input"},next:{title:"CategoryUpdateInput",permalink:"/api/types/inputs/category-update-input"}},d={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[i,d]=(0,s.useState)(c);return(0,r.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>CategoryCreateInput.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycreateinputcodeid--",level:4},{value:'<code>CategoryCreateInput.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"categorycreateinputdescriptionstring-",level:4},{value:'<code>CategoryCreateInput.<b>subCategory</b></code><Bullet></Bullet><code>[SubCategoryCreateInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycreateinputsubcategorysubcategorycreateinput--",level:4}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input CategoryCreateInput {\n  code: ID!\n  description: String\n  subCategory: [SubCategoryCreateInput!]!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"categorycreateinputcodeid--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCreateInput.",(0,r.jsx)("b",{children:"code"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,r.jsx)(t.code,{children:"ID!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(t.h4,{id:"categorycreateinputdescriptionstring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCreateInput.",(0,r.jsx)("b",{children:"description"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(t.h4,{id:"categorycreateinputsubcategorysubcategorycreateinput--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryCreateInput.",(0,r.jsx)("b",{children:"subCategory"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/sub-category-create-input",children:(0,r.jsx)(t.code,{children:"[SubCategoryCreateInput!]!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:l,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);