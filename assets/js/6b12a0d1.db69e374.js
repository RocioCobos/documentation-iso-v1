/*! For license information please see 6b12a0d1.db69e374.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68032],{84739:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(74848),s=i(28453);const r={sidebar_position:5},n="Room List",l={id:"apps/distribution/files/master-files/room-list",title:"Room List",description:"Distribution Master files contain the product you will buy and sell in our Marketplace: hotels, mealplans and other required data to apply your business rules subsequently.",source:"@site/docs/apps/distribution/files/master-files/room-list.mdx",sourceDirName:"apps/distribution/files/master-files",slug:"/apps/distribution/files/master-files/room-list",permalink:"/docs/apps/distribution/files/master-files/room-list",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/files/master-files/room-list.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Destination",permalink:"/docs/apps/distribution/files/master-files/destinations"},next:{title:"Meal Plans",permalink:"/docs/apps/distribution/files/master-files/meal-plans"}},a={},d=[{value:"Create and Upload your Room List Master File",id:"create-and-upload-your-room-list-master-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{BrowserWindow:i,Details:r}=t;return i||u("BrowserWindow",!0),r||u("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"room-list",children:"Room List"}),"\n",(0,o.jsx)(t.p,{children:"Distribution Master files contain the product you will buy and sell in our Marketplace: hotels, mealplans and other required data to apply your business rules subsequently."}),"\n",(0,o.jsx)(t.p,{children:"Create and update your room list."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["On the Destination Code you'll need to add the same codes that you have specified or will specify in the ",(0,o.jsx)(t.a,{href:"hotels",children:"Hotel Master File"}),". This code should be match the city code in the Hotel Master File."]})}),"\n",(0,o.jsx)(t.h2,{id:"create-and-upload-your-room-list-master-file",children:"Create and Upload your Room List Master File"}),"\n",(0,o.jsx)(t.p,{children:"To get started, create your room list master file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your data, save it in CSV format, and then upload it to the corresponding folder in your FTP."}),"\n",(0,o.jsx)(i,{children:(0,o.jsxs)(t.p,{children:["\ud83d\udcc1F0_0000",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0 \ud83d\udcc1HotelX_0000",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Masters",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,o.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,o.jsx)(t.a,{href:"https://storage.travelgate.com/docs/Master_RoomList.csv",children:"Master_RoomList.csv"})]})]})}),"\n",(0,o.jsx)(t.h3,{id:"file-format-specification",children:"File Format Specification"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"File Name:"})," Master_RoomList.csv"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Directory:"})," F0_0000/HotelX_0000/Masters"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Delimiter:"})," Hashtag (",(0,o.jsx)(t.code,{children:"#"}),")"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Header Row:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"RoomCode (mandatory)"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"RoomDescription (mandatory)"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Note:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'The data of the fields is not encapsulated by " or any other character.'}),"\n",(0,o.jsx)(t.li,{children:"Each line represents a room."}),"\n",(0,o.jsx)(t.li,{children:"Any blank line will be skipped."}),"\n",(0,o.jsx)(t.li,{children:"If a field\u2019s data is not mandatory and we don\u2019t want to set it then we just keep it empty: e.g. \u2026##\u2026"}),"\n",(0,o.jsx)(t.li,{children:"The file and its data have to be encoded using UTF-8. Otherwise there can be stored strange characters."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"\ud83d\udcf9 Learn how to change the format of the csv file in order to edit and save it"}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{children:(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]}),"\n",(0,o.jsx)(t.admonition,{title:"TAKE INTO CONSIDERATION",type:"tip",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"If a room exists then it is updated."}),"\n",(0,o.jsx)(t.li,{children:"If a room does not exist then it is created."}),"\n",(0,o.jsx)(t.li,{children:"Existing rooms that are not referenced are not removed."}),"\n",(0,o.jsx)(t.li,{children:"If an existing room has to be removed from system then you have to contact with Travelgate."}),"\n",(0,o.jsx)(t.li,{children:"If there is any problem with a room's information then it is omitted (and logged) but the load continues."}),"\n"]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21020:(e,t,i)=>{var o=i(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,i){var o,r={},d=null,c=null;for(o in void 0!==i&&(d=""+i),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,o)&&!a.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:s,type:e,key:d,ref:c,props:r,_owner:l.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>l});var o=i(96540);const s={},r=o.createContext(s);function n(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);