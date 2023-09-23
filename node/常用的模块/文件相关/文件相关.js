const fs = require('fs')

// 获取文件的信息
fs.stat('1.txt', (err, stats) => {
    // {
    //     dev: 16777223,
    //     mode: 33188,
    //     nlink: 1,
    //     uid: 501,
    //     gid: 20,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 91857201,
    //     size: 8,
    //     blocks: 8,
    //     atimeMs: 1695462127724.963,
    //     mtimeMs: 1695462126428.4258,
    //     ctimeMs: 1695462126428.4258,
    //     birthtimeMs: 1695462112008.8713,
    //     atime: 2023-09-23T09:42:07.725Z,
    //     mtime: 2023-09-23T09:42:06.428Z,
    //     ctime: 2023-09-23T09:42:06.428Z,
    //     birthtime: 2023-09-23T09:41:52.009Z
    // }
    // console.log(stats)
})

const res = fs.readFileSync('1.txt')
console.log(res.toString())

fs.readFile('1.txt', (err, data) => {

})

fs.readdir(__dirname, (err, files) => {

})




