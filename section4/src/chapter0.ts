/*
* 함수 타입 정의
* */

/*
* 함수를 설명하는 가장 좋은 방법
* 어떤 [타입]의 매개변수를 받고, 어떤 [타입] 결과를 반환하는지 이야기
*/

function func(a: number, b: number): number {
    return a + b;
}

/*
* 화살표 함수의 타입을 정의하는 방법
* */
const add = (a: number, b: number): number => a + b;

/*
* 함수의 매개변수
* */

// 필수 매개변수는 항상 선택적 매개변수보다 앞에 위치해야 함
function introduce(name = "조성국", age: number, tall?: number) {
    console.log(`name: ${name}`);

    if (typeof tall === "number") { // 만약 선택적 프로퍼티의 연산시 undefined가 전달될 수 있어 마찬가지로 타입 가드를 사용해 연산 진행
        console.log(`tall: ${tall + 99999}`);
    }
}

introduce("조성국", 999); // (선택적 프로퍼티와 동일하게 선택적 매개변수로 선언 가능)

// 인수의 개수가 정확하지 않는 경우 스프레드 연산자
function getSum(...rest: number[]) {    // 만약 개수 고정하고 싶다면 튜플 타입으로 ...rest: [number, number, number]
    let sum = 0;
    rest.forEach(rest => {
        sum += rest;
    })

    console.log(sum);
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15


