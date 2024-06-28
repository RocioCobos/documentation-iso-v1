/*! For license information please see 44cdfe55.8470b9bc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86535],{27092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(74848),o=n(28453);const s={title:"Destinations",sidebar_position:2},r="Hotel-X Development - Destinations Query",a={id:"our-products/are-you-a-buyer/our-methods/static-content/hotel-x-destinations-query",title:"Destinations",description:"What is Hotel-X Destinations Query?\ud83c\udf0d",source:"@site/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-destinations-query.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/static-content",slug:"/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-destinations-query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-destinations-query",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Destinations",sidebar_position:2},sidebar:"kbSidebar",previous:{title:"Hotels",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-hotels-query"},next:{title:"Rooms",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-rooms-query"}},l={},d=[{value:"What is Hotel-X Destinations Query?\ud83c\udf0d",id:"what-is-hotel-x-destinations-query",level:3},{value:"What can I expect to receive in Destinations Query response?\u2714\ufe0f",id:"what-can-i-expect-to-receive-in-destinations-query-response\ufe0f",level:3},{value:"Destination List Logic\ud83d\udd0e",id:"destination-list-logic",level:3},{value:"How should I utilize the zone and city nodes in my Destinations Query response?\ud83d\udca1",id:"how-should-i-utilize-the-zone-and-city-nodes-in-my-destinations-query-response",level:3},{value:"What destination codes should I map as a Buyer?\ud83d\udcd1",id:"what-destination-codes-should-i-map-as-a-buyer",level:3},{value:"How can I know the total amount of destinations returned by a Seller?\ud83d\udd22",id:"how-can-i-know-the-total-amount-of-destinations-returned-by-a-seller",level:3},{value:"Will I receive availability results for all the destinations returned in the Seller&#39;s destination list?\u26a0\ufe0f",id:"will-i-receive-availability-results-for-all-the-destinations-returned-in-the-sellers-destination-list\ufe0f",level:3}];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"hotel-x-development---destinations-query",children:"Hotel-X Development - Destinations Query"}),"\n",(0,i.jsx)(t.h3,{id:"what-is-hotel-x-destinations-query",children:"What is Hotel-X Destinations Query?\ud83c\udf0d"}),"\n",(0,i.jsx)(t.p,{children:"Destinations Query returns the list of destinations from a Supplier\u2019s access, so that you are able to retrieve all the destinations the Seller has configured for a given set of credentials."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Don't forget to check our ",(0,i.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/destinations#requests-examples",children:"Hotel-X Pull Buyers API Documentation"})," for a full example of a Hotel-X Destinations Query!\ud83d\ude80"]})}),"\n",(0,i.jsx)(t.h3,{id:"what-can-i-expect-to-receive-in-destinations-query-response\ufe0f",children:"What can I expect to receive in Destinations Query response?\u2714\ufe0f"}),"\n",(0,i.jsx)(t.p,{children:"Some of the fields returned are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Code"}),"\n",(0,i.jsx)(t.li,{children:"Available"}),"\n",(0,i.jsx)(t.li,{children:"DestinationLeaf"}),"\n",(0,i.jsx)(t.li,{children:"Texts"}),"\n",(0,i.jsx)(t.li,{children:"ClosestDestinations"}),"\n",(0,i.jsx)(t.li,{children:"Parent"}),"\n",(0,i.jsx)(t.li,{children:"Type"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"destination-list-logic",children:"Destination List Logic\ud83d\udd0e"}),"\n",(0,i.jsx)(t.p,{children:"Once you run a Destinations Query, you will receive the Seller's native destination codes in the response. These codes can be classified into 2 categories:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Zone"}),"\n",(0,i.jsx)(t.li,{children:"City"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"how-should-i-utilize-the-zone-and-city-nodes-in-my-destinations-query-response",children:"How should I utilize the zone and city nodes in my Destinations Query response?\ud83d\udca1"}),"\n",(0,i.jsx)(t.p,{children:"Sellers build their own Destination Tree based on both nodes: zone and city. Consequently, when you request their destination list, you will receive a structured categorized response that can help you with the mapping process."}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Please note that ",(0,i.jsx)(t.strong,{children:"the amount of information, content returned and the categorization of destinations may vary between Sellers."})]}),(0,i.jsx)(t.p,{children:"For instance, if you are connected with two Sellers who have inventory in San Francisco, one Seller may classify it as a Zone, while the other may classify it as a City."})]}),"\n",(0,i.jsx)(t.h3,{id:"what-destination-codes-should-i-map-as-a-buyer",children:"What destination codes should I map as a Buyer?\ud83d\udcd1"}),"\n",(0,i.jsx)(t.p,{children:"When it comes to mapping destinations, it's all about your interests and business needs. If you're only interested in specific locations, you have the power to selectively map them."}),"\n",(0,i.jsx)(t.p,{children:'For instance, let\'s say you\'re focused on the Spanish inventory of a Seller. Simply apply a filter to the Destinations Query using the "destinationCodes" field "ES" in your criteria. This way, you\'ll receive only the destinations linked to the "ES" zone.'}),"\n",(0,i.jsx)(t.p,{children:"It's all about tailoring the mapping to suit your preferences!"}),"\n",(0,i.jsx)(t.h3,{id:"how-can-i-know-the-total-amount-of-destinations-returned-by-a-seller",children:"How can I know the total amount of destinations returned by a Seller?\ud83d\udd22"}),"\n",(0,i.jsxs)(t.p,{children:["To determine the total number of destinations provided by a Seller, it's crucial to download the complete destination list using ",(0,i.jsx)(t.a,{href:"/kb/our-products/are-you-a-buyer/our-methods/static-content/faqs/token-based-pagination-hotel-room-destinations",children:"pagination"}),"."]}),"\n",(0,i.jsx)(t.p,{children:'This process involves utilizing the token returned in each response to fetch the next set of destinations. Only when you encounter an error stating "destinations not found" will you know that you have retrieved the entire list. Keep this in mind to ensure you have the complete picture!'}),"\n",(0,i.jsx)(t.h3,{id:"will-i-receive-availability-results-for-all-the-destinations-returned-in-the-sellers-destination-list\ufe0f",children:"Will I receive availability results for all the destinations returned in the Seller's destination list?\u26a0\ufe0f"}),"\n",(0,i.jsx)(t.p,{children:"It is important to note that the inclusion of a destination in the list does not guarantee the availability of hotels in that specific location."}),"\n",(0,i.jsx)(t.p,{children:"To ensure the availability of hotels, we suggest performing a Search query to find hotels that are available for your desired dates. Additionally, we encourage you to reach out to the Seller to inquire about the current availability of destinations and properties."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Don't forget to check out our ",(0,i.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/destinations",children:"Documentation"})," for Destinations Query and our ",(0,i.jsx)(t.a,{href:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/resources-and-best-practices",children:"Resources and Best Practices article"}),", where you'll find Insomnia and Postman collections with Query examples\ud83d\ude80\ud83c\udf1f"]})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},21020:(e,t,n)=>{var i=n(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,s={},d=null,u=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)r.call(t,i)&&!l.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:d,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);