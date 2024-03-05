// var name = 'Tom'
// var obj = {
//   name: 'John'
// }

// function foo() {
//   console.log(this.name);
// }

// function bar() {
//   var name = 'Jerry'
//   foo()
// }

// function baz() {
//   bar()
// }

// baz.call(obj)    //   TOM


var name = 'Tom'
var obj = {
    name: 'John',
    foo: foo
}
function foo() {
    console.log(this.name);
}
obj.foo()    // John    当对象调用函数是 

var obj2 = {
    name: 'Jerry',
    obj
}
var obj = {
    name: 'John',
    foo: foo
}
function foo() {
    console.log(this.name);
}
obj2.obj.foo()    // 存在隐式绑定丢失    这个this指向obj



var obj = {
    name: 'Tom',

}
function foo() {
    console.log(this.name);
}

foo.call(obj)  //  显示绑定   




var name = 'Tom'
function foo() {
    var name = 'Jerry'
    const baz = () => {
        console.log(this.name);
    }
    baz()
}

foo() //  箭头函数的this指向定义时的this

