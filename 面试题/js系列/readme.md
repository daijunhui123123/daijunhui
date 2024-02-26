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

[]==![]

