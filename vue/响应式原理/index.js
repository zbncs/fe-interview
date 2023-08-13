// reactive

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      // 收集依赖
      const depend = getDepend(target, key)
      depend.depends()

      return Reflect.get(target, key, receiver);
    },
    set(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)

       // 依赖触发
       const depend = getDepend(target, key)
       depend.notice()
    }
  })
}

// 获取依赖，处理对象的属性响应式
const targetMap = new WeakMap()

function getDepend(target, key) {
  let mp = targetMap.get(target)
  if (!mp) {
    mp = new Map()
    targetMap.set(target, mp)
  }

  let depend = mp.get(key)
  if (!depend) {
    depend = new Depend()
    mp.set(key, depend)
  }

  return depend;
}

// 依赖
let activeFn = null;

class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }
  //
  depends() {
    if (activeFn) {
      this.reactiveFns.add(activeFn)
    }
    
  }

  notice() {
    this.reactiveFns.forEach(it => it())
  }
}

function watchEffect(fn) {
  activeFn = fn
  fn()
  activeFn = null
}

const obj = {
  age: 18
}

const pro = reactive(obj)

watchEffect(() => {
  console.log(pro.age);
})

pro.age = 21

// const proxy = new Proxy(obj, {
//   get(target, key, receiver) {
//     console.log(target, key);
//     return Reflect.get(target, key, receiver)
//   },
//   set(target, key, newValue, receiver) {

//     console.log(target);
//     Reflect.set(target, key, newValue, receiver)
//   }
// })

// obj.age = 20;

// console.log(obj.age);










