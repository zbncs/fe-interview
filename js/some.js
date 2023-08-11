Array.prototype.mySome = function(callback) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const bool = callback(arr[i], i);
    if (bool) {
      return true;
    }
    
  }
  return false;
}

const arr = [1, 2, 3]

const bool = arr.mySome(item => {
  return item === 2;
})

console.log(bool);

