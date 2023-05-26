const Sequelize = require("sequelize");
const { sequelize } = require(".");

class User extends Sequelize.Model{

    static init(seq){

        return super.init({
            name : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            age :{
                type : Sequelize.STRING(20),
                allowNull :false,
            },
            user_id : {
                type : Sequelize.STRING(20),
            },

            user_pw : {
                type : Sequelize.STRING(64),
                allowNull : true,
            }
        },{
            sequelize : seq,
            timestamps : true, // 추가 수정 시간 자동 생성
            underscored : false, // 카멜 케이스 할거니?
            modelName : "User", // 노드 프로젝트에서 사용할 이름
            tableName : "users", // 데이터베이스 테이블 이름
            paranoid : false,  //삭제 시간 표기 할건지

            charset : "utf8", // 인코딩 방식
            collate : "utf8_general_ci" // 인코딩 방식

        })
    }
    static assicoate(db){
        db.User.hasMany(db.Post,{foreignKey:"user_id",sourceKey:"id"});
    }
}

module.exports = User;