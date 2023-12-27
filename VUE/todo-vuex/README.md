#  vue 数据流



- 数据流  
     数据库  todos->MV C   架构  后端router+ controller+model

- HTTP 请求
    GET  /todos  ->   MVC
    后端router  ->  
    controller  todosController   业务逻辑  select * from todos

    modle  表的结构抽象
    api   接口  返回  json

- 前后端分离  
    -   api
    -  vuex  vue 大型项目  ，大公司一样    财务
         state   getters  mutations   actions
    -  api  ->  vuex（管理着页面要的数据）-->   component

- vue 组件开发 难的是设计数据
    - ref/reactive  私有数据
    - props  父组件传递数据
    - computed  计算属性

