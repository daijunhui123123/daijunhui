Parent.prototype.say = 'hello'
function Parent() {
    this.name = 'parent'
}// this 指向window    词法作用域在  全局

Child.prototype = new Parent()  // this 指向c
function Child() {
    Parent.call(this)  // this 指向c
    this.type = 'child'
}

let c = new Child()

console.log(c.type); // child
console.log(c.name); // undefined