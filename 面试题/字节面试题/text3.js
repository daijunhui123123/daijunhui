function timeout(ms, num) {
    setTimeout(() => {
        console.log(num + '号任务执行')
    }, ms)
}

function promiseTimeout() {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

promiseTimeout().then(() => {
    timeout(10000, 1)
}).then(() => {
    timeout(6000, 2)
}).then(() => {
    timeout(5000, 3)
})

// timeout(10000, 1)
// timeout(1000, 2)
// timeout(5000, 3)






// function promiseTimeout(ms, num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num + '号任务执行')
//         }, ms)
//     })
// }

// promiseTimeout(1000, 1).then((res) => {
//     console.log(res)
// }).then(() => {
//     console.log('第二个任务执行')
// })
// promiseTimeout(5000, 2).then((res) => {
//     console.log(res)
// })
// promiseTimeout(1000, 3).then((res) => {
//     console.log(res)
// })

