function foo() {
    let a = 1
    let b = 2
    function bar() {
        console.log(a)
    }
    return bar
}

let x = foo()
x() // 1



// 闭包的作用    唱见私有变量
function fn() {
    let count = 0
    function foo() {
        count++
    }
    function bar() {
        count++
    }
    return { foo, bar }
}
let { foo, bar } = fn()
foo()
bar()
