/*! For license information please see 3af304f1.bfa9ce4d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95313],{65361:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>j,frontMatter:()=>s,metadata:()=>a,toc:()=>x});var i=n(74848),t=n(28453),d=n(96540);const s={id:"provider-where-input",title:"ProviderWhereInput",hide_table_of_contents:!1},o=void 0,a={id:"inputs/provider-where-input",title:"ProviderWhereInput",description:"Provider where input. Filters are additive (AND)",source:"@site/api/inputs/provider-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/provider-where-input",permalink:"/api/inputs/provider-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"provider-where-input",title:"ProviderWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProviderInput",permalink:"/api/inputs/provider-input"},next:{title:"ProviderWhereUniqueInput",permalink:"/api/inputs/provider-where-unique-input"}},l={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,t.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,t.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:r,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[a,l]=(0,d.useState)(s);return(0,i.jsxs)(o.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:r}),a&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ProviderWhereInput.<b>id</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"providerwhereinputidid-",level:4},{value:'<code>ProviderWhereInput.<b>code</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"providerwhereinputcodeid-",level:4},{value:'<code>ProviderWhereInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"providerwhereinputnamestring-",level:4},{value:'<code>ProviderWhereInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"providerwhereinputisactiveboolean-",level:4}];function v(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Provider where input. Filters are additive (AND)"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-graphql",children:"input ProviderWhereInput {\n  id: ID\n  code: ID\n  name: String\n  isActive: Boolean\n}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(r.h4,{id:"providerwhereinputidid-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderWhereInput.",(0,i.jsx)("b",{children:"id"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(r.a,{href:"/api/scalars/id",children:(0,i.jsx)(r.code,{children:"ID"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Filter by Provider ID (integer)"}),"\n"]}),"\n",(0,i.jsxs)(r.h4,{id:"providerwhereinputcodeid-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderWhereInput.",(0,i.jsx)("b",{children:"code"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(r.a,{href:"/api/scalars/id",children:(0,i.jsx)(r.code,{children:"ID"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Filter by Provider Code"}),"\n"]}),"\n",(0,i.jsxs)(r.h4,{id:"providerwhereinputnamestring-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderWhereInput.",(0,i.jsx)("b",{children:"name"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(r.a,{href:"/api/scalars/string",children:(0,i.jsx)(r.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Filter by Provider Name"}),"\n"]}),"\n",(0,i.jsxs)(r.h4,{id:"providerwhereinputisactiveboolean-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderWhereInput.",(0,i.jsx)("b",{children:"isActive"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(r.a,{href:"/api/scalars/boolean",children:(0,i.jsx)(r.code,{children:"Boolean"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Filter by Provider Status"}),"\n"]})]})}function j(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},21020:(e,r,n)=>{var i=n(96540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var i,d={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,i)&&!a.hasOwnProperty(i)&&(d[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===d[i]&&(d[i]=r[i]);return{$$typeof:t,type:e,key:l,ref:c,props:d,_owner:o.current}}r.Fragment=d,r.jsx=l,r.jsxs=l},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var i=n(96540);const t={},d=i.createContext(t);function s(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);