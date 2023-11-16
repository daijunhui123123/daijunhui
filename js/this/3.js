var obj = {
    a: 1
}
function foo() {
    console.log(this.a)// underfine
}
var obj = {
    a: 1,
    foo: foo
}
obj.foo()  //1

var obj2 = {
    a: 2,
    obj: obj
}

obj2.obj1.foo()// 