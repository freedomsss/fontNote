// 根据当前点索引值找到数组中不一样的点的起始点跟终止点
var x = [1,1,2,2,3,3,3];
var index = 5;

function getLastTime() {
  var sIndex = 0;
  var eIndex = 0;
  if (index > x.length - 1) {
    return;
  }
  for (let i = index; i < x.length - index;i++) {
    if (x[index] !== x[i]){
      eIndex = i - 1;
      break;
    }
  }
  for (let j = index;j > 0;j--) {
    if (x[index] !== x[j]){
      sIndex = j + 1;
      break;
    }
  }
  if (eIndex < sIndex) {
    eIndex = x.length - 1;
  }
  console.log('开始坐标：--', sIndex);
  console.log('结束坐标：--',eIndex);
}

getLastTime();
