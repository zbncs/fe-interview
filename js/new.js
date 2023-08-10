// 实现关键字new：new Array(argus)

function new1(Constructor, ...argus) {
    const obj = {};
    obj.__proto__ = Constructor.prototype;
    const res = Constructor.apply(this, argus);

    return res instanceof Object ? res : obj;
}


function myNew(constructor, argus) {
    // 声明一个空对象
    const obj = {}
    // 构造函数的原型指向空对象的原型
    obj.__proto__ = constructor.prototype
    // 执行构造函数，并把this指向空对象
    const res = constructor.apply(obj, argus)

    // 返回构造函数指向的结果
    return res instanceof Object ? res : obj
}


