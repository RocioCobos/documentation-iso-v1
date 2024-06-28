/*! For license information please see 483cd8d2.6532abfb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51863],{51212:(e,s,r)=>{r.r(s),r.d(s,{Badge:()=>x,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>j,assets:()=>l,contentTitle:()=>n,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>b});var t=r(74848),a=r(28453),c=r(96540);const o={id:"error",title:"Error"},n=void 0,d={id:"types/objects/error",title:"Error",description:"Application error.",source:"@site/api/types/objects/error.mdx",sourceDirName:"types/objects",slug:"/types/objects/error",permalink:"/api/types/objects/error",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"error",title:"Error"},sidebar:"schemaSidebar",previous:{title:"ErrorCatalog",permalink:"/api/types/objects/error-catalog"},next:{title:"Exchange",permalink:"/api/types/objects/exchange"}},l={},i=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},j=e=>{const s={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:s,children:r,startOpen:o=!1})=>{const n={details:"details",summary:"summary",...(0,a.R)()},[d,l]=(0,c.useState)(o);return(0,t.jsxs)(n.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(n.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&r]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Error.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"errorcodestring--",level:4},{value:'<code>Error.<b>type</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"errortypestring--",level:4},{value:'<code>Error.<b>description</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"errordescriptionstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Application error."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type Error {\n  code: String!\n  type: String!\n  description: String!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"errorcodestring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Error.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Error code."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"errortypestring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Error.",(0,t.jsx)("b",{children:"type"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Error type."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"errordescriptionstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Error.",(0,t.jsx)("b",{children:"description"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Error description."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/access",children:(0,t.jsx)(s.code,{children:"Access"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/board",children:(0,t.jsx)(s.code,{children:"Board"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/category",children:(0,t.jsx)(s.code,{children:"Category"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/client",children:(0,t.jsx)(s.code,{children:"Client"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/hotel-booking",children:(0,t.jsx)(s.code,{children:"HotelBooking"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/hotel-book-payload",children:(0,t.jsx)(s.code,{children:"HotelBookPayload"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/hotel-cancel-payload",children:(0,t.jsx)(s.code,{children:"HotelCancelPayload"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/hotel-commit-payload",children:(0,t.jsx)(s.code,{children:"HotelCommitPayload"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/hotel-quote",children:(0,t.jsx)(s.code,{children:"HotelQuote"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/hotel-search",children:(0,t.jsx)(s.code,{children:"HotelSearch"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/legacy-access",children:(0,t.jsx)(s.code,{children:"LegacyAccess"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/provider",children:(0,t.jsx)(s.code,{children:"Provider"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/interfaces/response",children:(0,t.jsx)(s.code,{children:"Response"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"interface"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/room-static",children:(0,t.jsx)(s.code,{children:"RoomStatic"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/supplier",children:(0,t.jsx)(s.code,{children:"Supplier"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/supplier-connection",children:(0,t.jsx)(s.code,{children:"SupplierConnection"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/system",children:(0,t.jsx)(s.code,{children:"System"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,s,r)=>{var t=r(96540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,r){var t,c={},l=null,i=null;for(t in void 0!==r&&(l=""+r),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)o.call(s,t)&&!d.hasOwnProperty(t)&&(c[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===c[t]&&(c[t]=s[t]);return{$$typeof:a,type:e,key:l,ref:i,props:c,_owner:n.current}}s.Fragment=c,s.jsx=l,s.jsxs=l},74848:(e,s,r)=>{e.exports=r(21020)},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>n});var t=r(96540);const a={},c=t.createContext(a);function o(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);