/*! For license information please see 4a5a2409.a8fa9f58.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66171],{78063:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>b});var t=r(74848),o=r(28453),s=r(96540);const a={id:"environment",title:"Environment",hide_table_of_contents:!1},d=void 0,c={id:"objects/environment",title:"Environment",description:"No description",source:"@site/api/objects/environment.mdx",sourceDirName:"objects",slug:"/objects/environment",permalink:"/api/objects/environment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"environment",title:"Environment",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Entity",permalink:"/api/objects/entity"},next:{title:"Error",permalink:"/api/objects/error"}},l={},i=()=>{const e={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,o.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:r,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[c,l]=(0,s.useState)(a);return(0,t.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&r]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Environment.<b>code</b></code><Bullet></Bullet><code>EnvironmentName!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"environmentcodeenvironmentname--",level:4},{value:'<code>Environment.<b>type</b></code><Bullet></Bullet><code>CloudEnvironment!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"environmenttypecloudenvironment--",level:4},{value:'<code>Environment.<b>worker</b></code><Bullet></Bullet><code>Worker!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"environmentworkerworker--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type Environment {\n  code: EnvironmentName!\n  type: CloudEnvironment!\n  worker: Worker!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"environmentcodeenvironmentname--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Environment.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/api/scalars/environment-name",children:(0,t.jsx)(n.code,{children:"EnvironmentName!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"environmenttypecloudenvironment--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Environment.",(0,t.jsx)("b",{children:"type"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/api/enums/cloud-environment",children:(0,t.jsx)(n.code,{children:"CloudEnvironment!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"environmentworkerworker--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Environment.",(0,t.jsx)("b",{children:"worker"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/api/scalars/worker",children:(0,t.jsx)(n.code,{children:"Worker!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Return hubMachine"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/objects/logging-legacy-data",children:(0,t.jsx)(n.code,{children:"LoggingLegacyData"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},21020:(e,n,r)=>{var t=r(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,i=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(i=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:i,props:s,_owner:d.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);