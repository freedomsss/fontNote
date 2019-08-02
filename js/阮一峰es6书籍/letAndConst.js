var a = [];
for (let i = 0; i < 10; i++){
  a[i] = function () {
    console.log(i)
  };
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
  // let i = '123';
  // console.log(i)
}

a[6]();

function bar(x = 2, y = x + 1) {
  return [y, x];
}

function f() { console.log('I am outside!'); }

(function () {
  // 重复声明一次函数f
  function f() { console.log('I am inside!'); }
  if (false) {
  }
  try {
    f();
  } catch (e) {
    console.log(e)
  }
}());

