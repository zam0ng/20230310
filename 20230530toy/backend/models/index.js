const Sequelize  = require("sequelize");
const dot = require("dotenv").config();
const User = require("./users");

const config = require("../config");

const sequelize = new Sequelize(
    config.dev
)

const db = {};

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);

module.exports = db;

