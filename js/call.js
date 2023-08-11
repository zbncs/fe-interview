Function.prototype.myCall = function(context, ...p) {
    let res;
    context = context || window;
    context.fn = this;
    res = context.fn(...p);

    delete context.fn;

    return res;
}

const obj = {
    a: 1
}

function fn1(a, b, c) {
    console.log(a, b, c, this.a);
    return a;
}

console.log(fn1.myCall(obj, 1, 2, 3));