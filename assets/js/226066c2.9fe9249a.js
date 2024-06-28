/*! For license information please see 226066c2.9fe9249a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41666],{7e4:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=t(74848),s=t(28453),a=t(96540);const i={id:"inventory-price-rates-input",title:"InventoryPriceRatesInput"},c=void 0,o={id:"types/inputs/inventory-price-rates-input",title:"InventoryPriceRatesInput",description:"Retrieve rates query input",source:"@site/api/types/inputs/inventory-price-rates-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/inventory-price-rates-input",permalink:"/api/types/inputs/inventory-price-rates-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-price-rates-input",title:"InventoryPriceRatesInput"},sidebar:"schemaSidebar",previous:{title:"InventoryPriceMealPlanSupplementsInput",permalink:"/api/types/inputs/inventory-price-meal-plan-supplements-input"},next:{title:"InventoryRateSetupCreateInput",permalink:"/api/types/inputs/inventory-rate-setup-create-input"}},d={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[o,d]=(0,a.useState)(i);return(0,r.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryPriceRatesInput.<b>clientCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputclientcodestring--",level:4},{value:'<code>InventoryPriceRatesInput.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputsuppliercodestring--",level:4},{value:'<code>InventoryPriceRatesInput.<b>rates</b></code><Bullet></Bullet><code>[RatePriceRetrieveInput]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputratesratepriceretrieveinput--",level:4},{value:'<code>InventoryPriceRatesInput.<b>hotelCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputhotelcodestring--",level:4},{value:'<code>InventoryPriceRatesInput.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputcontextcodestring-",level:4}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Retrieve rates query input"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input InventoryPriceRatesInput {\n  clientCode: String!\n  supplierCode: String!\n  rates: [RatePriceRetrieveInput]!\n  hotelCode: String!\n  contextCode: String\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputclientcodestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"clientCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Client code."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputsuppliercodestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"supplierCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Travelgate Supplier/Channel code."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputratesratepriceretrieveinput--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"rates"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/types/inputs/rate-price-retrieve-input",children:(0,r.jsx)(n.code,{children:"[RatePriceRetrieveInput]!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Hotel rates input data."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputhotelcodestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"hotelCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Code associated with the hotel."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputcontextcodestring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"contextCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Context code."}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,a={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!o.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:c.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);