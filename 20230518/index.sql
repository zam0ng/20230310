-- 데이터 베이스
-- 단순하게 데이터를 저장하는 공간

-- sql 명령어를 사용해서
-- 구현된 기능을 실행시키기 위해 사용하는 특정한 언어이다.
-- 데이터를 보관하거나 저장하거나 삭제 또는 수정을 할 수 있다.

-- 관계형 데이터베이스
-- mysql
-- oracle
-- mariaDB

-- 비관계형 데이터 베이스
-- MongoDB

-- CLI로 mysql에 접속 방법
-- mysql -u root -p
-- 비밀번호 입력

-- 스키마 전부 확인
-- show databases

-- sql문은
-- 데이터 정의어(DDL)
-- 데이터 조작어(DML)
-- 데이터 제어어(DCL)

-- 데이터 정의어
-- create
-- show
-- drop
-- alter

-- 데이터 베이스 만들어보자
-- 익스텐션에서 mysql 이라고 치고 두번쨰 주황,파랑 설치
-- 디스크 모양 3개 있는거에서 + 해서 비밀번호 입력 후 커넥션 !

-- 데이터베이스 추가
create database testmysql;
-- 데이터베이스 목록 조회
show DATABASES;
-- 데이터베이스 삭제
drop DATABASE testmysql;

--사용할 데이터 베이스 지정
USE testmysql;
-- 데이터 베이스 안에 있는 테이블 확인
show TABLES;
-- 테이블 생성
-- 테이블에 PRIMARY KEY : 고유키는 한개만 들어갈 수 있고 중복이 되지 않는 값.
CREATE Table store(
    id int AUTO_INCREMENT PRIMARY KEY,
    tel VARCHAR(20)
);
CREATE Table store2(
    id int AUTO_INCREMENT PRIMARY KEY,
    tel VARCHAR(20)
);

-- 테이블에서 필드명과 타입을 확인할 수 있는 명령어
DESC store;

-- 데이터 타입
-- 숫자형, 문자형, 날짜형, 이진데이터 타입

-- 숫자형
-- INT : 4byte - 21억까지 정도

-- 문자형
-- varchar : 255byte 까지 : 가변 데이터(우리가 선언한 범위보다 작으면 자기가 알아서 맞춰준다.)
-- char : 255byte : 고정 데이터(우리가 선언한 범위를 다먹는다.)
-- text : 65535 byte

-- 날짜형
-- DATE : 년 월 일
-- TIME : 시간
-- DATETIME : 년 월 일 시간 (YYYY-MM-DD-HH:MM:SS)
-- TIMESTAMP : 년 월 일 시간(INTEGER) 4byte

-- 이진 데이터 타입
-- BLOB : 이미지

-- KEY
-- PRIMARY KEY : 중복 입력 안됨x 테이블에 하나만 넣을 수 있다. NULL 값도 안된다.(고유키)
-- UNIQUE : 중복 입력 불가인데 키를 여러개 줄 수 있다. NULL 값도 된다.

CREATE Table user(
    user_id VARCHAR(20) PRIMARY KEY,
    -- not null 빈 값이 들어가면 안됨.
    user_pw VARCHAR(20) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    -- DEFAULT 따로 추가한 값이 없으면 기본 값을 지정해준다.
    gender CHAR(4) DEFAULT "남자",
    -- now() 현재시간을 만들어주는 함수
    date DATETIME DEFAULT now()
);
DESC user;

-- 데이터 조작어
-- SELECT
-- INSERT INTO
-- UPDATE SET
-- DELETE


-- 테이블에 값을 추가
INSERT INTO user(user_id, user_pw, user_name, gender) VALUES("userid1","userpw1","lee","남자");
INSERT INTO user(user_id, user_pw, user_name, gender) VALUES("userid2","userpw2","jae","남자");

select * from user;

-- 테이블 열 검색
-- WHERE 문으로 테이블을 조회해서 해당 필드가 userid1인 값을 찾아서 조회
SELECT * FROM user WHERE user_id = "userid1";
SELECT * FROM user WHERE gender = "남자";

-- 테이블 열 수정
-- SET 해당 값을 수정할 때 사용
-- UPDATE문과 짝으로 사용한다.board

UPDATE user SET gender ="여자" WHERE user_id = "userid2";

UPDATE user SET user_pw = "0000", user_name="young", gender="남자" WHERE user_id ="userid2";

-- 테이블 열 삭제
DELETE FROM user WHERE user_id ="userid2";

-- 게시판 테이블 만들기
-- 컬럼은 id, content, writer, date, likes
-- id = int 11자  자동으로 증가, 고유키
-- content Text 타입 null이여도 추가 가능하게
-- writer varchar 40자 null이면 안되게
-- likes int 11자 기본값 0

-- row를 6개 추가하기

create table board (
    id INT(11) AUTO_INCREMENT PRIMARY KEY, 
    content TEXT,
    writer VARCHAR(40) NOT NULL,
    likes INT(11) DEFAULT "0"
    );

show tables;
DESC board;

INSERT INTO board(content,writer,likes) VALUES ("hello4","oh","99");

SELECT id,likes from board where id ="2";

-- alter table [기존 테이블명] rename [새로운 테이블 이름] // 테이블 이름 바꾸기
alter table user rename user2;

-- alter table [테이블 이름] change [기존 컬럼 이름][새로운 컬럼 이름] TYPE // 컬럼의 이름 바꾸기
alter table user2 change user_pw user_pwd VARCHAR(20);

-- alter table [테이블 이름] MODIFY [컬럼 이름] TYPE // 컬럼의 타입 변경
alter table user2 MODIFY user_pwd VARCHAR(255);

-- alter TABLE [테이블 이름] DROP [필드 이름] // 해당 필드를 테이블에서 제거한다.

-- alter TABLE [테이블 이름] AUTO_INCREMENT = 0 , 1 // 해당 테이블의 AUTO_INCREMENT를 초기화 시켜준다.

-- alter TABLE [테이블 이름] ADD [필드 이름] TYPE // 해당 테이블 맨뒤로 필드를 추가.

-- alter TABLE [테이블 이름] ADD [필드 이름] TYPE FIRST // 해당 테이블 맨앞에 필드를 추가.

-- SELECT * from [테이블 이름] ORDER BY [필드 이름] desc | asc // desc 내림차순 asc 오름차순

desc user2;

show TABLEs;
 
CREATE Table user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE Table post(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20)
);

ALTER Table post add userID int;

-- CONSTRAINT 제약조건 명령어(오류가 나면 확인 하기 위해서)(임의로 지정할 수 있다.)
-- FOREIGN KEY : 참조키를 지정 userID
-- REFERENCES 참조키가 참조하는 테이블의 열을 지정
-- 참조할 테이블 지정 user로
alter TABLE post add CONSTRAINT fk_user FOREIGN KEY (userID) REFERENCES user (id);

INSERT INTO user (name) VALUES("dd");

INSERT INTO post (title,userID) VALUES("333",3);

desc post;

-- INNER JOIN 테이블을 조회하는데 참조키를 가지고 관계가 맺어져있는 테이블 조회
select * from user INNER JOIN post ON user.id = post.userID where user.id = 1;
--
select user.id, post.title from user INNER JOIN post ON user.id = post.userID where user.id = 1;
select user.id, post.title from user INNER JOIN post ON user.id = post.userID where post.title = 123;

-- 게시판에 유저가 글을 등록하면
-- 해당 유저가 작성한 글을 볼수 있는 페이지 만들기