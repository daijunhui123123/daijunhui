## 路虎4s小程序  
- page架构  
  - wxml -> html  
   小程序组件 div->view 
  - wxss -> css
  - js -> 
    onload  生命周期  
     data  setData  
  - json 页面配置，配置一些页面展示的数据，充当部分的模型 
- 布局魔法  flex 弹性布局  
    - css 的难点在于搞定布局  
    - 俩列式布局 
      - float 浮动 
      - felx 布局  
        子元素在一行 
         - flex：1； 主列
          其它列把宽度占完后，都给它
         - align-items ：flex-end |center|；
           flex - start 
- 早点学架构 
  - 基础组件  
     button reset cell。。。
  - 业务模块  
- 列表循环   list
  把数据库的数据展示出来
   <block wx:for="" wx:key="唯一">
   {{item.image}}  照片
   
    </block>
- 数据请求 
  onLauch 发送一次数据请求