const mysql = require("./config");

exports.userInit = async ()=>{

    try {
        // users 테이블이 있는지 확인
        await mysql.query("select * from users");
    } catch (error) {

        await mysql.query("CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, user_id varchar(20), user_pw varchar(20), refresh varchar(255))");
        
    }
}

exports.userList = async ()=>{

    try {
        const [result] = await mysql.query("select * from users");

        return result;
    } catch (error) {

        console.log(error);
    }
}

exports.userSelect = async (user_id)=>{

    try {
        const [result] = await mysql.query("select * from users where user_id =?",[user_id]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

exports.userInsert = async (user_id,user_pw)=>{
    try {
        console.log("Aa")
        // 이미 가입한 아이디인지 확인
        const [user] = await mysql.query("select * from users where user_id = ?",[user_id,user_pw]);
        if(user.length != 0){
            // 이미 가입한 아이디임
            // 에러객체 생성 new 동적할당으로
            let err = new Error("중복된 아이디임");
            console.log(err);
            return err;
        }

        // 조건문 통과했으면 해당 아이디가 없는거니깐 회원가입 시켜주자

        await mysql.query("INSERT INTO users (user_id,user_pw) values(?,?)",[user_id,user_pw]);
    } catch (error) {
        console.log(error);   
    }
}

exports.userPwUpdate = async (user_id,user_pw)=>{

    try {
        await mysql.query("UPDATE users SET user_pw =? where user_id =?",[user_pw,user_id])
    } catch (error) {
        console.log(error);
    }
}

exports.userRefresh = async (user_id, refresh)=>{

    try {
        await mysql.query("UPDATE users SET refresh =? where user_id =?",[refresh, user_id]);
    } catch (error) {
        console.log(error);    
    }
}

exports.userDelete = async (user_id)=>{

    try {
        await mysql.query("DELETE from users where user_id = ?; SET @CNT =0; UPDATE users SET users.id = @CNT :=@CNT+1; ALTER TABLE users AUTO_INCREMENT =0; ",[user_id]);
    } catch (error) {
        console.log(error);
    }
}