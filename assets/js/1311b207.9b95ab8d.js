/*! For license information please see 1311b207.9b95ab8d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34218],{77826:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>x,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>b});var t=s(74848),n=s(28453),r=s(96540);const o={id:"rate",title:"Rate"},c=void 0,d={id:"types/objects/rate",title:"Rate",description:"No description",source:"@site/api/types/objects/rate.mdx",sourceDirName:"types/objects",slug:"/types/objects/rate",permalink:"/api/types/objects/rate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"rate",title:"Rate"},sidebar:"schemaSidebar",previous:{title:"RatePriceLoad",permalink:"/api/types/objects/rate-price-load"},next:{title:"Rategroup",permalink:"/api/types/objects/rategroup"}},l={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const a={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:s,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[d,l]=(0,r.useState)(o);return(0,t.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&s]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Rate.<b>currency</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ratecurrencystring--",level:4},{value:'<code>Rate.<b>baseAmount</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ratebaseamountfloat--",level:4},{value:'<code>Rate.<b>nonCommissionablePriceAmount</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ratenoncommissionablepriceamountfloat--",level:4},{value:'<code>Rate.<b>paxes</b></code><Bullet></Bullet><code>Paxes</code> <Badge class="badge badge--secondary"></Badge>',id:"ratepaxespaxes-",level:4},{value:'<code>Rate.<b>rooms</b></code><Bullet></Bullet><code>[PackageRoom]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rateroomspackageroom--",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type Rate {\n  currency: String!\n  baseAmount: Float!\n  nonCommissionablePriceAmount: Float!\n  paxes: Paxes\n  rooms: [PackageRoom]\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"ratecurrencystring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Rate.",(0,t.jsx)("b",{children:"currency"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Currency used for the option received in standard ISO 4217"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"ratebaseamountfloat--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Rate.",(0,t.jsx)("b",{children:"baseAmount"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/float",children:(0,t.jsx)(a.code,{children:"Float!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Base prie for the option"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"ratenoncommissionablepriceamountfloat--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Rate.",(0,t.jsx)("b",{children:"nonCommissionablePriceAmount"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/float",children:(0,t.jsx)(a.code,{children:"Float!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Price that is not commsissionable"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"ratepaxespaxes-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Rate.",(0,t.jsx)("b",{children:"paxes"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/paxes",children:(0,t.jsx)(a.code,{children:"Paxes"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Paxes applying to this price and option"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"rateroomspackageroom--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Rate.",(0,t.jsx)("b",{children:"rooms"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/package-room",children:(0,t.jsx)(a.code,{children:"[PackageRoom]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Rooms applying to the option"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/types/objects/search-option",children:(0,t.jsx)(a.code,{children:"SearchOption"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},21020:(e,a,s)=>{var t=s(96540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,s){var t,r={},l=null,i=null;for(t in void 0!==s&&(l=""+s),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)o.call(a,t)&&!d.hasOwnProperty(t)&&(r[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===r[t]&&(r[t]=a[t]);return{$$typeof:n,type:e,key:l,ref:i,props:r,_owner:c.current}}a.Fragment=r,a.jsx=l,a.jsxs=l},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>o,x:()=>c});var t=s(96540);const n={},r=t.createContext(n);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);