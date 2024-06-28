/*! For license information please see 6cab1172.7fe011d7.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86778],{51823:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=i(74848),s=i(28453);const r={sidebar_position:6},o="Specific Clients",c={id:"apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/specific-clients",title:"Specific Clients",description:"The Specific Clients file is designed to facilitate the setup of specific clients within the Inventory platform. It's necessary for managing specific client data and relate to the rates created previously.",source:"@site/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/specific-clients.mdx",sourceDirName:"apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up",slug:"/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/specific-clients",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/specific-clients",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/specific-clients.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Policies",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/policies"},next:{title:"Taxes",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/taxes"}},a={},l=[{value:"File Name Format",id:"file-name-format",level:3},{value:"Specific Client",id:"specific-client",level:3},{value:"Sheet Format Example",id:"sheet-format-example",level:4},{value:"CSV Format Example for Channel Managers",id:"csv-format-example-for-channel-managers",level:4}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"specific-clients",children:"Specific Clients"}),"\n",(0,n.jsx)(t.p,{children:"The Specific Clients file is designed to facilitate the setup of specific clients within the Inventory platform. It's necessary for managing specific client data and relate to the rates created previously."}),"\n",(0,n.jsx)(t.p,{children:"If you want to inform that this rate is only for a list of specific clients this is your csv: code (represent your client) and Description (name of the client). You can add maximum 15 clients. The client codes have to be unique on the same rate."}),"\n",(0,n.jsx)(t.h3,{id:"file-name-format",children:"File Name Format"}),"\n",(0,n.jsxs)(t.p,{children:["The file name format for the Specific Client Setup is as follows: ",(0,n.jsx)(t.strong,{children:"clientCode-providerCode-HotelCode#ContextCode-specificclients.csv"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you have any questions about how to add the requested information to create the file name, you can consult the following link:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"../quickstart#3-file-naming-importance-for-travelgatex-ftp-uploads",children:"Importance of the file name for TravelgateX's FTP uploads"})]}),"\n",(0,n.jsx)(t.h3,{id:"specific-client",children:"Specific Client"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Element"}),(0,n.jsx)(t.th,{children:"Mandatory"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rate Code"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Unique identifier that associate this specific client to a unique rate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Code"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Identifier of this specific client."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Descriptions"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Detailed name of the specific client."})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"sheet-format-example",children:"Sheet Format Example"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://storage.travelgate.com/docs/inventory_csv_specificClients-setup.png",alt:"inventory_csv_specificClients-setup"})}),"\n",(0,n.jsx)(t.h4,{id:"csv-format-example-for-channel-managers",children:"CSV Format Example for Channel Managers"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'Rate Code;Code;Descriptions\n"123RATE_TEST";"123_Ctest";"Client test"\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21020:(e,t,i)=>{var n=i(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,i){var n,r={},l=null,d=null;for(n in void 0!==i&&(l=""+i),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!a.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:d,props:r,_owner:c.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);