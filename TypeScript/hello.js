function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'test';
console.log(sayHello(user));
var tom = {
    name: 'tom',
    age: 20,
    sex: '1',
    height: '100'
};
tom.id = 1;
console.log(tom);
// 数组
var fib = [0, 0, 1, '9'];
// 函数
var mySum = function (x, y) {
    return x + y;
};
var sumNum = mySum(1, 2);
console.log(sumNum);
