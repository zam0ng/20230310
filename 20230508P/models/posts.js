const { log } = require("console");
const mysql = require("./config");

const posts ={

    // 테이블 초기설정
    initTable :  async function(){

        try {
            const [result] = await mysql.query("select * from board");
            // console.log(result);
        } catch (error) {
            
            await mysql.query("CREATE TABLE board (id INT AUTO_INCREMENT PRIMARY KEY, title varchar(20), content varchar(20))");
            console.log("테이블 생성 됨")
        }
    },
    // 글 목록 보여주기
    viewPost : async function(){

        try {
            const [result] = await mysql.query("select * from board");
            // console.log(result);
            return result;
        } catch (error) {
            console.log("글 목록 보여주기에서 에러남");
        }
    },

    // 글 내용 넣기

    insertPost : async function(title,content){
        try {
            await mysql.query("INSERT INTO board (title,content) values(?,?)",[title,content]);
            console.log("글 내용 추가됨.");
        } catch (error) {
            console.log("글 내용 추가되지 않음.");
        }
    },
    // 글 내용 보기
    PostView : async function(id){

        try {
           const [result] = await mysql.query("select * from board where id =?",[id]);
           console.log("1");
           console.log(result[0]);
           console.log("2");
           console.log([result]);
           console.log("3");
           console.log(result);
           return [result];
        } catch (error) {
            
        }
    }

    //     

};

module.exports = posts;

// posts.viewPost(); // [] 안나옴

// posts.insertPost();,