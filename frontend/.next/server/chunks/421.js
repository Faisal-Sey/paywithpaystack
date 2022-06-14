"use strict";
exports.id = 421;
exports.ids = [421,69,808,445];
exports.modules = {

/***/ 3875:
/***/ ((module) => {


module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Fulerasey@123",
    DB: "user_auth",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};


/***/ }),

/***/ 7421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const dbConfig = __webpack_require__(3875);
const { Sequelize , DataTypes  } = __webpack_require__(496);
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
sequelize.authenticate().then(()=>{
    console.log("Connected!");
}).catch((err)=>{
    console.log("Error " + err);
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = __webpack_require__(745)(sequelize, DataTypes);
db.payment = __webpack_require__(3652)(sequelize, DataTypes);
db.sequelize.sync({
    force: false
}).then(()=>{
    console.log("yes re-sync done!");
});
module.exports = db;


/***/ }),

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


/***/ }),

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