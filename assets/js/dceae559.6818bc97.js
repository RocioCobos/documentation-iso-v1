/*! For license information please see dceae559.6818bc97.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82446],{34633:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>v,assets:()=>o,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=a(74848),r=a(28453),d=a(96540);const i={id:"avail-derived-rates-rs",title:"AvailDerivedRatesRs"},n=void 0,l={id:"types/objects/avail-derived-rates-rs",title:"AvailDerivedRatesRs",description:"Represents the response data for rates availability operations.",source:"@site/api/types/objects/avail-derived-rates-rs.mdx",sourceDirName:"types/objects",slug:"/types/objects/avail-derived-rates-rs",permalink:"/api/types/objects/avail-derived-rates-rs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"avail-derived-rates-rs",title:"AvailDerivedRatesRs"},sidebar:"schemaSidebar",previous:{title:"AuditRule",permalink:"/api/types/objects/audit-rule"},next:{title:"AvailNoK",permalink:"/api/types/objects/avail-no-k"}},o={},c=()=>{const e={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},v=e=>{const s={a:"a",...(0,r.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:s,children:a,startOpen:i=!1})=>{const n={details:"details",summary:"summary",...(0,r.R)()},[l,o]=(0,d.useState)(i);return(0,t.jsxs)(n.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AvailDerivedRatesRs.<b>derivedRates</b></code><Bullet></Bullet><code>[DerivedRatesAvailLoad]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availderivedratesrsderivedratesderivedratesavailload--",level:4},{value:'<code>AvailDerivedRatesRs.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availderivedratesrsadvisemessagesadvisemessage--",level:4},{value:'<code>AvailDerivedRatesRs.<b>success</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availderivedratesrssuccessboolean--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Represents the response data for rates availability operations."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type AvailDerivedRatesRs {\n  derivedRates: [DerivedRatesAvailLoad]\n  adviseMessages: [AdviseMessage]\n  success: Boolean!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"availderivedratesrsderivedratesderivedratesavailload--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailDerivedRatesRs.",(0,t.jsx)("b",{children:"derivedRates"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/derived-rates-avail-load",children:(0,t.jsx)(s.code,{children:"[DerivedRatesAvailLoad]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"List of derived rates availabilities. See DerivedRatesAvailLoad."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"availderivedratesrsadvisemessagesadvisemessage--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailDerivedRatesRs.",(0,t.jsx)("b",{children:"adviseMessages"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"List of advise messages associated with the operation. See AdviseMessage."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"availderivedratesrssuccessboolean--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailDerivedRatesRs.",(0,t.jsx)("b",{children:"success"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Indicates whether the operation was successful."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-mutation",children:(0,t.jsx)(s.code,{children:"InventoryMutation"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(c,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-query",children:(0,t.jsx)(s.code,{children:"InventoryQuery"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,s,a)=>{var t=a(96540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,a){var t,d={},o=null,c=null;for(t in void 0!==a&&(o=""+a),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,t)&&!l.hasOwnProperty(t)&&(d[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===d[t]&&(d[t]=s[t]);return{$$typeof:r,type:e,key:o,ref:c,props:d,_owner:n.current}}s.Fragment=d,s.jsx=o,s.jsxs=o},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>n});var t=a(96540);const r={},d=t.createContext(r);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);