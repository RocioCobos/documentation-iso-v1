/*! For license information please see 6b06c369.02930a6d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89792],{54584:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>f,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>p});var o=n(74848),a=n(28453),r=n(96540);const t={id:"user-profile-connection",title:"UserProfileConnection"},l=void 0,d={id:"types/objects/user-profile-connection",title:"UserProfileConnection",description:"No description",source:"@site/api/types/objects/user-profile-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/user-profile-connection",permalink:"/api/types/objects/user-profile-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"user-profile-connection",title:"UserProfileConnection"},sidebar:"schemaSidebar",previous:{title:"UserOnboardingData",permalink:"/api/types/objects/user-onboarding-data"},next:{title:"UserProfileData",permalink:"/api/types/objects/user-profile-data"}},c={},i=()=>{const e={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,a.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const s={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:s,children:n,startOpen:t=!1})=>{const l={details:"details",summary:"summary",...(0,a.R)()},[d,c]=(0,r.useState)(t);return(0,o.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>UserProfileConnection.<b>edges</b></code><Bullet></Bullet><code>[UserProfileEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofileconnectionedgesuserprofileedge--",level:4},{value:'<code>UserProfileConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofileconnectionpageinfopageinfo--",level:4},{value:'<code>UserProfileConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofileconnectionadvisemessageadvisemessage--",level:4},{value:'<code>UserProfileConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofileconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>UserProfileConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofileconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"No description"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-graphql",children:"type UserProfileConnection {\n  edges: [UserProfileEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage]\n  totalCount: Int!\n}\n"})}),"\n",(0,o.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(s.h4,{id:"userprofileconnectionedgesuserprofileedge--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/user-profile-edge",children:(0,o.jsx)(s.code,{children:"[UserProfileEdge]"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(s.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(s.h4,{id:"userprofileconnectionpageinfopageinfo--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/page-info",children:(0,o.jsx)(s.code,{children:"PageInfo!"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(s.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(s.h4,{id:"userprofileconnectionadvisemessageadvisemessage--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileConnection.",(0,o.jsx)("b",{children:"adviseMessage"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,o.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.h5,{id:"userprofileconnectionadvisemessageleveladvisemessagelevel--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileConnection.adviseMessage.",(0,o.jsx)("b",{children:"level"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,o.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"userprofileconnectiontotalcountint--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileConnection.",(0,o.jsx)("b",{children:"totalCount"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,o.jsx)(s.code,{children:"Int!"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(s.blockquote,{children:"\n"}),"\n",(0,o.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/api/types/objects/social-query",children:(0,o.jsx)(s.code,{children:"SocialQuery"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},21020:(e,s,n)=>{var o=n(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var o,r={},c=null,i=null;for(o in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(i=s.ref),s)t.call(s,o)&&!d.hasOwnProperty(o)&&(r[o]=s[o]);if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===r[o]&&(r[o]=s[o]);return{$$typeof:a,type:e,key:c,ref:i,props:r,_owner:l.current}}s.Fragment=r,s.jsx=c,s.jsxs=c},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var o=n(96540);const a={},r=o.createContext(a);function t(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);