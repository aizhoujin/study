// webpack 默认支持 模块的写法，comminjs 规范 node
// es6规范 esmodule

// webpack-cli 解析用户传递的参数


// 把这个模块打包 解析出浏览器可以识别的代码
let result = require('./a-module');
console.log(result)

// webpack  webapck-cli 0配置的方式打包
// --save-dev

// npx npm 5.2 之后版本

// 两个模式 开发模式 生产环境
// --mode

// npm run script 里面可以i配置对应的命令

// webpack配置文件默认叫 webpack.config.js webpack.cli.js

// 通过 --config 指定执行文件的文件是哪一个
    // 1)默认引入base 传入模式
    // 2)分别引入dev，prod，在特定的地方引入base



// webpack-merge 主要用来合并配置文件

// 如果是开发环境 要使用webpack-dev-server
// dev-server在内存中打包，不会产生实体文件


// 自动生产html文件并且引入打包后的js内容




