"use strict";
exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 1340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "deleteUser": () => (/* binding */ deleteUser),
/* harmony export */   "changePassword": () => (/* binding */ changePassword)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7421);
/* harmony import */ var _utils_passConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_models__WEBPACK_IMPORTED_MODULE_0__]);
_models__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// create main Model
const User = _models__WEBPACK_IMPORTED_MODULE_0__.user;
// create user
const register = async (req, res)=>{
    let info = {
        username: req.body.username,
        password: (0,_utils_passConfig__WEBPACK_IMPORTED_MODULE_1__.hashPassword)(req.body.password),
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    const user = await User.create(info);
    res.status(200).send(user);
};
const login = async (req, res)=>{
    let info = {
        username: req.body.username,
        password: req.body.password
    };
    const user = await User.findOne({
        where: {
            username: info.username
        }
    });
    if ((0,_utils_passConfig__WEBPACK_IMPORTED_MODULE_1__.comparePass)(info.password, user.password)) {
        res.status(200).send(user);
    }
};
// All Users
const getUsers = async (req, res)=>{
    let users = await User.findAll({
        attributes: [
            "id",
            "username",
            "first_name",
            "last_name"
        ]
    });
    res.status(200).send(users);
};
// One User
const getUser = async (req, res)=>{
    let id = req.params.id;
    let user = await User.findOne({
        where: {
            id: id
        }
    });
    res.status(200).send(user);
};
// Delete User
const deleteUser = async (req, res)=>{
    let id = req.params.id;
    await User.destroy({
        where: {
            id: id
        }
    });
    res.status(200).send("Deleted!");
};
// Change User
const changePassword = async (req, res)=>{
    let info = {
        username: req.body.username,
        password: req.body.password
    };
    let user = await User.update({
        password: (0,_utils_passConfig__WEBPACK_IMPORTED_MODULE_1__.hashPassword)(info.password)
    }, {
        where: {
            username: info.username
        }
    });
    res.status(200).send("Password Changed Successfully");
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hashPassword": () => (/* binding */ hashPassword),
/* harmony export */   "comparePass": () => (/* binding */ comparePass)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);

const hashPassword = (password)=>{
    let salt = (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.genSaltSync)(10);
    let hash = (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hashSync)(password, salt);
    return hash;
};
const comparePass = (info_password, user_password)=>{
    return (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compareSync)(info_password, user_password);
};


/***/ })

};
;