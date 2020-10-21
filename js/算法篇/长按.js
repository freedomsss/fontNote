/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {

};


// addTwoNumbers(11, )

const l1 = [2,4,3];
const l2 = [5,6,4];
// var addTwoNumbers = function(l1, l2) {
//   console.log(l1);
//   const num1 = Number((l1.reverse()).join(''));
//   const num2 = Number((l2.reverse()).join(''));
//   const sum = num1 + num2;
//   const arr = ((sum.toString()).split('')).reverse();
//   return arr;
// };
var addTwoNumbers = function(l1, l2) {
  var numArr = [];
  for(var i = 0; i < l1.length; i++) {
    var sum = l1[i] + l2[i];
    if(sum < 10) {
      numArr[i] = sum;
    } else {
      var nextNum = l1[i + 1];
      nextNum = nextNum ? nextNum + 1 : 1;
      if (!nextNum) {
        l2[i + 1] = 0;
      }
      l1[i + 1] = nextNum;
      numArr[i] = sum % 10;
    }
  }
  console.log(numArr);
  return numArr;
};

var rob2 = function(nums) {
 var sum = 0;
 var len = nums.length;
 if (len % 2 === 0) { // 偶数位
   var sum1 = 0;
   var sum2 = 0;
   for (var i = 0; i < len; i++) {
     if (i % 2 === 0) {
       sum1 += nums[i];
     }
     if (i % 2 === 1) {
       sum2 += nums[i];
     }
   }
   sum = sum1 > sum2 ? sum1 : sum2;
 }
 if (len % 2 === 1) { // 奇数位
   for (var j = 0; j < len; j++) {
      if (j % 2 === 1) {
        sum += nums[j];
      }
   }
 }
 return sum;
};

console.log(rob2([1,2,3,1,5]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length <= 2){
    return handleArr(nums)
  }
  let l = nums.slice(0, -1);
  let r = nums.slice(1);
  let Lnums = handleArr(l);
  let Rnums = handleArr(r);
  let bigNumbers = Lnums > Rnums ? Lnums : Rnums;
  return bigNumbers
};
var handleArr = function (nums) {
  let arr = [];
  arr[0] = nums[0];
  arr[1] = max(nums[0], nums[1]);

  for (let i = 2; i <= nums.length - 1; i++) {
    arr[i] = max(arr[i - 1], arr[i - 2] + nums[i])
  }
  return arr[arr.length - 1]
};
var max = function (x, y) {
  y = y ? y : 0;
  return x >= y ? x : y
};

console.log(rob([1,2,3,1,5]));

