"use strict";
(() => {
var exports = {};
exports.id = 491;
exports.ids = [491];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hashPassword": () => (/* binding */ hashPassword),
/* harmony export */   "comparePass": () => (/* binding */ comparePass)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);

const hashPassword = (password)=>{
    let salt = (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.genSaltSync)(10);
    let hash = (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hashSync)(password, salt);
    return hash;
};
const comparePass = (info_password, user_password)=>{
    return (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compareSync)(info_password, user_password);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(386));
module.exports = __webpack_exports__;

})();