//TCP 서버를 만들어보자
//nodejs로 만들거임
//내장 모듈로 사용할건 net
//net 이라는 모듈을 사용하면 tcp소켓을 만들어서 사용할수 있다.
//tcp연결을 맺어주는 프로토콜
//tcp 소켓을 생성하고 서버와 클라이언트간의 응답 요청을 맺을수 있다.

//내장 모듈 net을 가져옴

const net = require("net");
const PORT = 4000;

//서버 객체를 생성
//createServer메서드로 콜백함수를 전달함.
//클라이언트가 접속시 콜백함수를 실행
const server = net.createServer((client)=>{
    //클라이언트가 접속시 실행

    //클라이언트가 데이터를 보내서 데이터를 받으면 어떻게하지?
    client.on('data',(data)=>{
        //클라이언트가 보낸 데이터
        // 네트워크를 통해 전송되는 데이터
        // 바이너리 형식으로 전송된다. 즉
        // 클라이언트가 보낸 데이터는 Buffer 형태로 전송이 되며
        // 서버는 해석해서 문자열로 변환 해주면 된다.
        // 출력된 데이터는 buffer 형식으로 인코딩 해서 우리가 보낸 데이터처럼 보이는것.
        console.log(toString(data));
    })
}); //TCP의 내용을 만들어 준것.

//서버를 대기상태로~
server.listen(PORT,()=>{
    console.log("서버 잘 열렸음");
});
