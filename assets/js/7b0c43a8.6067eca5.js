/*! For license information please see 7b0c43a8.6067eca5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98819],{90086:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>l,assets:()=>p,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=s(74848),n=s(28453),i=s(96540);const c={id:"mode-type",title:"ModeType"},r=void 0,d={id:"types/enums/mode-type",title:"ModeType",description:"Mode to select which kind of stats do you want query",source:"@site/api/types/enums/mode-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/mode-type",permalink:"/api/types/enums/mode-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"mode-type",title:"ModeType"},sidebar:"schemaSidebar",previous:{title:"MetadataType",permalink:"/api/types/enums/metadata-type"},next:{title:"NightsType",permalink:"/api/types/enums/nights-type"}},p={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const t={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:s,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,n.R)()},[d,p]=(0,i.useState)(c);return(0,a.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&s]})},h=[{value:"Values",id:"values",level:3},{value:"<code>ModeType.<b>BUYER</b></code>",id:"modetypebuyer",level:4},{value:"<code>ModeType.<b>SELLER</b></code>",id:"modetypeseller",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Mode to select which kind of stats do you want query"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"enum ModeType {\n  BUYER\n  SELLER\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(t.h4,{id:"modetypebuyer",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ModeType.",(0,a.jsx)("b",{children:"BUYER"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"When the request has been send as a buyer"}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"modetypeseller",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ModeType.",(0,a.jsx)("b",{children:"SELLER"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"When the request has been send as a seller"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/inputs/audit-rule-connection-where-input",children:(0,a.jsx)(t.code,{children:"AuditRuleConnectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/audit-rule-create-input",children:(0,a.jsx)(t.code,{children:"AuditRuleCreateInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/bookings-report-where-input",children:(0,a.jsx)(t.code,{children:"BookingsReportWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/insights-portfolio-stats-where-input",children:(0,a.jsx)(t.code,{children:"InsightsPortfolioStatsWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/logging-legacy-filter-input",children:(0,a.jsx)(t.code,{children:"LoggingLegacyFilterInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/recommendations-where-input",children:(0,a.jsx)(t.code,{children:"RecommendationsWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-access-collection-where-input",children:(0,a.jsx)(t.code,{children:"SpeedAccessCollectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-connection-collection-where-input",children:(0,a.jsx)(t.code,{children:"SpeedConnectionCollectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-create-access-input",children:(0,a.jsx)(t.code,{children:"SpeedCreateAccessInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-create-all-accesses-data-input",children:(0,a.jsx)(t.code,{children:"SpeedCreateAllAccessesDataInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-update-access-rq-mode-input",children:(0,a.jsx)(t.code,{children:"SpeedUpdateAccessRqModeInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-update-access-status-input",children:(0,a.jsx)(t.code,{children:"SpeedUpdateAccessStatusInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-update-access-ttl-input",children:(0,a.jsx)(t.code,{children:"SpeedUpdateAccessTtlInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-update-all-accesses-data-input",children:(0,a.jsx)(t.code,{children:"SpeedUpdateAllAccessesDataInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-update-all-accesses-rq-mode-data-input",children:(0,a.jsx)(t.code,{children:"SpeedUpdateAllAccessesRqModeDataInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/speed-update-all-accesses-ttl-data-input",children:(0,a.jsx)(t.code,{children:"SpeedUpdateAllAccessesTtlDataInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/stats-aggregation-connection-where-input",children:(0,a.jsx)(t.code,{children:"StatsAggregationConnectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/stats-filter-input",children:(0,a.jsx)(t.code,{children:"StatsFilterInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-access-hotel-blacklist-stats-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationAccessHotelBlacklistStatsWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-access-hotel-blacklist-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationAccessHotelBlacklistWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationAggregationHotelStatsConnectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-aggregation-performance-stats-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationAggregationPerformanceStatsWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-aggregation-stats-connection-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationAggregationStatsConnectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-all-accesses-hotel-blacklist-stats-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationAllAccessesHotelBlacklistStatsWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-all-accesses-hotel-blacklist-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationAllAccessesHotelBlacklistWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-all-accesses-recommendations-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationAllAccessesRecommendationsWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-connection-connection-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationConnectionConnectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-connection-where-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationConnectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-create-access-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationCreateAccessInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-create-all-accesses-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationCreateAllAccessesInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-update-access-criteria-data-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationUpdateAccessCriteriaDataInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-update-access-data-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationUpdateAccessDataInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-update-all-accesses-criteria-data-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationUpdateAllAccessesCriteriaDataInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/traffic-optimization-update-all-accesses-data-input",children:(0,a.jsx)(t.code,{children:"TrafficOptimizationUpdateAllAccessesDataInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},21020:(e,t,s)=>{var a=s(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,s){var a,i={},p=null,o=null;for(a in void 0!==s&&(p=""+s),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,a)&&!d.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:p,ref:o,props:i,_owner:r.current}}t.Fragment=i,t.jsx=p,t.jsxs=p},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>r});var a=s(96540);const n={},i=a.createContext(n);function c(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);