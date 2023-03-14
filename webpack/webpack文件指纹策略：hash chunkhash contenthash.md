# webpack文件指纹策略：hash chunkhash contenthash

hash：以整个为单位，项目的内容变化了，生成新的hash值，内容不变hash之不变。缺点：每次构建hash值都不同，浏览器不会缓存

chunkhash：根据不同的入口文件，进行依赖解析，构建不同的chunk，生成不同的hash值。缺点：当一个文件内容改变，则整个相应的chunk组模块的hash回发生改变，对应引入的css文件没有更改，hash值也会变，会导致css重新构建

contenthash：根据某个文件的内容变化，生成不同的hash值，常用于css文件






