const express = require("express");

const router = express.Router();

const {ViewPost} = require("../controller/posts");


router.get("/",async(req,res)=>{

    try {
        const data = await ViewPost(req,res);       
        res.render("main",{data});
        console.log(data);
    } catch (error) {
        console.log("게시글 리스트 그리다 에러남");
    }
})

router.get("/",async(req,res)=>{

    try {
        
    } catch (error) {
        
    }
})

module.exports = router;