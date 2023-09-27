//도메인이랑 https 설정까지 진행할 예정 Nginx 

// nvm 노드 버전 매니저
// nodejs 설치하고 다른 버전으로 설치할 때
// 삭제하고 다시 설치할 필요 없이
// 원하는 버전을 설치받고 바로 스위치 가능

// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh

// curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash 

// 소스 파일 적용
// source ~/.bashrc

// 전체 목록 확인
// nvm list-remote

// 인스턴스에 v4 주소는 우리가 인스턴스를 실행하거나 다시 실행하면
// 동적으로 ip주소가 할당된다.

// 예) http://ec2-3-39-192-216.ap-northeast-2.compute.amazonaws.com/

// 도메인을 연결을 이 v4로 연결 해놓았는데
// 이주소가 바뀌면 연결이 끊긴다.
// 그러면 안되니까.. 탄력적 ip를 설정을 하면 고정 아이피를 할당 받을 수 있다.

// Nginx 를 사용해서 프록시 설정

// 프록시는 말 그대로 대신
// 통신을 할 때 중간에서 대신 통신을 해주는 역할을 해준다
// 중계역할을 해주는 것이 프록시 서버
// 클라이언트와 서버 사이의 중계 서버

// 클라이언트는 프록시 서버를 서버로 알고있다.
// 서버는 프록시 서버를 클라이언트라고 알고 있다.

// 서버의 위치에 따라서 포워드 프록시 , 리버스 프록시로 구분되는데

// 리버스 프록시는 프록시 서버가 서버의 앞에 위치하고 클라이언트가 서버에 요청을 하면
// 리버스 프록시가 호출되고 리버스 프록시는 서버에게 요청해서 응답을 받고 클라이언트한테 전송
// 클라이언트가 서버에 직접 요청하는게 아니고 프록시 서버가 요청을 받고 서버로 요청해서 
// 서버의 응답을 받게 된다.
// Nginx를 사용해서 리버스 프록시를 만들어보자.

// 클라이언트 -> 인터넷 -> 프록시 서버 -> 서버
// 서버 -> 프록시 서버 -> 인터넷 -> 클라이언트

// aws 인스턴스 접속하고
// nginx 설치
// sudo apt install nginx

// nginx 시작
// sudo service nginx start

// nginx 상태 확인
// sudo service nginx status

// nginx 종료
// sudo service nginx stop

// 웹사이트 호스팅을 할 때 설정에 대한 값이
// default 파일이 생성이 된다.
// cd /etc/nginx/sites-enabled/
// sudo vi default 하면 server_name 도메인을 써줄 공간

// location / 부분에
// try_files # 으로 주석
// proxy_set_header HOST $host;
// proxy_pass http://127.0.0.1:8080;
// proxy_redirect off;

// proxy_set_header 부분은 요청이 들어온 브라우저의 host내용을 넘겨준다는 뜻
// proxy_pass 80으로 포트를 듣고 들어온 요청을 8080포트로 전달하겠다는 뜻
// proxy_redirect off는 SPA 일 경우 redirect 없애겠다는 의미 SPA가 아니면 굳이 써줄 필요는 없다.
// SPA : 싱글페이지 어플리케이션 react vue 등 

// 설정파일을 수정했으면
// 설정파일이 정상적인지 확인을 먼저 해주자.
// 문법에 오류가 있는지 체크
// sudo nginx -t

// 원래 경로로 돌아오기 cd /home/ubuntu

// nginx 재실행
// sudo service nginx restart

// 탄력적 ip 주소를 도메인으로 교체하자.
// 가비아에서 도메인을 구입해서 사용할 예정
// https:// www.gabia.com

// 이 도메인을 사용해서 탄력적 아이피로 요청이 갈수있게

// aws route 53을 사용할 것
// 호스팅 영역 클릭
// 생성눌러서 구매한 도메인 이름 입력 후 생성

// 상세정보를 보면 레코드
// DNS 레코드는 도메인의 이름과 관련된 정보를 나타내는 데이터
// NS 네임서버는 인터넷에서 도메인을 ip주소로 변환하는 역할을 담당
// 도메인을 입력하면 네임서버에게 도메인 ip주소를 요청한다.
// 그래서 웹사이트에 접근을 할 수 있게 해준다.

// aws 값/트래픽 라우팅 대상 에 있는거 가비아 관리에 들어가서 네임서버 설정에 넣어준다.

// 레코드 추가
// A 레코드 : 도메인 이름을 v4주소로 매핑
// A 레코드에 탄력적 아이피를 값으로 작성

// CNAME 레코드 : 서브도메인으로 설정
// www.blockchain9.co.kr로 접속했을 때 blockchain.co.kr 이동하게끔 해주는 개념

// https로 보안이슈 해결
// 검증된 사이트라는 것이고
// https요청할 때 인증서를 발급받아서 인증을 요청을 하는데
// https 설정 
// 배포한 서버에 https를 설정해서 보안 이슈를 해결
// 인증서를 발급받을곳은 무료로 인증서를 3개월짜리를 발급해주는곳이 있는데
// 3개월 마다 발급마다 받으면 무제한으로 무료 이용.

// 모질라 라는곳에서

// certbot 이라는 친구를 사용해서
// https 를 간편하게 설정 가능
// 3ㅐㄱ월마다 우리가 직접 인증서를 재발급 받을 필요가 없이
// 알아서 3개월마다 재발급 받고 메일로 알려준다

// certbot nginx랑도 호환이 좋다. 간단하게 인증서 발급 갱신이 가능하다.
// https://certbot.eff.org/


// 설명대로 설치를 하자.
// sudo snap install core
// sudo snap refresh core

// sudo snap install --classic certbot
 
// certbot 실행파일에 링크 설정
// sudo ln -s /snap/bin/certbot/usr/bin/certbot

// nginx 관련 certbot 실행
// sudo certbot --nginx
// 이메일 입력, 도메인 입력

// nginx에 default 파일을 수정
// cd /etc/nginx/sites-enabled 에서 default 파일 sudo vi로 열어서
// server_name 에 도메인 이름 추가
// ex> server_name 도메인;

// 다시 경로로 돌아와서 cd /home/ubuntu
// sudo nginx -t 로 문법 오류 확인하고

// nginx 재시작
// sudo service nginx restart

// 3개월 마다 재발급을 해주는 명령어
// sudo certbot renew

// 인증서 재발급 체크
// 실제로 인증서를 갱신하지 않고 시뮬레이션 체크
// 발급할 때 사전에 문제가 생길지 여부를 체크
// sudo certbot renew --dry-run