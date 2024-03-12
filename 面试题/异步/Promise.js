// class myPromise {
//     constructor(executor) {
//         this.status = "pending"// fulifilled    rejected
//         this.value = undefined
//         this.reason = undefined
//         this.unFulfilledCallback = []
//         this.onRejctedCallback = []
//         const resolve = (value) => {
//             if (this.status === "pending") {
//                 this.status = "fulifilled"
//                 this.value = value
//                 // then的回调
//                 this.unFulfilledCallback.forEach(callback => callback(value))
//             }

//         }

//         const reject = (reason) => {
//             if (this.status === "pending") {
//                 this.status = "rejected"
//                 this.reason = reason
//                 this.onRejctedCallback.forEach(callback => callback(reason))
//             }

//         }
//         executor(resolve, reject) // executor 执行器  是参数
//     }

//     then(onFulfilled, onRejected) {
//         onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value
//         onRejected = typeof onRejected === "function" ? onRejected : reason => { throw reason }
//         const newPromise = new myPromise((resolve, reject) => {
//             //        
//         }
//         )
//     }
// }

const a = 1

function async1() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log(3)
            resolve(2)



        }, 1000)
    })
}

async1().then((res) => {
    console.log(res)
})








