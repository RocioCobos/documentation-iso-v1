/*! For license information please see e30271c6.deacb112.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4162],{45981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(74848),i=n(28453),o=n(3514),l=n(84142);const s={sidebar_position:1},a="Overview",c={id:"apps/distribution/files/overview",title:"Overview",description:"i > 0)}/>",source:"@site/docs/apps/distribution/files/overview.mdx",sourceDirName:"apps/distribution/files",slug:"/apps/distribution/files/overview",permalink:"/docs/apps/distribution/files/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/files/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Agencies",permalink:"/docs/apps/distribution/extranet/agencies"},next:{title:"Mapping",permalink:"/docs/apps/distribution/files/mapping-files/mapping"}},d={},u=[{value:"FTP Files",id:"ftp-files",level:2},{value:"FTP Endpoint",id:"ftp-endpoint",level:3},{value:"Directory Format",id:"directory-format",level:3},{value:"Upload FTP Data",id:"upload-ftp-data",level:3},{value:"Update FTP Data",id:"update-ftp-data",level:3},{value:"Delete FTP Data",id:"delete-ftp-data",level:3}];function p(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{BrowserWindow:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n","\n",(0,r.jsx)(o.A,{items:(0,l.$S)().items.filter(((e,t)=>t>0))}),"\n",(0,r.jsx)(t.h2,{id:"ftp-files",children:"FTP Files"}),"\n",(0,r.jsxs)(t.p,{children:["Upon receiving your Onboarding Welcome Pack, you will be granted access credentials to the FTP server. In the event that you need assistance or have not received your credentials, kindly open a ",(0,r.jsx)(t.a,{href:"https://app.travelgatex.com/tickets",children:"ticket"})," to our Customer Care team to obtain your FTP credentials and initiate your journey."]}),"\n",(0,r.jsx)(t.h3,{id:"ftp-endpoint",children:"FTP Endpoint"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"ftp://ftp.xmltravelgate.com\n"})}),"\n",(0,r.jsx)(t.h3,{id:"directory-format",children:"Directory Format"}),"\n",(0,r.jsx)(t.p,{children:"The structure of the directory should be in the below format, all files should be inside this directory:"}),"\n",(0,r.jsx)(n,{children:(0,r.jsxs)(t.p,{children:["\ud83d\udcc1F[Folder code]_[Unique code]",(0,r.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0 \ud83d\udcc1HotelX  _[Unique code]"]})}),"\n",(0,r.jsx)(t.p,{children:"F[Folder code]_[Unique code]"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Folder code: corresponds to the folder number."}),"\n",(0,r.jsx)(t.li,{children:"Unique code: corresponds to the folder unique code in our system."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"HotelX_[Unique code]"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Unique code: corresponds to the Hotel-X unique code in our system."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(n,{children:(0,r.jsxs)(t.p,{children:["\ud83d\udcc1F0_1781",(0,r.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0 \ud83d\udcc1HotelX_1790"]})}),"\n",(0,r.jsx)(t.h3,{id:"upload-ftp-data",children:"Upload FTP Data"}),"\n",(0,r.jsx)(t.p,{children:"To upload an FTP file, follow these simple steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Upload the File:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Once you've decided on the plugin you want to use, and if it's necessary, simply upload the required CSV file."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Wait for Processing:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Once you've uploaded the file, our system will take care of the rest."}),"\n",(0,r.jsx)(t.li,{children:'We\'ll automatically add the "_processed" tagline to the end of the file name when the processing is complete.'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For example, if you uploaded a file for hotel mapping plugin with the name:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"BuyerContext_SupplierContext_hotel_map_.csv\n"})}),"\n",(0,r.jsx)(t.p,{children:"After our system processes it, it will look like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"BuyerContext_SupplierContext_hotel_map_processed.csv\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"update-ftp-data",children:"Update FTP Data"}),"\n",(0,r.jsx)(t.p,{children:"To update an FTP file, follow these simple steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"If you need to update the information in the file, simply delete the old file."}),"\n",(0,r.jsxs)(t.li,{children:["Upload the new file with the updated information, using the correct name. You don't need to add the \"",(0,r.jsx)(t.em,{children:"processed"}),"\" tagline to the name; we'll take care of that on our end."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"That's it! Updating FTP files is as easy as that."}),"\n",(0,r.jsx)(t.h3,{id:"delete-ftp-data",children:"Delete FTP Data"}),"\n",(0,r.jsx)(t.p,{children:"To delete all the information stored in our system, follow these straightforward steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Prepare an empty file:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create a new file with empty content, including only the headers."}),"\n",(0,r.jsx)(t.li,{children:"Ensure that the file structure, such as column headers, remains intact."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Load the empty file in the FTP folder."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"That's it! By replacing the existing data with an empty file containing headers only, you effectively delete all the information previously loaded into our system."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),i=n(18215),o=n(84142),l=n(28774),s=n(53465),a=n(16654),c=n(21312),d=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return r.createElement(l.A,{href:t,className:(0,i.A)("card padding--lg",u.cardContainer)},n)}function h(e){let{href:t,icon:n,title:o,description:l}=e;return r.createElement(p,{href:t},r.createElement(d.A,{as:"h2",className:(0,i.A)("text--truncate",u.cardTitle),title:o},n," ",o),l&&r.createElement("p",{className:(0,i.A)("text--truncate",u.cardDescription),title:l},l))}function f(e){let{item:t}=e;const n=(0,o.Nr)(t),i=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function m(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(t.docId??void 0);return r.createElement(h,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,o.$S)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(j,e);const l=(0,o.d1)(t);return r.createElement("section",{className:(0,i.A)("row",n)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(x,{item:e})))))}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(96540),i=n(44586);const o=["zero","one","two","few","many","other"];function l(e){return o.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,t,e)}}},21020:(e,t,n)=>{var r=n(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const i={},o=r.createContext(i);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);