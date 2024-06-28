/*! For license information please see ac8eddea.81ebcd8f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12704],{33234:(e,r,s)=>{s.r(r),s.d(r,{Badge:()=>g,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var n=s(74848),o=s(28453),t=s(96540);const c={id:"resource-edge",title:"ResourceEdge",hide_table_of_contents:!1},d=void 0,a={id:"objects/resource-edge",title:"ResourceEdge",description:"No description",source:"@site/api/objects/resource-edge.mdx",sourceDirName:"objects",slug:"/objects/resource-edge",permalink:"/api/objects/resource-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"resource-edge",title:"ResourceEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ResourceData",permalink:"/api/objects/resource-data"},next:{title:"Resource",permalink:"/api/objects/resource"}},l={},i=()=>{const e={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,o.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const r={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:r,children:s,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[a,l]=(0,t.useState)(c);return(0,n.jsxs)(d.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:r}),a&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ResourceEdge.<b>node</b></code><Bullet></Bullet><code>Resource</code> <Badge class="badge badge--secondary"></Badge>',id:"resourceedgenoderesource-",level:4},{value:'<code>ResourceEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"resourceedgecursorstring--",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"No description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type ResourceEdge {\n  node: Resource\n  cursor: String!\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"resourceedgenoderesource-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ResourceEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/objects/resource",children:(0,n.jsx)(r.code,{children:"Resource"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"resourceedgecursorstring--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ResourceEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsx)(r.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/objects/resource-connection",children:(0,n.jsx)(r.code,{children:"ResourceConnection"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,r,s)=>{var n=s(96540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var n,t={},l=null,i=null;for(n in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:i,props:t,_owner:d.current}}r.Fragment=t,r.jsx=l,r.jsxs=l},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>d});var n=s(96540);const o={},t=n.createContext(o);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);