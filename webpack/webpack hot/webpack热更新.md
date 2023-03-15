# webpack 热更新是怎么做到的

通过webpack-dev-server创建两个服务器：提供静态资源的服务（express）和Socket服务
express server 负责直接提供静态资源的服务（打包后的资源直接被浏览器请求和解析）
socket server 是一个 websocket 的长连接，双方可以通信
当 socket server 监听到对应的模块发生变化时，会生成两个文件.json（manifest文件）和.js文件（update chunk）
通过长连接，socket server 可以直接将这两个文件主动发送给客户端（浏览器）
浏览器拿到两个新的文件后，通过HMR runtime机制，加载这两个文件，并且针对修改的模块进行更新


