
let fs = require('fs');

// 发布订阅，先把需要订阅的内容保存到队列里，当发布时，让数组总的函数依次执行即可


let names = {};

let Dep = {
    arr: [],
    on(fn){
        this.arr.push(fn);
    },
    emit(){
        if(Object.keys(names).length === 3){
            this.arr.forEach(function (fn) {
                fn();
            
            })
        }
    }
}

// 观察者模式基于发布订阅， vue 观察者模式
Dep.on(function () {
    console.log(names);
})
Dep.on(function () {
    console.log('代码执行结束了');
})

fs.readFile('./1.text', 'utf-8', function (err,data) {
    names.name = data;
    Dep.emit();
})

fs.readFile('./2.text', 'utf-8', function (err,data) {
    names.age = data;
    Dep.emit();
    
})

fs.readFile('./3.text', 'utf-8', function (err,data) {
    names.localtion = data;
    Dep.emit();
    
})