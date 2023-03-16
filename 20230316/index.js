// 오늘 콜백함수 
// 콜백 함수가 뭐지?
// 함수도 값 ! 
// 함수의 매개변수로 함수를 전달해서 
// 내가 함수에 코드작성하다가 필요한 순간에 매개변수로 받은 함수를 실행시킨다.

// 콜백 함수를 만들어보자.

function test(callBack){
    console.log("1번 작업끝");
    console.log("2번 작업끝");

    if(true){
        callBack();
    }
}

function test2(){
    console.log("나는 콜백함수야");

}

test(test2);

let arr =[1,2,3,4];
arr.map(function(i,v){
    console.log(i);
    console.log(v);
})

// 배열 메소드 map을 흉내내보자
// 우리가 만든 객체
let arr2= {
    map : function(callBack){
        // 함수의 매개변수 갯수
        // 그 함수의 매개변수가 몇개 들어가나
        // 매개변수 안받는 함수인데 매개변수 전달하면 터짐

        if(callBack.length == 1)
    {
         let a =2;
         console.log("나는 map 함수, 매개변수를 한개받았어"+ a + "결과야");
         callBack(a);
    }
    else if(callBack.length == 2) 
    {   
        let a = 2;
        let b = 3;
        console.log("나는 map 함수, 매개변수가 두개야"+a + b +"결과야"  );
        callBack(a,b);
    }
    else {
    }
}
}

arr2. map(function(a,b){
    console.log("나는 콜백함수야 전달받은 매개변수는 "+ a + b +"이거야");
});


function temp(c){
    if(c.length === 0 ){

        c();
    }
    else if(c.length === 1){
        
        let temp = "사과";
        c(temp);
        
    }
    else if(c.length === 2){

        let temp = "포도";
        let temp2 = " 딸기";
        c(temp,temp2);
    }
    else{
        
        console.log("너 매개변수 초과야 난 두개만 받을수 있어");
    }
}

function temp2(a,b,c ){
    console.log("난 콜백함수야",a + b+ c+"를 받았어");
}

temp(temp2);

// 콜백 함수 한번씩 만들고 넘어가자
// 메소드
// function 함수명 : 일반함수
// 메소드 : 객체 안에 있는 함수
// 객체 안에다가 함수를 만들고 콜백함수를 만들면된다.
// 키값은 원하는데로 이름 지정해도 괜찮고
// 매개변수 3개 까지 받을수 있는 함수를 만드는데
// 전달받은 콜백함수는 구구단을 보여주는 함수다.
// 매개변수 1개 받으면 2단 보여주고, 2개 받으면 2,3단 보여주고
// 3개 받으면 2,3,4단 보여주면 됩니다.
function clac(num){
    for (let b = 1; b < 10; b++) {
        console.log(num + "* "+ b +"= "+ num*b);
    }
}
function gugudan(c){
    if(c.length === 0 ){

        c();
    }

    else if(c.length === 1){
    
        let a= 2;
        c(a);
        clac(a);
    }
    else if(c.length === 2){

        let a =2;
        let cc= 3;
        c(a,cc);
        clac(a);
        clac(cc);

    }
    else if(c.length ===3){

        let a =2;
        let cc =3;
        let d =4;
        c(a,cc,d);
        clac(a);
        clac(cc);
        clac(d);
    }
    else{
        c();
        console.log("4단까지만 가능해");
    }
}
function gugudan0(){
    console.log("매개변수를 입력해");
}
function gugudan1(a){
    console.log(a+"단");
}
function gugudan2(a,b){
    console.log(a+"단과"+b+"단");
}
function gugudan3(a,b,c){
    console.log(a+"단과"+b+"단과"+c+"단");
}
function gugudan4(a,b,c,d){
    console.log("5단도 가능하니?");
}

gugudan(gugudan0);
gugudan(gugudan1);
gugudan(gugudan2);
gugudan(gugudan3);
gugudan(gugudan4);

let obj2 ={
    gugu : function(c){
        switch (c.length) {
            case 1:
                c(2);
                break;
        
            case 2:
                c(2);
                c(3);
                break;
        
            case 3:
                c(2);
                c(3);
                c(4);

                break;
        
            default:
                console.log("너 매개변수 확인해");
                break;
        }
    }
}
// 어떻게 만들어도 상관은 없지만 기능단위로 함수를 만드는 습관을 가지는게 좋다.

// function temp3(a,b,c){
//     for(let i = 1 ; i<10; i++){
//         console.log(`${a} x ${i} = ${a * i}`);
//     }
// }

// obj2.gugu(temp3); 

obj2.gugu(function(a,b,c){ // 193 ~ 199줄이랑 같다.
    for(let i = 1 ; i<10; i++){ 
        console.log(`${a} x ${i} = ${a * i}`);
    }
});

// 콜백 중요하니깐 오늘 정리 잘해야함

// 함수가 실행되면 스택이라는 곳에 쌓인다고 했는데,

// 스택 : 후입 선출 , 큐 : 선입 선출

// 콜 스택 개념을 알아보자!
// 스택은 데이터를 사용하기 위해서 잠시 저장 해놓는것
// 데이터들을 쌓아놓는다 보면 된다.
// 후입 선출 마지막에 추가된 데이터부터 제거.
// 우리가 이사를 가는데 상가에 짐을 넣어놓고 위에서부터 짐을 꺼내는 것과 같다.
// 함수 실행 컨텍스트 함수를 실행하게 되면 스텍에 추가가 되고 반환될때 스택에서 제거된다.
// 함수 실행 컨텍스트 : 함수가 실행될떄마다 실행된다. 함수의 실행 정보를 가지고있다.
// 콜 스택은 함수가 실행되면 실행 컨텍스트 저장하는 스택의 구조.
// 콜 스택은 컴퓨터의 메모리 크기나 운영체제에 따라 크기가 다르다.
// 콜 스택이 쌓이게되서 크기가 초과하면 스택 오버플로우 에러발생 (더이상 실행을 할수가 없어)
// 예) 함수를 무한으로 실행할 때 나올수 있다.(주의)

function fun1(){
    fun2();
}

function fun2(){
    fun3();
}

function fun3(){
    console.log("난 3번 마지막으로 실행한 함수야");
}

fun1();
// 자바스크립트 코드 전체를 실행하고 전역 실행 컨텍스트가 실행되고
// fun1() 함수 실행 구문에서 함수의 실행 컨텍스트가 생성-> fun2 함수 실행 컨텍스트 생성 ->
// fun3 함수 실행 컨텍스트 생성, 이렇게 스택에 쌓이고
// 마지막에 추가된 fun3 함수의 실행 컨텍스트 제거 ->fun2 함수의 실행 컨텍스트 제거 ->
// fun1 함수의 실행 컨텍스트 제거
// 이렇게 제거가 된다.

// 콜스택 확인해보자.
// 개발자모드 -> 디버깅 모드 활성화(ctrl + f8)
// 함수나 코드의 왼쪽 줄번호에 클릭을 하면 브레이크 포인트가 찍히는데
// 포인트를 찍으면 코드가 실행되다가 그 포인트에 도달하면 잠시 실행을 멈춘다.
// 재생 버튼을 누르면 다음 포인트가 있는곳으로 실행하다가 또 멈춘다.
// 작업의 디버깅도 용이하다.

// 화살표 함수
// ES6에서 새로 나온 함수의 방식
// ES6 템플릿 리터럴

//우리가 사용하던 일반함수와 모양과 다르게 생겼다.
// => 화살표 모양으로 함수를 선언한다.

let temp4 = () => {
    console.log("나는 화살표 함수야");
}

//함수 실행.
temp4();

//화살표 함수는 일반함수와 차이들이 있는데
// 함수에서 값을 반환할 때 return식을 사용해서 반환했는데
// return식 없이도 반환할 수 있다.
// 괄호에는 매개변수

// let temp5 =() =>{
//     return 5;
// }

let temp5 =() =>5; // 위에 같다.

let ab = temp5();
console.log(ab);

// this 키워드 : 자바스크립트 객체를 참조하는 특별한 구문
// 일반함수와, 화살표 함수의 차이는 this의 차이, this가 가르키는 대상이 다르다.
// 일반함수 this : 함수가 실행될때 위치에서 this를 가져온다.(다이나믹 스코프)
// 화살표 함수의 this : 화살표 함수 내부의 this는 화살표 함수를 선언한 위치에서 this를 가져온다.(렉시컬 스코프)

let obj = {
     a : function(){
        b();
        console.log(this);
        let c = () =>{
            console.log(this);
        }
        c();
     }
}

function b(){
    console.log(this);
}

obj.a();
let d = ()=>{
    console.log(this);
}
d();

// 전역 공간에서 this를 쓰면
// window 객체
// BOM(브라우저 오브젝트 모델) : 브라우저를 객체 모델로 표현한것.
// BOM은 브라우저 기능을 접근할 수 있는 객체
// 
console.log(this);


//비동기 함수 : 다른 코드들과 함께 동기적으로 실행되지 않는다.
// 순차적으로 실행되지 않고 작업을 하는 도중에도 다른 작업이 가능하다.
// node.js에 들어가면 개념이 잡힐거다.
//예) 서버에서 값을 가져오는동안 페이지가 멈춰 있지 않고 다른 작업들은 정상적으로 돌아간다.


//동기 함수 : 순차적으로 실행된다 . 작업이 끝나고 다음 작업



// 비동기 함수는 뭐가 있을까
// setTimeout :
// 매개변수를 2개 받고 첫번째 매개변수가 함수 , 두번째 매개변수는 시간을 숫자타입으로
// 1000 =1초, 2000 =2초


setTimeout(function(){
    console.log("나는 1초뒤에 실행되고 나는 비동기 함수에 실행됬어.");
}, 1000);

console.log("나는 동기임");

// let var const 꼭 써야한다.
// window 객체

let a = "";
function temp6(){
    let b ="";
    c ="aa";
}

temp6();

//window 키값으로 추가되는거기떄문에 

console.log(window.c);
console.log(c); //둘다 같은 값으로 출력된다.