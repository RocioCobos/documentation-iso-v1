/*! For license information please see 89e56d93.9b4aa9b9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87722],{54448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(74848),i=r(28453),o=r(3514),s=r(84142);const a={sidebar_position:1},l="Overview",c={id:"apps/distribution/files/master-files/overview",title:"Overview",description:"Distribution Master files contain the product you will buy and sell in our Marketplace. It is necessary to create these files to add information to the Distribution extranet; the rules you will later apply on the website will be derived from this data.",source:"@site/docs/apps/distribution/files/master-files/overview.mdx",sourceDirName:"apps/distribution/files/master-files",slug:"/apps/distribution/files/master-files/overview",permalink:"/docs/apps/distribution/files/master-files/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/files/master-files/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Mapping",permalink:"/docs/apps/distribution/files/mapping-files/mapping"},next:{title:"Hotels",permalink:"/docs/apps/distribution/files/master-files/hotels"}},u={},d=[];function m(e){const t={a:"a",h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Distribution Master files contain the product you will buy and sell in our Marketplace. It is necessary to create these files to add information to the Distribution extranet; the rules you will later apply on the website will be derived from this data."}),"\n",(0,n.jsxs)(t.p,{children:["Please note that creating and uploading the ",(0,n.jsx)(t.a,{href:"hotels",children:"Hotels Master file"})," is mandatory for working with Distribution."]}),"\n","\n",(0,n.jsx)(o.A,{items:(0,s.$S)().items.filter(((e,t)=>t>0))})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),i=r(18215),o=r(84142),s=r(28774),a=r(53465),l=r(16654),c=r(21312),u=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return n.createElement(s.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:s}=e;return n.createElement(m,{href:t},n.createElement(u.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:o},r," ",o),s&&n.createElement("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:s},s))}function f(e){let{item:t}=e;const r=(0,o.Nr)(t),i=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.$S)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const s=(0,o.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},53465:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(96540),i=r(44586);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=r.select(t),o=r.pluralForms.indexOf(i);return n[Math.min(o,n.length-1)]}(r,t,e)}}},21020:(e,t,r)=>{var n=r(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);