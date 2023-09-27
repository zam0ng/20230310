// 채팅방 만들기
// 방을 따로 나눠서
// 유저간에 귓속말

// 모듈 express socket.io ejs
// package.json
// 서버 대기상태
// view 엔진 세팅
// socket 연결

const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const app = express();
app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");

const server = app.listen(8070,()=>{
    console.log("server on");
})  

app.get('/',(req,res)=>{
    res.render("main");
})

let userId=[];
let room1=[];

const io = socketio(server);

// 유저가 접속하면
io.on("connection",(socket)=>{

    socket.on("joinRoom",(room,name)=>{
        //방에 유저가 접속하면
        //join 메서드로 방에 입장 시킨다
        //방의 개념
        socket.join(room);
        //현재 방에 있는 클라이언트에게 이벤트 푸쉬
        io.to(room).emit("joinRoom",room,name);
    })

    socket.on("leaveRoom",(room,name)=>{
        //유저가 방에서 나가면
        //유저가 방에서 제외되게 해주고
        socket.leave(room);
        //어느방에서 누가 나갔는지 해당 방에 있는 유저들에게 이벤트 푸쉬
        io.to(room).emit("leaveRoom",room,name);
    })
    
    // 유저 접속시 배열에 유저의 아이디 추가

    userId.push(socket.id);

    const socketId = socket.id;

    // 방번호랑 , 로그인할 때 이름을 받고
    socket.on("list",(room,name)=>{
        
        room1.push({name,socketId,room});
        socket.join(room);
        // 그 룸에 다가 그사람 이름 표시해야하는데
        // io.to(room).emit("list",room,room1);
        io.emit("list",room,room1);
    })

    socket.on("disconnect",()=>{
        
        userId = userId.filter((value)=> {
            
            return value!=socket.id
        });
       
        room1 = room1.filter((value)=> value.socketId!=socket.id)
        
        io.emit("list","",room1);
    })

    socket.on("chat",(room,name,msg)=>{
        io.to(room).emit("chat",name,msg);
    })

    socket.on("chat2",(id,name,msg)=>{

        for (let index = 0; index < room1.length; index++) {
            
            if(id==room1[index].name){

                id=room1[index].socketId;
            }
        }
        io.to(id).emit("chat",name,"귓속말"+msg);
    })

})