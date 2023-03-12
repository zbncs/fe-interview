# vue3响应式原理

what -> 

vue3放弃了Object.defineProperty，使用proxy来实现响应式。

Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；

Object.defineProperty 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果属性值是对象，还需要深度遍历。Proxy可以劫持整个对象，并返回一个新的对象；

Proxy 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性；

## Proxy 只会代理对象的第一层，那么 Vue3 又是怎样处理这个问题的呢？

判断当前Reflect.get 的返回值是否为 Object，如果是则再通过 reactive 方法做代理， 这样就实现了深度观测。

## 监测数组的时候可能触发多次 get/set，那么如何防止触发多次呢？

我们可以判断 key 是否为当前被代理对象 target 自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行trigger(触发)


