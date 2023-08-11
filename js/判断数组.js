const arr = [];


console.log(arr instanceof Array);

console.log(Array.isArray(arr));

console.log(Object.prototype.toString.call(arr) === '[object Array]');


function type(arr) {
  const type = Object.prototype.toString.call(arr);
  
  return type.slice(8, -1);
}
