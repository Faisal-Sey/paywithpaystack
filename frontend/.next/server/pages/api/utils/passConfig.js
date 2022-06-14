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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const bcrypt = __webpack_require__(8432);
const hashPassword = (password)=>{
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
};
const comparePass = (info_password, user_password)=>{
    return bcrypt.compareSync(info_password, user_password);
};
module.exports = {
    hashPassword,
    comparePass
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