// webpack 是基于nodejs 语法commonjs规范
// 默认导出的是配置对象

// path node语法 webpack基于node 支持node 语法
const path = require('path')

module.exports = {
    mode: 'development', // 表示当前是开发模式

    // 入口配置
    // path.resolve       __dirname 根据当前路径去寻找
    entry: path.resolve(__dirname, './src/index.js'),  // 写路径都采用绝对路径

    // 出口配置
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}


// 一般情况下 我们分成两个模式 一个是开发 一个是生产
// 基本配置 + 开发/生产
module.exports = (env) => {
    console.log(env);
}