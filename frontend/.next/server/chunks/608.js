"use strict";
exports.id = 608;
exports.ids = [608,973];
exports.modules = {

/***/ 9608:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { payment  } = __webpack_require__(7421);
const db = __webpack_require__(7421);
const axios = (__webpack_require__(2167)["default"]);
const SECRET_KEY = (__webpack_require__(8708).SECRET_KEY);
console.log(SECRET_KEY);
const Payment = db.payment;
const verifyPayment = async (req, res)=>{
    let info = {
        email: req.body.email,
        first_name: req.body.fname,
        last_name: req.body.lname,
        amount: req.body.amount,
        reference: req.body.reference
    };
    axios({
        method: "get",
        url: `https://api.paystack.co/transaction/verify/${info.reference}`,
        headers: {
            Authorization: `Bearer ${SECRET_KEY}`
        }
    }).then(async function(response) {
        if (response.data.data.status === "success") {
            delete info.reference;
            info.id = response.data.data.id;
            info.channel = response.data.data.channel;
            info.number = response.data.data.authorization.last4;
            const payment1 = await Payment.create(info);
            console.log(payment1);
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
module.exports = {
    verifyPayment,
    getAllPayments
};


/***/ }),

/***/ 8708:
/***/ ((module) => {


module.exports = {
    "SECRET_KEY": "sk_test_2194d36ee090d7b26378366081cd76ddd5acf0f2"
};


/***/ })

};
;