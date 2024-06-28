/*! For license information please see 368e969e.f8258a4c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94398],{10939:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>j});var s=n(74848),r=n(28453),i=n(96540);const a={id:"price-adjust-input",title:"PriceAdjustInput"},c=void 0,o={id:"types/inputs/price-adjust-input",title:"PriceAdjustInput",description:"Represents a price adjustment.",source:"@site/api/types/inputs/price-adjust-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/price-adjust-input",permalink:"/api/types/inputs/price-adjust-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"price-adjust-input",title:"PriceAdjustInput"},sidebar:"schemaSidebar",previous:{title:"PluginsInput",permalink:"/api/types/inputs/plugins-input"},next:{title:"PriceInput",permalink:"/api/types/inputs/price-input"}},d={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,r.R)()},[o,d]=(0,i.useState)(a);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>PriceAdjustInput.<b>priceType</b></code><Bullet></Bullet><code>AmountIncType</code> <Badge class="badge badge--secondary"></Badge>',id:"priceadjustinputpricetypeamountinctype-",level:4},{value:'<code>PriceAdjustInput.<b>amount</b></code><Bullet></Bullet><code>Float</code> <Badge class="badge badge--secondary"></Badge>',id:"priceadjustinputamountfloat-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Represents a price adjustment."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input PriceAdjustInput {\n  priceType: AmountIncType\n  amount: Float\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"priceadjustinputpricetypeamountinctype-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PriceAdjustInput.",(0,s.jsx)("b",{children:"priceType"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/api/types/enums/amount-inc-type",children:(0,s.jsx)(t.code,{children:"AmountIncType"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Type of price adjustment. See AmountIncType."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"priceadjustinputamountfloat-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PriceAdjustInput.",(0,s.jsx)("b",{children:"amount"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/float",children:(0,s.jsx)(t.code,{children:"Float"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Amount of the price adjustment."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/inputs/derived-rate-price-input",children:(0,s.jsx)(t.code,{children:"DerivedRatePriceInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,i={},d=null,l=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,s)&&!o.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:d,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);