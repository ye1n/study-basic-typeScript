//터미널-> tsc -w (js파일로 변경)
//변수 생성시 타입 지정(기본적으로 타입 자동 부여 됨)
var v1 = ['kim', 'kang'];
var v2 = 12;
var v3 = { age: 20 };
//특정 속성이 선택사항일때 물음표 기입
var v4 = ['kim', 'kang'];
//타입 선언
function func(x) {
    return x * 2;
}
func(12);
var john = { name: 'kim', age: '123' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// Q1. 나의 이름, 나이, 출생지역을 변수로 저장
var myName = '우예인';
var myAge = 18;
var myContry = '서울';
var myFavorite = { song: '잔나비', singer: '가을밤에 든 생각' };
// Q3. 아래 자료를 타입지정
// let project = {
//     member: ['kim', 'park'],
//     days: 30,
//     started: true,
// }
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
