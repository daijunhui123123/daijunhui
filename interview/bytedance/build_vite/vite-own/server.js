// 后端框架 commonjs 
// 服务器端 vite 是用服务器端实现的
const Koa = require('koa');
const fs = require('fs'); // node 文件系统  内置的
// 实例化koa 就是一个后端应用 OOP 
const app = new Koa();
// ctx 对象，ctx.body  响应体
app.use(async ctx => {
    // Http 是基于请求响应的简单协议 
    // index.html 返回给用户就看到首页了
    // 字符串二进制流
    let content = fs.readFileSync('./index.html', 'utf-8')
    ctx.body = content
})

// 后端起动web服务 监听5174 
app.listen(5174, () => {
    console.log('项目在5174端口启动起来了!')
})
