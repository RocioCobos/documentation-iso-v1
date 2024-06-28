/*! For license information please see a8dee42f.e929d8fd.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14618],{13428:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>b});var r=t(74848),o=t(28453),s=t(96540);const a={id:"phone-input",title:"PhoneInput",hide_table_of_contents:!1},i=void 0,c={id:"inputs/phone-input",title:"PhoneInput",description:"Phone number accomplishing standard E.164 (Max. 15 digits) Example: +16175551212",source:"@site/api/inputs/phone-input.mdx",sourceDirName:"inputs",slug:"/inputs/phone-input",permalink:"/api/inputs/phone-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"phone-input",title:"PhoneInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PetInput",permalink:"/api/inputs/pet-input"},next:{title:"PluginStepInput",permalink:"/api/inputs/plugin-step-input"}},d={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,o.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,o.R)()},[c,d]=(0,s.useState)(a);return(0,r.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>PhoneInput.<b>countryCode</b></code><Bullet></Bullet><code>DialingCountryCode!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"phoneinputcountrycodedialingcountrycode--",level:4},{value:'<code>PhoneInput.<b>number</b></code><Bullet></Bullet><code>PhoneSubscriberNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"phoneinputnumberphonesubscribernumber--",level:4},{value:"Member of",id:"member-of",level:3}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Phone number accomplishing standard E.164 (Max. 15 digits) Example: +16175551212"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input PhoneInput {\n  countryCode: DialingCountryCode!\n  number: PhoneSubscriberNumber!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"phoneinputcountrycodedialingcountrycode--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["PhoneInput.",(0,r.jsx)("b",{children:"countryCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/dialing-country-code",children:(0,r.jsx)(n.code,{children:"DialingCountryCode!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The combination of one, two or three digits identifying a specific country, countries in an integrated numbering plan, or a specific geographic area (1 to 3 digits)"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"phoneinputnumberphonesubscribernumber--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["PhoneInput.",(0,r.jsx)("b",{children:"number"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/phone-subscriber-number",children:(0,r.jsx)(n.code,{children:"PhoneSubscriberNumber!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Identifies a subscriber for a particular global service"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/inputs/contact-info-input",children:(0,r.jsx)(n.code,{children:"ContactInfoInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);