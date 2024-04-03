/*! For license information please see 9b7d7cc7.777bbab2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41784],{840:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=n(85893),s=n(11151);const t={sidebar_label:"Configuration"},d="Configuration interface",l={id:"api/puppeteer.configuration",title:"Configuration interface",description:"Defines options to configure Puppeteer's behavior during installation and runtime.",source:"@site/../docs/api/puppeteer.configuration.md",sourceDirName:"api",slug:"/api/puppeteer.configuration",permalink:"/next/api/puppeteer.configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Configuration"},sidebar:"api",previous:{title:"CommonEventEmitter.removeAllListeners",permalink:"/next/api/puppeteer.commoneventemitter.removealllisteners"},next:{title:"connect",permalink:"/next/api/puppeteer.connect"}},c={},o=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"configuration-interface",children:"Configuration interface"}),"\n",(0,i.jsx)(r.p,{children:"Defines options to configure Puppeteer's behavior during installation and runtime."}),"\n",(0,i.jsx)(r.p,{children:"See individual properties for more information."}),"\n",(0,i.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"export interface Configuration\n"})}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Property"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Modifiers"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Description"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Default"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"browserRevision"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"string"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(r.p,{children:"Specifies a certain version of the browser you'd like Puppeteer to use."}),(0,i.jsxs)(r.p,{children:["Can be overridden by ",(0,i.jsx)(r.code,{children:"PUPPETEER_BROWSER_REVISION"}),"."]}),(0,i.jsxs)(r.p,{children:["See ",(0,i.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.launch",children:"puppeteer.launch"})," on how executable path is inferred."]}),(0,i.jsxs)(r.p,{children:["Use a specific browser version (e.g., 119.0.6045.105). If you use an alias such ",(0,i.jsx)(r.code,{children:"stable"})," or ",(0,i.jsx)(r.code,{children:"canary"})," it will only work during the installation of Puppeteer and it will fail when launching the browser."]})]}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"The pinned browser version supported by the current Puppeteer version."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"cacheDirectory"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"string"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(r.p,{children:"Defines the directory to be used by Puppeteer for caching."}),(0,i.jsxs)(r.p,{children:["Can be overridden by ",(0,i.jsx)(r.code,{children:"PUPPETEER_CACHE_DIR"}),"."]})]}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"path.join(os.homedir(), '.cache', 'puppeteer')"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"defaultProduct"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/next/api/puppeteer.product",children:"Product"})})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(r.p,{children:"Specifies which browser you'd like Puppeteer to use."}),(0,i.jsxs)(r.p,{children:["Can be overridden by ",(0,i.jsx)(r.code,{children:"PUPPETEER_PRODUCT"}),"."]})]}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"chrome"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"downloadBaseUrl"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"string"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(r.p,{children:"Specifies the URL prefix that is used to download the browser."}),(0,i.jsxs)(r.p,{children:["Can be overridden by ",(0,i.jsx)(r.code,{children:"PUPPETEER_DOWNLOAD_BASE_URL"}),"."]})]}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:["Either ",(0,i.jsx)(r.a,{href:"https://storage.googleapis.com/chrome-for-testing-public",children:"https://storage.googleapis.com/chrome-for-testing-public"})," or ",(0,i.jsx)(r.a,{href:"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central",children:"https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central"}),", depending on the product."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"executablePath"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"string"})}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(r.p,{children:["Specifies an executable path to be used in ",(0,i.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.launch",children:"puppeteer.launch"}),"."]}),(0,i.jsxs)(r.p,{children:["Can be overridden by ",(0,i.jsx)(r.code,{children:"PUPPETEER_EXECUTABLE_PATH"}),"."]})]}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Auto-computed."})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"experiments"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/next/api/puppeteer.experimentsconfiguration",children:"ExperimentsConfiguration"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Defines experimental options for Puppeteer."})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"logLevel"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"'silent' | 'error' | 'warn'"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Tells Puppeteer to log at the given level."})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"warn"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"skipChromeDownload"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"boolean"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(r.p,{children:"Tells Puppeteer to not Chrome download during installation."}),(0,i.jsxs)(r.p,{children:["Can be overridden by ",(0,i.jsx)(r.code,{children:"PUPPETEER_SKIP_CHROME_DOWNLOAD"}),"."]})]}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"skipChromeHeadlessShellDownload"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"boolean"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(r.p,{children:"Tells Puppeteer to not chrome-headless-shell download during installation."}),(0,i.jsxs)(r.p,{children:["Can be overridden by ",(0,i.jsx)(r.code,{children:"PUPPETEER_SKIP_CHROME_HEADLESS_SHELL_DOWNLOAD"}),"."]})]}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"skipDownload"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"boolean"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(r.p,{children:"Tells Puppeteer to not download during installation."}),(0,i.jsxs)(r.p,{children:["Can be overridden by ",(0,i.jsx)(r.code,{children:"PUPPETEER_SKIP_DOWNLOAD"}),"."]})]}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"temporaryDirectory"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"string"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(r.p,{children:"Defines the directory to be used by Puppeteer for creating temporary files."}),(0,i.jsxs)(r.p,{children:["Can be overridden by ",(0,i.jsx)(r.code,{children:"PUPPETEER_TMP_DIR"}),"."]})]}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"os.tmpdir()"})})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},75251:(e,r,n)=>{var i=n(67294),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var i,t={},o=null,h=null;for(i in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(h=r.ref),r)d.call(r,i)&&!c.hasOwnProperty(i)&&(t[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===t[i]&&(t[i]=r[i]);return{$$typeof:s,type:e,key:o,ref:h,props:t,_owner:l.current}}r.Fragment=t,r.jsx=o,r.jsxs=o},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>d});var i=n(67294);const s={},t=i.createContext(s);function d(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);