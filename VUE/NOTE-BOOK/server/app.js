const Koa = require('koa');
const bodyParser = require('koa-bodyparser');// 解析post请求的参数
//解析post请求的参数
const cors = require('koa2-cors');  // 处理跨越
const app = new Koa();// 创建一个Koa实例  

const user = require('./routes/user.js');
// const main = (ctx) => {

// }
app.use(bodyParser());
app.use(cors());//  处理跨越

// app.use(main)
app.use(user.routes(), user.allowedMethods())// 


app.listen(3000, () => {
    console.log('app started at port 3000...');
})   