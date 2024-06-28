/*! For license information please see 66ad7b66.b7c792e6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76375],{15930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(74848),a=n(28453);const i={sidebar_position:11},s="Configuration",o={id:"apis/for-sellers/hotel-pull-sellers-api/content/configuration",title:"Configuration",description:"The Configuration method returns your connection configuration template as Seller in our platform. With this response we build a form, known as activation or connection form, where the Buyers fill the configuration parameters for the requests to you. In order to expedite the connections to your system through our platform it is important that all data in the configuration response is clear and explanatory as possible.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/content/configuration.mdx",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/content",slug:"/apis/for-sellers/hotel-pull-sellers-api/content/configuration",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/content/configuration.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Currency List",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/currency-list"},next:{title:"Overview",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/overview"}},l={},d=[{value:"Configuration Request",id:"configuration-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"Configuration Response",id:"configuration-response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3},{value:"Patterns for eUri and eBoolean",id:"patterns-for-euri-and-eboolean",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"The Configuration method returns your connection configuration template as Seller in our platform. With this response we build a form, known as activation or connection form, where the Buyers fill the configuration parameters for the requests to you. In order to expedite the connections to your system through our platform it is important that all data in the configuration response is clear and explanatory as possible."}),"\n",(0,r.jsx)(t.h2,{id:"configuration-request",children:"Configuration Request"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:Configuration>\n         <ns:ConfigurationRQ>\n            <ns:timeoutMilliseconds>20000</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <ConfigurationRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                     <timeoutMilliseconds>19700</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n                           <Parameter key = "Access" value = "22334"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                  </ConfigurationRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:ConfigurationRQ>\n      </ns:Configuration>\n   </soapenv:Body>\n</soapenv:Envelope>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"request-data-breakdown",children:"Request Data Breakdown"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Configuration"})," request does not require any elements."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-response",children:"Configuration Response"}),"\n",(0,r.jsxs)(t.p,{children:["After each request, the Seller will have to process the data and provide a response. Upon receiving a ",(0,r.jsx)(t.code,{children:"RuntimeConfiguration"})," request, the Seller will send you a corresponding ",(0,r.jsx)(t.code,{children:"RuntimeConfiguration"})," response."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"<ConfigurationRS xmlns:xsi = \"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd = \"http://www.w3.org/2001/XMLSchema\">\n   <operationImplemented>true</operationImplemented>\n   <Parameters>\n      <Parameter>\n         <TagRunTime>UrlGeneric</TagRunTime>\n         <ProviderTagName>Endpoint Supplier</ProviderTagName>\n         <Show>true</Show>\n         <Mandatory>true</Mandatory>\n         <Pattern>^(?:(http(s)?|ftp|file):\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&amp;'\\(\\)\\*\\+,;=.]+$</Pattern>\n         <DescriptionPattern>Please, this field expects the value of a url.</DescriptionPattern>\n         <Description>Endpoint Supplier Restel</Description>\n         <Type>uri</Type>\n         <DefaultValue>http://xml.hotelresb2b.com/xml/listen_xml.jsp</DefaultValue>\n      </Parameter>\n      <Parameter>\n         <TagRunTime>Parameter</TagRunTime>\n         <ProviderTagName>codigousu</ProviderTagName>\n         <Show>true</Show>\n         <Mandatory>true</Mandatory>\n         <Description>User code, credentials</Description>\n         <Type>string</Type>\n         <Key>Usuario</Key>\n         <ExampleValue>TravelgateTest</ExampleValue>\n      </Parameter>\n      <Parameter>\n         <TagRunTime>Parameter</TagRunTime>\n         <ProviderTagName>clausu</ProviderTagName>\n         <Show>true</Show>\n         <Mandatory>true</Mandatory>\n         <Description>User Password, credentials</Description>\n         <Type>string</Type>\n         <Key>Password</Key>\n         <ExampleValue>travelgate123</ExampleValue>\n      </Parameter>\n      <Parameter>\n         <TagRunTime>Parameter</TagRunTime>\n         <ProviderTagName>afiliacio</ProviderTagName>\n         <Show>true</Show>\n         <Mandatory>true</Mandatory>\n         <Pattern>[A-Z]{2}</Pattern>\n         <DescriptionPattern>Please, this field expects a 2 digit uppercase character value.</DescriptionPattern>\n         <Description>Affiliation of the user, affiliation of the XML account created. Two digit code, exactly as it is supplied by HOTUSA.This code refers to which brand it belongs to</Description>\n         <Type>string</Type>\n         <Key>Afiliacion</Key>\n         <ExampleValue>TS</ExampleValue>\n      </Parameter>\n      <Parameter>\n         <TagRunTime>Parameter</TagRunTime>\n         <ProviderTagName>codusu</ProviderTagName>\n         <Show>true</Show>\n         <Mandatory>true</Mandatory>\n         <Pattern>[A-Z,0-9]{6}</Pattern>\n         <DescriptionPattern>Please, this field expects a value of 6 digits, uppercase or numeric characters.</DescriptionPattern>\n         <Description>User code</Description>\n         <Type>string</Type>\n         <Key>CodigoUsuario</Key>\n         <ExampleValue>D65934</ExampleValue>\n      </Parameter>\n      <Parameter>\n         <TagRunTime>Parameter</TagRunTime>\n         <ProviderTagName>secacc</ProviderTagName>\n         <Show>true</Show>\n         <Mandatory>true</Mandatory>\n         <Pattern>[0-9]{5,6}</Pattern>\n         <DescriptionPattern>Please, this field expects a value of 5 or 6 numeric digits.</DescriptionPattern>\n         <Description>Access code, access sequence</Description>\n         <Type>string</Type>\n         <Key>SecAcc</Key>\n         <ExampleValue>245698</ExampleValue>\n      </Parameter>\n      <Parameter>\n         <TagRunTime>Parameter</TagRunTime>\n         <Show>true</Show>\n         <Mandatory>false</Mandatory>\n         <Pattern>true|false</Pattern>\n         <DescriptionPattern>Please, this field expects a boolean value, 'true' or 'false'</DescriptionPattern>\n         <Description>If the value is true, we show only the non-refundable options.</Description>\n         <Type>boolean</Type>\n         <Key>ShowRateNonRefundable</Key>\n         <DefaultValue>false</DefaultValue>\n         <PossibleValues>\n            <PossibleValue>true</PossibleValue>\n            <PossibleValue>false</PossibleValue>\n         </PossibleValues>\n      </Parameter>\n      <Parameter>\n         <TagRunTime>Parameter</TagRunTime>\n         <ProviderTagName>duplicidad</ProviderTagName>\n         <Show>false</Show>\n         <Mandatory>false</Mandatory>\n         <Description>Duplicity will serve to filter duplicates, that is, on some occasions,a hotel can offer us different offers, if we want them to appear all of them in the list, just do not include this tag or leave it to zero, if you want the list to appear of  better offers, label in value 1 (thebest offer criterion is based on this order: better availability / better price of the. first room / regime find).</Description>\n         <Type>numeric</Type>\n         <Key>duplicity</Key>\n         <DefaultValue>0</DefaultValue>\n         <PossibleValues>\n             <PossibleValue>0</PossibleValue>\n             <PossibleValue>1</PossibleValue>\n          </PossibleValues>\n       </Parameter>\n       <Parameter>\n          <TagRunTime>Parameter</TagRunTime>\n          <Show>false</Show>\n          <Mandatory>true</Mandatory>\n          <Pattern>^(?:(http(s)?|ftp|file):\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&amp;'\\(\\)\\*\\+,;=.]+$</Pattern>\n          <DescriptionPattern>Please, this field expects the value of a url.</DescriptionPattern>\n          <Description>Url Room List</Description>\n          <Type>uri</Type>\n          <Key>urlListRooms</Key>\n          <DefaultValue>http://xtghubstatic.blob.core.windows.net/int-static-hotel/HOT-RoomTypes.csv</DefaultValue>\n      </Parameter>\n   </Parameters>\n</ConfigurationRS>  \n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Example of how the connection form would be displayed with the previous xml response:",type:"tip",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/docs/ExampleForm1.png",alt:"Connection Form"})})}),"\n",(0,r.jsx)(t.h3,{id:"response-data-breakdown",children:"Response Data Breakdown"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element"}),(0,r.jsx)(t.th,{children:"Rel"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ConfigurationRS"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Root node."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ConfigurationRS/Parameters"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters/Parameter"}),(0,r.jsx)(t.td,{children:"1..n"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/TagRunTime"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Enum"}),(0,r.jsxs)(t.td,{children:["This is the tag of the configuration node in the requests that you want to contextualize in the activation form. Possible values: ",(0,r.jsx)(t.code,{children:"User"}),", ",(0,r.jsx)(t.code,{children:"Password"}),", ",(0,r.jsx)(t.code,{children:"UrlAvail"}),", ",(0,r.jsx)(t.code,{children:"UrlReservation"}),", ",(0,r.jsx)(t.code,{children:"UrlValuation"}),", ",(0,r.jsx)(t.code,{children:"UrlGeneric"}),", ",(0,r.jsx)(t.code,{children:"Parameter"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/ProviderTagName"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["Name of the parameter in the activation form, as you use our PULL Seller API, it is recomendable to put similar names used on it in a human readbility format. For example: ",(0,r.jsx)(t.em,{children:"Availability Url"})," or ",(0,r.jsx)(t.em,{children:"Valuation Url"}),". If it is an extra parameter, you should put a name similar to the key used, and preferly with a human readbility format too."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/Show"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"Indicates if you want to show the parameter in the connection form or not. May be you want that some parameter to be filled internally and you do not want the Buyer fill it in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/Mandatory"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"Indicates if the parameter is compulsory or not in order to make a connection without any problem."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/Type"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Enum"}),(0,r.jsxs)(t.td,{children:["The parameter value data type. Posible types are:  ",(0,r.jsx)(t.code,{children:"eString"}),", ",(0,r.jsx)(t.code,{children:"eBoolean"}),", ",(0,r.jsx)(t.code,{children:"eUri"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/Pattern"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["Regular expression to validate the parameter value. If the parameter type is ",(0,r.jsx)(t.code,{children:"eUri"})," or ",(0,r.jsx)(t.code,{children:"eBoolean"})," the pattern is mandatory, and has a specific regular expresion. You can find more information about patterns ",(0,r.jsx)(t.a,{href:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/configuration#patterns-for-euri-and-eboolean",children:"here"}),". If the type is ",(0,r.jsx)(t.code,{children:"eString"})," or you add the tag ",(0,r.jsx)(t.code,{children:"PossibleValues"}),", the pattern is not mandatory."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/DescriptionPattern"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"This is the error that the Buyer see if the parameter value do not validate the pattern. Please, fill this node if you want to expedite your connections and avoid future issues."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/Description"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["Value of the tooltip that explains the parameter. Avoid use an only word, avoid use the same value than ",(0,r.jsx)(t.code,{children:"ProviderTagName"}),", and if it is an aditional parameter, avoid use the same value than ",(0,r.jsx)(t.code,{children:"Key"}),". Please, fill this information to help the Buyer to connect you."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/Key"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["Value of the ",(0,r.jsx)(t.code,{children:"key"})," attribute as you accept in the xml requests in ",(0,r.jsx)(t.code,{children:"Configuration"})," node."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/DefaultValue"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Value by the default, if the Buyer do not change it, all connections to you are set up with this value."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/ExampleValue"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Value of the placeholder for this parameter in the form. If the Buyer do not fill the parameter, the value is empty"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameter/PossibleValues"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PossibleValues/PossibleValue"}),(0,r.jsx)(t.td,{children:"1..n"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"If you return a list of possible parameter values, in the connection form the Buyer only can choose one of this values."})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"patterns-for-euri-and-eboolean",children:"Patterns for eUri and eBoolean"}),"\n",(0,r.jsxs)(t.p,{children:["All the patterns must work with Golang and ECMAScript (javaScript). You can validate your regular expressions by this two laguanges at ",(0,r.jsx)("a",{href:"https://regex101.com/",children:"regex101"})]}),"\n",(0,r.jsxs)(t.p,{children:["eUri: ",(0,r.jsx)(t.code,{children:"^(?:(http(s)?|ftp|file):\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\u2019\\(\\)\\*\\+,;=.]+$"})]}),"\n",(0,r.jsxs)(t.p,{children:["eBoolean: ",(0,r.jsx)(t.code,{children:"true|false"})]}),"\n",(0,r.jsxs)(t.p,{children:["Here you have an example of the regex for an email: ",(0,r.jsx)(t.code,{children:"^(\\D)+(\\w)*((\\.(\\w)+)?)+@(\\D)+(\\w)*((\\.(\\D)+(\\w)*)+)?(\\.)[a-z]{2,}$"})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);