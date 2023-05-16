const mysql = require("./config");

const user ={

    inittable : async function(){
       
        try {
            const [result] = await mysql.query("select * from user");
            return result[0];
        } catch (error) {
            await mysql.query("CREATE TABLE user (user_id varchar(20) PRIMARY KEY, user_pwd varchar(255), user_name varchar(20), user_num varchar(20), refresh varchar(255))");
        }
    },

    signup : async function(user_id,hash,user_name,user_num){
        console.log(user_id)
        console.log(hash);
        console.log(user_name);
        console.log(user_num);        
        
        try {
            await mysql.query("INSERT INTO user (user_id,user_pwd,user_name,user_num) VALUES(?,?,?,?)",[user_id,hash,user_name,user_num]);
            console.log("회원가입 완료");
        } catch (error) {

            
            console.log("모델 signup에서 오류"+error);
        }
    },
    login : async function(user_id,user_pwd){
        
        try {
            const data = await mysql.query("select * from user where user_id =? AND user_pwd = ?",[user_id,user_pwd]);
           
            return data[0];
        } catch (error) {
            console.log("모델 login 에서 오류남");
        }
    },

    refresh : async (user_id,refresh)=>{
        
        try {
            await mysql.query("UPDATE user SET refresh =? where user_id =?",[refresh,user_id]);
        } catch (error) {
            console.log(error)  
            console.log("리프레쉬 모델에서 오류남");
        }
    },
    userSelect : async (user_id)=>{

        try {
            const [result] = await mysql.query("select * from user where user_id =?",[user_id]);
            return result[0];
        } catch (error) {
            console.log("모델 userselect 에서 오류남 "+error);
        }
    }
}

// user.inittable();

//
module.exports = user;