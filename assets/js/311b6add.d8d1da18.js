/*! For license information please see 311b6add.d8d1da18.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78177],{28466:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=a(74848),r=a(28453),o=a(96540);const i={id:"alert-update-common-comparative-input",title:"AlertUpdateCommonComparativeInput",hide_table_of_contents:!1},s=void 0,l={id:"inputs/alert-update-common-comparative-input",title:"AlertUpdateCommonComparativeInput",description:"No description",source:"@site/api/inputs/alert-update-common-comparative-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-common-comparative-input",permalink:"/api/inputs/alert-update-common-comparative-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-update-common-comparative-input",title:"AlertUpdateCommonComparativeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertUpdateCommonByTimeInput",permalink:"/api/inputs/alert-update-common-by-time-input"},next:{title:"AlertUpdateCommonConfigurationInput",permalink:"/api/inputs/alert-update-common-configuration-input"}},c={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:a,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,r.R)()},[l,c]=(0,o.useState)(i);return(0,n.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdateCommonComparativeInput.<b>historicalWindow</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommoncomparativeinputhistoricalwindowint-",level:4},{value:'<code>AlertUpdateCommonComparativeInput.<b>offset</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommoncomparativeinputoffsetint-",level:4},{value:'<code>AlertUpdateCommonComparativeInput.<b>variation</b></code><Bullet></Bullet><code>AlertVariation</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommoncomparativeinputvariationalertvariation-",level:4},{value:'<code>AlertUpdateCommonComparativeInput.<b>percentageToAlert</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommoncomparativeinputpercentagetoalertint-",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdateCommonComparativeInput {\n  historicalWindow: Int\n  offset: Int\n  variation: AlertVariation\n  percentageToAlert: Int\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdatecommoncomparativeinputhistoricalwindowint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonComparativeInput.",(0,n.jsx)("b",{children:"historicalWindow"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The time frame in minutes to be used to compare with the window time frame"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdatecommoncomparativeinputoffsetint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonComparativeInput.",(0,n.jsx)("b",{children:"offset"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Time frame in minutes to set the beginning of historicalWindow"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdatecommoncomparativeinputvariationalertvariation-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonComparativeInput.",(0,n.jsx)("b",{children:"variation"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/enums/alert-variation",children:(0,n.jsx)(t.code,{children:"AlertVariation"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"According to percentageToAlert value"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdatecommoncomparativeinputpercentagetoalertint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonComparativeInput.",(0,n.jsx)("b",{children:"percentageToAlert"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Percentage of traffic to be considered status ALERTING"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/inputs/alert-update-average-time-comparative-configuration-by-time-input",children:(0,n.jsx)(t.code,{children:"AlertUpdateAverageTimeComparativeConfigurationByTimeInput"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/inputs/alert-update-error-rate-comparative-configuration-by-time-input",children:(0,n.jsx)(t.code,{children:"AlertUpdateErrorRateComparativeConfigurationByTimeInput"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/inputs/alert-update-peak-traffic-comparative-configuration-by-time-input",children:(0,n.jsx)(t.code,{children:"AlertUpdatePeakTrafficComparativeConfigurationByTimeInput"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,t,a)=>{var n=a(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,o={},c=null,d=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var n=a(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);