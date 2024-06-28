/*! For license information please see 8ad78a0b.530b90a9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1286],{61814:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>v,assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var r=t(74848),a=t(28453),i=t(96540);const s={id:"inventory-avail-derived-rates-input",title:"InventoryAvailDerivedRatesInput"},d=void 0,l={id:"types/inputs/inventory-avail-derived-rates-input",title:"InventoryAvailDerivedRatesInput",description:"Retrieve availability derived rates query input",source:"@site/api/types/inputs/inventory-avail-derived-rates-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/inventory-avail-derived-rates-input",permalink:"/api/types/inputs/inventory-avail-derived-rates-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-avail-derived-rates-input",title:"InventoryAvailDerivedRatesInput"},sidebar:"schemaSidebar",previous:{title:"InternalExtendedInfoInput",permalink:"/api/types/inputs/internal-extended-info-input"},next:{title:"InventoryAvailOffersInput",permalink:"/api/types/inputs/inventory-avail-offers-input"}},o={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},v=e=>{const n={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[l,o]=(0,i.useState)(s);return(0,r.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryAvailDerivedRatesInput.<b>clientCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryavailderivedratesinputclientcodestring--",level:4},{value:'<code>InventoryAvailDerivedRatesInput.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryavailderivedratesinputsuppliercodestring--",level:4},{value:'<code>InventoryAvailDerivedRatesInput.<b>derivedRates</b></code><Bullet></Bullet><code>[DerivedRatesAvailRetrieveInput]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryavailderivedratesinputderivedratesderivedratesavailretrieveinput--",level:4},{value:'<code>InventoryAvailDerivedRatesInput.<b>hotelCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryavailderivedratesinputhotelcodestring--",level:4},{value:'<code>InventoryAvailDerivedRatesInput.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryavailderivedratesinputcontextcodestring-",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Retrieve availability derived rates query input"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input InventoryAvailDerivedRatesInput {\n  clientCode: String!\n  supplierCode: String!\n  derivedRates: [DerivedRatesAvailRetrieveInput]!\n  hotelCode: String!\n  contextCode: String\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"inventoryavailderivedratesinputclientcodestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryAvailDerivedRatesInput.",(0,r.jsx)("b",{children:"clientCode"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Client code."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventoryavailderivedratesinputsuppliercodestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryAvailDerivedRatesInput.",(0,r.jsx)("b",{children:"supplierCode"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Travelgate Supplier/Channel code."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventoryavailderivedratesinputderivedratesderivedratesavailretrieveinput--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryAvailDerivedRatesInput.",(0,r.jsx)("b",{children:"derivedRates"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/inputs/derived-rates-avail-retrieve-input",children:(0,r.jsx)(n.code,{children:"[DerivedRatesAvailRetrieveInput]!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Hotel derived rates input data."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventoryavailderivedratesinputhotelcodestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryAvailDerivedRatesInput.",(0,r.jsx)("b",{children:"hotelCode"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Code associated with the hotel."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventoryavailderivedratesinputcontextcodestring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryAvailDerivedRatesInput.",(0,r.jsx)("b",{children:"contextCode"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Context code."}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var r=t(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,i={},o=null,c=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:o,ref:c,props:i,_owner:d.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);