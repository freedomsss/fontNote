var a = [];
for (let i = 0; i < 10; i++){
  a[i] = function () {
    console.log(i)
  };
  // setTimeout(() => {
  //   console.log(i)
  // }, i * 1000)
  // let i = '123';
  // console.log(i)
}
// Tips: 上述代码中，计数器i只在for循环体内有效，在循环体外引用就会报错。
// Tips: for循环有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

a[6]();

// 使用var会发生变量提升的问题，使用let将不存在变量提升
// 暂时性死区：es6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

function bar(x = 2, y = x + 1) {
  return [y, x];
}

// let 不允许在相同作用域内，重复声明同一个变量。

// 为什么需要块级作用域：1.内层变量可能会覆盖外层变量。2.用来计数的循环变量泄露成为全局变量。

function f() {
  console.log('I am outside!');
  console.log('this', this);
}
// f();

// (function () {
//   // 重复声明一次函数f
//   function f() { console.log('I am inside!'); }
//   if (false) {}
//   try {
//     f();
//   } catch (e) {
//     console.log(e)
//   }
// }());

// 最好不要在块级作用域内声明函数，如果需要的话，请优先使用函数表达式

const arr1 = [];
arr1.push('Hello'); // 可执行
arr1.length = 0;    // 可执行
// a = ['Dave'];    // 报错

// const 实际保证的，并不是变量值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单数据类型（数值，字符串，布尔值）
// 值就是保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是针对对象及数组），变量指向的内存地址，保存的只是
// 一个实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于他指向的数据结构是不是可变的，就完全不能控制了。

// 如果真的想将对象冻结，应该使用Object.freeze方法。

const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;

// 上面代码中，常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。

// 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。

var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};

// es6一共有6种声明变量的方法

console.log('this', this);
// console.log('window', window);

// 顶层对象在各种实现里面是不统一的
// 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
// 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
// Node 里面，顶层对象是global，但其他环境都不支持。

// 同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。
// 全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。
// 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
// 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。
// 但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。

// 综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。

// 方法一
(typeof window !== 'undefined'
  ? window
  : (typeof process === 'object' &&
    typeof require === 'function' &&
    typeof global === 'object')
    ? global
    : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};