/**
 * 判断一个单词是否为回文
 */

var str1 = 'abccba3';

function checkPalindrom(str) {
  return str === str1.split('').reverse().join('')
}

console.log(checkPalindrom(str1));
