function foo({x, y = 6} = {}) {
  console.log(x,y)
}
foo({x: 'test'});

// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数的length属性：指定了默认值后，函数的length属性值将返回没有指定默认值的参数个数。也就是说指定了默认值后，length属性将失真

var testFun = function (a, b, c = 4) {};

console.log(testFun.length); // 2
console.log(testFun.name); // 2

// 作用域
// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。
// 这种语法行为，在不设置参数默认值时，是不会出现的

var x = 1;

function f1(x, y = x) {
  console.log('f1:', y); // 3
}
f1(3);

// 上面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。
// 在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是3。

function f2(y = x) {
  console.log('f2:', y); // 1
}
f2();

function foo2(x, y = function () {
  x = 2;
  console.log('foo2:y', x)
}) {
  var x = 3;
  y();
  console.log('foo2:x', x)
}
foo2();
console.log('x:', x);

function foo3(x, y = function () {
  x = 4;
  console.log('foo3:y', x)
}) {
  x = 3;
  console.log('1foo3:x', x);
  y();
  console.log('2foo3:x', x)
}
foo3();
console.log('x:', x);

// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3); // 10

// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。