// fn.bind(this, argus)

Function.prototype.myBind1 = function(context, args = []) {
    const fn = this
    context = (context === undefined || context === null) ? window : context
    return function() {
        const agrus = args.concat(Array.from(arguments))
        fn.apply(context, agrus)
    }
}





