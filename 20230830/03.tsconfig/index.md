# tsconfig.json
- compilerOptions : typescript 파일을 컴파일 진행시 어떤 형태로 컴파일을 진행할지 속성 정의하는 부분
- include : 컴파일을 진행할 폴더를 지정
- exclude : 컴파일에서 제외할 폴더 지정

## compilerOptions

- module : 모듈 시스템 지정
- outDir : 내보낼 경로 지정
- target : 번들링 문법 지정 ex) es5 es6 ...
- esModuleInterop :  true (import/export 문법을 자연스럽게 변경 해주는 행위) 그냥 true로 설정
(CommonJS 형식과 ES6 형식의 혼용을 자연스럽게 통합 해주는 속성)

- strict : true로 두자 
- baseUrl : 모듈의 상대 경로를 지정 ./src
- paths : "baseUrl" 경로를 기준으로 상대 위치를 가져오는 매핑값(경로를 변수처럼 사용한다.)

```sh

npm init -y
npx tsc --init
```

```json
{
    "compilerOptions" : {
        // 모듈의 시스템 지정
        "module" : "CommonJS",
        // 내보낼 경로 지정
        "outDir" : "./dist",
        // 번들링 문법 지정
        "target" : "ES6",
        // CommonJS와 ES6 모듈 간의 상호 운용성을 개선해주는 옵션 그냥 true 설정하면 됨.
        "esModuleInterop" : true,
        // true 로 하면 보다 엄격한 타입 체크를 수행 이것도 그냥 true로 설정.
        "strict" : true,
        // 모듈의 상대 경로 지정
        // ./src/user/server/user.service.ts 파일을 나중에 호출할때,
        // user/server/user.service.ts 로 호출 가능.
        "baseUrl" : "./src",
        
        "paths" : {
            //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            // user는 단순히 내가 정하는 별칭이고, 나중에 import 할 때,
            // 만약 ./src/user/server/user.service.ts 경로의 파일을 가져오고 싶을 때,
            // ./src는 위의 "baseUrl" 로 상대경로를 지정해줬으니 user/server/user.service.ts 로 시작해도 되고,
            // 아래 처럼 user/*  user 아래 파일들을 @user/*로 별칭하였기 떄문에, 
            // import 할 때 import a from "@user/server/user.service" 으로 하면된다.
            // 만약 "paths" :{ "@user/*" : ["user/server/*"]} 로 매핑을 했다고 하면
            // import 할 때 import a from "@user/user.service"으로 가져오면 된다.
            "@user/*" : ["user/*"]
        }
    },
    // 컴파일을 진행할 폴더를 지정
    // /** : 폴더, /* : 파일
    // src/**/* : src 폴더 하위폴더와 폴더안에 있는 모든 파일의 경로 지정
    "include" : ["src/**/*"],

    // ** : 임의 하위 디렉토리에 대응
    // /*.test.ts : 루트 디렉토리에서 시작해 .test.ts 로 끝나는 파일에 대응
    // **/*.test.ts : 모든 하위 디렉토리에서 .test.ts 확장자를 가진 파일을 뜻함.
    // .test.ts 확장자가 붙은 파일은 모두 제외   
    "exclude" : ["**/*.test.ts"]
}
```json
    // package.json 의 "scripts" 곳에 아래 코드를 추가
    {
        "build" : "tsc",
    }

```
#### npm run build

### 문제 경로가 @user 이 부분이 컴파일되고나서 변환이 안됬다.

### tsc-alias

### 빌드시에 별칭 그대로 경로가 들어가는데 별칭 그대로 경로가 지정되어있으면 문제가 생긴다. 이 별칭을 경로로 변환해주는 패키지

```sh
    npm install -D tsc-alias
```
```json
    // package.json 추가
    {
        "build" : "tsc && tsc-alias",
    }

```