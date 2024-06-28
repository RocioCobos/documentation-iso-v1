/*! For license information please see 996b5412.f0e9870c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46755],{23928:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>x,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var s=t(74848),n=t(28453),d=t(96540);const i={id:"activation",title:"Activation"},c=void 0,o={id:"types/objects/activation",title:"Activation",description:"No description",source:"@site/api/types/objects/activation.mdx",sourceDirName:"types/objects",slug:"/types/objects/activation",permalink:"/api/types/objects/activation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"activation",title:"Activation"},sidebar:"schemaSidebar",previous:{title:"ActivationQuery",permalink:"/api/types/objects/activation-query"},next:{title:"Activity",permalink:"/api/types/objects/activity"}},r={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const a={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:a,children:t,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[o,r]=(0,d.useState)(i);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>Activation.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationcodeid--",level:4},{value:'<code>Activation.<b>activationData</b></code><Bullet></Bullet><code>ActivationData</code> <Badge class="badge badge--secondary"></Badge>',id:"activationactivationdataactivationdata-",level:4},{value:'<code>Activation.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationcreatedatdatetime--",level:4},{value:'<code>Activation.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationupdatedatdatetime--",level:4},{value:'<code>Activation.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationadvisemessageadvisemessage--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type Activation implements Node {\n  code: ID!\n  activationData: ActivationData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage: [AdviseMessage]\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"activationcodeid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Activation.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"activationactivationdataactivationdata-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Activation.",(0,s.jsx)("b",{children:"activationData"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/activation-data",children:(0,s.jsx)(a.code,{children:"ActivationData"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"activationcreatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Activation.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"activationupdatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Activation.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"activationadvisemessageadvisemessage--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Activation.",(0,s.jsx)("b",{children:"adviseMessage"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/advise-message",children:(0,s.jsx)(a.code,{children:"[AdviseMessage]"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(a.h4,{id:"node-",children:[(0,s.jsx)(a.a,{href:"/api/types/interfaces/node",children:(0,s.jsx)(a.code,{children:"Node"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/types/objects/activation-edge",children:(0,s.jsx)(a.code,{children:"ActivationEdge"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/activation-mutation",children:(0,s.jsx)(a.code,{children:"ActivationMutation"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function v(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},21020:(e,a,t)=>{var s=t(96540),n=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function r(e,a,t){var s,d={},r=null,l=null;for(s in void 0!==t&&(r=""+t),void 0!==a.key&&(r=""+a.key),void 0!==a.ref&&(l=a.ref),a)i.call(a,s)&&!o.hasOwnProperty(s)&&(d[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===d[s]&&(d[s]=a[s]);return{$$typeof:n,type:e,key:r,ref:l,props:d,_owner:c.current}}a.Fragment=d,a.jsx=r,a.jsxs=r},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>c});var s=t(96540);const n={},d=s.createContext(n);function i(e){const a=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);