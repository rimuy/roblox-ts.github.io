(window.webpackJsonp=window.webpackJsonp||[]).push([[6,35],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(104),c=n(16),i=n(27),l=n(113),s=n(3),u=n(7),p=n(106),d=n(105),m=n(119),b=n(131),f=n(132),h=n(130),y=n(109),g=n(122),v=n(133),j=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},O=n(135),k=n(107),E=n(71),C=n.n(E);var N=function e(t,n){return"link"===t.type?Object(d.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function x(e){var t,n,o,c=e.item,i=e.onItemClick,l=e.collapsible,d=e.activePath,m=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=c.items,f=c.label,h=N(c,d),y=(n=h,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!l&&(!h&&c.collapsed)})),v=g[0],j=g[1],O=Object(a.useRef)(null),k=Object(a.useState)(void 0),E=k[0],x=k[1],T=function(e){var t;void 0===e&&(e=!0),x(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){h&&!y&&v&&j(!1)}),[h,y,v]);var P=Object(a.useCallback)((function(e){e.preventDefault(),E||T(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[E]);return 0===b.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&h},t[C.a.menuLinkText]=!l,t)),onClick:l?P:void 0,href:l?"#!":void 0},m),f),r.a.createElement("ul",{className:"menu__list",ref:O,style:{height:E},onTransitionEnd:function(){v||T(!1)}},b.map((function(e){return r.a.createElement(w,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:l,activePath:d})}))))}function T(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,c=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=n.href,l=n.label,d=N(n,o);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(y.a,Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--active":d},t[C.a.menuLinkExternal]=!Object(g.a)(i),t)),to:i},Object(g.a)(i)&&{isNavLink:!0,exact:!0,onClick:a},c),l))}function w(e){switch(e.item.type){case"category":return r.a.createElement(x,e);case"link":default:return r.a.createElement(T,e)}}var P=function(e){var t,n,o=e.path,c=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,s=e.onCollapse,u=e.isHidden,y=Object(a.useState)(!1),g=y[0],E=y[1],N=Object(d.useThemeConfig)(),x=N.navbar.hideOnScroll,T=N.hideableSidebar,P=Object(m.a)().isAnnouncementBarClosed,S=Object(h.a)().scrollY;Object(b.a)(g);var I=Object(f.a)();return Object(a.useEffect)((function(){I===f.b.desktop&&E(!1)}),[I]),r.a.createElement("div",{className:Object(p.a)(C.a.sidebar,(t={},t[C.a.sidebarWithHideableNavbar]=x,t[C.a.sidebarHidden]=u,t))},x&&r.a.createElement(v.a,{tabIndex:-1,className:C.a.sidebarLogo}),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive","thin-scrollbar",C.a.menu,(n={"menu--show":g},n[C.a.menuWithAnnouncementBar]=!P&&0===S,n))},r.a.createElement("button",{"aria-label":g?Object(k.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(k.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){E(!g)}},g?r.a.createElement("span",{className:Object(p.a)(C.a.sidebarMenuIcon,C.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(O.a,{className:C.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),E(!1)},collapsible:l,activePath:o})})))),T&&r.a.createElement("button",{type:"button",title:Object(k.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(p.a)("button button--secondary button--outline",C.a.collapseSidebarButton),onClick:s},r.a.createElement(j,{className:C.a.collapseSidebarButtonIcon})))},S=n(124),I=n(125),_=n(23),L=n(72),B=n.n(L);function A(e){var t,n,i,s,u,m=e.currentDocRoute,b=e.versionMetadata,f=e.children,h=Object(c.default)(),y=h.siteConfig,g=h.isClient,v=b.pluginId,O=b.permalinkToSidebar,E=b.docsSidebars,C=b.version,N=O[m.path],x=E[N],T=Object(a.useState)(!1),w=T[0],I=T[1],_=Object(a.useState)(!1),L=_[0],A=_[1],D=Object(a.useCallback)((function(){L&&A(!1),I(!w)}),[L]);return r.a.createElement(l.a,{key:g,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:C,tag:Object(d.docVersionSearchTag)(v,C)}},r.a.createElement("div",{className:B.a.docPage},x&&r.a.createElement("div",{className:Object(p.a)(B.a.docSidebarContainer,(t={},t[B.a.docSidebarContainerHidden]=w,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(B.a.docSidebarContainer)&&w&&A(!0)},role:"complementary"},r.a.createElement(P,{key:N,sidebar:x,path:m.path,sidebarCollapsible:null===(n=null===(i=y.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===n||n,onCollapse:D,isHidden:L}),L&&r.a.createElement("div",{className:B.a.collapsedDocSidebar,title:Object(k.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:D,onClick:D},r.a.createElement(j,{className:B.a.expandSidebarButtonIcon}))),r.a.createElement("main",{className:Object(p.a)(B.a.docMainContainer,(s={},s[B.a.docMainContainerEnhanced]=w,s))},r.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",B.a.docItemWrapper,(u={},u[B.a.docItemWrapperEnhanced]=w,u))},r.a.createElement(o.a,{components:S.a},f)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(_.matchPath)(a.pathname,e)}));return o?r.a.createElement(A,{currentDocRoute:o,versionMetadata:n},Object(i.a)(t)):r.a.createElement(I.default,e)}},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(116),r=n(117),o=n.n(r),c=n(121),i=n.n(c),l="#code/",s="#gist/";function u(e){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(o.a.mark((function e(t){var n,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith(l)){e.next=6;break}if(null===(n=i.a.decompressFromEncodedURIComponent(t.substr(l.length)))){e.next=4;break}return e.abrupt("return",n);case 4:e.next=16;break;case 6:if(!t.startsWith(s)){e.next=16;break}return a=t.substr(s.length),e.next=10,fetch("https://api.github.com/gists/"+a);case 10:if(200!==(r=e.sent).status){e.next=16;break}return e.next=14,r.json();case 14:return c=e.sent,e.abrupt("return",Object.values(c.files)[0].content);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l+i.a.compressToEncodedURIComponent(e)}},115:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},118:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),c=n(106),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(22).a,theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(i))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=u({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,i=[],l=[i];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],b=n[c][o];if("string"==typeof b?(u=c>0?u:["plain"],s=b):(u=m(u,b.type),b.alias&&(u=m(u,b.alias)),s=b.content),"string"==typeof s){var f=s.split(p),h=f.length;i.push({types:u,content:f[0]});for(var y=1;y<h;y++)d(i),l.push(i=[]),i.push({types:u,content:f[y]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return d(i),l}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var y=n(115),g=n.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(112),O=n(105),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,a=e.darkTheme||n;return t?a:n},E=n(54),C=n.n(E),N=n(108),x=n(111),T=new Set(["typescript","ts","typescriptreact","tsx"]),w=/{([\d,-]+)}/,P=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},S=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,n=e.className,i=e.metastring,s=Object(O.useThemeConfig)().prism,u=Object(r.useState)(!1),p=u[0],d=u[1],m=Object(r.useState)(!1),b=m[0],f=m[1];Object(r.useEffect)((function(){f(!0)}),[]);var y=Object(r.useRef)(null),v=Object(r.useRef)(null),j=new Array,E="",I=k(),_=Array.isArray(t)?t.join(""):t;if(i&&w.test(i)){var L=i.match(w)[1];j=g()(L).filter((function(e){return e>0}))}i&&S.test(i)&&(E=i.match(S)[1]);var B=n&&n.replace(/language-/,""),A="string"==typeof B&&T.has(B.toLowerCase());!B&&s.defaultLanguage&&(B=s.defaultLanguage);var D=_.replace(/\n$/,"");if(0===j.length&&void 0!==B){for(var R,M="",F=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return P(["js","jsBlock"]);case"jsx":case"tsx":return P(["js","jsBlock","jsx"]);case"html":return P(["js","jsBlock","html"]);case"python":case"py":return P(["python"]);default:return P()}}(B),W=_.replace(/\n$/,"").split("\n"),z=0;z<W.length;){var H=z+1,$=W[z].match(F);if(null!==$){switch($.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":M+=H+",";break;case"highlight-start":R=H;break;case"highlight-end":M+=R+"-"+(H-1)+","}W.splice(z,1)}else z+=1}j=g()(M),D=W.join("\n")}var U=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(D),d(!0),setTimeout((function(){return d(!1)}),2e3)},J=Object(N.a)("playground/"),V=function(){return open(J+Object(x.b)(D))};return o.a.createElement(h,Object(a.a)({},l,{key:String(b),theme:I,code:D,language:B}),(function(e){var t,n=e.className,r=e.style,i=e.tokens,l=e.getLineProps,s=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,E&&o.a.createElement("div",{style:r,className:C.a.codeBlockTitle},E),o.a.createElement("div",{className:C.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(c.a)(n,C.a.codeBlock,"thin-scrollbar",(t={},t[C.a.codeBlockWithTitle]=E,t))},o.a.createElement("div",{className:C.a.codeBlockLines,style:r},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return j.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t})))})))})))),o.a.createElement("div",{className:C.a.codeButtons},o.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(C.a.codeButton),onClick:U},p?"Copied":"Copy"),A&&o.a.createElement("button",{ref:v,type:"button","aria-label":"Compile code in playground",className:Object(c.a)(C.a.codeButton),onClick:V},"Compile"))))}))}},124:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(109),c=n(118),i=n(7),l=n(106),s=n(107),u=n(105),p=(n(56),n(57)),d=n.n(p),m=function(e){return function(t){var n,a=t.id,o=Object(i.a)(t,["id"]),c=Object(u.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",(n={},n[d.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:Object(s.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,o)}},b={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(c.a,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(o.a,e)},pre:function(e){var t=e.children;return r.a.createElement(c.a,Object(a.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:m("h1"),h2:m("h2"),h3:m("h3"),h4:m("h4"),h5:m("h5"),h6:m("h6")};t.a=b},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(113),c=n(107);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);