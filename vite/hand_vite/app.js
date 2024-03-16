const fs = require('fs')   // node 文件模块寻找文件  

const path = require('path')  //  路径模块   路径字符串变路劲对象 

const Koa = require('koa')  //  Mvc  开发框架 vue
const app = new Koa();
const { url } = require('inspector')

// 中间件     用户和服务器  
app.use(async ctx => {
    const { request: { url, query } } = ctx  //  这个请求上下文对象  
    console.log(url);
    if (url === '/') {//  url=== 首页  
        ctx.type = 'text/html'  //   设置响应头 Header  type  
        let content = fs.readFileSync('./index.html', 'utf-8')//读取文件  

        ctx.body = content; //设置响应体  
    } else if (url.endsWith('.js')) {
        console.log(url, __dirname)   // 项目的根路径
        const p = path.resolve(__dirname, url.slice(1))  // url.slice(1)==src/main.js 
        ctx.type = 'application/javascript'
        const content = fs.readFileSync(p, 'utf-8')
        ctx.body = content
    } else if (url.startsWith(/@modules/)) {
        //path  node_modules  vue  引入进来 
    }
})

app.listen(12345, () => {   // 监听 123456端口 
    console.log('vite 脚手架启动了')
})