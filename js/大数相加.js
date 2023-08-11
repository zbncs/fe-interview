function bigAdd(a, b) {
  let res = '';
  let j = 0;
  let g = 0;

  let len = String(a).length > String(b).length ? String(a).length : String(b).length
  let newA = String(a).padStart(len, '0');
  let newB = String(b).padStart(len, '0')

  for (let i = 0; i < len; i++) {
    const sum = parseInt(newA[i]) + parseInt(newB[i]) + j;
    j = Math.floor(sum / 10);
    g = sum % 10;

    res = res + g
  }


  return res;
}

function add(a ,b){
  let maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, '0');
  b = b.padStart(maxLen, '0');
  
  let res = '';
  let sum = 0;
  let t = 0; // 进位
  let r = 0; // 个位
  
  for (let i = maxLen - 1; i >= 0; i--) {
  	let a1 = a[i], b1 = b[i];
    sum = parseInt(a1) + parseInt(b1) + t;
    r = sum % 10;
    t = Math.floor(sum / 10);
    
    res = r + res;
    
  }
  
  return res;
   
}


console.log(add('123000000000000000000000000000000000', '4560'));






