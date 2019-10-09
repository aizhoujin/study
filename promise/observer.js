// 有一个观察者 被观察者

class Subject{ // 被观察者
    constructor(){
        this.arr = [] // 数组中存放的是观察者的实例
        this.state = '开心'
    }
    setState(newState){
        this.setState = newState;
        this.arr.forEach(o =>o.update(this))
    }
    attach(o){ // 挂载观察者
        this.arr.push(o)
    }
}

class observer{ // 观察者
    constructor(name){
        this.name = name;
    }
    update(s){ // 当前被观察者的状态发生变化，需要更新状态了
        console.log('小宝宝对'+this.name+ '说:' + s.state)
    }

}

// 1） 将观察者放在被观察者之上
// 2) 

let s = new Subject('小宝宝'); // 创建被观察者


/* 创建两个观察者 */
let o1 = new observer('我');
let o2 = new observer('我媳妇儿')

// 将观察者挂载到被观察者上
s.attach(o1);
s.attach(o2);

s.setState('不开心')