/*
* 대수 타입
* -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
* -> 합집합과 교집합 타입이 존재한다.
* */

/*
* 1. 합집합 - Union 타입
* */
let a: string | number | boolean; // a 라는 변수는 string과 number 등 을 할당 가능 (개수 제한 없음)
a = 1;  a = 'testString'; a = true;

let arr: (number | string | boolean)[] = [1, "test", true];

// @ts-ignore
type Dog = {
    name: string;
    color: string;
};

// @ts-ignore
type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

// Dog 에 위치
let union1: Union1 = {
    // Dog 타입 객체 프로퍼티 할당
    name: "",
    color: ""
};

// Person 에 위치
let union2: Union1 = {
    // Person 타입 객체 프로퍼티 할당
    name: "",
    language: ""
};

// 교집합
let union3: Union1 = {
    // Dog와 Person 타입 객체 프로퍼티 할당
    name: "",
    color: "",
    language: ""
};

// 오류 발생 ( color와 language 모두 없기에 모두 할당 불가능 )
/*
let union4: Union1 = {
    name: ""
};
*/


/*
* 2. 교집합 타입 - Intersection 타입
* */
let variable: number & string;  // never 타입 (공유 하거나 겹칠 수 없어서)

// @ts-ignore
type Dog = {
    name: string;
    color: string;
};

// @ts-ignore
type Person = {
    name: string;
    language: string;
};

type Intersection = Dog & Person;

let intersection1: Dog & Intersection = {
    // 프로퍼티가 하나라도 빠지면 오류 발생
    name: "",
    color: "",
    language: ""
};

