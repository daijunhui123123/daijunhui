Car.prototype.name = 'BMW';
Car.prototype.height = 1400;
Car.prototype.long = 4900;//  或者写成一个对象
// Car.prototype= {
//     name = 'BMW'，
//     height = 1400，
//     long = 4900，
// }
function Car(name, color) {
    // this.name = 'BMW';
    // this.height = 1400;
    // this.long = 4900;
    this.name = name;
    this.color = color;
}

let car = new Car('李总', '红色');
let car2 = new Car('戴总', '红色');
console.log(car)