const a = 1
const o = {
    b: 2,
    c: 3
}

// module.exports.a = a
// module.exports.o = o

// exports.a = a
// exports.o = o


// error 改变了exports的引用， exports !== module.exports

// exports = {
//     a,
//     o
// }

module.exports = {
    a,
    o
}

