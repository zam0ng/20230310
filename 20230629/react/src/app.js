// ES6 문법
// {LoginBtn}

// export {LoginBtn} <- 이렇게 여러개 내보내는 export로 작성했을 때는 아래처럼 받아오고
// import {LoginBtn} from "./components/LoginBtn"

// export default LoginBtn <- 단일로 내보냈을 경우
// 가져와서 이름을 마음대로 가능 
import Login from "./components/LoginBtn"

// 루트 요소 가상 DOM으로 생성
// 루트 설정
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Login/>)
