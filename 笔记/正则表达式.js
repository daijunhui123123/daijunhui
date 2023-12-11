// /[]/   正则表达式  
// let  reg = /[0-9]/;  去这里面的某一个
// let  reg = /[0-9]{11}/;   取11位
let phone = "13812345678";
let reg = /[0-9]{11}/;
console.log(reg.test(phone));// true 
Object.prototype.toString.call(reg)