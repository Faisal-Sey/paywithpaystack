const mysql2 = require('mysql2');


module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'Fulerasey@123',
  DB: 'user_auth',
  dialect: 'mysql',
  dialectModule: mysql2,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

