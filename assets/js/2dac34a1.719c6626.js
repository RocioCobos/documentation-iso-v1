/*! For license information please see 2dac34a1.719c6626.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31410],{21200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(74848),s=r(28453),o=r(3514),i=r(84142);const a={sidebar_position:1},c="Overview",l={id:"apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/masters/overview",title:"Overview",description:"Master CSV files provide the essential static Inventory information.",source:"@site/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/masters/overview.mdx",sourceDirName:"apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/masters",slug:"/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/masters/overview",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/masters/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/masters/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Quickstart",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/quickstart"},next:{title:"Hotels",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/masters/hotels-master"}},u={},m=[];function p(e){const t={code:"code",h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Master CSV files provide the essential static Inventory information.\nTo effectively manage this data, please familiarise yourself with the ",(0,n.jsx)(t.code,{children:"roomsMaster"})," and ",(0,n.jsx)(t.code,{children:"hotelsMaster"})," files."]}),"\n","\n",(0,n.jsx)(o.A,{items:(0,i.$S)().items.filter(((e,t)=>t>0))})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(96540),s=r(18215),o=r(84142),i=r(28774),a=r(53465),c=r(16654),l=r(21312),u=r(51107);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(i.A,{href:t,className:(0,s.A)("card padding--lg",m.cardContainer)},r)}function d(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(p,{href:t},n.createElement(u.A,{as:"h2",className:(0,s.A)("text--truncate",m.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,s.A)("text--truncate",m.cardDescription),title:i},i))}function f(e){let{item:t}=e;const r=(0,o.Nr)(t),s=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function v(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.cC)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.$S)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,o.d1)(t);return n.createElement("section",{className:(0,s.A)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},53465:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(96540),s=r(44586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);