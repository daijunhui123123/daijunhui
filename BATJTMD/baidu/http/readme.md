# 百度JTTP底层理解  

- openai.Comletion 接口  实现啦  prompt任务  
   底层封装啦一次http请求  
- http请求 
    - 构建在tcp/ip之上，传输的是数据包   
    - post(Method)+url(openai api 地址) 请求行
    - 请求头   Authorization  api-key  key  value  =>   401 状态码  必考  重点  
       cookie  
    - 请求体   body   分包发送 ，上传一个文件    400  用户犯错了 
       JSON格式参数  
      {

      }
- http 状态码的划分  
    1XX  请求中 
    2XX  成功
    3XX  跳转一下
        301   
    4xx  用户出错
          401 UnAuthorized
          400 请求错误
          404 Not Found
    5XX  服务器有错
