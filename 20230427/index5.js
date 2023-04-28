// 우리가 window를 생략해서 작성하던 것과 같이
// window.console.log()
// console.log()
// global과 module을 생략해서 작성할 수 있다.

// console.log(module.exports === exports);
// true가 나오니 module 을 빼고 exports만 써도된다.

exports.obj = {a:1};
exports.add = () =>{
    return 2;
}
function add2(){
    console.log("난 함수임");
}

exports.qwe = add2;