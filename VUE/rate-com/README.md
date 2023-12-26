# 项目工程化  

- 开发vue 项目，   SPA
     - 工程化视角，打地基，搭脚手架
     vue create   或者 npm init vue 不用从0开始
     - 项目的开发模板
         - npm init  vite    vite 就是脚手架   开发流程也是工艺

     - vite  就是这个脚手架  流程
     - vue/js  技术栈
     - 生成一个开发模板？  项目文件包
     - npm  install   安装依赖
     - npm  run dev   启动项目

- 组件思想  
   - tamplate 里面写的非html标签，组件可以复用，同事之间复用，工程之间可以复用
     <Rate/>
   - component/Rate.vue
   - 父子之间需要通信 父组件负责管理数据 ，子组件负责渲染（Ui  简单）
             <Rate   value=""/>  props    外部传参
   - 数据有状态，响应式，数据改变（状态改变）页面会更新（热更新）
   -  let score= ref（3）  状态数据   App.vue  data  自有数据
   -  score.value=4  //状态数据的改变  用到它的地方都会更新
   - 数据类型 data/  props / computed  
   - 单向数据绑定{{value}}
        动态数据绑定  v-bind:value="score"