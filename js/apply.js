// 

Function.prototype.myApply = function(context, argus = []) {
    const fn = this;
    context = (context === undefined || context === null) ? window : context

    // 绑定 this：apply(this, [])
    context.fn = fn

    const res = context.fn(...argus)

    delete context.fn

    return res;
}


