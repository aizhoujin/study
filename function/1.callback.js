// 有一个函数可以接收一个函数，可以根据条件选择执行这个函数

function after(times, callback) {
    return function () {
        if(--times === 0){
            callback();
        }
    }
}


let fn = after(3, function(){
    console.log('fn 被调用了3次')
})

fn();
fn();
fn();

// 读一个文件， 3s后才能获取结果
function read(callback) {
    setTimeout(() =>{
        let r = 'zhoujin';
        callback(r);
    },3000)
}


read(function (result) {
    console.log(result)
})

// 文件提取
let fs = require('fs');
// feadFile 第一个参数是路径(用code Runner 目录指向的都是当前运行的目录，编码，回掉(err 所以 的异步方法都需要不惑错误，但是不能 try catch))
fs.readFile("./1.text", 'utf-8', function (err,data) {
    console.log(err,data)
})