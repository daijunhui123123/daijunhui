# 基本数据类型之间的转换
转布尔
转数字
转字符串
转对象
## 对象转原始类型 obj.toString() 
   ### obj.valueOf()
   只对包装类类型有效
  对象转布尔都为false
toString() 在js中有多个版本:

 1. {}.toString() // "[object class]"
 2. 数组的toString()会将数组中的所有元素转化成字符串并以逗号拼接
 3. 函数的toString()会将整个函数体以字符串形式返回
 4. Date的toString()会将整个date以字符串形式返回
 5. 
 对象转字符串 ToPrimitive(obj, String)
   判断obj是基本类型，则返回
  否则 调用 toString 方法，如果得到原始类型，则返回
  否则 调用 valueOf 方法，如果得到原始类型，则返回
  否则 报类型错误
对象转数字 ToPrimitive(obj, Number)
判断obj是基本类型，则返回
否则 调用 valueOf 方法，如果得到原始类型，则返回
否则 调用 toString 方法，如果得到原始类型，则返回
否则 报类型错误
# 一元运算符 +   +‘1’===1
# 二元运算符 +
lprim = ToPrimitive(v1) rprim = ToPrimitive(v2)

v1 + v2 === lprim + rprim

如果 lprim 是字符串 或者 rprim 是字符串，则返回将不是字符串的一方转为字符串，再进行拼接
否则 都转成number 进行加法运算
== 相等  发生隐式类型转换    ===不发生隐式类型转换
x == y


js原始类型转换表