const Sequelize = require("sequelize");

class User extends Sequelize.Model{

    static init(sequelize){
        return super.init({

            user_id : {
                type : Sequelize.STRING(20),
                allowNull: false,
            },

            user_pw : {
                type : Sequelize.STRING(1021),
                allowNull : false,

            },
            user_nick :{
                type : Sequelize.STRING(20),
                allowNull : false,
            },

            user_tel : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            agree :{
                type : Sequelize.BOOLEAN,
                defaultValue : false,
            },
            grade :{
                type : Sequelize.STRING(20),
                defaultValue : "1",
            }

        },{
            sequelize,
            timestamps : false, 
            paranoid : false,  
            underscored : false,
            modelName : "user",
            tableName : "users",
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }

    static associate(db){
        db.User.hasMany(db.Post,{foreginKey : "user_id", sourceKey : "id"});
    }
}

module.exports = User;