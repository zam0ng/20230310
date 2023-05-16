// express mysql2 ejs

const express = require("express");
const path = require("path");
const app = express();

const joinRouter = require("./routers/joinRouter");
const loginRouter = require("./routers/loginRouter");

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:false}));
app.use("/join",joinRouter);
app.use("/login",loginRouter);

app.listen(8060,()=>{

    console.log("서버 잘열림");
})
