const exp = require("constants");
const {posts} = require("../models");

exports.ViewPost = async function(req,res){

    try {
        const data = await posts.viewPost();
        return data;
    } catch (error) {
        console.log('전체 글 조회 컨트롤러에서 에러남');
    }
}

exports.InsertPost = async function(req,res){

    try {
        const data = await posts.insertPost();
    } catch (error) {
        
    }
}