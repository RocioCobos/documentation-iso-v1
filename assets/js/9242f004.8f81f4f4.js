/*! For license information please see 9242f004.8f81f4f4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12246],{74958:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=s(74848),d=s(28453);const n={sidebar_position:2},i="Availability Retrieval",l={id:"apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/availability/availability-retrieval",title:"Availability Retrieval",description:"The HotelAvailRetrieve request message is sent to retrieve a complete breakdown of availability, including details about the Hotels, Rate Plans, and Rooms.",source:"@site/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/availability/availability-retrieval.mdx",sourceDirName:"apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/availability",slug:"/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/availability/availability-retrieval",permalink:"/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/availability/availability-retrieval",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/availability/availability-retrieval.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Availability Push",permalink:"/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/availability/availability-push"},next:{title:"Rate Push",permalink:"/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/rates/rates-push"}},a={},c=[{value:"HotelAvailRetrieve Request",id:"hotelavailretrieve-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"HotelAvailRetrieve Response",id:"hotelavailretrieve-response",level:2},{value:"Success",id:"success",level:3},{value:"Sucess Response Data Breakdown",id:"sucess-response-data-breakdown",level:4},{value:"Error",id:"error",level:3},{value:"Error Response Data Breakdown",id:"error-response-data-breakdown",level:4}];function o(t){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"availability-retrieval",children:"Availability Retrieval"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"HotelAvailRetrieve"})," request message is sent to retrieve a complete breakdown of availability, including details about the Hotels, Rate Plans, and Rooms."]}),"\n",(0,r.jsx)(e.h2,{id:"hotelavailretrieve-request",children:"HotelAvailRetrieve Request"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:ns1="http://www.opentravel.org/OTA/2003/05">\n   <s:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </s:Header>\n   <s:Body>\n      <ns:HotelAvailRetrieve>\n         <ns:request PrimaryLangID="EN">\n            <ns1:POS>\n               <ns1:Source>\n                  <ns1:RequestorID ID="Seller Code"/>\n                  <ns1:BookingChannel>\n                     <ns1:CompanyName Code="Buyer Code"/>\n                  </ns1:BookingChannel>\n                  <ns1:TPA_Extensions>\n                       <ns1:Param key = "onlyActive" value = "0"/>\n                   </ns1:TPA_Extensions>\n               </ns1:Source>\n            </ns1:POS>\n            <ns1:HotelAvailRequests>\n               <ns1:HotelAvailRequest>\n                   <ns1:DateRange Start="2023-12-01" End="2023-12-31"/>\n                   <ns1:RatePlanCandidates>\n                       <ns1:RatePlanCandidate RatePlanCode="BAR" PromotionCode="" />\n                   </ns1:RatePlanCandidates>\n                   <ns1:HotelRef HotelCode="2"/>\n               </ns1:HotelAvailRequest>\n           </ns1:HotelAvailRequests>\n         </ns:request>\n      </ns:HotelAvailRetrieve>\n   </s:Body>\n</s:Envelope>\n'})}),"\n",(0,r.jsx)(e.h3,{id:"request-data-breakdown",children:"Request Data Breakdown"}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsx)(e.p,{children:"During the onboarding process, your username and password will be provided. After each connection is established, you'll receive an email with RequestorID (Seller Code) and CompanyName (Buyer Code) values."})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Element"}),(0,r.jsx)(e.th,{children:"Rel"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRetrieve"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRetrieve/request"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"request/POS"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"POS/Source"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Source/TPA_Extensions"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"Optional, if empty only active inventory will be received"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TPA_Extensions/Params"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Params/Param"}),(0,r.jsx)(e.td,{children:"0..N"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@key"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"onlyActive"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@value"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"1 - You will receive all active inventory data. 0 - Active and deactivated inventory will be received. (Same case as without TPA_Extensions node.)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRequests"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRequests/HotelAvailRequest"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRequest/DateRange"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Start"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Date"}),(0,r.jsx)(e.td,{children:"Start date to search rates."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@End"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Date"}),(0,r.jsx)(e.td,{children:"End date to search rates."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRequest/HotelRef"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@HotelCode"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Hotel date to search rates."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRequest/RatePlanCandidates"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"If exists, contains rate filter."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"RatePlanCandidates/RatePlanCandidate"}),(0,r.jsx)(e.td,{children:"1..n"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@RatePlanCode"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Rate Plan Code to search rates."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"hotelavailretrieve-response",children:"HotelAvailRetrieve Response"}),"\n",(0,r.jsxs)(e.p,{children:["After each request, Travelgate will process the data and provide you with a response. Upon receiving a ",(0,r.jsx)(e.code,{children:"HotelRatePlanRetrieve"})," request, Travelgate will send you a corresponding ",(0,r.jsx)(e.code,{children:"HotelRatePlanRetrieve"})," response."]}),"\n",(0,r.jsxs)(e.p,{children:["The response options include either ",(0,r.jsx)(e.strong,{children:"success"})," or an ",(0,r.jsx)(e.strong,{children:"error"}),". In the event of success, Travelgate will provide you a response in which retrieves a breakdown of availability, including details about the Hotel, Rate Plans, and Rooms."]}),"\n",(0,r.jsx)(e.h3,{id:"success",children:"Success"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n         <u:Timestamp u:Id="_0">\n            <u:Created>2023-11-22T11:11:00.838Z</u:Created>\n            <u:Expires>2023-11-22T11:16:00.838Z</u:Expires>\n         </u:Timestamp>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n      <HotelAvailRetrieveResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">\n         <HotelAvailRetrieveResult>\n            <Success xmlns="http://www.opentravel.org/OTA/2003/05"/>\n            <AvailStatusMessages HotelCode="2" xmlns="http://www.opentravel.org/OTA/2003/05">\n               <AvailStatusMessage>\n                  <StatusApplicationControl Start="2023-12-01" End="2023-12-31" RatePlanCode="BARDEV" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true"/>\n                  <RestrictionStatus Status="Open"/>\n               </AvailStatusMessage>\n               <AvailStatusMessage BookingLimit="14" BookingSold="0">\n                  <StatusApplicationControl Start="2023-12-20" End="2023-12-22" RatePlanCode="BAR" InvCode="STD3" InvType="ROOM" Mon="false" Tue="false" Weds="true" Thur="true" Fri="true" Sat="false" Sun="false"/>\n                  <LengthsOfStay ArrivalDateBased="false">\n                     <LengthOfStay Time="1" TimeUnit="Day" MinMaxMessageType="MinLOS"/>\n                     <LengthOfStay Time="28" TimeUnit="Day" MinMaxMessageType="MaxLOS"/>\n                  </LengthsOfStay>\n                  <RestrictionStatus Status="Open" SellThroughOpenIndicator="false" MaxAdvancedBookingOffset="2" MinAdvancedBookingOffset="1"/>\n               </AvailStatusMessage>\n            </AvailStatusMessages>\n         </HotelAvailRetrieveResult>\n      </HotelAvailRetrieveResponse>\n   </s:Body>\n</s:Envelope>\n'})}),"\n",(0,r.jsx)(e.h4,{id:"sucess-response-data-breakdown",children:"Sucess Response Data Breakdown"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Element"}),(0,r.jsx)(e.th,{children:"Rel"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRetrieveResult"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRetrieveResult/Success"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRetrieveResult/AvailStatusMessages"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@HotelCode"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Hotel code"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"AvailStatusMessages/AvailStatusMessage"}),(0,r.jsx)(e.td,{children:"1..n"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@BookingLimit"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"The number of rooms available per Room-RatePlan for the specified dates. This field is exclusively used for Derivated Rates."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@BookingSold"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"The number of rooms booked per Room-RatePlan for the specified dates. The available allotment is calculated as the difference between @BookingLimit and @BookingSold. This field is exclusively used for Derivated Rates"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"AvailStatusMessage/StatusApplicationControl"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Start"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Date"}),(0,r.jsx)(e.td,{children:"Start date"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@End"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Date"}),(0,r.jsx)(e.td,{children:"End date"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@RatePlanCode"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@InvCode"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Room code. This field is exclusively used for Basic Rates."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@InvType"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"ROOM"}),". This field is exclusively used for Basic Rates."]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@PromotionCode"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"OfferCode"}),". This field is exclusively used for Offers."]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Mon"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"If true or attribute is not present, there is availability on Monday."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Tue"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"If true or attribute is not present, there is availability on Tuesday."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Weds"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"If true or attribute is not present, there is availability on Wednesday."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Thur"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"If true or attribute is not present, there is availability on Thurday."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Fri"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"If true or attribute is not present, there is availability on Friday."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Sat"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"If true or attribute is not present, there is availability on Saturday."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Sat"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"If true or attribute is not present, there is availability on Sunday."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"AvailStatusMessage/LengthsOfStay"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@ArrivalDateBased"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"If true, the Minimum and Maximum Stay is checked ONLY the first day of the availability. If false or null, the Minimum and Maximum Stay is checked all the availability days. If both values are needed, two @AvailStatusMessage will be sent."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"LengthsOfStay/LengthOfStay"}),(0,r.jsx)(e.td,{children:"1..2"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Time"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"Indicates the number of @TimeUnit for this stay. When value is 0 or -1, condition should be deleted from the system."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@TimeUnit"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"Day"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@MinMaxMessageType"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"MinLOS"})," (minimum) or ",(0,r.jsx)(e.code,{children:"MaxLOS"})," (maximum) @LenghtOfSaty."]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"AvailStatusMessage/RestrictionStatus"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Status"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"Open"})," or ",(0,r.jsx)(e.code,{children:"Close"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Restriction"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"Master"}),", ",(0,r.jsx)(e.code,{children:"Arrival"})," or ",(0,r.jsx)(e.code,{children:"Departure"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@MinAdvancedBookingOffset"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"Minimum number of days before the check-in date to be available to be booked. This restriction is usually used to offer discounts on early bookings. When value is 0 or -1, condition should be deleted from the system."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@MaxAdvancedBookingOffset"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Integer"}),(0,r.jsx)(e.td,{children:"Maximum number of days before the check-in date to be available to be booked. This restriction is usually used to offer last minute discounts on unsold inventory. When value is -1, condition should be deleted from the system."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@SellThroughOpenIndicator"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"Room-RatePlan can be sold with no limit if @Status is 'Open'. This field is exclusively used for Basic Rates."})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"error",children:"Error"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n   <s:Header>\n      <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n         <u:Timestamp u:Id="_0">\n            <u:Created>2023-11-22T11:11:00.838Z</u:Created>\n            <u:Expires>2023-11-22T11:16:00.838Z</u:Expires>\n         </u:Timestamp>\n      </o:Security>\n   </s:Header>\n   <s:Body xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n      <HotelAvailRetrieveResponse xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">\n         <HotelAvailRetrieveResult>\n            <Errors xmlns="http://www.opentravel.org/OTA/2003/05">\n                <Error ShortText="Invalid hotel id" Code="10"/>\n             </Errors>\n         </HotelAvailRetrieveResult>\n      </HotelAvailRetrieveResponse>\n   </s:Body>\n</s:Envelope>\n'})}),"\n",(0,r.jsx)(e.h4,{id:"error-response-data-breakdown",children:"Error Response Data Breakdown"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Element"}),(0,r.jsx)(e.th,{children:"Rel"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRetrieveResult"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"HotelAvailRetrieveResult/Errors"}),(0,r.jsx)(e.td,{children:"0..1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Errors/Error"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@ShortText"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:(0,r.jsxs)("details",{children:["     ",(0,r.jsx)("summary",{children:"Error Codes and Description"}),"     ",(0,r.jsxs)("div",{children:["         ",(0,r.jsxs)("div",{children:["          ",(0,r.jsxs)("table",{children:[" \t\t\t\t",(0,r.jsxs)("thead",{children:[" \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsxs)("th",{children:[" \t\t\t\t\t\t\t",(0,r.jsx)("strong",{children:"Error Code"})," \t\t\t\t\t\t"]})," \t\t\t\t\t\t",(0,r.jsxs)("th",{children:[" \t\t\t\t\t\t\t",(0,r.jsx)("strong",{children:"Error Description"})," \t\t\t\t\t\t"]})," \t\t\t\t\t"]})," \t\t\t\t"]})," \t\t\t\t",(0,r.jsxs)("tbody",{children:[" \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"-1"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Unexpected error"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"1"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid request"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"10"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid hotel id"})," \t\t\t\t\t"]}),"                     ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"11"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid dates"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"12"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid rate plan code"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"13"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid reservation id"})," \t\t\t\t\t"]}),"                     ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"14"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid derived rate adjust values"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"15"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid id"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"16"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid amount type"})," \t\t\t\t\t"]})," \t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"17"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid supplement type"})," \t\t\t\t\t"]}),"          ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"18"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid number of hotel"})," \t\t\t\t\t"]}),"        ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"19"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid rate currency code"})," \t\t\t\t\t"]}),"         ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"20"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Requestor id not found"})," \t\t\t\t\t"]}),"           ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"21"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Provider id not found"})," \t\t\t\t\t"]}),"               ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"22"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Rooms not found"})," \t\t\t\t\t"]}),"               ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"23"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Rates not found"})," \t\t\t\t\t"]}),"              ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"30"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Occupation error"})," \t\t\t\t\t"]}),"              ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"31"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Rate error"})," \t\t\t\t\t"]}),"             ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"32"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Avail rq error"})," \t\t\t\t\t"]}),"           ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"33"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Data Base error"})," \t\t\t\t\t"]}),"              ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"34"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Cancel error"})," \t\t\t\t\t"]}),"               ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"35"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Confirmation error"})," \t\t\t\t\t"]}),"                  ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"36"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Valuation_error"})," \t\t\t\t\t"]}),"                    ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"37"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Authorization error"})," \t\t\t\t\t"]}),"                    ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"38"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Authentication error"})," \t\t\t\t\t"]}),"                      ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"90"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Connection time out"})," \t\t\t\t\t"]}),"                      "]})," \t\t\t"]}),"         "]}),"     "]})," "]})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"@Code"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:(0,r.jsxs)("details",{children:["     ",(0,r.jsx)("summary",{children:"Error Codes and Description"}),"     ",(0,r.jsxs)("div",{children:["         ",(0,r.jsxs)("div",{children:["          ",(0,r.jsxs)("table",{children:[" \t\t\t\t",(0,r.jsxs)("thead",{children:[" \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsxs)("th",{children:[" \t\t\t\t\t\t\t",(0,r.jsx)("strong",{children:"Error Code"})," \t\t\t\t\t\t"]})," \t\t\t\t\t\t",(0,r.jsxs)("th",{children:[" \t\t\t\t\t\t\t",(0,r.jsx)("strong",{children:"Error Description"})," \t\t\t\t\t\t"]})," \t\t\t\t\t"]})," \t\t\t\t"]})," \t\t\t\t",(0,r.jsxs)("tbody",{children:[" \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"-1"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Unexpected error"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"1"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid request"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"10"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid hotel id"})," \t\t\t\t\t"]}),"                     ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"11"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid dates"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"12"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid rate plan code"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"13"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid reservation id"})," \t\t\t\t\t"]}),"                     ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"14"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid derived rate adjust values"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"15"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid id"})," \t\t\t\t\t"]})," \t\t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"16"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid amount type"})," \t\t\t\t\t"]})," \t\t\t\t",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"17"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid supplement type"})," \t\t\t\t\t"]}),"          ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"18"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid number of hotel"})," \t\t\t\t\t"]}),"        ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"19"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Invalid rate currency code"})," \t\t\t\t\t"]}),"         ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"20"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Requestor id not found"})," \t\t\t\t\t"]}),"           ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"21"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Provider id not found"})," \t\t\t\t\t"]}),"               ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"22"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Rooms not found"})," \t\t\t\t\t"]}),"               ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"23"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Rates not found"})," \t\t\t\t\t"]}),"              ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"30"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Occupation error"})," \t\t\t\t\t"]}),"              ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"31"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Rate error"})," \t\t\t\t\t"]}),"             ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"32"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Avail rq error"})," \t\t\t\t\t"]}),"           ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"33"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Data Base error"})," \t\t\t\t\t"]}),"              ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"34"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Cancel error"})," \t\t\t\t\t"]}),"               ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"35"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Confirmation error"})," \t\t\t\t\t"]}),"                  ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"36"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Valuation_error"})," \t\t\t\t\t"]}),"                    ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"37"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Authorization error"})," \t\t\t\t\t"]}),"                    ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"38"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Authentication error"})," \t\t\t\t\t"]}),"                      ",(0,r.jsxs)("tr",{children:[" \t\t\t\t\t\t",(0,r.jsx)("td",{children:"90"})," \t\t\t\t\t\t",(0,r.jsx)("td",{children:"Connection time out"})," \t\t\t\t\t"]}),"                      "]})," \t\t\t"]}),"         "]}),"     "]})," "]})})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,d.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(o,{...t})}):o(t)}},21020:(t,e,s)=>{var r=s(96540),d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,s){var r,n={},c=null,o=null;for(r in void 0!==s&&(c=""+s),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(o=e.ref),e)i.call(e,r)&&!a.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===n[r]&&(n[r]=e[r]);return{$$typeof:d,type:t,key:c,ref:o,props:n,_owner:l.current}}e.Fragment=n,e.jsx=c,e.jsxs=c},74848:(t,e,s)=>{t.exports=s(21020)},28453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>l});var r=s(96540);const d={},n=r.createContext(d);function i(t){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(d):t.components||d:i(t.components),r.createElement(n.Provider,{value:e},t.children)}}}]);