import {EmailAuthcenticator,KaKaoAuthenticator,AuthProps,Login,LoginService} from "./Authent"

// I 를 붙이는이유 인터페이스라고 표시하려고
interface IEmailSender {
    sendEmail(email : string) : void
}
class EmailSender implements IEmailSender {
    sendEmail(email: string): void {
    }
}

export interface Strategy{
    email : EmailAuthcenticator
    kakaoo : KaKaoAuthenticator
}

class Auth{
    // private 키워드가 붙어서 생성자에 넘겨받은 값이 객체의 키로 추가된다.
    constructor(
        private readonly authProps: AuthProps,
        private readonly emailSender: EmailSender,
        private readonly loginService : LoginService
    ){}
    
    // 로그인 로직
    public async login(){
        console.log(this);
        const aa= await this.loginService.login("kakaoo",this.authProps);
        console.log("---------aa",aa);
    }
    
    // 이메일 인증 처리 구조
    public register(): void {
        this.emailSender.sendEmail(this.authProps.email);
    }
}
// 유저의 email과 password 임시 객체
const authProps : AuthProps = {email: "soon@naver.com", password : "1234"}
const _emailSender = new EmailSender();

// email 로그인 로직 클래스 동적 할당
const _email = new EmailAuthcenticator()
// kakao 로그인 로직 클래스 동적 할당
const _kakao = new KaKaoAuthenticator()

// 로그인 서비스 로직을 가지고 있는 객체
const _strategy : Strategy = {
    email : _email,
    kakaoo : _kakao,

}

const _loginService = new Login(_strategy)
const auth = new Auth(authProps, _emailSender, _loginService);
console.log(auth);
auth.login();
