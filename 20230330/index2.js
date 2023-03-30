//재귀함수
//함수가 함수 자신을 호출하는 함수


// function add(){
//     add();
// }

//임시로 데이터베이스에 추가할 때라던지 사용할 수 있다.

function add(n){
    
    // 얼마나 반복 실행 시킬건지
    if(n< 5){
        add(n+1);
        console.log(n);
    }
}
add(0);

// 함수의 실행 컨텍스트
// add -> add1 -> add3 -> add4
// add4 실행이 끝나고 add3 실행이 끝나고 add1 실행끝나고 add를 하기때문에
// 콘솔에 출력이 반대로 찍힌다.


//함수가 호출되면 실행컨택스트가 생성되고  
// 함수의 안에서 함수를 호출하면서 실행 컨택스트가 쌓이고
// 뒤에서부터 실행하고 실행컨택스트 제거


// 재귀함수 좀더 써보자
// 피보나치 수열을 재귀로 
// 피보나치 수열 수학적인 성질
// 황금비 연속된 두항의 비율

function fibonacci(n){
    if(n<2) return n;
    // 이전 두 항을 더해서 반환
    return fibonacci(n-1) + fibonacci(n-2);
}

for( let i=0 ; i<20; i++){
    console.log(fibonacci(i));
}