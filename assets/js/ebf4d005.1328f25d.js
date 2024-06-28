/*! For license information please see ebf4d005.1328f25d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98325],{74545:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>d,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var r=t(74848),i=t(28453),o=t(96540);const a={id:"organization-type-input",title:"OrganizationTypeInput"},s=void 0,l={id:"types/enums/organization-type-input",title:"OrganizationTypeInput",description:"Type of organizations to filter",source:"@site/api/types/enums/organization-type-input.mdx",sourceDirName:"types/enums",slug:"/types/enums/organization-type-input",permalink:"/api/types/enums/organization-type-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"organization-type-input",title:"OrganizationTypeInput"},sidebar:"schemaSidebar",previous:{title:"OrganizationTemplate",permalink:"/api/types/enums/organization-template"},next:{title:"OrganizationsOrderByEnum",permalink:"/api/types/enums/organizations-order-by-enum"}},p={},c=()=>{const e={span:"span",...(0,i.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,i.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},d=e=>{const n={span:"span",...(0,i.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const s={details:"details",summary:"summary",...(0,i.R)()},[l,p]=(0,o.useState)(a);return(0,r.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(s.summary,{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},h=[{value:"Values",id:"values",level:3},{value:"<code>OrganizationTypeInput.<b>BUYER</b></code>",id:"organizationtypeinputbuyer",level:4},{value:"<code>OrganizationTypeInput.<b>SELLER</b></code>",id:"organizationtypeinputseller",level:4},{value:"<code>OrganizationTypeInput.<b>BOTH</b></code>",id:"organizationtypeinputboth",level:4}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Type of organizations to filter"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"enum OrganizationTypeInput {\n  BUYER\n  SELLER\n  BOTH\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(n.h4,{id:"organizationtypeinputbuyer",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationTypeInput.",(0,r.jsx)("b",{children:"BUYER"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h4,{id:"organizationtypeinputseller",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationTypeInput.",(0,r.jsx)("b",{children:"SELLER"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h4,{id:"organizationtypeinputboth",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationTypeInput.",(0,r.jsx)("b",{children:"BOTH"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},21020:(e,n,t)=>{var r=t(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,o={},p=null,c=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:p,ref:c,props:o,_owner:s.current}}n.Fragment=o,n.jsx=p,n.jsxs=p},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);