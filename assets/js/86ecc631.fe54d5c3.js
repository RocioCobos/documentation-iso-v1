/*! For license information please see 86ecc631.fe54d5c3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80562],{4751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(74848),i=n(28453),o=n(3514),s=n(84142);const a={title:"Overview",sidebar_position:1},c="Configuration Overview",l={id:"apps/distribution/extranet/general-settings/configuration/overview",title:"Overview",description:"The Configuration Rules are grouped according to which areas they affect:",source:"@site/docs/apps/distribution/extranet/general-settings/configuration/overview.mdx",sourceDirName:"apps/distribution/extranet/general-settings/configuration",slug:"/apps/distribution/extranet/general-settings/configuration/overview",permalink:"/docs/apps/distribution/extranet/general-settings/configuration/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/extranet/general-settings/configuration/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apps/distribution/extranet/overview"},next:{title:"Pricing",permalink:"/docs/apps/distribution/extranet/general-settings/configuration/pricing"}},u={},d=[];function m(e){const t={h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"configuration-overview",children:"Configuration Overview"}),"\n",(0,r.jsx)(t.p,{children:"The Configuration Rules are grouped according to which areas they affect:"}),"\n","\n",(0,r.jsx)(o.A,{items:(0,s.$S)().items.filter(((e,t)=>t>0))})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(18215),o=n(84142),s=n(28774),a=n(53465),c=n(16654),l=n(21312),u=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(s.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:s}=e;return r.createElement(m,{href:t},r.createElement(u.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:o},n," ",o),s&&r.createElement("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:s},s))}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),i=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,o.$S)();return r.createElement(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const s=(0,o.d1)(t);return r.createElement("section",{className:(0,i.A)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),i=n(44586);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,t,e)}}},21020:(e,t,n)=>{var r=n(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);