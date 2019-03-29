/**
 * 数组去重的常见方法
 * 例如输入：[1,13,24,11,11,14,1,2]
 * 输出：[1,13,24,11,14,2]
 * IE8以下不支持数组的indexOf方法
 */

const arr = [1,13,24,13,13,11,11,14,1,2,1,1, 1, 'b', 'a', 'a', 'a', 'a',2];


/**
 * 利用索引值判断在新数组是否有值，没有push进去
 * @param arr
 * @returns {Array}
 */
function uniqArr(arr) {
  const len = arr.length;
  if (Object.prototype.toString.call(arr) !== '[object Array]' || !len) {
    return [];
  }
  let newArr = [];
  for (let i = 0; i < len; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

/**
 * 通过一个方法来判断元素是否在数组中
 * 没有兼容性问题
 * @param arr
 * @returns {Array}
 */
function uniqArr2(arr) {
  const len = arr.length;
  if (Object.prototype.toString.call(arr) !== '[object Array]' || !len) {
    return [];
  }
  let newArr = [];
  for (let i = 0; i < len; i++) {
    if (!isInArray(newArr, arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
function isInArray(arr,value){
  for(let i = 0; i < arr.length; i++){
    if(value === arr[i]){
      return true;
    }
  }
  return false;
}

/**
 * 利用对象key值得唯一性，存储数组
 * @param arr
 * @returns {Array}
 */
function uniqArr3(arr) {
  const len = arr.length;
  if (Object.prototype.toString.call(arr) !== '[object Array]' || !len) {
    return [];
  }
  let obj = {};
  let newArr = [];
  for (let i = 0; i < len; i++) {
    const key = arr[i];
    if (!obj[key]) {
      obj[key] = key;
      newArr.push(key)
    }
  }
  return newArr;
}

console.log('原数组', arr);

/**
 * 遍历原数组,找到相同的项后删除，索引值回退1
 * @param arr
 * @returns {*}
 */
function uniqArr4(arr) {
  const len = arr.length;
  if (Object.prototype.toString.call(arr) !== '[object Array]' || !len) {
    return [];
  }
  for (let i = 0; i < len; i++) {
    let j = i + 1;
    for (j; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

/**
 * 利用filter + Array.indexOf()
 * indexOf函数如果没有指定start参数默认返回item第一次出现的位置，开始索引值为0
 * 循环比较后面出现的下标与第一次出现的是否相等。
 * @param arr
 */
function uniqArr5(arr){
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

/**
 * 同上方法标记第一次出现索引值与后续出现索引值进行对比，不相同则删除
 * @param arr
 * @returns {*}
 */
function uniqArr6(arr){
  let i = 0;
  for (i; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr
}

/**
 * 同利用索引值判断如果是第一次出现push近新数组
 * @param arr
 * @returns {Array}
 */
function uniqArr7(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

/**
 * 对数组进行排序处理
 * 排序后标记第一位，每项跟右边的比较直到找到不一样的点存储起来
 * @param arr
 * @returns {Array}
 */
function uniqArr8(arr) {
  let newArr = [],
      index = 0;
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[index] !== arr[i]) {
      newArr.push(arr[index]);
      index = i;
    }
  }
  if (newArr[index] !== arr[arr.length - 1]) {
    newArr.push(arr[arr.length - 1]);
  }
  return newArr
}

/**
 * 先将数组排序，同上8方法判断，将相同的全部删除
 * @param arr
 * @returns {*}
 */
function uniqArr9(arr) {
  let index = 0;
  let i = 1;
  arr.sort();
  for (i; i < arr.length; i++) {
    if (arr[index] === arr[i]) {
      arr.splice(i,1);
      i--;
    } else {
      index = i;
    }
  }
  return arr
}

/**
 * 利用set方法去重
 * @param arr
 * @returns {any[]}
 */
function uniqArr10(arr){
  const s = new Set();
  arr.forEach(x => s.add(x));
  return [...s]
}

console.log(uniqArr10(arr));
