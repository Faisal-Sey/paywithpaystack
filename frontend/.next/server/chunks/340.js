"use strict";
exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 1340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const db = __webpack_require__(7421);
const passConfig = __webpack_require__(386);
// create main Model
const User = db.user;
// create user
const register = async (req, res)=>{
    let info = {
        username: req.body.username,
        password: passConfig.hashPassword(req.body.password),
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    const user = await User.create(info);
    res.status(200).send(user);
    console.log(user);
};
const login = async (req, res)=>{
    let info = {
        username: req.body.username,
        password: req.body.password
    };
    console.log(info.username);
    console.log(info.password);
    const user = await User.findOne({
        where: {
            username: info.username
        }
    });
    console.log(user);
    if (passConfig.comparePass(info.password, user.password)) {
        res.status(200).send(user);
    }
    console.log(user);
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
        password: passConfig.hashPassword(info.password)
    }, {
        where: {
            username: info.username
        }
    });
    res.status(200).send("Password Changed Successfully");
};
// exports
module.exports = {
    register,
    login,
    getUser,
    getUsers,
    deleteUser,
    changePassword
};


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