/*
* https://ts.winterlood.com/d6b17fad-0a06-4733-89e5-c8fcaf194ed5
* 함수 타입 표현식
* */

// 이와 같이 타입 별칭을 이용하여 JS 화살표 함수를 만들듯이 함수의 타입을 타입 별칭으로 정의 가능
// type Add = (a: number, b: number) => number;

// const add: Add = (a, b) => a + b;
// const sub = (a: number, b: number) => a - b;
// const multiply = (a: number, b: number) => a - b;
// const divide = (a: number, b: number) => a - b;
/*
* 위와 같이 똑같이 정의를 해줘야 하여 중복되는 타입 정의가 너무 많아지게 된다.
* 이 때 아래와 같이 함수 타입 표현식을 사용하면 굉장히 깔끔하게 작성 가능
* */

type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a - b;
const divide: Operation = (a, b) => a - b;


/*
* 호출(콜) 시그니쳐 (함수 타입 표현식과 동일한 기능)
* 객체로 정의 하는 이유는 JS의 함수도 객체이기 때문 ( 관련 자료 : https://reactjs.winterlood.com/0f33b159-6b19-433b-8db4-68d6b4a122e0)
*
* */
type Operation2 = {
    (a: number, b: number): number;
    // TODO: 하이브리드 타입 내용은 생략 추후 찾아보기
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a - b;
const divide2: Operation2 = (a, b) => a - b;