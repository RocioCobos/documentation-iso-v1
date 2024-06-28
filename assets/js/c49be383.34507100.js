/*! For license information please see c49be383.34507100.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45492],{59237:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>x,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var s=a(74848),t=a(28453),r=a(96540);const l={id:"age-range",title:"AgeRange",hide_table_of_contents:!1},d=void 0,o={id:"objects/age-range",title:"AgeRange",description:"Contain age range of the passenger",source:"@site/api/objects/age-range.mdx",sourceDirName:"objects",slug:"/objects/age-range",permalink:"/api/objects/age-range",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"age-range",title:"AgeRange",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AdviseMessage",permalink:"/api/objects/advise-message"},next:{title:"AggregateMax",permalink:"/api/objects/aggregate-max"}},c={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const n={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:a,startOpen:l=!1})=>{const d={details:"details",summary:"summary",...(0,t.R)()},[o,c]=(0,r.useState)(l);return(0,s.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&a]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AgeRange.<b>min</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"agerangeminint--",level:4},{value:'<code>AgeRange.<b>max</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"agerangemaxint--",level:4},{value:'<code>AgeRange.<b>type</b></code><Bullet></Bullet><code>HotelPaxType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"agerangetypehotelpaxtype--",level:4},{value:"Member of",id:"member-of",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Contain age range of the passenger"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type AgeRange {\n  min: Int!\n  max: Int!\n  type: HotelPaxType!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"agerangeminint--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AgeRange.",(0,s.jsx)("b",{children:"min"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(n.a,{href:"/api/scalars/int",children:(0,s.jsx)(n.code,{children:"Int!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"min age allowed"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"agerangemaxint--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AgeRange.",(0,s.jsx)("b",{children:"max"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(n.a,{href:"/api/scalars/int",children:(0,s.jsx)(n.code,{children:"Int!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"max age allowed"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"agerangetypehotelpaxtype--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AgeRange.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(n.a,{href:"/api/enums/hotel-pax-type",children:(0,s.jsx)(n.code,{children:"HotelPaxType!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"PaxType"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/objects/reviewed-age-ranges",children:(0,s.jsx)(n.code,{children:"ReviewedAgeRanges"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},21020:(e,n,a)=>{var s=a(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var s,r={},c=null,i=null;for(s in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(i=n.ref),n)l.call(n,s)&&!o.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:i,props:r,_owner:d.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>d});var s=a(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);