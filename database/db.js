const Sequelize = require('sequelize');
const db = {};
/**
 * Conexion a la base de datos, cambiar el nombre de la base de datos,
 * el usuario y la contrasena. El sql de la base de datos se encuentra 
 * en el archivo blog.sql
 */
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