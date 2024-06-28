/*! For license information please see 22204e6c.9019b693.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41973],{60880:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=s(74848),o=s(28453),t=s(96540);const r={id:"bookable-option-search",title:"BookableOptionSearch"},c=void 0,i={id:"types/interfaces/bookable-option-search",title:"BookableOptionSearch",description:"No description",source:"@site/api/types/interfaces/bookable-option-search.mdx",sourceDirName:"types/interfaces",slug:"/types/interfaces/bookable-option-search",permalink:"/api/types/interfaces/bookable-option-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"bookable-option-search",title:"BookableOptionSearch"},sidebar:"schemaSidebar",previous:{title:"VirtualCreditCardInput",permalink:"/api/types/inputs/virtual-credit-card-input"},next:{title:"GroupCommonData",permalink:"/api/types/interfaces/group-common-data"}},l={},d=()=>{const e={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,o.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:n,children:s,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,o.R)()},[i,l]=(0,t.useState)(r);return(0,a.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>BookableOptionSearch.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearchsuppliercodestring--",level:4},{value:'<code>BookableOptionSearch.<b>accessCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearchaccesscodestring--",level:4},{value:'<code>BookableOptionSearch.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearchidstring--",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"interface BookableOptionSearch {\n  supplierCode: String!\n  accessCode: String!\n  id: String!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"bookableoptionsearchsuppliercodestring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookableOptionSearch.",(0,a.jsx)("b",{children:"supplierCode"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Supplier that offers this option."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"bookableoptionsearchaccesscodestring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookableOptionSearch.",(0,a.jsx)("b",{children:"accessCode"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Access code of this option."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"bookableoptionsearchidstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookableOptionSearch.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Indicates the id to be used on Quote as key"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/types/objects/hotel-option-search",children:(0,a.jsx)(n.code,{children:"HotelOptionSearch"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},21020:(e,n,s)=>{var a=s(96540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var a,t={},l=null,d=null;for(a in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,a)&&!i.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:o,type:e,key:l,ref:d,props:t,_owner:c.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var a=s(96540);const o={},t=a.createContext(o);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);