const Sequelize = require("sequelize");

const User = require("./users");
const Post = require("./posts");
const {adminsignup}= require("../controller/admin");

const config = require("../config");

const sequelize = new Sequelize(
    config.dev

)

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Post = Post;

User.init(sequelize);
Post.init(sequelize);

User.associate(db);
Post.associate(db);

// adminsignup(User);
module.exports = db;