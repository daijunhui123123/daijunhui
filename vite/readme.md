# 工程化的脚手架   


- 前端项目构建脚手架 
     - 可以快速的构建项目 ,去git上拉一个项目  

     - 是一个命令行工具 ,在命令行中中进行,在后端进行,可以解决代码的编译, 在前端的stylus的文件要变成css文件
       es6 -> 变成es5   还有进行一个配置  这个配置包括 alias 等,这个是前几年出的工具,相比较
       传统webpack 速度更快   

- vite 让项目运行起来的流程 是  我们先打开项目文件  在命令行中输入  npm  run dev 打开项目的时间不到1s

wepack 10s左右  这时间比较  用vite 我们可以节省时间在开发中   ,这个因为vite 里面运用到了go  rust ,比node更快  
 
 - script type = module 浏览器支持ES6  模块化 ,   旧浏览器不支持   兼容性  ie11 之前不支持了 ,需要webpack 
  项目的所有文件 先打包 ,而 vite 基于type == module  不用打包 ,直接运行  

  缺点 主要是不支持ie11  以下的版本   

这个启动 npm run dev  会把项目中的index.html 放在首页  启动web服务期








   npm  run build  这个是打包命令  
