/*! For license information please see 2712711a.364e2c89.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24277],{90001:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>f,assets:()=>o,contentTitle:()=>n,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var s=a(74848),d=a(28453),r=a(96540);const i={id:"flight-offer-item",title:"FlightOfferItem",hide_table_of_contents:!1},n=void 0,l={id:"objects/flight-offer-item",title:"FlightOfferItem",description:"Information about a priced grouping of one or more services within an Offer.",source:"@site/api/objects/flight-offer-item.mdx",sourceDirName:"objects",slug:"/objects/flight-offer-item",permalink:"/api/objects/flight-offer-item",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-offer-item",title:"FlightOfferItem",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightOfferItemData",permalink:"/api/objects/flight-offer-item-data"},next:{title:"FlightOffer",permalink:"/api/objects/flight-offer"}},o={},c=()=>{const e={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const t={a:"a",...(0,d.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:a,startOpen:i=!1})=>{const n={details:"details",summary:"summary",...(0,d.R)()},[l,o]=(0,r.useState)(i);return(0,s.jsxs)(n.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&a]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightOfferItem.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightofferitemcodeid--",level:4},{value:'<code>FlightOfferItem.<b>offerItemData</b></code><Bullet></Bullet><code>FlightOfferItemData</code> <Badge class="badge badge--secondary"></Badge>',id:"flightofferitemofferitemdataflightofferitemdata-",level:4},{value:'<code>FlightOfferItem.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightofferitemcreatedatdatetime--",level:4},{value:'<code>FlightOfferItem.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightofferitemupdatedatdatetime--",level:4},{value:'<code>FlightOfferItem.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightofferitemadvisemessageadvisemessage--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Information about a priced grouping of one or more services within an Offer."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type FlightOfferItem implements Node {\n  code: ID!\n  offerItemData: FlightOfferItemData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage: [AdviseMessage]\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"flightofferitemcodeid--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOfferItem.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/scalars/id",children:(0,s.jsx)(t.code,{children:"ID!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"flightofferitemofferitemdataflightofferitemdata-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOfferItem.",(0,s.jsx)("b",{children:"offerItemData"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/objects/flight-offer-item-data",children:(0,s.jsx)(t.code,{children:"FlightOfferItemData"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"flightofferitemcreatedatdatetime--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOfferItem.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(t.code,{children:"DateTime!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"flightofferitemupdatedatdatetime--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOfferItem.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(t.code,{children:"DateTime!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"flightofferitemadvisemessageadvisemessage--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOfferItem.",(0,s.jsx)("b",{children:"adviseMessage"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/objects/advise-message",children:(0,s.jsx)(t.code,{children:"[AdviseMessage]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(t.h4,{id:"node-",children:[(0,s.jsx)(t.a,{href:"/api/interfaces/node",children:(0,s.jsx)(t.code,{children:"Node"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/objects/flight-offer-data",children:(0,s.jsx)(t.code,{children:"FlightOfferData"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},21020:(e,t,a)=>{var s=a(96540),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,a){var s,r={},o=null,c=null;for(s in void 0!==a&&(o=""+a),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:d,type:e,key:o,ref:c,props:r,_owner:n.current}}t.Fragment=r,t.jsx=o,t.jsxs=o},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>n});var s=a(96540);const d={},r=s.createContext(d);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);