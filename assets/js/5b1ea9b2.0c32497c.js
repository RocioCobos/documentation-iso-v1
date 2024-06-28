/*! For license information please see 5b1ea9b2.0c32497c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75558],{4787:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>b,Bullet:()=>n,Details:()=>u,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>y});var t=s(74848),c=s(28453),o=s(96540);const d={id:"social-sub-category",title:"SocialSubCategory"},l=void 0,r={id:"types/objects/social-sub-category",title:"SocialSubCategory",description:"No description",source:"@site/api/types/objects/social-sub-category.mdx",sourceDirName:"types/objects",slug:"/types/objects/social-sub-category",permalink:"/api/types/objects/social-sub-category",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"social-sub-category",title:"SocialSubCategory"},sidebar:"schemaSidebar",previous:{title:"SocialSubCategoryEdge",permalink:"/api/types/objects/social-sub-category-edge"},next:{title:"SpeedAccessCollection",permalink:"/api/types/objects/speed-access-collection"}},i={},n=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const a={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:a,children:s,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,c.R)()},[r,i]=(0,o.useState)(d);return(0,t.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&s]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>SocialSubCategory.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategorycodeid--",level:4},{value:'<code>SocialSubCategory.<b>subCategoryData</b></code><Bullet></Bullet><code>SocialSubCategoryData</code> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategorysubcategorydatasocialsubcategorydata-",level:4},{value:'<code>SocialSubCategory.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryadvisemessageadvisemessage--",level:4},{value:'<code>SocialSubCategory.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>SocialSubCategory.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategorycreatedatdatetime-",level:4},{value:'<code>SocialSubCategory.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryupdatedatdatetime-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type SocialSubCategory {\n  code: ID!\n  subCategoryData: SocialSubCategoryData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime\n  updatedAt: DateTime\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"socialsubcategorycodeid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(n,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"socialsubcategorysubcategorydatasocialsubcategorydata-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,t.jsx)("b",{children:"subCategoryData"})]})}),(0,t.jsx)(n,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/social-sub-category-data",children:(0,t.jsx)(a.code,{children:"SocialSubCategoryData"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"socialsubcategoryadvisemessageadvisemessage--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(n,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/advise-message",children:(0,t.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.h5,{id:"socialsubcategoryadvisemessageleveladvisemessagelevel--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.adviseMessage.",(0,t.jsx)("b",{children:"level"})]})}),(0,t.jsx)(n,{}),(0,t.jsx)(a.a,{href:"/api/types/enums/advise-message-level",children:(0,t.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"socialsubcategorycreatedatdatetime-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(n,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"socialsubcategoryupdatedatdatetime-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(n,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/types/objects/social-mutation",children:(0,t.jsx)(a.code,{children:"SocialMutation"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(n,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/social-sub-category-edge",children:(0,t.jsx)(a.code,{children:"SocialSubCategoryEdge"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,a,s)=>{var t=s(96540),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,s){var t,o={},i=null,n=null;for(t in void 0!==s&&(i=""+s),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(n=a.ref),a)d.call(a,t)&&!r.hasOwnProperty(t)&&(o[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===o[t]&&(o[t]=a[t]);return{$$typeof:c,type:e,key:i,ref:n,props:o,_owner:l.current}}a.Fragment=o,a.jsx=i,a.jsxs=i},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>d,x:()=>l});var t=s(96540);const c={},o=t.createContext(c);function d(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);