// function Car(name) {
//     this.name = name
// }

// Car.prototype.run = function(){}
// let Car = new Car('BMW')


class Car {
    constructor(name) {// 构造器
        this.name = name
    }
    run() {
        console.log(this.name + ' is running');
    }// 在函数的显示原型上
    static sell() {
        console.log('Car is selling');
    }// 在函数对象上的方法








}
let Car = new Car('BMW')
console.log(Car.name);