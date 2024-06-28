/*! For license information please see ff5f52f0.fad20fcd.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54681],{42822:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var l=s(74848),a=s(28453);const t={sidebar_position:7},r="Meal Plan List",o={id:"apis/for-sellers/hotel-pull-sellers-api/content/meal-plan-list",title:"Meal Plan List",description:"The Meal Plan List method returns a comprehensive meal plans list from a supplier's access that may include translations to other languages, granting access to all the meal plans configured by the Seller for a given set of credentials. The returned fields include: MealPlan code, MealPlan name etc.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/content/meal-plan-list.mdx",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/content",slug:"/apis/for-sellers/hotel-pull-sellers-api/content/meal-plan-list",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/meal-plan-list",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/content/meal-plan-list.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Room List",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/room-list"},next:{title:"Category List",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/category-list"}},i={},d=[{value:"MealPlanList Request",id:"mealplanlist-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"MealPlanList Response",id:"mealplanlist-response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"meal-plan-list",children:"Meal Plan List"}),"\n",(0,l.jsxs)(n.p,{children:["The Meal Plan List method returns a comprehensive meal plans list from a supplier's access that may include translations to other languages, granting access to all the meal plans configured by the Seller for a given set of credentials. The returned fields include: ",(0,l.jsx)(n.code,{children:"MealPlan code"}),", ",(0,l.jsx)(n.code,{children:"MealPlan name"})," etc."]}),"\n",(0,l.jsx)(n.h2,{id:"mealplanlist-request",children:"MealPlanList Request"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:MealPlanList>\n         <ns:mealPlanListRQ>\n            <ns:timeoutMilliseconds>20000</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <MealPlanListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                     <timeoutMilliseconds>19700</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n                           <Parameter key = "Access" value = "22334"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                  </MealPlanListRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:mealPlanListRQ>\n      </ns:MealPlanList>\n   </soapenv:Body>\n</soapenv:Envelope>\n'})}),"\n",(0,l.jsx)(n.h3,{id:"request-data-breakdown",children:"Request Data Breakdown"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"MealPlanList"})," request does not require any elements."]}),"\n",(0,l.jsx)(n.h2,{id:"mealplanlist-response",children:"MealPlanList Response"}),"\n",(0,l.jsxs)(n.p,{children:["After each request, you will have to process the data and provide a response. Upon receiving a ",(0,l.jsx)(n.code,{children:"MealPlanList"})," request, you will need to send a corresponding ",(0,l.jsx)(n.code,{children:"MealPlanList"})," response."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"If you have over 100 meal plan codes or more than 20 codes for a single meal plan, the mapping for these codes will depend on you."})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<MealPlanListRS>\n   <UpgradeUTCDate>2023-10-18T13:18:03+02:00</UpgradeUTCDate>\n   <MealPlans>\n      <MealPlan>\n         <Code>BB</Code>\n         <Name>Bed and breakfast</Name>\n      </MealPlan>\n      <MealPlan>\n         <Code>HB</Code>\n         <Name>Half board</Name>\n      </MealPlan>\n    </MealPlans>\n</MealPlanListRS>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"response-data-breakdown",children:"Response Data Breakdown"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Element"}),(0,l.jsx)(n.th,{children:"Rel"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MealPlanListRS/UpgradeUTCDate"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"DateTime"}),(0,l.jsx)(n.td,{children:"Indicates the update date of the information in UTC format."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MealPlanListRS/MealPlans"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"Root node, list of mealplans."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MealPlans/MealPlan"}),(0,l.jsx)(n.td,{children:"1..n"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MealPlan/Code"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"Mealplan code"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"MealPlan/Name"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"Mealplan name"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},21020:(e,n,s)=>{var l=s(96540),a=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var l,t={},d=null,c=null;for(l in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,l)&&!i.hasOwnProperty(l)&&(t[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===t[l]&&(t[l]=n[l]);return{$$typeof:a,type:e,key:d,ref:c,props:t,_owner:o.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var l=s(96540);const a={},t=l.createContext(a);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);