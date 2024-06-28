/*! For license information please see d848471b.499298c1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99629],{38123:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>g,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>r,toc:()=>x});var a=s(74848),l=s(28453),n=s(96540);const d={id:"hotel-xdefault-settings-data",title:"HotelXDefaultSettingsData"},c=void 0,r={id:"types/objects/hotel-xdefault-settings-data",title:"HotelXDefaultSettingsData",description:"No description",source:"@site/api/types/objects/hotel-xdefault-settings-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/hotel-xdefault-settings-data",permalink:"/api/types/objects/hotel-xdefault-settings-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-xdefault-settings-data",title:"HotelXDefaultSettingsData"},sidebar:"schemaSidebar",previous:{title:"HotelXDefaultPlugin",permalink:"/api/types/objects/hotel-xdefault-plugin"},next:{title:"HotelXDefaultSettings",permalink:"/api/types/objects/hotel-xdefault-settings"}},i={},o=()=>{const e={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,l.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const t={span:"span",...(0,l.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:s,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,l.R)()},[r,i]=(0,n.useState)(d);return(0,a.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXDefaultSettingsData.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatacontextstring-",level:4},{value:'<code>HotelXDefaultSettingsData.<b>language</b></code><Bullet></Bullet><code>Language</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatalanguagelanguage-",level:4},{value:'<code>HotelXDefaultSettingsData.<b>currency</b></code><Bullet></Bullet><code>Currency</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatacurrencycurrency-",level:4},{value:'<code>HotelXDefaultSettingsData.<b>nationality</b></code><Bullet></Bullet><code>Country</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatanationalitycountry-",level:4},{value:'<code>HotelXDefaultSettingsData.<b>market</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatamarketstring--",level:4},{value:'<code>HotelXDefaultSettingsData.<b>markets</b></code><Bullet></Bullet><code>[String!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatamarketsstring--",level:4},{value:'<code>HotelXDefaultSettingsData.<b>timeout</b></code><Bullet></Bullet><code>Timeout</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatatimeouttimeout-",level:4},{value:'<code>HotelXDefaultSettingsData.<b>businessRules</b></code><Bullet></Bullet><code>BusinessRules</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatabusinessrulesbusinessrules-",level:4},{value:'<code>HotelXDefaultSettingsData.<b>accesses</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdataaccessesstring--",level:4},{value:'<code>HotelXDefaultSettingsData.<b>cache</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatacachestring--",level:4},{value:'<code>HotelXDefaultSettingsData.<b>plugins</b></code><Bullet></Bullet><code>[HotelXDefaultPluginStep!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatapluginshotelxdefaultpluginstep--",level:4},{value:'<code>HotelXDefaultSettingsData.<b>title</b></code><Bullet></Bullet><code>PersonalTitleType</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxdefaultsettingsdatatitlepersonaltitletype-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type HotelXDefaultSettingsData {\n  context: String\n  language: Language\n  currency: Currency\n  nationality: Country\n  market: String @deprecated\n  markets: [String!]!\n  timeout: Timeout\n  businessRules: BusinessRules\n  accesses: [String!]\n  cache: [String!]\n  plugins: [HotelXDefaultPluginStep!]\n  title: PersonalTitleType\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatacontextstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"context"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Indicates the context of the I/O codes (hotel, board, room and rates)"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatalanguagelanguage-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"language"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/language",children:(0,a.jsx)(t.code,{children:"Language"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Language to be used in the request."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatacurrencycurrency-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"currency"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/currency",children:(0,a.jsx)(t.code,{children:"Currency"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Currency requested if supported by supplier."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatanationalitycountry-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"nationality"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/country",children:(0,a.jsx)(t.code,{children:"Country"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Nationality of the guest (use ISO3166_1_alfa_2)."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatamarketstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"market"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.admonition,{title:"DEPRECATED",type:"warning",children:(0,a.jsx)(t.p,{children:"Use markets instead. Deprecated from 2019-12-11."})}),"\n",(0,a.jsx)(t.p,{children:"Targeted zone, country or point of sale to be used in request."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatamarketsstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"markets"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"[String!]!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Targeted zones, countries or point-ofsale-to be used in request."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatatimeouttimeout-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"timeout"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/timeout",children:(0,a.jsx)(t.code,{children:"Timeout"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Group of timeouts to be used in the differents services"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatabusinessrulesbusinessrules-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"businessRules"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/business-rules",children:(0,a.jsx)(t.code,{children:"BusinessRules"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Business rules."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdataaccessesstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"accesses"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"[String!]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Default acceses"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatacachestring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"cache"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"[String!]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Cache accesses"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatapluginshotelxdefaultpluginstep--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"plugins"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/hotel-xdefault-plugin-step",children:(0,a.jsx)(t.code,{children:"[HotelXDefaultPluginStep!]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Default plugins"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxdefaultsettingsdatatitlepersonaltitletype-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXDefaultSettingsData.",(0,a.jsx)("b",{children:"title"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/personal-title-type",children:(0,a.jsx)(t.code,{children:"PersonalTitleType"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Default personal title"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/objects/hotel-xdefault-settings",children:(0,a.jsx)(t.code,{children:"HotelXDefaultSettings"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,t,s)=>{var a=s(96540),l=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,s){var a,n={},i=null,o=null;for(a in void 0!==s&&(i=""+s),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(o=t.ref),t)d.call(t,a)&&!r.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:l,type:e,key:i,ref:o,props:n,_owner:c.current}}t.Fragment=n,t.jsx=i,t.jsxs=i},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var a=s(96540);const l={},n=a.createContext(l);function d(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);