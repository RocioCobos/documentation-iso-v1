/*! For license information please see 4b9ddb02.2ac79428.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[222],{78491:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>p,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>b});var o=a(74848),n=a(28453),t=a(96540);const d={id:"hotel-option-search",title:"HotelOptionSearch"},c=void 0,l={id:"types/objects/hotel-option-search",title:"HotelOptionSearch",description:"An option includes hotel information, meal plan, total price, conditions and room description",source:"@site/api/types/objects/hotel-option-search.mdx",sourceDirName:"types/objects",slug:"/types/objects/hotel-option-search",permalink:"/api/types/objects/hotel-option-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-option-search",title:"HotelOptionSearch"},sidebar:"schemaSidebar",previous:{title:"HotelOptionRate",permalink:"/api/types/objects/hotel-option-rate"},next:{title:"HotelQuote",permalink:"/api/types/objects/hotel-quote"}},r={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,n.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:a,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[l,r]=(0,t.useState)(d);return(0,o.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelOptionSearch.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchsuppliercodestring--",level:4},{value:'<code>HotelOptionSearch.<b>accessCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchaccesscodestring--",level:4},{value:'<code>HotelOptionSearch.<b>market</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchmarketstring--",level:4},{value:'<code>HotelOptionSearch.<b>markets</b></code><Bullet></Bullet><code>[String!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchmarketsstring--",level:4},{value:'<code>HotelOptionSearch.<b>hotelCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchhotelcodestring--",level:4},{value:'<code>HotelOptionSearch.<b>hotelCodeSupplier</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchhotelcodesupplierstring--",level:4},{value:'<code>HotelOptionSearch.<b>hotelName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchhotelnamestring-",level:4},{value:'<code>HotelOptionSearch.<b>boardCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchboardcodestring--",level:4},{value:'<code>HotelOptionSearch.<b>boardCodeSupplier</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchboardcodesupplierstring--",level:4},{value:'<code>HotelOptionSearch.<b>paymentType</b></code><Bullet></Bullet><code>PaymentType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchpaymenttypepaymenttype--",level:4},{value:'<code>HotelOptionSearch.<b>status</b></code><Bullet></Bullet><code>StatusType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchstatusstatustype--",level:4},{value:'<code>HotelOptionSearch.<b>occupancies</b></code><Bullet></Bullet><code>[Occupancy!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchoccupanciesoccupancy--",level:4},{value:'<code>HotelOptionSearch.<b>rooms</b></code><Bullet></Bullet><code>[Room!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchroomsroom--",level:4},{value:'<code>HotelOptionSearch.<b>price</b></code><Bullet></Bullet><code>Price!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchpriceprice--",level:4},{value:'<code>HotelOptionSearch.<b>supplements</b></code><Bullet></Bullet><code>[Supplement!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchsupplementssupplement--",level:4},{value:'<code>HotelOptionSearch.<b>surcharges</b></code><Bullet></Bullet><code>[Surcharge!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchsurchargessurcharge--",level:4},{value:'<code>HotelOptionSearch.<b>rateRules</b></code><Bullet></Bullet><code>[RateRulesType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchraterulesraterulestype--",level:4},{value:'<code>HotelOptionSearch.<b>cancelPolicy</b></code><Bullet></Bullet><code>CancelPolicy</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchcancelpolicycancelpolicy-",level:4},{value:'<code>HotelOptionSearch.<b>remarks</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchremarksstring-",level:4},{value:'<code>HotelOptionSearch.<b>addOns</b></code><Bullet></Bullet><code>AddOns</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchaddonsaddons-",level:4},{value:'<code>HotelOptionSearch.<b>token</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchtokenstring---",level:4},{value:'<code>HotelOptionSearch.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchidstring--",level:4},{value:'<code>HotelOptionSearch.<b>amenities</b></code><Bullet></Bullet><code>[Amenity!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchamenitiesamenity--",level:4},{value:'<code>HotelOptionSearch.<b>rateRulesExtended</b></code><Bullet></Bullet><code>[HotelOptionRateRule!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionsearchraterulesextendedhoteloptionraterule--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>BookableOptionSearch</code> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearch-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"An option includes hotel information, meal plan, total price, conditions and room description"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-graphql",children:"type HotelOptionSearch implements BookableOptionSearch {\n  supplierCode: String!\n  accessCode: String!\n  market: String @deprecated\n  markets: [String!]!\n  hotelCode: String!\n  hotelCodeSupplier: String!\n  hotelName: String\n  boardCode: String!\n  boardCodeSupplier: String!\n  paymentType: PaymentType!\n  status: StatusType!\n  occupancies: [Occupancy!]!\n  rooms: [Room!]!\n  price: Price!\n  supplements: [Supplement!]\n  surcharges: [Surcharge!]\n  rateRules: [RateRulesType!]\n  cancelPolicy: CancelPolicy\n  remarks: String\n  addOns: AddOns\n  token: String! @deprecated\n  id: String!\n  amenities: [Amenity!]\n  rateRulesExtended: [HotelOptionRateRule!]\n}\n"})}),"\n",(0,o.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchsuppliercodestring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"supplierCode"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Supplier that offers this option."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchaccesscodestring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"accessCode"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Access code of this option."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchmarketstring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"market"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String"})})," ",(0,o.jsx)(p,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.admonition,{title:"DEPRECATED",type:"warning",children:(0,o.jsx)(s.p,{children:"deprecated from 2019-12-11."})}),"\n",(0,o.jsx)(s.p,{children:"Market of this option."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchmarketsstring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"markets"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"[String!]!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Markets of this option"}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchhotelcodestring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"hotelCode"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Code of the hotel in the context selected."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchhotelcodesupplierstring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"hotelCodeSupplier"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Supplier's hotel code."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchhotelnamestring-",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"hotelName"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Name of the hotel."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchboardcodestring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"boardCode"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Code of the board in the context selected."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchboardcodesupplierstring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"boardCodeSupplier"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Supplier's board code."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchpaymenttypepaymenttype--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"paymentType"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/enums/payment-type",children:(0,o.jsx)(s.code,{children:"PaymentType!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Indicates the payment type of the option returned. Possible options: MERCHANT, DIRECT, CARD_BOOKING, CARD_CHECK_IN and PAYX."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchstatusstatustype--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"status"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/enums/status-type",children:(0,o.jsx)(s.code,{children:"StatusType!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"The possible values in the response's status are Available (OK) or On Request (RQ)."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchoccupanciesoccupancy--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"occupancies"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/occupancy",children:(0,o.jsx)(s.code,{children:"[Occupancy!]!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"List of occupancies for the request"}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchroomsroom--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"rooms"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/room",children:(0,o.jsx)(s.code,{children:"[Room!]!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"List of rooms of the option returned."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchpriceprice--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"price"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/price",children:(0,o.jsx)(s.code,{children:"Price!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Specifies the prices (Gross, Net and Amount) of the option returned."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchsupplementssupplement--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"supplements"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/supplement",children:(0,o.jsx)(s.code,{children:"[Supplement!]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"List of supplements of the option returned."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchsurchargessurcharge--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"surcharges"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/surcharge",children:(0,o.jsx)(s.code,{children:"[Surcharge!]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"List of surcharges of the option returned."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchraterulesraterulestype--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"rateRules"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/enums/rate-rules-type",children:(0,o.jsx)(s.code,{children:"[RateRulesType!]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Specifies rate rules of the option returned. Note: If the option does not have any rate rule, then the option is NORMAL rate."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchcancelpolicycancelpolicy-",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"cancelPolicy"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/cancel-policy",children:(0,o.jsx)(s.code,{children:"CancelPolicy"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Specifies cancel policies of the option returned."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchremarksstring-",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"remarks"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Additional information about the option."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchaddonsaddons-",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"addOns"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/add-ons",children:(0,o.jsx)(s.code,{children:"AddOns"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Additional information about the option. It is only available for the partners that uses our Distribution-X solution."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchtokenstring---",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"token"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.admonition,{title:"DEPRECATED",type:"warning",children:(0,o.jsx)(s.p,{children:"deprecated from 2019-02-05."})}),"\n",(0,o.jsx)(s.p,{children:"Token for Deep Link"}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchidstring--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"id"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(s.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"OptionRefID is a unique identifier assigned to each option. It should not be modified and should not be used externally, as it is an internal TGX system identifier."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchamenitiesamenity--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"amenities"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/amenity",children:(0,o.jsx)(s.code,{children:"[Amenity!]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Option-level amenities provide information about features intended to enhance comfort and enjoyment. Examples include swimming pools, shopping centers, etc."}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"hoteloptionsearchraterulesextendedhoteloptionraterule--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionSearch.",(0,o.jsx)("b",{children:"rateRulesExtended"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/hotel-option-rate-rule",children:(0,o.jsx)(s.code,{children:"[HotelOptionRateRule!]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"RateRules contains all the rules that will be applied to book the option."}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,o.jsxs)(s.h4,{id:"bookableoptionsearch-",children:[(0,o.jsx)(s.a,{href:"/api/types/interfaces/bookable-option-search",children:(0,o.jsx)(s.code,{children:"BookableOptionSearch"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,o.jsx)(s.blockquote,{children:"\n"}),"\n",(0,o.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/api/types/objects/hotel-search",children:(0,o.jsx)(s.code,{children:"HotelSearch"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},21020:(e,s,a)=>{var o=a(96540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,s,a){var o,t={},r=null,i=null;for(o in void 0!==a&&(r=""+a),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(i=s.ref),s)d.call(s,o)&&!l.hasOwnProperty(o)&&(t[o]=s[o]);if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===t[o]&&(t[o]=s[o]);return{$$typeof:n,type:e,key:r,ref:i,props:t,_owner:c.current}}s.Fragment=t,s.jsx=r,s.jsxs=r},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>d,x:()=>c});var o=a(96540);const n={},t=o.createContext(n);function d(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);