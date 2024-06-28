/*! For license information please see 169cecf1.77e91d60.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98613],{32980:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=t(74848),s=t(28453),c=t(96540);const i={id:"payment-policies-create-input",title:"PaymentPoliciesCreateInput"},r=void 0,l={id:"types/inputs/payment-policies-create-input",title:"PaymentPoliciesCreateInput",description:"Represents a payment policies create object.",source:"@site/api/types/inputs/payment-policies-create-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/payment-policies-create-input",permalink:"/api/types/inputs/payment-policies-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payment-policies-create-input",title:"PaymentPoliciesCreateInput"},sidebar:"schemaSidebar",previous:{title:"PaymentInput",permalink:"/api/types/inputs/payment-input"},next:{title:"PaymentPoliciesUpdateInput",permalink:"/api/types/inputs/payment-policies-update-input"}},o={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[l,o]=(0,c.useState)(i);return(0,a.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>PaymentPoliciesCreateInput.<b>currency</b></code><Bullet></Bullet><code>Currency!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentpoliciescreateinputcurrencycurrency--",level:4},{value:'<code>PaymentPoliciesCreateInput.<b>commission</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentpoliciescreateinputcommissionfloat--",level:4},{value:'<code>PaymentPoliciesCreateInput.<b>priceIsBinding</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentpoliciescreateinputpriceisbindingboolean--",level:4},{value:'<code>PaymentPoliciesCreateInput.<b>acceptedPayments</b></code><Bullet></Bullet><code>[AcceptedPaymentInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentpoliciescreateinputacceptedpaymentsacceptedpaymentinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Represents a payment policies create object."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input PaymentPoliciesCreateInput {\n  currency: Currency!\n  commission: Float!\n  priceIsBinding: Boolean!\n  acceptedPayments: [AcceptedPaymentInput]\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"paymentpoliciescreateinputcurrencycurrency--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentPoliciesCreateInput.",(0,a.jsx)("b",{children:"currency"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/currency",children:(0,a.jsx)(n.code,{children:"Currency!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Currency associated with the payment policies.\nCurrency"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"paymentpoliciescreateinputcommissionfloat--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentPoliciesCreateInput.",(0,a.jsx)("b",{children:"commission"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/float",children:(0,a.jsx)(n.code,{children:"Float!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Commission applied for all rooms in this rate, leave value 0 for net price. Only Informative."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"paymentpoliciescreateinputpriceisbindingboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentPoliciesCreateInput.",(0,a.jsx)("b",{children:"priceIsBinding"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Informs if the prices are binding price. Only Informative."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"paymentpoliciescreateinputacceptedpaymentsacceptedpaymentinput--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentPoliciesCreateInput.",(0,a.jsx)("b",{children:"acceptedPayments"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/inputs/accepted-payment-input",children:(0,a.jsx)(n.code,{children:"[AcceptedPaymentInput]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Rate Accepted Payments, if not informed it is MerchantPay.\nAcceptedPayment"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/types/inputs/inventory-rate-setup-create-input",children:(0,a.jsx)(n.code,{children:"InventoryRateSetupCreateInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var a=t(96540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var a,c={},o=null,d=null;for(a in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,a)&&!l.hasOwnProperty(a)&&(c[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===c[a]&&(c[a]=n[a]);return{$$typeof:s,type:e,key:o,ref:d,props:c,_owner:r.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const s={},c=a.createContext(s);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);