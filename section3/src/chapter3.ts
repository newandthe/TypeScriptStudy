/*
* 객체 타입 간의 호환성
* 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가 ?
* */

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "yellow"
}

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
}

animal = dog;   // 업 캐스팅 아무런 문제가 없음
// dog = animal;    // 오류 발생 (이전 챕터와 같이 다운 캐스팅 불가능) (즉, Animal 타입은 Dog 타입의 슈퍼 타입)



type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs"
}

book = programmingBook;


/*
* 초과 프로퍼티 검사
* */
let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000
    // , skill: "reactjs" (초과 프로퍼티 검사로 객체 리터럴로 초기화 할 경우 오류 발생)
}

// 만약 초과 프로퍼티 검사를 회피하고 싶다면 만들어뒀던 객체로 초기화
let book3: Book = programmingBook;

/*
* 함수의 매개 변수에도 타입 정의 가능
* 이때 함수의 인수로 객체를 전달 할 때도 객체 리터럴 방식으로 전달하면
* 초과 프로퍼티 검사 발동
*  */
function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000
    // , skill: "reactjs"
});

// 만약 서브 타입 객체를 넣으려고 한다면 이와 같이 인수로 변수를 전달 해야 한다.
func(programmingBook);