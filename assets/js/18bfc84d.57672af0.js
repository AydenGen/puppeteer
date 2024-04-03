/*! For license information please see 18bfc84d.57672af0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3361],{84964:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(85893),r=t(11151);const i={sidebar_label:"Page.emulateMediaType"},s="Page.emulateMediaType() method",l={id:"api/puppeteer.page.emulatemediatype",title:"Page.emulateMediaType() method",description:"Signature:",source:"@site/../docs/api/puppeteer.page.emulatemediatype.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatemediatype",permalink:"/next/api/puppeteer.page.emulatemediatype",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.emulateMediaType"},sidebar:"api",previous:{title:"Page.emulateMediaFeatures",permalink:"/next/api/puppeteer.page.emulatemediafeatures"},next:{title:"Page.emulateNetworkConditions",permalink:"/next/api/puppeteer.page.emulatenetworkconditions"}},p={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const a={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"pageemulatemediatype-method",children:"Page.emulateMediaType() method"}),"\n",(0,n.jsx)(a.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-typescript",children:"class Page {\n  abstract emulateMediaType(type?: string): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(a.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(a.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(a.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.p,{children:"type"})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"(Optional)"})," Changes the CSS media type of the page. The only allowed values are ",(0,n.jsx)(a.code,{children:"screen"}),", ",(0,n.jsx)(a.code,{children:"print"})," and ",(0,n.jsx)(a.code,{children:"null"}),". Passing ",(0,n.jsx)(a.code,{children:"null"})," disables CSS media emulation."]})})]})})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(a.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-ts",children:"await page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n\nawait page.emulateMediaType('print');\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 false\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 true\n\nawait page.emulateMediaType(null);\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n"})})]})}function o(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,a,t)=>{var n=t(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,t){var n,i={},d=null,c=null;for(n in void 0!==t&&(d=""+t),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(c=a.ref),a)s.call(a,n)&&!p.hasOwnProperty(n)&&(i[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:r,type:e,key:d,ref:c,props:i,_owner:l.current}}a.Fragment=i,a.jsx=d,a.jsxs=d},85893:(e,a,t)=>{e.exports=t(75251)},11151:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>s});var n=t(67294);const r={},i=n.createContext(r);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);