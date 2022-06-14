"use strict";
(() => {
var exports = {};
exports.id = 355;
exports.ids = [355,249,920,327,812];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 6860:
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 99:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_userController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1340);
/* harmony import */ var _controllers_paymentController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9608);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_controllers_userController__WEBPACK_IMPORTED_MODULE_0__, _controllers_paymentController__WEBPACK_IMPORTED_MODULE_1__]);
([_controllers_userController__WEBPACK_IMPORTED_MODULE_0__, _controllers_paymentController__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const router = (__webpack_require__(6860).Router)();
// user
router.post("/register", _controllers_userController__WEBPACK_IMPORTED_MODULE_0__.register);
router.post("/login", _controllers_userController__WEBPACK_IMPORTED_MODULE_0__.login);
router.post("/change_password", _controllers_userController__WEBPACK_IMPORTED_MODULE_0__.changePassword);
router.get("/users", _controllers_userController__WEBPACK_IMPORTED_MODULE_0__.getUsers);
router.get("/user/:id", _controllers_userController__WEBPACK_IMPORTED_MODULE_0__.getUser);
router.delete("/user/:id", _controllers_userController__WEBPACK_IMPORTED_MODULE_0__.deleteUser);
// payments
router.post("/verify_payment", _controllers_paymentController__WEBPACK_IMPORTED_MODULE_1__.verifyPayment);
router.get("/payments", _controllers_paymentController__WEBPACK_IMPORTED_MODULE_1__.getAllPayments);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6860);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_userRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_routes_userRouter__WEBPACK_IMPORTED_MODULE_2__]);
_routes_userRouter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const corOptions = {
    origin: "http://localhost:3000"
};
// middlewares
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()(corOptions));
app.use((0,express__WEBPACK_IMPORTED_MODULE_0__.json)());
app.use((0,express__WEBPACK_IMPORTED_MODULE_0__.urlencoded)({
    extended: true
}));
// routers

app.use("/api", _routes_userRouter__WEBPACK_IMPORTED_MODULE_2__["default"]);
// testing api
app.get("/", (req, res)=>{
    res.json({
        message: "hello world"
    });
});
// port
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [421,340,608], () => (__webpack_exec__(5996)));
module.exports = __webpack_exports__;

})();