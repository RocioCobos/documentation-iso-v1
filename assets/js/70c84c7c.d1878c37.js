/*! For license information please see 70c84c7c.d1878c37.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27434],{58828:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>b,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=t(74848),d=t(28453),o=t(96540);const r={id:"metadata-amend-board",title:"MetadataAmendBoard",hide_table_of_contents:!1},s=void 0,l={id:"objects/metadata-amend-board",title:"MetadataAmendBoard",description:"No description",source:"@site/api/objects/metadata-amend-board.mdx",sourceDirName:"objects",slug:"/objects/metadata-amend-board",permalink:"/api/objects/metadata-amend-board",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"metadata-amend-board",title:"MetadataAmendBoard",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Members",permalink:"/api/objects/members"},next:{title:"MetadataAmendDates",permalink:"/api/objects/metadata-amend-dates"}},c={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const a={a:"a",...(0,d.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const a={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:a,children:t,startOpen:r=!1})=>{const s={details:"details",summary:"summary",...(0,d.R)()},[l,c]=(0,o.useState)(r);return(0,n.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&t]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>MetadataAmendBoard.<b>allowsAmendBoard</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataamendboardallowsamendboardreviewedbool--",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type MetadataAmendBoard {\n  allowsAmendBoard: ReviewedBool!\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"metadataamendboardallowsamendboardreviewedbool--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataAmendBoard.",(0,n.jsx)("b",{children:"allowsAmendBoard"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/objects/reviewed-bool",children:(0,n.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/objects/metadata-data",children:(0,n.jsx)(a.code,{children:"MetadataData"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,a,t)=>{var n=t(96540),d=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var n,o={},c=null,i=null;for(n in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(i=a.ref),a)r.call(a,n)&&!l.hasOwnProperty(n)&&(o[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:d,type:e,key:c,ref:i,props:o,_owner:s.current}}a.Fragment=o,a.jsx=c,a.jsxs=c},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>s});var n=t(96540);const d={},o=n.createContext(d);function r(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);