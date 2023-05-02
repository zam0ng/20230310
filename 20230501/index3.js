// 내장모듈 http, fs

const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "application/json","charset=utf-8");

    const URL = req.url;

    if(URL==="/favicon.ico"){
        res.end();
        return;
    }
    
    // 요청한 URL의 내용에 따라서 응답
    switch (URL) {
        case "/":
            fs.readFile("./views/main.html",(err,data)=>{
                if(err){
                    //404 파일을 불러오지 못했어.
                    res.statusCode =404;
                    res.end("파일 없어..ㅠ");
                }else{
                    //파일 잘가져왔네
                    res.statusCode = 200;

                    //전달하는 컨텐츠의 내용은 html파일의 내용이야
                    res.setHeader("Content-Type","text/html");
                    res.end("이것은" + data);
                }
            });
            break;
        case "/list":
            fs.readFile("./views/list.html",(err,data)=>{
                if(err){
                    res.statusCode =404;
                    res.end("파일 없어");
                }
                else{
                    res.statusCode =200;
                    res.setHeader("Content-Type","text/html");
                    res.end(data);
                }

            });
            break;
        case "/add":
            fs.readFile("./views/add2.html",(err,data)=>{
                if(err){
                    res.statusCode =404;
                    res.end("파일 없어");
                }
                else{
                    res.statusCode =200;
                    res.setHeader("Content-Type","text/html");
                    res.end(data);
                }

            });
            
            
            break;
    
        default:
            break;
    }

});

server.listen(4000,()=>{
    console.log("나 잘 열렸음");
});
