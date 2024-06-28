/*! For license information please see 96690ac7.4b9ad087.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10030],{47428:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>g,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>c,metadata:()=>n,toc:()=>x});var d=s(74848),t=s(28453),o=s(96540);const c={id:"room-static",title:"RoomStatic",hide_table_of_contents:!1},r=void 0,n={id:"objects/room-static",title:"RoomStatic",description:"Room Type",source:"@site/api/objects/room-static.mdx",sourceDirName:"objects",slug:"/objects/room-static",permalink:"/api/objects/room-static",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"room-static",title:"RoomStatic",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RoomPrice",permalink:"/api/objects/room-price"},next:{title:"Room",permalink:"/api/objects/room"}},l={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const a={a:"a",...(0,t.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,t.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:s,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[n,l]=(0,o.useState)(c);return(0,d.jsxs)(r.details,{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:n?e:a}),n&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>RoomStatic.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomstaticcodeid--",level:4},{value:'<code>RoomStatic.<b>roomData</b></code><Bullet></Bullet><code>RoomData</code> <Badge class="badge badge--secondary"></Badge>',id:"roomstaticroomdataroomdata-",level:4},{value:'<code>RoomStatic.<b>error</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomstaticerrorerror---",level:4},{value:'<code>RoomStatic.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomstaticadvisemessageadvisemessage--",level:4},{value:'<code>RoomStatic.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomstaticadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>RoomStatic.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomstaticcreatedatdatetime--",level:4},{value:'<code>RoomStatic.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomstaticupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Room Type"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type RoomStatic implements Node {\n  code: ID!\n  roomData: RoomData\n  error: [Error!] @deprecated\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"roomstaticcodeid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomStatic.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Room ID"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"roomstaticroomdataroomdata-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomStatic.",(0,d.jsx)("b",{children:"roomData"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/room-data",children:(0,d.jsx)(a.code,{children:"RoomData"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Room data"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"roomstaticerrorerror---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomStatic.",(0,d.jsx)("b",{children:"error"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/error",children:(0,d.jsx)(a.code,{children:"[Error!]"})})," ",(0,d.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.admonition,{title:"DEPRECATED",type:"caution",children:(0,d.jsx)(a.p,{children:"Deprecated from 2019-07-03"})}),"\n",(0,d.jsx)(a.p,{children:"Errors that abort services."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"roomstaticadvisemessageadvisemessage--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomStatic.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,d.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"List of messages"}),"\n",(0,d.jsxs)(a.h5,{id:"roomstaticadvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomStatic.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,d.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"roomstaticcreatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomStatic.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date created"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"roomstaticupdatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomStatic.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date updated"}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"node-",children:[(0,d.jsx)(a.a,{href:"/api/interfaces/node",children:(0,d.jsx)(a.code,{children:"Node"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/objects/room-edge",children:(0,d.jsx)(a.code,{children:"RoomEdge"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},21020:(e,a,s)=>{var d=s(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,s){var d,o={},l=null,i=null;for(d in void 0!==s&&(l=""+s),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)c.call(a,d)&&!n.hasOwnProperty(d)&&(o[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===o[d]&&(o[d]=a[d]);return{$$typeof:t,type:e,key:l,ref:i,props:o,_owner:r.current}}a.Fragment=o,a.jsx=l,a.jsxs=l},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>r});var d=s(96540);const t={},o=d.createContext(t);function c(e){const a=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),d.createElement(o.Provider,{value:a},e.children)}}}]);