const exp = require("constants");
const {posts} = require("../models");
const { PostView } = require("../models/posts");
const { log } = require("console");

exports.ViewPost = async function(req,res){

    try {
        const data = await posts.viewPost();
        return data;
    } catch (error) {
        console.log('전체 글 조회 컨트롤러에서 에러남');
    }
}

exports.InsertPost = async function(req,res){
    const {title, content} =req.body;
    try {
        await posts.insertPost(title,content);
    } catch (error) {
        
    }
}

exports.POSTVIEW = async function(req,res){
    const {id} = req.params;
    try {
       const data =  await posts.PostView(id);
       console.log("Zz");
       console.log(data);
       return data;
    } catch (error) {
        
    }
}
