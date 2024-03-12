// function* fn() {
//     let a = 1
//     console.log(a)
// }
// console.log(fn())//Object [Generator] {}



// function* fn() {
//     yield 'a'  // 暂停
// }
// let gen = fn()   //   fn的结果的到一个指向内部状态的指针对象

// console.log(gen.next())//{ value: 'a', done: false }

// console.log(gen.next())  //{ value: undefined, done: true }

// function* fn() {
//     yield 'a'
//     yield 'b'
//     yield 'c'
//     return 'ending'
//     yield 'd'

// }
// let gen = fn()   //   fn的结果的到一个指向内部状态的指针对象
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())//{ value: undefined, done: true }
// // { value: 'a', done: false }
// // { value: 'b', done: false }
// // { value: 'c', done: false }
// // { value: 'ending', done: true }



// function* fn() {
//     var a = 1
//     yield a++
//     yield a++
//     yield a++
//     yield a++
// }

// const gen = fn()
// console.log(gen.next())  //{ value: 1, done: false }
// console.log(gen.next())  //{ value: 2, done: false }
// console.log(gen.next())  //{ value: 3, done: false }
// console.log(gen.next())  //{ value: 4, done: false }
// console.log(gen.next())  //{ value: undefined, done: false    n }



// function* fn() {
//     var o = 1
//     var a = y
// }