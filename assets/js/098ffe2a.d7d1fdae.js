/*! For license information please see 098ffe2a.d7d1fdae.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48860],{62712:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>f,Bullet:()=>n,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>j,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var d=a(74848),l=a(28453),t=a(96540);const r={id:"profile-v2",title:"ProfileV2"},o=void 0,i={id:"types/objects/profile-v2",title:"ProfileV2",description:"No description",source:"@site/api/types/objects/profile-v2.mdx",sourceDirName:"types/objects",slug:"/types/objects/profile-v2",permalink:"/api/types/objects/profile-v2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"profile-v2",title:"ProfileV2"},sidebar:"schemaSidebar",previous:{title:"ProfileEdge",permalink:"/api/types/objects/profile-edge"},next:{title:"Promotion",permalink:"/api/types/objects/promotion"}},c={},n=()=>{const e={span:"span",...(0,l.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,l.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const s={span:"span",...(0,l.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:a,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,l.R)()},[i,c]=(0,t.useState)(r);return(0,d.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>ProfileV2.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profilev2codeid--",level:4},{value:'<code>ProfileV2.<b>profileData</b></code><Bullet></Bullet><code>ProfileData</code> <Badge class="badge badge--secondary"></Badge>',id:"profilev2profiledataprofiledata-",level:4},{value:'<code>ProfileV2.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profilev2advisemessageadvisemessage--",level:4},{value:'<code>ProfileV2.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profilev2advisemessageleveladvisemessagelevel--",level:5},{value:'<code>ProfileV2.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"profilev2createdatdatetime-",level:4},{value:'<code>ProfileV2.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"profilev2updatedatdatetime-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"No description"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type ProfileV2 {\n  code: ID!\n  profileData: ProfileData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime\n  updatedAt: DateTime\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"profilev2codeid--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileV2.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(n,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,d.jsx)(s.code,{children:"ID!"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"profilev2profiledataprofiledata-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileV2.",(0,d.jsx)("b",{children:"profileData"})]})}),(0,d.jsx)(n,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/profile-data",children:(0,d.jsx)(s.code,{children:"ProfileData"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"profilev2advisemessageadvisemessage--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileV2.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(n,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,d.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.h5,{id:"profilev2advisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileV2.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(n,{}),(0,d.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,d.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"profilev2createdatdatetime-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileV2.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(n,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"profilev2updatedatdatetime-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileV2.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(n,{}),(0,d.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/api/types/objects/profile-edge",children:(0,d.jsx)(s.code,{children:"ProfileEdge"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(n,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/social-mutation",children:(0,d.jsx)(s.code,{children:"SocialMutation"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(n,{}),(0,d.jsx)(s.a,{href:"/api/types/objects/social-query",children:(0,d.jsx)(s.code,{children:"SocialQuery"})})," ",(0,d.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},21020:(e,s,a)=>{var d=a(96540),l=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,a){var d,t={},c=null,n=null;for(d in void 0!==a&&(c=""+a),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(n=s.ref),s)r.call(s,d)&&!i.hasOwnProperty(d)&&(t[d]=s[d]);if(e&&e.defaultProps)for(d in s=e.defaultProps)void 0===t[d]&&(t[d]=s[d]);return{$$typeof:l,type:e,key:c,ref:n,props:t,_owner:o.current}}s.Fragment=t,s.jsx=c,s.jsxs=c},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>o});var d=a(96540);const l={},t=d.createContext(l);function r(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);