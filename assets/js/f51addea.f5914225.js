/*! For license information please see f51addea.f5914225.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64844],{68873:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>x,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var a=t(74848),n=t(28453),d=t(96540);const c={id:"stats-request",title:"StatsRequest",hide_table_of_contents:!1},l=void 0,o={id:"objects/stats-request",title:"StatsRequest",description:"Contains internal information.",source:"@site/api/objects/stats-request.mdx",sourceDirName:"objects",slug:"/objects/stats-request",permalink:"/api/objects/stats-request",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"stats-request",title:"StatsRequest",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatsRealTimeRange",permalink:"/api/objects/stats-real-time-range"},next:{title:"Stats",permalink:"/api/objects/stats"}},r={},i=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:t,startOpen:c=!1})=>{const l={details:"details",summary:"summary",...(0,n.R)()},[o,r]=(0,d.useState)(c);return(0,a.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>StatsRequest.<b>total</b></code><Bullet></Bullet><code>Stat!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequesttotalstat--",level:4},{value:'<code>StatsRequest.<b>validation</b></code><Bullet></Bullet><code>Stat!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestvalidationstat--",level:4},{value:'<code>StatsRequest.<b>process</b></code><Bullet></Bullet><code>Stat!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestprocessstat--",level:4},{value:'<code>StatsRequest.<b>configuration</b></code><Bullet></Bullet><code>Stat!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestconfigurationstat--",level:4},{value:'<code>StatsRequest.<b>request</b></code><Bullet></Bullet><code>Stat!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestrequeststat--",level:4},{value:'<code>StatsRequest.<b>response</b></code><Bullet></Bullet><code>Stat!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestresponsestat--",level:4},{value:'<code>StatsRequest.<b>requestPlugin</b></code><Bullet></Bullet><code>StatPlugin</code> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestrequestpluginstatplugin-",level:4},{value:'<code>StatsRequest.<b>responsePlugin</b></code><Bullet></Bullet><code>StatPlugin</code> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestresponsepluginstatplugin-",level:4},{value:'<code>StatsRequest.<b>hotels</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequesthotelsint--",level:4},{value:'<code>StatsRequest.<b>zones</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestzonesint--",level:4},{value:'<code>StatsRequest.<b>cities</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestcitiesint--",level:4},{value:'<code>StatsRequest.<b>dockerID</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestdockeridstring--",level:4},{value:'<code>StatsRequest.<b>Accesses</b></code><Bullet></Bullet><code>[StatAccess!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsrequestaccessesstataccess--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Contains internal information."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type StatsRequest {\n  total: Stat!\n  validation: Stat!\n  process: Stat!\n  configuration: Stat!\n  request: Stat!\n  response: Stat!\n  requestPlugin: StatPlugin\n  responsePlugin: StatPlugin\n  hotels: Int!\n  zones: Int!\n  cities: Int!\n  dockerID: String!\n  Accesses: [StatAccess!]!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequesttotalstat--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"total"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/stat",children:(0,a.jsx)(s.code,{children:"Stat!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Total transaction time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestvalidationstat--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"validation"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/stat",children:(0,a.jsx)(s.code,{children:"Stat!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Request validation time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestprocessstat--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"process"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/stat",children:(0,a.jsx)(s.code,{children:"Stat!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Process time. Contains communication time, parse time and plugin time."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestconfigurationstat--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"configuration"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/stat",children:(0,a.jsx)(s.code,{children:"Stat!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Build access time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestrequeststat--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"request"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/stat",children:(0,a.jsx)(s.code,{children:"Stat!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Request time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestresponsestat--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"response"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/stat",children:(0,a.jsx)(s.code,{children:"Stat!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Response time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestrequestpluginstatplugin-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"requestPlugin"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/stat-plugin",children:(0,a.jsx)(s.code,{children:"StatPlugin"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Plugin execution time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestresponsepluginstatplugin-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"responsePlugin"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/stat-plugin",children:(0,a.jsx)(s.code,{children:"StatPlugin"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Plugin execution time"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequesthotelsint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"hotels"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Number of hotels"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestzonesint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"zones"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Number of zones"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestcitiesint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"cities"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Number of cities"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestdockeridstring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"dockerID"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Docker Id"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"statsrequestaccessesstataccess--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsRequest.",(0,a.jsx)("b",{children:"Accesses"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/stat-access",children:(0,a.jsx)(s.code,{children:"[StatAccess!]!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Detail access time"}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/objects/hotel-booking",children:(0,a.jsx)(s.code,{children:"HotelBooking"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/hotel-book-payload",children:(0,a.jsx)(s.code,{children:"HotelBookPayload"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/hotel-cancel-payload",children:(0,a.jsx)(s.code,{children:"HotelCancelPayload"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/hotel-commit-payload",children:(0,a.jsx)(s.code,{children:"HotelCommitPayload"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/hotel-quote",children:(0,a.jsx)(s.code,{children:"HotelQuote"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/hotel-search",children:(0,a.jsx)(s.code,{children:"HotelSearch"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/interfaces/response",children:(0,a.jsx)(s.code,{children:"Response"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"interface"})]})]})}function j(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,s,t)=>{var a=t(96540),n=Symbol.for("react.element"),d=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function r(e,s,t){var a,d={},r=null,i=null;for(a in void 0!==t&&(r=""+t),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(i=s.ref),s)c.call(s,a)&&!o.hasOwnProperty(a)&&(d[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===d[a]&&(d[a]=s[a]);return{$$typeof:n,type:e,key:r,ref:i,props:d,_owner:l.current}}s.Fragment=d,s.jsx=r,s.jsxs=r},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>l});var a=t(96540);const n={},d=a.createContext(n);function c(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);