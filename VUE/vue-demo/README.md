# vue 开发工作流程

- 得到一个开发模板
   要开发企业级项目，不用从0开始
   npm init vite
   node package management   包管理器
     - 基于vite  工作脚手架创建项目。
        选择 vue  
        选择 js
     - 项目开发模板   start  模板（template）
     - npm config set registry https://registry.npmmirror.com/
     - npm  install

- 工程概念
   vite  工程需要的脚手架 
   devDevtools  开发阶段的依赖 上线后不需要
   - 开发阶段
   - 测试阶段
   - 上线阶段
   - npm run  scripts 脚本
- App.vue 
    - vite 的功劳， 编译.vue 文件，
       .style > .css
    -   script
        style
    -   scr/
          开发目录
    -  dist/  上线目录  交货啦      
- vue 思想
      - 不再做dom编程
         获取或重设html  动态编程  不再需要操作DOM，DOM性能不好    
      -  template  数据{{name}}  ，绑定script里的name 变量
         当它需要动态改变时，响应式编程    let  name =ref(初始值)
         name.value = 更新值   template   所有绑定到它的地都会热更新


