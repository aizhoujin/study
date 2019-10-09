
// setState 事物 setState 是同步还是异步
function perform(cb,arr) {
    return function(){
        arr.forEach(wrapper => wrapper.initialize());
        cb();
        arr.forEach(wrapper => wrapper.close());
    }
}


let newFunc = perform(function () {
    console.log('普通函数 核心函数')
}, [ // 数组
    { // wrapper1
        initialize() {
            console.log('wrapper1 start')
        },
        close() {
            console.log('close1')
        }
    },
    { // wrapper2

        initialize() {
            console.log('wrapper2 start')
        },
        close(){
            console.log('close2')
        }
    }
])
newFunc();