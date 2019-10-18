module.exports = {
    // 文件输出路径
    outputDir: __dirname + '/../server/admin',
    // 生产环境下 静态文件的路径
    publicPath: process.env.NODE_ENV === 'production' ? '/admin' : '/'
}