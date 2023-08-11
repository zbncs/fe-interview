// 冒泡排序
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j< arr.length - i -1; j++) {
//       if(arr[j] > arr[j+1]) {
//         [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
//       }
//     }
//   }

//   return arr
// }

function bubbleSort1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
    
  }
  return array;
}

console.log(bubbleSort1([3, 1, 4, 0, 9, 7]));

