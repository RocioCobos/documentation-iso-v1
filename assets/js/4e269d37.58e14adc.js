/*! For license information please see 4e269d37.58e14adc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18395],{1667:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>h,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>b});var s=o(74848),n=o(28453),a=o(96540);const d={id:"hotel-option-quote",title:"HotelOptionQuote"},c=void 0,l={id:"types/objects/hotel-option-quote",title:"HotelOptionQuote",description:"Contains information about quote",source:"@site/api/types/objects/hotel-option-quote.mdx",sourceDirName:"types/objects",slug:"/types/objects/hotel-option-quote",permalink:"/api/types/objects/hotel-option-quote",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-option-quote",title:"HotelOptionQuote"},sidebar:"schemaSidebar",previous:{title:"HotelOneStepQuote",permalink:"/api/types/objects/hotel-one-step-quote"},next:{title:"HotelOptionRateRestriction",permalink:"/api/types/objects/hotel-option-rate-restriction"}},r={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:o,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[l,r]=(0,a.useState)(d);return(0,s.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&o]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelOptionQuote.<b>optionRefId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquoteoptionrefidstring--",level:4},{value:'<code>HotelOptionQuote.<b>status</b></code><Bullet></Bullet><code>StatusType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotestatusstatustype--",level:4},{value:'<code>HotelOptionQuote.<b>price</b></code><Bullet></Bullet><code>Price!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotepriceprice--",level:4},{value:'<code>HotelOptionQuote.<b>searchPrice</b></code><Bullet></Bullet><code>PriceChange</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotesearchpricepricechange-",level:4},{value:'<code>HotelOptionQuote.<b>cancelPolicy</b></code><Bullet></Bullet><code>CancelPolicy!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotecancelpolicycancelpolicy--",level:4},{value:'<code>HotelOptionQuote.<b>remarks</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquoteremarksstring-",level:4},{value:'<code>HotelOptionQuote.<b>surcharges</b></code><Bullet></Bullet><code>[Surcharge!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotesurchargessurcharge--",level:4},{value:'<code>HotelOptionQuote.<b>cardTypes</b></code><Bullet></Bullet><code>[PaymentCardType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotecardtypespaymentcardtype--",level:4},{value:'<code>HotelOptionQuote.<b>addOns</b></code><Bullet></Bullet><code>AddOns</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquoteaddonsaddons-",level:4},{value:'<code>HotelOptionQuote.<b>rooms</b></code><Bullet></Bullet><code>[RoomOptionQuote!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquoteroomsroomoptionquote--",level:4},{value:'<code>HotelOptionQuote.<b>paymentType</b></code><Bullet></Bullet><code>PaymentType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotepaymenttypepaymenttype--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Contains information about quote"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type HotelOptionQuote {\n  optionRefId: String!\n  status: StatusType!\n  price: Price!\n  searchPrice: PriceChange\n  cancelPolicy: CancelPolicy!\n  remarks: String\n  surcharges: [Surcharge!]\n  cardTypes: [PaymentCardType!]\n  addOns: AddOns\n  rooms: [RoomOptionQuote!]\n  paymentType: PaymentType!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquoteoptionrefidstring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"optionRefId"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"It is an unique identifier for the option created by HotelX system. The ID is used to make the quote query, so it is important not to modify it by any reason."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquotestatusstatustype--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/enums/status-type",children:(0,s.jsx)(t.code,{children:"StatusType!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The possible values in the response's status are Available (OK) or On Request (RQ)."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquotepriceprice--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"price"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/price",children:(0,s.jsx)(t.code,{children:"Price!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Specifies the prices (Gross, Net and Amount) of the returned option."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquotesearchpricepricechange-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"searchPrice"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/price-change",children:(0,s.jsx)(t.code,{children:"PriceChange"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Specifies the price of the previous Search option, returned only if it has changed. If not, this field will be returned as Null."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquotecancelpolicycancelpolicy--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"cancelPolicy"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/cancel-policy",children:(0,s.jsx)(t.code,{children:"CancelPolicy!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Specifies cancel policies of the returned option."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquoteremarksstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"remarks"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Additional information about the option."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquotesurchargessurcharge--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"surcharges"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/surcharge",children:(0,s.jsx)(t.code,{children:"[Surcharge!]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"List of surcharges of the returned option."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquotecardtypespaymentcardtype--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"cardTypes"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/enums/payment-card-type",children:(0,s.jsx)(t.code,{children:"[PaymentCardType!]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"List of credit cards allowed for this option"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquoteaddonsaddons-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"addOns"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/add-ons",children:(0,s.jsx)(t.code,{children:"AddOns"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Additional information about the option. It is only available for the partners that uses our Distribution-X solution."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquoteroomsroomoptionquote--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"rooms"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/room-option-quote",children:(0,s.jsx)(t.code,{children:"[RoomOptionQuote!]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"List of rooms of the selected option."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"hoteloptionquotepaymenttypepaymenttype--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,s.jsx)("b",{children:"paymentType"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/enums/payment-type",children:(0,s.jsx)(t.code,{children:"PaymentType!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Indicates the payment type of the option returned. Possible options: MERCHANT, DIRECT, CARD_BOOKING, CARD_CHECK_IN and PAYX."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/objects/hotel-one-step-quote",children:(0,s.jsx)(t.code,{children:"HotelOneStepQuote"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/hotel-quote",children:(0,s.jsx)(t.code,{children:"HotelQuote"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},21020:(e,t,o)=>{var s=o(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,t,o){var s,a={},r=null,i=null;for(s in void 0!==o&&(r=""+o),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(i=t.ref),t)d.call(t,s)&&!l.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:r,ref:i,props:a,_owner:c.current}}t.Fragment=a,t.jsx=r,t.jsxs=r},74848:(e,t,o)=>{e.exports=o(21020)},28453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>c});var s=o(96540);const n={},a=s.createContext(n);function d(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);