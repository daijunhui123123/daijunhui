var a = 1
function foo() {
    console.log(this.a)
}
foo() //  1   函数在哪里调用  this指向哪里

function bar() {  //bar 的词法作用域是window  
    var a = 2
    foo()   // foo是在bar的作用域中调用  ，但是此时必须要知道bar 的词法作用域
}
bar()  //



var b = 2 