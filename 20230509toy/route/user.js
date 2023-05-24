const express = require("express");
const { Signup , Login , Viewboard, Insertboard, Selectboard, Likeyboard, Deleteboard, Editboard, Replyinsert,Replyview,verifyLogin,verifyrefresh,Mypage} = require("../controller/user");

const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({

    destination: (request, file, callback) => {
        callback(null, 'upload');
    },

    filename: (request, file, callback) => {

        const ext = path.extname(file.originalname);

        callback(null, path.basename(file.originalname, ext)+ "_" + Date.now() + ext);
    
    
        // /* 확장자를 제외한 파일명 */
        // var basename = path.basename(file.basename);
        // /* 파일의 중복과 덮어쓰기를 방지하기 위해 시간을 붙인다 */
        // var date = Date.now();
        
        // callback(request, date + '_' + basename);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        files: 10, /* 한번에 업로드할 최대 파일 개수 */
        fileSize: 1024 * 1024 * 10 /* 업로드할 파일의 최대 크기 */
    }
});

router.get("/", async (req,res)=>{

    try {
        await res.render("login");
    } catch (error) {
        console.log("라우터 로그인페이지 오류");
    }
})
router.get("/signup",async (req,res)=>{
    await res.render("signup");
})
router.post("/",Login);
// router.post("/",async ( req,res)=>{
//     try {
//         const data = await Login(req,res);
        
//         if(data==""){
//             res.render("loginErr");
//         }
//         else{

//             res.render("logincom");
//         }
//     } catch (error) {
//         console.log("라우터 로그인에서 오류남");
//     }
// })

router.post("/signup", async (req,res)=>{

    try {
        const data = await Signup(req,res);
        
        res.render("signcom",{data});
    } catch (error) {
        console.log("라우터 에서 오류");
    }
})

router.get("/list", verifyLogin, async (req,res)=>{

    try {
         const data =  await Viewboard();
        
        res.render("list", {data});
    } catch (error) {
        
    }
})

router.get("/insert",async (req,res)=>{

    try {
        await res.render("insert");
    } catch (error) {
        
    }
})

router.post("/insert",upload.single('userfile'), async (req,res)=>{
    // console.log(req);
    
    try {
        const data = await verifyrefresh(req,res);
        // 블로그에 오류정리
        req.data= data;
        
        await Insertboard(req,res);
        res.redirect("/list");
    } catch (error) {
        console.log("게시글 추가 라우터에서 오류남",error)
    }
});

router.get("/detail/:id",async (req,res)=>{
    
    try {
        const data = await Selectboard(req,res);
        const data2 = await Replyview(req,res);
        // console.log("33");
       
        res.render("detail",{data,data2});
    } catch (error) {
        console.log("라우터 글 상세에서 오류남");
    }
});

router.post("/detail/:id",async (req,res)=>{

    const {id}= req.params;
    
    try {
        await Likeyboard(req,res);
        res.redirect("/detail/"+id);
    } catch (error) {
        console.log("좋아요 증가 라우터에서 오류남");
    }  
})

router.post("/add/:id",async (req,res)=>{
    const {id}= req.params;
   
     try {
       
        await Replyinsert(req,res);
        res.redirect("/detail/"+id);
     } catch (error) {
        console.log("라우터 리플인서트에서 오류남")
     }
})

router.get("/delete/:id",async (req,res)=>{

    try {
        
        await Deleteboard(req,res);
        res.redirect("/list");
    } catch (error) {
        console.log("라우터 delete에서 오류남");
    }
})

router.get("/edit/:id",async (req,res)=>{

    try {
        const data = await Selectboard(req,res);
        res.render("edit",{data});
    } catch (error) {
        console.log("edit 라우터 겟에서 오류남");
    }
})

router.post("/edit/:id",async (req,res)=>{
    try {
        await Editboard(req,res);
        res.redirect("/list");
    } catch (error) {
        console.log("라우터 edit 포스터에서 오류남");
    }
})

router.get("/mypage",async (req,res)=>{
    const user_id_data = await verifyrefresh(req,res);
    console.log(user_id_data);
    try {
        const data =  await Mypage();
       
       res.render("mypage", {data});
   } catch (error) {
       console.log("마이페이지 글 목록 보여주다 라우터에서 오류남"+error)
   }
})
module.exports = router;
