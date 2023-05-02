// express 와 템플릿 엔진을 같이 사용해서
// 게시판 만들어보자.
// ejs 템플릿 엔진

// 템플릿 엔진은 서버측에서 html을 만들어서 브라우저에 보여주는것.
// 서버사이드 렌더링
// 나중에는 분리할 예정

// html과 동일하고 js를 같이 추가해서 동적인 웹페이지를 만들 수 있는 템플릿 엔진
// express에서 ejs를 기본적으로 지원한다.
// 서버측에서 html 템플릿을 그려주고
// 이러한 기법을 서버 사이드 렌더링이라고 한다.
// 검색 기능 및 페이지 로딩이 빠르다.

// body-parser는 express 미들웨어
// 요청으로 받은 body의 내용을 req요청 객체 안에 있는 body 객체로 담아준다.
// req.body로 호출이 가능해진다.
// 미들웨어라는건 쉽게 요청과 응답을 하는 사이 중간에 동작하는 함수.
// 사용할 모듈 express, ejs, mysql2, body-parser, path

// ejs 설치 명령어
// npm i ejs

// mysql2 설치 명령어
// npm i mysql2


// 이 두가지를 둘다 설치 한번에 명령 하는법
// npm i ejs mysql2

const express = require("express");
const mysql2 = require("mysql2");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// express에 set 메서드와 use 메서드 가 있다.
// set 메서드 : express의 view 등등 설정을 할 수가 있다.
// 그려줄 파일이 있는 폴드의 경로 같은 설정을 할 수가 있다.

// use 메서드 : 요청 또는 응답시 실행되는 미들웨어를 추가할 수가 있다.

// express의 view 속성을 경로로 지정
// express view로 사용할 파일들의 경로
// express도 서버사이드 렌더링을 지원해주기 때문에 view 엔진을 사용한다.
// view엔진은 html 등의 템플릿 파일을 보여주는 역할을 하는데
app.set("views",path.join(__dirname,"views2"));

// view엔진을 ejs로 사용하겠다 설정.
// ejs설치가 되어있어야한다.
app.set("view engine", "ejs");

// app.use(
//     bodyParser.urlencoded({
//         //urlencoded from 데이터를 파싱을 도와주는 미들웨어
//         extended : false,
//     })
//     // extended의 옵션
//     // true : 쿼리 스트링 모듈의 기능이 좀더 확장된 qs 모듈을 사용한다.(깊은 객체를 지원)
//     // false : express 기본 내장된 쿼리 스트링을 모듈을 사용한다.(깊은 객체를 지원x)
//     // 권장은 false
// )

// express 버전이 올라가면서 bodyParser를 지원해줘서 아래처럼 사용할 수 있음.
app.use(express.urlencoded({extended : false}));

const _mysql = mysql2.createConnection({

        user :"root",
        password : "admin",
        database : "test8"

});

_mysql.query("select * from products",(err,res)=>{

    if(err){
        
        const sql = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name varchar(20), number varchar(20), series varchar(20))"
        _mysql.query(sql);
    }
    else{
        console.log(res);
    }
})

app.get("/",(req,res)=>{
    // 루트 경로로 요청시 처리
    // 메인페이지
    _mysql.query("select * from products",(err,result)=>{

        console.log("내가 찍은");
        console.log(result);
        // render 메서드 view엔진이 문자열을 html로 브라우저에 반환해서 렌더링 해준다.
        // 첫번째 매개변수가 view로 설정한 폴더 경로에 파일의 이름을 문자열로 전달.
        // 두번째 매개변수 템플릿엔진에서 사용할 데이터
        res.render("main2",{data : result});
    });
});

// 추가하는 페이지로 가자
// 리스트를 추가하는 페이지

app.get("/insert",(req,res)=>{
   
    res.render("insert");
});

app.post("/insert",(req,res)=>{

    // req 요청의 내용이 들어있다
    const data =req.body;
    // body 객체 안에 form에서 요청으로 보낸 데이터가 객체로 들어있다.
    // 객체 안에 있는 키값들은 input들의 name으로 정해준 키로 값이 들어있다.

    const sql = "INSERT INTO products (name,number,series)VALUES(?,?,?)";
    console.log(data);
    // query 메서드 두번째 매개변수로 배열의 형태로 value를 전달해 줄수 있다.
    _mysql.query(sql,[data.name, data.number, data.series],()=>{
        
        //redirect 메서드 : 매개변수로 전달한 URL로 페이지를 전환 시킨다.
        //경로로 이동 시킨다.
        res.redirect("/");
    });
    
});

// 삭제를 해보자
app.get("/delete/:id",(req,res)=>{
    // :id url 요청에서 파라미터 값이라고 한다.
    // 1이라는 값을 가져올수가 있다.

    // 예) http://localhost:3000/delete/1
    // {id:1}이렇게 요청의 객체에 들어있다.
    // req.params.id === 1

    const sql = "delete from products where id=?";
    _mysql.query(sql,[req.params.id],()=>{
        res.redirect("/");
    })
});

app.listen(5000,()=>{
   
    console.log("서버 잘 열렸음");
});