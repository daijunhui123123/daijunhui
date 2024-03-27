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


# 说说js中的this

- 是什么
  - this是函数在运行过程中自动生成的一个对象，用来代指作用域   

  绑定规则
  1. 默认绑定   （当函数被独立调用时，函数的this 指向window）  或者函数的词法作用域在哪里，this就指向那个词法作用域
  2. 隐式绑定    当函数被某个对象调用时，函数中的this指向那个对象
  3. 隐式丢失：  当函数调用前有个对象，函数的this指向就近的对象 
  4. 显示绑定：  call，apply，bind返回函数体  
  5. new绑定：  当函数通过new调用时，函数中的this指向new出来的实例对象


  - 箭头函数：箭头函数中的this是他外层非箭头函数的，指向也按照上述的绑定规则


  # new的实现原理 
- 创建一个空对象
  - 设置空对象的__proto__属性为构造函数的prototype
  - 改变构造函数的this指向空对象
  - 执行构造函数的代码
  - 返回空对象
 - 构造函数有返回值，且为引用类型时会覆盖new当中的函数


# 手写call，apply，bind    



# 说说事件模型  
   -什么事件流： 事件流描述的是从页面中接收事件的顺序
   - 事件冒泡： 事件开始由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）
   - 事件捕获： 事件开始由不太具体的节点先接收，而最具体的节点最后接收事件
   - DOM

1. DOM0级    onclick (无法控制事件在捕获冒泡哪一个阶段触发)
2. DOM1级    addeventlistener(第三个参数为布尔值，true为捕获阶段，false为冒泡阶段)
3. IE模型     attachEvent (无法控制事件在捕获冒泡哪一个阶段触发)
  
# 说说typeof和instanceof的区别

- typeof
   能判断除了null之外的数据类型   


- instanceof
能判断一个变量是够属于某个类型，是通过原型链来判断的    

- object.prototype.toString.call(xxx)

1. [].tostring.call(xxx) 


- Array.isArray(xxx)  


#  说说Ajax的原理  
   - 是什么
   Async Javascript  and    XML (异步的JavaScript和XML),是一种异步js和网页交互的技术，可以实现不刷新就跟服务器端进行数据交互，减少用户等待时间，提高用户体验


   - 怎么用
   1. 创建XMLHttpRequest对象
   2. 调用实例对象上的open方法与服务器建立连接
   3. 调用实例对象上的send方法发送请求
   4. 监听实例对象上的readystatechange事件，通过判断readyState的值来确定请求的状态
   5. 将数据更新到页面  

#  这么实现上拉加载下拉刷新
   三方库   BetterScroll
   vant    
   1. 监听  touchstart   touchmove   touchend   事件，记录手指移动的距离，大于临界值时实现，刷新操作，其中使用transform:translateY(0)实现  


# 防抖节流  
    

# 19 事件代理  

- 事件委托  （多个子容器需要绑定相同的事件）


# 说说js的事件循环  
   - 什么是事件循环

   js在引擎在执行js放入过程中会区分同布代码和异步代码，先执行同步在执行异步代码，异步中同样按照先执行同步在
   执行异步的策列，以此往复的循环  

 - 异步  
    1. 宏任务   script  setTimeout   setInterval   I/O（node里面的）  UI渲染   setImmediate   UI-rendering   
            postMassage   MessageChannel
    2. 微任务  .then nexTick（node里面的）  MutationObserver（浏览器里面的,监听一个dom结构是否修改）  


   - Event-Loop
   1. 执行同步代码  （也叫宏任务）
   2. 执行微任务   （完毕）
   3. 有需要的话  就渲染页面   
   4. 执行宏任务（下一次执行开始）   
 

# 0.1+0.2 不等于 0.3


IEEE754 标准   

1. 单精 确度  32位
2. 双精 确度  64位
3. 延申单精确度  
3. 延申双精确度


所有内容在转换为二进制后，去有效长度为64位








