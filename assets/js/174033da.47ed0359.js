/*! For license information please see 174033da.47ed0359.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38652],{61719:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var s=t(74848),a=t(28453),c=t(96540);const r={id:"cancel-status",title:"CancelStatus",hide_table_of_contents:!1},l=void 0,o={id:"enums/cancel-status",title:"CancelStatus",description:"No description",source:"@site/api/enums/cancel-status.mdx",sourceDirName:"enums",slug:"/enums/cancel-status",permalink:"/api/enums/cancel-status",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"cancel-status",title:"CancelStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelPenaltyType",permalink:"/api/enums/cancel-penalty-type"},next:{title:"ChargeType",permalink:"/api/enums/charge-type"}},i={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,a.R)()},[o,i]=(0,c.useState)(r);return(0,s.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})},m=[{value:"Values",id:"values",level:3},{value:"<code>CancelStatus.<b>SUCCESS</b></code>",id:"cancelstatussuccess",level:4},{value:"<code>CancelStatus.<b>FAIL</b></code>",id:"cancelstatusfail",level:4},{value:"<code>CancelStatus.<b>PENDING</b></code>",id:"cancelstatuspending",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"enum CancelStatus {\n  SUCCESS\n  FAIL\n  PENDING\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(n.h4,{id:"cancelstatussuccess",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelStatus.",(0,s.jsx)("b",{children:"SUCCESS"})]})})}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h4,{id:"cancelstatusfail",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelStatus.",(0,s.jsx)("b",{children:"FAIL"})]})})}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h4,{id:"cancelstatuspending",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelStatus.",(0,s.jsx)("b",{children:"PENDING"})]})})}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/objects/ferry-cancel-payload",children:(0,s.jsx)(n.code,{children:"FerryCancelPayload"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},21020:(e,n,t)=>{var s=t(96540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var s,c={},i=null,d=null;for(s in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,s)&&!o.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:a,type:e,key:i,ref:d,props:c,_owner:l.current}}n.Fragment=c,n.jsx=i,n.jsxs=i},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const a={},c=s.createContext(a);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);