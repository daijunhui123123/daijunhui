# 前端页面开发之专业性
- 先结构 后样式
    BEM  使用起来
    page+ hd/bd/ft  
-  npm i -g   stylus
     node 是全栈 js的后端开发 
      npm 是node 的包管理器  
      Stylus 样式文件为普通的 CSS 文件
      i  install 的简称  
      -g 全局安装
      stylus   --version  

- common.styl   .styl   
    - stylus 是css的超集  省去冒号：；  {}提高效率
    - tap 缩进
    - 失败 重新运行  stylus -w  common.styl -o common.css
      watch  监听 styl  文件的改变 ，自动编译 css 
    - stylus 嵌套
      BE里写样式的时候，自动补全css的前缀 

- stylus 的功能
   - 支持变量
      晃点老板的利器
- 阿里的适配神器  flexible.js
   - 移动端不要用px  是绝对单位  ， rem  vw/vh  相对单位
   - 1rem = html  font-size  会去设置， 不一样  
     iphone  设计稿模式的标准尺寸375pt物理像素   750px
                                414pt   
      37.5  375 有什么关系
      100vw =10 rem   都是一样的  设置不一样的html  font-size  
- 移动端适配手写  
   - 立即执行函数 ， 不影响外界的  把功能完成啦
   - 1rem  = vw/10 就可以兼容所以手机的宽度  
     设计稿上的  750px=2*350pt    phot0shop  px单位的
       120/75px =  ？ rem
   -  onresize 
   - dry  设计模式原则   封装 复用  
   -  DOM的性能不太好  缓存dom元素
   -script 标签  src 属性加载一个资源，同步的会阻塞html 的下载进程 一定要放在头部，
    放在css之前

- 后端素养
    - requests      pyhon  http请求库
       url（ip）   +get请求  响应是  服务器给你返回的财经首页html的二进制流
       response.text   html文本信息  
    - parse 一下  ， BeautifulSoup(response。text   “html。parser ”)
       python 最擅长  文本 数据解析    csv  sql  
    - find_all  dom查询  内存中找
       人生苦短 我用python  lik  for  link  in links  if  "/new"  in  link and
    - 随机功能