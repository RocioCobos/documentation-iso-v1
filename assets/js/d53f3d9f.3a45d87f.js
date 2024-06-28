/*! For license information please see d53f3d9f.3a45d87f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79653],{10428:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>x});var r=a(74848),n=a(28453),o=a(96540);const s={id:"airport-data",title:"AirportData",hide_table_of_contents:!1},i=void 0,c={id:"objects/airport-data",title:"AirportData",description:"Information about the airport",source:"@site/api/objects/airport-data.mdx",sourceDirName:"objects",slug:"/objects/airport-data",permalink:"/api/objects/airport-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"airport-data",title:"AirportData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Aggregate",permalink:"/api/objects/aggregate"},next:{title:"Airport",permalink:"/api/objects/airport"}},d={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,n.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:a,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,n.R)()},[c,d]=(0,o.useState)(s);return(0,r.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AirportData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"airportdatacodeid--",level:4},{value:'<code>AirportData.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"airportdatanamestring-",level:4},{value:'<code>AirportData.<b>location</b></code><Bullet></Bullet><code>Location</code> <Badge class="badge badge--secondary"></Badge>',id:"airportdatalocationlocation-",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Information about the airport"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"type AirportData {\n  code: ID!\n  name: String\n  location: Location\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"airportdatacodeid--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AirportData.",(0,r.jsx)("b",{children:"code"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/scalars/id",children:(0,r.jsx)(t.code,{children:"ID!"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Airport Code (IATA)"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"airportdatanamestring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AirportData.",(0,r.jsx)("b",{children:"name"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The airport s name"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"airportdatalocationlocation-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AirportData.",(0,r.jsx)("b",{children:"location"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/objects/location",children:(0,r.jsx)(t.code,{children:"Location"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"The airport s location"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/objects/airport",children:(0,r.jsx)(t.code,{children:"Airport"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},21020:(e,t,a)=>{var r=a(96540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var r,o={},d=null,l=null;for(r in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:n,type:e,key:d,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var r=a(96540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);