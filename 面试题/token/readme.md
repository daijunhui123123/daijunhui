# token  令牌

- cookies 是浏览器的内存空间。但是受后端的掌握，后端将登录令牌保存再cookies中，所有被保存在cookies中的数据，都会在http请求时被自动发送给后端。


- 由   头部    -  负载    -   签名


-  前端登录后 ，后端校验账号密码成功后 考jwt 生成一个token 返回给前端   前端在接受到token后，将token保存在本地，封装在axios，在请求拦截中为每一次请求头中添加一个Authorization字段，值为token，之后的接口请求，后端获取到请求头中的token 并进行校验，如果token合法则返回shujian，否则返回401状态码