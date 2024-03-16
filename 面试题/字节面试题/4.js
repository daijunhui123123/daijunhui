// Object.prototype[Symbol, iterator] = function () {
//     return Object.values(this)[Symbol.iterator]
// } // "[object Array]"

// var [a, b] = { a: 1, b: 2 }





// // iterable
// // {
// //     let iterator = iterable[Symbol.iterator]();
// //       return {
// //            迭代器(可用通过next() 就能读到值的对象)
// //       }
// // }


function* generator() {

}

let generator = generator();  // 迭代器  

generator.next();  //  可以拿到每个阶段的值  