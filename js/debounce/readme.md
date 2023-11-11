# js 八股文之防抖节流
   
   ## 前端“ 三清”   
     - window
        BOM 浏览器对象  负责  body  之外浏览器功能
     - document 
        DOM js  会跟DOM ‘交流’
     -  object 
        JS 的顶层对象
        new   Object()    {}简写  
        wan.__proto__(私有属性 原型)-> object ->null
    - js类
       - 大写的函数作为构造函数
           new+ this 完成由{}  空对象到构造完成的过程
           对象就有属性啦
       -  对象的方法呢?
           构造函数的prototype上
       wanwan  和Person  没有血原关系   女娃  和人  ?

         构造的过程当中   new Person   {}   object 空对象  
         Person.prototype {}
         - Person.prototype  原型
         - Object.prototype  原型
         
         - li.__proto__.__proto__.__proto__原型链
         - 原型的哪一栈有的办法，对象都可以用
         - JS 面向对象不是血缘，而是面向原型
         -函数，在运行的那一瞬间，this的值  就被决定了
            this  由函数的运行方式决定 事件的处理函数   this指向事件发生的元素本
         - this 是什么 ？
            - 指针  函数的需要
            - 定义的时候和执行的时候
         - 函数运行的时候被决定
            运行时以不同的方式来运行   ，值不一样  
         - 有规则
             - 普通函数运行  this   指向window顶级，没必要指的  不需要this  
             - 事件的处理函数运行，this 指向事件发生的元素  
             - 函数作为对象的方法被调用  this指向实例