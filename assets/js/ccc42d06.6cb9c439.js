/*! For license information please see ccc42d06.6cb9c439.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59208],{98273:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>b});var s=o(74848),n=o(28453),a=o(96540);const r={id:"hotel-quote",title:"HotelQuote",hide_table_of_contents:!1},l=void 0,d={id:"objects/hotel-quote",title:"HotelQuote",description:"No description",source:"@site/api/objects/hotel-quote.mdx",sourceDirName:"objects",slug:"/objects/hotel-quote",permalink:"/api/objects/hotel-quote",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-quote",title:"HotelQuote",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelOptionSearch",permalink:"/api/objects/hotel-option-search"},next:{title:"HotelRuntimeConfigurationData",permalink:"/api/objects/hotel-runtime-configuration-data"}},c={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:o,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,n.R)()},[d,c]=(0,a.useState)(r);return(0,s.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&o]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelQuote.<b>stats</b></code><Bullet></Bullet><code>StatsRequest</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelquotestatsstatsrequest-",level:4},{value:'<code>HotelQuote.stats.<b>token</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelquotestatstokenstring--",level:5},{value:'<code>HotelQuote.<b>auditData</b></code><Bullet></Bullet><code>AuditData</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelquoteauditdataauditdata-",level:4},{value:'<code>HotelQuote.<b>optionQuote</b></code><Bullet></Bullet><code>HotelOptionQuote</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelquoteoptionquotehoteloptionquote-",level:4},{value:'<code>HotelQuote.<b>errors</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelquoteerrorserror--",level:4},{value:'<code>HotelQuote.<b>warnings</b></code><Bullet></Bullet><code>[Warning!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelquotewarningswarning--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Response</code> <Badge class="badge badge--secondary"></Badge>',id:"response-",level:4},{value:"Member of",id:"member-of",level:3}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type HotelQuote implements Response {\n  stats(token: String!): StatsRequest\n  auditData: AuditData\n  optionQuote: HotelOptionQuote\n  errors: [Error!]\n  warnings: [Warning!]\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"hotelquotestatsstatsrequest-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelQuote.",(0,s.jsx)("b",{children:"stats"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/objects/stats-request",children:(0,s.jsx)(t.code,{children:"StatsRequest"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Application stats in string format"}),"\n",(0,s.jsxs)(t.h5,{id:"hotelquotestatstokenstring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelQuote.stats.",(0,s.jsx)("b",{children:"token"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hotelquoteauditdataauditdata-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelQuote.",(0,s.jsx)("b",{children:"auditData"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/objects/audit-data",children:(0,s.jsx)(t.code,{children:"AuditData"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Data sent and received in the supplier's native format."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hotelquoteoptionquotehoteloptionquote-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelQuote.",(0,s.jsx)("b",{children:"optionQuote"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/objects/hotel-option-quote",children:(0,s.jsx)(t.code,{children:"HotelOptionQuote"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Information about quote response."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hotelquoteerrorserror--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelQuote.",(0,s.jsx)("b",{children:"errors"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/objects/error",children:(0,s.jsx)(t.code,{children:"[Error!]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Errors that abort services"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hotelquotewarningswarning--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelQuote.",(0,s.jsx)("b",{children:"warnings"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/objects/warning",children:(0,s.jsx)(t.code,{children:"[Warning!]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Potentially harmful situations or errors that won't force the service to abort.\nTo identify if it is blocked one, you can check our documentation regards this matter\n",(0,s.jsx)(t.a,{href:"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/",children:"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(t.h4,{id:"response-",children:[(0,s.jsx)(t.a,{href:"/api/interfaces/response",children:(0,s.jsx)(t.code,{children:"Response"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/objects/hotel-xquery",children:(0,s.jsx)(t.code,{children:"HotelXQuery"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},21020:(e,t,o)=>{var s=o(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var s,a={},c=null,i=null;for(s in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(i=t.ref),t)r.call(t,s)&&!d.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:i,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,o)=>{e.exports=o(21020)},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>l});var s=o(96540);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);