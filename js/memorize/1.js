function add(a, b) {
    const arr = Array.from(arguments)//  或者  console.log([...arguments])
    // 参数数量？ this  arguments 
    console.log(a, b, arguments[0], arguments[1])//arguments函数参数对象
    // // console.log(arguments.join('--'))   不能打印
    // console.log(typeof arguments, Object.prototype.toString.call(arguments))//   1 2 1 2 object  [object Arguments]
    console.log(Array.prototype.join.call(arguments, '-'))//  1-2
    console.log(typeof arguments, Object.prototype.toString.call(arr))//object [object Arguments] object [object Array]3
    // // var c 
    if (arguments.length != 2) {
        throw new Error('必须传递两个参数')
    }
    return a + b
}
try {
    console.log(add(1, 2));
} catch (e) {
    console.log(e)
}
console.log('continue....')
// console.log(add(1, 2, 3))