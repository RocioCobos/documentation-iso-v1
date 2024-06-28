/*! For license information please see 21261958.66925698.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70917],{11468:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>x,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var t=d(74848),n=d(28453),s=d(96540);const o={id:"metadata-room-candidates",title:"MetadataRoomCandidates"},r=void 0,i={id:"types/objects/metadata-room-candidates",title:"MetadataRoomCandidates",description:"Contains information about the restrictions of the rooms.",source:"@site/api/types/objects/metadata-room-candidates.mdx",sourceDirName:"types/objects",slug:"/types/objects/metadata-room-candidates",permalink:"/api/types/objects/metadata-room-candidates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"metadata-room-candidates",title:"MetadataRoomCandidates"},sidebar:"schemaSidebar",previous:{title:"MetadataQuote",permalink:"/api/types/objects/metadata-quote"},next:{title:"MetadataSearchDestinations",permalink:"/api/types/objects/metadata-search-destinations"}},c={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const a={a:"a",...(0,n.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const a={span:"span",...(0,n.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:d,startOpen:o=!1})=>{const r={details:"details",summary:"summary",...(0,n.R)()},[i,c]=(0,s.useState)(o);return(0,t.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&d]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>MetadataRoomCandidates.<b>maxNumberRoomCandidates</b></code><Bullet></Bullet><code>ReviewedInt!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataroomcandidatesmaxnumberroomcandidatesreviewedint--",level:4},{value:'<code>MetadataRoomCandidates.<b>paxTypeRangeInRoomCandidates</b></code><Bullet></Bullet><code>ReviwedPaxTypeRangeInRoomCandidates</code> <Badge class="badge badge--secondary"></Badge>',id:"metadataroomcandidatespaxtyperangeinroomcandidatesreviwedpaxtyperangeinroomcandidates-",level:4},{value:'<code>MetadataRoomCandidates.<b>maxPaxInRoomCandidates</b></code><Bullet></Bullet><code>ReviewedInt!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataroomcandidatesmaxpaxinroomcandidatesreviewedint--",level:4},{value:'<code>MetadataRoomCandidates.<b>maxPaxInAllRooms</b></code><Bullet></Bullet><code>ReviewedInt!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataroomcandidatesmaxpaxinallroomsreviewedint--",level:4},{value:'<code>MetadataRoomCandidates.<b>requiredRoomWithSamePaxConfiguration</b></code><Bullet></Bullet><code>RequiredRoomWithSamePaxConfiguration!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataroomcandidatesrequiredroomwithsamepaxconfigurationrequiredroomwithsamepaxconfiguration--",level:4},{value:'<code>MetadataRoomCandidates.<b>rateRules</b></code><Bullet></Bullet><code>[ReviewedRateRule!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataroomcandidatesraterulesreviewedraterule--",level:4},{value:'<code>MetadataRoomCandidates.<b>beds</b></code><Bullet></Bullet><code>MetadataBeds!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataroomcandidatesbedsmetadatabeds--",level:4},{value:'<code>MetadataRoomCandidates.<b>ageRange</b></code><Bullet></Bullet><code>ReviewedAgeRanges!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataroomcandidatesagerangereviewedageranges--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Contains information about the restrictions of the rooms."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type MetadataRoomCandidates {\n  maxNumberRoomCandidates: ReviewedInt!\n  paxTypeRangeInRoomCandidates: ReviwedPaxTypeRangeInRoomCandidates\n  maxPaxInRoomCandidates: ReviewedInt!\n  maxPaxInAllRooms: ReviewedInt!\n  requiredRoomWithSamePaxConfiguration: RequiredRoomWithSamePaxConfiguration!\n  rateRules: [ReviewedRateRule!]!\n  beds: MetadataBeds!\n  ageRange: ReviewedAgeRanges!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"metadataroomcandidatesmaxnumberroomcandidatesreviewedint--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataRoomCandidates.",(0,t.jsx)("b",{children:"maxNumberRoomCandidates"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/reviewed-int",children:(0,t.jsx)(a.code,{children:"ReviewedInt!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Maximum number of room candidates that can be requested in the same search request."}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"metadataroomcandidatespaxtyperangeinroomcandidatesreviwedpaxtyperangeinroomcandidates-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataRoomCandidates.",(0,t.jsx)("b",{children:"paxTypeRangeInRoomCandidates"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/reviwed-pax-type-range-in-room-candidates",children:(0,t.jsx)(a.code,{children:"ReviwedPaxTypeRangeInRoomCandidates"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Contains information about the age restrictions of the guests in a room."}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"metadataroomcandidatesmaxpaxinroomcandidatesreviewedint--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataRoomCandidates.",(0,t.jsx)("b",{children:"maxPaxInRoomCandidates"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/reviewed-int",children:(0,t.jsx)(a.code,{children:"ReviewedInt!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Maximum number paxs in same room that can be requested in the same search request."}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"metadataroomcandidatesmaxpaxinallroomsreviewedint--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataRoomCandidates.",(0,t.jsx)("b",{children:"maxPaxInAllRooms"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/reviewed-int",children:(0,t.jsx)(a.code,{children:"ReviewedInt!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Total amount of paxs that can be requested in the same search request."}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"metadataroomcandidatesrequiredroomwithsamepaxconfigurationrequiredroomwithsamepaxconfiguration--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataRoomCandidates.",(0,t.jsx)("b",{children:"requiredRoomWithSamePaxConfiguration"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/required-room-with-same-pax-configuration",children:(0,t.jsx)(a.code,{children:"RequiredRoomWithSamePaxConfiguration!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Indicates whether all of the distributions must have the same configuration."}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"metadataroomcandidatesraterulesreviewedraterule--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataRoomCandidates.",(0,t.jsx)("b",{children:"rateRules"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/reviewed-rate-rule",children:(0,t.jsx)(a.code,{children:"[ReviewedRateRule!]!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"List of rate rule types supported by the supplie"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"metadataroomcandidatesbedsmetadatabeds--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataRoomCandidates.",(0,t.jsx)("b",{children:"beds"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/metadata-beds",children:(0,t.jsx)(a.code,{children:"MetadataBeds!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Information about beds."}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"metadataroomcandidatesagerangereviewedageranges--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataRoomCandidates.",(0,t.jsx)("b",{children:"ageRange"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/reviewed-age-ranges",children:(0,t.jsx)(a.code,{children:"ReviewedAgeRanges!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"The age range used by the supplier."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/types/objects/metadata-search",children:(0,t.jsx)(a.code,{children:"MetadataSearch"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,a,d)=>{var t=d(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,d){var t,s={},c=null,l=null;for(t in void 0!==d&&(c=""+d),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(l=a.ref),a)o.call(a,t)&&!i.hasOwnProperty(t)&&(s[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===s[t]&&(s[t]=a[t]);return{$$typeof:n,type:e,key:c,ref:l,props:s,_owner:r.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},74848:(e,a,d)=>{e.exports=d(21020)},28453:(e,a,d)=>{d.d(a,{R:()=>o,x:()=>r});var t=d(96540);const n={},s=t.createContext(n);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);