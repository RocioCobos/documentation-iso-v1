/*! For license information please see fe74a06f.414576e4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89542],{84189:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=t(74848),a=t(28453),i=t(96540);const s={id:"arrival-input",title:"ArrivalInput"},l=void 0,o={id:"types/inputs/arrival-input",title:"ArrivalInput",description:"Represents the arrival restrictions for a product.",source:"@site/api/types/inputs/arrival-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/arrival-input",permalink:"/api/types/inputs/arrival-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"arrival-input",title:"ArrivalInput"},sidebar:"schemaSidebar",previous:{title:"ApplicableWeekdaysInput",permalink:"/api/types/inputs/applicable-weekdays-input"},next:{title:"AssetCreateManyAsSubEntityInput",permalink:"/api/types/inputs/asset-create-many-as-sub-entity-input"}},c={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,a.R)()},[o,c]=(0,i.useState)(s);return(0,r.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ArrivalInput.<b>minimum</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"arrivalinputminimumint-",level:4},{value:'<code>ArrivalInput.<b>maximum</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"arrivalinputmaximumint-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Represents the arrival restrictions for a product."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input ArrivalInput {\n  minimum: Int\n  maximum: Int\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"arrivalinputminimumint-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ArrivalInput.",(0,r.jsx)("b",{children:"minimum"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(n.code,{children:"Int"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Minimum length of the arrival period."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"arrivalinputmaximumint-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ArrivalInput.",(0,r.jsx)("b",{children:"maximum"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(n.code,{children:"Int"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Maximum length of the arrival period."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/types/inputs/length-of-stay-input",children:(0,r.jsx)(n.code,{children:"LengthOfStayInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var r=t(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!o.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:d,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);