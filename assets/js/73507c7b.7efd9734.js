/*! For license information please see 73507c7b.7efd9734.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19371],{77859:(e,r,o)=>{o.r(r),o.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>f,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var n=o(74848),t=o(28453),a=o(96540);const c={id:"ferry-offer-book",title:"FerryOfferBook",hide_table_of_contents:!1},s=void 0,d={id:"objects/ferry-offer-book",title:"FerryOfferBook",description:"No description",source:"@site/api/objects/ferry-offer-book.mdx",sourceDirName:"objects",slug:"/objects/ferry-offer-book",permalink:"/api/objects/ferry-offer-book",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ferry-offer-book",title:"FerryOfferBook",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FerryLocation",permalink:"/api/objects/ferry-location"},next:{title:"FerryOfferData",permalink:"/api/objects/ferry-offer-data"}},i={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const r={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:r,children:o,startOpen:c=!1})=>{const s={details:"details",summary:"summary",...(0,t.R)()},[d,i]=(0,a.useState)(c);return(0,n.jsxs)(s.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(s.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&o]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>FerryOfferBook.<b>journey</b></code><Bullet></Bullet><code>Journey</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryofferbookjourneyjourney-",level:4},{value:'<code>FerryOfferBook.<b>accommodation</b></code><Bullet></Bullet><code>FerryAccommodation</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryofferbookaccommodationferryaccommodation-",level:4},{value:"Member of",id:"member-of",level:3}];function p(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"No description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type FerryOfferBook {\n  journey: Journey\n  accommodation: FerryAccommodation\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"ferryofferbookjourneyjourney-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOfferBook.",(0,n.jsx)("b",{children:"journey"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/objects/journey",children:(0,n.jsx)(r.code,{children:"Journey"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Journey details."}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"ferryofferbookaccommodationferryaccommodation-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOfferBook.",(0,n.jsx)("b",{children:"accommodation"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/objects/ferry-accommodation",children:(0,n.jsx)(r.code,{children:"FerryAccommodation"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"i.e. Seat, Cabin, etc."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/objects/ferry-order-payload",children:(0,n.jsx)(r.code,{children:"FerryOrderPayload"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},21020:(e,r,o)=>{var n=o(96540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,o){var n,a={},i=null,l=null;for(n in void 0!==o&&(i=""+o),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!d.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:t,type:e,key:i,ref:l,props:a,_owner:s.current}}r.Fragment=a,r.jsx=i,r.jsxs=i},74848:(e,r,o)=>{e.exports=o(21020)},28453:(e,r,o)=>{o.d(r,{R:()=>c,x:()=>s});var n=o(96540);const t={},a=n.createContext(t);function c(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);