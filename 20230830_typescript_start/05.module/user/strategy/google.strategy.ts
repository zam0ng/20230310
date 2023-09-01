import {UserParams} from "../interface/login.request"
import {AuthenticationResponse,Authenticator} from "./Authenticator"

// 검증 객체 구조 상속
export class Googleauthentiactor implements Authenticator{
    async authentcate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 구글 로그인 로직 작성 부분
        console.log("구글 로그인 성공");
        return {success : true}
    }
}