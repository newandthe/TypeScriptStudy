/*
* 함수 타입의 호환성
* 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
* 1. 반환 값의 타입이 호환되는지
* 2. 매개변수의 타입이 호환되는지
* */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;  // number 타입          (업 캐스팅)
// b = a;  // number 리터럴 타입 (오류 발생 : 다운 캐스팅)


// 기준2. 매개변수가 호환되는가
//  2-1. 매개변수의 개수가 같은 경우
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value: number) => {
};
let d: D = (value: number) => {
};

// 매개변수로 함수를 호출 하는 경우는 좀 다르다 ....
// c = d;  // 업 캐스팅인데 오류 발생
d = c;     // 다운 캐스팅인데 오류 발생 X

// 그 이유 (매개변수가 객체 타입을 사용하는 예시)
type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// animalFunc = dogFunc; (업캐스팅으로 마찬가지 오류 발생)
/* 이와 동일한 로직을 함수로 길게 표현하면
let testFunc = (animal: Animal) => {
    console.log(animal.name);
    console.log(animal.color);
};
와 동일하여 color를 출력 할 수 없기 때문
* */

dogFunc = animalFunc;
// 다운 캐스팅은 다음과 같아서 오류 발생하지 않음
let testFunc = (dog: Dog) => {
    console.log(dog.name);
}


//  2-2. 매개변수의 개수가 다른 경우

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {
};
let func2: Func2 = (a) => {
};

func1 = func2;          // 매개변수가 더 많은 타입에 적은 타입을 취급하겠다고 해서 문제 X
// func2 = func1;       // 적은 타입에 더 많은 타입을 할당 불가능  즉, 매개 변수의 개수가 더 큰 타입에 할당 가능 (타입이 같은 매개변수가 있어야함)