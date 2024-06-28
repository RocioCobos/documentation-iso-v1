/*! For license information please see 96930f3f.66fce74d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26735],{39749:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>b});var r=t(74848),a=t(28453),o=t(96540);const s={id:"requester-info",title:"RequesterInfo",hide_table_of_contents:!1},i=void 0,c={id:"objects/requester-info",title:"RequesterInfo",description:"No description",source:"@site/api/objects/requester-info.mdx",sourceDirName:"objects",slug:"/objects/requester-info",permalink:"/api/objects/requester-info",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"requester-info",title:"RequesterInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Remark",permalink:"/api/objects/remark"},next:{title:"RequiredRoomWithSamePaxConfiguration",permalink:"/api/objects/required-room-with-same-pax-configuration"}},d={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[c,d]=(0,o.useState)(s);return(0,r.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>RequesterInfo.<b>organization</b></code><Bullet></Bullet><code>OrganizationData!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"requesterinfoorganizationorganizationdata--",level:4},{value:'<code>RequesterInfo.<b>member</b></code><Bullet></Bullet><code>MemberData!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"requesterinfomembermemberdata--",level:4},{value:"Member of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type RequesterInfo {\n  organization: OrganizationData!\n  member: MemberData!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"requesterinfoorganizationorganizationdata--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RequesterInfo.",(0,r.jsx)("b",{children:"organization"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/objects/organization-data",children:(0,r.jsx)(n.code,{children:"OrganizationData!"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(n.h4,{id:"requesterinfomembermemberdata--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RequesterInfo.",(0,r.jsx)("b",{children:"member"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/objects/member-data",children:(0,r.jsx)(n.code,{children:"MemberData!"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/objects/activation-data",children:(0,r.jsx)(n.code,{children:"ActivationData"})})," ",(0,r.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var r=t(96540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:d,ref:l,props:o,_owner:i.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);