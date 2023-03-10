# Vue生命周期

## what

vue的生命周期就是vue实例从创建到销毁的过程。在不同的阶段vue内部会调用对应的函数，这个就是生命周期函数。

## How

vue生命周期分为：创建前后，加载前后，更新前后，销毁前后；

### 创建前后

beforeCreate：当前阶段的data、methods、computed和watch上的数据和方法都不能去访问。

created：实例创建完成，可以使用data中数据，可以修改数据但不会触发updated函数，无法与dom交互。

beforeMount：当前阶段虚拟dom已经创建完成，即将开始渲染，可以修改数据但不会触发updated函数，无法与dom交互。

mounted：真是dom挂在完毕。

beforeUpdate：响应式数据发生改变，虚拟dom重新渲染之前。

updated：当前阶段dom更新完成。

beforeDestory：实例销毁之前，此阶段可以清除定时器之类的工作。

destory：发生在实例销毁之后。

## 第一次加载的钩子

beforeCreate、created、beforeMount、mounted

## 父子组件的生命周期调用顺序

加载阶段：父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted

子更新阶段：父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated

父组件更新阶段：父beforeUpdate -> 父updated

销魂阶段：父beforeDestory -> 子beforeDestory -> 子Destoryed -> 父Destoryed





