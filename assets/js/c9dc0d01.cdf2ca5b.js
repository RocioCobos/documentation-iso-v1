/*! For license information please see c9dc0d01.cdf2ca5b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88721],{28673:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=s(74848),t=s(28453),r=s(96540);const o={id:"inventory-age-policies",title:"InventoryAgePolicies"},l=void 0,i={id:"types/objects/inventory-age-policies",title:"InventoryAgePolicies",description:"Age policies entity.",source:"@site/api/types/objects/inventory-age-policies.mdx",sourceDirName:"types/objects",slug:"/types/objects/inventory-age-policies",permalink:"/api/types/objects/inventory-age-policies",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-age-policies",title:"InventoryAgePolicies"},sidebar:"schemaSidebar",previous:{title:"InternalExtendedInfo",permalink:"/api/types/objects/internal-extended-info"},next:{title:"InventoryArrivalType",permalink:"/api/types/objects/inventory-arrival-type"}},c={},d=()=>{const e={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,t.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:s,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,t.R)()},[i,c]=(0,r.useState)(o);return(0,a.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryAgePolicies.<b>maxAgeInfants</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryagepoliciesmaxageinfantsint--",level:4},{value:'<code>InventoryAgePolicies.<b>freeInfants</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryagepoliciesfreeinfantsboolean--",level:4},{value:'<code>InventoryAgePolicies.<b>maxAgeChildren</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryagepoliciesmaxagechildrenint--",level:4},{value:'<code>InventoryAgePolicies.<b>freeChildren</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryagepoliciesfreechildrenboolean--",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Age policies entity."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type InventoryAgePolicies {\n  maxAgeInfants: Int!\n  freeInfants: Boolean!\n  maxAgeChildren: Int!\n  freeChildren: Boolean!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"inventoryagepoliciesmaxageinfantsint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryAgePolicies.",(0,a.jsx)("b",{children:"maxAgeInfants"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Max age baby not inclusive"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"inventoryagepoliciesfreeinfantsboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryAgePolicies.",(0,a.jsx)("b",{children:"freeInfants"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"If true the babies are free of charge"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"inventoryagepoliciesmaxagechildrenint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryAgePolicies.",(0,a.jsx)("b",{children:"maxAgeChildren"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Max age child not inclusive"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"inventoryagepoliciesfreechildrenboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryAgePolicies.",(0,a.jsx)("b",{children:"freeChildren"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"If true children are free of charge"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/types/objects/inventory-rate-setup",children:(0,a.jsx)(n.code,{children:"InventoryRateSetup"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},21020:(e,n,s)=>{var a=s(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var a,r={},c=null,d=null;for(a in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,a)&&!i.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===r[a]&&(r[a]=n[a]);return{$$typeof:t,type:e,key:c,ref:d,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var a=s(96540);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);