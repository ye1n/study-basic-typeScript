//변수 생성시 타입 지정
var v1 = ['kim', 'kang'];
var v2 = 12;
var v3 = { age: 20 };
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
