/*! For license information please see 591c08fc.635b05d2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67648],{70453:(e,o,t)=>{t.r(o),t.d(o,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>b});var n=t(74848),s=t(28453),a=t(96540);const d={id:"hotel-option-quote",title:"HotelOptionQuote",hide_table_of_contents:!1},l=void 0,c={id:"objects/hotel-option-quote",title:"HotelOptionQuote",description:"Contains information about quote",source:"@site/api/objects/hotel-option-quote.mdx",sourceDirName:"objects",slug:"/objects/hotel-option-quote",permalink:"/api/objects/hotel-option-quote",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-option-quote",title:"HotelOptionQuote",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelEdge",permalink:"/api/objects/hotel-edge"},next:{title:"HotelOptionRateRestriction",permalink:"/api/objects/hotel-option-rate-restriction"}},r={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const o={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const o={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:o,children:t,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[c,r]=(0,a.useState)(d);return(0,n.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:c?e:o}),c&&t]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelOptionQuote.<b>optionRefId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquoteoptionrefidstring--",level:4},{value:'<code>HotelOptionQuote.<b>status</b></code><Bullet></Bullet><code>StatusType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotestatusstatustype--",level:4},{value:'<code>HotelOptionQuote.<b>price</b></code><Bullet></Bullet><code>Price!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotepriceprice--",level:4},{value:'<code>HotelOptionQuote.<b>searchPrice</b></code><Bullet></Bullet><code>PriceChange</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotesearchpricepricechange-",level:4},{value:'<code>HotelOptionQuote.<b>cancelPolicy</b></code><Bullet></Bullet><code>CancelPolicy!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotecancelpolicycancelpolicy--",level:4},{value:'<code>HotelOptionQuote.<b>remarks</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquoteremarksstring-",level:4},{value:'<code>HotelOptionQuote.<b>surcharges</b></code><Bullet></Bullet><code>[Surcharge!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotesurchargessurcharge--",level:4},{value:'<code>HotelOptionQuote.<b>cardTypes</b></code><Bullet></Bullet><code>[PaymentCardType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotecardtypespaymentcardtype--",level:4},{value:'<code>HotelOptionQuote.<b>addOns</b></code><Bullet></Bullet><code>AddOns</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquoteaddonsaddons-",level:4},{value:'<code>HotelOptionQuote.<b>rooms</b></code><Bullet></Bullet><code>[RoomOptionQuote!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquoteroomsroomoptionquote--",level:4},{value:'<code>HotelOptionQuote.<b>paymentType</b></code><Bullet></Bullet><code>PaymentType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteloptionquotepaymenttypepaymenttype--",level:4},{value:"Member of",id:"member-of",level:3}];function g(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Contains information about quote"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-graphql",children:"type HotelOptionQuote {\n  optionRefId: String!\n  status: StatusType!\n  price: Price!\n  searchPrice: PriceChange\n  cancelPolicy: CancelPolicy!\n  remarks: String\n  surcharges: [Surcharge!]\n  cardTypes: [PaymentCardType!]\n  addOns: AddOns\n  rooms: [RoomOptionQuote!]\n  paymentType: PaymentType!\n}\n"})}),"\n",(0,n.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquoteoptionrefidstring--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"optionRefId"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/scalars/string",children:(0,n.jsx)(o.code,{children:"String!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"It is an unique identifier for the option created by HotelX system. The ID is used to make the quote query, so it is important not to modify it by any reason."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquotestatusstatustype--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/enums/status-type",children:(0,n.jsx)(o.code,{children:"StatusType!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"The possible values in the response's status are Available (OK) or On Request (RQ)."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquotepriceprice--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"price"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/objects/price",children:(0,n.jsx)(o.code,{children:"Price!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Specifies the prices (Gross, Net and Amount) of the returned option."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquotesearchpricepricechange-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"searchPrice"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/objects/price-change",children:(0,n.jsx)(o.code,{children:"PriceChange"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Specifies the price of the previous Search option, returned only if it has changed. If not, this field will be returned as Null."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquotecancelpolicycancelpolicy--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"cancelPolicy"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/objects/cancel-policy",children:(0,n.jsx)(o.code,{children:"CancelPolicy!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Specifies cancel policies of the returned option."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquoteremarksstring-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"remarks"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/scalars/string",children:(0,n.jsx)(o.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Additional information about the option."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquotesurchargessurcharge--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"surcharges"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/objects/surcharge",children:(0,n.jsx)(o.code,{children:"[Surcharge!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"List of surcharges of the returned option."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquotecardtypespaymentcardtype--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"cardTypes"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/enums/payment-card-type",children:(0,n.jsx)(o.code,{children:"[PaymentCardType!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"List of credit cards allowed for this option"}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquoteaddonsaddons-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"addOns"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/objects/add-ons",children:(0,n.jsx)(o.code,{children:"AddOns"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Additional information about the option. It is only available for the partners that uses our Distribution-X solution."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquoteroomsroomoptionquote--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"rooms"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/objects/room-option-quote",children:(0,n.jsx)(o.code,{children:"[RoomOptionQuote!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"List of rooms of the selected option."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hoteloptionquotepaymenttypepaymenttype--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOptionQuote.",(0,n.jsx)("b",{children:"paymentType"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(o.a,{href:"/api/enums/payment-type",children:(0,n.jsx)(o.code,{children:"PaymentType!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Indicates the payment type of the option returned. Possible options: MERCHANT, DIRECT, CARD_BOOKING, CARD_CHECK_IN and PAYX."}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/api/objects/hotel-quote",children:(0,n.jsx)(o.code,{children:"HotelQuote"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},21020:(e,o,t)=>{var n=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function r(e,o,t){var n,a={},r=null,i=null;for(n in void 0!==t&&(r=""+t),void 0!==o.key&&(r=""+o.key),void 0!==o.ref&&(i=o.ref),o)d.call(o,n)&&!c.hasOwnProperty(n)&&(a[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===a[n]&&(a[n]=o[n]);return{$$typeof:s,type:e,key:r,ref:i,props:a,_owner:l.current}}o.Fragment=a,o.jsx=r,o.jsxs=r},74848:(e,o,t)=>{e.exports=t(21020)},28453:(e,o,t)=>{t.d(o,{R:()=>d,x:()=>l});var n=t(96540);const s={},a=n.createContext(s);function d(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);