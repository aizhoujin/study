
Promise.prototype.finally = function(callback){
    let P = this.constructor;
    return this.then(
        value =>  P.resolve(callback()).then(() => value),
        reason =>  P.resolve(callback()).then(() => reason)
    )
}


let p =new Promise((resolve,reject) => {
    resolve('成功');
})

p.then((data)=> {
    console.log('success',data);
},(err) =>{
    console.log('err',err)
})
.finally((data) => {
    console.log('finally',data)
})