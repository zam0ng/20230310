// 웹 서비스를 개발을 하고 완료되면 배포를 해서 사용자에게 소프트웨어를 전달해야하는데
// 배포를 하기 위해 필요한게 제3자가 접속할 수 있는 서버 컴퓨터가 필요하다.
// 365일 내내 24시간 켜져있어야하는데

// 서버 컴퓨터를 대여해주는 호스팅 업체를 통해 배포를 진행한다.
// 호스팅에는 두가지로 나뉜다. (서버 호스팅)(웹 호스팅)
// 서버 호스팅은 : 물리 서버를 단독으로 임대 및 구매
// 웹 호스팅은 서버의 일부공간을 임대하는 개념(컴퓨터를 잘게 쪼갠거라고 생각하면된다.)
// 웹 호스팅의 장점 서버나 인프라 구축이 필요 없고 비용이 저렴 하다는 장점
// 단점은 웹 호스팅은 자원이 한정적 단독 서버에 비해 사용량이 제한적이라는 단점.

// 웹 호스팅 업체중 하나인 AWS 통해서 서버를 배포 할 것.

// laaS : 컴퓨터 자원만 제공하는 형태 (AWS) Infrastuctrue as a service
// PasS : 헤로쿠 , 넷플리파이 등 기존화경에서 서비스를 올려주는 형태


// 인스턴스 만들기 전에 오른쪽 상단에 리전 확인 서버컴퓨터가 가깝게 설정(서울)

// 인스턴스의 사용 운영체제 선택
// 우리가 사용할 os는 우분투 프리티어
// 키페어 잘 보관 해놓자 , 전달해야할경우는 저장매체 사용

// ssh TCP 프로토콜 포트 범위 22 기본으로 가지고있는 디폴트 포트
// 인스턴스에 접근을 하기 위해서

// 보완규칙 추가 http https , mysql 
// 인스턴스에 mysql 설치

//mysql 설치 명령어

// 업데이트
// sudo apt-get update
// sudo apt-get install mysql-server
// sudo mysql -u root -p // 비밀번호 없음 그냥 엔터


// 데이터 베이스 세팅
// 우리가 사용할 데이터베이스 하나 만들어 보자
// 쿼리문 그대로 사용해서 만들자
// create database 이름;
// show databases;

// 데이터베이스를 사용할 때 우리가 사용할 유저를 만들어주자
// 사용할 유저 생성
// create user '여기에 유저 이름'@'%' identified by '사용할 비밀번호'
// ex) create user 'admin'@'%' identified by 'admin';

// 만든 유저에게 권한 설정
// grant all on 데이터베이스 이름.(데이터베이스 이름 뒤에 점)* to '유저 이름'@'%';
// ex) grant all on test.* to 'admin'@'%';

// 권한이 주어졌는지 확인
// show grants for '여기 유저 이름'
// ex) show grants for 'admin';
// -> 권한 확인하고 exit , restart mysql 하고 워크벤치 켜서 +

// 외부에서 인스턴스의 mysql에 접속을 해보자

// sudo service mysql restart

// mysql -u admin -p
// admin

//보안그룹에 mysql을 허용을 했고
//mysql 외부 접근 허용
//sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf

// 파일을 열고 i 눌러서 수정모드 진입
// esc 눌러서 풀고
// :wq! -> 저장후 종료
// :q! -> 종료
// :w! : 강제 저장

// 워크벤치 에서 host 란에 aws 인스턴의 퍼블릭 ipv4 dns 복사후에 붙여넣기

// 프로젝트를 설치 받자
// git에 올린 프로젝트를 설치

// nodejs 설치
// sudo apt-get update
// sudo apt-get install -y build-essential
// sudo apt-get install curl
// 원하는 노드 버전을 적어주면 된다.
// curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash --

// nodejs 설치합니다
// sudo apt-get install -y nodejs

// node 버전 확인 node -v
// npm 버전 확인 npm -v

// 포트 포워딩을 해서 포트 80 http로 접속했을 떄 8080포트로 재 매핑 시켜주자.
// sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080;
// --dport 80 접속했을 때 --to-port 8080이 포트로 재매핑

// 포트 포워딩 확인 명령어
// sudo iptables -t nat -L --line-nu22mbers

// 포트 포워딩 삭제 명령어
// sudo iptables -t nat -D PREROUTING 인덱스 번호

// http : 80번 포트
// https : 443번 포트

// 그리고 서버대기가 종료되는데
// 백그라운드에서 서버를 대기시켜서 계속 동작하게
// pm2 설치
// npm i pm2
// package.json 부분에서 실행 스크립트 명령어를 node app.jsm 로 실행했을텐데
// pm2 start app.js 로 수정하면 된다.
// 서버가 종료되어 백그라운드에서 노드 서버 실행

// 서버 종료는 npx pm2 kill : 종료
// 리스트 확인 npx pm2 list : 리스트