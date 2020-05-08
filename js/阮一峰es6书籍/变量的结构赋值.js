// 变量的结构赋值
// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

// 解构赋值允许指定默认值
let [foo = true] = [];
console.log(foo);

// let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['c', undefined]; // x='a', y='b'
console.log(y);
// es6内部使用严格相等运算符===，判断一个位置是否有值。所以，只有当一个数组成员等于undefined，默认值才会生效

let [x1 = 1] = [undefined]; // 1
let [x2 = 2] = [null]; // null
console.log(x1);
console.log(x2);

// 上面代码中，如果一个数组成员是null，默认值就不会生效，因为null是不严格等于undefined

console.log(undefined === 0);
// console.log(undefined === null);
// console.log(undefined === false);
// console.log(undefined === undefined); true
// console.log(false === false); true
// console.log(false === null);
// console.log(null === null); true

// console.log(console);
const { log } = console;

log([[1, 2], [3, 4]].map(([a, b]) => a + b));
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status: test2, data: test } = jsonData;

console.log(id, test2, test);

// 变量解构的用途
// 1.交换变量的值
let x3 = 1;
let y3 = 2;

[x3, y3] = [y3, x3];
console.log(x3, y3);

// 2.从函数返回多个值
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
//3. 函数参数的定义
//4. 提取JSON数据
//5. 函数参数的默认值
//6. 遍历map结构
// 任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
// 如果只想获取键名，或者只想获取键值，可以写成下面这样。

// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}

// 7.输入模块的指定方法

// 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
// const { SourceMapConsumer, SourceNode } = require("source-map");