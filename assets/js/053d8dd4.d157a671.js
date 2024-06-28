/*! For license information please see 053d8dd4.d157a671.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2303],{56799:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var n=t(74848),a=t(28453),o=t(96540);const s={id:"transport-mutation",title:"TransportMutation",hide_table_of_contents:!1},c=void 0,l={id:"objects/transport-mutation",title:"TransportMutation",description:"No description",source:"@site/api/objects/transport-mutation.mdx",sourceDirName:"objects",slug:"/objects/transport-mutation",permalink:"/api/objects/transport-mutation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"transport-mutation",title:"TransportMutation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TransportDeparture",permalink:"/api/objects/transport-departure"},next:{title:"TransportQuery",permalink:"/api/objects/transport-query"}},d={},i=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:r,children:t,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[l,d]=(0,o.useState)(s);return(0,n.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:r}),l&&t]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>TransportMutation.<b>ferryBook</b></code><Bullet></Bullet><code>FerryOrderPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"transportmutationferrybookferryorderpayload-",level:4},{value:'<code>TransportMutation.ferryBook.<b>input</b></code><Bullet></Bullet><code>FerryBookInput</code> <Badge class="badge badge--secondary"></Badge>',id:"transportmutationferrybookinputferrybookinput-",level:5},{value:'<code>TransportMutation.<b>ferryCancel</b></code><Bullet></Bullet><code>FerryCancelPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"transportmutationferrycancelferrycancelpayload-",level:4},{value:'<code>TransportMutation.ferryCancel.<b>input</b></code><Bullet></Bullet><code>FerryCancelInput</code> <Badge class="badge badge--secondary"></Badge>',id:"transportmutationferrycancelinputferrycancelinput-",level:5},{value:"Returned by",id:"returned-by",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"No description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type TransportMutation {\n  ferryBook(input: FerryBookInput): FerryOrderPayload\n  ferryCancel(input: FerryCancelInput): FerryCancelPayload\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"transportmutationferrybookferryorderpayload-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportMutation.",(0,n.jsx)("b",{children:"ferryBook"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/objects/ferry-order-payload",children:(0,n.jsx)(r.code,{children:"FerryOrderPayload"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.h5,{id:"transportmutationferrybookinputferrybookinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportMutation.ferryBook.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/inputs/ferry-book-input",children:(0,n.jsx)(r.code,{children:"FerryBookInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"transportmutationferrycancelferrycancelpayload-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportMutation.",(0,n.jsx)("b",{children:"ferryCancel"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/objects/ferry-cancel-payload",children:(0,n.jsx)(r.code,{children:"FerryCancelPayload"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.h5,{id:"transportmutationferrycancelinputferrycancelinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportMutation.ferryCancel.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/inputs/ferry-cancel-input",children:(0,n.jsx)(r.code,{children:"FerryCancelInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/mutations/transport",children:(0,n.jsx)(r.code,{children:"transport"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,r,t)=>{var n=t(96540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,o={},d=null,i=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(i=r.ref),r)s.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:a,type:e,key:d,ref:i,props:o,_owner:c.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var n=t(96540);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);