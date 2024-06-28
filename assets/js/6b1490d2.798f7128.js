/*! For license information please see 6b1490d2.798f7128.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42305],{34996:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>p,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=s(74848),d=s(28453),r=s(96540);const n={id:"partner",title:"Partner"},c=void 0,l={id:"types/objects/partner",title:"Partner",description:"No description",source:"@site/api/types/objects/partner.mdx",sourceDirName:"types/objects",slug:"/types/objects/partner",permalink:"/api/types/objects/partner",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"partner",title:"Partner"},sidebar:"schemaSidebar",previous:{title:"PartnerIncludedInProperties",permalink:"/api/types/objects/partner-included-in-properties"},next:{title:"PassengerBook",permalink:"/api/types/objects/passenger-book"}},o={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,d.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:s,startOpen:n=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[l,o]=(0,r.useState)(n);return(0,t.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Partner.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnercodeid--",level:4},{value:'<code>Partner.<b>partnerData</b></code><Bullet></Bullet><code>PartnerData</code> <Badge class="badge badge--secondary"></Badge>',id:"partnerpartnerdatapartnerdata-",level:4},{value:'<code>Partner.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partneradvisemessageadvisemessage--",level:4},{value:'<code>Partner.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partneradvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Partner.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnercreatedatdatetime--",level:4},{value:'<code>Partner.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnerupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type Partner implements Node {\n  code: ID!\n  partnerData: PartnerData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"partnercodeid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Partner.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"partnerpartnerdatapartnerdata-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Partner.",(0,t.jsx)("b",{children:"partnerData"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/partner-data",children:(0,t.jsx)(a.code,{children:"PartnerData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"partneradvisemessageadvisemessage--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Partner.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"List of advise messages."}),"\n",(0,t.jsxs)(a.h5,{id:"partneradvisemessageleveladvisemessagelevel--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Partner.adviseMessage.",(0,t.jsx)("b",{children:"level"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/enums/advise-message-level",children:(0,t.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"partnercreatedatdatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Partner.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Date created"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"partnerupdatedatdatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Partner.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Date updated"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(a.h4,{id:"node-",children:[(0,t.jsx)(a.a,{href:"/api/types/interfaces/node",children:(0,t.jsx)(a.code,{children:"Node"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/types/objects/admin-mutation",children:(0,t.jsx)(a.code,{children:"AdminMutation"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/organization-data",children:(0,t.jsx)(a.code,{children:"OrganizationData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/partner-edge",children:(0,t.jsx)(a.code,{children:"PartnerEdge"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,a,s)=>{var t=s(96540),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,a,s){var t,r={},o=null,i=null;for(t in void 0!==s&&(o=""+s),void 0!==a.key&&(o=""+a.key),void 0!==a.ref&&(i=a.ref),a)n.call(a,t)&&!l.hasOwnProperty(t)&&(r[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===r[t]&&(r[t]=a[t]);return{$$typeof:d,type:e,key:o,ref:i,props:r,_owner:c.current}}a.Fragment=r,a.jsx=o,a.jsxs=o},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>n,x:()=>c});var t=s(96540);const d={},r=t.createContext(d);function n(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);