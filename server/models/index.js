
const Sequelize = require('sequelize');
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_URL, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB_NAME}`
);

module.exports = sequelize
