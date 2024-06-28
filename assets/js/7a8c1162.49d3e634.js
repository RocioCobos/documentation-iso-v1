/*! For license information please see 7a8c1162.49d3e634.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11678],{60242:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var n=t(74848),d=t(28453),r=t(96540);const s={id:"rate-plan",title:"RatePlan",hide_table_of_contents:!1},l=void 0,c={id:"objects/rate-plan",title:"RatePlan",description:"Information about the rate of the option returned.",source:"@site/api/objects/rate-plan.mdx",sourceDirName:"objects",slug:"/objects/rate-plan",permalink:"/api/objects/rate-plan",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"rate-plan",title:"RatePlan",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"QuotePayload",permalink:"/api/objects/quote-payload"},next:{title:"Rate",permalink:"/api/objects/rate"}},o={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,d.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,d.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:t,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,d.R)()},[c,o]=(0,r.useState)(s);return(0,n.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>RatePlan.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rateplancodestring--",level:4},{value:'<code>RatePlan.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rateplansuppliercodestring--",level:4},{value:'<code>RatePlan.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"rateplannamestring-",level:4},{value:'<code>RatePlan.<b>effectiveDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rateplaneffectivedatedate--",level:4},{value:'<code>RatePlan.<b>expireDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rateplanexpiredatedate--",level:4},{value:'<code>RatePlan.<b>start</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"rateplanstartdate-",level:4},{value:'<code>RatePlan.<b>end</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"rateplanenddate-",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Information about the rate of the option returned."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type RatePlan {\n  code: String!\n  supplierCode: String!\n  name: String\n  effectiveDate: Date @deprecated\n  expireDate: Date @deprecated\n  start: Date\n  end: Date\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"rateplancodestring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RatePlan.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Specifies the rate code."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"rateplansuppliercodestring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RatePlan.",(0,n.jsx)("b",{children:"supplierCode"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Supplier s rate code."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"rateplannamestring-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RatePlan.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/scalars/string",children:(0,n.jsx)(a.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Specifies the rate name."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"rateplaneffectivedatedate--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RatePlan.",(0,n.jsx)("b",{children:"effectiveDate"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/scalars/date",children:(0,n.jsx)(a.code,{children:"Date"})})," ",(0,n.jsx)(p,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.admonition,{title:"DEPRECATED",type:"caution",children:(0,n.jsx)(a.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,n.jsx)(a.p,{children:"Start date in which the rate becomes effective."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"rateplanexpiredatedate--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RatePlan.",(0,n.jsx)("b",{children:"expireDate"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/scalars/date",children:(0,n.jsx)(a.code,{children:"Date"})})," ",(0,n.jsx)(p,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.admonition,{title:"DEPRECATED",type:"caution",children:(0,n.jsx)(a.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,n.jsx)(a.p,{children:"Expire date of the rate."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"rateplanstartdate-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RatePlan.",(0,n.jsx)("b",{children:"start"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/scalars/date",children:(0,n.jsx)(a.code,{children:"Date"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Start date in which the rate becomes effective.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"rateplanenddate-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RatePlan.",(0,n.jsx)("b",{children:"end"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/scalars/date",children:(0,n.jsx)(a.code,{children:"Date"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Expire date of the rate.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/objects/room",children:(0,n.jsx)(a.code,{children:"Room"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},21020:(e,a,t)=>{var n=t(96540),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,a,t){var n,r={},o=null,i=null;for(n in void 0!==t&&(o=""+t),void 0!==a.key&&(o=""+a.key),void 0!==a.ref&&(i=a.ref),a)s.call(a,n)&&!c.hasOwnProperty(n)&&(r[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===r[n]&&(r[n]=a[n]);return{$$typeof:d,type:e,key:o,ref:i,props:r,_owner:l.current}}a.Fragment=r,a.jsx=o,a.jsxs=o},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>l});var n=t(96540);const d={},r=n.createContext(d);function s(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);