// fn.bind(this, argus)

Function.prototype.myBind = function(context, ...argus) {
    // console.log(this);
    context = context || window;
    const fn = this;

    return function() {
        argus = argus.concat([...arguments])
        return fn.apply(context, argus)
    }
}

const obj = {
    a: 1
}

var a = 1;

function fn(a) {
    console.log(100, this);
    return this.a + a;
}

const b = fn.myBind(null, 2)
console.log(b());

