/*! For license information please see 78281b24.2f2225e7.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77439],{48249:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>f,Bullet:()=>n,Details:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var r=a(74848),d=a(28453),l=a(96540);const t={id:"user-profile",title:"UserProfile"},i=void 0,o={id:"types/objects/user-profile",title:"UserProfile",description:"No description",source:"@site/api/types/objects/user-profile.mdx",sourceDirName:"types/objects",slug:"/types/objects/user-profile",permalink:"/api/types/objects/user-profile",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"user-profile",title:"UserProfile"},sidebar:"schemaSidebar",previous:{title:"UserProfileEdge",permalink:"/api/types/objects/user-profile-edge"},next:{title:"Validation",permalink:"/api/types/objects/validation"}},c={},n=()=>{const e={span:"span",...(0,d.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,d.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const s={span:"span",...(0,d.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:s,children:a,startOpen:t=!1})=>{const i={details:"details",summary:"summary",...(0,d.R)()},[o,c]=(0,l.useState)(t);return(0,r.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>UserProfile.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofilecodeid--",level:4},{value:'<code>UserProfile.<b>userProfileData</b></code><Bullet></Bullet><code>UserProfileData</code> <Badge class="badge badge--secondary"></Badge>',id:"userprofileuserprofiledatauserprofiledata-",level:4},{value:'<code>UserProfile.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofileadvisemessageadvisemessage--",level:4},{value:'<code>UserProfile.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofileadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>UserProfile.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"userprofilecreatedatdatetime-",level:4},{value:'<code>UserProfile.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"userprofileupdatedatdatetime-",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"No description"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"type UserProfile {\n  code: ID!\n  userProfileData: UserProfileData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime\n  updatedAt: DateTime\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(s.h4,{id:"userprofilecodeid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfile.",(0,r.jsx)("b",{children:"code"})]})}),(0,r.jsx)(n,{}),(0,r.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,r.jsx)(s.code,{children:"ID!"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(s.h4,{id:"userprofileuserprofiledatauserprofiledata-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfile.",(0,r.jsx)("b",{children:"userProfileData"})]})}),(0,r.jsx)(n,{}),(0,r.jsx)(s.a,{href:"/api/types/objects/user-profile-data",children:(0,r.jsx)(s.code,{children:"UserProfileData"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(s.h4,{id:"userprofileadvisemessageadvisemessage--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfile.",(0,r.jsx)("b",{children:"adviseMessage"})]})}),(0,r.jsx)(n,{}),(0,r.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,r.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.h5,{id:"userprofileadvisemessageleveladvisemessagelevel--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfile.adviseMessage.",(0,r.jsx)("b",{children:"level"})]})}),(0,r.jsx)(n,{}),(0,r.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,r.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"userprofilecreatedatdatetime-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfile.",(0,r.jsx)("b",{children:"createdAt"})]})}),(0,r.jsx)(n,{}),(0,r.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,r.jsx)(s.code,{children:"DateTime"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(s.h4,{id:"userprofileupdatedatdatetime-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfile.",(0,r.jsx)("b",{children:"updatedAt"})]})}),(0,r.jsx)(n,{}),(0,r.jsx)(s.a,{href:"/api/types/scalars/date-time",children:(0,r.jsx)(s.code,{children:"DateTime"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"}),"\n",(0,r.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/api/types/objects/social-mutation",children:(0,r.jsx)(s.code,{children:"SocialMutation"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(n,{}),(0,r.jsx)(s.a,{href:"/api/types/objects/social-query",children:(0,r.jsx)(s.code,{children:"SocialQuery"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(n,{}),(0,r.jsx)(s.a,{href:"/api/types/objects/user-profile-edge",children:(0,r.jsx)(s.code,{children:"UserProfileEdge"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},21020:(e,s,a)=>{var r=a(96540),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,a){var r,l={},c=null,n=null;for(r in void 0!==a&&(c=""+a),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(n=s.ref),s)t.call(s,r)&&!o.hasOwnProperty(r)&&(l[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===l[r]&&(l[r]=s[r]);return{$$typeof:d,type:e,key:c,ref:n,props:l,_owner:i.current}}s.Fragment=l,s.jsx=c,s.jsxs=c},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>i});var r=a(96540);const d={},l=r.createContext(d);function t(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);