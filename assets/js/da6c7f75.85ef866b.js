/*! For license information please see da6c7f75.85ef866b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76908],{70432:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>x});var t=s(74848),a=s(28453),r=s(96540);const i={id:"passenger-input",title:"PassengerInput",hide_table_of_contents:!1},l=void 0,o={id:"inputs/passenger-input",title:"PassengerInput",description:"No description",source:"@site/api/inputs/passenger-input.mdx",sourceDirName:"inputs",slug:"/inputs/passenger-input",permalink:"/api/inputs/passenger-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"passenger-input",title:"PassengerInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PassengerBookInput",permalink:"/api/inputs/passenger-book-input"},next:{title:"PaxInput",permalink:"/api/inputs/pax-input"}},d={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:s,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,a.R)()},[o,d]=(0,r.useState)(i);return(0,t.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>PassengerInput.<b>index</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"passengerinputindexint--",level:4},{value:'<code>PassengerInput.<b>age</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"passengerinputageint--",level:4},{value:"Member of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input PassengerInput {\n  index: Int!\n  age: Int!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"passengerinputindexint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PassengerInput.",(0,t.jsx)("b",{children:"index"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Unique consecutive passenger identifier in travel."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"passengerinputageint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PassengerInput.",(0,t.jsx)("b",{children:"age"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/inputs/traveller-input",children:(0,t.jsx)(n.code,{children:"TravellerInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,n,s)=>{var t=s(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,r={},d=null,c=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,t)&&!o.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:a,type:e,key:d,ref:c,props:r,_owner:l.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);