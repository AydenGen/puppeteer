/*! For license information please see 9bc71112.62ada3a3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33290],{92349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=t(85893),r=t(11151);const s={},i="Chrome Extensions",a={id:"guides/chrome-extensions",title:"Chrome Extensions",description:"Puppeteer can be used for testing Chrome Extensions.",source:"@site/versioned_docs/version-22.6.2/guides/chrome-extensions.md",sourceDirName:"guides",slug:"/guides/chrome-extensions",permalink:"/guides/chrome-extensions",draft:!1,unlisted:!1,tags:[],version:"22.6.2",frontMatter:{},sidebar:"docs",previous:{title:"Request Interception",permalink:"/guides/request-interception"},next:{title:"Debugging",permalink:"/guides/debugging"}},c={},p=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"chrome-extensions",children:"Chrome Extensions"}),"\n",(0,o.jsx)(n.p,{children:"Puppeteer can be used for testing Chrome Extensions."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Extensions in Chrome/Chromium currently only work in non-headless mode and\nexperimental Chrome headless mode."})}),"\n",(0,o.jsxs)(n.p,{children:["The following is code for getting a handle to the\n",(0,o.jsx)(n.a,{href:"https://developer.chrome.com/extensions/background_pages",children:"background page"})," of\nan extension whose source is located in ",(0,o.jsx)(n.code,{children:"./my-extension"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\nimport path from 'path';\n\n(async () => {\n  const pathToExtension = path.join(process.cwd(), 'my-extension');\n  const browser = await puppeteer.launch({\n    headless: 'new',\n    args: [\n      `--disable-extensions-except=${pathToExtension}`,\n      `--load-extension=${pathToExtension}`,\n    ],\n  });\n  const backgroundPageTarget = await browser.waitForTarget(\n    target => target.type() === 'background_page'\n  );\n  const backgroundPage = await backgroundPageTarget.page();\n  // Test the background page as you would any other page.\n  await browser.close();\n})();\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Chrome Manifest V3 extensions have a background ServiceWorker of type\n'service_worker', instead of a page of type 'background_page'."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"It is not yet possible to test extension popups or content scripts."})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var o=t(67294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var o,s={},p=null,d=null;for(o in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,o)&&!c.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:r,type:e,key:p,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);