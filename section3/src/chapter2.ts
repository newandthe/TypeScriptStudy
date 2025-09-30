/**
 * Unknown 타입 (전체 집합)
 */
function unknownExample() {
    let a: unknown = 1;
    let b: unknown = "string";
    let c: unknown = true;
    let e: unknown = null;
    let f: unknown = undefined;
    // .. 배열, 객체 등 .. 모두 가능 (모든 타입의 슈퍼 타입이므로 모든 타입의 업캐스팅 가능)

    let unknownVar: unknown;
    // let num:number = unknownVar; (이와 같이 다운 캐스팅은 불가능)
}

/*
* Never 타입 (모든 집합의 서브(부분) 집합 (공집합))
* */
function neverExample() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    // ... (never 타입은 모든 타입의 서브 타입이라 업 캐스팅 가능)

    // let never1: never = 10;
    // let never2: never = "string";    (다운 캐스팅 불가능)
}

/*
* Void 타입 (undefined 의 슈퍼타입)
* */
function voidExam() {
    function voidFunc() {
        console.log("void Function test");
        return undefined;   // 실제 반환은 undefined 로 해도 상관 없음(void 가 undefined 의 슈퍼 타입이라서) 아래의 변수 선언과 동일
    }

    let voidVar: void = undefined;
}

/*
* any 타입 (모든 타입의 슈퍼 타입이자 모든 타입의 서브 타입이 될 수 있음. 단, never 타입 예외)
* */
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;    // 이와 같이 any 타입은 다운 캐스팅 가능
    undefinedVar = anyVar;  // 굉장히 위험함 (다운 캐스팅도 가능해서)

    // neverVar = anyVar;      // (오류 발생) never 타입은 공집합이기 때문에 어떠한 타입도 다운 캐스팅 불가능

}