/*! For license information please see caae70f8.b7b75936.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86794],{13090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var s=n(74848),o=n(28453),a=n(11470),r=n(19365);const i={sidebar_position:1},l="Quickstart",u={id:"apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart",title:"Quickstart",description:"Introduction",source:"@site/docs/apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart.mdx",sourceDirName:"apis/for-buyers/inventory-buyers/channel-x-push-buyers-api",slug:"/apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart",permalink:"/docs/apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"One Step Book",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook"},next:{title:"Endpoint",permalink:"/docs/apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/making-requests/endpoint"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Let&#39;s Get Started: How to Push Product to your System!",id:"lets-get-started-how-to-push-product-to-your-system",level:2},{value:"1. Configure your system to operate with Channel-X",id:"1-configure-your-system-to-operate-with-channel-x",level:3},{value:"API Endpoint",id:"api-endpoint",level:4},{value:"Request Headers",id:"request-headers",level:4},{value:"Supported Operations",id:"supported-operations",level:4},{value:"2. Inventory tool SetUp",id:"2-inventory-tool-setup",level:3},{value:"3. Channel-X pushes the information to your system",id:"3-channel-x-pushes-the-information-to-your-system",level:3},{value:"Next steps",id:"next-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["Channel-X extracts the product loaded between the Buyer and the Channel Managers into our ",(0,s.jsx)(t.a,{href:"/docs/apps/inventory/extranet/overview",children:"Inventory Tool"})," and sends it to the Buyer's system. To get all the product details into their system, Buyers just need to go to the ",(0,s.jsx)(t.strong,{children:"Full Copy"})," tab in the Inventory's extranet. Once that's done, when the Channel Manager makes changes, Channel-X sends a smaller request ",(0,s.jsx)(t.strong,{children:"(Delta)"})," to let Buyers know about the updates."]}),"\n",(0,s.jsxs)(t.p,{children:["Please, note that connecting with Channel Managers through Travelgate requires a previous step in which the Buyer configures the setup of the hotels, rate plans, and rooms contracted with the hoteliers in the ",(0,s.jsx)(t.a,{href:"https://inventory.xmltravelgate.com/Account/Login?ReturnUrl=%2f",children:"Inventory extranet"}),".\nThis can be done manually in the Extranet or with one of our two newly ",(0,s.jsx)(t.a,{href:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/quickstart",children:"Inventory Set Up GraphQL API"})," and ",(0,s.jsx)(t.a,{href:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/quickstart",children:"Inventory Set Up CSV API"}),".",(0,s.jsx)(t.br,{}),"\n","This configuration allows the Channel Manager to map all this information and push availability and prices for the Buyer."]}),"\n",(0,s.jsxs)(t.p,{children:["\xa0\n",(0,s.jsx)(t.img,{src:"https://storage.travelgate.com/docs/channel-X.svg",alt:"Channel-X Overview"})]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["Channel-X Push Buyers API is a non-standalone API that exclusively retrieves to the Buyer's system product that have been previously pushed to the ",(0,s.jsx)(t.a,{href:"https://inventory.xmltravelgate.com/Account/Login?ReturnUrl=%2f",children:"Inventory Tool"}),". To enable bookings, it is essential to also develop ",(0,s.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"Hotel-X Pull Buyers API"}),"\nExplore the special methods we've designed to simplify the process of directly booking an option you already have in your system in the ",(0,s.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/overview",children:"One-Shot requests"})," section.\nIf you already have the ",(0,s.jsx)(t.a,{href:"/docs/apis/for-buyers/legacy-pull-buyers-api/overview",children:"Legacy Pull Buyers API"})," developed, it is also possible to work with it."]})}),"\n",(0,s.jsx)(t.h2,{id:"lets-get-started-how-to-push-product-to-your-system",children:"Let's Get Started: How to Push Product to your System!"}),"\n",(0,s.jsx)(t.p,{children:"Channel-X provides a robust XML-based API that will enable you to push all the product to your system, allowing you to create and display price calendars. Additionally, you will have full synchronization of products whenever needed, reducing network latency for availability searches."}),"\n",(0,s.jsx)(t.h3,{id:"1-configure-your-system-to-operate-with-channel-x",children:"1. Configure your system to operate with Channel-X"}),"\n",(0,s.jsx)(t.h4,{id:"api-endpoint",children:"API Endpoint"}),"\n",(0,s.jsxs)(t.p,{children:["For the Channel-X API, it is essential that you ",(0,s.jsx)(t.a,{href:"making-requests/endpoint",children:"send your endpoint to Travelgate"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"request-headers",children:"Request Headers"}),"\n",(0,s.jsx)(t.p,{children:"To interact with the API, you'll need to configure your system to accept the following headers:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Content Type: Content-Type header provides information about the actual content type of the returned content."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"Content-Type: text/xml;charset=UTF-8\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"SOAPAction: SOAPAction header corresponding to the transmitted message, there are 3 different ones, one for each request."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="HotelRatePlanInventoryNotif"',children:"SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelRatePlanInventoryNotif\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="HotelAvailNotif"',children:"SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelAvailNotif\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:'title="HotelRatePlanNotif"',children:"SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelRatePlanNotif\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Authentication: Combination of username and password (",(0,s.jsx)(t.a,{href:"making-requests/endpoint",children:"which you should have previously sent to us"}),") encoded in Base64 format."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"Authorization: Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"})}),"\n",(0,s.jsx)(t.h4,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,s.jsx)(t.p,{children:"In the case of the Channel-X API, Travelgate will send requests to the Buyer's system, and the Buyer will respond with either success or error."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Requests and Responses"})}),"\n",(0,s.jsx)(t.p,{children:"Channel-X has three main methods. You will have to configure your system to accept the following requests:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"HotelRatePlanInventoryNotif"}),", which contains information about the inventory setup: Hotel, Rate Plan and Room."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"HotelAvailNotif"}),", which contains information about rate availability and allotment conditions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"HotelRatePlanNotif"}),", which contains information about rate prices and supplements."]}),"\n"]}),"\n","\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(r.A,{value:"HotelRatePlanInventoryNotif",label:"HotelRatePlanInventoryNotif",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:u = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n    <s:Header>\n        <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n            <o:UsernameToken u:Id = "uuid-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-x">\n                <o:Username>username</o:Username>\n                <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</o:Password>\n            </o:UsernameToken>\n        </o:Security>\n    </s:Header>\n    <s:Body xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n        <HotelRatePlanInventoryNotif xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">\n            <request Version="0">\n                <POS xmlns="http://www.opentravel.org/OTA/2003/05">\n                    <Source>\n                        <RequestorID ID="Seller Code" />\n                        <BookingChannel>\n                            <CompanyName Code="Buyer Code" />\n                        </BookingChannel>\n                    </Source>\n                </POS>\n                <RatePlans HotelStatusType="Active" HotelCode="2" xmlns="http://www.opentravel.org/OTA/2003/05">\n                    <RatePlan Start="2023-11-08" End="2023-11-25" CurrencyCode="EUR" PromotionCode="25" RatePlanType="0" RatePlanCode="BAR" RateReturn="false" FreeChild="false" FreeBaby="false" RatePlanNotifType="Delta" RatePlanStatusType="Active" YieldableIndicator="false">\n                        <BookingRules>\n                            <BookingRule>\n                                <CancelPenalties>\n\t\t\t\t\t\t\t\t    <CancelPenalty NonRefundable="false" />\n                                    <CancelPenalty Start="2023-10-09" End="2023-10-09">\n                                        <Deadline OffsetTimeUnit="Day" OffsetUnitMultiplier="2" OffsetDropTime="BeforeArrival" />\n                                        <AmountPercent Amount="10" />\n                                    </CancelPenalty>\n                                </CancelPenalties>\n\t\t\t\t\t\t\t\t<Viewerships>\n                                    <Viewership>\n                                        <LocationCodes LocationCodesInclusive="false">\n                                            <LocationCode CountryCode="ES" />\n                                        </LocationCodes>\n                                    </Viewership>\n                                </Viewerships>\n                            </BookingRule>\n                        </BookingRules>\n                        <Rates>\n                            <Rate>\n                                <AdditionalGuestAmounts>\n                                    <AdditionalGuestAmount AgeQualifyingCode="8" MaxAge="12" />\n                                    <AdditionalGuestAmount AgeQualifyingCode="7" MaxAge="2" />\n                                </AdditionalGuestAmounts>\n                                <PaymentPolicies>\n                                    <GuaranteePayment PaymentCode="DirectPayment">\n                                        <AcceptedPayments>\n                                            <AcceptedPayment>\n                                                <PaymentCard CardCode="VI">\n                                                    <IsVCC>false</IsVCC>\n                                                </PaymentCard>\n                                            </AcceptedPayment>\n                                            <AcceptedPayment>\n                                                <PaymentCard CardCode="CA">\n                                                    <IsVCC>false</IsVCC>\n                                                </PaymentCard>\n                                            </AcceptedPayment>\n                                        </AcceptedPayments>\n                                    </GuaranteePayment>\n                                </PaymentPolicies>\n                                <MealsIncluded MealPlanCodes="14" />\n                            </Rate>\n                        </Rates>\n                        <SellableProducts>\n                            <SellableProduct InvCode="SNG" InvType="ROOM" InvNotifType="New" InvStatusType="Active" InvTypeCode="1234">\n                                <GuestRoom>\n                                    <Quantities StandardNumBeds="2" />\n                                    <Occupancy MinOccupancy="2" MaxOccupancy="2" AgeQualifyingCode="10" />\n                                    <Room RoomTypeCode="SNG" />\n                                    <Description>\n                                        <Text>Single Room Test</Text>\n                                    </Description>\n                                </GuestRoom>\n                            </SellableProduct>\n                        </SellableProducts>\n                        <Commission Percent="20" />\n                        <Description>\n                            <Text>BAR</Text>\n                        </Description>\n                        <Taxes>\n                            <Tax Percent="10" ChargeUnit="false" ChargeFrequency="false" Type="Inclusive">\n                                <TaxDescription>\n                                    <Text>city</Text>\n                                </TaxDescription>\n                            </Tax>\n                        </Taxes>\n                        <AdditionalDetails>\n                            <AdditionalDetail Code="hola" Type="39">\n                                <DetailDescription>\n                                    <Text>hola</Text>\n                                </DetailDescription>\n                            </AdditionalDetail>\n                        </AdditionalDetails>\n                    </RatePlan>\n\t\t\t\t</RatePlans>\n\t\t\t</request>\n        </HotelRatePlanInventoryNotif>\n    </s:Body>\n</s:Envelope>\n'})})}),(0,s.jsx)(r.A,{value:"HotelAvailNotif",label:"HotelAvailNotif",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:u = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n    <s:Header>\n        <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n            <o:UsernameToken u:Id = "uuid-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-x">\n                <o:Username>username</o:Username>\n                <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</o:Password>\n            </o:UsernameToken>\n        </o:Security>\n    </s:Header>\n    <s:Body xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n        <HotelAvailNotif xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">\n            <request>\n                <POS xmlns="http://www.opentravel.org/OTA/2003/05">\n                    <Source>\n                        <RequestorID ID="Seller Code" />\n                        <BookingChannel>\n                            <CompanyName Code="Buyer Code" />\n                        </BookingChannel>\n                    </Source>\n                </POS>\n                <AvailStatusMessages HotelCode="2" xmlns="http://www.opentravel.org/OTA/2003/05">\n                    <AvailStatusMessage BookingLimit="100" BookingSold="4">\n                        <StatusApplicationControl Start="2023-11-10" End="2023-11-14" RatePlanCode="BAR" InvCode="SNG" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true" />\n                        <LengthsOfStay ArrivalDateBased="false">\n                            <LengthOfStay Time="1" TimeUnit="Day" MinMaxMessageType="MinLOS" />\n                            <LengthOfStay Time="2" TimeUnit="Day" MinMaxMessageType="MaxLOS" />                        \n\t\t\t\t\t\t</LengthsOfStay>\n                        <RestrictionStatus />\n                    </AvailStatusMessage>\n                    <AvailStatusMessage BookingLimit="100">\n                        <StatusApplicationControl Start="2023-11-22" End="2023-11-24" RatePlanCode="BAR" InvCode="SNG" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true" />\n                        <LengthsOfStay ArrivalDateBased="false">\n                            <LengthOfStay Time="5" TimeUnit="Day" MinMaxMessageType="MinLOS" />\n                        </LengthsOfStay>\n                        <RestrictionStatus />\n                    </AvailStatusMessage>\n                    <AvailStatusMessage BookingLimit="100">\n                        <StatusApplicationControl Start="2023-11-22" End="2023-11-24" RatePlanCode="BAR" InvCode="SNG" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true" />\n                        <LengthsOfStay ArrivalDateBased="false">\n                            <LengthOfStay Time="5" TimeUnit="Day" MinMaxMessageType="MinLOS" />\n                        </LengthsOfStay>\n                        <RestrictionStatus Restriction="Arrival" Status="Close" />\n                    </AvailStatusMessage>\n                    <AvailStatusMessage BookingLimit="100">\n                        <StatusApplicationControl Start="2023-11-27" End="2023-11-28" RatePlanCode="BAR" InvCode="SNG" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true" />\n                        <LengthsOfStay ArrivalDateBased="false">\n                            <LengthOfStay Time="1" TimeUnit="Day" MinMaxMessageType="MinLOS" />\n                            <LengthOfStay Time="2" TimeUnit="Day" MinMaxMessageType="MaxLOS" />                        \n\t\t\t\t\t\t</LengthsOfStay>\n                        <RestrictionStatus Restriction="Departure" Status="Close" />\n                    </AvailStatusMessage>\n                    <AvailStatusMessage BookingLimit="20">\n                        <StatusApplicationControl Start="2024-01-07" End="2024-01-31" RatePlanCode="BAR" InvCode="SNG" InvType="ROOM" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true" />\n                        <RestrictionStatus MaxAdvancedBookingOffset="5" MinAdvancedBookingOffset="3" />\n                    </AvailStatusMessage>\n                </AvailStatusMessages>\n            </request>\n        </HotelAvailNotif>\n    </s:Body>\n</s:Envelope>\n'})})}),(0,s.jsx)(r.A,{value:"HotelRatePlanNotif",label:"HotelRatePlanNotif",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<s:Envelope xmlns:s = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:u = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n    <s:Header>\n        <o:Security s:mustUnderstand = "1" xmlns:o = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n            <o:UsernameToken u:Id = "uuid-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-x">\n                <o:Username>username</o:Username>\n                <o:Password Type = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</o:Password>\n            </o:UsernameToken>\n        </o:Security>\n    </s:Header>\n    <s:Body xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n        <HotelRatePlanNotif xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">\n            <request>\n                <POS xmlns="http://www.opentravel.org/OTA/2003/05">\n                    <Source>\n                        <RequestorID ID="Seller Code" />\n                        <BookingChannel>\n                            <CompanyName Code="Buyer Code" />\n                        </BookingChannel>\n                    </Source>\n                </POS>\n                <RatePlans HotelCode="2" xmlns="http://www.opentravel.org/OTA/2003/05">\n                    <RatePlan CurrencyCode="EUR" RatePlanCode="BAR" RateReturn="false" FreeChild="false" FreeBaby="false" RatePlanStatusType="Active">\n                        <Rates>\n                            <Rate Start="2024-01-01" End="2024-01-01">\n                                <BaseByGuestAmts>\n                                    <BaseByGuestAmt AmountAfterTax="100" Type="25" />\n                                </BaseByGuestAmts>\n                            </Rate>\n                        </Rates>\n                        <SellableProducts>\n                            <SellableProduct InvCode="SNG" InvType="ROOM" />\n                        </SellableProducts>\n                    </RatePlan>\n                    <RatePlan CurrencyCode="EUR" RatePlanCode="BAR" RateReturn="false" FreeChild="false" FreeBaby="false" RatePlanStatusType="Active">\n                        <Rates>\n                            <Rate Start="2024-01-02" End="2024-01-02">\n                                <BaseByGuestAmts>\n                                    <BaseByGuestAmt AmountAfterTax="100" Type="25" />\n                                </BaseByGuestAmts>\n                            </Rate>\n                        </Rates>\n                        <Supplements>\n                            <Supplement AgeQualifyingCode="10" Amount="10" Start="2024-01-02" End="2024-01-02" SupplementType="Board" InvCode="19" />\n                            <Supplement AgeQualifyingCode="8" Amount="5" Start="2024-01-02" End="2024-01-02" SupplementType="Board" InvCode="19" />\n                            <Supplement AgeQualifyingCode="7" Amount="0" Start="2024-01-02" End="2024-01-02" SupplementType="Board" InvCode="19" />\n                        </Supplements>\n                        <SellableProducts>\n                            <SellableProduct InvCode="SNG" InvType="ROOM" />\n                        </SellableProducts>\n                    </RatePlan>\n                </RatePlans>\n            </request>\n        </HotelRatePlanNotif>\n    </s:Body>\n</s:Envelope>\n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["After each request, a response should be provided from your side. For instance, if a ",(0,s.jsx)(t.code,{children:"HotelAvailNotif"})," request is received, a corresponding ",(0,s.jsx)(t.code,{children:"HotelAvailNotif"})," response should be sent, and so forth. There are two response options, ",(0,s.jsx)(t.strong,{children:"success"})," or ",(0,s.jsx)(t.strong,{children:"error"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"2-inventory-tool-setup",children:"2. Inventory tool SetUp"}),"\n",(0,s.jsxs)(t.p,{children:["Since Channel-X solution is integrated with the ",(0,s.jsx)(t.a,{href:"/docs/apps/inventory/extranet/overview",children:"Inventory Tool"}),", you must use our ",(0,s.jsx)(t.a,{href:"https://inventory.xmltravelgate.com/Account/Login?ReturnUrl=%2f",children:"Inventory extranet"})," in order to configure the setup for the hotels, rate plans and rooms contracted with the hoteliers, so that the Channel Managers can map them as well. Once mapped, the Channel Manager will load and update availability and prices for that inventory setup configured beforehand."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SetUp Inventory",src:n(23252).A+"",width:"1917",height:"634"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["To learn how to setup hotels, rate plans, and rooms in the Inventory Tool, please refer to the ",(0,s.jsx)(t.a,{href:"/docs/apps/inventory/extranet/set-up/overview",children:"Inventory SetUp section"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"3-channel-x-pushes-the-information-to-your-system",children:"3. Channel-X pushes the information to your system"}),"\n",(0,s.jsxs)(t.p,{children:["You will have two options for loading products into your system: you can either select the ",(0,s.jsx)(t.strong,{children:"Full Copy"})," tab in the Inventory's extranet to load all the products, or you can choose specific hotels to copy. The purpose of this is to initially receive the products into your system, and subsequently, to obtain a complete refresh of the product."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"FullCopy Inventory",src:n(12833).A+"",width:"1915",height:"436"})}),"\n",(0,s.jsxs)(t.p,{children:["Afterward, each update received from the Channel Manager will be pushed into your system. These smaller product requests, aimed at notifying Buyers of changes (such as price, availability, or inventory level), are referred to as ",(0,s.jsx)(t.strong,{children:"Delta"}),". Their purpose is to receive real-time changes to ensure that the product information is kept up to date."]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsx)(t.p,{children:"Congratulations on completing this quickstart tutorial! \ud83c\udf89 You've successfully learned the basics of retrieveing Channel Managers product to your system. But there's a world of knowledge waiting for you:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Explore the ",(0,s.jsx)(t.a,{href:"./making-requests/endpoint",children:"Making Requests"})," section to dive deep into how our XML API works and maximize its performance."]}),"\n",(0,s.jsxs)(t.li,{children:["Discover various methods/messages grouped by the following actions:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"./availability-rates-and-inventory/inventory",children:"Inventory"}),": Retrieve the inventory setup (hotel, rate, room)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"./availability-rates-and-inventory/availability",children:"Availability"})," and ",(0,s.jsx)(t.a,{href:"./availability-rates-and-inventory/rates",children:"Rate"}),": Retrieve rate availability, allotment conditions and rate prices and supplements."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Don't forget to perform the ",(0,s.jsx)(t.a,{href:"inventory-tool",children:"SetUp in the Inventory Tool"})," before proceeding with your first ",(0,s.jsx)(t.a,{href:"fullcopy-and-deltas",children:"Full Copy"}),"!"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["To enable bookings, it is ",(0,s.jsx)(t.strong,{children:"essential"})," to develop ",(0,s.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"Hotel-X Pull Buyers API"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"Our documentation is a treasure trove of additional features and functionalities to enhance your business. To uncover these valuable resources, explore our documentation further and make the most of these methods. Enjoy your journey!"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(96540),o=n(18215);const a={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return s.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>S});var s=n(58168),o=n(96540),a=n(18215),r=n(23104),i=n(56347),l=n(205),u=n(57485),c=n(31682),d=n(89466);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:o}}=e;return{value:t,label:n,attributes:s,default:o}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,c]=y({queryString:n,groupId:s}),[h,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(n);return[s,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=u??h;return x({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),m(e)}),[c,m,a]),tabValues:a}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),s=u[n].value;s!==i&&(d(t),l(s))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,s.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},r,{className:(0,a.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==s}))))}function b(e){const t=m(e);return o.createElement("div",{className:(0,a.A)("tabs-container",v.tabList)},o.createElement(g,(0,s.A)({},t,e)),o.createElement(w,(0,s.A)({},t,e)))}function S(e){const t=(0,f.A)();return o.createElement(b,(0,s.A)({key:String(t)},e),h(e.children))}},21020:(e,t,n)=>{var s=n(96540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var s,a={},u=null,c=null;for(s in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,s)&&!l.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:i.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},74848:(e,t,n)=>{e.exports=n(21020)},12833:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/fullcopy-inventory-7bbae46f4848d63e1ed2ee1553676f21.png"},23252:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/setup-inventory-6f4101b55763b874bcb2876cb7ef2ba5.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(96540);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);