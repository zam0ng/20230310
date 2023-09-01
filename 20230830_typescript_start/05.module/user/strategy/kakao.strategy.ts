import {UserParams} from "../interface/login.request"
import {AuthenticationResponse, Authenticator} from "./Authenticator"

// 검증 객체 구조 생성
// 카카오 로그인 검증 클래스 정의
export class KaKaoAuthenticator implements Authenticator{
    async authentcate(credentials: UserParams): Promise<AuthenticationResponse> {
        // 카카오 로그인 로직
        console.log("kakao 로그인");
        return {success : true};
    }
}