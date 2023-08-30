const multer = require("multer");

const path = require("path");

// multer 함수 안에 매개변수로 객체 형태의 인자를 전달
// storage 속성을 통해서 업로드된 파일을 어디에 저장시킬지 지정할 수 있다.
exports.Upload = multer({

    storage : multer.diskStorage({
        // diskStorage : 메서드를 사용해서 컴퓨터의 하드 디스크에 업로드 파일 저장한다.
        // 객체로 인자값을 전달

        //destination 속성을 사용하면 파일이 저장될 폴더를 설정할 수 있다.
        destination : (req,file,qwer) =>{
            console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
            
            console.log(file);
            console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")


            // done 콜백 함수의 두번째 인자값으로 폴더의 이름을 설정해주면 된다.
            // 서버 컴퓨터 폴더명
            // 첫번째 매개변수는 에러처러의 부분
            // 두번쨰 매개변수는 파일이 저장될 폴더이름
            qwer(null,"uploads/")
        },

        filename :(req,file,done) =>{
            // filename 속성값에서 매개변수 file.originalname은 클라이언트가 업로드한 파일의 이름을 나타낸다.
            // file.originalname : 사용자가 업로드한 파일 원본명

            // extname 메서드는 파일의 경로를 매개변수로 받고 파일의 확장자를 추출 해준다.
            const ext = path.extname(file.originalname);

            // 파일을 저장하는데 이름이 전부 같으면 (2)이런게 생긴다.
            // 그러면 파일 관리가 힘들어진다.
            // 시간을 같이 이름에 포함시켜서 저장시켜주면 겹칠일이 없다. 

            // basename 메서드는 확장자를 추가,제거할 수 있다.
            // 첫번쨰 매개변수로 파일의 경로
            // 두번쨰 매개변수로 옵션
            const filename = path.basename(file.originalname,ext) +"_" + Date.now() + ext;

            //첫번째 매개변수는 에러처리의 부분
            //두번째 매개변수 서버 컴퓨터에 실제로 저장할 파일명.
            done(null,filename);
        }
    }),
    // 파일의 사이즈를 설정

    limits : {fileSize:5 * 1024 * 1024}, // 5MB    
});

