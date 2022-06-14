"use strict";
(() => {
var exports = {};
exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 3875:
/***/ ((module) => {


module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Fulerasey@123",
    DB: "user_auth",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
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