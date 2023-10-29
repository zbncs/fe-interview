Function.prototype.myCall = function(context, ...p) {
    let res;
    context = context || window;
    context.fn = this;
    res = context.fn(...p);

    delete context.fn;

    return res;
}

Function.prototype.myCall1 = function (thisArg) {
    thisArg = thisArg || window
    thisArg.fn = this
    // let args = []

    // for (let i = 1; i < arguments.length; i++) {
    //     // args.push(`arguments[${i}]`)
    //     args.push(arguments[i])
    // }
    // console.log(11, args)
    let argus = Array.from(arguments).slice(1)
    let res = eval(`thisArg.fn(${argus})`)

    delete thisArg.fn

    return res
}

const obj = {
    a: 1
}

function fn1(a, b, c) {
    console.log(this);
    return a + b + c;
}

console.log(fn1.myCall1(obj, 2, 2, 3));

// console.log(eval(`fn1(${[1, 5, 7]})`))
