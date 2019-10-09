// set 代表就是集合 map hash表
// 集合就是不能有重复的项目 数组去重 new Set
// generator => iterator

let set = new Set([1,2,3,4,2,3]); // 它的key 和 值是一样的

// 无论什么数据类型，增删改查

// entries方法 编程键值对的形式
console.log(set.entries()); 

// values / keys 取集合的value 或者 key
console.log(set.values());

set.forEach(item => {
    console.log(item);
})

// 如何求两个数组的并集，差级，交集
let arr1 = [1,2,3];
let arr2 = [3,4,5];

// set 可以被迭代
let set = new Set([...arr1,...arr2]);

// 1) 并集
let union = [...set];
console.log(union);

// 2) 交集
let s1 = new Set(arr1);
let s2 = new Set(arr2);
let intersection = [...s1].filter(item => { // filter如果返回true就保留到新的数组中
    return s2.has(item)
})
console.log(intersection);

// 3) 差集
let difference = [...s1].filter(item => { // filter如果返回true就保留到新的数组中
    return !s2.has(item)
})
console.log(difference);

// Object.values() Object.keys() Object.entries(); 默认对象 keys只能取普通的，不包括symbol，
// getOwndPropertySymbol只能取symbol
// 以后Objcet.xxx的方法都改用Reflect.xxx

let obj = {
    a: 1,
    b: 2
}

// 我们可以通过这些ES5的方法来获取值
console.log(Object.values(obj))

// 元编程 改变js原有方法
