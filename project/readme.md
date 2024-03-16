## 怎么介绍项目  

 - 我的项目是全栈项目     
    - VUE全家桶    重点   
    - 使用node api 服务   Koa /express   登录   +   post表 
    - ElementPlus  文章列表页  登录页 


- 介绍项目  
    - 后端API服务  

      - sql  数据表设计  

       登录   - user表 
           CREATE TABLE 'user' (
                'id' int(11) NOt NULL AUTO_INCREMENT , //AUTO_INCREMENT  自增
                'name'  varchar(255)  NOT NULL,
                'password'  varchar(255)   NOT NULL
                PRIMARY   KEY ('id')
                UNIQUE   KEY 'name' ('name')  //唯一键  不能重名
           )  ENGINE=InnoDB // 存储引擎 DEFAULT  CHARSET = utf8mb4  // 支持中文字符


        user 尽量简单 因为这个表比较简单 ，次要内容分表设计，有利于性能

    - avatar  用户的头像表  
        要做一个关联表的设计

        CREATE Table 'avatar'{
            'id' int (11) NOT NULL  AUTO_INCREMENT,
            'mimetype' varchar(255) NOT NULL,
            'filename' varchar(255) NOT NULL,
            'size' int(11) NOT  NULL,
            'user_id' int(11)NOT NULL,
            primary Key ('id'),
            KEY 'user_id'('user_id') 
            CONSTRAINT 'avatar_user_id_fk' FOREIGN KEY ('user_id')
            REFERENCES  'use' ('id')
        }

        select filename  from avator where user_id=123;    


    - sql 是后端项目的核心  

    - 面试官的心态  考索引 
       - 主键索引     一般是id      autoincrement
       - 唯一索引       name         不重复  
       - 普通索引
             索引是为了提升查询的速度
             项目里面用到了哪些查询加索引  
             分配相应的空间和数据解构来加速查询   
             索引是数据库的主要性能瓶颈

       CREATE  TABLE 'comment' (
              'id' int (11) NOT NULL  AUTO_INCREMENT,
              'content' longtext NOT  NULL,
              'postId'  int (11)  NOT NULL,
              'useId'  int(11)  NOT NULL,
              'parentId'  int(11)  DEFAULT  null,
              PRIMARY  KEY ('id')  ,
              KEY 'postId'('postId'),
              KEY 'userID' (useId),
              KEY 'parentId' ('parentId') // 评论的评论
       )





       - 外键索引  


   
     索引 meet 查询  