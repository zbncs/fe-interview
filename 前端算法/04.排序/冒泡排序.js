// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j< arr.length - i -1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }

  return arr
}

console.log(bubbleSort([3, 1, 4, 0, 9, 7]));

