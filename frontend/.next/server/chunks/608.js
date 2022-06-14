"use strict";
exports.id = 608;
exports.ids = [608,973];
exports.modules = {

/***/ 9608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": () => (/* binding */ Payment),
/* harmony export */   "verifyPayment": () => (/* binding */ verifyPayment),
/* harmony export */   "getAllPayments": () => (/* binding */ getAllPayments)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7421);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_sk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models__WEBPACK_IMPORTED_MODULE_0__]);
_models__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Payment = _models__WEBPACK_IMPORTED_MODULE_0__["default"].payment;
const verifyPayment = async (req, res)=>{
    let info = {
        email: req.body.email,
        first_name: req.body.fname,
        last_name: req.body.lname,
        amount: req.body.amount,
        reference: req.body.reference
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: `https://api.paystack.co/transaction/verify/${info.reference}`,
        headers: {
            Authorization: `Bearer ${_utils_sk__WEBPACK_IMPORTED_MODULE_2__.SECRET_KEY}`
        }
    }).then(async function(response) {
        if (response.data.data.status === "success") {
            delete info.reference;
            info.id = response.data.data.id;
            info.channel = response.data.data.channel;
            info.number = response.data.data.authorization.last4;
            const payment = await Payment.create(info);
            console.log(payment);
            res.status(200).send("Payment Successful");
        }
    }).catch(function(error) {
        console.log(error);
        res.status(500).send(error);
    });
};
const getAllPayments = async (req, res)=>{
    let payments = await Payment.findAll({
        attributes: [
            "first_name",
            "last_name",
            "email",
            "payment_channel",
            "amount",
            "number", 
        ]
    });
    res.status(200).send(payments);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SECRET_KEY": () => (/* binding */ SECRET_KEY)
/* harmony export */ });
const SECRET_KEY = "sk_test_2194d36ee090d7b26378366081cd76ddd5acf0f2";


/***/ })

};
;