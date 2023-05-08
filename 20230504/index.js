const express = require("express");

const app = express();


const mysql2 = require("mysql2");
const path = require("path");

//
app.use(express.urlencoded({extended:false}));



app.set("views",path.join(__dirname,"page"));

app.set("view engine","ejs");


//
const _mysql = mysql2.createConnection({
    user: "root",
    password : "admin",
    database : "test",
    //
    multipleStatements : true

});

app.get("/",(req,res)=>{

    res.render("main");
});

app.get("/signup",(req,res)=>{

    res.render("signup");
})
app.get("/signupCom",(req,res)=>{

    res.render("signupCom");
})


app.post("/signup",(req,res)=>{

    const {user_id,user_pwd} = req.body;

    //

    const sql = "select * from usertable";
    
    _mysql.query(sql,(err,result)=>{

        if(err){
            //
            const _sql = "CREATE TABLE usertable(id INT AUTO_INCREMENT PRIMARY KEY, user_id varchar(20), user_pwd varchar(20))";
            _mysql.query(_sql);
            console.log("1");
            const _sql2= "INSERT INTO usertable (user_id,user_pwd) VALUES(?,?)";
            _mysql.query(_sql2,[user_id,user_pwd],()=>{
                
                res.redirect("/signupCom");
            });
            
        }
        else{
            //
            const _sql = "INSERT INTO usertable (user_id,user_pwd) VALUES(?,?)";
            console.log("2");

            console.log(user_id);
            console.log(user_pwd);
            _mysql.query(_sql,[user_id,user_pwd],()=>{
                
                res.redirect("/signupCom");
            });


        }
    })
})

app.get("/login",(req,res)=>{

    res.render("login");
});

app.post("/login",(req,res)=>{

        const {user_id,user_pwd} =req.body;

        const sql = "select * from usertable WHERE user_id = ? AND user_pwd = ?";

        _mysql.query(sql,[user_id,user_pwd],(err,result)=>{

                if(err){
                    res.render("mypage");
                }

                else{
                    res.render("mypage",{data:result[0]});
                }
        });
});

app.get("/list",(req,res)=>{
    const sql= "select * from userdata"

    _mysql.query(sql,(err,result)=>{

        res.render("list",{data:result});
    })
});

app.get("/insert",(req,res)=>{

    res.render("insert");
});

app.post("/insert",(req,res)=>{

    const {user_name,user_num} = req.body;

    const sql = "select * from userdata";

    _mysql.query(sql,(err)=>{


        if(err){
            const createtb = "CREATE TABLE userdata (id INT AUTO_INCREMENT PRIMARY KEY, user_name varchar(20), user_num varchar(20))";

            _mysql.query(createtb);

            const _sql = "INSERT INTO userdata (user_name, user_num) VALUES(?,?)";

            _mysql.query(_sql,[user_name, user_num],()=>{

                res.redirect("/list");
            })
        }
        else{
            const _sql = "INSERT INTO userdata (user_name, user_num) VALUES(?,?)";

            _mysql.query(_sql,[user_name, user_num],()=>{

                res.redirect("/list");
            });
        };
    });
});

app.get("/delete/:id",(req,res)=>{

    const sql = "DELETE FROM userdata WHERE id = ?; SET @CNT = 0; UPDATE userdata SET userdata.id = @CNT:=@CNT+1; ALTER TABLE userdata AUTO_INCREMENT = 0;";
    _mysql.query(sql,[req.params.id],()=>{

        res.redirect("/list");
    })
})

app.get('/edit/:id', (req,res)=>{
    const sql = "SELECT * FROM userdata WHERE id = ?"
    const id = req.params.id;
    _mysql.query(sql,[id],(err, result)=>{
        res.render("edit",{data : result[0]})
    })
})

// 수정 요청
app.post('/edit/:id', (req,res)=>{
    const {user_name, user_num} = req.body;
    const sql = "UPDATE userdata SET user_name = ?, user_num =? WHERE id=?";
    const id = req.params.id;
    _mysql.query(sql,[user_name, user_num, id ],()=>{
        res.redirect("/list");
    })
})



app.listen(8000,()=>{

    console.log("서버 잘열림");
});