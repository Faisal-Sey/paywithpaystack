"use strict";
(() => {
var exports = {};
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 745:
/***/ ((module) => {


module.exports = (sequelize, DataTypes)=>{
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
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(745));
module.exports = __webpack_exports__;

})();