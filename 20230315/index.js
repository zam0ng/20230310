//배열

let a = [[11,22,33],[44,55,66],[77,88,99]];

console.log(a[0][2]); // 33 출력
console.log(a[1]); // 44,55,66 출력
console.log(a[2][0]); // 77 출력

console.log(a[0]); // 11,22,33 출력
console.log(a.length);

let b = [1, 2, 3, 4, 5, 6, 7];
b.push(8);
b.push(9);

console.log(b.length);

for (let i = 0; i < b.length; i++) {
console.log(b[i]);

}

const obj = {
a: "나는 객체야",
// 익명함수 : 이름이 없는 함수
push: function (num) {
console.log("나는 obj 객체 안에 push라는 키값에 있는 함수야");
console.log(num + " 를 매개변수로 받았어 ㅎㅎ");
}
}

obj.push(2);
console.log(obj.a);
obj.push(3);
console.log(obj);

let d = [1, 2, 3, 4, 5];

// return으로 변수명 안됨
let return1 = d.indexOf(3); // indexOf 에 있는 숫자의 배열 인덱스를 알려준다. 숫자 3이 d 배열인덱스 2에 있으니 2를 출력 함.
console.log(return1); // 2가 출력될듯?

let arr = ["사과","딸기","포도"];

let return2 = arr.indexOf("딸기");
console.log(return2); // 딸기가 배열 인덱스 1 에 있으니 1 출력될듯? 빙고

let return4 = arr.find(function (item) { // 리턴값에 입력값을 발견할때 까지 찾고 찾으면 item 값을 찾는다.
console.log("item" + item);

return item === "사과";
});

console.log(return4);

let return5 = arr.findIndex(function (i) { // find 함수와 같지만 findIndex 는 그 값의 인덱스 값을 찾는다.
console.log("return5: " + i);
return i === "딸기";
})

console.log("return5 index값 :" + return5);

let arr2 = ["이사과", "김딸기", "이포도"];
// 배열 메소드 fillter
let str = "가나다";
console.log(str[0]); // '가' 가 출력될듯

let return6 = arr2.filter(function (i) { // filter 함수는 배열안에 문자의 문자열 인덱스의 값을 찾아 일치하면 그 문자열 자체를 출력한다.
return i[2] === "도"; // 문자열 인덱스가 2 인데 도라는 문자가 있는 문자를 찾을거니깐 이포도가 출력될듯
})

console.log(return6);

let return7 = arr2.map(function (item) { // 배열인덱스 0 인 문자들 중 '이'인 문자열이 있으면 true , 없으면 false 로 출력
console.log(item);

return item[0] === "이";
})
// 반환 값이 나오면 배열의 길이만큼 채워서 반환
console.log("return7 " + return7); // true , false, true 를 출력할듯

for(let i=0;i<arr2.length;i++){

console.log(arr2[i]);
}

arr2.forEach(function (item) { // 배열의 길이만큼 반복해서 값을 뽑아준다. 위 for문이랑 결과값이 같다.
console.log(item);

});

console.log(arr2.join()); //배열을 문자열로 합친다. join() 괄호 안에 값을 넣으면 배열 사이에 구분자로 쓰인다.

let str3 = arr2.join("."); // str3 에는 이사과.김딸기.이포도 << 이렇게 값이 담긴다.

console.log(str3.split('.')); // split 은 join 반대 특성으로, 문자열을 배열로 바꾼다. 구분자가 있으면 구분자 기준으로 나뉜다.

let nums = Array(20).fill();
console.log(nums);

let con = nums.map(function (item, index) {
return index;
})
console.log(con);

let obj3 = {
a: function (num) {
let index = 2;
num(index);
}

}

obj3.a(function (i) {
console.log(i + " 나 실행되니?")
})

let obj4 = {
a: function (num) {
let index = 2;
num("12");
num(index);
}
}

obj4.a(function (i) {
console.log(i + "나 실행중 ")
})

//a1을 매개변수로 받는 콜백 함수 만들고 이 함수의 리턴값을
//익명함수의 매개변수로 적용하여 a1과a2의 중복아닌값을 return해주세요

let a1 = [1, 2, 3, 4, 5];
let a2 = 3;

function returnToa2(a2) {
return a2;
}

let obj5 = {
    a: function (c) {
        c(); // 이거 기능 : c라는 함수를 받아서 실행하겠다
},
    b: function(c,d){
        console.log("매개변수 d는 이거야: "+d); // "매개변수 D는 이거야: 3"
        c(d); // c(3);
}
}

obj5.a(function(){ // obj5.a();
let result;
//result=a1.filter((value) => value !==returnToa2(a2))

 result = a1.filter(function(value){ //1245
     return value !== returnToa2(a2) ;
 })
 
console.log(result);  //1,2,4,5
}
);

obj5.b(function(index){
let result;
console.log(index); //3;
result=a1.filter((value) => value !==index) 
console.log(result);//1,2,4,5
}
,returnToa2(a2));

obj5.b(c,d);
