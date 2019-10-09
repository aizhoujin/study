// 处理异步的解决方案 回掉函数
// node api 方法

let fs = require('fs');  // file system 读取文件，操作文件

// node 异步I/O
let school = {};
fs.readFile('./1.text','utf-8', function(err,data){
    console.log(err,data)
})