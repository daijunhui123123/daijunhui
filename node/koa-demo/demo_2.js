const Koa = require('koa')
const app = new Koa()

const main = (cxt) => {  //ctx===前端请求体和后端发送消息    req  +res
    // console.log(cxt.url, cxt.query.id)
    // cxt.body = `hello${cxt.query.id}`
    if (cxt.url.startsWith('/login')) {
        // 前端登入
        cxt.body = {
            data: 'success',
            msg: '登入成功'
        }
    } else if (cxt.url.startsWith('/home')) {
        // 前端想要的首页的数据
        cxt.body = {
            data: 'success',
            msg: '登入成功'
        }
    }
}


app.use(main)
app.listen(3000, () => {
    console.log('项目启动')
})