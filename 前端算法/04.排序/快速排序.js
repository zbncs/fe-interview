// 快速排序

/**
 * 
 * @param {Array} arr 
 */
function quickSort(arr) {
  const mid = Math.floor(arr.length / 2);
  const midValue = arr[mid];
  const left = [], right = [];

  if(arr.length < 2) {
    return arr;
  }

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > midValue) {
      right.push(arr[i]);
    } else if (arr[i] < midValue) {
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat([midValue], quickSort(right));

}


console.log(quickSort([3, 1, 4, 0, 9, 7]));

