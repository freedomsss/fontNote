Array.prototype.multiply = function () {
  this.concat();
  const newArr = this.map(item => {
    return item * item
  });
  this.push(...newArr);
  // console.log(this)
};
const a = [1,2,3,4];
a.multiply();
console.log(a);

console.log(0.1 + 0.2);

function formatNum(num) {
  const n = num.toString();
  return n[1] ? n : '0' + n
}

console.log(formatNum(2));
