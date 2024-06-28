/*! For license information please see 3a78c701.92effa15.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81233],{12221:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>g,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var d=t(74848),n=t(28453),s=t(96540);const c={id:"activation-data",title:"ActivationData",hide_table_of_contents:!1},i=void 0,o={id:"objects/activation-data",title:"ActivationData",description:"No description",source:"@site/api/objects/activation-data.mdx",sourceDirName:"objects",slug:"/objects/activation-data",permalink:"/api/objects/activation-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"activation-data",title:"ActivationData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ActivationConnection",permalink:"/api/objects/activation-connection"},next:{title:"ActivationEdge",permalink:"/api/objects/activation-edge"}},l={},r=()=>{const e={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,n.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:t,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,n.R)()},[o,l]=(0,s.useState)(c);return(0,d.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivationData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdatacodeid--",level:4},{value:'<code>ActivationData.<b>access</b></code><Bullet></Bullet><code>AccessData!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdataaccessaccessdata--",level:4},{value:'<code>ActivationData.<b>buyer</b></code><Bullet></Bullet><code>OrganizationData!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdatabuyerorganizationdata--",level:4},{value:'<code>ActivationData.<b>seller</b></code><Bullet></Bullet><code>OrganizationData!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdatasellerorganizationdata--",level:4},{value:'<code>ActivationData.<b>requester</b></code><Bullet></Bullet><code>RequesterInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"activationdatarequesterrequesterinfo-",level:4},{value:'<code>ActivationData.<b>status</b></code><Bullet></Bullet><code>ActivationStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdatastatusactivationstatus--",level:4},{value:'<code>ActivationData.<b>contentInfoDownloaded</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdatacontentinfodownloadedboolean--",level:4},{value:'<code>ActivationData.<b>certificationStatus</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdatacertificationstatusstring--",level:4},{value:'<code>ActivationData.<b>editAccessAvailable</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdataeditaccessavailableboolean--",level:4},{value:'<code>ActivationData.<b>issueID</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"activationdataissueidid-",level:4},{value:'<code>ActivationData.<b>clientNames</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdataclientnamesid--",level:4},{value:'<code>ActivationData.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdatacreatedatdatetime--",level:4},{value:'<code>ActivationData.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationdataupdatedatdatetime--",level:4},{value:"Member of",id:"member-of",level:3}];function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"No description"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type ActivationData {\n  code: ID!\n  access: AccessData!\n  buyer: OrganizationData!\n  seller: OrganizationData!\n  requester: RequesterInfo\n  status: ActivationStatus!\n  contentInfoDownloaded: Boolean!\n  certificationStatus: String!\n  editAccessAvailable: Boolean!\n  issueID: ID\n  clientNames: [ID!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdatacodeid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdataaccessaccessdata--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"access"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/access-data",children:(0,d.jsx)(a.code,{children:"AccessData!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdatabuyerorganizationdata--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"buyer"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/organization-data",children:(0,d.jsx)(a.code,{children:"OrganizationData!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdatasellerorganizationdata--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"seller"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/organization-data",children:(0,d.jsx)(a.code,{children:"OrganizationData!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdatarequesterrequesterinfo-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"requester"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/requester-info",children:(0,d.jsx)(a.code,{children:"RequesterInfo"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdatastatusactivationstatus--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"status"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/enums/activation-status",children:(0,d.jsx)(a.code,{children:"ActivationStatus!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdatacontentinfodownloadedboolean--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"contentInfoDownloaded"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdatacertificationstatusstring--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"certificationStatus"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdataeditaccessavailableboolean--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"editAccessAvailable"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdataissueidid-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"issueID"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/id",children:(0,d.jsx)(a.code,{children:"ID"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdataclientnamesid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"clientNames"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/id",children:(0,d.jsx)(a.code,{children:"[ID!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdatacreatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"activationdataupdatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationData.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/objects/activation",children:(0,d.jsx)(a.code,{children:"Activation"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},21020:(e,a,t)=>{var d=t(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,t){var d,s={},l=null,r=null;for(d in void 0!==t&&(l=""+t),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(r=a.ref),a)c.call(a,d)&&!o.hasOwnProperty(d)&&(s[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===s[d]&&(s[d]=a[d]);return{$$typeof:n,type:e,key:l,ref:r,props:s,_owner:i.current}}a.Fragment=s,a.jsx=l,a.jsxs=l},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>i});var d=t(96540);const n={},s=d.createContext(n);function c(e){const a=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),d.createElement(s.Provider,{value:a},e.children)}}}]);