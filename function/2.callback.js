let fs = require('fs');

// 异步回调问题嵌套的问题，会导致代码难以维护，而且不方便处理错误
// fs.readFile("./1.text", 'utf-8', function (err,data) {
//     fs.readFile(data, 'utf-8', function (err,data) {
    
//     })
// })

// 多个异步同时执行，在某一个时刻拿到最终的结果
let names = {};

// 哨兵函数，// 如果需求更改那么这里来回改动太麻烦了
// function out(params) {
//     if(Object.keys(names).length == 3){
//         console.log(names);
//     }
// }
function after(times,callback) {
    return function (params) {
        if(--times === 0){
            callback(names);
        }
    }
}

let out = after(2,function (params) {
    console.log(params);
})

fs.readFile('./1.text', 'utf-8', function (err,data) {
    names.name = data;
    out()
})

fs.readFile('./2.text', 'utf-8', function (err,data) {
    names.age = data;
    out()
})

fs.readFile('./3.text', 'utf-8', function (err,data) {
    names.localtion = data;
    out()
})