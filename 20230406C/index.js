// 이터러블 이터레이터

//Set, Map
//Set은 배열에 중복되지않는 값을 저장할 수 있다.
//중복되지않는 유일한 값들
//배열에는 중복값이 저장될 수 있는데 set은 중복이 안되는 값을 저장할 수 있다.

//배열은 요소에 순서에 의미가 있는데 set은 없다.
//배열은 인덱스로 접근을 하는데 set은 접근이 안된다.

//set : ES6 값으로만 이루어져있고 중복값은 허용하지 않는다.

// Set 을 만들어보자

const s = new Set();
console.log(s);

//요소를 추가하는 방법
//메서드를 사용해서

s.add("one");
s.add("one");
//중복값은 허용하지 않는다.
s.add("two");
s.add("three");

console.log(s);


//생성단계에서 생성자 함수에 전달 
const arr =[1,2,3,4,5];
const ss = new Set(arr);
const temp = ss.entries();

console.log(temp.next().value);
console.log(temp.next().value);
//has : 값이 가지고 있는지 확인하는 메서드
// console.log(ss.has(2));
// console.log(ss.has(6));

//delete : 하나의 요소를 제거하는 메서드
// ss.delete(2);
// console.log(ss);

// clear : 모든 값을 제거하는 메서드
// ss.clear();
// console.log(ss);

//forEach 이터러블 반복자
// ss.forEach(function(i){
//     console.log(i);
// })
console.log(ss);
// SetIterator 객체로 반환
// 이터러블에 이터레이터를 반환시켜준다.
console.log("ghfh",temp);
console.log(temp.next().value);
console.log(temp.next().value);
console.log(temp.next().value);

// Map 키와 벨류를 저장하는데
// 키값을 객체로도 할 수있다.

//Map : Es6부터 추가됨. 키와 벨류를 한쌍으로 저장하고 중복된 키값을 허용하지 않는다.
//iterator를 통해 Map 객체 내부를 순회할 수 있다.

//Map

const map = new Map();

//값을 추가
//Map은 값을 추가할 때 키와 같이 한쌍으로 추가해줘야한다.

// set 메소드를 통해 값을 저장
// 중복되는 키를 허용하지 않는다. 키값이 겹치면 마지막으로 저장한 값이 뜬다.
map.set("one",1);
map.set("one",2);
map.set("two",2);
map.set("three",3);
console.log(map);

//키를 왜 저장할까 ? 키로 저장된 값을 호출하기 위해
// map은 get이라는 메소드로 값을 호출할 수 있다.

console.log(map.get("one"));  // 2가 출력된다.
console.log(map.get("two")); // 2가 출력된다.

//값을 삭제하는법
// delete("매개변수에 삭제할 키값");
map.delete("one");
console.log(map);

// map의 사이즈 확인 , map의 저장된 요소가 몇개인지
// map 저장된 요소의 갯수를 확인할 수 있다.
console.log(map.size); 

//map 에 저장된 키값들을 전부 반환해주는 메서드
const keys = map.keys();
console.log(keys);

//map에 저장된 벨류들을 반환해주는 메서드
const values = map.values();
console.log(values);

//entries() :[키,값]형태의 정보들을 모아서 MapIterator 객체로 변환 반환.

const iter = map.entries();
console.log(iter);

console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);

// 키 정보만 출력 시키게 for of 문으로 작성해보자
for(const iterator of keys){
    //이터레이터 요소가 끝날때까지 반복하면서 요소를 보여준다.
    console.log(iterator);
}

// 값만 보여주자

for(const iterator of values){
    console.log(iterator);
}

// for of문으로 키랑 값을 모두 출력
for(const [key,value] of iter){
    console.log(`키는 ${key}, 값은 ${value}이다`);
}

//forEach 문으로 키, 값 모두 출력
map.forEach(function(value,key){
    console.log(`키는 ${key}, 값은 ${value}`);
})

let str = "imgs/userImg/user5_2.png"
let ta = str.substring(13);
console.log(ta);