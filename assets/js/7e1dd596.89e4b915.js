/*! For license information please see 7e1dd596.89e4b915.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68484],{4126:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var o=n(74848),s=n(28453),r=n(96540);const a={id:"hotel-commit-input",title:"HotelCommitInput"},i=void 0,l={id:"types/inputs/hotel-commit-input",title:"HotelCommitInput",description:"No description",source:"@site/api/types/inputs/hotel-commit-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/hotel-commit-input",permalink:"/api/types/inputs/hotel-commit-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-commit-input",title:"HotelCommitInput"},sidebar:"schemaSidebar",previous:{title:"HotelCancelInput",permalink:"/api/types/inputs/hotel-cancel-input"},next:{title:"HotelCriteriaAmendBoardCommitInput",permalink:"/api/types/inputs/hotel-criteria-amend-board-commit-input"}},c={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[l,c]=(0,r.useState)(a);return(0,o.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelCommitInput.<b>accessCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcommitinputaccesscodestring--",level:4},{value:'<code>HotelCommitInput.<b>language</b></code><Bullet></Bullet><code>Language</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcommitinputlanguagelanguage-",level:4},{value:'<code>HotelCommitInput.<b>reference</b></code><Bullet></Bullet><code>HotelXCommitReferenceInput</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcommitinputreferencehotelxcommitreferenceinput-",level:4}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"No description"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"input HotelCommitInput {\n  accessCode: String!\n  language: Language\n  reference: HotelXCommitReferenceInput\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"hotelcommitinputaccesscodestring--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCommitInput.",(0,o.jsx)("b",{children:"accessCode"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(t.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"The name of the access to use in the request."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"hotelcommitinputlanguagelanguage-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCommitInput.",(0,o.jsx)("b",{children:"language"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/language",children:(0,o.jsx)(t.code,{children:"Language"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"The language code."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"hotelcommitinputreferencehotelxcommitreferenceinput-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCommitInput.",(0,o.jsx)("b",{children:"reference"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/types/inputs/hotel-xcommit-reference-input",children:(0,o.jsx)(t.code,{children:"HotelXCommitReferenceInput"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Contains the supplier reference that has been returned in Book response."}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},21020:(e,t,n)=>{var o=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,r={},c=null,d=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,o)&&!l.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:i.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(96540);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);