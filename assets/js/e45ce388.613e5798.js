/*! For license information please see e45ce388.613e5798.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42724],{520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),o=n(28453);const i={sidebar_position:3},s="How to retrieve Seller transactions",a={id:"apps/monitoring-apps/logging/how-can-i-receive-seller-transactions-in-their-api-format",title:"How to retrieve Seller transactions",description:"How can I obtain the Seller transactions of my request?\ud83d\udd0e",source:"@site/kb/apps/monitoring-apps/logging/how-can-i-receive-seller-transactions-in-their-api-format.md",sourceDirName:"apps/monitoring-apps/logging",slug:"/apps/monitoring-apps/logging/how-can-i-receive-seller-transactions-in-their-api-format",permalink:"/kb/apps/monitoring-apps/logging/how-can-i-receive-seller-transactions-in-their-api-format",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"kbSidebar",previous:{title:"How to download Search logs",permalink:"/kb/apps/monitoring-apps/logging/how-can-i-download-search-logs"},next:{title:"The 'tgx_sess' parameter",permalink:"/kb/apps/monitoring-apps/logging/what-is-the-tgx-sess-parameter"}},l={},c=[{value:"How can I obtain the Seller transactions of my request?\ud83d\udd0e",id:"how-can-i-obtain-the-seller-transactions-of-my-request",level:3},{value:"Application and recommendations on the &quot;auditTransactions&quot; field\ud83d\udca1",id:"application-and-recommendations-on-the-audittransactions-field",level:3},{value:"How can I set the &quot;auditTransactions&quot; field in my Hotel-X Pull Buyers API request?",id:"how-can-i-set-the-audittransactions-field-in-my-hotel-x-pull-buyers-api-request",level:3},{value:"How can I set the &quot;registerTransactions&quot; field in my Legacy Pull Buyers API request?\ud83d\ude80",id:"how-can-i-set-the-registertransactions-field-in-my-legacy-pull-buyers-api-request",level:3},{value:"Seller transactions through Stats and Logging APPs\u2705",id:"seller-transactions-through-stats-and-logging-apps",level:3}];function d(e){const t={admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to-retrieve-seller-transactions",children:"How to retrieve Seller transactions"}),"\n",(0,r.jsx)(t.h3,{id:"how-can-i-obtain-the-seller-transactions-of-my-request",children:"How can I obtain the Seller transactions of my request?\ud83d\udd0e"}),"\n",(0,r.jsx)(t.p,{children:'By adding the "auditTransactions" field to your queries and mutations you will be able to obtain, packed in the response, TravelgateX transactions with the Seller (both the raw request and response).'}),"\n",(0,r.jsx)(t.h3,{id:"application-and-recommendations-on-the-audittransactions-field",children:'Application and recommendations on the "auditTransactions" field\ud83d\udca1'}),"\n",(0,r.jsx)(t.p,{children:"Even though it is a great feature to add to all your Booking Flow and Booking Management methods, make sure you follow the recommendations below:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Search:"}),' Make sure you don\'t set the "auditTransactions" value to "true" by default, otherwise the responses will be too heavy and it will affect the API performance.']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Other methods:"}),' You can set it to "true" in order to receive the raw request and response to the Seller and, if an error is returned, know where it is coming from.']}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["If you encounter an error, you have the option to ",(0,r.jsx)(t.strong,{children:"temporarily"}),' set the "auditTransactions" value to "true" in Search. This will provide you with additional information regarding the Seller\'s response.']})}),"\n",(0,r.jsx)(t.h3,{id:"how-can-i-set-the-audittransactions-field-in-my-hotel-x-pull-buyers-api-request",children:'How can I set the "auditTransactions" field in my Hotel-X Pull Buyers API request?'}),"\n",(0,r.jsx)(t.p,{children:'In order to set the "auditTransactions" field in your Hotel-X Search request, you should configure both your Query and Query variables according to the following information:'}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Hotel-X Query:"}),(0,r.jsx)(t.br,{}),"\n",'You should add the "auditTransactions" field to your HotelSettingsInput as follows:']}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/logging_audit_transactions_1.jpg",alt:"logging_audit_transactions_1"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"query ($criteriaSearch: HotelCriteriaSearchInput, $settings: HotelSettingsInput, $filterSearch: HotelXFilterSearchInput) {\n  hotelX {\n    search (criteria: $criteriaSearch, settings: $settings, filterSearch: $filterSearch) {\n      auditData{\n        transactions{\n          request\n          response\n        }\n      },\n      context\n      options {\n\n...\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Hotel-X Query variables:"}),(0,r.jsx)(t.br,{}),"\n",'You should add the "auditTransactions" field to your Query settings as follows:']}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'...\n\n    "settings": {\n        "timeout": 24700,\n        "context": "contextCode",\n        "client": "clientName",\n        "testMode": false,\n        "auditTransactions": true\n    },\n\n...\n'})}),"\n",(0,r.jsx)(t.admonition,{title:"Important:",type:"note",children:(0,r.jsxs)(t.p,{children:["Please note that in order to receive the transactions with the Seller the auditTransactions information should be ",(0,r.jsx)(t.strong,{children:"declared both in your Query and Query variables"}),", otherwise, these transactions won't be returned."]})}),"\n",(0,r.jsx)(t.h3,{id:"how-can-i-set-the-registertransactions-field-in-my-legacy-pull-buyers-api-request",children:'How can I set the "registerTransactions" field in my Legacy Pull Buyers API request?\ud83d\ude80'}),"\n",(0,r.jsx)(t.p,{children:'In order to set the "registerTransactions" field in your Legacy methods, you should add the filterAuditData information (registerTransactions) into your main method request:'}),"\n",(0,r.jsx)(t.p,{children:"Method request:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/logging_audit_transactions_2.jpg",alt:"logging_audit_transactions_2"})}),"\n",(0,r.jsxs)(t.p,{children:["Method response:",(0,r.jsx)(t.br,{}),"\n",'You will receive the Seller\'s transactions within the "auditData" tag.']}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/logging_audit_transactions_3.jpg",alt:"logging_audit_transactions_3"})}),"\n",(0,r.jsx)(t.h3,{id:"seller-transactions-through-stats-and-logging-apps",children:"Seller transactions through Stats and Logging APPs\u2705"}),"\n",(0,r.jsxs)(t.p,{children:["You can easily download logs of past transactions using our Stats and Logging APPs, except for Search logs as they are not saved by default.\nPlease make sure to use the ",(0,r.jsx)(t.strong,{children:'"AuditTransactions" or "RegisterTransactions"'})," in Search only for testing purposes. Utilizing them in a live environment may overload the system or cause longer response times."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var r=n(96540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);