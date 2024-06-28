/*! For license information please see f170cedd.f3ac39a6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65409],{97648:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>y,assets:()=>i,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var c=t(74848),a=t(28453),l=t(96540);const o={id:"inventory-cancel-policy",title:"InventoryCancelPolicy"},r=void 0,s={id:"types/objects/inventory-cancel-policy",title:"InventoryCancelPolicy",description:"Represents a cancel policy object.",source:"@site/api/types/objects/inventory-cancel-policy.mdx",sourceDirName:"types/objects",slug:"/types/objects/inventory-cancel-policy",permalink:"/api/types/objects/inventory-cancel-policy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-cancel-policy",title:"InventoryCancelPolicy"},sidebar:"schemaSidebar",previous:{title:"InventoryCancelPolicyByDate",permalink:"/api/types/objects/inventory-cancel-policy-by-date"},next:{title:"InventoryCategory",permalink:"/api/types/objects/inventory-category"}},i={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},y=e=>{const n={a:"a",...(0,a.R)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,a.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const r={details:"details",summary:"summary",...(0,a.R)()},[s,i]=(0,l.useState)(o);return(0,c.jsxs)(r.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&t]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryCancelPolicy.<b>refundable</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpolicyrefundableboolean--",level:4},{value:'<code>InventoryCancelPolicy.<b>cancelPenalties</b></code><Bullet></Bullet><code>[InventoryCancelPenalty]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorycancelpolicycancelpenaltiesinventorycancelpenalty--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Represents a cancel policy object."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"type InventoryCancelPolicy {\n  refundable: Boolean!\n  cancelPenalties: [InventoryCancelPenalty]\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"inventorycancelpolicyrefundableboolean--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPolicy.",(0,c.jsx)("b",{children:"refundable"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,c.jsx)(n.code,{children:"Boolean!"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"Indicates if the rate is refundable."}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"inventorycancelpolicycancelpenaltiesinventorycancelpenalty--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryCancelPolicy.",(0,c.jsx)("b",{children:"cancelPenalties"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(n.a,{href:"/api/types/objects/inventory-cancel-penalty",children:(0,c.jsx)(n.code,{children:"[InventoryCancelPenalty]"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"List of penalties applicable for the rate. See CancelPenalty."}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/api/types/objects/inventory-cancel-policies-rate",children:(0,c.jsx)(n.code,{children:"InventoryCancelPoliciesRate"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(d,{}),(0,c.jsx)(n.a,{href:"/api/types/objects/inventory-cancel-policy-by-date",children:(0,c.jsx)(n.code,{children:"InventoryCancelPolicyByDate"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var c=t(96540),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var c,l={},i=null,d=null;for(c in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,c)&&!s.hasOwnProperty(c)&&(l[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===l[c]&&(l[c]=n[c]);return{$$typeof:a,type:e,key:i,ref:d,props:l,_owner:r.current}}n.Fragment=l,n.jsx=i,n.jsxs=i},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var c=t(96540);const a={},l=c.createContext(a);function o(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);