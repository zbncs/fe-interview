// index.js

console.log('index.js');

import { sum } from './helper.js';

console.log(sum(1, 2));


// helper.js

console.log('helper.js');
export const sum = (x, y) => x + y;



// 输出结果：helper.js index.js 3

