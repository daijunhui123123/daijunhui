var obj = {
    name: "John",
}


function foo() {
    console.log(this.name); //this指向obj
}


foo.call(obj); //输出John


Function.prototype.myCall = function (arguments) {
    //让调用的foo触发隐式绑定
    // this   arguments[0]   [...arguments].slice(1
    let obj = arguments[0]
    let arg = [...arguments].slice(1)

}