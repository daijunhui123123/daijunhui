//   function foo()  {}
var foo = function () {

}// 函数表达式  
var foo = () => {
    console.log(123)
}
foo()

var bar = function () {
    console.log(this.a)
}
var foo = () => {
    console.log(this.a)
}
var obj = {
    a: 1
}







