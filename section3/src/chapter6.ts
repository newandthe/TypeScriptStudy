/*
* 타입 단언 (type assertion)
* */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;  // 이와 같이 타입으로 간주하라 명시하고 값은 추후에 할당 가능
person.name = "조성국";
person.age = 28;


type Dog = {
    name: string;
    color: string;
};

let dog : Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"     // 타입 단언 없이 정의 할 경우 초과 프로퍼티 발생으로 오류 발생
} as Dog;

/* 그렇다면 언제 사용가능 한가 ?
*
* 타입 단언의 규칙
* 값 as 단언 으로 선언
* A as B 일 때
* A가 B의 슈퍼 타입이거나
* A가 B의 서브 타입이어야 한다.
* */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; (오류 발생)
let num3 = 10 as unknown as string; // 오류가 발생하지는 않지만 매우 매우 비추천

/*
* const 단언
* readonly 프로퍼티 할당 및 리터럴 선언
* */
let num4 = 10 as const; // 10 리터럴 타입으로 판단. const 로 선언한 것과 동일한 효과

let cat = {
    name: "야옹이",
    color: "brown"
} as const;     // 이렇게 as const로 선언한 객체는 readonly 전용 프로퍼티가 적용되어 재 할당 불가능

/*
* Non Null 단언
* 어떠한 값이 null이거나 undefined이 아니라고 컴파일러에게 통보하는 역할
* */
type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글1",
    author: "조성국"
}

// (오류 발생 post.author?.length (옵셔널 체이닝)를 사용하면 undefined가 반환될 수도 있어서)
const nameLength: number = post.author!.length; // ! = null 이거나 undefined가 아니라고 강조
// 단언을 사용 할 경우는 확실한 경우에만 사용하는 것을 추천.
// 컴파일러가 못잡아내기 때문에 위험한 문법
