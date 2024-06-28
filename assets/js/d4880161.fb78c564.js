/*! For license information please see d4880161.fb78c564.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67237],{27700:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=a(74848),s=a(28453),r=a(96540);const i={id:"apikey-create-input",title:"APIKeyCreateInput"},l=void 0,o={id:"types/inputs/apikey-create-input",title:"APIKeyCreateInput",description:"Create Apikey data",source:"@site/api/types/inputs/apikey-create-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/apikey-create-input",permalink:"/api/types/inputs/apikey-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"apikey-create-input",title:"APIKeyCreateInput"},sidebar:"schemaSidebar",previous:{title:"AmendPolicyUpdateInput",permalink:"/api/types/inputs/amend-policy-update-input"},next:{title:"ApikeyOrganizationInput",permalink:"/api/types/inputs/apikey-organization-input"}},d={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:n,children:a,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[o,d]=(0,r.useState)(i);return(0,t.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>APIKeyCreateInput.<b>organizationCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeycreateinputorganizationcodeid--",level:4},{value:'<code>APIKeyCreateInput.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeycreateinputlabelstring--",level:4},{value:'<code>APIKeyCreateInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeycreateinputisactiveboolean--",level:4},{value:'<code>APIKeyCreateInput.<b>role</b></code><Bullet></Bullet><code>ApikeyRole</code> <Badge class="badge badge--secondary"></Badge>',id:"apikeycreateinputroleapikeyrole-",level:4}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Create Apikey data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input APIKeyCreateInput {\n  organizationCode: ID!\n  label: String!\n  isActive: Boolean!\n  role: ApikeyRole\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"apikeycreateinputorganizationcodeid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["APIKeyCreateInput.",(0,t.jsx)("b",{children:"organizationCode"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Organization to which the apikey belongs"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"apikeycreateinputlabelstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["APIKeyCreateInput.",(0,t.jsx)("b",{children:"label"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"APIKey description"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"apikeycreateinputisactiveboolean--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["APIKeyCreateInput.",(0,t.jsx)("b",{children:"isActive"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,t.jsx)(n.code,{children:"Boolean!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Indicates whether the APIKey is active."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"apikeycreateinputroleapikeyrole-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["APIKeyCreateInput.",(0,t.jsx)("b",{children:"role"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/types/enums/apikey-role",children:(0,t.jsx)(n.code,{children:"ApikeyRole"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Indicates the APIKey'S role in the organization (default: VIEWER)."}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},21020:(e,n,a)=>{var t=a(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,a){var t,r={},d=null,c=null;for(t in void 0!==a&&(d=""+a),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,t)&&!o.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:c,props:r,_owner:l.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var t=a(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);