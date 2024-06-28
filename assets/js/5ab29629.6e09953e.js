/*! For license information please see 5ab29629.6e09953e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61903],{75459:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>v,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=t(74848),s=t(28453),o=t(96540);const c={id:"activation-connection",title:"ActivationConnection"},i=void 0,d={id:"types/objects/activation-connection",title:"ActivationConnection",description:"No description",source:"@site/api/types/objects/activation-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/activation-connection",permalink:"/api/types/objects/activation-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"activation-connection",title:"ActivationConnection"},sidebar:"schemaSidebar",previous:{title:"Accommodation",permalink:"/api/types/objects/accommodation"},next:{title:"ActivationData",permalink:"/api/types/objects/activation-data"}},l={},r=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},v=e=>{const n={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[d,l]=(0,o.useState)(c);return(0,a.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivationConnection.<b>edges</b></code><Bullet></Bullet><code>[ActivationEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationconnectionedgesactivationedge--",level:4},{value:'<code>ActivationConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationconnectionpageinfopageinfo--",level:4},{value:'<code>ActivationConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationconnectionadvisemessageadvisemessage--",level:4},{value:'<code>ActivationConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>ActivationConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type ActivationConnection {\n  edges: [ActivationEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"activationconnectionedgesactivationedge--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/types/objects/activation-edge",children:(0,a.jsx)(n.code,{children:"[ActivationEdge]"})})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"activationconnectionpageinfopageinfo--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,a.jsx)(n.code,{children:"PageInfo!"})})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"activationconnectionadvisemessageadvisemessage--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationConnection.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/types/objects/advise-message",children:(0,a.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.h5,{id:"activationconnectionadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationConnection.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/types/enums/advise-message-level",children:(0,a.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"activationconnectiontotalcountint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/types/objects/activation-query",children:(0,a.jsx)(n.code,{children:"ActivationQuery"})})," ",(0,a.jsx)(v,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var a=t(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,o={},l=null,r=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(r=n.ref),n)c.call(n,a)&&!d.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:s,type:e,key:l,ref:r,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var a=t(96540);const s={},o=a.createContext(s);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);