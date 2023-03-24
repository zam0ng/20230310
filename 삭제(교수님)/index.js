// 쿠키 세션 로컬스토리지

// 쿠키

function createCookie(name, value){
    // 현재 날짜와 시간 정보를 가지고있는 객체만들고
    let date = new Date();
    // 10초 이후의 시간의 값을 객체에 넣고
    // 
    date.setTime(date.getTime() + 10000);
    document.cookie = name+"="+value+';expires=' + date.toUTCString() + ";path=/";
}

//createCookie("팝업",true);

// 세션
// 사용자가 브라우저를 이용하는데 하나의 상태를 관리할때
// 로그인 서버쪽에서 세션 ID를 생성하고 프론트에서 세션의 ID를 서버에서 받아서
// 사용 nodejs
// 로그인 유지를 시키기위해서 세션ID를 사용해서 로그인이 유효한지 상태를 유지시키는개념
// 로그인 상태가 맞는지 확인

// 브라우저가 종료될때까지 유지 된다.

// 프론트에서 만들어보자.

// setItem 메소드 : 첫 매개변수 키, 두번째 매개변수 값
sessionStorage.setItem('Token',"데이터 내용");// 값을 저장

// 세션의 저장된 데이터를 호출
// getItem : 세션에 저장된 데이터를 호출 매개변수로는 키값을 전달.
console.log(sessionStorage.getItem('Token'));

// 문서에 내용을 쓰기 추가할수있다.
document.write(sessionStorage.getItem('Token'));

// 세션의 길이 구하는법
// length 길이
document.write(sessionStorage.length);

// 세션의 키값을 인덱스로 호출
// key라는 메소드
document.write(sessionStorage.key(1));

// 세션 삭제
// clear : 세션 전체 삭제
sessionStorage.clear(); 

// 로컬스토리지 했는데

// 로컬스토리지에 추가
window.localStorage.setItem("key", "value");

// 로컬스토리지 값을 호출
window.localStorage.getItem("key");

// 로컬스토리지 전체 값을 제거
window.localStorage.clear();

// 로컬스토리지 길이
window.localStorage.length;

// 로컬스토리지 키값 호출
window.localStorage.key(0);