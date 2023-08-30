const Sequelize = require("sequelize");

class User extends Sequelize.Model{

    static init(sequelize){
        return super.init({

            name : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },

            user_id : {
                type : Sequelize.STRING(20),
                allowNull : false,

            },

            user_pw : {
                type : Sequelize.STRING,
                allowNull : false,
            },

            img:{
                type : Sequelize.STRING,
                allowNull  : false,
            }
            
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : "User",
            tableName : "users",

            charset : "utf8",
            collate : "utf8_general_ci",

        })
    }
}

module.exports = User;