/*! For license information please see 51870b40.319c768e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82792],{81711:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>b});var i=n(74848),r=n(28453),o=n(96540);const a={id:"alert-price-absolute-configuration-by-time-input",title:"AlertPriceAbsoluteConfigurationByTimeInput"},s=void 0,l={id:"types/inputs/alert-price-absolute-configuration-by-time-input",title:"AlertPriceAbsoluteConfigurationByTimeInput",description:"No description",source:"@site/api/types/inputs/alert-price-absolute-configuration-by-time-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/alert-price-absolute-configuration-by-time-input",permalink:"/api/types/inputs/alert-price-absolute-configuration-by-time-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-price-absolute-configuration-by-time-input",title:"AlertPriceAbsoluteConfigurationByTimeInput"},sidebar:"schemaSidebar",previous:{title:"AlertPriceAbsoluteConfigurationByRequestsInput",permalink:"/api/types/inputs/alert-price-absolute-configuration-by-requests-input"},next:{title:"AlertPriceInput",permalink:"/api/types/inputs/alert-price-input"}},c={},u=()=>{const e={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,r.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const s={details:"details",summary:"summary",...(0,r.R)()},[l,c]=(0,o.useState)(a);return(0,i.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertPriceAbsoluteConfigurationByTimeInput.<b>price</b></code><Bullet></Bullet><code>AlertPriceInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpriceabsoluteconfigurationbytimeinputpricealertpriceinput--",level:4},{value:'<code>AlertPriceAbsoluteConfigurationByTimeInput.<b>windowing</b></code><Bullet></Bullet><code>AlertCommonByTimeInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpriceabsoluteconfigurationbytimeinputwindowingalertcommonbytimeinput--",level:4},{value:'<code>AlertPriceAbsoluteConfigurationByTimeInput.<b>common</b></code><Bullet></Bullet><code>AlertCommonConfigurationInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpriceabsoluteconfigurationbytimeinputcommonalertcommonconfigurationinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input AlertPriceAbsoluteConfigurationByTimeInput {\n  price: AlertPriceInput!\n  windowing: AlertCommonByTimeInput!\n  common: AlertCommonConfigurationInput!\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"alertpriceabsoluteconfigurationbytimeinputpricealertpriceinput--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceAbsoluteConfigurationByTimeInput.",(0,i.jsx)("b",{children:"price"})]})}),(0,i.jsx)(u,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/alert-price-input",children:(0,i.jsx)(t.code,{children:"AlertPriceInput!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Configuration of amount & commission values"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"alertpriceabsoluteconfigurationbytimeinputwindowingalertcommonbytimeinput--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceAbsoluteConfigurationByTimeInput.",(0,i.jsx)("b",{children:"windowing"})]})}),(0,i.jsx)(u,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/alert-common-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertCommonByTimeInput!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Common configuration for time window type"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"alertpriceabsoluteconfigurationbytimeinputcommonalertcommonconfigurationinput--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceAbsoluteConfigurationByTimeInput.",(0,i.jsx)("b",{children:"common"})]})}),(0,i.jsx)(u,{}),(0,i.jsx)(t.a,{href:"/api/types/inputs/alert-common-configuration-input",children:(0,i.jsx)(t.code,{children:"AlertCommonConfigurationInput!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Common configuration alert"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/inputs/alert-price-absolute-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertPriceAbsoluteByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},21020:(e,t,n)=>{var i=n(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,o={},c=null,u=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);