/*! For license information please see 091be704.26687d7f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4815],{37405:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>f});var s=n(74848),l=n(28453),a=n(96540);const r={id:"full-stay-input",title:"FullStayInput"},i=void 0,o={id:"types/inputs/full-stay-input",title:"FullStayInput",description:"Represents the full stay for a product.",source:"@site/api/types/inputs/full-stay-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/full-stay-input",permalink:"/api/types/inputs/full-stay-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"full-stay-input",title:"FullStayInput"},sidebar:"schemaSidebar",previous:{title:"FloatFilter",permalink:"/api/types/inputs/float-filter"},next:{title:"GeoFiltersInput",permalink:"/api/types/inputs/geo-filters-input"}},c={},u=()=>{const e={span:"span",...(0,l.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,l.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,l.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,l.R)()},[o,c]=(0,a.useState)(r);return(0,s.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>FullStayInput.<b>minimum</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"fullstayinputminimumint-",level:4},{value:'<code>FullStayInput.<b>maximum</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"fullstayinputmaximumint-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Represents the full stay for a product."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input FullStayInput {\n  minimum: Int\n  maximum: Int\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"fullstayinputminimumint-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FullStayInput.",(0,s.jsx)("b",{children:"minimum"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Minimum length of the full stay."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"fullstayinputmaximumint-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FullStayInput.",(0,s.jsx)("b",{children:"maximum"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Maximum length of the full stay."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/inputs/length-of-stay-input",children:(0,s.jsx)(t.code,{children:"LengthOfStayInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function y(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var s=n(96540),l=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,a={},c=null,u=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,s)&&!o.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:l,type:e,key:c,ref:u,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(96540);const l={},a=s.createContext(l);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);