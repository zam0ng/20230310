// mysql에 연결 해볼거임

// 외부모듈 설치 받아서 사용할것
// npm 모듈을 설치받는 방법

// 이번에 설치받아서 사용할 모듈은 mysql2 모듈을 설치받아서 사용할 예정

//mysql2 설치 명령어
//-----------------------------------------------------------------------
// npm install mysql2 또는 npm i mysql2


//-----------------------------------------------------------------------

// npm i mysql2 이거 설치한지 다른 작업자는 모른다.
// 우리는 일일히 npm i mysql2 이런식으로 설치를 받을 필요가 없이
// package.json에 있는 dependencies의 내용의 모듈을 모두 설치받는법
// npm install 이나 npm i를 입력하면 됌.

// "dependencies": {
//     "mysql2": "^3.2.4"
//   }
// ^3.2.4 이거 버전인거 알겠는데
// ^의 의미는 이 버전이 없으면 다른 버전을 찾아서 설치받는다는 뜻임.

// 실제 설치된 버전은 lock.json에 있음.
// node_modules와 package-lock.json은 git에 올리는게 아니다. 정말 오래걸림.

//mysql모듈도 있다 .근데 왜 mysql2을 쓰냐
//mysql모듈은 콜백 기반으로 promise 기반으로 사용하기가 힘듬.. 그래서
//mysql2를 사용할거고. mysql2가 promise 기반을 지원하기때문에 사용하기 편하다.
// 공식문서에서도 mysql2을 사용하라고 권장을 함.

// mysql2 모듈 가져오기
const mysql = require("mysql2");

// mysql을 연결해보자.
// createConnection 메서드로 연결시켜준다.
// 매개변수로 연결하는 mysql의 옵션을 전달해줘야한다.
// host: 연결할 호스트를 나타냄. root
// port : 연결할 포트 3306포트에 기본적으로 열림.
// user : 사용자의 이름
// password : 사용자 비밀번호
// database : 어떤 데이터 베이스를 연결 시킬건지
const temp = mysql.createConnection({
    user : "root",
    password : "admin",
    database : "test8", // 워크벤치에서 스키마 utf-8,utf-8 bin으로 만들기.

});

// query 메서드 : 쿼리문을 매개변수로 전달해서 데이터베이스의 쿼리 작업을 시킬 수 있다.
// "SELECT * FROM products" : products 테이블이 있는지 확인 값을 가져온다. 콜백함수의 두번째 매개변수로
temp.query("SELECT * FROM products",(err,res)=>{

    if(err){
        // 테이블이 없다는 이야기
        console.log("테이블이 없어");
        const sql ="CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))"
        // 쿼리문 내용
        // products 이름의 테이블을 만드는데
        // id 컬럼은 INT 숫자형
        // AUTO_INCREMENT : 자동으로 값이 증가할 수 있도록 설정 PRIMARY KEY에 주로 사용합니다.
        // PRIMARY KEY : 테이블에는 고유한 값을 가지고 있는 컬럼 하나 무조건 필요한데 고유한 값을 설정하는데 PRIMARY KEY로 설정한다.
        // name, number, series 이런 클럼에는 VARCHAR 문자열이고 괄호에는 글자 수를 정해줄 수 있다. 20자까지 허용시켜 놓았음
        
        temp.query(sql);
        console.log("테이블이 없어서 만들었어");
    }
    else{
        console.log(res);
        console.log("테이블이 있어");
    }

})

//temp에 연결한 mysql 객체를 반환
//이 객체안에는 쿼리문을 작성해서 데이터베이스 쿼리 작업을 시켜줄 수 있는 메서드가 있다.


// git 안올리고 싶은 파일은
// .gitignore 파일에 파일이름을 적어주면 된다.