/*! For license information please see d58286ac.ffa7eba8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8230],{13862:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=t(74848),a=t(28453),r=t(96540);const o={id:"organizations-edge",title:"OrganizationsEdge"},i=void 0,d={id:"types/objects/organizations-edge",title:"OrganizationsEdge",description:"No description",source:"@site/api/types/objects/organizations-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/organizations-edge",permalink:"/api/types/objects/organizations-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"organizations-edge",title:"OrganizationsEdge"},sidebar:"schemaSidebar",previous:{title:"OrganizationsData",permalink:"/api/types/objects/organizations-data"},next:{title:"Organizations",permalink:"/api/types/objects/organizations"}},c={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[d,c]=(0,r.useState)(o);return(0,s.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>OrganizationsEdge.<b>node</b></code><Bullet></Bullet><code>Organizations</code> <Badge class="badge badge--secondary"></Badge>',id:"organizationsedgenodeorganizations-",level:4},{value:'<code>OrganizationsEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationsedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type OrganizationsEdge {\n  node: Organizations\n  cursor: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"organizationsedgenodeorganizations-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsEdge.",(0,s.jsx)("b",{children:"node"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/organizations",children:(0,s.jsx)(n.code,{children:"Organizations"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"organizationsedgecursorstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsEdge.",(0,s.jsx)("b",{children:"cursor"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/types/objects/organizations-connection",children:(0,s.jsx)(n.code,{children:"OrganizationsConnection"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var s=t(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,s)&&!d.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:a,type:e,key:c,ref:l,props:r,_owner:i.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);