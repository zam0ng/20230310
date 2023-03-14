// 오늘은 함수라는걸 사용해보자.

// 함수는 실행할 코드들의 이름을 지어준다. (반복 사용하는 기능들을 묶어서 관리한다.)
// function 함수이름(){ 실행시킬 코드들}

function fun(){
    console.log("fun 함수 실행됨");
}

// fun이라는 함수를 선언했다.

// 변수를 배웠는데 변수들 원시타입
// 객체 배열 함수 래퍼런스 타입
// 함수도 값이다.

//함수 실행
fun();
// 함수를 실행시키면 스택이라는 곳에 함수 실행이 쌓이고 순서대로 실행이 된다.
// 실행

// var let 이거 안붙이고 사용하면 안된다.
// 변수는 스코프라는 개념이 있는데 
// 전역 스코프와 지역 스코프 이렇게 두가지가 있는데.
// 전역 스코프는 말 그대로 전역 모든곳에서 전역이 가능한 범위
// 지역 스코프는 특정영역에서만 접근이 가능한 범위
// 전역 스코프에 너무 많은 변수를 선언하면 관리하기가 너무 힘들어진다.
// 특히나 협업할 때 A play 변수를 만들었는데 B라는 사람이 또 play라는 변수를 사용할 수도 있다.

// 이 친구가 전역 변수
let temp = "나는 문자열이야";

function con(){
    let temp = "나는 지역변수야";
    // 함수의 실행이 끝나면 해제된다.
}
let temp2 = "나 접근됨?";
function con2(){
    console.log(temp2);
}

con2(); // 함수 실행

// 호이스팅은 변수가 선언 되게도 전에 호출했을 때 발생되는 에러 
// function temp2() { // 예시 , 변수는 코드를 작성할 떄 최상단에 작성한다.
    
//     console.log(x);
//     let x=5;
// }
// temp2();

// 함수 사용 더해보자
// 함수에는 매개변수 // 매개변수
function fun2(v){
    // 전달받은 매개변수를 사용
    console.log(v);

}
// 전달받은 매개변수에 따라서 작업을 다르게 하고싶을 때

function fun3(num){
    console.log(`전달받은 매개변수는 : ${num}`);
}

let a = 1;
let b = 2;
fun3(a);
fun3(b);

function fun4(num, num2){
    console.log(`전달받은 매개변수는 : ${num}, ${num2}`);
}
fun4(a,b);


//cup 컵이라는 함수를 만들고 컵은 물이라든지 음료수를 따를수 있는 기능
//cup 컵이라는 함수를 만들고 매개변수로 drink 음료수를 따라줘보자.

function cup(drink){ 

    console.log(`컵에 ${drink}를 따랐음`);
    console.log(`${drink}를 이컵에 따라서 마시니까 좋아`);

}
let c= "홍차";
cup("오렌지주스");
cup("포도 주스");
cup(c);
// 전달되는 매개변수에 따라 다른 결과물 보여줄 수 있다.

// 거스름돈 자판기라는 기능을 만들어 보고싶은데 함수로 만들어봐야겠다.
// 자주사용할것같으 기능들을 함수로 작성해놓고 재사용.

function vending(money, unit){
    //거스름돈 자판기임..
    console.log(unit + "짜리"+ money/ unit + "개");

}
//지폐 1000원짜리 넣고 500단위 거슬러줘
vending( 1000, 500);
vending( 1000, 100);

let e = vending; //함수도 변수에 넣을수 있음
console.log(e);

e(1000,500);
e(1000,100);

// 우리가 함수를 사용할 때 함수안에서 필요한 값을 내보낼수 있게 도와주는 식이있는데 return

function ab(){
    //함수의 실행 도중에 return에 도달하면
    //return 뒤에 작성한 값을 반환하고 함수는 종료가 된다.
    return "나는 반환값이야";
    console.log("이건 안보임, 위줄에서 리턴이 함수 종료후 값을 반환하기떄문에");
}

// 함수 조금 심화

function sum(num1, num2){
    return num1 + num2 ;

}
console.log(sum(1,2));

function gg(num){

    for (let i = 0; i < 10; i++) {
        console.log(`${num}단 ${num} * ${i}= ${num*i}`);
    }
}
gg(3);

//성격 유형 검사지 함수 간단버전
function type(value){

    switch(value){
        case 1:
            return "분노조절 잘해";
        case 2:
            return "과묵하지만 상냥해";
        case 3:
            return "조용하지만 술마시면 각오해";
    }
}
let tv = type;
console.log(tv(1));

// 어제 과제 하시던거 그대로 이어서 하는데 오늘은 복습날 했던거 아직 이해안되는 부분들
// 보면서 과제 완성한사람은 함수를 사용해서 리팩토링
