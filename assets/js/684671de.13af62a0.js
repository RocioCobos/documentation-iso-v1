/*! For license information please see 684671de.13af62a0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80986],{19761:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>r,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>x});var a=t(74848),s=t(28453),l=t(96540);const c={id:"alert-slack-advanced-options-input",title:"AlertSlackAdvancedOptionsInput",hide_table_of_contents:!1},r=void 0,d={id:"inputs/alert-slack-advanced-options-input",title:"AlertSlackAdvancedOptionsInput",description:"No description",source:"@site/api/inputs/alert-slack-advanced-options-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-slack-advanced-options-input",permalink:"/api/inputs/alert-slack-advanced-options-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-slack-advanced-options-input",title:"AlertSlackAdvancedOptionsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertRatiosInput",permalink:"/api/inputs/alert-ratios-input"},next:{title:"AlertSlackInput",permalink:"/api/inputs/alert-slack-input"}},i={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[d,i]=(0,l.useState)(c);return(0,a.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertSlackAdvancedOptionsInput.<b>titles</b></code><Bullet></Bullet><code>AlertSlackTitlesInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertslackadvancedoptionsinputtitlesalertslacktitlesinput-",level:4},{value:'<code>AlertSlackAdvancedOptionsInput.<b>short</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"alertslackadvancedoptionsinputshortboolean-",level:4},{value:'<code>AlertSlackAdvancedOptionsInput.<b>icon</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alertslackadvancedoptionsinputiconstring-",level:4},{value:'<code>AlertSlackAdvancedOptionsInput.<b>username</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alertslackadvancedoptionsinputusernamestring-",level:4},{value:'<code>AlertSlackAdvancedOptionsInput.<b>channel</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertslackadvancedoptionsinputchannelid--",level:4},{value:"Member of",id:"member-of",level:3}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input AlertSlackAdvancedOptionsInput {\n  titles: AlertSlackTitlesInput\n  short: Boolean\n  icon: String\n  username: String\n  channel: [ID!]\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"alertslackadvancedoptionsinputtitlesalertslacktitlesinput-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertSlackAdvancedOptionsInput.",(0,a.jsx)("b",{children:"titles"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/inputs/alert-slack-titles-input",children:(0,a.jsx)(n.code,{children:"AlertSlackTitlesInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"alertslackadvancedoptionsinputshortboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertSlackAdvancedOptionsInput.",(0,a.jsx)("b",{children:"short"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"alertslackadvancedoptionsinputiconstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertSlackAdvancedOptionsInput.",(0,a.jsx)("b",{children:"icon"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"alertslackadvancedoptionsinputusernamestring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertSlackAdvancedOptionsInput.",(0,a.jsx)("b",{children:"username"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"alertslackadvancedoptionsinputchannelid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertSlackAdvancedOptionsInput.",(0,a.jsx)("b",{children:"channel"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/scalars/id",children:(0,a.jsx)(n.code,{children:"[ID!]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/inputs/alert-slack-input",children:(0,a.jsx)(n.code,{children:"AlertSlackInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/inputs/alert-update-slack-input",children:(0,a.jsx)(n.code,{children:"AlertUpdateSlackInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},21020:(e,n,t)=>{var a=t(96540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var a,l={},i=null,o=null;for(a in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(o=n.ref),n)c.call(n,a)&&!d.hasOwnProperty(a)&&(l[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===l[a]&&(l[a]=n[a]);return{$$typeof:s,type:e,key:i,ref:o,props:l,_owner:r.current}}n.Fragment=l,n.jsx=i,n.jsxs=i},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var a=t(96540);const s={},l=a.createContext(s);function c(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);