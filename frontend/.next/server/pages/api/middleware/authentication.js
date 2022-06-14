(() => {
var exports = {};
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1914:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const jwt = __webpack_require__(9344);
const checkToken = (req, res, next)=>{
    let token = req.get("authorization");
    if (token) {}
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1914));
module.exports = __webpack_exports__;

})();