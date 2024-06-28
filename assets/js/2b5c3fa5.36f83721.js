/*! For license information please see 2b5c3fa5.36f83721.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60574],{25015:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var s=r(74848),t=r(28453),a=r(96540);const i={id:"supplier-create-input",title:"SupplierCreateInput"},l=void 0,d={id:"types/inputs/supplier-create-input",title:"SupplierCreateInput",description:"Create new Supplier input",source:"@site/api/types/inputs/supplier-create-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/supplier-create-input",permalink:"/api/types/inputs/supplier-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"supplier-create-input",title:"SupplierCreateInput"},sidebar:"schemaSidebar",previous:{title:"SupplierContextInput",permalink:"/api/types/inputs/supplier-context-input"},next:{title:"SupplierFilter",permalink:"/api/types/inputs/supplier-filter"}},c={},o=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:r,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,t.R)()},[d,c]=(0,a.useState)(i);return(0,s.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&r]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>SupplierCreateInput.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreateinputcodeid--",level:4},{value:'<code>SupplierCreateInput.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreateinputnamestring--",level:4},{value:'<code>SupplierCreateInput.<b>providerCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreateinputprovidercodeid--",level:4},{value:'<code>SupplierCreateInput.<b>groupCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreateinputgroupcodeid--",level:4},{value:'<code>SupplierCreateInput.<b>serviceApi</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreateinputserviceapiid-",level:4},{value:'<code>SupplierCreateInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreateinputisactiveboolean-",level:4},{value:'<code>SupplierCreateInput.<b>groupContentCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreateinputgroupcontentcodeid-",level:4},{value:'<code>SupplierCreateInput.<b>id</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreateinputidid-",level:4}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Create new Supplier input"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input SupplierCreateInput {\n  code: ID!\n  name: String!\n  providerCode: ID!\n  groupCode: ID!\n  serviceApi: ID\n  isActive: Boolean\n  groupContentCode: ID\n  id: ID\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"suppliercreateinputcodeid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierCreateInput.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"No blank, no special characters"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"suppliercreateinputnamestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierCreateInput.",(0,s.jsx)("b",{children:"name"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Supplier name"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"suppliercreateinputprovidercodeid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierCreateInput.",(0,s.jsx)("b",{children:"providerCode"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Provider code"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"suppliercreateinputgroupcodeid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierCreateInput.",(0,s.jsx)("b",{children:"groupCode"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"IAM Group code. The group must exist."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"suppliercreateinputserviceapiid-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierCreateInput.",(0,s.jsx)("b",{children:"serviceApi"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"ServiceAPI indicates the type of the connection (integer), hotel by default"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"hotel"}),"\n",(0,s.jsx)(n.li,{children:"transportation"}),"\n",(0,s.jsx)(n.li,{children:"car"}),"\n",(0,s.jsx)(n.li,{children:"transfers"}),"\n",(0,s.jsx)(n.li,{children:"activities"}),"\n",(0,s.jsx)(n.li,{children:"virtualaccount"}),"\n",(0,s.jsx)(n.li,{children:"payment"}),"\n",(0,s.jsx)(n.li,{children:"package"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"suppliercreateinputisactiveboolean-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierCreateInput.",(0,s.jsx)("b",{children:"isActive"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,s.jsx)(n.code,{children:"Boolean"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indicates whether a Supplier is active or inactive, true by default"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"suppliercreateinputgroupcontentcodeid-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierCreateInput.",(0,s.jsx)("b",{children:"groupContentCode"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"GroupContent code.\nUse allGroupContents to get a list of valid GroupContents or create a new one with createGroupContent"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"suppliercreateinputidid-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierCreateInput.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Optional, use it only if a specific ID has to be specified"}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},21020:(e,n,r)=>{var s=r(96540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var s,a={},c=null,o=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:o,props:a,_owner:l.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(96540);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);