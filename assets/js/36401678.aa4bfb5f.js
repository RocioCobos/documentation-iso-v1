/*! For license information please see 36401678.aa4bfb5f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98808],{68334:(t,e,i)=>{i.r(e),i.d(e,{Badge:()=>u,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>l,assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>f});var a=i(74848),n=i(28453),r=i(96540);const s={id:"traffic-optimization-stats-aggregation-group-by-input",title:"TrafficOptimizationStatsAggregationGroupByInput"},o=void 0,c={id:"types/inputs/traffic-optimization-stats-aggregation-group-by-input",title:"TrafficOptimizationStatsAggregationGroupByInput",description:"No description",source:"@site/api/types/inputs/traffic-optimization-stats-aggregation-group-by-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/traffic-optimization-stats-aggregation-group-by-input",permalink:"/api/types/inputs/traffic-optimization-stats-aggregation-group-by-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-stats-aggregation-group-by-input",title:"TrafficOptimizationStatsAggregationGroupByInput"},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationCreateAllAccessesInput",permalink:"/api/types/inputs/traffic-optimization-create-all-accesses-input"},next:{title:"TrafficOptimizationUpdateAccessCriteriaDataInput",permalink:"/api/types/inputs/traffic-optimization-update-access-criteria-data-input"}},p={},d=()=>{const t={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=t=>{const e={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(e.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url,children:"\u2398"})]})},u=t=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{className:t.class,children:t.text})})},g=({dataOpen:t,dataClose:e,children:i,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,n.R)()},[c,p]=(0,r.useState)(s);return(0,a.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:t=>{t.preventDefault(),p((t=>!t))},style:{listStyle:"none"},children:c?t:e}),c&&i]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>TrafficOptimizationStatsAggregationGroupByInput.<b>data</b></code><Bullet></Bullet><code>[TrafficOptimizationStatsDataGroupBy!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationstatsaggregationgroupbyinputdatatrafficoptimizationstatsdatagroupby--",level:4},{value:'<code>TrafficOptimizationStatsAggregationGroupByInput.<b>time</b></code><Bullet></Bullet><code>StatsTimeGroupBy</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationstatsaggregationgroupbyinputtimestatstimegroupby-",level:4},{value:"Member Of",id:"member-of",level:3}];function m(t){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"No description"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-graphql",children:"input TrafficOptimizationStatsAggregationGroupByInput {\n  data: [TrafficOptimizationStatsDataGroupBy!]\n  time: StatsTimeGroupBy\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(e.h4,{id:"trafficoptimizationstatsaggregationgroupbyinputdatatrafficoptimizationstatsdatagroupby--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationStatsAggregationGroupByInput.",(0,a.jsx)("b",{children:"data"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(e.a,{href:"/api/types/enums/traffic-optimization-stats-data-group-by",children:(0,a.jsx)(e.code,{children:"[TrafficOptimizationStatsDataGroupBy!]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"To group by data"}),"\n"]}),"\n",(0,a.jsxs)(e.h4,{id:"trafficoptimizationstatsaggregationgroupbyinputtimestatstimegroupby-",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationStatsAggregationGroupByInput.",(0,a.jsx)("b",{children:"time"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(e.a,{href:"/api/types/enums/stats-time-group-by",children:(0,a.jsx)(e.code,{children:"StatsTimeGroupBy"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"To group data by time"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/api/types/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input",children:(0,a.jsx)(e.code,{children:"TrafficOptimizationAggregationHotelStatsConnectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(e.a,{href:"/api/types/inputs/traffic-optimization-aggregation-stats-connection-where-input",children:(0,a.jsx)(e.code,{children:"TrafficOptimizationAggregationStatsConnectionWhereInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function y(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(m,{...t})}):m(t)}},21020:(t,e,i)=>{var a=i(96540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,i){var a,r={},p=null,d=null;for(a in void 0!==i&&(p=""+i),void 0!==e.key&&(p=""+e.key),void 0!==e.ref&&(d=e.ref),e)s.call(e,a)&&!c.hasOwnProperty(a)&&(r[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps)void 0===r[a]&&(r[a]=e[a]);return{$$typeof:n,type:t,key:p,ref:d,props:r,_owner:o.current}}e.Fragment=r,e.jsx=p,e.jsxs=p},74848:(t,e,i)=>{t.exports=i(21020)},28453:(t,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var a=i(96540);const n={},r=a.createContext(n);function s(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:s(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);