/*! For license information please see 170413b3.e3a7ea06.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32158],{61403:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>j,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var t=a(74848),c=a(28453),n=a(96540);const r={id:"float",title:"Float"},d=void 0,i={id:"types/scalars/float",title:"Float",description:"The Float scalar type represents signed double-precision fractional values as specified by IEEE 754.",source:"@site/api/types/scalars/float.mdx",sourceDirName:"types/scalars",slug:"/types/scalars/float",permalink:"/api/types/scalars/float",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"float",title:"Float"},sidebar:"schemaSidebar",previous:{title:"FlightNumber",permalink:"/api/types/scalars/flight-number"},next:{title:"ID",permalink:"/api/types/scalars/id"}},o={},l=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const s={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:s,children:a,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,c.R)()},[i,o]=(0,n.useState)(r);return(0,t.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})},h=[{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Float"})," scalar type represents signed double-precision fractional values as specified by ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/IEEE_floating_point",children:"IEEE 754"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"scalar Float\n"})}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/additional-guest",children:(0,t.jsx)(s.code,{children:"AdditionalGuest"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/additional-guest-input",children:(0,t.jsx)(s.code,{children:"AdditionalGuestInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/aggregate-sum",children:(0,t.jsx)(s.code,{children:"AggregateSum"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/amend-penalty-input",children:(0,t.jsx)(s.code,{children:"AmendPenaltyInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/amount-cancel-penalty",children:(0,t.jsx)(s.code,{children:"AmountCancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/amount-type",children:(0,t.jsx)(s.code,{children:"AmountType"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/asset",children:(0,t.jsx)(s.code,{children:"Asset"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/asset-create-through-creating-other-subentity",children:(0,t.jsx)(s.code,{children:"AssetCreateThroughCreatingOtherSubentity"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/audit-data",children:(0,t.jsx)(s.code,{children:"AuditData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/avail-no-k",children:(0,t.jsx)(s.code,{children:"AvailNoK"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/booking-aggregation",children:(0,t.jsx)(s.code,{children:"BookingAggregation"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/cancel-penalty",children:(0,t.jsx)(s.code,{children:"CancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/cancel-penalty-input",children:(0,t.jsx)(s.code,{children:"CancelPenaltyInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/coordinates",children:(0,t.jsx)(s.code,{children:"Coordinates"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/delta-price-input",children:(0,t.jsx)(s.code,{children:"DeltaPriceInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/exchange",children:(0,t.jsx)(s.code,{children:"Exchange"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/ferry-cancel-penalty",children:(0,t.jsx)(s.code,{children:"FerryCancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/float-filter",children:(0,t.jsx)(s.code,{children:"FloatFilter"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/insights-portfolio-stats-data",children:(0,t.jsx)(s.code,{children:"InsightsPortfolioStatsData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-cancel-penalty",children:(0,t.jsx)(s.code,{children:"InventoryCancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/inventory-cancel-penalty-input",children:(0,t.jsx)(s.code,{children:"InventoryCancelPenaltyInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-payment-policies",children:(0,t.jsx)(s.code,{children:"InventoryPaymentPolicies"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-surcharge",children:(0,t.jsx)(s.code,{children:"InventorySurcharge"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/inventory-surcharge-input",children:(0,t.jsx)(s.code,{children:"InventorySurchargeInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/look-2-book",children:(0,t.jsx)(s.code,{children:"Look2book"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/markup",children:(0,t.jsx)(s.code,{children:"Markup"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/meal-plan-supplement-load",children:(0,t.jsx)(s.code,{children:"MealPlanSupplementLoad"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/meal-plan-supplement-load-input",children:(0,t.jsx)(s.code,{children:"MealPlanSupplementLoadInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/nullable-float-filter",children:(0,t.jsx)(s.code,{children:"NullableFloatFilter"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/package-cancel-penalty",children:(0,t.jsx)(s.code,{children:"PackageCancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/package-price",children:(0,t.jsx)(s.code,{children:"PackagePrice"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/payment-policies-create-input",children:(0,t.jsx)(s.code,{children:"PaymentPoliciesCreateInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/payment-policies-update-input",children:(0,t.jsx)(s.code,{children:"PaymentPoliciesUpdateInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/price",children:(0,t.jsx)(s.code,{children:"Price"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/interfaces/priceable",children:(0,t.jsx)(s.code,{children:"Priceable"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"interface"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/price-adjust",children:(0,t.jsx)(s.code,{children:"PriceAdjust"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/price-adjust-input",children:(0,t.jsx)(s.code,{children:"PriceAdjustInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/price-change",children:(0,t.jsx)(s.code,{children:"PriceChange"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/price-input",children:(0,t.jsx)(s.code,{children:"PriceInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/price-per-occupancy",children:(0,t.jsx)(s.code,{children:"PricePerOccupancy"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/price-per-occupancy-input",children:(0,t.jsx)(s.code,{children:"PricePerOccupancyInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/price-per-room",children:(0,t.jsx)(s.code,{children:"PricePerRoom"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/price-per-room-input",children:(0,t.jsx)(s.code,{children:"PricePerRoomInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/price-per-standard-occupancy",children:(0,t.jsx)(s.code,{children:"PricePerStandardOccupancy"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/price-per-standard-occupancy-input",children:(0,t.jsx)(s.code,{children:"PricePerStandardOccupancyInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/price-static",children:(0,t.jsx)(s.code,{children:"PriceStatic"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/price-under-standard-occupancy",children:(0,t.jsx)(s.code,{children:"PriceUnderStandardOccupancy"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/price-under-standard-occupancy-input",children:(0,t.jsx)(s.code,{children:"PriceUnderStandardOccupancyInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/profile-create-input",children:(0,t.jsx)(s.code,{children:"ProfileCreateInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/profile-data",children:(0,t.jsx)(s.code,{children:"ProfileData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/profile-update-input",children:(0,t.jsx)(s.code,{children:"ProfileUpdateInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/rate",children:(0,t.jsx)(s.code,{children:"Rate"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/rule",children:(0,t.jsx)(s.code,{children:"Rule"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/stat",children:(0,t.jsx)(s.code,{children:"Stat"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(s.a,{href:"/api/types/inputs/virtual-credit-card-input",children:(0,t.jsx)(s.code,{children:"VirtualCreditCardInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"})]})]})}function y(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,s,a)=>{var t=a(96540),c=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,a){var t,n={},o=null,l=null;for(t in void 0!==a&&(o=""+a),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(l=s.ref),s)r.call(s,t)&&!i.hasOwnProperty(t)&&(n[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===n[t]&&(n[t]=s[t]);return{$$typeof:c,type:e,key:o,ref:l,props:n,_owner:d.current}}s.Fragment=n,s.jsx=o,s.jsxs=o},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>d});var t=a(96540);const c={},n=t.createContext(c);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);