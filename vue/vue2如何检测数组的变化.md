# 说一下在 Vue2.x 中如何检测数组的变化？

vue2中对数组的监听，是通过监听改变数组的七个方法，也就是常说的对数组方法进行重写，重写之后的数组会在每次在执行数组的原始方法之后
手动触发响应页面的效果。

```js
// 记录原始Array未重写之前的API原型方法
const arrayProto = Array.prototype
// 拷贝一份上面的原型出来
const arrayMethods = Object.create(arrayProto)
// 将要重写的方法
const methodsToPatch = [ 'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse' ]
/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  def(arrayMethods, method, function mutator (...args) {
    // 原有的数组方法调用执行
    const result = arrayProto[method].apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    // 如果是插入的数据，将其再次监听起来
    if (inserted) ob.observeArray(inserted)
    // 触发订阅，像页面更新响应就在这里触发
    ob.dep.notify()
    return result
  })
})

```

# 有两种情况无法检测数组变化

1.当利用索引直接设置一个数组项时，例如 vm.items[indexOfItem] = newValue
2.当修改数组的长度时，例如 vm.items.length = newLength

利用索引设置数组项的替代方案:

```js
//使用该方法进行更新视图
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
```

修改数组的长度的替代方案:

```js
//使用该方法进行更新视图
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```






