const fs = require('fs')
const path = require('path')
const promisify = require('util').promisify
const readdirPro = promisify(fs.readdir)

function readDir(entry) {
  readdirPro(entry).then(files => {
    files.forEach(file => {
      const filepath = path.join(entry, file)
      
      fs.stat(filepath, (err, stats) => {
        const isFile = stats.isFile()
  
        if (isFile) {
          console.log(`${file}是文件`);
        } else {
          console.log(`${file}是文件夹`);
          readDir(filepath)
        }
      })
  
    })
  })
  
}

readDir(path.join(__dirname, './test'));
