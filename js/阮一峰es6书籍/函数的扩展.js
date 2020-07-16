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