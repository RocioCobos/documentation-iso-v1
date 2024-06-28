/*! For license information please see e6afb433.0c713f76.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55171],{71529:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>x});var i=a(74848),t=a(28453),n=a(96540);const d={id:"insights-xbooking-detail",title:"InsightsXBookingDetail"},o=void 0,l={id:"types/objects/insights-xbooking-detail",title:"InsightsXBookingDetail",description:"No description",source:"@site/api/types/objects/insights-xbooking-detail.mdx",sourceDirName:"types/objects",slug:"/types/objects/insights-xbooking-detail",permalink:"/api/types/objects/insights-xbooking-detail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"insights-xbooking-detail",title:"InsightsXBookingDetail"},sidebar:"schemaSidebar",previous:{title:"InsightsXBookingDetailEdge",permalink:"/api/types/objects/insights-xbooking-detail-edge"},next:{title:"InsightsXBookingReport",permalink:"/api/types/objects/insights-xbooking-report"}},c={},r=()=>{const e={span:"span",...(0,t.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,t.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,t.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:s,children:a,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[l,c]=(0,n.useState)(d);return(0,i.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>InsightsXBookingDetail.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailcodeid--",level:4},{value:'<code>InsightsXBookingDetail.<b>InsightsXBookingDetailData</b></code><Bullet></Bullet><code>BookingDetail</code> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailinsightsxbookingdetaildatabookingdetail-",level:4},{value:'<code>InsightsXBookingDetail.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailadvisemessageadvisemessage--",level:4},{value:'<code>InsightsXBookingDetail.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>InsightsXBookingDetail.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailcreatedatdatetime--",level:4},{value:'<code>InsightsXBookingDetail.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"No description"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:"type InsightsXBookingDetail implements Node {\n  code: ID!\n  InsightsXBookingDetailData: BookingDetail\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(s.h4,{id:"insightsxbookingdetailcodeid--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetail.",(0,i.jsx)("b",{children:"code"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,i.jsx)(s.code,{children:"ID!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(s.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(s.h4,{id:"insightsxbookingdetailinsightsxbookingdetaildatabookingdetail-",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetail.",(0,i.jsx)("b",{children:"InsightsXBookingDetailData"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(s.a,{href:"/api/types/objects/booking-detail",children:(0,i.jsx)(s.code,{children:"BookingDetail"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(s.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(s.h4,{id:"insightsxbookingdetailadvisemessageadvisemessage--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetail.",(0,i.jsx)("b",{children:"adviseMessage"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,i.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.h5,{id:"insightsxbookingdetailadvisemessageleveladvisemessagelevel--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetail.adviseMessage.",(0,i.jsx)("b",{children:"level"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,i.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,i.jsxs)(s.h4,{id:"insightsxbookingdetailcreatedatdatetime--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetail.",(0,i.jsx)("b",{children:"createdAt"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,i.jsx)(s.code,{children:"DateTime!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(s.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(s.h4,{id:"insightsxbookingdetailupdatedatdatetime--",children:[(0,i.jsx)(s.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetail.",(0,i.jsx)("b",{children:"updatedAt"})]})}),(0,i.jsx)(r,{}),(0,i.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,i.jsx)(s.code,{children:"DateTime!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(s.blockquote,{children:"\n"}),"\n",(0,i.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(s.h4,{id:"node-",children:[(0,i.jsx)(s.a,{href:"/api/types/interfaces/node",children:(0,i.jsx)(s.code,{children:"Node"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,i.jsx)(s.blockquote,{children:"\n"}),"\n",(0,i.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/types/objects/insights-xbooking-detail-edge",children:(0,i.jsx)(s.code,{children:"InsightsXBookingDetailEdge"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},21020:(e,s,a)=>{var i=a(96540),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,a){var i,n={},c=null,r=null;for(i in void 0!==a&&(c=""+a),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(r=s.ref),s)d.call(s,i)&&!l.hasOwnProperty(i)&&(n[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===n[i]&&(n[i]=s[i]);return{$$typeof:t,type:e,key:c,ref:r,props:n,_owner:o.current}}s.Fragment=n,s.jsx=c,s.jsxs=c},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>d,x:()=>o});var i=a(96540);const t={},n=i.createContext(t);function d(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);