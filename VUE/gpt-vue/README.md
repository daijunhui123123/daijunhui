## 项目亮点和难点

- 可以安排和设计的
   - gpt  AGI的时代
   AIGC 生成式的人工智能  OPENAI   chatgpt 应用形式 chatbot 
   文本生成   文本生成图片（stablediffusion ） 文本生成视频(sora) 
   AGI  通用人工智能   机器人

   智能驾驶 
   终局思维 技术变革已来， ＬＬＭ　加速了学习速度和能力， 什么都能做， 团队里想通过未来３年的团力，能为一名优秀的开发工程师， 陪团队一起拥抱ＡＩ红利。

   － 技术栈 讲一下dependencies
      打好文稿， 练了几次的  1000字 
      － ｖｕｅ／ｖｕｅ－ｒｏｕｔｅｒ／ｐｉｎｉａ　全家桶 
         陈述的过程， 必需（没有亮点就是亮点 ），
      － ｔｙｐｅｓｃｒｉｐｔ　　
      －　学习一下， dependiences  有点尝试的依赖包 
         - markdonw-it 解析markdown 成 html
         - crypto-js 安全性 加密 
         -tailwindcss
            - 原子化  css 开发省力高效
            - css 工程化  开发依赖， 配置， 生成css文件
            - 适配 rem  
            - 自定过tailwindcss 组件类 @apply  一下  解决复用问题
   ## 亮点
   - 路由懒加载
      - 首页加载速度，性能关键     ()=>inport()
      - Suspense 优化异步加载组件体验 ，比如显示loading
      - slot
      默认  具名...
      - 路由守卫
      - 路由动画transition 页面动画
      - 骨架屏

      - 代码的封装写的挺好 
         - 干净漂亮的分离一些函数，  一个函数只做一个功能
            举例  
             - getApikey     开源项目开源获得免费的apikey
               clearMessageContent()   
                swichConfigStatus();
    - 难点
      - 使用了cryptoJS   加密用户openai  api-key 更安全
          - 引入 cryptoJS
          - 调用相应的 AES.encrypt(原字符串，签名)  AES.decrypt(   )

   - 项目功能点  
     chatbot  模块
      - openai  chatgpt  进行生成式回答功能
      使用crypto-js  对用户的api-key 进行加密
      - 根据功能点，函数封装的很细   便于复用和维护  
         getApikey()   saveApikey()   getSecretkry()   clearMessageContent()
         switchConfigStatus()   sendOrSave   





         