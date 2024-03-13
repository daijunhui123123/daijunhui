
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

