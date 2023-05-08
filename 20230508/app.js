// MVC 패턴으로 만들어보자.
// 많이 사용하고 표준 기본적인 디자인 패턴
// 유지보수와 확장성을 고려해서 개발할 수 있다.
// 협업간의 코드의 표준화도 용이하다.

// mvc패턴은 model-view-controller

// model: 데이터를 다루는 로직
// 글선택, 글 작성 등등의 기능들 어플리케이션의 동작을 관리하는 폴더

// view : 사용자가 볼 수 있는 화면의 데이터를 표시 해주는 역할

// controller : 모델과 뷰 사이에서 동작을 제어해주는 역할
// 모델의 상태를 가지고 뷰에 반영 시켜주는것.

// 이런 패턴으로 작업을 하면 유지보수와 코드의 표준화를 유지할 수 있다.
 
// package.json 부터 만들자.
// npm init -y

// express 만들기
 
const { urlencoded } = require("body-parser");
const express = require("express");
const postRoute = require("./routes/posts");
const app = express();
const path = require("path");

//view 엔진으로 ejs 사용할 예정
//mysql2 사용할 예정
app.set("views",path.join(__dirname,"page"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));

// 정적인 파일을 사용하기위해 미들웨어 추가
// 정적인 파일을 모아놓은 경로를 지정 public 폴더로 지정
// 앞에 매개변수로 경로를 지정하지 않았을 경우에는 기본적으로 / 루트경로로 지정한다.
app.use(express.static(path.join(__dirname,"public")));

// 이렇게 지정한 경우에는 ejs단에 /css/main.css 로 접근을 하면된다.
// 정적 파일 경로도 나눌수 있다.
// app.use("/css",express.static(path.join(__dirname,"publice")));

// postRoute 객체에 get 메서드로 / 루트경로 지정했을 때
// "/posts "이 경로도 추가되어서 라우팅 된다.
// /posts 붙어야 루트경로로 요청이 된다.

// 게시글은 /posts 를 붙여야한다.

app.use("/posts", postRoute);

app.listen(8080,()=>{

    console.log("서버 잘열림");
})