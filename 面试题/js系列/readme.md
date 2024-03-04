# 1. js数组上的方法
   1. 增加： push()  unshift() splice()  concat()
   2. 删除： pop()  shift()  splice()  slice()
   3. 改： reverse()反转   sort()排序
   4. 查： indexOf()  从左到右   lastIndexOf()  从右到左   找下表   include()  返回布尔值 寻找元素   
     find()  返回第一个满足条件的元素    
     arr.find((item,index,arr)=>{
        return  item >3
     })
    5. 转换 ： join()  将数组转换为字符串
    6. 迭代： forEach()   map()  filter()过滤    接受一个回调函数    some()  every()  返回布尔值
       oar.forEach((item,index,arr)=>{
           console.log(item)
       })
       oar.map((item,index,arr)=>{
           return  item * 2
       })
       oar.filter((item,index,arr)=>{
           return  item >3
       })
       oar.some((item,index,arr)=>{
           return  item >3

       })
     7. Array.from()  将伪数组转换为真数组
     8. Array.of()  将一组值转换为数组
    

#  2.js字符串上的方法
   1.增： concat()
   2. 删： slice()  substr()  substring()
   3. 改： replace()  replaceAll()    trim()  去空格左右  padStart()  padEnd()  填充
            toUpperCase()   字符串边大写       
            toLowerCase()   字符串变小写
   4. 查： indexOf()   lastIndexOf()       startsWith()   endsWith() 返回布尔值
   5. 转换： split()    将字符串转换为数组
   6. 迭代： for
   
# 3.谈谈js当中的类型转换机制
- 是什么：
js中有原始类型和引用类型：
- 原始类型：number string boolean symbol null undefined Bigint
- 引用类型：Object Function Array Date RegExp Map Set WeakMap WeakSet


通常开发过程中，会用到一些显示的类型转换的手段来完成逻辑开发
.....

在v8执行的过程当中还存在另一种类型转换  --- 隐式类型转换
通常发生在  比较运算符   和算数运算符
- 比较运算符： ==  ===  !=  !==  <  <=  >  >=   if while

- 算术运算符： + - *  / %



#   ==   和  === 的区别  

 第一个要发生隐式转换

 第二个  要判断值相等  还要判断类型相等


# 深浅拷贝的区别 ？ 如何实现深拷贝

深浅拷贝通常只针对引用类型

浅拷贝： 只拷贝一层对象，复制这一层对象中的原始值  ，如果这引用类型的话，就复制他的指针

Object.assign()  浅拷贝 concat()   slice()   [...arr]

深拷贝： 拷贝多层，每一层都进行复制，所有类型的属性值都会被复制，原对象的修改不会影响拷贝后的对象
    JSON.parse(JSON.stringify(obj))  ---无法处理循环引用  ，无法处理函数，undefined，symbol
    
# 闭包  
- 是什么 
什么是闭包： -当一个函数中的内部函数被拿到函数外部调用，又因为在js中内层作用域总是能访问外作用域的，
那么内部函数对外部函数中变量的引用集合称为 闭包 

- 有什么用
  1. 创建私有变量   （全局变量不易维护）
  2. 延长变量的生命周期
  3. 实现柯里化



  # 什么是柯里化

  - 是什么
  柯里化：将一个接受多个参数的函数转变成多个直接接受单一参数的函数



  #  说说你对作用域的理解


  - 是什么
  变量和函数能够生效的区域，这个区域叫作用域

- 有哪些
  1. 全局作用域
  2. 函数作用域
  3. 块级作用域   const  let    {}    
- 作用域链
  - 是什么
   作用域只能从内到外的访问，这种访问规则形成的链状关系我们称为作用链
- 词法作用域：  函数在定义的时候，就决定了他的词法作用域，词法作用域是静态的

# 说说你对原型的理解  

 - 是什么
 1. 显示原型指的是函数身上自带的prototype属性,通常可以将一些属性和方法添加在显示原型上，可供实例对象继承到
 2. 隐式原型__proto__是对象这种结构上的一个属性，其中包含了创建该对象时，隐式继承到的属性

 - 原型链:创建一个实例对象时，实例对象会自动的获取一个__proto__属性，属性值指向构造函数的显示原型prototype
      vhandler.__proto__ === Function.prototype
      vhandler.__proto__.__proto__ === Object.prototype
      Object.prototype.__proto__ === null

  - 牛哥原型链：创建一个实例对象时，实例对象的隐式原型===创建该对象的构造函数的显示原型，在js中对象的查找规则
   是先在对象中查找，找不到再去对象的隐式原型上查找 
  

 # 说说js中的继承  

  - 什么是继承： 在js中，让子类可以具有父类的属性和方法

  - 继承的分类
    1. 原型链继承： （1.无法给父类灵活传参    2.多个实例对象共用了同一个原型对象存在属性相互影响）
    2. 借用构造函数继承 （1. 只能继承到父类身上的属性，无法继承到父类原型上的方法）
    3. 组合继承（经典继承）：( 1.存在多次父类函数的调用，多造成了性能的损耗  2.无法实现函数复用，每个子类都有父类实例函数的副本，存在内存浪费)
    4. 原型式继承  :(因为浅拷贝，父类中的引用类型在子类之间公用了，会相互影响   2，无法给子类添加默认属性)
    5. 寄生式继承  ：1.同上
    6. 寄生组合式继承
    7. class类继承






