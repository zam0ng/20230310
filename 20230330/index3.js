// promise 객체
// 비동기 처리를가능하게 해주는 객체

// nodejs 사용을 많이 할건데
// 비동기처리를 할때 promise 객체를 사용한다.

function testPromise(num){
    //new 키워드로 빈객체를 만들고
    //promise 객체를 생성
    //전달하는 함수값에 
    // resolve, reject 두가지의 매개변수를 받는데
    // resolve() 함수고 처리가 완료되면 반환
    // reject() 함수고 처리가 오류되면 반환
    
    return new Promise(function(res,rej){

        try {
            if(num>10) rej("숫자큼");
            console.log(num);
            //데이터를 받아온다 가정을하자.
            //데이터를 가져오는 시간이 좀 걸리는데
            //데이터를 다 가져오고 작업을 진행시켜야할 때.
            setTimeout(function(){
                res(num+1);
        
            },num*1000);
            
        } catch (error) {
            rej(error);
        }

    })
}

// testPromise(10).then(function(date){
//     console.log(date);
//     //데이터를 가져오고 처리할 구문을 여기에 작성하면 된다.
//     //데이터를 가지고 처리해야할 작업
    
//     return testPromise(date)
//     // reslove를 실행하면 then()메소드가 실행되고
//     // reject를 실행하면 catch()메소드가 실행된다.
// }).then(function(a){
//     console.log(a);
// }).catch(function(err) {
//     console.log(err);
// })


//then이랑 catch를 안쓰면
//같이써도 작업은 잘돌아가도 안좋은 버릇이라 절대 같이 사용하지말자.
// async await 구문

async function asyncFun(){
    // 이제 왠만하면 try catch로 작업의 오류를 예외상황을 잡으면서 작업하자.

    try {
        let temp = await testPromise(10);

        // promise 객체 res나 rej가 처리될때까지 기다리고 아래를 처리함
        console.log(temp);
        temp = await testPromise(temp);
        console.log(temp);

        // await + promise = promise를 기다리고 resolve 값을 반환한다.

        //async await는 짝이다. 붙어다닌다.
    }
    catch(error){
        console.log(error);
    }
}
asyncFun();