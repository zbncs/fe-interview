#! /usr/bin/env node
// 上面是使用系统变量node

// commander 处理命令行参数插件
const {program} = require('commander')

program.option('')

program.parse(process.argv)

// inquirer 命令行交互工具

// download-git-repo 下载远程代码

// ora 下载等待交互

// chalk 命令行样式输出
