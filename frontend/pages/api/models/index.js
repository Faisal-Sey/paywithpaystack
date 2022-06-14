
import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from "../config/dbConfig"

import { Sequelize, DataTypes } from "sequelize"

const sequelize = new Sequelize(
  DB,
  USER,
  PASSWORD, {
    host: HOST,
    dialect: _dialect,
    operatorsAliases: false,

    pool: {
      max: _pool.max,
      min: _pool.min,
      acquire: _pool.acquire,
      idle: _pool.idle,
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Connected!')
  })
  .catch((err) => {
    console.log("Error " + err)
  })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("./userModel.js").default(sequelize, DataTypes)
db.payment = require("./paymentModel.js").default(sequelize, DataTypes)

db.sequelize.sync({ force: false })
  .then(() => {
    console.log('yes re-sync done!')
  })


export default db;