/*! For license information please see d8fd3cc6.72429fc0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1752],{54967:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>y,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>m,assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>x});var a=t(74848),d=t(28453),n=t(96540);const r={id:"system",title:"System"},c=void 0,l={id:"types/objects/system",title:"System",description:"System identifies who is making the request and holds the configuration assigned to it.",source:"@site/api/types/objects/system.mdx",sourceDirName:"types/objects",slug:"/types/objects/system",permalink:"/api/types/objects/system",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"system",title:"System"},sidebar:"schemaSidebar",previous:{title:"SystemData",permalink:"/api/types/objects/system-data"},next:{title:"TaxSummaryType",permalink:"/api/types/objects/tax-summary-type"}},o={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const s={a:"a",...(0,d.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const s={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:t,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[l,o]=(0,n.useState)(r);return(0,a.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>System.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"systemcodeid--",level:4},{value:'<code>System.<b>systemData</b></code><Bullet></Bullet><code>SystemData</code> <Badge class="badge badge--secondary"></Badge>',id:"systemsystemdatasystemdata-",level:4},{value:'<code>System.<b>error</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"systemerrorerror--",level:4},{value:'<code>System.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"systemcreatedatdatetime--",level:4},{value:'<code>System.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"systemupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"System identifies who is making the request and holds the configuration assigned to it."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type System implements Node {\n  code: ID!\n  systemData: SystemData\n  error: [Error!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"systemcodeid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["System.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(s.code,{children:"ID!"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"systemsystemdatasystemdata-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["System.",(0,a.jsx)("b",{children:"systemData"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/system-data",children:(0,a.jsx)(s.code,{children:"SystemData"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"systemerrorerror--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["System.",(0,a.jsx)("b",{children:"error"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/error",children:(0,a.jsx)(s.code,{children:"[Error!]"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Errors that abort services"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"systemcreatedatdatetime--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["System.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,a.jsx)(s.code,{children:"DateTime!"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Date created"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"systemupdatedatdatetime--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["System.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,a.jsx)(s.code,{children:"DateTime!"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Date updated"}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(s.h4,{id:"node-",children:[(0,a.jsx)(s.a,{href:"/api/types/interfaces/node",children:(0,a.jsx)(s.code,{children:"Node"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/admin-mutation",children:(0,a.jsx)(s.code,{children:"AdminMutation"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/supplier-data",children:(0,a.jsx)(s.code,{children:"SupplierData"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,s,t)=>{var a=t(96540),d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,t){var a,n={},o=null,i=null;for(a in void 0!==t&&(o=""+t),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(i=s.ref),s)r.call(s,a)&&!l.hasOwnProperty(a)&&(n[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===n[a]&&(n[a]=s[a]);return{$$typeof:d,type:e,key:o,ref:i,props:n,_owner:c.current}}s.Fragment=n,s.jsx=o,s.jsxs=o},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var a=t(96540);const d={},n=a.createContext(d);function r(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);