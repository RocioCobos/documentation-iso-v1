/*! For license information please see 5c0d9950.65df33b2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12270],{78133:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=s(74848),r=s(28453);const i={sidebar_position:4,title:"Cancel"},d="Cancel",l={id:"apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel",title:"Cancel",description:"The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the Hotel-X Buyers API in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace.",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/booking-management",slug:"/apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Cancel"},sidebar:"docsSidebar",previous:{title:"Reservation Read",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/booking-management/reservation-read"},next:{title:"Overview",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/overview"}},c={},o=[{value:"Cancel Request",id:"cancel-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"Cancel Response",id:"cancel-response",level:2},{value:"Success",id:"success",level:3},{value:"Success Response Data Breakdown",id:"success-response-data-breakdown",level:4},{value:"Error",id:"error",level:3}];function a(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components},{Details:s}=e;return s||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.admonition,{title:"Deprecated API",type:"danger",children:(0,n.jsxs)(e.p,{children:["The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the ",(0,n.jsx)(e.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"Hotel-X Buyers API"})," in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace."]})}),"\n",(0,n.jsx)(e.h1,{id:"cancel",children:"Cancel"}),"\n",(0,n.jsxs)(e.p,{children:["The Cancel operation allows you to cancel a booking made via Travelgate. The returned fields include: ",(0,n.jsx)(e.code,{children:"ProviderLocator"}),", ",(0,n.jsx)(e.code,{children:"CancelId"}),", ",(0,n.jsx)(e.code,{children:"TransactionStatus"}),", ",(0,n.jsx)(e.code,{children:"Price"})," etc."]}),"\n",(0,n.jsx)(e.admonition,{type:"caution",children:(0,n.jsx)(e.p,{children:"The amount of information returned might vary between Sellers."})}),"\n",(0,n.jsx)(e.h2,{id:"cancel-request",children:"Cancel Request"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-xml",children:'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:Cancel>\n         <ns:cancelRQ>\n            <ns:timeoutMilliseconds>20000</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <CancelRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema" hotelCode = "">\n                      <timeoutMilliseconds>19700</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n                           <Parameter key = "Access" value = "22334"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                     <Locators>\n                        <Client>XXXXXXX</Client>\n                        <Provider>XXXXXXX</Provider>\n                        <Property>XXXXXXX</Property>\n                     </Locators>\n                     <StartDate>28/11/2014</StartDate>\n                     <EndDate>28/11/2014</EndDate>\n                     <Holder title = "Miss" name = "Test11" surname = "TestAp11"/>\n                  </CancelRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:cancelRQ>\n      </ns:Cancel>\n   </soapenv:Body>\n</soapenv:Envelope>\n'})}),"\n",(0,n.jsx)(e.h3,{id:"request-data-breakdown",children:"Request Data Breakdown"}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsxs)(e.p,{children:["Check the values you need to add in the ",(0,n.jsx)(e.a,{href:"/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/request-headers",children:"header"})," and ",(0,n.jsx)(e.a,{href:"/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/common-elements",children:"common elements"}),"."]})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:(0,n.jsx)(e.strong,{children:"Element"})}),(0,n.jsx)(e.th,{children:(0,n.jsx)(e.strong,{children:"Number"})}),(0,n.jsx)(e.th,{children:(0,n.jsx)(e.strong,{children:"Type"})}),(0,n.jsx)(e.th,{children:(0,n.jsx)(e.strong,{children:"Description"})})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRQ"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"Root node."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"@hotelCode"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Hotel code."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRQ/Locators"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"Locator Information (it's mandatory to indicate either the client or supplier's)."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Locators/Client"}),(0,n.jsx)(e.td,{children:"0..1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Client locator."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Locators/Provider"}),(0,n.jsx)(e.td,{children:"0..1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Supplier locator."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Locators/Property"}),(0,n.jsx)(e.td,{children:"0..1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsxs)(e.td,{children:["Property locator (see ",(0,n.jsx)(e.a,{href:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/meta-data",children:"MetaData"})," method in order to verify if the supplier implements it)."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRQ/StartDate"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Start date of booking."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRQ/EndDate"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"End date of booking."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRQ/Holder"}),(0,n.jsx)(e.td,{children:"0..1"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"Holder of the booking."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"@title"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Holder\u2019s title. Possible values: Mr, Mrs, Miss, Ms"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"@name"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Holder's name."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"@surname"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Holder's surname."})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"cancel-response",children:"Cancel Response"}),"\n",(0,n.jsxs)(e.p,{children:["After each request, the Seller will process the data and provide you with a response. Upon receiving a ",(0,n.jsx)(e.code,{children:"Cancel"})," request, the Seller will send you a corresponding ",(0,n.jsx)(e.code,{children:"Cancel"})," response."]}),"\n",(0,n.jsxs)(e.p,{children:["The response options include either ",(0,n.jsx)(e.strong,{children:"success"})," or an ",(0,n.jsx)(e.strong,{children:"error"}),". In the event of success, you will receive the transaction status."]}),"\n",(0,n.jsx)(e.h3,{id:"success",children:"Success"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-xml",children:'<CancelRS>\n   <ProviderLocator>YYYYYYYY</ProviderLocator> \n   <CancelId>0000000</CancelId>\n   <TransactionStatus>\n      <ComunicationStatus>OK</ComunicationStatus>\n      <RSStatus>EXISTE</RSStatus>\n      <ResStatus>CN</ResStatus>\n   </TransactionStatus>\n   <Price  currency="EUR" amount="120.5" binding="false" commission="-1" minimumSellingPrice="-1"/>\n</CancelRS>\n'})}),"\n",(0,n.jsx)(e.h4,{id:"success-response-data-breakdown",children:"Success Response Data Breakdown"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Element"}),(0,n.jsx)(e.th,{children:"Rel"}),(0,n.jsx)(e.th,{children:"Type"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRS"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"Root node."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRS/ProviderLocator"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Supplier locator."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRS/CancelId"}),(0,n.jsx)(e.td,{children:"0..1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Cancellation id."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRS/TransactionStatus"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"Transaction Status."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"TransactionStatus/ComunicationStatus"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Status communication (OFFLINE, OK and KO)."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"TransactionStatus/RSStatus"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:(0,n.jsxs)("details",{children:["     ",(0,n.jsx)("summary",{children:"Response Status"}),"     ",(0,n.jsxs)("div",{children:["         ",(0,n.jsxs)("div",{children:["          ",(0,n.jsxs)("table",{children:["  \t\t\t\t ",(0,n.jsxs)("thead",{children:["  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsxs)("th",{children:["  \t\t\t\t\t\t\t ",(0,n.jsx)("strong",{children:"Status"}),"  \t\t\t\t\t\t "]}),"  \t\t\t\t\t\t ",(0,n.jsxs)("th",{children:["  \t\t\t\t\t\t\t ",(0,n.jsx)("strong",{children:"Description"}),"  \t\t\t\t\t\t "]}),"  \t\t\t\t\t "]}),"  \t\t\t\t "]}),"  \t\t\t\t ",(0,n.jsxs)("tbody",{children:["  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"DESCONOCIDO"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"Unknown"}),"  \t\t\t\t\t "]}),"  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"EXISTE"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"Exists"}),"  \t\t\t\t\t "]}),"           ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"EXISTECANCELADA"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"exists but it's cancelled"}),"  \t\t\t\t\t "]}),"\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"NO_EXISTE"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"Does not exist"}),"  \t\t\t\t\t "]}),"       "]}),"  \t\t\t"]}),"         "]}),"     "]})," "]})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"TransactionStatus/ResStatus"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:(0,n.jsxs)("details",{children:["     ",(0,n.jsx)("summary",{children:"Reservation Status"}),"     ",(0,n.jsxs)("div",{children:["         ",(0,n.jsxs)("div",{children:["          ",(0,n.jsxs)("table",{children:["  \t\t\t\t ",(0,n.jsxs)("thead",{children:["  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsxs)("th",{children:["  \t\t\t\t\t\t\t ",(0,n.jsx)("strong",{children:"Status Code"}),"  \t\t\t\t\t\t "]}),"  \t\t\t\t\t\t ",(0,n.jsxs)("th",{children:["  \t\t\t\t\t\t\t ",(0,n.jsx)("strong",{children:"Description"}),"  \t\t\t\t\t\t "]}),"  \t\t\t\t\t "]}),"  \t\t\t\t "]}),"  \t\t\t\t ",(0,n.jsxs)("tbody",{children:["  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"OK"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"The reservation was completed with no problems."}),"  \t\t\t\t\t "]}),"  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"RQ"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"The reservation was completed but the product is still not available, so the reservation goes into a waiting list (Request)."}),"  \t\t\t\t\t "]}),"           ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"CN"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"The reservation was completed but due to a supplier error or a timeout the system will immediately cancel the reservation to prevent further possible errors."}),"  \t\t\t\t\t "]}),"\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"UN"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown. It is the client\u2019s responsibility to check if the booking is OK."}),"  \t\t\t\t\t "]}),"       "]}),"  \t\t\t"]}),"         "]}),"     "]})," "]})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"CancelRS/Price"}),(0,n.jsx)(e.td,{children:"0..1"}),(0,n.jsx)(e.td,{children:"Decimal"}),(0,n.jsxs)(e.td,{children:["Fee for the cancellation. (see ",(0,n.jsx)(e.a,{href:"../content/meta-data/",children:"MetaData"})," in order to verify if supplier informs of it)."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"@currency"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"String"}),(0,n.jsx)(e.td,{children:"Currency code (Our system uses a standard ISO - 3 for all suppliers)."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"@amount"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"Decimal"}),(0,n.jsx)(e.td,{children:"Amount."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"@binding"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"Boolean"}),(0,n.jsx)(e.td,{children:"If binding is set as true, then the client can\u2019t sell the product for a lower price that the one set by the supplier. If it set as as false, the client can sell the product for a lower price."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"@commission"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"Decimal"}),(0,n.jsx)(e.td,{children:(0,n.jsxs)("details",{children:["     ",(0,n.jsx)("summary",{children:"Commission Scenarios"}),"     ",(0,n.jsxs)("div",{children:["         ",(0,n.jsxs)("div",{children:["          ",(0,n.jsxs)("table",{children:["  \t\t\t\t ",(0,n.jsxs)("thead",{children:["  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsxs)("th",{children:["  \t\t\t\t\t\t\t ",(0,n.jsx)("strong",{children:"Commission"}),"  \t\t\t\t\t\t "]}),"  \t\t\t\t\t\t ",(0,n.jsxs)("th",{children:["  \t\t\t\t\t\t\t ",(0,n.jsx)("strong",{children:"Description"}),"  \t\t\t\t\t\t "]}),"  \t\t\t\t\t "]}),"  \t\t\t\t "]}),"  \t\t\t\t ",(0,n.jsxs)("tbody",{children:["  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"0"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"The price returned is net."}),"  \t\t\t\t\t "]}),"  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"-1"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"The supplier has not supplied the sale price nor the commission. This information is in the commercial contract with the supplier."}),"  \t\t\t\t\t "]}),"           ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"Greater than 0"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"X = % of the commission applied to the amount."}),"  \t\t\t\t\t "]}),"\t\t\t\t "]}),"  \t\t\t"]}),"         "]}),"     "]})," "]})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"@minimumSellingPrice"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"Decimal"}),(0,n.jsxs)(e.td,{children:['Indicates the minimum selling price it can be sold (determined by the Seller). If is specified (different than "-1"), that field takes preference to amount.\t\t',(0,n.jsxs)("details",{children:["     ",(0,n.jsx)("summary",{children:"Minimum Selling Price Scenarios"}),"     ",(0,n.jsxs)("div",{children:["         ",(0,n.jsxs)("div",{children:["          ",(0,n.jsxs)("table",{children:["  \t\t\t\t ",(0,n.jsxs)("thead",{children:["  \t\t\t\t\t ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsxs)("th",{children:["  \t\t\t\t\t\t\t ",(0,n.jsx)("strong",{children:"Minimum Selling Price"}),"  \t\t\t\t\t\t "]}),"  \t\t\t\t\t\t ",(0,n.jsxs)("th",{children:["  \t\t\t\t\t\t\t ",(0,n.jsx)("strong",{children:"Description"}),"  \t\t\t\t\t\t "]}),"  \t\t\t\t\t "]}),"  \t\t\t\t "]}),"  \t\t\t\t ",(0,n.jsxs)("tbody",{children:[" ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"0"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"No minimum selling price is provided."}),"  \t\t\t\t\t "]}),"       ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"-1"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"We have no information about MSP from the Seller."}),"  \t\t\t\t\t "]}),"     ",(0,n.jsxs)("tr",{children:["  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"Greater than 0"}),"  \t\t\t\t\t\t ",(0,n.jsx)("td",{children:"The lowest possible amount that can be sold commercially."}),"  \t\t\t\t\t "]}),"\t\t\t\t "]}),"  \t\t\t"]}),"         "]}),"     "]})," "]})]})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"error",children:"Error"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-xml",children:"<CancelRS>\n   <operationImplemented>true</operationImplemented>\n   <applicationError>\n      <code/>\n      <type>105</type>\n      <description>Communication Error.</description>\n      <httpStatusCode>0</httpStatusCode>\n   </applicationError>\n</CancelRS>\n"})}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Error codes that will be included in the response in the event of an error"}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)("strong",{children:"Error Code"})}),(0,n.jsx)("th",{children:(0,n.jsx)("strong",{children:"Error Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"101"}),(0,n.jsx)("td",{children:"System Exception (Exception not controlled or not classified as general exception)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"102"}),(0,n.jsx)("td",{children:"Supplier Error."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"103"}),(0,n.jsx)("td",{children:"Too many requests to the supplier."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"104"}),(0,n.jsx)("td",{children:"Timeout (Timeout during the execution of an operation (look in the common attribute timeout ))."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"105"}),(0,n.jsx)("td",{children:"Communication Error."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"204"}),(0,n.jsx)("td",{children:"Supplier returns 0 results in availability."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"205"}),(0,n.jsx)("td",{children:"The Supplier doesn\u2019t accept the distribution RQ."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"206"}),(0,n.jsx)("td",{children:"The Supplier doesn\u2019t accept the dates RQ."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"207"}),(0,n.jsx)("td",{children:"The Supplier doesn\u2019t accept the request RQ."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"301"}),(0,n.jsx)("td",{children:"Option not found in policies."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"302"}),(0,n.jsx)("td",{children:"Hotel Not Found in DescriptiveInfo."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"303"}),(0,n.jsx)("td",{children:"Booking not confirmed in the supplier\u2019s system."})]})]})]})})})]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(a,{...t})}):a(t)}},21020:(t,e,s)=>{var n=s(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(t,e,s){var n,i={},o=null,a=null;for(n in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(a=e.ref),e)d.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:r,type:t,key:o,ref:a,props:i,_owner:l.current}}e.Fragment=i,e.jsx=o,e.jsxs=o},74848:(t,e,s)=>{t.exports=s(21020)},28453:(t,e,s)=>{s.d(e,{R:()=>d,x:()=>l});var n=s(96540);const r={},i=n.createContext(r);function d(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:d(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);