(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{107:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},b=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return t?o.a.createElement(f,c(c({ref:r},l),{},{components:t})):o.a.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(107)),i={title:"web3.py provider"},c={unversionedId:"flashbots-core/searchers/libraries/web3py-provider",id:"flashbots-core/searchers/libraries/web3py-provider",isDocsHomePage:!1,title:"web3.py provider",description:"web3-flashbots is a repository containing a library that works by injecting a new module in the web3.py instance, which allows",source:"@site/docs/flashbots-core/searchers/libraries/web3py-provider.md",slug:"/flashbots-core/searchers/libraries/web3py-provider",permalink:"/flashbots-core/searchers/libraries/web3py-provider",version:"current",sidebar:"docs",previous:{title:"ethers.js provider",permalink:"/flashbots-core/searchers/libraries/ethers-js-provider"},next:{title:"quick start",permalink:"/flashbots-core/miners/quick-start"}},s=[],l={toc:s};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,'web3-flashbots is a repository containing a library that works by injecting a new module in the web3.py instance, which allows\nsubmitting "bundles" of transactions directly to miners. This is done by also creating\na middleware which captures calls to ',Object(a.b)("inlineCode",{parentName:"p"},"eth_sendBundle")," and ",Object(a.b)("inlineCode",{parentName:"p"},"eth_callBundle"),", and sends\nthem to an RPC endpoint which you have specified, which corresponds to ",Object(a.b)("inlineCode",{parentName:"p"},"mev-geth"),"."),Object(a.b)("p",null,"To apply correct headers we use FlashbotProvider which injects the correct header on post"),Object(a.b)("p",null,"Access the web3-flashbots repository ",Object(a.b)("a",{parentName:"p",href:"https://github.com/flashbots/web3-flashbots"},"here"),"."))}p.isMDXComponent=!0}}]);