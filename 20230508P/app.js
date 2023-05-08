
const express = require("express");
const app = express();

const postRoute = require("./route/posts");
const path = require("path");

app.set("views",path.join(__dirname,"page"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));


app.use("/posts",postRoute);


app.listen(5000,()=>{

    console.log("서버 잘 열림");
})
