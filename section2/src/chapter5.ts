// 열거형 타입 (Enumerable Type)
// 여러가지 값들에 각 이름을 부여해 열거해두고 사용하는 타입

/*
* enum은 js로 변환되는 컴파일 과정에서 JS 객체로 변환되기 때문에
* 코드상에서 값을 사용하듯이 사용 가능
*  */
enum Role {
    ADMIN,     /* 이와 같이 하단에 공백인 경우 + 1 씩 늘어남. 중간 값에만 할당 하는 경우 이전 값은 0 부터 자동 할당 */
    USER,
    GUEST=10
}

enum Language {
    korean = "ko",
    english = "en"
}

const user1 = {
    name: "user1",
    role: Role.ADMIN,     // 관리자
    language: Language.korean   /* 값을 사용하는 것과 같이 사용 가능 */
}

const user2 = {
    name: "user2",
    role: Role.USER     // 일반 유저
}

const user3 = {
    name: "user3",
    role: Role.GUEST     // 게스트
}

console.log(user1, user2, user3);