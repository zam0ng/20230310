const Sequelize = require("sequelize");

class Post extends Sequelize.Model{

    static init(seq){

        return super.init({

            title : {
                type : Sequelize.STRING(50),
                allowNull :false,
            },
            content : {
                type : Sequelize.STRING(500),
                allowNull : false,
            },
            writer : {
                type : Sequelize.STRING(20),
                allowNull : false,
            }
        },{
            sequelize :seq,
            timestamps : true,
            underscored : false,
            modelName : "Post",
            tableName : "posts",
            charset : "utf8",
            collate : "utf8_general_ci",
        })

        
    }

    static assicoate(db){
        db.Post.belongsTo(db.User,{foreignKey:"user_id",targetKey : "id"})
    }
}

module.exports = Post;