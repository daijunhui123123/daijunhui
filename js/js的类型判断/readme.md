# typeof 
1. 可以准确的判断除null之外的原始数据类型
2. 可以判断 function



# instanceof
1. 只能判断引用类型
2. 通过原型链查找方式来判断的

# Object.prototype.tostring

1. 如果this 值未定义，则返回“ [object Undefined] ”。

2. 如果this 值为null，则返回“ [object Null] ”。

3. 令 O为调用ToObject并传递this值作为参数的结果。

4. 令 class为O的 [[Class]] 内部属性的值。

5. 返回由三个字符串“ [object ”、 class和“ ] ”连接而成的字符串值。

- XXX.call(原始数据类型)   为社么不报错？？

- toString 通过读取数据结构内部属性来读取   



 

数组独有的方法
Array.isArray()

 const arr=[]
    arr.isArray()  错误的方法






