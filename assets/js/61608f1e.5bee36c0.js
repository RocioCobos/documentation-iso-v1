/*! For license information please see 61608f1e.5bee36c0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69010],{41166:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>y});var s=n(74848),r=n(28453),o=n(96540);const a={id:"iata-ptc-code-type",title:"IATA_PTC_CodeType"},c=void 0,i={id:"types/enums/iata-ptc-code-type",title:"IATA_PTC_CodeType",description:"Type code applying to the Passenger",source:"@site/api/types/enums/iata-ptc-code-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/iata-ptc-code-type",permalink:"/api/types/enums/iata-ptc-code-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"iata-ptc-code-type",title:"IATA_PTC_CodeType"},sidebar:"schemaSidebar",previous:{title:"HubStatus",permalink:"/api/types/enums/hub-status"},next:{title:"InsightsCountryType",permalink:"/api/types/enums/insights-country-type"}},l={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,r.R)()},[i,l]=(0,o.useState)(a);return(0,s.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>IATA_PTC_CodeType.<b>ADT</b></code>",id:"iata_ptc_codetypeadt",level:4},{value:"<code>IATA_PTC_CodeType.<b>CHD</b></code>",id:"iata_ptc_codetypechd",level:4},{value:"<code>IATA_PTC_CodeType.<b>INF</b></code>",id:"iata_ptc_codetypeinf",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Type code applying to the Passenger"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum IATA_PTC_CodeType {\n  ADT\n  CHD\n  INF\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"iata_ptc_codetypeadt",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["IATA_PTC_CodeType.",(0,s.jsx)("b",{children:"ADT"})]})})}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h4,{id:"iata_ptc_codetypechd",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["IATA_PTC_CodeType.",(0,s.jsx)("b",{children:"CHD"})]})})}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h4,{id:"iata_ptc_codetypeinf",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["IATA_PTC_CodeType.",(0,s.jsx)("b",{children:"INF"})]})})}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/objects/flight-pax",children:(0,s.jsx)(t.code,{children:"FlightPax"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!i.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);