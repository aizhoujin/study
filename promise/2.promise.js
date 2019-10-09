// promise 承诺 三个状态 pending 等待  resolve 成功 reject 失败

// 默认现在的高版本浏览器 默认支持promise es6-promise (可以支持promise)

// promise是一个类
// 我调用resolve 就是成功态
// 调用了reject 就是失败态
// 返回的是一个promise的实例，每个实例都有一个.then的方法

// executor 是立即执行的

// 只有默认pending等待态的时候可以改变状态， 一旦改变就无法再次改变

/* 调用3.promise导出的 系统默认有promise ，如果调用自己的就会覆盖系统的*/
let Promise = require('./3.promise')

let p = new Promise((resolve,reject) =>{
    // throw new Error('失败了');

    setTimeout(() =>{
        resolve('成功的函数')
    }, 1000)
})
console.log(2);
p.then((data) => {
    console.log('成功',data);
},(reason) => {
    console.log('失败', reason)
})
p.then((data) => {
    console.log('成功',data);
},(reason) => {
    console.log('失败', reason)
})
