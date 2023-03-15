# webpack 常用的优化

增速度

多进程构建：thread-loader
并行压缩：webpack-parallel-uglify-plugin
缓存：babel-loader设置缓存，terser-webpack-plugin配置压缩缓存，hard-source-webpack-plugin模块缓存
缩小构建目标：babel-loader作用范围，resolve.alias: 别名配置，resolve.extensions: 模块解析后缀名配置

减体积

压缩代码
tree-shaking
配置cdn
