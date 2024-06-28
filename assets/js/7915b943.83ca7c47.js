/*! For license information please see 7915b943.83ca7c47.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39621],{17501:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var r=s(74848),d=s(28453);const n={sidebar_position:2},i="Hotel List",l={id:"apis/for-sellers/hotel-pull-sellers-api/content/hotel-list",title:"Hotel List",description:"The Hotel List method returns a comprehensive hotel list from a supplier's access to the Buyer, granting access to all the properties configured by the Seller for a given set of credentials. The returned fields include: Hotel Code, GiataId, Name, Address, ZipCode, Contact, CategoryCode etc.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/content/hotel-list.mdx",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/content",slug:"/apis/for-sellers/hotel-pull-sellers-api/content/hotel-list",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/hotel-list",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/content/hotel-list.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/overview"},next:{title:"Descriptive Info",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/descriptive-info"}},c={},o=[{value:"HotelList Request",id:"hotellist-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"HotelList Response",id:"hotellist-response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}];function h(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"hotel-list",children:"Hotel List"}),"\n",(0,r.jsxs)(e.p,{children:["The Hotel List method returns a comprehensive hotel list from a supplier's access to the Buyer, granting access to all the properties configured by the Seller for a given set of credentials. The returned fields include: ",(0,r.jsx)(e.code,{children:"Hotel Code"}),", ",(0,r.jsx)(e.code,{children:"GiataId"}),", ",(0,r.jsx)(e.code,{children:"Name"}),", ",(0,r.jsx)(e.code,{children:"Address"}),", ",(0,r.jsx)(e.code,{children:"ZipCode"}),", ",(0,r.jsx)(e.code,{children:"Contact"}),", ",(0,r.jsx)(e.code,{children:"CategoryCode"})," etc."]}),"\n",(0,r.jsx)(e.h2,{id:"hotellist-request",children:"HotelList Request"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:HotelList>\n         <ns:hotelListRQ>\n            <ns:timeoutMilliseconds>20000</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <HotelListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                     <timeoutMilliseconds>19700</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n                           <Parameter key = "Access" value = "22334"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                  </HotelListRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:hotelListRQ>\n      </ns:HotelList>\n   </soapenv:Body>\n</soapenv:Envelope>\n'})}),"\n",(0,r.jsx)(e.h3,{id:"request-data-breakdown",children:"Request Data Breakdown"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"HotelList"})," request does not require any elements."]}),"\n",(0,r.jsx)(e.h2,{id:"hotellist-response",children:"HotelList Response"}),"\n",(0,r.jsxs)(e.p,{children:["After each request, you will have to process the data and provide a response. Upon receiving a ",(0,r.jsx)(e.code,{children:"HotelList"})," request, you will need to send a corresponding ",(0,r.jsx)(e.code,{children:"HotelList"})," response."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-xml",children:'<HotelListRS xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n   <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>\n   <Hotels>\n      <Hotel>\n         <Code>5</Code>  \n         <ProviderCode>27</ProviderCode>                          \n         <GiataId source = "http://urlGiata">1200</GiataId>\n         <Name>BADAJOZ</Name>\n         <Address>CTRA.NACIONAL V, KM 393</Address>\n         <Airports>\n            <Airport>\n               <IATACode>BJZ</IATACode>\n            </Airport>\n         </Airports>\n         <Town>BADAJOZ</Town>\n         <ZipCode>06002</ZipCode>\n         <CountryISOCode>ES</CountryISOCode>\n         <AvailDestination code = "06" name = "BADAJOZ"/>\n         <GeographicDestination code = "06" name = "BADAJOZ" avail = "true"/>\n         <Latitude>38.893839</Latitude>\n         <Longitude>-7.014112</Longitude>\n         <Contact>\n            <Email>badajoz@xxx.com</Email>\n            <Telephone>91425891</Telephone>\n            <Fax>910200200</Fax>\n         </Contact>\n         <CategoryCode>4 Estrellas</CategoryCode>\n         <PaymentOptions cash="false" bankAcct="false">\n            <Cards>\n               <Card code="VI"/>\n               <Card code="AX"/>\n               <Card code="CA"/>  \n            </Cards> \n         </PaymentOptions>               \n         <ExclusiveDeal>true</ExclusiveDeal>     \n         <PropertyCategory>\n            <Code>1</Code>\n            <Name>Hotel</Name>             \n         </PropertyCategory>                 \n      </Hotel>\n   </Hotels>\n</HotelListRS>\n'})}),"\n",(0,r.jsx)(e.h3,{id:"response-data-breakdown",children:"Response Data Breakdown"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Element"}),(0,r.jsx)(e.th,{children:"Rel"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelListRS/UpgradeUTCDate"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"Indicates the update date of the information in UTC format."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelListRS/Hotels"}),(0,r.jsx)(e.td,{children:"0..n"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotels/Hotel"}),(0,r.jsx)(e.td,{children:"0..n"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/Code"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Internal code to perform availability and/or supplier code."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/ProviderCode"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Internal code established by the supplier (see MetaData)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/GiataId"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Giata code"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@source"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Giata url"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/Name"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Hotel name"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/Address"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Hotel address"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/Airports"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Airports/Airport"}),(0,r.jsx)(e.td,{children:"1..n"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Airport/IATACode"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"IATA airport Code (airport near the hotel)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/Town"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Town"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/ZipCode"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"ZipCode"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/CountryISOCode"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"CountryISOCode"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/AvailDestination"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@code"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Avail destination code (lowest destination level)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@name"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Avail destination name (lowest destination level)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/GeographicDestination"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@code"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Geographic Destination code (lowest destination level)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@name"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Geographic Destination name (lowest destination level)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@avail"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"Indicates if it is allowed in availability."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/Latitude"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Latitude. Format is Decimal Degrees (e.g. 37.207295)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/Longitude"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Longitude. Format is Decimal Degrees (e.g. -7.23768)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/Contact"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Contact/Email"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Contact email"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Contact/Telephone"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Contact telephone"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Contact/Fax"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Contact fax"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/CategoryCode"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Hotel category code."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/Type"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:(0,r.jsxs)("details",{children:["     ",(0,r.jsx)("summary",{children:"Hotel Type codes"}),"     ",(0,r.jsxs)("div",{children:["         ",(0,r.jsxs)("div",{children:["          ",(0,r.jsxs)("table",{children:["   \t\t\t\t  ",(0,r.jsxs)("thead",{children:["   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsxs)("th",{children:["   \t\t\t\t\t\t\t  ",(0,r.jsx)("strong",{children:"Code"}),"   \t\t\t\t\t\t  "]}),"   \t\t\t\t\t\t  ",(0,r.jsxs)("th",{children:["   \t\t\t\t\t\t\t  ",(0,r.jsx)("strong",{children:"Name"}),"   \t\t\t\t\t\t  "]}),"   \t\t\t\t\t  "]}),"   \t\t\t\t  "]}),"   \t\t\t\t  ",(0,r.jsxs)("tbody",{children:["   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"H"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Hotel"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"A"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Apartment"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"AH"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Apartment Hotel"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"C"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Club"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"AT"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Agrotourism"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"HS"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Hostel"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"CA"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"House"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"V"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Ville"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"B"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Bungalows"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"D"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Disco Club"}),"   \t\t\t\t\t  "]}),"\t\t\t \t\t\t\t   "]}),"   \t\t\t"]}),"         "]}),"     "]})," "]})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/PaymentOptions"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Type of cards allowed by the supplier. This tag is only mandatory if payment type is different than MerchantPay."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@cash"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"Cash indicates whether payment will be made in cash (true) or by card (false)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@bankAcct"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"BankAcct specifies whether payment will be made via bank transfer (true) or not (false)."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"PaymentOptions/Cards"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Cards/Card"}),(0,r.jsx)(e.td,{children:"1..n"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Type of card allowed."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@code"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:(0,r.jsxs)("details",{children:["     ",(0,r.jsx)("summary",{children:"Credit Card codes"}),"     ",(0,r.jsxs)("div",{children:["         ",(0,r.jsxs)("div",{children:["          ",(0,r.jsxs)("table",{children:["   \t\t\t\t  ",(0,r.jsxs)("thead",{children:["   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsxs)("th",{children:["   \t\t\t\t\t\t\t  ",(0,r.jsx)("strong",{children:"Code"}),"   \t\t\t\t\t\t  "]}),"   \t\t\t\t\t\t  ",(0,r.jsxs)("th",{children:["   \t\t\t\t\t\t\t  ",(0,r.jsx)("strong",{children:"Name"}),"   \t\t\t\t\t\t  "]}),"   \t\t\t\t\t  "]}),"   \t\t\t\t  "]}),"   \t\t\t\t  ",(0,r.jsxs)("tbody",{children:["   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"VI"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Visa"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"AX"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"American Express"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"BC"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"BC Card"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"CA"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"MasterCard"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"CB"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Carte Blanche"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"CU"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"China Union Pay"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"DS"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Discover"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"DC"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Diners Club"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"T"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Carta Si"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"R"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Carte Bleue"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"N"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Dankort"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"L"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Delta"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"E"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Electron"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"JC"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Japan Credit Bureau"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"TO"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Maestro"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"S"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Switch"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"EC"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Electronic Cash"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"EU"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"EuroCard"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"TP"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Universal air travel card"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"OP"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"optima"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"ER"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"Air Canada/RnRoute"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"XS"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"access"}),"   \t\t\t\t\t  "]}),"                     ",(0,r.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"O"}),"   \t\t\t\t\t\t  ",(0,r.jsx)("td",{children:"others"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t  "]}),"   \t\t\t"]}),"         "]}),"     "]})," "]})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/ExclusiveDeal"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"Indicates that the Hotel has an Exclusive Deal."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Hotel/PropertyCategory"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Hotels property type. Similar to Type, but on supplier\u2019s side."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"PropertyCategory/Code"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Supplier\u2019s property code."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"PropertyCategory/Name"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Supplier\u2019s property name."})]})]})]})]})}function a(t={}){const{wrapper:e}={...(0,d.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},21020:(t,e,s)=>{var r=s(96540),d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(t,e,s){var r,n={},o=null,h=null;for(r in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(h=e.ref),e)i.call(e,r)&&!c.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===n[r]&&(n[r]=e[r]);return{$$typeof:d,type:t,key:o,ref:h,props:n,_owner:l.current}}e.Fragment=n,e.jsx=o,e.jsxs=o},74848:(t,e,s)=>{t.exports=s(21020)},28453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>l});var r=s(96540);const d={},n=r.createContext(d);function i(t){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(d):t.components||d:i(t.components),r.createElement(n.Provider,{value:e},t.children)}}}]);