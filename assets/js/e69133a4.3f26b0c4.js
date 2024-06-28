/*! For license information please see e69133a4.3f26b0c4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59825],{89128:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>h,Bullet:()=>g,Details:()=>b,SpecifiedBy:()=>r,assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>l,toc:()=>x});var i=n(74848),o=n(28453),t=n(96540);const a={id:"insights-xbooking-detail-connection",title:"InsightsXBookingDetailConnection"},d=void 0,l={id:"types/objects/insights-xbooking-detail-connection",title:"InsightsXBookingDetailConnection",description:"Booking Details",source:"@site/api/types/objects/insights-xbooking-detail-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/insights-xbooking-detail-connection",permalink:"/api/types/objects/insights-xbooking-detail-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"insights-xbooking-detail-connection",title:"InsightsXBookingDetailConnection"},sidebar:"schemaSidebar",previous:{title:"InsightsXBookingAggregation",permalink:"/api/types/objects/insights-xbooking-aggregation"},next:{title:"InsightsXBookingDetailEdge",permalink:"/api/types/objects/insights-xbooking-detail-edge"}},c={},g=()=>{const e={span:"span",...(0,o.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},r=e=>{const s={a:"a",...(0,o.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,o.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:s,children:n,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[l,c]=(0,t.useState)(a);return(0,i.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&n]})},x=[{value:"Booking Details",id:"booking-details",level:2},{value:"Fields",id:"fields",level:3},{value:'<code>InsightsXBookingDetailConnection.<b>edges</b></code><Bullet></Bullet><code>[InsightsXBookingDetailEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailconnectionedgesinsightsxbookingdetailedge--",level:4},{value:'<code>InsightsXBookingDetailConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailconnectionpageinfopageinfo--",level:4},{value:'<code>InsightsXBookingDetailConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailconnectionadvisemessageadvisemessage--",level:4},{value:'<code>InsightsXBookingDetailConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}];function p(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"booking-details",children:"Booking Details"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:"type InsightsXBookingDetailConnection {\n  edges: [InsightsXBookingDetailEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(s.h4,{id:"insightsxbookingdetailconnectionedgesinsightsxbookingdetailedge--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetailConnection.",(0,i.jsx)("b",{children:"edges"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(s.a,{href:"/api/types/objects/insights-xbooking-detail-edge",children:(0,i.jsx)(s.code,{children:"[InsightsXBookingDetailEdge]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(s.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(s.h4,{id:"insightsxbookingdetailconnectionpageinfopageinfo--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetailConnection.",(0,i.jsx)("b",{children:"pageInfo"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(s.a,{href:"/api/types/objects/page-info",children:(0,i.jsx)(s.code,{children:"PageInfo!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(s.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(s.h4,{id:"insightsxbookingdetailconnectionadvisemessageadvisemessage--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetailConnection.",(0,i.jsx)("b",{children:"adviseMessage"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,i.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.h5,{id:"insightsxbookingdetailconnectionadvisemessageleveladvisemessagelevel--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetailConnection.adviseMessage.",(0,i.jsx)("b",{children:"level"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,i.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/types/objects/insights-xbooking-report",children:(0,i.jsx)(s.code,{children:"InsightsXBookingReport"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},21020:(e,s,n)=>{var i=n(96540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var i,t={},c=null,g=null;for(i in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(g=s.ref),s)a.call(s,i)&&!l.hasOwnProperty(i)&&(t[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===t[i]&&(t[i]=s[i]);return{$$typeof:o,type:e,key:c,ref:g,props:t,_owner:d.current}}s.Fragment=t,s.jsx=c,s.jsxs=c},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>d});var i=n(96540);const o={},t=i.createContext(o);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);