/*! For license information please see 79027f0b.216739ee.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33100],{15527:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>r,toc:()=>b});var o=a(74848),s=a(28453),n=a(96540);const l={id:"hotel-commit-payload",title:"HotelCommitPayload",hide_table_of_contents:!1},d=void 0,r={id:"objects/hotel-commit-payload",title:"HotelCommitPayload",description:"contains information about commitment",source:"@site/api/objects/hotel-commit-payload.mdx",sourceDirName:"objects",slug:"/objects/hotel-commit-payload",permalink:"/api/objects/hotel-commit-payload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-commit-payload",title:"HotelCommitPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelCommitDetails",permalink:"/api/objects/hotel-commit-details"},next:{title:"HotelConnection",permalink:"/api/objects/hotel-connection"}},c={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,s.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:a,startOpen:l=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[r,c]=(0,n.useState)(l);return(0,o.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelCommitPayload.<b>stats</b></code><Bullet></Bullet><code>StatsRequest</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcommitpayloadstatsstatsrequest-",level:4},{value:'<code>HotelCommitPayload.stats.<b>token</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcommitpayloadstatstokenstring--",level:5},{value:'<code>HotelCommitPayload.<b>auditData</b></code><Bullet></Bullet><code>AuditData</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcommitpayloadauditdataauditdata-",level:4},{value:'<code>HotelCommitPayload.<b>commitDetails</b></code><Bullet></Bullet><code>HotelCommitDetails</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcommitpayloadcommitdetailshotelcommitdetails-",level:4},{value:'<code>HotelCommitPayload.<b>errors</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcommitpayloaderrorserror--",level:4},{value:'<code>HotelCommitPayload.<b>warnings</b></code><Bullet></Bullet><code>[Warning!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcommitpayloadwarningswarning--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Response</code> <Badge class="badge badge--secondary"></Badge>',id:"response-",level:4},{value:"Member of",id:"member-of",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"contains information about commitment"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"type HotelCommitPayload implements Response {\n  stats(token: String!): StatsRequest\n  auditData: AuditData\n  commitDetails: HotelCommitDetails\n  errors: [Error!]\n  warnings: [Warning!]\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"hotelcommitpayloadstatsstatsrequest-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCommitPayload.",(0,o.jsx)("b",{children:"stats"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(t.a,{href:"/api/objects/stats-request",children:(0,o.jsx)(t.code,{children:"StatsRequest"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Application stats in string format"}),"\n",(0,o.jsxs)(t.h5,{id:"hotelcommitpayloadstatstokenstring--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCommitPayload.stats.",(0,o.jsx)("b",{children:"token"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(t.a,{href:"/api/scalars/string",children:(0,o.jsx)(t.code,{children:"String!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"hotelcommitpayloadauditdataauditdata-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCommitPayload.",(0,o.jsx)("b",{children:"auditData"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(t.a,{href:"/api/objects/audit-data",children:(0,o.jsx)(t.code,{children:"AuditData"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Data sent and received in the supplier's native format."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"hotelcommitpayloadcommitdetailshotelcommitdetails-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCommitPayload.",(0,o.jsx)("b",{children:"commitDetails"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(t.a,{href:"/api/objects/hotel-commit-details",children:(0,o.jsx)(t.code,{children:"HotelCommitDetails"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Information about commit"}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"hotelcommitpayloaderrorserror--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCommitPayload.",(0,o.jsx)("b",{children:"errors"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(t.a,{href:"/api/objects/error",children:(0,o.jsx)(t.code,{children:"[Error!]"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Errors that abort services"}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"hotelcommitpayloadwarningswarning--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCommitPayload.",(0,o.jsx)("b",{children:"warnings"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(t.a,{href:"/api/objects/warning",children:(0,o.jsx)(t.code,{children:"[Warning!]"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Potentially harmful situations or errors that won't force the service to abort.\nTo identify if it is blocked one, you can check our documentation regards this matter\n",(0,o.jsx)(t.a,{href:"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/",children:"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/"})]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,o.jsxs)(t.h4,{id:"response-",children:[(0,o.jsx)(t.a,{href:"/api/interfaces/response",children:(0,o.jsx)(t.code,{children:"Response"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,o.jsx)(t.blockquote,{children:"\n"}),"\n",(0,o.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/api/objects/hotel-xmutation",children:(0,o.jsx)(t.code,{children:"HotelXMutation"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},21020:(e,t,a)=>{var o=a(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var o,n={},c=null,i=null;for(o in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(i=t.ref),t)l.call(t,o)&&!r.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:i,props:n,_owner:d.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>d});var o=a(96540);const s={},n=o.createContext(s);function l(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);