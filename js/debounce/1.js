// 函数  JS里函数是一等对象
// 大写 ,new运行 ==构造函数
function Person(name, age) {

    this.name = name;
    this.age = age;
    console.log(this)

}
// 类的方法  static  静态方法
Person.prototype.sayHello = function () {
    console.log('hellow')

}
//  new和typeof  都是一样的运算符  
// new 在函数前面 ，这个函数就是以构造函数执行
// 函数是可以执行的对象   执行栈
// 数组是可以迭代的对象
// let hu = Person('huzong', 18)
//  wanwan是Person为原型构造的
let wanwan = new Person('万总', 18)
// console.log(wanwan)
wanwan.sayHello();
console.log(Object.prototype.toString.call(wanwan))
console.log(wanwan.toString)
// console.log(wanwan.__proto__.__proto__.__proto__)
// console.log(typeof inputa) // 怎么反映它是DOM 对象？ 
console.log(Object.prototype.toString.call(inputa)) // [object HTMLInputElement]

