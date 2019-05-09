const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('blog', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max: 5,
        min:0,
        acquire: 3000,
        idle: 10000
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;