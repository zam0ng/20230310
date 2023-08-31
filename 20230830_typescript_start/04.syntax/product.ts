// class를 사용할 때
// 유지보수를 편하게 하기 위해서 사용을 하는데
// 유지보수가 부족한 코드다
// 확장성이 부족하다

// 상품의 구조 정의
interface IProduct {
     name : string
     price : number
     discountAmount : number

}

class Product{
    // private 접근 불가 키워드
    // 직접 참조가 안되는 값
    private name : string
    private price : number
    private discountAmount : number

    constructor(name2 : string, price : number){
        this.name = name2;
        this.price = price;
        this.discountAmount = 0;
    }

    // private 키워드로 직접 참조가 안되기 때문에 값을 확인하고 싶으면 get메서드를 사용해서 값을 호출한다.
    getName(): string{
        return this.name;
    }

    getPrice(): number{
        return this.price - this.discountAmount
    }

    getProduct(){
        return {name : this.name, price : this.getPrice()}
    }

    // 할인가 조정
    // set 메서드 할인가 조정
    setDiscountAmount (amount : number) : void {
        this.discountAmount = amount
    }
}

const product = new Product("블록",1000);
product.setDiscountAmount(200);
console.log(product.getProduct());

//npm init -y
//npm install -D typescript
//npm install -D ts-node

// 할인율이 종류가 있다고 치면
// 전략패턴
// 1할인
// 2할인
// 3할인
// 4할인