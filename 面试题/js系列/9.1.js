


function Parent() {
    this.name = 'parent'
}// this 指向window    词法作用域在  全局


function Child() {
    Parent.call(this)    //  this.name='parent'
    this.type = 'child'
}



let c = new Child()