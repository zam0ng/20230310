const {User,Post} = require("../models");


exports.borderMain = async (req,res)=>{
    //해당 유저의 마이페이지
    const {acc_decoded} = req;

    // console.log(acc_decoded);
    const user = await User.findOne({where : {name : acc_decoded.name}});
    // console.log(user);
    res.render("main",{data : user});

}

exports.createBorder = async (req,res)=>{

    const {acc_decoded} =req;

    const {user_post} = req.body;
    
    // Post 테이블에 글 추가
    await Post.create({
        msg : user_post,
        user_id : acc_decoded.id
    });
    // 해당 유저가 작성한 글들으 볼 수 있는 페이지로 이동
    res.redirect(`/border/view/${acc_decoded.id}`);
}

exports.borderView = async (req,res)=>{

    User.findOne(
        {
            where : {id: req.params.id}, 
            include : [
                {model:Post}
            ]
        }
    ).then((e)=>{
        console.log(e);
        console.log(e.dataValues.Posts);
        e.dataValues.Posts =e.dataValues.Posts.map((i)=>i.dataValues);
        console.log("ZZZZZZZZZZZZZ")
        console.log(e.dataValues.Posts);
        // e.dataValues.Posts =e.dataValues.Posts.map((i)=>{return i.dataValues)}; 화살표 함수는 중괄호 안쓰면 바로 return 시킨다. 위아래 같은거임

        const Posts = e.dataValues;
        res.render("border",{data : Posts});
    })
}

exports.updateBorder = async (req,res) =>{
    const {acc_decoded} = req;
    const {msg} =req.body;
    const {id}= req.params;
    // 수정 메서드 사용
    // 첫번째 매개변수는 객체로 수정할 값
    // 두번째 매개변수는 객체로 조건 수정할 내용을 찾아서
    await Post.update({msg},{where :{id}})

    res.redirect(`/border/view/${acc_decoded.id}`);
}

exports.borderDel = async(req,res)=>{
    // 삭제 메서드 사용
    await Post.destroy({
        where : {id : req.params.id}
    });

    res.redirect("/border");
}