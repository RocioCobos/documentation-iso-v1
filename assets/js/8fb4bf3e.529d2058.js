/*! For license information please see 8fb4bf3e.529d2058.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29235],{24833:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>y});var r=n(74848),s=n(28453),a=n(96540);const o={id:"date-type",title:"DateType"},i=void 0,l={id:"types/enums/date-type",title:"DateType",description:"Indicates the type of dates",source:"@site/api/types/enums/date-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/date-type",permalink:"/api/types/enums/date-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"date-type",title:"DateType"},sidebar:"schemaSidebar",previous:{title:"CustomerAgentType",permalink:"/api/types/enums/customer-agent-type"},next:{title:"DescriptionType",permalink:"/api/types/enums/description-type"}},c={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[l,c]=(0,a.useState)(o);return(0,r.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},y=[{value:"Values",id:"values",level:3},{value:"<code>DateType.<b>ARRIVAL</b></code>",id:"datetypearrival",level:4},{value:"<code>DateType.<b>BOOKING</b></code>",id:"datetypebooking",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Indicates the type of dates"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"enum DateType {\n  ARRIVAL\n  BOOKING\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(t.h4,{id:"datetypearrival",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["DateType.",(0,r.jsx)("b",{children:"ARRIVAL"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Arrival Date"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"datetypebooking",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["DateType.",(0,r.jsx)("b",{children:"BOOKING"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Booking Creation"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/inputs/criteria-booking-dates-input",children:(0,r.jsx)(t.code,{children:"CriteriaBookingDatesInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);