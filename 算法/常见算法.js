/**
 * 判断一个单词是否为回文
 */

var str1 = 'abccbssssa3';

function checkPalindrom(str) {
  return str === str1.split('').reverse().join('')
}

// console.log(checkPalindrom(str1));

/**
 * 统计一个字符串中出现最多的字母
 */
var str2 = 'aaqwqrressssea';
function getMaxChar(str) {
  let strArr = str.split('');
  strArr.sort();
  let index = 0;
  let lenArr = [];
  for (let i = 1; i < strArr.length; i++){
    if (strArr[index] !== strArr[i]) {
      lenArr.push({
        maxValue: strArr[index],
        maxLen: i - index
      });
      index = i;
    }
  }
  if (index !== str.length){
    lenArr.push({
      maxValue: strArr[str.length -1],
      maxLen: str.length - index
    });
  }
  lenArr.sort(keysrt('maxLen', false));
  // console.log(lenArr);
  return lenArr[0].maxValue
}
function keysrt(key,desc) {
  return function(a,b){
    return desc ? a[key] - b[key] : b[key] - a[key];
  }
}

/**
 * 找出数组最大差值
 */
// console.log(getMaxChar(str2));
console.log([10, 5, 11, 7, 8, 9, -1, -4].sort((a,b) => a - b));
