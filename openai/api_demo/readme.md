##  openai  api  demo


- 自我介绍的时候  
    - 了解openai 的接口调用   完成生成内容   情感分析等NLP任务

- 高级的模块化方案理解

    - 早期js 没有模块化方案 
         完成一个事件脚本    
     -  node 
       程序执行的更本二进制可执行文件  
       js  内部V8引擎转变成字节码 

       node使用c++封装了v8引擎,还需要模块化机制  commonJS  
       
       也可以解析字节码 这个就叫做编译器 
       这个编译器的缺点   MVC   Model-View-Controller


       前端发POST请求 -> 后端路由 - >在给到Controller
         
        后端有 数据库 ===Model   View ----页面    Controller


  - commonJS 跟ES6模块化 相比 ES6 Module   
  - 如何在node中使用ES6 Module  一文件名 mjs后缀   

   - JS 模块化 
  -  异步处理
      async await  ES7
    - 举例 AIGC openai 接口 封装 Chat async  函数
      因为 在内部调用的openai  chat 接口的异步的
        - chat message  是数组
          system 出现一次  用于指定chat bot 的责任  
          假如你是一个前端大厂P8 面试官

          user 用户 提问内容
          assistant  助理 openai  返回内容

          openai 可以接受比较的token


    