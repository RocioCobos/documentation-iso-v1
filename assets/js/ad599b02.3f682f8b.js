/*! For license information please see ad599b02.3f682f8b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27641],{91790:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>m,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>b,assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>x});var d=s(74848),t=s(28453),r=s(96540);const n={id:"member",title:"Member"},c=void 0,l={id:"types/objects/member",title:"Member",description:"You grant access to members which can be either:",source:"@site/api/types/objects/member.mdx",sourceDirName:"types/objects",slug:"/types/objects/member",permalink:"/api/types/objects/member",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"member",title:"Member"},sidebar:"schemaSidebar",previous:{title:"MemberOrganizations",permalink:"/api/types/objects/member-organizations"},next:{title:"MembersConnection",permalink:"/api/types/objects/members-connection"}},o={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,t.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const a={span:"span",...(0,t.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:s,startOpen:n=!1})=>{const c={details:"details",summary:"summary",...(0,t.R)()},[l,o]=(0,r.useState)(n);return(0,d.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Member.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membercodeid--",level:4},{value:'<code>Member.<b>memberData</b></code><Bullet></Bullet><code>MemberData</code> <Badge class="badge badge--secondary"></Badge>',id:"membermemberdatamemberdata-",level:4},{value:'<code>Member.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberadvisemessageadvisemessage--",level:4},{value:'<code>Member.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Member.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membercreatedatdatetime--",level:4},{value:'<code>Member.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberupdatedatdatetime--",level:4},{value:'<code>Member.<b>deletedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberdeletedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"You grant access to members which can be either:\nUsers: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.\nService Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application."}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type Member implements Node {\n  code: ID!\n  memberData: MemberData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  deletedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"membercodeid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Member.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"membermemberdatamemberdata-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Member.",(0,d.jsx)("b",{children:"memberData"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/member-data",children:(0,d.jsx)(a.code,{children:"MemberData"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"memberadvisemessageadvisemessage--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Member.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/advise-message",children:(0,d.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"List of advise messages."}),"\n",(0,d.jsxs)(a.h5,{id:"memberadvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Member.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/enums/advise-message-level",children:(0,d.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"membercreatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Member.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date created"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"memberupdatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Member.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date updated"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"memberdeletedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Member.",(0,d.jsx)("b",{children:"deletedAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date deleted. This value is used to include archived members."}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"node-",children:[(0,d.jsx)(a.a,{href:"/api/types/interfaces/node",children:(0,d.jsx)(a.code,{children:"Node"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/types/objects/admin-mutation",children:(0,d.jsx)(a.code,{children:"AdminMutation"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/admin-query",children:(0,d.jsx)(a.code,{children:"AdminQuery"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/alert-data",children:(0,d.jsx)(a.code,{children:"AlertData"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/customer-agent",children:(0,d.jsx)(a.code,{children:"CustomerAgent"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/interfaces/group-common-data",children:(0,d.jsx)(a.code,{children:"GroupCommonData"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"interface"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/group-data",children:(0,d.jsx)(a.code,{children:"GroupData"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/member-edge",children:(0,d.jsx)(a.code,{children:"MemberEdge"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/organization-contact",children:(0,d.jsx)(a.code,{children:"OrganizationContact"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/organization-data",children:(0,d.jsx)(a.code,{children:"OrganizationData"})})," ",(0,d.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},21020:(e,a,s)=>{var d=s(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,c=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,a,s){var d,r={},o=null,i=null;for(d in void 0!==s&&(o=""+s),void 0!==a.key&&(o=""+a.key),void 0!==a.ref&&(i=a.ref),a)n.call(a,d)&&!l.hasOwnProperty(d)&&(r[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===r[d]&&(r[d]=a[d]);return{$$typeof:t,type:e,key:o,ref:i,props:r,_owner:c.current}}a.Fragment=r,a.jsx=o,a.jsxs=o},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>n,x:()=>c});var d=s(96540);const t={},r=d.createContext(t);function n(e){const a=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),d.createElement(r.Provider,{value:a},e.children)}}}]);