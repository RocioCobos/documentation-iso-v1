/*! For license information please see c41c0c09.bbc7eba0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24184],{62437:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>h,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>y});var n=t(74848),s=t(28453),o=t(96540);const a={id:"property",title:"Property",hide_table_of_contents:!1},c=void 0,l={id:"objects/property",title:"Property",description:"Indicates Property type",source:"@site/api/objects/property.mdx",sourceDirName:"objects",slug:"/objects/property",permalink:"/api/objects/property",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"property",title:"Property",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PropertyType",permalink:"/api/objects/property-type"},next:{title:"ProviderData",permalink:"/api/objects/provider-data"}},i={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const r={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:r,children:t,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[l,i]=(0,o.useState)(a);return(0,n.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:r}),l&&t]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>Property.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"propertynamestring-",level:4},{value:'<code>Property.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"propertycodestring-",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Indicates Property type"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type Property {\n  name: String\n  code: String\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"propertynamestring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Property.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Indicates property type"}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"propertycodestring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Property.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Indicates property type code"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/objects/hotel-data",children:(0,n.jsx)(r.code,{children:"HotelData"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,o={},i=null,d=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:i,ref:d,props:o,_owner:c.current}}r.Fragment=o,r.jsx=i,r.jsxs=i},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);