/*! For license information please see 2ebafe8d.ba9e892f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46336],{46011:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>u,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var a=t(74848),r=t(28453),n=t(96540);const o={id:"rates-rs",title:"RatesRs"},c=void 0,d={id:"types/objects/rates-rs",title:"RatesRs",description:"Represents the response object for rates setup operations.",source:"@site/api/types/objects/rates-rs.mdx",sourceDirName:"types/objects",slug:"/types/objects/rates-rs",permalink:"/api/types/objects/rates-rs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"rates-rs",title:"RatesRs"},sidebar:"schemaSidebar",previous:{title:"Rategroup",permalink:"/api/types/objects/rategroup"},next:{title:"RatesSetUpRs",permalink:"/api/types/objects/rates-set-up-rs"}},l={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:s,children:t,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,r.R)()},[d,l]=(0,n.useState)(o);return(0,a.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>RatesRs.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ratesrsadvisemessagesadvisemessage--",level:4},{value:'<code>RatesRs.<b>rates</b></code><Bullet></Bullet><code>[InventoryRateSetup]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ratesrsratesinventoryratesetup--",level:4},{value:'<code>RatesRs.<b>success</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ratesrssuccessboolean--",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Represents the response object for rates setup operations."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type RatesRs {\n  adviseMessages: [AdviseMessage]\n  rates: [InventoryRateSetup]\n  success: Boolean!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"ratesrsadvisemessagesadvisemessage--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RatesRs.",(0,a.jsx)("b",{children:"adviseMessages"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,a.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Collection of advise messages."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"ratesrsratesinventoryratesetup--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RatesRs.",(0,a.jsx)("b",{children:"rates"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/inventory-rate-setup",children:(0,a.jsx)(s.code,{children:"[InventoryRateSetup]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Collection of rate output objects."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"ratesrssuccessboolean--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RatesRs.",(0,a.jsx)("b",{children:"success"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Indicates whether the operation was successful based on the absence of advise messages."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/inventory-mutation",children:(0,a.jsx)(s.code,{children:"InventoryMutation"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/inventory-query",children:(0,a.jsx)(s.code,{children:"InventoryQuery"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},21020:(e,s,t)=>{var a=t(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,t){var a,n={},l=null,i=null;for(a in void 0!==t&&(l=""+t),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)o.call(s,a)&&!d.hasOwnProperty(a)&&(n[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===n[a]&&(n[a]=s[a]);return{$$typeof:r,type:e,key:l,ref:i,props:n,_owner:c.current}}s.Fragment=n,s.jsx=l,s.jsxs=l},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var a=t(96540);const r={},n=a.createContext(r);function o(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);