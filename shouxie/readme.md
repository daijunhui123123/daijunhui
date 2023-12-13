- 我们的一个ajax 的异步获取数据的任务

- 写一个函数并且返回promise实例 可以thenable 可以await

- promise实例初始状态为pending  this.state = 'pending'   
    await p  就是一直等待  

- promise   构造函数中回立即执行传给他的执行器，也就是第一给函数  
   得到resolve 和 reject 函数 
   执行器就是异步窗口的容器  当异步任务结束后 ，成功就调用resolve（data） 失败就调用reject
     
       this.state fulfilled | rejected
    await 执行完成，并把data交给左边 接着返回正确的同步流程