/*! For license information please see 11bdfed3.c9ef273a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26071],{28402:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>m,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>b,assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var s=d(74848),t=d(28453),o=d(96540);const n={id:"metadata-beds",title:"MetadataBeds"},r=void 0,l={id:"types/objects/metadata-beds",title:"MetadataBeds",description:"Information about beds.",source:"@site/api/types/objects/metadata-beds.mdx",sourceDirName:"types/objects",slug:"/types/objects/metadata-beds",permalink:"/api/types/objects/metadata-beds",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"metadata-beds",title:"MetadataBeds"},sidebar:"schemaSidebar",previous:{title:"MetadataAmendRooms",permalink:"/api/types/objects/metadata-amend-rooms"},next:{title:"MetadataBook",permalink:"/api/types/objects/metadata-book"}},i={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const a={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:a,children:d,startOpen:n=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[l,i]=(0,o.useState)(n);return(0,s.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&d]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>MetadataBeds.<b>informNumberOfUnits</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabedsinformnumberofunitsreviewedbool--",level:4},{value:'<code>MetadataBeds.<b>informSharedBed</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabedsinformsharedbedreviewedbool--",level:4},{value:'<code>MetadataBeds.<b>informBedType</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabedsinformbedtypereviewedbool--",level:4},{value:'<code>MetadataBeds.<b>informNumberOfBeds</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatabedsinformnumberofbedsreviewedbool--",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Information about beds."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type MetadataBeds {\n  informNumberOfUnits: ReviewedBool!\n  informSharedBed: ReviewedBool!\n  informBedType: ReviewedBool!\n  informNumberOfBeds: ReviewedBool!\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"metadatabedsinformnumberofunitsreviewedbool--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBeds.",(0,s.jsx)("b",{children:"informNumberOfUnits"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,s.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Indicates the number of units available per room."}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"metadatabedsinformsharedbedreviewedbool--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBeds.",(0,s.jsx)("b",{children:"informSharedBed"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,s.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Informs in Search response if beds in the room are shared."}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"metadatabedsinformbedtypereviewedbool--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBeds.",(0,s.jsx)("b",{children:"informBedType"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,s.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Informs if the supplier returns the beds types."}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"metadatabedsinformnumberofbedsreviewedbool--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataBeds.",(0,s.jsx)("b",{children:"informNumberOfBeds"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/reviewed-bool",children:(0,s.jsx)(a.code,{children:"ReviewedBool!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Informs if the supplier returns the number of beds for each room."}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/types/objects/metadata-room-candidates",children:(0,s.jsx)(a.code,{children:"MetadataRoomCandidates"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},21020:(e,a,d)=>{var s=d(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,d){var s,o={},i=null,c=null;for(s in void 0!==d&&(i=""+d),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(c=a.ref),a)n.call(a,s)&&!l.hasOwnProperty(s)&&(o[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===o[s]&&(o[s]=a[s]);return{$$typeof:t,type:e,key:i,ref:c,props:o,_owner:r.current}}a.Fragment=o,a.jsx=i,a.jsxs=i},74848:(e,a,d)=>{e.exports=d(21020)},28453:(e,a,d)=>{d.d(a,{R:()=>n,x:()=>r});var s=d(96540);const t={},o=s.createContext(t);function n(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);