// 처음 프로젝트 만들었으면 이제

// npm init -y - >package.json


// 사용할 모듈 express ejs mysql2 path

const { urlencoded } = require("body-parser");
const express = require("express");

const app = express();
const mysql2 = require("mysql2");
const path = require("path");

const _mysql = mysql2.createConnection({

    user : "root",
    password : "admin",
    database : "test"
    //다중 쿼리문 사용할 수 있는 옵션
    //multipleStatements :true,
});

app.set("views",path.join(__dirname,"page"));

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{

    res.render("main");

});
// list 목록
app.get("/list",(req,res)=>{

    const sql = "select * from users";

    _mysql.query(sql,(err,result)=>{


        res.render("list",{data:result});
    })
});

// // list 등록 
// app.get("/list",(req,res)=>{
//     res.render("insert");
// });

app.get("/insert",(req,res)=>{

    res.render("insert");
})

app.post("/insert",(req,res)=>{

    const {user_id,user_pw} = req.body;

    const sql = "INSERT INTO users (user_id,user_pw) VALUES(?,?)";

    _mysql.query(sql,[user_id,user_pw],()=>{

        
            res.redirect("/list");
     
    });

});

app.get("/signup",(req,res)=>{

    res.render("signup");
});

app.get("/login",(req,res)=>{

    res.render("login");
});

app.post("/login",(req,res)=>{

    const {user_id, user_pw} = req.body;
 
    // res.send("user_id : "+ user_id + "user_pw : "+ user_pw);

    const sql ="select * from users WHERE user_id = ? AND user_pw =?";

    _mysql.query(sql,[user_id,user_pw],(err, result)=>{

        if(err){
            res.render("mypage");
        }
        else{
            console.log(result);
            console.log("1"+result[0]);
            console.log("2"+result[1]);

            res.render("mypage",{data:result[0]});

        }
    });

});

app.post("/signup",(req,res)=>{

    const {user_id, user_pw} = req.body;
    
    console.log(user_id,user_pw);
    
    const sql = "INSERT INTO users (user_id,user_pw) VALUES(?,?)";

    _mysql.query(sql,[user_id,user_pw],(err)=>{

        // err 에러가 있다면 에러의 내용이 들어오는 객체
        if(err){
            res.render("signUpErr");
        }
        else{
            res.redirect("login");
        }

    });
});

// 삭제
app.get("/delete/:user_id",(req,res)=>{
    
    const sql = "delete from users WHERE id =?";
    // const sql = "delete from users WHERE id =? SET @CNT =0l UPDATE products SET products.id = @CNT:=@CNT+1; ALTER TABLE products AUTO_INCREMENT =0";

    // SET @CNT = 0 구문으로 카운트 0으로 초기화

    // UPDATE products.id = @CNT: @CNT+1 : products 테이블의 행의 아이디를 다시 갱신 시켜줌

    // ALTER TABLE products AUTO_INCREMENT = 0 ; AUTO_INCREMENT 자동으로 1씩 증가시키는 속성을 0으로 초기화

    _mysql.query(sql,[req.params.id],()=>{
        res.redirect("/list");
    })

});

// 수정하는 페이지
app.get("/edit/:id",(req,res)=>{
    const sql = "select * from products WHERE id = ?"

    const id = req.params.user_id;
    _mysql.query(sql,[id],(err, result)=>{
        res.render("edit",{data : result[0]});
    })
})
app.post("/edit/:id",(req,res)=>{
    const {user_id,user_pw} = req.body;
    const sql = "UPDATE products SET user_pw =? WHERE user_id=?";
    const id = req.params.user_id;

    _mysql.query(sql,[user_pw,id],()=>{

        res.redirect("/list");
    })
})

app.listen(8080,()=>{
    console.log("서버 잘열림");
});



