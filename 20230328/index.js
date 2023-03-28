// 스프레드 연산자

let obj = {name : 'soon', content :"내용"};

let obj2 = obj;
obj2.name = "kim";
//객체는 주소를 참조하는 래퍼런스타입
console.log(obj); // kim , 내용이 출력된다.
console.log(obj2); // kim , 내용이 출력된다.
console.log(obj == obj2);  //true 출력

//...스프레드 연산자 구문
let obj3 = {...obj};
obj3.name = "kim2";
console.log(obj); //kim , 내용이 출력된다.
console.log(obj3); // kim2, 내용이 출력된다.
console.log(obj == obj3);  //false 출력

// 스프레드 연산자 구문은 원본을 유지하고 새로운 객체를 생성한다.
// 데이터베이스에서 값을 가져와서 검색기능을 만든다 가정하면
// 모든 리스트를 가지고있는 배열을 유지하되
// 검색으로 걸러낸 배열만 사용하고 싶을 때

//리액트에서 많이 사용할 것.
//옵션 체이닝
//ES11에서 도입되었고 
//객체의 값을 호출할 때 안전성을 유지하면서 호출 가능하다.
// 객체의 키 앞에 ? 구문을 추가해서 작성

let obj4 = {name : "soon", content : "내용"};

//obj4?.name
//name의 키값이 있는지 확인, 없으면 undefined 던진다.
//오류가 나지 않게 방지해준다.

//오류가 나지 않는 이유는 객체의 키값을 확인하고
//type에러가 나지않게 방지해주기 때문이다.

console.log(obj4?.name); // soon 출력된다.
console.log(obj4?.age);  // undefined 출력된다.

let obj5 = {

    name : "soon",
    content : {
        age : 1
    }
}

console.log(obj5.content.key);