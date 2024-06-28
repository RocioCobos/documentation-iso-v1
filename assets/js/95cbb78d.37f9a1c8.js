/*! For license information please see 95cbb78d.37f9a1c8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14967],{10569:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>g});var s=t(74848),o=t(28453),r=t(96540);const a={id:"book-where-input",title:"BookWhereInput",hide_table_of_contents:!1},d=void 0,i={id:"inputs/book-where-input",title:"BookWhereInput",description:"No description",source:"@site/api/inputs/book-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/book-where-input",permalink:"/api/inputs/book-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"book-where-input",title:"BookWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BookRoomInput",permalink:"/api/inputs/book-room-input"},next:{title:"BookingWhereInput",permalink:"/api/inputs/booking-where-input"}},c={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,o.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[i,c]=(0,r.useState)(a);return(0,s.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>BookWhereInput.<b>settings</b></code><Bullet></Bullet><code>PackageInputSettings!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookwhereinputsettingspackageinputsettings--",level:4},{value:'<code>BookWhereInput.<b>clientLocator</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookwhereinputclientlocatorstring-",level:4},{value:'<code>BookWhereInput.<b>optionId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookwhereinputoptionidstring--",level:4},{value:'<code>BookWhereInput.<b>quoteToken</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookwhereinputquotetokenstring--",level:4},{value:'<code>BookWhereInput.<b>holder</b></code><Bullet></Bullet><code>PackageHolder!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookwhereinputholderpackageholder--",level:4},{value:'<code>BookWhereInput.<b>passengers</b></code><Bullet></Bullet><code>[PackagePassengerInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookwhereinputpassengerspackagepassengerinput--",level:4},{value:'<code>BookWhereInput.<b>productTokens</b></code><Bullet></Bullet><code>[String!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookwhereinputproducttokensstring--",level:4}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input BookWhereInput {\n  settings: PackageInputSettings!\n  clientLocator: String\n  optionId: String!\n  quoteToken: String!\n  holder: PackageHolder!\n  passengers: [PackagePassengerInput!]!\n  productTokens: [String!]!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"bookwhereinputsettingspackageinputsettings--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookWhereInput.",(0,s.jsx)("b",{children:"settings"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/inputs/package-input-settings",children:(0,s.jsx)(n.code,{children:"PackageInputSettings!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Node that represents the configuration for an specified request"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookwhereinputclientlocatorstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookWhereInput.",(0,s.jsx)("b",{children:"clientLocator"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Client locator to be sent to the provider (in case said supplier accepts it)"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookwhereinputoptionidstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookWhereInput.",(0,s.jsx)("b",{children:"optionId"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The optionID received in the Quote Query as it has refreshed information"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookwhereinputquotetokenstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookWhereInput.",(0,s.jsx)("b",{children:"quoteToken"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The quote token received in the Quote Query"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookwhereinputholderpackageholder--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookWhereInput.",(0,s.jsx)("b",{children:"holder"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/inputs/package-holder",children:(0,s.jsx)(n.code,{children:"PackageHolder!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Information of the passenger that holds the booking (has to be complementary to the first passenger)"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookwhereinputpassengerspackagepassengerinput--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookWhereInput.",(0,s.jsx)("b",{children:"passengers"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/inputs/package-passenger-input",children:(0,s.jsx)(n.code,{children:"[PackagePassengerInput!]!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Information of each passenger for the booking (holder included and has to be the first one)"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookwhereinputproducttokensstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookWhereInput.",(0,s.jsx)("b",{children:"productTokens"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"[String!]!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"String list of tokens that are received in the itinerary map from quote"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},21020:(e,n,t)=>{var s=t(96540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,s)&&!i.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:c,ref:l,props:r,_owner:d.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(96540);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);