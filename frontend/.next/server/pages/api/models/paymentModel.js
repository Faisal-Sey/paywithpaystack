"use strict";
(() => {
var exports = {};
exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 3652:
/***/ ((module) => {


module.exports = (sequelize, DataTypes)=>{
    const Payment = sequelize.define("payment", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        payment_channel: {
            type: DataTypes.STRING
        },
        payment_id: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.INTEGER
        },
        number: {
            type: DataTypes.STRING
        }
    });
    return Payment;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3652));
module.exports = __webpack_exports__;

})();