// fs  모듈 : 파일 시스템 파일 생성, 삭제 읽기 쓰기 등 작업을 할 수 있다.
const fs = require("fs");

// 폴더가 있는 확인을 하는 메서드
// existsSyne : 메서드 폴더가 있는지 확인을 해주는 메서드.
// true와 false 폴더가 있는지 없는지.
// 동기적으로 작동한다. Sync 구문이 있는 메서드는 동기적으로 동작한다.
// 매개변수 폴더의 경로를 작성해준다.

let folder = fs.existsSync("./Test")
console.log(folder);

// 폴더를 생성해줘보자.
// mkdir 메서드 : 폴더 생성
// 첫번째 매개변수는 생성할 폴더의 경로
// 두번째 매개변수로 폴더 생성시 호출할 콜백 함수
// 콜백함수 첫번째 매개변수로 에러의 내용의 객체를 전달 받는다.

// 폴더가 없으면 만들어
if(!folder){

    //비동기적으로 실행된다.
fs.mkdir("./Test",(err)=>{
    if(err){
        console.log("에러남");
    }
    else{
        console.log("Test 폴더 잘 만들어짐");
    }
})

    //Sync가 있으면 동기적으로 실행되는 함수
    // fs.mkdirSync("./Test");
    // console.log("폴더 만들었음");

}

// 폴더는 만들었고 폴더 안에 파일을 추가해보자.
// writeFile : 파일쓰기 파일에 데이터를 작성할 수 있다.
// 첫번째 매개변수 파일의 이름 경로
// 두번째 매개변수 파일에 작성할 내용
// 세번째 매개변수로 콜백 함수
// 콜백함수의 매개변수는 에러 내용의 객체를 전달받는다.

// 비동기적으로 돌아간다.
// fs.writeFile("./Test/temp.txt","Hello nodejs",(err)=>{
    
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("파일이 잘 만들어짐");
//     }
// })

// Sync가 붙었으니 동기적으로 실행된다.
fs.writeFileSync("./Test/temp.txt","hello nodejs");
console.log("파일이 잘 만들어짐");

// 폴더도 만들고 파일도 만들고 파일의 내용도 작성해봤으니까.

// 파일을 읽어와보자.
// readFile: 파일을 읽어온다
// 첫번째 매개변수로 파일의 경로
// 두번째 매개변수로 인코딩의 내용
// 인코딩 내용을 작성을 안하면 null
// null 이면 buffer객체로 읽어온다.
// 세번째 매개변수 콜백함수 / 콜백함수의 첫번째 매개변수는 에러의 내용 객체
// 콜백함수의 두번째 매개변수는 읽어온 파일의 내용
// fs.readFile("./Test/temp.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// 동기적으로 파일을 읽어온다.
// 메서드의 반환값으로 파일을 읽어온 data가 나옴.
let data = fs.readFileSync("./Test/temp.txt","utf-8");
console.log(data);

// 폴더를 제거 해보자.
// rm 메서드 : 폴더 삭제
// 첫번째 매개변수 삭제할 폴더의 경로
// 두번째 매개변수로 옵션 객체를 전달하는데 {recursive : true}
// recursive키의 값에 따라 true와 false를 폴더안에 내용이 있는지,
// 폴더안의 내용까지 제거할 것 인지.
// 세번째 매개변수로 콜백 함수
// 콜백함수는 매개변수로 에러내용의 객체를 전달 받는다.

fs.rm("./Test",{recursive : true},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("폴더 잘 삭제함");
    }
})