const mysql = require("./config");


const board ={

        inittable : async function(){

            try {
                await mysql.query("select * from board");

            } catch (error) {
                await mysql.query("CREATE TABLE board (id INT AUTO_INCREMENT PRIMARY KEY, title varchar(20), content varchar(20), likey varchar(20))");
            }
        },

        // 게시글 목록 보여주기
    
        viewboard : async function(){

            try {
                const [data] = await mysql.query("select * from board");
              
                return data;
            } catch (error) {
                console.log("모델에서 게시글 목록 오류남");
            }
        },

        // 게시글 추가
        insertboard : async function(title,content,image){
            
            console.log(image);
            try {
                await mysql.query("INSERT INTO board (title,content,likey,image) values (?,?,?,?)",[title,content,"0",image])
            } catch (error) {
                console.log("모델 게시글 추가에서 오류남",error)
            }
        },

        selectboard : async function(id){
       
            try {
                const [data] =  await mysql.query("select * from board where id = ?",[id]);
                console.log("11");
                console.log(data);
                return data[0];
                
            } catch (error) {
                console.log("모델 글상세에서 오류남");
            }
        },

        likeyboard : async function(likey,id){



            try {
                await mysql.query("UPDATE board SET likey =? WHERE id = ?",[likey,id ]);
            } catch (error) {
                console.log("모델에서 좋아요 증가 오류남",error);
            }
        },

        deleteboard :  async function(id){

            try {
                await mysql.query("delete from board where id =?; SET @CNT =0; UPDATE board SET board.id = @CNT:=@CNT +1; ALTER TABLE board AUTO_INCREMENT =0;",[id]);
            } catch (error) {
                console.log("모델 delete에서 오류남");
            }
        },

        editboard : async function(title,content,id){

            try {
                await mysql.query("UPDATE board SET title =?, content =? where id =?",[title,content,id]);
            } catch (error) {
                console.log("모델 edit에서 오류남")
            }
        },

        replyinit : async function(){

            try {
                await mysql.query("select * from reply");
            } catch (error) {
                await mysql.query("CREATE TABLE reply (id INT AUTO_INCREMENT PRIMARY KEY, content varchar(20), listnum varchar(20))");

            }
        },

        replyinsert : async function(content,id){

            try {
                await mysql.query("INSERT INTO reply (content,listnum) values (?,?)",[content,id]);
            } catch (error) {
                console.log("리플 인서트 모듈에서 오류남")
            }
        },

        replyview : async function(id){
            try {
                const data2 = await mysql.query("select * from reply where listnum =?",[id])
            
                return data2[0] ;
            } catch (error) {
                console.log("모델 리플뷰에서 오류남")
            }
        },
        fileupload : async function(){

        }
};



// board.inittable();
board.replyinit();

module.exports = board;