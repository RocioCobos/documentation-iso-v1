/*! For license information please see aaa7a02f.ae8dae93.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71666],{64271:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var r=t(74848),s=t(28453),i=t(96540);const d={id:"medium",title:"Medium",hide_table_of_contents:!1},o=void 0,a={id:"objects/medium",title:"Medium",description:"No description",source:"@site/api/objects/medium.mdx",sourceDirName:"objects",slug:"/objects/medium",permalink:"/api/objects/medium",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"medium",title:"Medium",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Media",permalink:"/api/objects/media"},next:{title:"MemberConnection",permalink:"/api/objects/member-connection"}},c={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[a,c]=(0,i.useState)(d);return(0,r.jsxs)(o.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Medium.<b>type</b></code><Bullet></Bullet><code>MediumType</code> <Badge class="badge badge--secondary"></Badge>',id:"mediumtypemediumtype-",level:4},{value:'<code>Medium.<b>url</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"mediumurlstring-",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type Medium {\n  type: MediumType\n  url: String\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"mediumtypemediumtype-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Medium.",(0,r.jsx)("b",{children:"type"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/enums/medium-type",children:(0,r.jsx)(n.code,{children:"MediumType"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Type of media (Image, Video)"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"mediumurlstring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Medium.",(0,r.jsx)("b",{children:"url"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Url to access The Media"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/objects/content-payload",children:(0,r.jsx)(n.code,{children:"ContentPayload"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:l,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);