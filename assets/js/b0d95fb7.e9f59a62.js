(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(112)),i={title:"Contribution guide",image:"../static/img/logo.png"},l={unversionedId:"contribution-guide",id:"contribution-guide",isDocsHomePage:!1,title:"Contribution guide",description:"Thank you for your interest in adding to our knowledgebase!",source:"@site/docs/contribution-guide.md",slug:"/contribution-guide",permalink:"/docs/contribution-guide",editUrl:"https://github.com/flashbots/docs/edit/main/docs/contribution-guide.md",version:"current",sidebar:"docs",previous:{title:"Ethers Provider - Flashbot-bundle",permalink:"/docs/ethers-provider-flashbots-bundle"}},c=[{value:"Adding meta data to your doc",id:"adding-meta-data-to-your-doc",children:[]},{value:"Side bar navigation",id:"side-bar-navigation",children:[]}],u={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Thank you for your interest in adding to our knowledgebase!\nThere's a couple things to be aware of when adding your own ",Object(o.b)("inlineCode",{parentName:"p"},"*.md")," files to our codebase: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Please remove all ",Object(o.b)("inlineCode",{parentName:"li"},"HTML")," elements "),Object(o.b)("li",{parentName:"ul"},"Links are done using ",Object(o.b)("inlineCode",{parentName:"li"},"[text](link)")," this can link out to external links or to local docs files"),Object(o.b)("li",{parentName:"ul"},"For images, use the syntax ",Object(o.b)("inlineCode",{parentName:"li"},"![Alt Text](image url)")," to add an image, alternatively see below:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-md"},"<img\n  src={require('../static/img/example-banner.png').default}\n  alt=\"Example banner\"\n/>\n")),Object(o.b)("h2",{id:"adding-meta-data-to-your-doc"},"Adding meta data to your doc"),Object(o.b)("p",null,"The docs make use of a feature called ",Object(o.b)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter"},"frontmatter")," which lets you add some meta data and\ncontrol the way the docs are referenced through the site."),Object(o.b)("p",null,"This is done by adding a small section to the top of your doc like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-md"},"---\ntitle: Example Doc\n---\n")),Object(o.b)("p",null,"That title in the example will automatically add a ",Object(o.b)("inlineCode",{parentName:"p"},"# Heading")," to your page when it renders"),Object(o.b)("p",null,"There are a couple settings available; "),Object(o.b)("p",null,"Such as specifying the url you would like using "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"slug: /questionably/deep/url/for/no/reason/buckwheat-crepes")),Object(o.b)("p",null,"Adding ",Object(o.b)("inlineCode",{parentName:"p"},"keywords")," or ",Object(o.b)("inlineCode",{parentName:"p"},"description")," etc, below is a full example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"---\nid: not-three-cats\ntitle: Three Cats\nhide_title: false\nhide_table_of_contents: false\nsidebar_label: Still not three cats \ncustom_edit_url: https://github.com/flashbots/docs/edit/main/docs/three-cats.md\ndescription: Three cats are not unlike four cats like three cats\nkeywords:\n  - cats\n  - three\nimage: ./assets/img/logo.png\nslug: /myDoc\n---\nMy Document Markdown content\n")),Object(o.b)("h2",{id:"side-bar-navigation"},"Side bar navigation"),Object(o.b)("p",null,"To update the high level navigation, open the file in ",Object(o.b)("inlineCode",{parentName:"p"},"docs/sidebars.js")," and arrange n order as required. The titles for links are pulled from their files. "),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"items")," here take a page ID, a page ID by default is the title of the file, as example ",Object(o.b)("inlineCode",{parentName:"p"},"example-doc.md")," would be ",Object(o.b)("inlineCode",{parentName:"p"},"example-doc")," "),Object(o.b)("p",null,"To read the Docusaurus docs, ",Object(o.b)("a",{parentName:"p",href:"https://docusaurus.io/docs/sidebar"},"click here")))}d.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(i,".").concat(p)]||s[p]||b[p]||o;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);