- 函数式编程
   - sort 函数 操作有副作用，影响原数组
   - sortArr函数，会修改外界传进来的实惨nums，多人协作时，可能带来外界的误解
       在编写函数时， 不要写这种函数  我们要写纯函数
         function SortArr(arr) {
            return arr.sort();
           }
- 写函数前   cover覆盖 99%的case  
- 浅拷贝  
   数组是对象 是引用式赋值
   arr.concat()返回的是全新的数组
- 数组渲染ul 列表
    - 使用map   ，将数组的数据数组变为li  字符串数组
       es6 数组的新方法  ，不会影响原来的数组  返回全新的数组
       遍历数组的每一项  执行一个callback ，返回值就是一个新数组每一项的值
    - join('')li 的拼接字符串   
    - innerHTML  =   






