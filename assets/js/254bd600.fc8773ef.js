/*! For license information please see 254bd600.fc8773ef.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36124],{86599:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>g});var r=a(74848),n=a(28453),s=a(96540);const c={id:"hotel-criteria-search-input",title:"HotelCriteriaSearchInput"},i=void 0,l={id:"types/inputs/hotel-criteria-search-input",title:"HotelCriteriaSearchInput",description:"Search criteria offers versatility in search options, with certain fields marked as mandatory",source:"@site/api/types/inputs/hotel-criteria-search-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/hotel-criteria-search-input",permalink:"/api/types/inputs/hotel-criteria-search-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-criteria-search-input",title:"HotelCriteriaSearchInput"},sidebar:"schemaSidebar",previous:{title:"HotelCriteriaQuoteInput",permalink:"/api/types/inputs/hotel-criteria-quote-input"},next:{title:"HotelFilterInput",permalink:"/api/types/inputs/hotel-filter-input"}},o={},d=()=>{const e={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,n.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:a,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,n.R)()},[l,o]=(0,s.useState)(c);return(0,r.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&a]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelCriteriaSearchInput.<b>checkIn</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriasearchinputcheckindate--",level:4},{value:'<code>HotelCriteriaSearchInput.<b>checkOut</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriasearchinputcheckoutdate--",level:4},{value:'<code>HotelCriteriaSearchInput.<b>hotels</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriasearchinputhotelsstring--",level:4},{value:'<code>HotelCriteriaSearchInput.<b>destinations</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriasearchinputdestinationsstring--",level:4},{value:'<code>HotelCriteriaSearchInput.<b>occupancies</b></code><Bullet></Bullet><code>[RoomInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriasearchinputoccupanciesroominput--",level:4},{value:'<code>HotelCriteriaSearchInput.<b>language</b></code><Bullet></Bullet><code>Language</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriasearchinputlanguagelanguage-",level:4},{value:'<code>HotelCriteriaSearchInput.<b>currency</b></code><Bullet></Bullet><code>Currency</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriasearchinputcurrencycurrency-",level:4},{value:'<code>HotelCriteriaSearchInput.<b>nationality</b></code><Bullet></Bullet><code>Country</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriasearchinputnationalitycountry-",level:4},{value:'<code>HotelCriteriaSearchInput.<b>markets</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelcriteriasearchinputmarketsstring--",level:4}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Search criteria offers versatility in search options, with certain fields marked as mandatory\n(checkIn, checkOut, hotels etc.) and others as optional (language, currency, nationality etc.).\nThis flexibility empowers you to create a personalized Search Query, tailoring the requested fields to your specific needs."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input HotelCriteriaSearchInput {\n  checkIn: Date!\n  checkOut: Date!\n  hotels: [String!]\n  destinations: [String!]\n  occupancies: [RoomInput!]!\n  language: Language\n  currency: Currency\n  nationality: Country\n  markets: [String!]\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriasearchinputcheckindate--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaSearchInput.",(0,r.jsx)("b",{children:"checkIn"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/date",children:(0,r.jsx)(t.code,{children:"Date!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Check-in date for booking\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriasearchinputcheckoutdate--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaSearchInput.",(0,r.jsx)("b",{children:"checkOut"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/date",children:(0,r.jsx)(t.code,{children:"Date!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Check-out for booking\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriasearchinputhotelsstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaSearchInput.",(0,r.jsx)("b",{children:"hotels"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"[String!]"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Hotel Codes."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriasearchinputdestinationsstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaSearchInput.",(0,r.jsx)("b",{children:"destinations"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"[String!]"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Destination codes."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriasearchinputoccupanciesroominput--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaSearchInput.",(0,r.jsx)("b",{children:"occupancies"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/room-input",children:(0,r.jsx)(t.code,{children:"[RoomInput!]!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"For multi-room bookings, this array will contain multiple elements (rooms).\nFor each room you have to specify its own occupancy."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriasearchinputlanguagelanguage-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaSearchInput.",(0,r.jsx)("b",{children:"language"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/language",children:(0,r.jsx)(t.code,{children:"Language"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Language to be used in the request."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriasearchinputcurrencycurrency-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaSearchInput.",(0,r.jsx)("b",{children:"currency"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/currency",children:(0,r.jsx)(t.code,{children:"Currency"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Currency requested if supported by supplier"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriasearchinputnationalitycountry-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaSearchInput.",(0,r.jsx)("b",{children:"nationality"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/country",children:(0,r.jsx)(t.code,{children:"Country"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Nationality of the guest (use ISO3166_1_alfa_2)"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelcriteriasearchinputmarketsstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCriteriaSearchInput.",(0,r.jsx)("b",{children:"markets"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,r.jsx)(t.code,{children:"[String!]"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Targeted zones, countries or point-of-sale to be used in request."}),"\n"]})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,t,a)=>{var r=a(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,a){var r,s={},o=null,d=null;for(r in void 0!==a&&(o=""+a),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:o,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>i});var r=a(96540);const n={},s=r.createContext(n);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);