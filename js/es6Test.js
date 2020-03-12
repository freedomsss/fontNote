{
    let a = 10;
    var b = 2;
}
// console.log(b);
// let 与 const
// console.log(a);
// 不存在变量提升，未声明就使用会抛错
// 块级作用域
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        // console.log('1:', i);
    };
}
// console.log('2:', a[6]());
// console.log('3:', i);
var temp = '123';

// 暂时性锁死。其本质就是，只要一进入当前作用域，所要使用的变量
// 就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，
// 才可以获取和使用
if (true) {
    let temp;
    // console.log(temp)
}

for (let i = 0; i < 10; i++) {
    let i = 'abc';
    // console.log('1:', i);
}
// 不允许重复声明，let不允许在相同作用域内，重复声明同一个变量
function f1() {
    // let a = 10;
    // var a = 1;
    // console.log(a)
}
function f2() {
    // let a = 10;
    // let a = 1;
    // console.log(a)
}
// f2();

// 块级作用域
// 为什么需要块级作用域
// es5只有全局作用域和函数作用域,没有块级作用域,这里带来很多不合理的场景.
var temp = new Date();
function f3() {
    console.log(temp)
    if (false) {
        var temp = 'hello';
    }
}
// 上面代码的意思是，if代码块的外部使用外层的temp变量，内部使用内层的temp变量。但是，函数f3执行后，输出结果为undefined
f3(); // undefined