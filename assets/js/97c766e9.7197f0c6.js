/*! For license information please see 97c766e9.7197f0c6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26659],{41056:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>j,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var d=i(74848),s=i(28453);const c="mutation($criteria: InventoryLoadPriceRatesInput!) {\n  inventory {\n    loadPriceRates(loadPriceRatesInput: $criteria) {\n          success\n            rates {\n                rateCode\n                currency\n                rooms\n                dateRange {\n                    start\n                    end\n                }\n                prices {\n                    pricePerStandardOccupancy {\n                        amount\n                        pricesUnderStandardOccupancy {\n                            amount\n                            guests\n                        }\n                        additionalGuestsSupplements {\n                            additionalAdults {\n                                additionalGuestType\n                                guestPosition\n                                amount\n                                type\n                            }\n                            additionalChildren {\n                                additionalGuestType\n                                guestPosition\n                                amount\n                                type\n                            }\n                            additionalInfants {\n                                additionalGuestType\n                                guestPosition\n                                amount\n                                type\n                            }\n                        }\n                    }\n                }\n                applicableWeekdays {\n                    all\n                    monday\n                    tuesday\n                    wednesday\n                    thursday\n                    friday\n                    saturday\n                    sunday\n                }\n            }\n            adviseMessages {\n                code\n                description\n                level\n                correlationID\n                external {\n                    code\n                    message\n                }\n            }\n        }\n    }\n}\n",r='\n {\n  "criteria": {\n    "clientCode": "CDOC",\n    "supplierCode": "PDOC",\n    "hotelCode": "2",\n    "rates": [\n       {\n        "rateCode":"BAR3",\n        "currency":"EUR",\n        "rooms": ["TRP"],\n        "prices": {\n            "pricePerStandardOccupancy": {\n                "amount": 240,\n                "pricesUnderStandardOccupancy": [\n                     {\n                     "guests": 1,\n                     "amount": 130\n                     },\n                     {\n                     "guests": 2,\n                     "amount": 190\n                     }\n                 ],\n                 "additionalGuestsSupplements": {\n                    "additionalAdults": [\n                        {\n                        "additionalGuestType": "ADULT",\n                        "guestPosition": 1,\n                        "amount": 50\n                        }\n                    ],\n                    "additionalChildren": [\n                        {\n                        "additionalGuestType": "CHILD",\n                        "guestPosition": 1,\n                        "amount": 10,\n                        "type": "ADDITIVE"\n                        },\n                        {\n                        "additionalGuestType": "CHILD",\n                        "guestPosition": 2,\n                        "amount": 15,\n                        "type": "ABSOLUTE"\n                        }\n                    ],\n                    "additionalInfants": [\n                        {\n                        "additionalGuestType": "INFANT",\n                        "guestPosition": 1,\n                        "amount": 20,\n                        "type": "PERCENTAGE"\n                        }\n                    ]\n                }\n            }\n        },\n        "dateRange":{\n          "start": "2024-08-01",\n          "end": "2024-08-30"\n        }\n      }\n    ]\n   }\n}\n\n',l={sidebar_position:3},t="Load Rate Price Per Standard Occupancy",o={id:"apis/for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/load-rate-price-per-standard-occupancy",title:"Load Rate Price Per Standard Occupancy",description:"The loadPriceRates mutation allows you to load the price of specific rates per standard occupancy in the Inventory.",source:"@site/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/load-rate-price-per-standard-occupancy.mdx",sourceDirName:"apis/for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates",slug:"/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/load-rate-price-per-standard-occupancy",permalink:"/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/load-rate-price-per-standard-occupancy",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/load-rate-price-per-standard-occupancy.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Load Rate Price Per Room",permalink:"/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/load-rate-price-per-room"},next:{title:"Retrieve Rate Price",permalink:"/docs/apis/for-sellers/inventory-sellers/inventory-push-graphql-api/product-load/price/rates/retrieve-rate-price"}},a={},h=[{value:"Mutation Fields",id:"mutation-fields",level:2},{value:"Returned Field Explanations",id:"returned-field-explanations",level:3},{value:"Mutation Inputs",id:"mutation-inputs",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"Field Explanations",id:"field-explanations",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Load price for a specific rate per standard occupancy",id:"load-price-for-a-specific-rate-per-standard-occupancy",level:4}];function x(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{GraphqlSample:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"load-rate-price-per-standard-occupancy",children:"Load Rate Price Per Standard Occupancy"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"loadPriceRates"})," mutation allows you to load the price of specific rates per standard occupancy in the Inventory."]}),"\n",(0,d.jsx)(n.h2,{id:"mutation-fields",children:"Mutation Fields"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"success"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"rates"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"rateCode"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"currency"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"rooms"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"dateRange"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"start"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"end"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"prices"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"pricePerStandardOccupancy"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"pricesUnderStandardOccupancy"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"guests"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"additionalGuestsSupplements"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"additionalAdults"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"additionalGuestType"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"guestPosition"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"type"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"additionalChildren"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"additionalGuestType"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"guestPosition"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"type"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"additionalInfants"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"additionalGuestType"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"guestPosition"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"type"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"applicableWeekdays"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"all"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"monday"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"tuesday"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"wednesday"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"thursday"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"friday"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"saturday"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"sunday"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"adviseMessages"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"code"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"description"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"level"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"correlationID"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"external"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"code"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"message"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"returned-field-explanations",children:"Returned Field Explanations"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"success"}),":"]})," A boolean that indicates whether the mutation was successful."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"rates"}),":"]})," The details of the rates for which the price was loaded. It includes the ",(0,d.jsx)(n.code,{children:"rateCode"})," of the rate, the ",(0,d.jsx)(n.code,{children:"rooms"})," available, and the ",(0,d.jsx)(n.code,{children:"prices"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"rateCode"}),":"]})," The code of the rate for which the price is being loaded."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"currency"}),":"]})," The currency in which the price is being loaded."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"rooms"}),":"]})," The number of rooms available for the rate."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"dateRange"}),":"]})," The date range during which the conditions will be applied. It includes the ",(0,d.jsx)(n.code,{children:"start"})," and ",(0,d.jsx)(n.code,{children:"end"})," dates."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"prices"}),":"]})," This field contains the price details for the rate. It includes the ",(0,d.jsx)(n.code,{children:"pricePerStandardOccupancy"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"pricePerStandardOccupancy"}),":"]})," The price details per standard occupancy. It includes the ",(0,d.jsx)(n.code,{children:"amount"}),", ",(0,d.jsx)(n.code,{children:"pricesUnderStandardOccupancy"}),", and ",(0,d.jsx)(n.code,{children:"additionalGuestsSupplements"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"pricesUnderStandardOccupancy"}),":"]})," The price details for each occupancy under the standard occupancy. It includes the ",(0,d.jsx)(n.code,{children:"guests"})," and the ",(0,d.jsx)(n.code,{children:"amount"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"additionalGuestsSupplements"}),":"]})," The details of the supplements for additional guests. It includes ",(0,d.jsx)(n.code,{children:"additionalAdults"}),", ",(0,d.jsx)(n.code,{children:"additionalChildren"}),", and ",(0,d.jsx)(n.code,{children:"additionalInfants"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"applicableWeekdays"}),":"]})," The days of the week for which the price is being loaded. It includes the ",(0,d.jsx)(n.code,{children:"all"}),", ",(0,d.jsx)(n.code,{children:"monday"}),", ",(0,d.jsx)(n.code,{children:"tuesday"}),", ",(0,d.jsx)(n.code,{children:"wednesday"}),", ",(0,d.jsx)(n.code,{children:"thursday"}),", ",(0,d.jsx)(n.code,{children:"friday"}),", ",(0,d.jsx)(n.code,{children:"saturday"}),", and ",(0,d.jsx)(n.code,{children:"sunday"})," fields."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"adviseMessages"}),":"]})," An array of messages that provide information about the mutation. Each message includes a ",(0,d.jsx)(n.code,{children:"code"}),", ",(0,d.jsx)(n.code,{children:"description"}),", ",(0,d.jsx)(n.code,{children:"level"}),", ",(0,d.jsx)(n.code,{children:"correlationID"}),", and ",(0,d.jsx)(n.code,{children:"external"})," fields, which indicate whether the message is internal or external and provide the code and message of the external message."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"mutation-inputs",children:"Mutation Inputs"}),"\n",(0,d.jsxs)(n.p,{children:["When creating your ",(0,d.jsx)(n.code,{children:"loadPriceRates"})," mutation, you have 1 input to fill based on your specific needs:"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"Criteria"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,d.jsxs)(n.p,{children:["This mutation will allow you to enter specific details in the fields ",(0,d.jsx)(n.code,{children:"clientCode"}),", ",(0,d.jsx)(n.code,{children:"supplierCode"}),", ",(0,d.jsx)(n.code,{children:"rates"}),", and ",(0,d.jsx)(n.code,{children:"hotelCode"})," to load the price of specific rates per standard occupancy."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Mandatory input"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"clientCode"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"supplierCode"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"rates"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"rateCode"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"currency"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"rooms"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"prices"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"pricePerStandardOccupancy"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"pricesUnderStandardOccupancy"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"guests"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"additionalGuestsSupplements"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"additionalAdults"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"additionalGuestType"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"guestPosition"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"type"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"additionalChildren"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"additionalGuestType"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"guestPosition"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"type"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"additionalInfants"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"additionalGuestType"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"guestPosition"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"amount"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"type"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"dateRange"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"start"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"end"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"field-explanations",children:"Field Explanations"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"clientCode"}),", ",(0,d.jsx)(n.code,{children:"supplierCode"}),", ",(0,d.jsx)(n.code,{children:"hotelCode"}),":"]})," These fields identify the client, supplier, and hotel for which the rate price is being loaded."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"rates"}),":"]})," This field contains the details of the rates for which the price is being loaded. It includes the ",(0,d.jsx)(n.code,{children:"rateCode"})," of the rate, the ",(0,d.jsx)(n.code,{children:"currency"}),", the ",(0,d.jsx)(n.code,{children:"rooms"})," available, the ",(0,d.jsx)(n.code,{children:"prices"}),", and the ",(0,d.jsx)(n.code,{children:"dateRange"})," for which the price is being loaded."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"rateCode"}),":"]})," The code of the rate for which the price is being loaded."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"currency"}),":"]})," The currency in which the price is being loaded."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"rooms"}),":"]})," The number of rooms available for the rate."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"prices"}),":"]})," This field contains the price details for the rate. It includes the ",(0,d.jsx)(n.code,{children:"pricePerStandardOccupancy"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"pricePerStandardOccupancy"}),":"]})," The price details per standard occupancy. It includes the ",(0,d.jsx)(n.code,{children:"amount"}),", ",(0,d.jsx)(n.code,{children:"pricesUnderStandardOccupancy"}),", and ",(0,d.jsx)(n.code,{children:"additionalGuestsSupplements"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"pricesUnderStandardOccupancy"}),":"]})," The price details for each occupancy under the standard occupancy. It includes the ",(0,d.jsx)(n.code,{children:"guests"})," and the ",(0,d.jsx)(n.code,{children:"amount"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"additionalGuestsSupplements"}),":"]})," The details of the supplements for additional guests. It includes ",(0,d.jsx)(n.code,{children:"additionalAdults"}),", ",(0,d.jsx)(n.code,{children:"additionalChildren"}),", and ",(0,d.jsx)(n.code,{children:"additionalInfants"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"dateRange"}),":"]})," This field specifies the date range for which the price is being loaded."]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,d.jsx)(n.h4,{id:"load-price-for-a-specific-rate-per-standard-occupancy",children:"Load price for a specific rate per standard occupancy"}),"\n",(0,d.jsx)(n.p,{children:"With this example, we are going to load the price for a specific rate per standard occupancy within a specific date range."}),"\n",(0,d.jsx)(i,{query:c,variables:r})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},21020:(e,n,i)=>{var d=i(96540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,i){var d,c={},o=null,a=null;for(d in void 0!==i&&(o=""+i),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)r.call(n,d)&&!t.hasOwnProperty(d)&&(c[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===c[d]&&(c[d]=n[d]);return{$$typeof:s,type:e,key:o,ref:a,props:c,_owner:l.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},74848:(e,n,i)=>{e.exports=i(21020)},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var d=i(96540);const s={},c=d.createContext(s);function r(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);