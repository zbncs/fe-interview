#  Vue complier 的实现原理是什么样的？

complier 主要分为 3 大块：

parse：接受 template 原始模板，按着模板的节点和数据生成对应的 ast

optimize：遍历 ast 的每一个节点，标记静态节点，这样就知道哪部分不会变化，于是在页面需要更新时，通过 diff 减少去对比这部分DOM，提升性能

generate(生成)把前两步生成完善的 ast，组成render(渲染)字符串，然后将 render 字符串通过 new Function(功能)的方式转换成渲染函数



