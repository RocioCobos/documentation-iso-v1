/*! For license information please see 9a1c6f59.dc6a619c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64515],{73251:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var a=n(74848),r=n(28453),s=n(96540);const d={id:"date-range",title:"DateRange",hide_table_of_contents:!1},i=void 0,l={id:"inputs/date-range",title:"DateRange",description:"No description",source:"@site/api/inputs/date-range.mdx",sourceDirName:"inputs",slug:"/inputs/date-range",permalink:"/api/inputs/date-range",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"date-range",title:"DateRange",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DataRangeInput",permalink:"/api/inputs/data-range-input"},next:{title:"DateShiftInput",permalink:"/api/inputs/date-shift-input"}},o={},c=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,r.R)()},[l,o]=(0,s.useState)(d);return(0,a.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>DateRange.<b>lte</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"daterangeltedatetime--",level:4},{value:'<code>DateRange.<b>gte</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"daterangegtedatetime--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input DateRange {\n  lte: DateTime!\n  gte: DateTime!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"daterangeltedatetime--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["DateRange.",(0,a.jsx)("b",{children:"lte"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"daterangegtedatetime--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["DateRange.",(0,a.jsx)("b",{children:"gte"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/inputs/bookings-report-where-input",children:(0,a.jsx)(t.code,{children:"BookingsReportWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/hotel-xmapping-report-where-input",children:(0,a.jsx)(t.code,{children:"HotelXMappingReportWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var a=n(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var a,s={},o=null,c=null;for(a in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:o,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function d(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);