# js是异步执行  



# 回调函数 
 - 回调地狱：代码维护困难，可读性差，复用性差，可扩展性差，可测试性差


 # promise  
 1. promise 实例对象后面可以接.then()方法   then中的回调的执行取决于promise的中的reslove有没有生效
 2. resolve（参数）参数会传递给then中的回调函数
 3. then方法会默认返回promise对象，所以then中返回的promise对象作为唯一的返回值，那么then2就相当于接在认为返回的          promise对象后

 # async await
 1. async 函数返回一个promise对象 
 2. await 后面跟一个promise对象，await会等待promise对象的状态改变，才会继续向下执行