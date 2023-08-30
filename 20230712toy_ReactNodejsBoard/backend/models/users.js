const Sequelize = require("sequelize");

class User extends Sequelize.Model{

    static init(sequelize){
        return super.init({

            user_id : {
                type : Sequelize.STRING,
                allowNull : false,
            },
            user_pw : {
                type : Sequelize.STRING,
                allowNull : false,
            }
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            modleName : "User",
            tableName : "users",

            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
}
module.exports =User;