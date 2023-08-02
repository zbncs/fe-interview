import {a, increment} from './count.js'
import * as counter from './count.js';

const {a: a1} = counter;

console.log(a);
increment()
console.log(a);
console.log(counter.a);
console.log(a1);
