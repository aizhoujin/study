// 装饰模式 AOP 切片
Function.prototype.before = function(cb){
    // 箭头函数中没有arguments
    return (...args) => {
        cb();
        this(...args);
    }
}

function makeCoffee(who,a){ // 核心创建coffee的方法
    console.log('创建一杯咖啡' + who,a)
}

// this表示 谁调用此函数 this就指向谁
let newFunc = makeCoffee.before(function() {
    console.log('加糖');
})

let newFunc1 = makeCoffee.before(function(){
    console.log('加奶');
})

newFunc('老板','员工');
newFunc1('员工')