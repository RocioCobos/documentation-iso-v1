/*! For license information please see 6f9649e3.042e9f0d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24107],{15776:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=r(74848),o=r(28453),l=r(96540);const s={id:"alert-mode",title:"AlertMode"},a=void 0,i={id:"types/enums/alert-mode",title:"AlertMode",description:"No description",source:"@site/api/types/enums/alert-mode.mdx",sourceDirName:"types/enums",slug:"/types/enums/alert-mode",permalink:"/api/types/enums/alert-mode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-mode",title:"AlertMode"},sidebar:"schemaSidebar",previous:{title:"AlertGroups",permalink:"/api/types/enums/alert-groups"},next:{title:"AlertRangePrice",permalink:"/api/types/enums/alert-range-price"}},d={},c=()=>{const e={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,o.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,o.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:r,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,o.R)()},[i,d]=(0,l.useState)(s);return(0,n.jsxs)(a.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&r]})},h=[{value:"Values",id:"values",level:3},{value:"<code>AlertMode.<b>RELATIVE</b></code>",id:"alertmoderelative",level:4},{value:"<code>AlertMode.<b>ABSOLUTE</b></code>",id:"alertmodeabsolute",level:4},{value:"<code>AlertMode.<b>COMPARATIVE</b></code>",id:"alertmodecomparative",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"enum AlertMode {\n  RELATIVE\n  ABSOLUTE\n  COMPARATIVE\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,n.jsx)(t.h4,{id:"alertmoderelative",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertMode.",(0,n.jsx)("b",{children:"RELATIVE"})]})})}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h4,{id:"alertmodeabsolute",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertMode.",(0,n.jsx)("b",{children:"ABSOLUTE"})]})})}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h4,{id:"alertmodecomparative",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertMode.",(0,n.jsx)("b",{children:"COMPARATIVE"})]})})}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/types/objects/alert-configuration",children:(0,n.jsx)(t.code,{children:"AlertConfiguration"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,t,r)=>{var n=r(96540),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,l={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:c,props:l,_owner:a.current}}t.Fragment=l,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const o={},l=n.createContext(o);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);