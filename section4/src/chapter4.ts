/*
* 사용자 정의 타입 가드
* */

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

// 타입 가드 역할을 하는 함수
function isDog(animal: Animal): animal is Dog {  // true 인 경우 이 animal은 Dog 타입이다 라고 알려주는 역할
    return (animal as Dog).isBark !== undefined
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined
}

function warning(animal: Animal) {

    // 서로소 유니온 타입을 사용하지 못하는 경우 (함수 라이브러리 내 타입 인 경우 등) (사용자 정의 타입 가드 사용)
    if (isDog(animal)) {
        // 강아지
        animal;
    } else if (isCat(animal)) {
        // 고양이
    }

}

/*
* 타입 가드를 중앙 집중화 하는 코드 예시 (강의 내용엔 없음)

type Dog = { name: string; isBark: boolean }
type Cat = { name: string; isScratch: boolean }
type Fox = { name: string; isHunt: boolean }
type Animal = Dog | Cat | Fox

// 타입 가드 매핑
const typeGuards = {
  dog: (a: Animal): a is Dog => (a as Dog).isBark !== undefined,
  cat: (a: Animal): a is Cat => (a as Cat).isScratch !== undefined,
  fox: (a: Animal): a is Fox => (a as Fox).isHunt !== undefined,
} as const;

// 사용
function warn(animal: Animal) {
  for (const [key, guard] of Object.entries(typeGuards)) {
    if (guard(animal)) {
      console.log(`${animal.name} is a ${key}`);
      return;
    }
  }
}

* */
