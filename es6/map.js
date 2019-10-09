// map 叫他hash表  散列

let map = new Map();
map.set('a',1);

map.set('b',123);
map.set('a','222')

// 用法同set

console.log(map.get('b'))

// WeakMap key只能是对象 不会导致内存泄漏

