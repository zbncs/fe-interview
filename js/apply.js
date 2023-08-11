// 将数组的元素单独一个一个出递给函数

Function.prototype.myApply = function(context, args) {

    if (args && !Array.isArray(args)) {
        throw new Error('0000')
    }

    context = context || window;
    
    context.fn = this;
    let res;

    if (!args) {
        res = context.fn()
    } else {
        res = context.fn(...args)
    }
    
    delete context.fn;

    return res;
}

function fn1(a, b, c) {
    console.log(a, b, c);
    return a;
}

console.log(fn1.myApply(this, [1, 2, 3]));
