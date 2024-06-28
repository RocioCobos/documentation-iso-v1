/*! For license information please see 96f28a40.c5c77327.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19863],{81236:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=n(74848),s=n(28453),a=n(96540);const o={id:"ratetype",title:"Ratetype",hide_table_of_contents:!1},c=void 0,i={id:"objects/ratetype",title:"Ratetype",description:"No description",source:"@site/api/objects/ratetype.mdx",sourceDirName:"objects",slug:"/objects/ratetype",permalink:"/api/objects/ratetype",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ratetype",title:"Ratetype",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Rategroup",permalink:"/api/objects/rategroup"},next:{title:"Ratios",permalink:"/api/objects/ratios"}},d={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[i,d]=(0,a.useState)(o);return(0,r.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Ratetype.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ratetypecodestring-",level:4},{value:'<code>Ratetype.<b>conditions</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ratetypeconditionsstring--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"type Ratetype {\n  code: String\n  conditions: [String]\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"ratetypecodestring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Ratetype.",(0,r.jsx)("b",{children:"code"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(t.h4,{id:"ratetypeconditionsstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Ratetype.",(0,r.jsx)("b",{children:"conditions"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/scalars/string",children:(0,r.jsx)(t.code,{children:"[String]"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/objects/ferry-offer-data",children:(0,r.jsx)(t.code,{children:"FerryOfferData"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:c.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);