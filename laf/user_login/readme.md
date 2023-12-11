# vUE 全栈开发之用户系统 

- 用户登入

- 前后端分离
   - register
   - http 来到后端？
       基本请求响应的简单协议
       ctx 请求响应上下文对象
       ctx 指向本次http请求


- 正则表弟式   [object RegExp]
[0123456789] 范围内的一个字符，只取一个
0-9   -> 0-9 数字   [a-zA-Z0-9]
let reg=/1[3-9][0-9]{9}/   正则对象 
   /^1[3-9][0-9]{9}/   ^ 表示开头  校验手机号
   /^1[3-9][0-9]{9}$/   校验手机号 结尾也要校验
   /^1[3-9][0-9]{9}$/g   全局匹配
   /^1[3-9][0-9]{9}$/i   忽略大小写
   /^1[3-9][0-9]{9}$/i.test(13812345678)   测试
  



- 登录
    - 校验表单数据 正则
    - 用户名是否已经注册过  count
    - 密码 单向加密
    -  add
    -  响应规则   d a t a 数据  e r r ro 错误  
        
 