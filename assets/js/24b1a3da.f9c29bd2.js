/*! For license information please see 24b1a3da.f9c29bd2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63467],{55502:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>j});var t=s(74848),a=s(28453),c=s(96540);const o={id:"client-connection",title:"ClientConnection",hide_table_of_contents:!1},d=void 0,i={id:"objects/client-connection",title:"ClientConnection",description:"Connection (list) of Clients",source:"@site/api/objects/client-connection.mdx",sourceDirName:"objects",slug:"/objects/client-connection",permalink:"/api/objects/client-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"client-connection",title:"ClientConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CheckInformation",permalink:"/api/objects/check-information"},next:{title:"ClientData",permalink:"/api/objects/client-data"}},l={},r=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:s,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[i,l]=(0,c.useState)(o);return(0,t.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>ClientConnection.<b>edges</b></code><Bullet></Bullet><code>[ClientEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientconnectionedgesclientedge--",level:4},{value:'<code>ClientConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientconnectionpageinfopageinfo--",level:4},{value:'<code>ClientConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientconnectionadvisemessageadvisemessage--",level:4},{value:'<code>ClientConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>ClientConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientconnectiontotalcountint--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Connection (list) of Clients"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type ClientConnection {\n  edges: [ClientEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"clientconnectionedgesclientedge--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/api/objects/client-edge",children:(0,t.jsx)(n.code,{children:"[ClientEdge]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Client edges of client connection"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"clientconnectionpageinfopageinfo--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/api/objects/page-info",children:(0,t.jsx)(n.code,{children:"PageInfo!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Page info of the connection"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"clientconnectionadvisemessageadvisemessage--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientConnection.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/api/objects/advise-message",children:(0,t.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"List of advise messages."}),"\n",(0,t.jsxs)(n.h5,{id:"clientconnectionadvisemessageleveladvisemessagelevel--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientConnection.adviseMessage.",(0,t.jsx)("b",{children:"level"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/api/enums/advise-message-level",children:(0,t.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"clientconnectiontotalcountint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientConnection.",(0,t.jsx)("b",{children:"totalCount"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/api/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Identifies the total count of items in the connection."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/objects/admin-query",children:(0,t.jsx)(n.code,{children:"AdminQuery"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/api/interfaces/group-common-data",children:(0,t.jsx)(n.code,{children:"GroupCommonData"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"interface"}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/api/objects/group-data",children:(0,t.jsx)(n.code,{children:"GroupData"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/api/objects/organization-data",children:(0,t.jsx)(n.code,{children:"OrganizationData"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(r,{}),(0,t.jsx)(n.a,{href:"/api/objects/supplier-data",children:(0,t.jsx)(n.code,{children:"SupplierData"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,n,s)=>{var t=s(96540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var t,c={},l=null,r=null;for(t in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(r=n.ref),n)o.call(n,t)&&!i.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:a,type:e,key:l,ref:r,props:c,_owner:d.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(96540);const a={},c=t.createContext(a);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);