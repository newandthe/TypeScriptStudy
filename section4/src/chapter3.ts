/*
* 함수 오버로딩 (매개변수 개수나 타입에 따라 오버로딩)
* (JS 내에서는 지원하지 않음.. TS에서만 지원)
*
* 1. 하나의 함수 func
* 1.1 모든 매개변수의 타입은 number
* 2.1 Ver1. 매개변수 1개 : 20을 곱한 값 출력
* 2.2 Ver2. 매개변수 3개 : 매개변수들을 다 더한 값 출력
* */

// 이렇게 오버로딩을 사용하겠다고 선언하는 버전들을 작성
// (오버로드 시그니쳐)
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 (구현 시그니쳐)
function func(a: number, b?: number, c?: number) {  /* ? 및 조건문을 통한 방어 코드 필수 */

    if (typeof b === 'number' && typeof c === 'number') {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
    
}

// func();          (오류 발생) : 첫번째 호출을 제외한 나머지가 비정상인 것처럼 보이지만, 오버로드 시그니쳐를 선언 해놨기 때문
// 이 경우 호출할 때 인수들의 타입이 실제 구현부에 정의된 함수를 따르지 않고, 오버로드 시그니처의 버전을 따라가게 되기 때문
func(1);
// func(1, 2);      (오류 발생)
func(1, 2, 3);
