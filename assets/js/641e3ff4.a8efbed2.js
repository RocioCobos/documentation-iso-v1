/*! For license information please see 641e3ff4.a8efbed2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86493],{73780:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var r=n(74848),s=n(28453),d=n(96540);const a={id:"audit-rule-edge",title:"AuditRuleEdge"},l=void 0,i={id:"types/objects/audit-rule-edge",title:"AuditRuleEdge",description:"No description",source:"@site/api/types/objects/audit-rule-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/audit-rule-edge",permalink:"/api/types/objects/audit-rule-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"audit-rule-edge",title:"AuditRuleEdge"},sidebar:"schemaSidebar",previous:{title:"AuditRuleData",permalink:"/api/types/objects/audit-rule-data"},next:{title:"AuditRule",permalink:"/api/types/objects/audit-rule"}},o={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[i,o]=(0,d.useState)(a);return(0,r.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AuditRuleEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditruleedgecursorstring--",level:4},{value:'<code>AuditRuleEdge.<b>node</b></code><Bullet></Bullet><code>AuditRule</code> <Badge class="badge badge--secondary"></Badge>',id:"auditruleedgenodeauditrule-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"type AuditRuleEdge {\n  cursor: String!\n  node: AuditRule\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"auditruleedgecursorstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleEdge.",(0,r.jsx)("b",{children:"cursor"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(t.h4,{id:"auditruleedgenodeauditrule-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleEdge.",(0,r.jsx)("b",{children:"node"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/types/objects/audit-rule",children:(0,r.jsx)(t.code,{children:"AuditRule"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/objects/audit-rule-connection",children:(0,r.jsx)(t.code,{children:"AuditRuleConnection"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,d={},o=null,c=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(d[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===d[r]&&(d[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:c,props:d,_owner:l.current}}t.Fragment=d,t.jsx=o,t.jsxs=o},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},d=r.createContext(s);function a(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);