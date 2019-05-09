const Sequelize = require('sequelize');
const db = require('../database/db');

// Modelo para la tabla posts.
module.exports = db.sequelize.define(
    'post',
    {
        post_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        responses_count: {
            type: Sequelize.INTEGER
        },
        post_content: {
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