let obj = {
    a: 1,
    b: undefined,
    c: {
        n: 2
    }
}


function hasProperty(obj, key) {
    return Object.keys(obj).includes(key)

}

// console.log(hasProperty(obj, 'a')) // true
// let n = obj.a

// Object.defineProperty(obj, 'd', {
//     get() {
//         return n
//     },  //获取值
//     set(newval) {
//         n = newval
//     },//  设置值
//     value: 100, // 属性的初始值
//     //  readonly: true, // 控制属性的值是否可以被修改，默认为 false。3
//     writable: true, // 控制属性的值是否可以被修改，默认为 false。
//     enumerable: true, // 控制属性是否可以被枚举（使用for...in或Object.keys()）。
//     configurable: true, // 控制属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改。
//     // value: 10, // 属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
//     // writable: true // 控制属性的值是否可以被修改，默认为 false。
// })


// function hasProperty(obj, key) {
//     // return obj.hasOwnProperty(key)  //只能判断显示具有的

//     return key in obj  // 判断对象是否具有该属性
// }

