/*! For license information please see 0aa6377d.895324ec.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2076],{71476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(74848),s=n(28453);const r={sidebar_position:2},o="Hotels",l={id:"apps/distribution/files/master-files/hotels",title:"Hotels",description:"Distribution Master files contain the product you will buy and sell in our Marketplace: hotels, mealplans and other required data to apply your business rules subsequently.",source:"@site/docs/apps/distribution/files/master-files/hotels.mdx",sourceDirName:"apps/distribution/files/master-files",slug:"/apps/distribution/files/master-files/hotels",permalink:"/docs/apps/distribution/files/master-files/hotels",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/files/master-files/hotels.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apps/distribution/files/master-files/overview"},next:{title:"Hotel Info",permalink:"/docs/apps/distribution/files/master-files/hotels-info"}},a={},d=[{value:"Create and Upload your Hotel Master File",id:"create-and-upload-your-hotel-master-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{BrowserWindow:n,Details:r}=t;return n||u("BrowserWindow",!0),r||u("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"hotels",children:"Hotels"}),"\n",(0,i.jsx)(t.p,{children:"Distribution Master files contain the product you will buy and sell in our Marketplace: hotels, mealplans and other required data to apply your business rules subsequently."}),"\n",(0,i.jsx)(t.p,{children:"Create and update your hotels."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["On the HotelCode you'll need to add the same codes that you have specified or will specify in the ",(0,i.jsx)(t.a,{href:"../mapping-files/mapping",children:"Mapping Files"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"create-and-upload-your-hotel-master-file",children:"Create and Upload your Hotel Master File"}),"\n",(0,i.jsx)(t.p,{children:"To get started, create your hotel master file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your data, save it in CSV format, and then upload it to the corresponding folder in your FTP."}),"\n",(0,i.jsx)(n,{children:(0,i.jsxs)(t.p,{children:["\ud83d\udcc1F0  _0000",(0,i.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0 \ud83d\udcc1HotelX  _0000",(0,i.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Masters",(0,i.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,i.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,i.jsx)(t.a,{href:"https://storage.travelgate.com/docs/Master_Hotels.csv",children:"Master_Hotels.csv"})]})]})}),"\n",(0,i.jsx)(t.h3,{id:"file-format-specification",children:"File Format Specification"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"File Name:"})," Master_Hotels.csv"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Directory:"})," F0_0000/HotelX_0000/Masters"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Delimiter:"})," Vertical line (",(0,i.jsx)(t.code,{children:"|"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Header Row:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"HotelCode (mandatory)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"HotelName (mandatory)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Address"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Longitude"}),": Decimal Degrees DD (e.g. 39.637070)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Latitude"}),": Decimal Degrees DD (e.g. 2.63170357)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Phone"}),": Phone prefix + number (e.g. +34666666666)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"CategoryCode"}),": Number (e.g. 5)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"CategoryName"}),": Number + name (e.g. 5 stars)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"CityCode"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"CityName"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ISOCountryCode"}),": 2 chars"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"ZIPCode"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"ChainCode"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"ChainName"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Note:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'The data of the fields is not encapsulated by " or any other character.'}),"\n",(0,i.jsx)(t.li,{children:"Each line represents a unique hotel and contains all the information (fields) about it."}),"\n",(0,i.jsx)(t.li,{children:"Any blank line will be skipped."}),"\n",(0,i.jsx)(t.li,{children:"If a field\u2019s data is not mandatory and we don\u2019t want to set it then we just keep it empty: e.g. \u2026||\u2026"}),"\n",(0,i.jsx)(t.li,{children:"The file and its data have to be encoded using UTF-8. Otherwise there can be stored strange characters."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"\ud83d\udcf9 Learn how to change the format of the csv file in order to edit and save it"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]}),"\n",(0,i.jsx)(t.admonition,{title:"TAKE INTO CONSIDERATION",type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If a hotel exists then it is updated."}),"\n",(0,i.jsx)(t.li,{children:"If a hotel does not exist then it is created."}),"\n",(0,i.jsx)(t.li,{children:"Existing hotels that are not referenced are not removed."}),"\n",(0,i.jsx)(t.li,{children:"If an existing hotel has to be removed from system then you have to contact with Travelgate."}),"\n",(0,i.jsx)(t.li,{children:"If there is any problem with a hotel\u2019s information then it is omitted (and logged) but the load continues."}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21020:(e,t,n)=>{var i=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,r={},d=null,c=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,i)&&!a.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:s,type:e,key:d,ref:c,props:r,_owner:l.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);