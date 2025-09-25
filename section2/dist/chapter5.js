// 열거형 타입 (Enumerable Type)
// 여러가지 값들에 각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 10] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "user1",
    role: Role.ADMIN, // 관리자
    language: Language.korean
};
const user2 = {
    name: "user2",
    role: Role.USER // 일반 유저
};
const user3 = {
    name: "user3",
    role: Role.GUEST // 게스트
};
console.log(user1, user2, user3);
export {};
