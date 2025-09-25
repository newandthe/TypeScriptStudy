// void
// void = '공허' 라는 의미 즉. 아무것도 없음을 의미하는 타입


/* 이와 같이 함수에도 반환 값 타입 지정 가능 */
function function1(): string {
    return "hello";
}

/* 아무 반환 값이 없는 경우 */
function function2(): void {
    console.log("hello");
}

let a: void;
// a = 1;
// a = "test";
// a = {};
a = undefined;
// a = null;   // strictNullChecks: false 옵션 인경우 null 또한 가능

/*
* void가 필요한 이유
* 반환 값을 undefined를 반환 타입으로 지정하면 return undefined; 혹은 return; 을 지정 해야한다.
* 만약 null을 반환 타입으로 설정하면 return null;을 사용 해야하며 반환할 필요가 없는 경우 void 타입으로 함수 리턴 타입 지정
* */


// never
// never = '존재하지 않는' (불가능한 타입)

/*
* 이와 같이 정상적으로 종료 될 수 없어 반환값 자체가 있는 것이 모순의 의미를 가지는 경우 일 때 never 타입을 지정
* */
function function3(): never {
    while (true) {}
}

function function4(): never {
    throw new Error();
}

let anyVar: any;

let a2: never;
// 모두 오류 발생
// a2 = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;
// a = anyVar;
