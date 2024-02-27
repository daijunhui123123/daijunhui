Object.prototype.abc = 123
let obj = {   //  new Object()     obj.__proto==Object.prototype
    a: 1,
    b: 2
}

// for (let key in obj) {
//     console.log(key, obj[key])
//     //a 1
//     //b 2
//     //abc 123
// }


// console.log(obj.hasOwnProperty('abc'))  //obj.hasOwnProperty(key) 则只会寻找对象自身的属性(不包括原型链)。



//  let  newObj= Object

