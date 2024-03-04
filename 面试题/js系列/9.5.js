parent.prototype.say = 'hello'
function Parent() {
    this.name = 'parent'
}// this 指向window    词法作用域在  全局

Child.prototype = new Parent() = Object.create(parent.prototype)  // {__proto:Parent.}
child.prototype.constructor = Child  // 修正constructor
function Child() {
    parent.call(this)  // this 指向c
    this.type = 'child'
}


let c1 = new Child()