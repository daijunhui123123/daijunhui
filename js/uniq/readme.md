# leetcode等良好的编程素养  


## 模块化| 包
      从业务中抽离，放到响应的模块中去
- 类   一个文件一个类   
- 一个文件一些功能函数    
 
- 一个函数 只完成一个功能 ,如果功能复杂,分成多个函数 
- 我们使用了  node.js  的commonjs 模块化js     模块化机制
      model.exports= 输出对象  
      require  
## 算法思想  

- 暴力破解能快速解决问题,只是好想,执行却慢
   leetcode  起始点是规避暴力破解
- 缓存数组的长度  

-o(n^2) ->o(nlogn) ->o(n)

- 数组的方法 ,有哪  一个可以用来去除一层循环  

- 优点是兼容性更好  

- indexOf()   更好语义的提供了去重功能  代码更优雅  
    需要 arr.indexof
- 为false 的判断 
    - 0 '' false  underfined   null   NaN
-先排序，当前项是否和前一项一样