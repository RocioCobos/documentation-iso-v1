/*! For license information please see 75cb7a83.acd1eb99.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14715],{34143:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var o=n(74848),r=n(28453),a=n(96540);const i={id:"hotel-runtime-configuration-data",title:"HotelRuntimeConfigurationData",hide_table_of_contents:!1},s=void 0,l={id:"objects/hotel-runtime-configuration-data",title:"HotelRuntimeConfigurationData",description:"No description",source:"@site/api/objects/hotel-runtime-configuration-data.mdx",sourceDirName:"objects",slug:"/objects/hotel-runtime-configuration-data",permalink:"/api/objects/hotel-runtime-configuration-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-runtime-configuration-data",title:"HotelRuntimeConfigurationData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelQuote",permalink:"/api/objects/hotel-quote"},next:{title:"HotelRuntimeConfiguration",permalink:"/api/objects/hotel-runtime-configuration"}},c={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,r.R)()},[l,c]=(0,a.useState)(i);return(0,o.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelRuntimeConfigurationData.<b>hotelRuntimeParameters</b></code><Bullet></Bullet><code>[HotelRuntimeParameter!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelruntimeconfigurationdatahotelruntimeparametershotelruntimeparameter--",level:4},{value:"Member of",id:"member-of",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"No description"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"type HotelRuntimeConfigurationData {\n  hotelRuntimeParameters: [HotelRuntimeParameter!]!\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"hotelruntimeconfigurationdatahotelruntimeparametershotelruntimeparameter--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelRuntimeConfigurationData.",(0,o.jsx)("b",{children:"hotelRuntimeParameters"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/objects/hotel-runtime-parameter",children:(0,o.jsx)(t.code,{children:"[HotelRuntimeParameter!]!"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"List of parameters object"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/api/objects/hotel-runtime-configuration",children:(0,o.jsx)(t.code,{children:"HotelRuntimeConfiguration"})})," ",(0,o.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},21020:(e,t,n)=>{var o=n(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,a={},c=null,d=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:d,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);