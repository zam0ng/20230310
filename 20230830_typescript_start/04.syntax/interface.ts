// interface는 객체의 구조를 정의하는 "타입"

interface IBlock{
    id : number
    title : string
    content : string
    data : number
    like : number
    // 옵셔널체이닝 가능
    hit? : number
}

const Block : IBlock = {
    // 자동완성도 뜬다. 뭐가 필요한지
    id : 0,
    title : "",
    content: "",
    data : 123,
    like :123,
    hit : 123,

}

const Block2 : IBlock = {
    id : 0,
    title : "",
    content: "",
    data : 123,
    like :123,
}


// implements 키워드는 class에 구조가 만족하는지 여부 체크
// interface IProduct {
//     name : string
//     price? : number

// }
// class product implements IProduct {
//     name : string
//     price : number
//     constructor(name: string, price : number){
//         this.name = name;
//         this.price = price;
//     }
// }