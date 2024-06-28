/*! For license information please see e193fbc7.d60e7fba.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54719],{4263:(e,s,o)=>{o.r(s),o.d(s,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=o(74848),r=o(28453),n=o(96540);const a={id:"rooms-set-up-rs",title:"RoomsSetUpRs"},d=void 0,c={id:"types/objects/rooms-set-up-rs",title:"RoomsSetUpRs",description:"Represents the response object for room setup operations.",source:"@site/api/types/objects/rooms-set-up-rs.mdx",sourceDirName:"types/objects",slug:"/types/objects/rooms-set-up-rs",permalink:"/api/types/objects/rooms-set-up-rs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"rooms-set-up-rs",title:"RoomsSetUpRs"},sidebar:"schemaSidebar",previous:{title:"RoomsRs",permalink:"/api/types/objects/rooms-rs"},next:{title:"Rule",permalink:"/api/types/objects/rule"}},l={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,r.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:s,children:o,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,r.R)()},[c,l]=(0,n.useState)(a);return(0,t.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&o]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>RoomsSetUpRs.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomssetuprsadvisemessagesadvisemessage--",level:4},{value:'<code>RoomsSetUpRs.<b>rateCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"roomssetuprsratecodestring-",level:4},{value:'<code>RoomsSetUpRs.<b>rooms</b></code><Bullet></Bullet><code>[InventoryRoomSetUp]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomssetuprsroomsinventoryroomsetup--",level:4},{value:'<code>RoomsSetUpRs.<b>success</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomssetuprssuccessboolean--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Represents the response object for room setup operations."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type RoomsSetUpRs {\n  adviseMessages: [AdviseMessage]\n  rateCode: String\n  rooms: [InventoryRoomSetUp]\n  success: Boolean!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"roomssetuprsadvisemessagesadvisemessage--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomsSetUpRs.",(0,t.jsx)("b",{children:"adviseMessages"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Collection of advise messages."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"roomssetuprsratecodestring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomsSetUpRs.",(0,t.jsx)("b",{children:"rateCode"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Rate code associated with the rooms."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"roomssetuprsroomsinventoryroomsetup--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomsSetUpRs.",(0,t.jsx)("b",{children:"rooms"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-room-set-up",children:(0,t.jsx)(s.code,{children:"[InventoryRoomSetUp]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Collection of room setup responses."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"roomssetuprssuccessboolean--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomsSetUpRs.",(0,t.jsx)("b",{children:"success"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Indicates whether the operation was successful based on the absence of advise messages."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-mutation",children:(0,t.jsx)(s.code,{children:"InventoryMutation"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/types/objects/inventory-query",children:(0,t.jsx)(s.code,{children:"InventoryQuery"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,s,o)=>{var t=o(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,o){var t,n={},l=null,i=null;for(t in void 0!==o&&(l=""+o),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)a.call(s,t)&&!c.hasOwnProperty(t)&&(n[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===n[t]&&(n[t]=s[t]);return{$$typeof:r,type:e,key:l,ref:i,props:n,_owner:d.current}}s.Fragment=n,s.jsx=l,s.jsxs=l},74848:(e,s,o)=>{e.exports=o(21020)},28453:(e,s,o)=>{o.d(s,{R:()=>a,x:()=>d});var t=o(96540);const r={},n=t.createContext(r);function a(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);