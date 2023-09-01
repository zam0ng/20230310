import {UserParams} from "../interface/login.request"
import {AuthenticationResponse,Authenticator} from "./Authenticator"

// 이메일 로그인 검증 클래스 정의
export class EmailAuthcenticator implements Authenticator{
    async authentcate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 이메일 로그인 로직 부분
        console.log("email 로그인");
        return {success : true};
    }
}