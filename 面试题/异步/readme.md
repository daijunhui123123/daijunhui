# 说说异步的发展史

1. 回调： 回调地狱（代码维护困难，排除错误困难）
 
   .then里面的俩个回调函数  第一个是resolve，第二个是reject 
2. Promise：   



3. generator：     

- 可以分段执行   可以暂停
- 可以知道是否执行完毕
- 可以控制每个阶段的返回值

4. async/await：====    promise + generator

- 原理： aysnc / await 的优雅性的原理现在可以自东的执行generator函数中的next
控制yield的释放，主要的实现方式就是递归调用 next，next的执行结果需要为一个promise当对象，next的递归调用
应该在上一个next执行结果的promise状态变更为fufillde后才递归，这样就能实现一个yeild后面的语句彻底执行出结果后才执行下一个，也就是执行下一个，也就是实现await的效果
