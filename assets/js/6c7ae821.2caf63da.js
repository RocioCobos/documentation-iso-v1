/*! For license information please see 6c7ae821.2caf63da.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90394],{97373:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=a(74848),t=a(28453),o=a(96540);const s={id:"managed-group-edge",title:"ManagedGroupEdge"},d=void 0,c={id:"types/objects/managed-group-edge",title:"ManagedGroupEdge",description:"No description",source:"@site/api/types/objects/managed-group-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/managed-group-edge",permalink:"/api/types/objects/managed-group-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"managed-group-edge",title:"ManagedGroupEdge"},sidebar:"schemaSidebar",previous:{title:"ManagedGroupData",permalink:"/api/types/objects/managed-group-data"},next:{title:"ManagedGroup",permalink:"/api/types/objects/managed-group"}},l={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,t.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,t.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:a,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,t.R)()},[c,l]=(0,o.useState)(s);return(0,r.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&a]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>ManagedGroupEdge.<b>node</b></code><Bullet></Bullet><code>ManagedGroup</code> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupedgenodemanagedgroup-",level:4},{value:'<code>ManagedGroupEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type ManagedGroupEdge {\n  node: ManagedGroup\n  cursor: String!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"managedgroupedgenodemanagedgroup-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroupEdge.",(0,r.jsx)("b",{children:"node"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/types/objects/managed-group",children:(0,r.jsx)(n.code,{children:"ManagedGroup"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(n.h4,{id:"managedgroupedgecursorstring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroupEdge.",(0,r.jsx)("b",{children:"cursor"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/types/objects/managed-group-connection",children:(0,r.jsx)(n.code,{children:"ManagedGroupConnection"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,n,a)=>{var r=a(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,a){var r,o={},l=null,i=null;for(r in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(i=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:t,type:e,key:l,ref:i,props:o,_owner:d.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>d});var r=a(96540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);