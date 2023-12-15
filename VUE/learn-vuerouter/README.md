# vue  单页运用
整个项目只有一个html文件，通过vue-router来控制页面的切换，


再vue中我们写的每一个页面其实都是一个html代码片段


通过特殊的手段来实现，每次只让一个代码片端生效，也就模拟成了多个html文件一样的效果


# vue-router  
  就是特殊的手段

  1. router-link    a标签的封装
  2. router-view    引入路由
  3. 二级路由
  4. 路由的跳转

  # 路由跳转
  1. router-link 标签的属性
  2. 编程式路由跳转   this.$router.push()


  3. 路由传参
    {path:"xxx",query:{}}
    {path:"xxx",params:{}}
      