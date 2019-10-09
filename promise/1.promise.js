/* 解决问题
1.回调地域、
2.多个异步请求再同一时间合并结果
3.promise自带的
*/

// Promise 使用时需要new Promise

let p = new Promise(function (resolve,reject) {
    reject('不买');
});

p.then(function (value) { // 成功
    console.log('resolve', value);
}, function(reason){ // 失败
    console.log('reject', reason);

})

// Promise 承诺 就是一个类型
// new Promise时需要传入一个executor执行器(同步执行);
// exectur中有两个参数 resolve 成功， reject失败
// 每个Promise的实例上都有一个then方法，then方法中两个方法(成功函数，失败函数)
// Promise 中有三个状态 pendding，resolved, rejected
// pendding -> resolved      pendding -> rejected
// resolved 不能和 rejected 进行转换，

let fs = require('fs');

function read(url,encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(url, encoding, function(err,data){
            if(err) reject(err);
            resolve(data);
        })
    })
}


// then方法执行完会判断返回的结果，如果是Promise 会把这个Promise执行会取到它的结果
read('./1.text', 'utf-8').then(function(data) {
    return read(data,'utf-8');
}).then(function(data){
    return read(data,'utf-8')
}).then(function(data){
    return read(data,'utf-8')
}).then(function(data){
    console.log(data);
})