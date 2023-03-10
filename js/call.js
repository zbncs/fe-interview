
Function.prototype.myCall = function(context, ...agrs) {
    const fn = this;
    context = (context === undefined || context === null) ? window : context

    context.fn = fn;

    const res = context.fn(...agrs)

    delete context.fn

    return res
}




