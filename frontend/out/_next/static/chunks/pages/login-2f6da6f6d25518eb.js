(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7156:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(4754)}])},7941:function(e,t,n){"use strict";var r=n(5893),a=n(9008);t.Z=function(){return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{charset:"utf-8"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("title",{children:"Payment Platform"}),(0,r.jsx)("script",{src:"https://js.paystack.co/v1/inline.js"})]})}},8976:function(e,t,n){"use strict";var r=n(5893),a=n(1664);n(7294);t.Z=function(){var e=!1;return localStorage.getItem("status")&&(e=localStorage.getItem("status")),(0,r.jsx)("nav",{id:"site-nav",className:"navbar navbar-fixed-top navbar-custom",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"navbar-header",children:[(0,r.jsx)("div",{className:"site-branding",children:(0,r.jsxs)("a",{className:"logo",href:"index.html",children:[(0,r.jsx)("img",{src:"/images/logo.png",alt:"Logo"}),"Payment Platform"]})}),(0,r.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar-items","aria-expanded":"false",children:[(0,r.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),(0,r.jsx)("span",{className:"icon-bar"}),(0,r.jsx)("span",{className:"icon-bar"}),(0,r.jsx)("span",{className:"icon-bar"})]})]}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-items",children:(0,r.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[(0,r.jsx)(a.default,{href:"/",passHref:!0,children:(0,r.jsx)("li",{className:"active",children:(0,r.jsx)("a",{"data-scroll":!0,href:"index.html",children:"Home"})})}),(0,r.jsx)(a.default,{href:"/login",passHref:!0,children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{"data-scroll":!0,href:"login.html",style:{display:e?"none":"block"},children:"Login"})})}),(0,r.jsx)(a.default,{href:"/dashboard",passHref:!0,children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{"data-scroll":!0,href:"dashboard.html",children:"Dashboard"})})}),(0,r.jsx)(a.default,{href:"/history",passHref:!0,children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{"data-scroll":!0,href:"dashboard.html",style:{display:e?"block":"none"},children:"History"})})})]})})]})})}},4754:function(e,t,n){"use strict";n.r(t);var r=n(4051),a=n.n(r),o=n(5893),c=n(7294),s=n(8976),i=n(7941),l=n(4864),u=n(3398),f=n(1163);function d(e,t,n,r,a,o,c){try{var s=e[o](c),i=s.value}catch(l){return void n(l)}s.done?t(i):Promise.resolve(i).then(r,a)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(){var e=(0,c.useState)({}),t=e[0],n=e[1],r=(0,f.useRouter)(),m=function(){var e,n=(e=a().mark((function e(n){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,l.Z.login(t);case 3:(null===(o=e.sent)||void 0===o?void 0:o.status)===u.MU.SUCCESS?(alert("Successfull"),localStorage.setItem("status","true"),r.push("/")):alert("no");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){d(o,r,a,c,s,"next",e)}function s(e){d(o,r,a,c,s,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}(),p=function(e){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},t,h({},e.target.name,e.target.value)))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{}),(0,o.jsxs)("div",{"data-spy":"scroll","data-target":"#site-nav",className:"cover-bg",children:[(0,o.jsx)(s.Z,{}),(0,o.jsx)("section",{className:"login-form-section",children:(0,o.jsx)("div",{className:"form-wrapper",children:(0,o.jsxs)("form",{id:"login_form",children:[(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{htmlFor:"username",children:"Username"}),(0,o.jsx)("input",{type:"username",name:"username",className:"form-control",id:"username","aria-describedby":"usernameHelp",onChange:p,placeholder:"Enter username"}),(0,o.jsx)("small",{id:"usernameHelp",className:"form-text text-muted",children:"We\u2018ll never share your username with anyone else."})]}),(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{htmlFor:"password",children:"Password"}),(0,o.jsx)("input",{type:"password",name:"password",onChange:p,className:"form-control",id:"password",placeholder:"Password"})]}),(0,o.jsxs)("div",{className:"form-check",children:[(0,o.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),(0,o.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"Remember"})]}),(0,o.jsx)("button",{type:"button",className:"btn btn-primary",onClick:m,children:"Submit"})]})})})]})]})}},4864:function(e,t,n){"use strict";var r=n(741);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function i(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?a(e):t}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}var u=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,e);var t=f(n);function n(){var e;return o(this,n),c(a(e=t.apply(this,arguments)),"login",(function(t){return e.post("api/login",t,!1)})),e}return n}(r.b);t.Z=new d},741:function(e,t,n){"use strict";n.d(t,{b:function(){return s}});var r=n(9669),a=n.n(r),o=n(3398);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"ping",(function(){return a()({url:"".concat(o.mL,"/api/ping/"),method:"POST",data:""})})),c(this,"get",(function(e,n){return n?a()({url:"".concat(o.mL,"/").concat(e),method:"GET",headers:{Authorization:"Bearer ".concat(t.getAccessToken())}}):a()({url:"".concat(o.mL,"/").concat(e),method:"GET"})})),c(this,"post",(function(e,n,r){return r?a()({url:"".concat(o.mL,"/").concat(e),method:"POST",data:n,headers:{Authorization:"Bearer ".concat(t.getAccessToken())}}):a()({url:"".concat(o.mL,"/").concat(e),method:"POST",data:n})})),c(this,"put",(function(e,n,r){return r?a()({url:"".concat(o.mL,"/").concat(e),method:"PUT",data:n,headers:{Authorization:"Bearer ".concat(t.getAccessToken())}}):a()({url:"".concat(o.mL,"/").concat(e),method:"PUT",data:n})})),c(this,"delete",(function(e){return a()({url:"".concat(o.mL,"/").concat(e),method:"DELETE",headers:{Authorization:"Bearer ".concat(t.getAccessToken())}})}))}},3398:function(e,t,n){"use strict";n.d(t,{mL:function(){return r},MU:function(){return a},pk:function(){return o}});var r="http://localhost:8080",a={SUCCESS:200,CREATED:201,NO_CONTENT:204,BAD_REQUEST:400,FORBIDDEN:403,NOT_FOUND:404,NOT_ACCEPTABLE:406,UNPROCESSABLE_ENTITY:422,SERVER_ERROR:500},o="pk_test_7c3a8ea786307a6b484cdef864bce8471dcac015"},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[398,774,888,179],(function(){return t=7156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);