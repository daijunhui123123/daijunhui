- 终局思维


    -  什么样的面试题是字节级别的
        -  初始化项目的过程发生什么？
             本质 ：http协议   服务  5173   
             以index.html为入口   

             # app的挂载点
                VUE 项目是一个应用，不是几个小文件    运行起来是非常复杂的   模块化组织文件
                      type="module"   支持文件模块化   import   export
              <script type="module" src="/src/main.js"></script>  这个是入口文件   
              js  的早期  模块化能力低  node   require   commonjs  > es6   import   ESModule

              vite（快 ） 是先进的前端构建工具 （Webpack  区别     require   笨重  慢） ，
              它基于ES2015 的模块系统  
              使用了新的ES2015  （ES6 ES2016  ES7）  标准  
              无需依赖其他工具   同时支持开发环境和生产环境构建  
              main.js  入口文件   单点入口   引入依赖文件和各个模块，项目就运行起来了 

              type   module   告诉浏览器以  ESModule  的方式去解析这个文件 有 import   