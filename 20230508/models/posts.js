const mysql = require("./config");

// 글의 내용 작성
// 수정 추가 삭제
// 게시판의 기능들이 작성될 공간.
const posts = {
    //테이블을 초기화 해주는 함수
    initTable : async function(){

        try {
            //배열의 스프레드 연산자 0 1 2 3 4 5 이런식으로 순서대로 담긴다.
            const [result] = await mysql.query("select * from posts");
            console.log(result);
        } catch (error) {
            // console.log(error);
            await mysql.query("CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title varchar(20), content varchar(100))");
        }
    },

    //글 리스트를 조회하는 함수
    viewPostAll : async function(){
        try {
            const [result] = await mysql.query("select * from posts");

            return result;

        } catch (error) {
            console.log("글 전체 에러남");
        }
    },

    // async await를 사용하던지 then을 사용하던지 둘중에 하나만 
    // 같이 쓰면 안된다.

    // 글을 선택했을때 글 하나를 보여줄 함수
    selectPost : async function(id){
        try {
            const [result] = await mysql.query("select * from posts WHERE id =?", [id]);
            console.log("선택한 게시글 : ", result[0]);
            return result[0];

        } catch (error) {
            console.log("글 선택 조회 에러남");
        }
    },

    // 글을 추가 해주는 메서드
    insert : async function(title,content){
        try {
            await mysql.query("INSERT INTO posts (title,content) VALUES(?,?)",[title,content]);
            console.log(" 글 추가 완료");
            
        } catch (error) {
            console.log("글 추가 에러남");
        }
    },

    // 글 수정하는 메서드
    update : async function(id,title,content){
        try {
            await mysql.query("UPDATE posts SET title =?, content =? WHERE id=?",[title,content,id]);
            console.log("게시글 수정 완료");
        } catch (error) {
            console.log(error);
        }
    },

    delete : async function(id){
        try {
            await mysql.query("delete from posts WHERE id=?; SET @CNT = 0; UPDATE posts SET posts.id = @CNT:=@CNT +1; ALTER TABLE posts AUTO_INCREMENT =0;",[id]);
            console.log("게시글 삭제 완료");
        } catch (error) {
            console.log("게시글 삭제 에러남");
        }
    }
}


// posts.selectPost(2);
posts.initTable();
// posts.insert("qewr", "qwer");
// posts.delete(1);

// posts.update(1,"수정됨","컨텐츠2");


module.exports = posts;