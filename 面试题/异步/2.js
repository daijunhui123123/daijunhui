function a(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("a");
            cb()
            // resolve()
            reject()
        }, 1000)
    })

}

function b() {
    console.log("b");
}

a().then(b)//  a().then(()=>{
// function b() {
// console.log("b");
//       }
// })

a().then(
    () => {
        b()
    },
    // (err)=>{
    //    console.log(err)   打印  err   .then 里面第一个回调时resolve（）   第二个是 reject（）===.catch
    // }
)



//   resolve  reject 这俩个状态不会改变   

