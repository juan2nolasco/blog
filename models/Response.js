const Sequelize = require('sequelize');
const db = require('../database/db');

// Modelo para la tabla responses.
module.exports = db.sequelize.define(
    'response',
    {
        response_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        post_id: {
            type: Sequelize.INTEGER
        },
        response_content: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
);
