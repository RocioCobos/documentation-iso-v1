/*! For license information please see 743602d7.e85dac1c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52096],{87162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=r(74848),n=r(28453),l=r(3514),s=r(84142);const i={sidebar_position:1},a="Overview",c={id:"apis/for-sellers/hotel-pull-sellers-api/booking-flow/overview",title:"Overview",description:"In order to book a hotel room, booking flow methods must be executed sequentially: Avail, Valuation and Reservation.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/overview.mdx",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/booking-flow",slug:"/apis/for-sellers/hotel-pull-sellers-api/booking-flow/overview",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/configuration"},next:{title:"Avail",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/avail"}},u={},d=[];function m(e){const t={code:"code",h1:"h1",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(t.p,{children:["In order to book a hotel room, booking flow methods must be executed sequentially: ",(0,o.jsx)(t.code,{children:"Avail"}),", ",(0,o.jsx)(t.code,{children:"Valuation"})," and ",(0,o.jsx)(t.code,{children:"Reservation"}),"."]}),"\n","\n",(0,o.jsx)(l.A,{items:(0,s.$S)().items.filter(((e,t)=>t>0))})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>w});var o=r(96540),n=r(18215),l=r(84142),s=r(28774),i=r(53465),a=r(16654),c=r(21312),u=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return o.createElement(s.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer)},r)}function p(e){let{href:t,icon:r,title:l,description:s}=e;return o.createElement(m,{href:t},o.createElement(u.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:l},r," ",l),s&&o.createElement("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s},s))}function f(e){let{item:t}=e;const r=(0,l.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?o.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,l.cC)(t.docId??void 0);return o.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,l.$S)();return o.createElement(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return o.createElement(v,e);const s=(0,l.d1)(t);return o.createElement("section",{className:(0,n.A)("row",r)},s.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(g,{item:e})))))}},53465:(e,t,r)=>{r.d(t,{W:()=>c});var o=r(96540),n=r(44586);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const o=e.split("|");if(1===o.length)return o[0];o.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return o[Math.min(l,o.length-1)]}(r,t,e)}}},21020:(e,t,r)=>{var o=r(96540),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,l={},c=null,u=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,o)&&!a.hasOwnProperty(o)&&(l[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===l[o]&&(l[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:u,props:l,_owner:i.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var o=r(96540);const n={},l=o.createContext(n);function s(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);