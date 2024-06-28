/*! For license information please see a7d3f731.b6620d4e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68569],{34346:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var n=r(74848),o=r(28453),a=r(96540);const s={id:"category-edge",title:"CategoryEdge",hide_table_of_contents:!1},c=void 0,d={id:"objects/category-edge",title:"CategoryEdge",description:"CategoryList Edge definition",source:"@site/api/objects/category-edge.mdx",sourceDirName:"objects",slug:"/objects/category-edge",permalink:"/api/objects/category-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category-edge",title:"CategoryEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CategoryData",permalink:"/api/objects/category-data"},next:{title:"Category",permalink:"/api/objects/category"}},l={},i=()=>{const e={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const t={a:"a",...(0,o.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:t,children:r,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,o.R)()},[d,l]=(0,a.useState)(s);return(0,n.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&r]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>CategoryEdge.<b>node</b></code><Bullet></Bullet><code>Category</code> <Badge class="badge badge--secondary"></Badge>',id:"categoryedgenodecategory-",level:4},{value:'<code>CategoryEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryedgecursorstring--",level:4},{value:"Member of",id:"member-of",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"CategoryList Edge definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type CategoryEdge {\n  node: Category\n  cursor: String!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"categoryedgenodecategory-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/objects/category",children:(0,n.jsx)(t.code,{children:"Category"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"categoryedgecursorstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/category-connection",children:(0,n.jsx)(t.code,{children:"CategoryConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},21020:(e,t,r)=>{var n=r(96540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,i=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)s.call(t,n)&&!d.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:i,props:a,_owner:c.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(96540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);