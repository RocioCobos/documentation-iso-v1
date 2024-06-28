/*! For license information please see 80fd3165.cfc5f7b7.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43862],{55264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(74848),n=r(28453);const o={title:"Status error code Alerts",sidebar_position:2},i="Status error code Alerts",a={id:"apps/monitoring-apps/alerts/alerts-status-error",title:"Status error code Alerts",description:"How can I create a new status error code alert?\ud83d\udca1",source:"@site/kb/apps/monitoring-apps/alerts/alerts-status-error.md",sourceDirName:"apps/monitoring-apps/alerts",slug:"/apps/monitoring-apps/alerts/alerts-status-error",permalink:"/kb/apps/monitoring-apps/alerts/alerts-status-error",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Status error code Alerts",sidebar_position:2},sidebar:"kbSidebar",previous:{title:"Alerts: real-time detection of potential issues",permalink:"/kb/apps/monitoring-apps/alerts/alerts-real-time-detection"},next:{title:"Traffic Peak Alerts",permalink:"/kb/apps/monitoring-apps/alerts/alerts-traffic-peak"}},l={},c=[{value:"How can I create a new status error code alert?\ud83d\udca1",id:"how-can-i-create-a-new-status-error-code-alert",level:3},{value:"Use cases of status error code alerts:",id:"use-cases-of-status-error-code-alerts",level:3},{value:"Traffic Trends",id:"traffic-trends",level:3}];function h(e){const t={a:"a",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"status-error-code-alerts",children:"Status error code Alerts"}),"\n",(0,s.jsx)(t.h3,{id:"how-can-i-create-a-new-status-error-code-alert",children:"How can I create a new status error code alert?\ud83d\udca1"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Select Connection/s"}),"\n",(0,s.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/alerts-error-code-1.jpg",alt:"alerts-error-code-1"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Configure an alert:"})," define the conditions and configure the fields to set up your alert. Select which ",(0,s.jsx)(t.a,{href:"/kb/apps/monitoring-apps/alerts/alerts-status-error#use-cases-of-status-error-code-alerts",children:"options"})," suits your alert best."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Configure your notifications"}),": configure how you want to receive Alerts notifications.\n",(0,s.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/alerts-error-code-6.jpg",alt:"alerts-error-code-6"})]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Alert name and description"}),"\n",(0,s.jsx)(t.li,{children:"E-mail address to which notifications will be sent (TO and BCC)"}),"\n",(0,s.jsx)(t.li,{children:"Frequency of notification"}),"\n",(0,s.jsx)(t.li,{children:"How to create the alert: unique global alert, alert for each connection selected in step 1 or alert for each access selected in step"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"use-cases-of-status-error-code-alerts",children:"Use cases of status error code alerts:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Alert if a status code exceeds a specific % of the total traffic in the last X minutes"}),'. E.g: "I want to check if status code 102 (Seller error) exceeds 10% of my Search traffic in the last 60 minutes and also I want to check it every 60 minutes. Only alert if there are at least 1000 requests in the time window to be reviewed."\n',(0,s.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/alerts-error-code-2.jpg",alt:"alerts-error-code-2"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Error Code To Check:"})," Set the error codes to be checked by the alert. In our example: transactions with error code 102 will be checked."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Deviation %:"}),' The minimum percentage to consider status "alerting". In our example: 10%.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Frequency:"})," How often the alert values will be checked, in minutes. In our example:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If we set 60 minutes, the alert will check the conditions each hour of the last 60 minutes of traffic (time window)."}),"\n",(0,s.jsx)(t.li,{children:"If we set 30 minutes, the alert will check the conditions each half hour of the last 60 minutes of traffic (time window)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Time Window:"})," Period in the past (minutes) over which alert values are checked. In our example: 60 minutes."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Minimum number of requests:"})," Minimum number of requests that should be in the window to be reviewed. In our example, there should be at least 1000 transactions in those 60 minutes for the alert to check the conditions."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Alert if specific error results exceed a specific % of the total traffic in the last X requests"}),". E.g.: I want to check if status code 102 (Seller error) exceeds 10% of my Search traffic in the last 1000 transactions.\n",(0,s.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/alerts-error-code-3.jpg",alt:"alerts-error-code-3"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Error Code To Check"}),": Set the error codes to be checked by the alert. In our example: transactions with error code 102 will be checked."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Deviation %"}),': The minimum percentage to consider status "alerting". In our example: 10%.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Minimum number of requests"}),": Number of requests that should be in the range to be reviewed. In our example: there should be 1000 transactions in those 60 minutes for the alert to check the conditions."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Alert if, in the last X minutes, specific status codes exceed a specific % during the previous X minutes."})," E.g.: I want to check if status code 105 (Seller error) has increased by at least 10% over the last 60 minutes compared with the previous 60 minutes. Check it every 60 minutes. Only alert if there are at least 1000 requests in the time window to be reviewed.\n",(0,s.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/alerts-error-code-4.jpg",alt:"alerts-error-code-4"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Error Code To Check: Set the error codes to be checked by the alert.In our example: transactions with error code 102 will be checked."}),"\n",(0,s.jsx)(t.li,{children:"Variation: Comparative type for the alert, possible options: Increase, decrease or both. In our example: increase."}),"\n",(0,s.jsx)(t.li,{children:'Deviation %: The minimum percentage to consider status "alerting". In our example: 10%.'}),"\n",(0,s.jsx)(t.li,{children:"Time Window: Period in the past (minutes) over which alert values are checked. In our example: 60 minutes."}),"\n",(0,s.jsx)(t.li,{children:"Comparison window: Period to be used to compare with the alert time window. Possible values: last period, yesterday or last week. In our example: last period."}),"\n",(0,s.jsxs)(t.li,{children:["Frequency: How often the alert values will be checked, in minutes. In our example:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If we also set 60 minutes, the alert will check the conditions each hour of the last 60 minutes of traffic."}),"\n",(0,s.jsx)(t.li,{children:"If we set 30 minutes, the alert will check the conditions each half hour of the last 60 minutes of traffic."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Minimum number of requests: Minimum number of requests that should be in the window to be reviewed. In our example: there should be at least 1000 transactions in those 60 minutes for the alert to check the conditions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"traffic-trends",children:"Traffic Trends"}),"\n",(0,s.jsxs)(t.p,{children:["Use the traffic trends section if you want to include or exclude the conditions of specific transactions:\n",(0,s.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/alerts-error-code-5.jpg",alt:"alerts-error-code-5"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Shopping flow steps:"})," Select which shopping flow steps do you want the alert to take into account to verify the configuration applied in the previous step. For example, if you select Search, the alert will only check errors in Search transactions. By default, all shopping flow steps are selected."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Status code:"})," Select which status code do you want the alert to take into account to verify the configuration applied in the previous step. For example, if you select all Seller status codes, the alert will only check errors in transactions with those codes. By default, all status codes are selected."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,t,r)=>{var s=r(96540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var s,o={},c=null,h=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:h,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var s=r(96540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);