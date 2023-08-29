const obj = {
    a: function() { console.log(this) },
    b: {
        c: () => { console.log(this) },
    },
    c: () => {
        console.log(this)
    },
    d: {
        e: {
            f: function() {
                console.log(this)
            }
        }
    }
}

obj.a()
obj.b.c()
obj.c()
obj.d.e.f()

const fn = () => {
    console.log(this)
}
fn()
fn.call(obj)

const a = 0
function foo() {
    let test = () => {
        console.log(this)
    }
    return test
}
let obj1 = { a: 1, foo: foo }
obj1.foo()()
//  obj.foo()返回test  obj.foo()()调用test  而且是独立调用  但是this还是指向obj



