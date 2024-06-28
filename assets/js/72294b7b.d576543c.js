/*! For license information please see 72294b7b.d576543c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60490],{23334:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>y,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>b});var r=a(74848),s=a(28453),d=a(96540);const o={id:"ferry-calendar-connection",title:"FerryCalendarConnection"},t=void 0,c={id:"types/objects/ferry-calendar-connection",title:"FerryCalendarConnection",description:"A connection to a list of items.",source:"@site/api/types/objects/ferry-calendar-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/ferry-calendar-connection",permalink:"/api/types/objects/ferry-calendar-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ferry-calendar-connection",title:"FerryCalendarConnection"},sidebar:"schemaSidebar",previous:{title:"FerryAccommodation",permalink:"/api/types/objects/ferry-accommodation"},next:{title:"FerryCalendarEdge",permalink:"/api/types/objects/ferry-calendar-edge"}},l={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:n,children:a,startOpen:o=!1})=>{const t={details:"details",summary:"summary",...(0,s.R)()},[c,l]=(0,d.useState)(o);return(0,r.jsxs)(t.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(t.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>FerryCalendarConnection.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferrycalendarconnectionadvisemessagesadvisemessage--",level:4},{value:'<code>FerryCalendarConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferrycalendarconnectionpageinfopageinfo--",level:4},{value:'<code>FerryCalendarConnection.<b>edges</b></code><Bullet></Bullet><code>[FerryCalendarEdge!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferrycalendarconnectionedgesferrycalendaredge--",level:4},{value:'<code>FerryCalendarConnection.<b>nodes</b></code><Bullet></Bullet><code>[FerryCalendarPayload]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferrycalendarconnectionnodesferrycalendarpayload--",level:4},{value:'<code>FerryCalendarConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferrycalendarconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A connection to a list of items."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type FerryCalendarConnection {\n  adviseMessages: [AdviseMessage]\n  pageInfo: PageInfo!\n  edges: [FerryCalendarEdge!]\n  nodes: [FerryCalendarPayload]\n  totalCount: Int!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"ferrycalendarconnectionadvisemessagesadvisemessage--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryCalendarConnection.",(0,r.jsx)("b",{children:"adviseMessages"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/types/objects/advise-message",children:(0,r.jsx)(n.code,{children:"[AdviseMessage]"})})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(n.h4,{id:"ferrycalendarconnectionpageinfopageinfo--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryCalendarConnection.",(0,r.jsx)("b",{children:"pageInfo"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,r.jsx)(n.code,{children:"PageInfo!"})})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Information to aid in pagination."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"ferrycalendarconnectionedgesferrycalendaredge--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryCalendarConnection.",(0,r.jsx)("b",{children:"edges"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/types/objects/ferry-calendar-edge",children:(0,r.jsx)(n.code,{children:"[FerryCalendarEdge!]"})})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"A list of edges."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"ferrycalendarconnectionnodesferrycalendarpayload--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryCalendarConnection.",(0,r.jsx)("b",{children:"nodes"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/types/objects/ferry-calendar-payload",children:(0,r.jsx)(n.code,{children:"[FerryCalendarPayload]"})})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"A flattened list of the nodes."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"ferrycalendarconnectiontotalcountint--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryCalendarConnection.",(0,r.jsx)("b",{children:"totalCount"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(n.code,{children:"Int!"})})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Identifies the total count of items in the connection."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/types/objects/transport-query",children:(0,r.jsx)(n.code,{children:"TransportQuery"})})," ",(0,r.jsx)(y,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,n,a)=>{var r=a(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,a){var r,d={},l=null,i=null;for(r in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(i=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:i,props:d,_owner:t.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>t});var r=a(96540);const s={},d=r.createContext(s);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);