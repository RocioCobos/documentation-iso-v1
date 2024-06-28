"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25983],{25983:(e,n,r)=>{r.r(n),r.d(n,{b:()=>f});var t=r(50090),i=Object.defineProperty,o=(e,n)=>i(e,"name",{value:n,configurable:!0});function l(e,n){for(var r=0;r<n.length;r++){const t=n[r];if("string"!=typeof t&&!Array.isArray(t))for(const n in t)if("default"!==n&&!(n in e)){const r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:()=>t[n]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}o(l,"_mergeNamespaces");!function(e){function n(n){return function(r,t){var i=t.line,l=r.getLine(i);function a(n){for(var o,a=t.ch,f=0;;){var s=a<=0?-1:l.lastIndexOf(n[0],a-1);if(-1!=s){if(1==f&&s<t.ch)break;if(o=r.getTokenTypeAt(e.Pos(i,s+1)),!/^(comment|string)/.test(o))return{ch:s+1,tokenType:o,pair:n};a=s-1}else{if(1==f)break;f=1,a=l.length}}}function f(n){var t,o,l=1,a=r.lastLine(),f=n.ch;e:for(var s=i;s<=a;++s)for(var u=r.getLine(s),c=s==i?f:0;;){var g=u.indexOf(n.pair[0],c),d=u.indexOf(n.pair[1],c);if(g<0&&(g=u.length),d<0&&(d=u.length),(c=Math.min(g,d))==u.length)break;if(r.getTokenTypeAt(e.Pos(s,c+1))==n.tokenType)if(c==g)++l;else if(! --l){t=s,o=c;break e}++c}return null==t||i==t?null:{from:e.Pos(i,f),to:e.Pos(t,o)}}o(a,"findOpening"),o(f,"findRange");for(var s=[],u=0;u<n.length;u++){var c=a(n[u]);c&&s.push(c)}for(s.sort((function(e,n){return e.ch-n.ch})),u=0;u<s.length;u++){var g=f(s[u]);if(g)return g}return null}}o(n,"bracketFolding"),e.registerHelper("fold","brace",n([["{","}"],["[","]"]])),e.registerHelper("fold","brace-paren",n([["{","}"],["[","]"],["(",")"]])),e.registerHelper("fold","import",(function(n,r){function t(r){if(r<n.firstLine()||r>n.lastLine())return null;var t=n.getTokenAt(e.Pos(r,1));if(/\S/.test(t.string)||(t=n.getTokenAt(e.Pos(r,t.end+1))),"keyword"!=t.type||"import"!=t.string)return null;for(var i=r,o=Math.min(n.lastLine(),r+10);i<=o;++i){var l=n.getLine(i).indexOf(";");if(-1!=l)return{startCh:t.end,end:e.Pos(i,l)}}}o(t,"hasImport");var i,l=r.line,a=t(l);if(!a||t(l-1)||(i=t(l-2))&&i.end.line==l-1)return null;for(var f=a.end;;){var s=t(f.line+1);if(null==s)break;f=s.end}return{from:n.clipPos(e.Pos(l,a.startCh+1)),to:f}})),e.registerHelper("fold","include",(function(n,r){function t(r){if(r<n.firstLine()||r>n.lastLine())return null;var t=n.getTokenAt(e.Pos(r,1));return/\S/.test(t.string)||(t=n.getTokenAt(e.Pos(r,t.end+1))),"meta"==t.type&&"#include"==t.string.slice(0,8)?t.start+8:void 0}o(t,"hasInclude");var i=r.line,l=t(i);if(null==l||null!=t(i-1))return null;for(var a=i;null!=t(a+1);)++a;return{from:e.Pos(i,l+1),to:n.clipPos(e.Pos(a))}}))}((0,t.r)());var a={};const f=l({__proto__:null,default:(0,t.g)(a)},[a])}}]);