# 路虎4s店小程序开发
  - 需求来自与4s店  
    看车  一键询问  
    非常接地气  ，微信小程序生态 
- html css  js  
   wxml  
- 小程序的基本知识  
  page 来写  
    index 首页  目录   直接帮我们分层了
       index.wxml     html   view   等于 div  
        小程序有哪些标签呢  

       index.js       js   
       index.wxss     css
       index.json     
- swiper组件
   幻灯片  
    + swiper-item
    定时器  
    chatgpt  
    看开发文档思想   AI英文  
    调试工具的使用  
- 相对单位  
   - 解决适配问题  
     pc 手机  平板  
   - rpx 小程序里少用或不用px  
     retina 3倍retina  1rpx =3px  
     vh view  height  视窗 高度  
     vw 视窗的高度  
     100%比  满屏  
- 小程序有时候会卡一下 重启  
- 给一个元素多个类名，在选择的需求上，让代码更好复用和维护  
  while ...给别的元素用  
  hero 主题  
  section   
- 从外到内    
 盒子  而不是标签   了解页面布局  
 元素的类型有俩种  行内和块级元素 
 - 取类名才是技术活  
      - 用做简单的单词  
      - 选择器前加限定
- js  
    - data 里面的数据可以帮定到页面上  
    - 模板不是静态页面 ，由数据动态   
-  小程序的架构思想

    - 让开发车简单，小程序开了以下预设，关注业务
-  pages的概念  
 wxml/wxss/js
     - wxml 模板  
     标签是小程序自带的标签 view  swiper html是没有的  
     不是页面，  他是活的，动态部分绑定了数据和指令xw：for的  
     只要数据在这里它会自动更新  
   - js  
       data  可以邦定到模板的数据{{}}
       onload  生命周期   `wx.request` 去取下数据(后台)
    ```
    this.setData({
      slides.data.slides
    })
    ```
    git add .
    git commit -m '小程序首页'
    git push origin main 
    - 


