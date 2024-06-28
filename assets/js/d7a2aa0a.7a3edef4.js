/*! For license information please see d7a2aa0a.7a3edef4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1218],{66039:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>x,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>b});var a=s(74848),r=s(28453),n=s(96540);const c={id:"hotel-search",title:"HotelSearch"},o=void 0,l={id:"types/objects/hotel-search",title:"HotelSearch",description:"Hotel results from the search response. Contains all the available options for the given criteria search",source:"@site/api/types/objects/hotel-search.mdx",sourceDirName:"types/objects",slug:"/types/objects/hotel-search",permalink:"/api/types/objects/hotel-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-search",title:"HotelSearch"},sidebar:"schemaSidebar",previous:{title:"HotelRuntimeParameter",permalink:"/api/types/objects/hotel-runtime-parameter"},next:{title:"HotelXAccessSpan",permalink:"/api/types/objects/hotel-xaccess-span"}},d={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const t={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:s,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[l,d]=(0,n.useState)(c);return(0,a.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&s]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelSearch.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchcontextstring-",level:4},{value:'<code>HotelSearch.<b>stats</b></code><Bullet></Bullet><code>StatsRequest</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchstatsstatsrequest-",level:4},{value:'<code>HotelSearch.stats.<b>token</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchstatstokenstring--",level:5},{value:'<code>HotelSearch.<b>auditData</b></code><Bullet></Bullet><code>AuditData</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchauditdataauditdata-",level:4},{value:'<code>HotelSearch.<b>requestCriteria</b></code><Bullet></Bullet><code>CriteriaSearch</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchrequestcriteriacriteriasearch-",level:4},{value:'<code>HotelSearch.<b>options</b></code><Bullet></Bullet><code>[HotelOptionSearch!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchoptionshoteloptionsearch--",level:4},{value:'<code>HotelSearch.<b>errors</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearcherrorserror--",level:4},{value:'<code>HotelSearch.<b>warnings</b></code><Bullet></Bullet><code>[Warning!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchwarningswarning--",level:4},{value:'<code>HotelSearch.<b>tracing</b></code><Bullet></Bullet><code>HotelXTracing</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelsearchtracinghotelxtracing-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Response</code> <Badge class="badge badge--secondary"></Badge>',id:"response-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Hotel results from the search response. Contains all the available options for the given criteria search"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type HotelSearch implements Response {\n  context: String\n  stats(token: String!): StatsRequest\n  auditData: AuditData\n  requestCriteria: CriteriaSearch\n  options: [HotelOptionSearch!]\n  errors: [Error!]\n  warnings: [Warning!]\n  tracing: HotelXTracing\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"hotelsearchcontextstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,a.jsx)("b",{children:"context"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Indicates the context of the response."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelsearchstatsstatsrequest-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,a.jsx)("b",{children:"stats"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/stats-request",children:(0,a.jsx)(t.code,{children:"StatsRequest"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Application stats in string format"}),"\n",(0,a.jsxs)(t.h5,{id:"hotelsearchstatstokenstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.stats.",(0,a.jsx)("b",{children:"token"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelsearchauditdataauditdata-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,a.jsx)("b",{children:"auditData"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/audit-data",children:(0,a.jsx)(t.code,{children:"AuditData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"All the sent and received transactions in the supplier's native format."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelsearchrequestcriteriacriteriasearch-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,a.jsx)("b",{children:"requestCriteria"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/criteria-search",children:(0,a.jsx)(t.code,{children:"CriteriaSearch"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Request Criteria contains destination, travel dates and the number of pax in each room."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelsearchoptionshoteloptionsearch--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,a.jsx)("b",{children:"options"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/hotel-option-search",children:(0,a.jsx)(t.code,{children:"[HotelOptionSearch!]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"List of options returned according to the request."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelsearcherrorserror--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,a.jsx)("b",{children:"errors"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/error",children:(0,a.jsx)(t.code,{children:"[Error!]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"List of errors that abort services."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelsearchwarningswarning--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,a.jsx)("b",{children:"warnings"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/warning",children:(0,a.jsx)(t.code,{children:"[Warning!]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Potentially harmful situations or errors that won't force the service to abort.\nTo identify if it is blocked one, you can check our documentation regards this matter."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelsearchtracinghotelxtracing-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelSearch.",(0,a.jsx)("b",{children:"tracing"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/hotel-xtracing",children:(0,a.jsx)(t.code,{children:"HotelXTracing"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Other information it may need to analize transactions. This information is only available through internal request and, by default, it is not returned"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(t.h4,{id:"response-",children:[(0,a.jsx)(t.a,{href:"/api/types/interfaces/response",children:(0,a.jsx)(t.code,{children:"Response"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/objects/hotel-xquery",children:(0,a.jsx)(t.code,{children:"HotelXQuery"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},21020:(e,t,s)=>{var a=s(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var a,n={},d=null,i=null;for(a in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(i=t.ref),t)c.call(t,a)&&!l.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:r,type:e,key:d,ref:i,props:n,_owner:o.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var a=s(96540);const r={},n=a.createContext(r);function c(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);