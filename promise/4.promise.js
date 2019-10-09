let fs = require('fs');
let Promise = require('./3.promise');
function read(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, function (err, data) {
            if (err) reject(err)
            resolve(data);
        })
    })
}


read('./1.text', 'utf-8').then((data) => {
    return 123
}, (err) => {
    console.log(1, err)
}).then((data) => {
    console.log('success', data)
}, (err) => {
    console.log('err', err)
})