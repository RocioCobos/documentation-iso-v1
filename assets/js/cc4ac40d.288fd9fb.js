/*! For license information please see cc4ac40d.288fd9fb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35885],{85573:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>u,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var n=a(74848),c=a(28453),t=a(96540);const d={id:"speed-create-access-input",title:"SpeedCreateAccessInput",hide_table_of_contents:!1},r=void 0,o={id:"inputs/speed-create-access-input",title:"SpeedCreateAccessInput",description:"No description",source:"@site/api/inputs/speed-create-access-input.mdx",sourceDirName:"inputs",slug:"/inputs/speed-create-access-input",permalink:"/api/inputs/speed-create-access-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"speed-create-access-input",title:"SpeedCreateAccessInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SpeedConnectionCollectionWhereInput",permalink:"/api/inputs/speed-connection-collection-where-input"},next:{title:"SpeedCreateAllAccessesDataInput",permalink:"/api/inputs/speed-create-all-accesses-data-input"}},l={},i=()=>{const e={span:"span",...(0,c.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,c.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,c.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:a,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,c.R)()},[o,l]=(0,t.useState)(d);return(0,n.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>SpeedCreateAccessInput.<b>access</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedcreateaccessinputaccessid--",level:4},{value:'<code>SpeedCreateAccessInput.<b>organizationBuyerCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedcreateaccessinputorganizationbuyercodeid--",level:4},{value:'<code>SpeedCreateAccessInput.<b>organizationSellerCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedcreateaccessinputorganizationsellercodeid--",level:4},{value:'<code>SpeedCreateAccessInput.<b>mode</b></code><Bullet></Bullet><code>ModeType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedcreateaccessinputmodemodetype--",level:4},{value:'<code>SpeedCreateAccessInput.<b>requestedBy</b></code><Bullet></Bullet><code>SpeedRequester!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedcreateaccessinputrequestedbyspeedrequester--",level:4}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"input SpeedCreateAccessInput {\n  access: ID!\n  organizationBuyerCode: ID!\n  organizationSellerCode: ID!\n  mode: ModeType!\n  requestedBy: SpeedRequester!\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"speedcreateaccessinputaccessid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedCreateAccessInput.",(0,n.jsx)("b",{children:"access"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"speedcreateaccessinputorganizationbuyercodeid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedCreateAccessInput.",(0,n.jsx)("b",{children:"organizationBuyerCode"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"speedcreateaccessinputorganizationsellercodeid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedCreateAccessInput.",(0,n.jsx)("b",{children:"organizationSellerCode"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"speedcreateaccessinputmodemodetype--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedCreateAccessInput.",(0,n.jsx)("b",{children:"mode"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/enums/mode-type",children:(0,n.jsx)(s.code,{children:"ModeType!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"speedcreateaccessinputrequestedbyspeedrequester--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedCreateAccessInput.",(0,n.jsx)("b",{children:"requestedBy"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/enums/speed-requester",children:(0,n.jsx)(s.code,{children:"SpeedRequester!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"})]})}function b(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},21020:(e,s,a)=>{var n=a(96540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,a){var n,t={},l=null,i=null;for(n in void 0!==a&&(l=""+a),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)d.call(s,n)&&!o.hasOwnProperty(n)&&(t[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===t[n]&&(t[n]=s[n]);return{$$typeof:c,type:e,key:l,ref:i,props:t,_owner:r.current}}s.Fragment=t,s.jsx=l,s.jsxs=l},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>d,x:()=>r});var n=a(96540);const c={},t=n.createContext(c);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);