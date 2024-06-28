/*! For license information please see 72c95451.4cef161a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78145],{17616:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var d=t(74848),s=t(28453),o=t(96540);const a={id:"add-ons",title:"AddOns",hide_table_of_contents:!1},r=void 0,i={id:"objects/add-ons",title:"AddOns",description:"Additional information about the option from Distribution-X.",source:"@site/api/objects/add-ons.mdx",sourceDirName:"objects",slug:"/objects/add-ons",permalink:"/api/objects/add-ons",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"add-ons",title:"AddOns",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddOn",permalink:"/api/objects/add-on"},next:{title:"AdminMutation",permalink:"/api/objects/admin-mutation"}},c={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const n={a:"a",...(0,s.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[i,c]=(0,o.useState)(a);return(0,d.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AddOns.<b>distribute</b></code><Bullet></Bullet><code>JSON</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addonsdistributejson--",level:4},{value:'<code>AddOns.<b>distribution</b></code><Bullet></Bullet><code>[AddOn!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addonsdistributionaddon--",level:4},{value:"Member of",id:"member-of",level:3}];function j(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Additional information about the option from Distribution-X."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",children:"type AddOns {\n  distribute: JSON @deprecated\n  distribution: [AddOn!]\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(n.h4,{id:"addonsdistributejson--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddOns.",(0,d.jsx)("b",{children:"distribute"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/api/scalars/json",children:(0,d.jsx)(n.code,{children:"JSON"})})," ",(0,d.jsx)(u,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.admonition,{title:"DEPRECATED",type:"caution",children:(0,d.jsx)(n.p,{children:"deprecated from 2018-05-21. You can find it in distribution AddOn"})}),"\n",(0,d.jsx)(n.p,{children:"Extra information from the Distribution layer."}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"addonsdistributionaddon--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddOns.",(0,d.jsx)("b",{children:"distribution"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/api/objects/add-on",children:(0,d.jsx)(n.code,{children:"[AddOn!]"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Extra information from the Distribution layer."}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/api/objects/hotel-booking-detail",children:(0,d.jsx)(n.code,{children:"HotelBookingDetail"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/api/objects/hotel-option-quote",children:(0,d.jsx)(n.code,{children:"HotelOptionQuote"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(l,{}),(0,d.jsx)(n.a,{href:"/api/objects/hotel-option-search",children:(0,d.jsx)(n.code,{children:"HotelOptionSearch"})})," ",(0,d.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},21020:(e,n,t)=>{var d=t(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var d,o={},c=null,l=null;for(d in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,d)&&!i.hasOwnProperty(d)&&(o[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===o[d]&&(o[d]=n[d]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:r.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var d=t(96540);const s={},o=d.createContext(s);function a(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);