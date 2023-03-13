

for (let i = 0; i < 10; i++) {
    if(i%3==0){
        console.log("주말 잘쉬었니? 공부는 하셨나요");    
    }
    
}


//컴파일 언어와 인터프리터 언어
// 개념

// 컴파일러 언어 : 프로그램 코드를 컴파일해서 컴퓨터가 알아들을수 있는 기계어로 번역해준다.
// 소스 코드 전체를 한번에 번역하고 실행파일을 만들어서 실행해준다.
// 장점: 파일의 크기가 큰데 실행속도가 빠르다.
// 실행하기전에 전체코드를 번역해서 오류를 미리 알 수 있다.
// 대신 번역 과정 시간이 좀 걸린다.
// C,C++,JAVA,Python 등등

// 인터프리터 언어 : 프로그램 코드를 한줄 씩 읽으면서 번역과 실행을 한다.
// 장점: 프로그램 실행 도중에 동적으로 소스코드를 수정이 가능하다.
// 실행하는 크기가 작고 소스 코드의 수정이 용이하다. 그래서 디버깅 하기가 편하다.
// 소스 코드가 실행될때마다 번역과 실행을 반복해서 속도는 좀 느리다.
// 오류를 실행중에 발견할 수 있다.
// javascript 등등

// 논리 연산자 ||, &&
/*
    || 논리합 (OR)

    a||b -> a나 b 둘중에 하나라도 참이면 참
    0  0 -> false
    0  1 -> true
    1  0 -> true
    1  1 -> true


    && 논리곱 (AND)
    a&&b -> a, b 둘다 참이여야 참

    0 0 -> false
    0 1 -> false
    1 0 -> false
    1 1 -> true
*/
let a = true;
let b = false;

console.log(a || b);
console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

let c= true;
let d = false;
console.log(c&&d);
console.log(false &&  false);
console.log(true && false);
console.log(false &&  true);
console.log(true && true);

let text = "집에 가고싶다";
let age = 21;
if(text==="집에 가고싶다" && age===20){
    console.log("집에도 가고 나이도 20이야");
}

// 삼항연산자
// 한줄로 코드들을 표현할 수 있다. 잘쓰면 편한데 가독성이 떨어진다.

// 조건 ? 참 : 거짓;

console.log(1<2 ? "이건참이야" : "이건 거짓이야");
console.log(1 < 2 ? 3 > 4 ? "두번째는 참이야" : "두번째는 참이 아니야":"첫번째가 참이 아니야");

console.log(age===20 ? "나이는 20이야" : "나이는 20이 아니야");

// 조건문 if, 반복문 for 문이 있었는데
// switch 조건문

let month = 10;
let monthName = ""
switch (month) {
    case 1 : //if 부분이구나
        break;
    case 2 : // else if
        break;
    case 3 : 
        break;
    case 4 :  
        break;
    case 5 : 
        break;
    case 6 : 
        break;
    case 7 : 
        break;
    case 8 : 
        break;
    case 9 : 
        break;
    case 10 :
        break;
    case 11 :
        //값이 11이니깐 여기를 실행한다.
        monthName = "11월";
        break;
    case 12 : // else
        break;
    default:
        break;
}

console.log(monthName);

switch (1) {
    case 1:
        console.log("첫번째 case문");
        //break;
    case 2:
        console.log("두번째 case문");
       // break;
    case 3:
        console.log("세번째 case문");
       // break;

    default:
        console.log("여기까지 끝");
        break;
}

// while 반복문 무한히 돌아간다.
// while ("값이 true 무한으로 돌아간다. false 값을 변경해주어야 반복문의 멈춘다.")
// break 문으로 반복을 종료시켜줄 수 있다.
// while(true){
//     if(){

//         break; // 조건이 맞을 때 반복을 끝낸다.
//     }
    
// }
let num =1;
while(num !== 5){    
    console.log(num);
    num++;
}

let num2 =1;
while(true){    
    console.log(num2);
    num2++;
    if(num2 ===5 ){
        break;
    }
}

//사용자가 브라우저에 값을 간단히 입력 받을 수 있는 상태창 띄워준다.
// prompt 간단한 입력값을 받아올 수 있다.
let value = prompt("값을 입력해보시오");
console.log("value : ", value );

let inputNum = prompt("첫번째 숫자 입력");
let inputNum2 = prompt("두번째 숫자 입력");
// 우리가 입력받은건 문자열이기때문에 문자열을 출력해준다. 그러므로
// 숫자로 형태를 변화시켜주는 작업이 필요하다.
// parseInt("숫자로 정수로 변경할 변수나 값");
// Number("숫자로 변경할 변수나 값");
// 다른 형태의 type을 number type으로 형변환 시켜준다.

let result = parseInt(inputNum) + Number(inputNum2);

console.log("결과는 :",result);

let value2 = prompt("너는 1~5 사이 숫자를 입력해야해");
let play = true;
while (play){

switch (value2) {
    case "1":
        console.log("1을 입력했네");
        play =false;
        break;
    case "2":
        console.log("2을 입력했네");
        play =false;
        break;
    case "3":
        console.log("3을 입력했네");
        play =false;
        break;
    case "4":
        console.log("4을 입력했네");
        play =false;
        break;
    case "5":
        console.log("5을 입력했네");
        play =false;
        break;

    default:
        console.log("1~5 사이 숫자를 입력해");
        value2 = prompt("다시 1~5 사이 숫자를 입력해");
        break;
}
}

// 컴퓨터랑 가위바위보

// Js에서 랜덤값을 구할 수 있는 친구
Math.random(); // 0~1까지의 랜덤수
// parseInt() 를 사용해서 정수로 변환을 하고 값이 너무 작으니깐 곱해줘야한다.
// 0 ~ 100 
for(i=0; i<3; i++){
    // 랜덤수가 3개 
    console.log(parseInt(Math.random()* 3));
}








