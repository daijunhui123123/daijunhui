function Car(name, speed) {
    this.color = color
    this.speed = speed
    this.seat = ['1', '2']
}

Truck.prototype = new Car()

function Truck() {
    this.container = true
}

let truck = new Truck() // 原型链继承  

let truck2 = new Truck()

truck.seat.push('1')


