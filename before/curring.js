// 函數柯里化 我需要把核心的功能 踢出一个更细小的函数
// 反柯里化

// 校验类型
/* 
1) typeOf 不能校验对象 数组 object null
2) instanceof 谁是谁的实例
3) Object.prototype.toString.call 不能判断实例[object object]
4) constructor 判断当前是谁构建出来的
*/

// 普通函数，每次都需要传参
/* function checkType(value, type) {
    return Object.prototype.toString.call(value) === `[object ${type}]`
} */

// 高阶函数，来绑定参数
function checkType(type){
    return function(value){
        return Object.prototype.toString.call(value) === `[object ${type}]`
    }
}


let isString = checkType('String'); // 类似于闭包

console.log(checkType('hello', 'String'))
console.log(isString('hello'))