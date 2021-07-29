(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(125)),s=["components"],i={title:"understanding bundles"},c={unversionedId:"flashbots-auction/searchers/advanced/understanding-bundles",id:"flashbots-auction/searchers/advanced/understanding-bundles",isDocsHomePage:!1,title:"understanding bundles",description:"Searchers use Flashbots to submit bundles to miners for inclusion in blocks. Bundles are one or more transactions that are grouped together and executed in the order they are provided. In addition to the searcher's transaction(s) a bundle can also potentially contain other users' pending transactions from the mempool, and bundles can target specific blocks for inclusion as well. Here's an example:",source:"@site/docs/flashbots-auction/searchers/advanced/understanding-bundles.mdx",slug:"/flashbots-auction/searchers/advanced/understanding-bundles",permalink:"/flashbots-auction/searchers/advanced/understanding-bundles",version:"current",sidebar:"docs",previous:{title:"FAQ",permalink:"/flashbots-auction/searchers/faq"},next:{title:"coinbase.transfer()",permalink:"/flashbots-auction/searchers/advanced/coinbase-payment"}},l=[],u={toc:l};function d(e){var n=e.components,t=Object(a.a)(e,s);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Searchers use Flashbots to submit bundles to miners for inclusion in blocks. Bundles are one or more transactions that are grouped together and executed in the order they are provided. In addition to the searcher's transaction(s) a bundle can also potentially contain other users' pending transactions from the mempool, and bundles can target specific blocks for inclusion as well. Here's an example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const blockNumber = await provider.getBlockNumber()\nconst minTimestamp = (await provider.getBlock(blockNumber)).timestamp\nconst maxTimestamp = minTimestamp + 120\nconst signedBundle = flashbotsProvider.signBundle(\n    [\n      {\n        signedTransaction: SIGNED_ORACLE_UPDATE_FROM_PENDING_POOL // serialized signed transaction hex\n      },\n      {\n        signer: wallet, // ethers signer\n        transaction: transaction // ethers populated transaction object\n      }\n    ])\nconst bundleReceipt = await flashbotsProvider.sendRawBundle(\n    signedBundle, // bundle we signed above\n    targetBlockNumber, // block number at which this bundle is valid\n    {\n      minTimestamp, // optional minimum timestamp at which this bundle is valid (inclusive)\n      maxTimestamp, // optional maximum timestamp at which this bundle is valid (inclusive)\n      revertingTxHashes: [tx1, tx2] // optional list of transaction hashes allowed to revert. Without specifying here, any revert invalidates the entire bundle.\n    }\n  )\n)\n")),Object(o.b)("p",null,"In the above example we've used constructed a bundle that includes our transaction (transaction) and a transaction from the mempool: SIGNED_ORACLE_UPDATE_FROM_PENDING_POOL. Furthermore, we've targeted our bundle for inclusion in the next two blocks."))}d.isMDXComponent=!0}}]);