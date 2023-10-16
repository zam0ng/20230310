const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.urlencoded({extended:false}));


const nftinfoRouter = require("./routers/nftinfo");

app.use(
    cors({

        origin : ["http://localhost:3000",],
        credentials : true,
    })
)

app.use("/",nftinfoRouter);

app.listen(8080,()=>{
    console.log("server on");
})