"use strict";
exports.id = 421;
exports.ids = [421,69,808,445];
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


/***/ }),

/***/ 7421:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3875);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8210);
/* harmony import */ var _paymentModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3652);
/* harmony import */ var _userModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_1__]);
sequelize__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_1__.Sequelize(_config_dbConfig__WEBPACK_IMPORTED_MODULE_0__.DB, _config_dbConfig__WEBPACK_IMPORTED_MODULE_0__.USER, _config_dbConfig__WEBPACK_IMPORTED_MODULE_0__.PASSWORD, {
    host: _config_dbConfig__WEBPACK_IMPORTED_MODULE_0__.HOST,
    dialect: _config_dbConfig__WEBPACK_IMPORTED_MODULE_0__.dialect,
    operatorsAliases: false,
    pool: {
        max: _config_dbConfig__WEBPACK_IMPORTED_MODULE_0__.pool.max,
        min: _config_dbConfig__WEBPACK_IMPORTED_MODULE_0__.pool.min,
        acquire: _config_dbConfig__WEBPACK_IMPORTED_MODULE_0__.pool.acquire,
        idle: _config_dbConfig__WEBPACK_IMPORTED_MODULE_0__.pool.idle
    }
});
sequelize.authenticate().then(()=>{
    console.log("Connected!");
}).catch((err)=>{
    console.log("Error " + err);
});
const db = {};
db.Sequelize = sequelize__WEBPACK_IMPORTED_MODULE_1__.Sequelize;
db.sequelize = sequelize;
db.user = (0,_userModel_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sequelize, sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes);
db.payment = (0,_paymentModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(sequelize, sequelize__WEBPACK_IMPORTED_MODULE_1__.DataTypes);
db.sequelize.sync({
    force: false
}).then(()=>{
    console.log("yes re-sync done!");
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((sequelize, DataTypes)=>{
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
});


/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((sequelize, DataTypes)=>{
    const User = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        }
    });
    return User;
});


/***/ })

};
;