const Router = require('@koa/router');

const router = new Router();//创建路由
//定义接口 
const { userLogin } = require('../controllers/mysqlControl.js')
router.post('/user/login',
    async (ctx) => {
        console.log(ctx.request.body);//获取请求体
        const { username, password } = ctx.request.body;
        try {
            const result = await userLogin(username, password)

            //  console.log(result)
            if (result.length) {  // 查到了

                let data = {
                    id: result[0].id,
                    nickname: result[0].nickname,
                    username: result[0].username
                }
                console.log(11111111111111);
                ctx.body = {
                    code: '8000',//自行写的
                    data: {},
                    msg: '登录成功'
                }
            } else {
                ctx.body = {
                    code: '8004',//自行写的
                    data: {},
                    msg: '账号或密码错误'
                }
            }
        } catch (err) {
            ctx.body = {
                code: '8005',
                data: err,
                msg: '服务器异常'
            }
        }

    })



module.exports = router;