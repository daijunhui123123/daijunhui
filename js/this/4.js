// function foo() {
//     console.log(this.a)
// }
// var obj = {
//     a: 1
// }
// foo.call(obj)//   a:1  /显示绑定
// foo.apply(obj) //
// let bar = foo.bind(obj)
// bar()  // 会
// function foo(x, y) {
//     console.log(this.a, x + y)
// }
// var obj = {
//     a: 1
// }
// foo.call(obj, 4, 5)
// foo.apply(obj, [4, 5])  用数组传参数
// let bar = foo.bind(obj, 4, 5)   // bar(4,5)===bar()
