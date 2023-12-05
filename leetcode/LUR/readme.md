- 阿里上班
    手淘，菜鸟，阿里巴巴，钉钉......
    用户系统中心   好处集中管理用户



    宕机的危险？


    pv/uv  访问压力巨大
    用户访问页面数   李裕民访问20个页面 pv

    10万人uv   明确的登录身份+ ip+mac
    pv  50万  


    压力到底在哪里？

    - 流量的洪峰
        服务器居群   随机算法 

    - 数据库在哪里？

       select  查询    i/o瓶颈
       内存   cpu
    -  加缓存  
      id    user   李    
      i/o   ->  memory  cache （内存key=> val）
       select  真查询  cache   set  一下
       cache  id  get  
       90%数据库查询给档住啦
    - 用户模块
        不一定
        缓存命中
        99%  命中  cache    key=>val
        重写了数据库   重新写缓存
        cache  也是有容量上限的    内存的上限
LRU  最近最少使用原则
     刚进来，频繁进来  
     一月之前来过，后没有来


     redis

     容量   set   get

     lur  最近最少 