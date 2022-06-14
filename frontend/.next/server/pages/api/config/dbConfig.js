"use strict";
(() => {
var exports = {};
exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 3875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOST": () => (/* binding */ HOST),
/* harmony export */   "USER": () => (/* binding */ USER),
/* harmony export */   "PASSWORD": () => (/* binding */ PASSWORD),
/* harmony export */   "DB": () => (/* binding */ DB),
/* harmony export */   "dialect": () => (/* binding */ dialect),
/* harmony export */   "pool": () => (/* binding */ pool)
/* harmony export */ });
const HOST = "localhost";
const USER = "root";
const PASSWORD = "Fulerasey@123";
const DB = "user_auth";
const dialect = "mysql";
const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3875));
module.exports = __webpack_exports__;

})();