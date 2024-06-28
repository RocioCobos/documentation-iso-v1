/*! For license information please see 90aac7eb.3744c8ab.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13121],{363:(e,s,c)=>{c.r(s),c.d(s,{Badge:()=>h,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>i,toc:()=>b});var a=c(74848),t=c(28453),d=c(96540);const n={id:"speed-access-data",title:"SpeedAccessData"},o=void 0,i={id:"types/objects/speed-access-data",title:"SpeedAccessData",description:"No description",source:"@site/api/types/objects/speed-access-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/speed-access-data",permalink:"/api/types/objects/speed-access-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"speed-access-data",title:"SpeedAccessData"},sidebar:"schemaSidebar",previous:{title:"SpeedAccessCollection",permalink:"/api/types/objects/speed-access-collection"},next:{title:"SpeedAccessEdge",permalink:"/api/types/objects/speed-access-edge"}},r={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,t.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,t.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:s,children:c,startOpen:n=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[i,r]=(0,d.useState)(n);return(0,a.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&c]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>SpeedAccessData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedaccessdatacodeid--",level:4},{value:'<code>SpeedAccessData.<b>access</b></code><Bullet></Bullet><code>Access!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedaccessdataaccessaccess--",level:4},{value:'<code>SpeedAccessData.<b>historicalActions</b></code><Bullet></Bullet><code>SpeedHistoricalActions</code> <Badge class="badge badge--secondary"></Badge>',id:"speedaccessdatahistoricalactionsspeedhistoricalactions-",level:4},{value:'<code>SpeedAccessData.historicalActions.<b>where</b></code><Bullet></Bullet><code>HistoricalActionsWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"speedaccessdatahistoricalactionswherehistoricalactionswhereinput-",level:5},{value:'<code>SpeedAccessData.<b>configuration</b></code><Bullet></Bullet><code>SpeedConfiguration!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedaccessdataconfigurationspeedconfiguration--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type SpeedAccessData {\n  code: ID!\n  access: Access!\n  historicalActions(where: HistoricalActionsWhereInput): SpeedHistoricalActions\n  configuration: SpeedConfiguration!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"speedaccessdatacodeid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccessData.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(s.code,{children:"ID!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"speedaccessdataaccessaccess--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccessData.",(0,a.jsx)("b",{children:"access"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/access",children:(0,a.jsx)(s.code,{children:"Access!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"speedaccessdatahistoricalactionsspeedhistoricalactions-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccessData.",(0,a.jsx)("b",{children:"historicalActions"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/speed-historical-actions",children:(0,a.jsx)(s.code,{children:"SpeedHistoricalActions"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.h5,{id:"speedaccessdatahistoricalactionswherehistoricalactionswhereinput-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccessData.historicalActions.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/inputs/historical-actions-where-input",children:(0,a.jsx)(s.code,{children:"HistoricalActionsWhereInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"speedaccessdataconfigurationspeedconfiguration--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccessData.",(0,a.jsx)("b",{children:"configuration"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/speed-configuration",children:(0,a.jsx)(s.code,{children:"SpeedConfiguration!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/speed-access",children:(0,a.jsx)(s.code,{children:"SpeedAccess"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,s,c)=>{var a=c(96540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function r(e,s,c){var a,d={},r=null,l=null;for(a in void 0!==c&&(r=""+c),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(l=s.ref),s)n.call(s,a)&&!i.hasOwnProperty(a)&&(d[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===d[a]&&(d[a]=s[a]);return{$$typeof:t,type:e,key:r,ref:l,props:d,_owner:o.current}}s.Fragment=d,s.jsx=r,s.jsxs=r},74848:(e,s,c)=>{e.exports=c(21020)},28453:(e,s,c)=>{c.d(s,{R:()=>n,x:()=>o});var a=c(96540);const t={},d=a.createContext(t);function n(e){const s=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);