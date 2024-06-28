/*! For license information please see 6e673499.240faa4b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38278],{14728:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>h,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var n=r(74848),a=r(28453),o=r(96540);const s={id:"alert-type-configuration",title:"AlertTypeConfiguration",hide_table_of_contents:!1},i=void 0,l={id:"objects/alert-type-configuration",title:"AlertTypeConfiguration",description:"Depending on the alert type, typeConfiguration will use some fields",source:"@site/api/objects/alert-type-configuration.mdx",sourceDirName:"objects",slug:"/objects/alert-type-configuration",permalink:"/api/objects/alert-type-configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-type-configuration",title:"AlertTypeConfiguration",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertSlack",permalink:"/api/objects/alert-slack"},next:{title:"Alert",permalink:"/api/objects/alert"}},c={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:r,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[l,c]=(0,o.useState)(s);return(0,n.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&r]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertTypeConfiguration.<b>maxAverageTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alerttypeconfigurationmaxaveragetimeint-",level:4},{value:'<code>AlertTypeConfiguration.<b>maxTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alerttypeconfigurationmaxtimeint-",level:4},{value:'<code>AlertTypeConfiguration.<b>requestsToAlert</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alerttypeconfigurationrequeststoalertint-",level:4},{value:'<code>AlertTypeConfiguration.<b>toCheck</b></code><Bullet></Bullet><code>[Int!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerttypeconfigurationtocheckint--",level:4},{value:'<code>AlertTypeConfiguration.<b>toCompare</b></code><Bullet></Bullet><code>[Int!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerttypeconfigurationtocompareint--",level:4},{value:'<code>AlertTypeConfiguration.<b>price</b></code><Bullet></Bullet><code>AlertPrice</code> <Badge class="badge badge--secondary"></Badge>',id:"alerttypeconfigurationpricealertprice-",level:4},{value:'<code>AlertTypeConfiguration.<b>bounds</b></code><Bullet></Bullet><code>AlertBounds</code> <Badge class="badge badge--secondary"></Badge>',id:"alerttypeconfigurationboundsalertbounds-",level:4},{value:'<code>AlertTypeConfiguration.<b>ratios</b></code><Bullet></Bullet><code>AlertRatios</code> <Badge class="badge badge--secondary"></Badge>',id:"alerttypeconfigurationratiosalertratios-",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Depending on the alert type, typeConfiguration will use some fields"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type AlertTypeConfiguration {\n  maxAverageTime: Int\n  maxTime: Int\n  requestsToAlert: Int\n  toCheck: [Int!]\n  toCompare: [Int!]\n  price: AlertPrice\n  bounds: AlertBounds\n  ratios: AlertRatios\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"alerttypeconfigurationmaxaveragetimeint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertTypeConfiguration.",(0,n.jsx)("b",{children:"maxAverageTime"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Average time not allowed in miliseconds. Used for Average time alert type"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerttypeconfigurationmaxtimeint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertTypeConfiguration.",(0,n.jsx)("b",{children:"maxTime"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Time not allowed in miliseconds. Used for Average time alert type"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerttypeconfigurationrequeststoalertint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertTypeConfiguration.",(0,n.jsx)("b",{children:"requestsToAlert"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Requests vs total requests checked to consider alert in ALERTING status. Used for Average time alert type"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerttypeconfigurationtocheckint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertTypeConfiguration.",(0,n.jsx)("b",{children:"toCheck"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"[Int!]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Error codes to be Checked. By default all error codes excepts 0. Used for Error rate alert Type"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerttypeconfigurationtocompareint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertTypeConfiguration.",(0,n.jsx)("b",{children:"toCompare"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"[Int!]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Error codes to be Compared with Checked codes. By default all error codes. Used for Error rate alert Type"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerttypeconfigurationpricealertprice-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertTypeConfiguration.",(0,n.jsx)("b",{children:"price"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/objects/alert-price",children:(0,n.jsx)(t.code,{children:"AlertPrice"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Price contains the specific configuration for Price alert Type"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerttypeconfigurationboundsalertbounds-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertTypeConfiguration.",(0,n.jsx)("b",{children:"bounds"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/objects/alert-bounds",children:(0,n.jsx)(t.code,{children:"AlertBounds"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Bounds contains the specific configuration for Peak Traffic alert Type"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerttypeconfigurationratiosalertratios-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertTypeConfiguration.",(0,n.jsx)("b",{children:"ratios"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/objects/alert-ratios",children:(0,n.jsx)(t.code,{children:"AlertRatios"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Ratios contains the specific configuration for Business MEtric alert type"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/alert-configuration",children:(0,n.jsx)(t.code,{children:"AlertConfiguration"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,t,r)=>{var n=r(96540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);