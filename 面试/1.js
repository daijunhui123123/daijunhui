
// var a = 1
// function change(x) {
//     x = 3
// }
// change(a)
// console.log(a) // 打印结果  1
// 题目2
// var o = { a: 1 }
// function change(obj) {
//     o.a = 2
// }
// change(o) // 打印结果
// console.log(o.a) // 2
// // 题目3
// var o = { a: 1 }
// function change(obj) {
//     o.a = 2
//     o = { n: 3 }
//     o.a = 1
// }
// change(o)
// console.log(o.a) //    1
// var a = 5;
// (function () {
//     var a = 200
//     console.log(a)
//     a = 50
//     console.log(window.a)
//     var a = 100
//     console.log(a)
// })()

// function fn() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve()

//         }, 1000);
//     })
// }
// setTimeout(() => {
//     console.log(1)
// }, 1000);

// fn().then(() => {
//     console.log(1)
// })

// async function fn() {
//     const a = setTimeout(() => {
//         console.log(1)
//     })
//     console.log(a)
// }

// console.log(2)

// arr = [1, 2, 3, 5, 8, 7, 4, 5, 4, 7, 5]

// const a = [...new Set(arr)]

// console.log(a)//[1, 2, 3, 5, 8, 7, 4]
let arr = [1, 1, '2', 3, 1, 2,
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 1 } },
    { name: '张三', id: { n: 2 } },
]

// function quchong(arr) {
//     let res = []
//     for (let key of arr) {
//         for (let reskey of res) {
//             if ()
//         }
//     }
// }

// function equal(v1, v2) {
//     if ((typeof v1 === 'object' && v1 !== null) && (typeof v2 === 'object' && v2 !== null)) { // 都是引用类型
//         if (Object.keys(v1).length !== Object.keys(v2).length) return false
//         for (let key in v1) {
//             if (v2.hasOwnProperty(key)) {
//                 if (!equal(v1[key], v2[key])) return false
//             }
//         }
//     }

// }
for (let key in arr[6]) {
    console.log(key)
}