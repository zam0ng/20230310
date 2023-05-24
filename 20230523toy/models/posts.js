const Sequelize = require("sequelize");

class Post extends Sequelize.Model{

    static init(sequelize){

        return super.init({
            
            content : {
                type : Sequelize.STRING(20),
            },
            writer : {
                type : Sequelize.STRING(20),
                allowNull : false,
            }
        },{
            sequelize,
            timestamps : false,
            paranoid : false,
            underscored : false,
            modelName : "post",
            tableName : "Posts",
            charset : "utf8",
            collate : "utf8_general_ci",
        })
    }

    static associate(db){
        db.Post.belongsTo(db.User,{foreginKey : "user_id", targetKey: "id"});
    }
}

module.exports = Post;