/*! For license information please see 9d48c061.beaba60a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55602],{61490:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=n(74848),a=n(28453),r=n(96540);const i={id:"alert-average-time-absolute-configuration-by-requests-input",title:"AlertAverageTimeAbsoluteConfigurationByRequestsInput"},o=void 0,l={id:"types/inputs/alert-average-time-absolute-configuration-by-requests-input",title:"AlertAverageTimeAbsoluteConfigurationByRequestsInput",description:"No description",source:"@site/api/types/inputs/alert-average-time-absolute-configuration-by-requests-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/alert-average-time-absolute-configuration-by-requests-input",permalink:"/api/types/inputs/alert-average-time-absolute-configuration-by-requests-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-average-time-absolute-configuration-by-requests-input",title:"AlertAverageTimeAbsoluteConfigurationByRequestsInput"},sidebar:"schemaSidebar",previous:{title:"AlertAverageTimeAbsoluteByTimeInput",permalink:"/api/types/inputs/alert-average-time-absolute-by-time-input"},next:{title:"AlertAverageTimeAbsoluteConfigurationByTimeInput",permalink:"/api/types/inputs/alert-average-time-absolute-configuration-by-time-input"}},u={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const t={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[l,u]=(0,r.useState)(i);return(0,s.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertAverageTimeAbsoluteConfigurationByRequestsInput.<b>maxTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimeabsoluteconfigurationbyrequestsinputmaxtimeint-",level:4},{value:'<code>AlertAverageTimeAbsoluteConfigurationByRequestsInput.<b>maxAverageTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimeabsoluteconfigurationbyrequestsinputmaxaveragetimeint-",level:4},{value:'<code>AlertAverageTimeAbsoluteConfigurationByRequestsInput.<b>requestsToAlert</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimeabsoluteconfigurationbyrequestsinputrequeststoalertint--",level:4},{value:'<code>AlertAverageTimeAbsoluteConfigurationByRequestsInput.<b>windowing</b></code><Bullet></Bullet><code>AlertCommonByRequestsInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimeabsoluteconfigurationbyrequestsinputwindowingalertcommonbyrequestsinput--",level:4},{value:'<code>AlertAverageTimeAbsoluteConfigurationByRequestsInput.<b>common</b></code><Bullet></Bullet><code>AlertCommonConfigurationInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimeabsoluteconfigurationbyrequestsinputcommonalertcommonconfigurationinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input AlertAverageTimeAbsoluteConfigurationByRequestsInput {\n  maxTime: Int\n  maxAverageTime: Int\n  requestsToAlert: Int!\n  windowing: AlertCommonByRequestsInput!\n  common: AlertCommonConfigurationInput!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"alertaveragetimeabsoluteconfigurationbyrequestsinputmaxtimeint-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeAbsoluteConfigurationByRequestsInput.",(0,s.jsx)("b",{children:"maxTime"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Time not allowed in miliseconds"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"alertaveragetimeabsoluteconfigurationbyrequestsinputmaxaveragetimeint-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeAbsoluteConfigurationByRequestsInput.",(0,s.jsx)("b",{children:"maxAverageTime"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Average time not allowed in miliseconds"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"alertaveragetimeabsoluteconfigurationbyrequestsinputrequeststoalertint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeAbsoluteConfigurationByRequestsInput.",(0,s.jsx)("b",{children:"requestsToAlert"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Number of requests with anomaly to set alert in ALERTING status"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"alertaveragetimeabsoluteconfigurationbyrequestsinputwindowingalertcommonbyrequestsinput--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeAbsoluteConfigurationByRequestsInput.",(0,s.jsx)("b",{children:"windowing"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/inputs/alert-common-by-requests-input",children:(0,s.jsx)(t.code,{children:"AlertCommonByRequestsInput!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Common configuration for requests window type"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"alertaveragetimeabsoluteconfigurationbyrequestsinputcommonalertcommonconfigurationinput--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeAbsoluteConfigurationByRequestsInput.",(0,s.jsx)("b",{children:"common"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(t.a,{href:"/api/types/inputs/alert-common-configuration-input",children:(0,s.jsx)(t.code,{children:"AlertCommonConfigurationInput!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Common configuration alert"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/inputs/alert-average-time-absolute-by-requests-input",children:(0,s.jsx)(t.code,{children:"AlertAverageTimeAbsoluteByRequestsInput"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},21020:(e,t,n)=>{var s=n(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var s,r={},u=null,c=null;for(s in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:a,type:e,key:u,ref:c,props:r,_owner:o.current}}t.Fragment=r,t.jsx=u,t.jsxs=u},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);