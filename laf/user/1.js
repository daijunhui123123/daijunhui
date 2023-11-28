function sleep(t) {

    const p = new Promise((resolve) => {

        setTimeout(() => {

            resolve('promise返回的hello world')
        }, t);

    })
    return p
}
// // 异步通过promis 的then变成了同步
sleep(1000).then((msg) => {
    console.log(msg, '-------')
})
// 返回一个promise

// console.log('hello')
// ( function () {
//     // 耗时任务      prosime的实例
//     fetch('https://kzjpkg.laf.run/get-list')
//         .then(res = res.json())
//         .then(data => {
//             console.log(data)
//         }
//         )

// })()
//函数修饰符   函数内部有异步  es7
// 声明这个函数里面有异步
// async  + await  配套使用
// (async function () {

//     //  await 后面跟一个promise实例， 同步等待被   resolve
//     //  代码的编写顺序==执行顺序
//     const res = await fetch('https://kzjpkg.laf.run/get-list')
//     const { data } = await res.json()
//     console.log(data)

// })()
