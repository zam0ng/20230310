const Sequelize = require("sequelize");
const config = require("../config");
const User = require("./users");
const Post = require("./posts");
const sequelize = new Sequelize(

    config.dev
)

const db = {};

db.sequelize = sequelize;
db.User = User;
db.Post = Post;

// 테이블 초기화
User.init(sequelize);
Post.init(sequelize);

User.assicoate(db);
Post.assicoate(db);

module.exports = db;