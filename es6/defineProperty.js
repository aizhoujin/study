// Object.defineProperty es5
// 定义属性 Object.freeze();

let obj = {};

let val = '';
Object.defineProperty(obj, 'name', {
    configurable: false, // 是否可配置，这个属性是否能被删除
    enumerable: true, // 可没
    get() {
        return val;
    },
    set(newVal) {
        val = newVal
    }
})

delete obj.name;
console.log(obj);