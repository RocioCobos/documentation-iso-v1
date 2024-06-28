/*! For license information please see d484de3d.7a2b7c21.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21283],{81193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var o=t(74848),i=t(28453),s=t(1064);const l={sidebar_position:4},r="Delete Hotel",a={id:"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/delete-hotel-set-up",title:"Delete Hotel",description:"The deleteHotelSetUp is designed to remove a specific hotel from a client - seller relation in Inventory. The returned fields include:",source:"@site/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/delete-hotel-set-up.mdx",sourceDirName:"apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up",slug:"/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/delete-hotel-set-up",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/delete-hotel-set-up",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/delete-hotel-set-up.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Create Hotel",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/hotels-set-up/create-hotel-set-up"},next:{title:"Rates",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-graphql-api/set-up/rates-set-up/"}},p={},u=[{value:"Mutation Inputs",id:"mutation-inputs",level:2},{value:"1. Input",id:"1-input",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Delete a Hotel",id:"delete-a-hotel",level:4}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{GraphqlSample:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"delete-hotel",children:"Delete Hotel"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"deleteHotelSetUp"})," is designed to remove a specific hotel from a client - seller relation in Inventory. The returned fields include:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"success"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"adviseMessages"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"mutation-inputs",children:"Mutation Inputs"}),"\n",(0,o.jsxs)(n.p,{children:["When creating your ",(0,o.jsx)(n.code,{children:"deleteHotelSetUp"})," mutation, you have 1 input to fill based on your specific needs:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Input"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"1-input",children:"1. Input"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Mandatory input"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"clientCode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"supplierCode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"hotelCode"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Optional input"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"contextCode"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,o.jsx)(n.h4,{id:"delete-a-hotel",children:"Delete a Hotel"}),"\n",(0,o.jsx)(t,{query:s.CX,variables:s.al})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1064:(e,n,t)=>{t.d(n,{$w:()=>i,CX:()=>r,Yv:()=>s,al:()=>a,cF:()=>l,ts:()=>o});const o="mutation($input: InventoryHotelsSetupCreateInput!) {\n  inventory {\n    createHotelSetup(hotelSetupCreateInput: $input) {\n      hotels {\n        id\n        hotelCode\n        contextCode\n        active\n        sendNotification\n        emailNotification\n        emailNotificationCc\n        emailNotificationSupport\n      }\n      success\n      adviseMessages {\n        code\n        description\n        level\n        external {\n          code\n          message\n        }\n      }\n    }\n  }\n}\n",i='{\n  "input":{\n    "clientCode": "CDOC",\n    "supplierCode": "PDOC",\n    "hotel": {\n      "hotelCode": "2",\n      "contextCode": "TGX_PUSH",\n      "active": true,\n      "sendNotification": true,\n      "emailNotification": ["hotelpush@xmltravelgate.com"]\n    }\n  }\n}',s="mutation($input: InventoryHotelsSetupUpdateInput!) {\n  inventory {\n    updateHotelSetup(hotelSetupUpdateInput: $input) {\n      hotels {\n        id\n        hotelCode\n        contextCode\n        active\n        sendNotification\n        emailNotification\n        emailNotificationCc\n        emailNotificationSupport\n      }\n      success\n      adviseMessages {\n        code\n        description\n        level\n        external {\n          code\n          message\n        }\n      }\n    }\n  }\n}\n",l='{\n  "input":{\n    "clientCode": "CDOC",\n    "supplierCode": "PDOC",\n    "hotel": {\n      "hotelCode": "2",\n      "contextCode": "TGX_PUSH",\n      "active": true,\n      "sendNotification": true,\n      "emailNotification": ["hotelpush@xmltravelgate.com"],\n      "emailNotificationCc": ["hotelpushcc@xmltravelgate.com"]\n    }\n  }\n}',r="mutation($input: InventoryHotelSetupDeleteInput!) {\n  inventory {\n    deleteHotelSetup(hotelSetupDeleteInput: $input) {\n      hotels {\n        id\n        hotelCode\n        contextCode\n        active\n        sendNotification\n        emailNotification\n        emailNotificationCc\n        emailNotificationSupport\n      }\n      success\n      adviseMessages {\n        code\n        description\n        level\n        external {\n          code\n          message\n        }\n      }\n    }\n  }\n}\n",a='{\n  "input":{\n    "clientCode": "CDOC",\n    "supplierCode": "PDOC",\n    "hotelCode": "2",\n    "contextCode": "TGX_PUSH"\n  }\n}'},21020:(e,n,t)=>{var o=t(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var o,s={},p=null,u=null;for(o in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(u=n.ref),n)l.call(n,o)&&!a.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:i,type:e,key:p,ref:u,props:s,_owner:r.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);