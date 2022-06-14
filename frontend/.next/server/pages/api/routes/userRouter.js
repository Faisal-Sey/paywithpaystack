"use strict";
(() => {
var exports = {};
exports.id = 812;
exports.ids = [812,249,920,327];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 6860:
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 99:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const userController = __webpack_require__(1340);
const paymentController = __webpack_require__(9608);
const router = (__webpack_require__(6860).Router)();
// user
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/change_password", userController.changePassword);
router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUser);
router.delete("/user/:id", userController.deleteUser);
// payments
router.post("/verify_payment", paymentController.verifyPayment);
router.get("/payments", paymentController.getAllPayments);
module.exports = router;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [421,340,608], () => (__webpack_exec__(99)));
module.exports = __webpack_exports__;

})();