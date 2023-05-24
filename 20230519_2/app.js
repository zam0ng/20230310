const express = require("express");
const app = express();
const path = require("path");

app.set('views', path.join(__dirname,"page"))
app.set('view engine' ,"ejs");
app.use(express.urlencoded({extended : false}));

app.listen(9000,()=>{
    console.log("server on");
})