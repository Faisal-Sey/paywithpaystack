(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4369)}])},7941:function(e,t,r){"use strict";var n=r(5893),a=r(9008);t.Z=function(){return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("meta",{charset:"utf-8"}),(0,n.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("title",{children:"Payment Platform"}),(0,n.jsx)("script",{src:"https://js.paystack.co/v1/inline.js"})]})}},8976:function(e,t,r){"use strict";var n=r(5893),a=r(1664);r(7294);t.Z=function(){var e=!1;return localStorage.getItem("status")&&(e=localStorage.getItem("status")),(0,n.jsx)("nav",{id:"site-nav",className:"navbar navbar-fixed-top navbar-custom",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"navbar-header",children:[(0,n.jsx)("div",{className:"site-branding",children:(0,n.jsxs)("a",{className:"logo",href:"index.html",children:[(0,n.jsx)("img",{src:"/images/logo.png",alt:"Logo"}),"Payment Platform"]})}),(0,n.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar-items","aria-expanded":"false",children:[(0,n.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),(0,n.jsx)("span",{className:"icon-bar"}),(0,n.jsx)("span",{className:"icon-bar"}),(0,n.jsx)("span",{className:"icon-bar"})]})]}),(0,n.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-items",children:(0,n.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[(0,n.jsx)(a.default,{href:"/",passHref:!0,children:(0,n.jsx)("li",{className:"active",children:(0,n.jsx)("a",{"data-scroll":!0,href:"index.html",children:"Home"})})}),(0,n.jsx)(a.default,{href:"/login",passHref:!0,children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{"data-scroll":!0,href:"login.html",style:{display:e?"none":"block"},children:"Login"})})}),(0,n.jsx)(a.default,{href:"/dashboard",passHref:!0,children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{"data-scroll":!0,href:"dashboard.html",children:"Dashboard"})})}),(0,n.jsx)(a.default,{href:"/history",passHref:!0,children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{"data-scroll":!0,href:"dashboard.html",style:{display:e?"block":"none"},children:"History"})})})]})})]})})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(s){i=!0,a=s}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,l=(o=r(7294))&&o.__esModule?o:{default:o},i=r(1003),s=r(880),c=r(9246);var u={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),o=l.default.useMemo((function(){var t=a(i.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,h=o.as,p=e.children,v=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var b=(t=l.default.Children.only(p))&&"object"===typeof t&&t.ref,j=a(c.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],N=l.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);l.default.useEffect((function(){var e=w&&r&&i.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(n,d,h,{locale:t})}),[h,d,w,g,r,n]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:l}))}(e,n,d,h,v,m,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof g?g:n&&n.locale,_=n&&n.isLocaleDomain&&i.getDomainLocale(h,I,n&&n.locales,n&&n.domainLocales);E.href=_||i.addBasePath(i.addLocale(h,I,n&&n.defaultLocale))}return l.default.cloneElement(t,E)};t.default=d},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(s){i=!0,a=s}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],h=f[1],p=a(o.useState(t?t.current:null),2),v=p[0],m=p[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),c.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,l=n.elements;return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),s.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]);return o.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&m(t.current)}),[t]),[y,d]};var o=r(7294),l=r(4686),i="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},4369:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),a=r(7941),o=r(8976),l=r(1664);function i(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{}),(0,n.jsxs)("div",{"data-spy":"scroll","data-target":"#site-nav",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)("header",{id:"site-header",className:"site-header valign-center",children:(0,n.jsxs)("div",{className:"intro",children:[(0,n.jsx)("h2",{children:"Payment Platform"}),(0,n.jsx)("h1",{children:"With Paystack Integration"}),(0,n.jsx)(l.default,{href:"/dashboard",children:(0,n.jsx)("a",{className:"btn btn-white",href:"login.html",children:"Pay Now"})})]})})]})]})}},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);