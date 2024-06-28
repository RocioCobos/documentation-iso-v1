/*! For license information please see a6bf789b.5b578088.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4778],{43584:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>b});var l=t(74848),s=t(28453),n=t(96540);const o={id:"hotel-cancel-payload",title:"HotelCancelPayload"},c=void 0,d={id:"types/objects/hotel-cancel-payload",title:"HotelCancelPayload",description:"No description",source:"@site/api/types/objects/hotel-cancel-payload.mdx",sourceDirName:"types/objects",slug:"/types/objects/hotel-cancel-payload",permalink:"/api/types/objects/hotel-cancel-payload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-cancel-payload",title:"HotelCancelPayload"},sidebar:"schemaSidebar",previous:{title:"HotelCancelDetail",permalink:"/api/types/objects/hotel-cancel-detail"},next:{title:"HotelCommitDetails",permalink:"/api/types/objects/hotel-commit-details"}},r={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,s.R)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:t,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[d,r]=(0,n.useState)(o);return(0,l.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&t]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelCancelPayload.<b>stats</b></code><Bullet></Bullet><code>StatsRequest</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelpayloadstatsstatsrequest-",level:4},{value:'<code>HotelCancelPayload.stats.<b>token</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelpayloadstatstokenstring--",level:5},{value:'<code>HotelCancelPayload.<b>auditData</b></code><Bullet></Bullet><code>AuditData</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelpayloadauditdataauditdata-",level:4},{value:'<code>HotelCancelPayload.<b>cancellation</b></code><Bullet></Bullet><code>HotelCancelDetail</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelpayloadcancellationhotelcanceldetail-",level:4},{value:'<code>HotelCancelPayload.<b>errors</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelpayloaderrorserror--",level:4},{value:'<code>HotelCancelPayload.<b>warnings</b></code><Bullet></Bullet><code>[Warning!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelpayloadwarningswarning--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Response</code> <Badge class="badge badge--secondary"></Badge>',id:"response-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.p,{children:"No description"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-graphql",children:"type HotelCancelPayload implements Response {\n  stats(token: String!): StatsRequest\n  auditData: AuditData\n  cancellation: HotelCancelDetail\n  errors: [Error!]\n  warnings: [Warning!]\n}\n"})}),"\n",(0,l.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(a.h4,{id:"hotelcancelpayloadstatsstatsrequest-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelPayload.",(0,l.jsx)("b",{children:"stats"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/types/objects/stats-request",children:(0,l.jsx)(a.code,{children:"StatsRequest"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Application stats in string format"}),"\n",(0,l.jsxs)(a.h5,{id:"hotelcancelpayloadstatstokenstring--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelPayload.stats.",(0,l.jsx)("b",{children:"token"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,l.jsx)(a.code,{children:"String!"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,l.jsxs)(a.h4,{id:"hotelcancelpayloadauditdataauditdata-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelPayload.",(0,l.jsx)("b",{children:"auditData"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/types/objects/audit-data",children:(0,l.jsx)(a.code,{children:"AuditData"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Data sent and received in the supplier's native format."}),"\n"]}),"\n",(0,l.jsxs)(a.h4,{id:"hotelcancelpayloadcancellationhotelcanceldetail-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelPayload.",(0,l.jsx)("b",{children:"cancellation"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/types/objects/hotel-cancel-detail",children:(0,l.jsx)(a.code,{children:"HotelCancelDetail"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Information about cancel"}),"\n"]}),"\n",(0,l.jsxs)(a.h4,{id:"hotelcancelpayloaderrorserror--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelPayload.",(0,l.jsx)("b",{children:"errors"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/types/objects/error",children:(0,l.jsx)(a.code,{children:"[Error!]"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Errors that abort services"}),"\n"]}),"\n",(0,l.jsxs)(a.h4,{id:"hotelcancelpayloadwarningswarning--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelPayload.",(0,l.jsx)("b",{children:"warnings"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/types/objects/warning",children:(0,l.jsx)(a.code,{children:"[Warning!]"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Potentially harmful situations or errors that won't force the service to abort.\nTo identify if it is blocked one, you can check our documentation regards this matter."}),"\n"]}),"\n",(0,l.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,l.jsxs)(a.h4,{id:"response-",children:[(0,l.jsx)(a.a,{href:"/api/types/interfaces/response",children:(0,l.jsx)(a.code,{children:"Response"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,l.jsx)(a.blockquote,{children:"\n"}),"\n",(0,l.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.a,{href:"/api/types/objects/hotel-xmutation",children:(0,l.jsx)(a.code,{children:"HotelXMutation"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},21020:(e,a,t)=>{var l=t(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function r(e,a,t){var l,n={},r=null,i=null;for(l in void 0!==t&&(r=""+t),void 0!==a.key&&(r=""+a.key),void 0!==a.ref&&(i=a.ref),a)o.call(a,l)&&!d.hasOwnProperty(l)&&(n[l]=a[l]);if(e&&e.defaultProps)for(l in a=e.defaultProps)void 0===n[l]&&(n[l]=a[l]);return{$$typeof:s,type:e,key:r,ref:i,props:n,_owner:c.current}}a.Fragment=n,a.jsx=r,a.jsxs=r},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>c});var l=t(96540);const s={},n=l.createContext(s);function o(e){const a=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(n.Provider,{value:a},e.children)}}}]);