/*! For license information please see ce061764.7fd84242.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65067],{76663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(74848),i=r(28453),s=r(3514),o=r(84142);const l={sidebar_position:1},a="Overview",c={id:"apps/distribution/files/rules-files/overview",title:"Overview",description:"In addition to using the Distribution extranet, it's also possible to manage all the rules, pricing rules, filters, blacklists, etc., through files.",source:"@site/docs/apps/distribution/files/rules-files/overview.mdx",sourceDirName:"apps/distribution/files/rules-files",slug:"/apps/distribution/files/rules-files/overview",permalink:"/docs/apps/distribution/files/rules-files/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/files/rules-files/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Providers",permalink:"/docs/apps/distribution/files/master-files/providers"},next:{title:"General Rules",permalink:"/docs/apps/distribution/files/rules-files/general-rules"}},u={},d=[];function f(e){const t={a:"a",h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"In addition to using the Distribution extranet, it's also possible to manage all the rules, pricing rules, filters, blacklists, etc., through files."}),"\n",(0,n.jsxs)(t.p,{children:["Note that for these rules to work, you'll first need to create the ",(0,n.jsx)(t.a,{href:"../mapping-files/mapping",children:"Mapping"})," and ",(0,n.jsx)(t.a,{href:"../master-files/overview",children:"Master files"}),"."]}),"\n","\n",(0,n.jsx)(s.A,{items:(0,o.$S)().items.filter(((e,t)=>t>0))})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(96540),i=r(18215),s=r(84142),o=r(28774),l=r(53465),a=r(16654),c=r(21312),u=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:r}=e;return n.createElement(o.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer)},r)}function p(e){let{href:t,icon:r,title:s,description:o}=e;return n.createElement(f,{href:t},n.createElement(u.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:s},r," ",s),o&&n.createElement("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:o},o))}function m(e){let{item:t}=e;const r=(0,s.Nr)(t),i=function(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,s.$S)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(v,e);const o=(0,s.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},53465:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(96540),i=r(44586);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=r.select(t),s=r.pluralForms.indexOf(i);return n[Math.min(s,n.length-1)]}(r,t,e)}}},21020:(e,t,r)=>{var n=r(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:u,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);