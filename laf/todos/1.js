// 函数修饰符  函数内部有异步函数   es7
(async function () {
    // js 是单线程    当遇到 某些进程是  把他们放在event   loop  先执行后面的代码
    //  thenable  异步任务中控制执行顺序
    // fetch('https://kzjpkg.laf.run/get-list')
    //     .then(res => res.json())//回来数据  变成json包
    //     .then(
    //         data => {
    //             console.log(data)
    // console.log('end')
    //         }
    //     )
    // 异步变同步 ，有利于流程控制
    const res = await fetch('https://kzjpkg.laf.run/get-list')
    const { data } = await res.json()
    console.log(data)
})

// 为啥 用fetch   以为网页时个高效的 http协议时一个  为了性能