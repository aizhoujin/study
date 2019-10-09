const path = require('path')
module.exports = {
    mode: 'development',
    devServer: { // 开发服务的配置
        port: 3888, //端口号
        compress: true,  // gzip 可以提升返回页面的速度
        contentBase: path.resolve(__dirname,'../dist'), // 内存文件路径
    }
}