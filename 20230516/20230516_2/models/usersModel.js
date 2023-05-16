const mysql = require("./config");

exports.usersInit = async ()=>{

    try {
        await mysql.query("select * from users")
    } catch (error) {
        await mysql.query("CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, user_id varchar(20), user_pw varchar(128))")
    }

}

exports.userSelect = async (user_id) =>{
    try {
        const [result] = await mysql.query("select * from users where user_id =?",[user_id]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

exports.userInsert = async (user_id,user_pw)=>{

    try {
        // 일단 중복되는 아이디인지 확인
        const [user] = await mysql.query("select * from users where user_id =?",[user_id]);

        if(user.length !=0){
            let err = new Error("중복 아이디임");
            console.log(err);
            return err;
        }

        // 중복되지 않았으면 회원가입 정상적으로
        await mysql.query("INSERT INTO users(user_id ,user_pw) values(?,?)",[user_id,user_pw]);
    } catch (error) {
        
        console.log(error);
    }
}

