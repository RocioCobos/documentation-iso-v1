/*! For license information please see 36e66f3f.31b8437b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8786],{24744:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>x,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(74848),c=n(28453),s=n(96540);const r={id:"contact",title:"Contact",hide_table_of_contents:!1},o=void 0,l={id:"objects/contact",title:"Contact",description:"Contact Data.",source:"@site/api/objects/contact.mdx",sourceDirName:"objects",slug:"/objects/contact",permalink:"/api/objects/contact",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"contact",title:"Contact",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Connection",permalink:"/api/objects/connection"},next:{title:"ContentPayload",permalink:"/api/objects/content-payload"}},d={},i=()=>{const e={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,c.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const t={span:"span",...(0,c.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,c.R)()},[l,d]=(0,s.useState)(r);return(0,a.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>Contact.<b>email</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"contactemailstring-",level:4},{value:'<code>Contact.<b>telephone</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"contacttelephonestring-",level:4},{value:'<code>Contact.<b>fax</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"contactfaxstring-",level:4},{value:'<code>Contact.<b>web</b></code><Bullet></Bullet><code>URI</code> <Badge class="badge badge--secondary"></Badge>',id:"contactweburi-",level:4},{value:"Member of",id:"member-of",level:3}];function j(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Contact Data."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type Contact {\n  email: String\n  telephone: String\n  fax: String\n  web: URI\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"contactemailstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Contact.",(0,a.jsx)("b",{children:"email"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Email"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"contacttelephonestring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Contact.",(0,a.jsx)("b",{children:"telephone"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Telephone"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"contactfaxstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Contact.",(0,a.jsx)("b",{children:"fax"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Fax"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"contactweburi-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Contact.",(0,a.jsx)("b",{children:"web"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"/api/scalars/uri",children:(0,a.jsx)(t.code,{children:"URI"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Web"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/objects/hotel-data",children:(0,a.jsx)(t.code,{children:"HotelData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},21020:(e,t,n)=>{var a=n(96540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,s={},d=null,i=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(i=t.ref),t)r.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:c,type:e,key:d,ref:i,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const c={},s=a.createContext(c);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);