# 百度前端情景  
- 用户体验  

  - 不要让用户觉得麻烦
- 如果函数超过十行，一定可以拆分  
    不利于维护  
      - 提交  
         1. preventDefalt
         2. value 的值，生成todo对象  
         3. 渲染list   抽出来   复用
         4. rest 表单  

- 本地存储  
  - localStorage
       setItem('key',value)
       getItem('key')
    - 浏览器的应用程序的存储的一种，不会因为关闭页面而丢失
    - 用于存储一下关键信息和用户配置
    - 如果值是对象的话 ，会有问题
           值Object.prototype.tostring.call(val)
            [1,2,3]  '1,2,3'   [].join(',')
            {  } [ object  object]
   -  序列化 JSON.stringify(object)
      反序列化  JSON.parse()  反序列化  成为一个对象
- 用户体验  
   - 把用户当小白
   - required  placehoider  表单html5特性  
      减少用户犯错的可能性，如果用户因操作不当，表单提交失败，他会失望的， 离开网站  
localStorage.setItem('money',10000)  存数据  
localStorage.getItem('money')  取数据
localStorage.setItem('settings',{mode:'night',vip;ture})   //夜间模式
localStorage.setItem('settings')   //[ object  object]