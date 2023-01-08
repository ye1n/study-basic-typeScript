//터미널-> tsc -w (js파일로 변경)
//변수 생성시 타입 지정(기본적으로 타입 자동 부여 됨)
var v1 = ['kim', 'kang']; //Union type
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
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var members = [1, '2', 3];
var objects = { a: '123' };
var any; //실드해제
any = 123;
any = true;
var unknown;
unknown = 123;
unknown = true;
var test = 1;
// test - 1; -> 에러
//Q1. 다음 변수 4개에 타입 지정
//(단, age 변수에는 undefined말고 숫자도 들어올 수 있음)
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
//Q2. 학교라는 변수에 타입 지정
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
