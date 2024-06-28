/*! For license information please see 32d33144.40222d19.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31715],{73779:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=n(74848),t=n(28453),a=n(96540);const i={id:"grant-permissions-input",title:"GrantPermissionsInput"},d=void 0,o={id:"types/inputs/grant-permissions-input",title:"GrantPermissionsInput",description:"No description",source:"@site/api/types/inputs/grant-permissions-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/grant-permissions-input",permalink:"/api/types/inputs/grant-permissions-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"grant-permissions-input",title:"GrantPermissionsInput"},sidebar:"schemaSidebar",previous:{title:"GiataOrganizationInput",permalink:"/api/types/inputs/giata-organization-input"},next:{title:"GroupContentCreateInput",permalink:"/api/types/inputs/group-content-create-input"}},l={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,t.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:n,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,t.R)()},[o,l]=(0,a.useState)(i);return(0,r.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>GrantPermissionsInput.<b>member</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"grantpermissionsinputmemberid--",level:4},{value:'<code>GrantPermissionsInput.<b>group</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"grantpermissionsinputgroupid--",level:4},{value:'<code>GrantPermissionsInput.<b>api</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"grantpermissionsinputapiid-",level:4},{value:'<code>GrantPermissionsInput.<b>role</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"grantpermissionsinputroleid--",level:4},{value:'<code>GrantPermissionsInput.<b>resources</b></code><Bullet></Bullet><code>[ID!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"grantpermissionsinputresourcesid--",level:4}];function m(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"No description"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"input GrantPermissionsInput {\n  member: ID!\n  group: ID!\n  api: ID\n  role: ID!\n  resources: [ID!]!\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(s.h4,{id:"grantpermissionsinputmemberid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GrantPermissionsInput.",(0,r.jsx)("b",{children:"member"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,r.jsx)(s.code,{children:"ID!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(s.h4,{id:"grantpermissionsinputgroupid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GrantPermissionsInput.",(0,r.jsx)("b",{children:"group"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,r.jsx)(s.code,{children:"ID!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(s.h4,{id:"grantpermissionsinputapiid-",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GrantPermissionsInput.",(0,r.jsx)("b",{children:"api"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,r.jsx)(s.code,{children:"ID"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(s.h4,{id:"grantpermissionsinputroleid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GrantPermissionsInput.",(0,r.jsx)("b",{children:"role"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,r.jsx)(s.code,{children:"ID!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(s.h4,{id:"grantpermissionsinputresourcesid--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GrantPermissionsInput.",(0,r.jsx)("b",{children:"resources"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,r.jsx)(s.code,{children:"[ID!]!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(s.blockquote,{children:"\n"})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},21020:(e,s,n)=>{var r=n(96540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var r,a={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,r)&&!o.hasOwnProperty(r)&&(a[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:t,type:e,key:l,ref:c,props:a,_owner:d.current}}s.Fragment=a,s.jsx=l,s.jsxs=l},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var r=n(96540);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);