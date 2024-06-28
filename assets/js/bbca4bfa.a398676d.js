/*! For license information please see bbca4bfa.a398676d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83546],{22495:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>x});var o=t(74848),a=t(28453),c=t(96540);const s={id:"connection-data",title:"ConnectionData"},i=void 0,r={id:"types/objects/connection-data",title:"ConnectionData",description:"Extended Connection information",source:"@site/api/types/objects/connection-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/connection-data",permalink:"/api/types/objects/connection-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"connection-data",title:"ConnectionData"},sidebar:"schemaSidebar",previous:{title:"ConnectionConnection",permalink:"/api/types/objects/connection-connection"},next:{title:"ConnectionEdge",permalink:"/api/types/objects/connection-edge"}},d={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const n={a:"a",...(0,a.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[r,d]=(0,c.useState)(s);return(0,o.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ConnectionData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectiondatacodeid--",level:4},{value:'<code>ConnectionData.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectiondataisactiveboolean--",level:4},{value:'<code>ConnectionData.<b>seller</b></code><Bullet></Bullet><code>Organizations</code> <Badge class="badge badge--secondary"></Badge>',id:"connectiondatasellerorganizations-",level:4},{value:'<code>ConnectionData.<b>buyer</b></code><Bullet></Bullet><code>Organizations</code> <Badge class="badge badge--secondary"></Badge>',id:"connectiondatabuyerorganizations-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Extended Connection information"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type ConnectionData {\n  code: ID!\n  isActive: Boolean!\n  seller: Organizations\n  buyer: Organizations\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"connectiondatacodeid--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionData.",(0,o.jsx)("b",{children:"code"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,o.jsx)(n.code,{children:"ID!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Code unique identifier of a Connection. Format: integer."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"connectiondataisactiveboolean--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionData.",(0,o.jsx)("b",{children:"isActive"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,o.jsx)(n.code,{children:"Boolean!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"connectiondatasellerorganizations-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionData.",(0,o.jsx)("b",{children:"seller"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/organizations",children:(0,o.jsx)(n.code,{children:"Organizations"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"connectiondatabuyerorganizations-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionData.",(0,o.jsx)("b",{children:"buyer"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/organizations",children:(0,o.jsx)(n.code,{children:"Organizations"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/objects/connection",children:(0,o.jsx)(n.code,{children:"Connection"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},21020:(e,n,t)=>{var o=t(96540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,c={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,o)&&!r.hasOwnProperty(o)&&(c[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===c[o]&&(c[o]=n[o]);return{$$typeof:a,type:e,key:d,ref:l,props:c,_owner:i.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(96540);const a={},c=o.createContext(a);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);