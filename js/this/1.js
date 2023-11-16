// let obj = {
//     name: '程总',
//     say: function () {
//         console.log(this.name)
//     }
// }
// obj.say()//  程总

// function foo() {
//     var a = 1;
//     console.log(foo.a)
// }
// foo()// underfine
function identify() {
    return this.name.toUpperCase()
}
function speek() {
    var greeing = "Hello,i'm " + identify(this)
    console.log(greeing)
}
var me = {
    name: 'tom'
}
speek.call(me)

let obj = {
    this: this,
}  