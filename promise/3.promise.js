const PENDING = "PENDING" // 宏
const RESOLVE = "RESOLVE"
const REJECT = "REJECT"
function resolevPromise(promise2,x,resolve,reject){
    // x来取决 promise2 是普通值还是函数
}

class Promise {
    // exector 会立即执行
    constructor(exector) {
        this.status = PENDING
        this.value = undefined; // 成功的值
        this.reason = undefined; // 失败的原因
        this.resolveCallBacks = []; // 存放成功的
        this.rejectCallBacks = [];
        // value 成功的原因
        let resolve = (value) => {  // 不能放原型，因为每个人都有自己的成功和失败
            if (this.status === PENDING) {
                this.status = RESOLVE;
                this.value = value;
                this.resolveCallBacks.forEach(fn => fn()); // 如果逻辑是异步，让数组里订阅成功回调执行
            }
        }

        // reason 失败的原因
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECT;
                this.reason = reason;
            }

        }
        try {
            exector(resolve, reject)
        } catch (e) {
            reject(e);
        }
    }
    // x 是当前then成功或者失败函数的结果
    // x 是不是一个普通如果是普通值，， 把值直接传递到下一个then中
    // x 是一个promise ？ 我需要采用这个x的状态
    // 如果执行函数出错，直接调用promise2的失败
    then(onfulfilled, onrejected) {
        let promise2 = new Promise((resolve, reject) => {
            // 此函数会立即执行
            if (this.status === RESOLVE) {
                try {
                    let x = onfulfilled(this.value);
                    // 看x的返回结果，看x是不是promise，再去让promise2变成功或者失败
                    resolvePromise(promise2, x, resolve, reject)
                    // resolve(x);
                } catch (e) {
                    reject(e);
                }
            }
            if (this.status === REJECT) {
                // return onrejected(this.reason);
                try {
                    let x = onrejected(this.reason);
                    // resolve(x);
                    resolvePromise(promise2, x, resolve, reject)

                } catch (e) {
                    reject(e);
                }
            }

            if (this.status === PENDING) { // 可能是异步
                // 订阅成功和失败的回调
                this.resolveCallBacks.push(() => {// 不想破环原函数，还想扩展原函数
                    // 包一层，不破环原函数还可以添加东西
                    try {
                        let x = onfulfilled(this.value);
                        // resolve(x);
                        resolvePromise(promise2, x, resolve, reject)

                    } catch (e) {
                        reject(e);
                    }
                });
                this.rejectCallBacks.push(onrejected);
            }
        })

        return promise2;
    }
}


module.exports = Promise;