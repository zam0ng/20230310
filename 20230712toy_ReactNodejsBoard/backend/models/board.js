const Sequelize = require("sequelize");

class Board extends Sequelize.Model{

    static init(sequelize){
        return super.init({

            title : {
                type: Sequelize.STRING,
                allowNull : false,
        },
            content :{
                type : Sequelize.STRING,
                allowNull : false,
            },
            user_id : {
                type : Sequelize.STRING,
                allowNull : false,
            }
        

        },{

            sequelize,
            timestamps : true,
            underscored : false,
            modleName : "Board",
            tableName : "boards",

            charset : "utf8",
            collate : "utf8_general_ci"

        })
    }
}
module.exports = Board;