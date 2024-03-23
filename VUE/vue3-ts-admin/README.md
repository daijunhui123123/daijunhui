# 后台管理系统

- 开发的产品类型
      - 用户前台 vue单页页面
      - 后台api服务  接口
      前后端分离
      - 后台管理系统  
         - 开个权限吧
         - 公司内部的系统
           VUE3+TS
      VUE3(proxy)+TS(类型/严谨/质量)+VITE+elementplus(UI组件)+类库(echarts(数据可视化图标)/axios/js-cookie/moment(格式化时间)/sortable.js......)

   - vite的配置
   工程化套件  可以将ts->js->es5
   - 短段路径 alias
   @->src
   views->src/views
   interfaces->src/interface
   components->src/components

   - 自动加载elenment-plus
   - @types/node 
       - ts有类型系统
       - node path 没有类型系统
       - string number +interface/type
       - 再安装一个node的类型补丁
       - vuex/vue-router ？@types/vuex? 用ts写出来的，自带类型系统
       vue3 99%也是  ts写出来的。