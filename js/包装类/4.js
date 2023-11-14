// var obj={};
// Object.a=1;



var num = 123
num.a = 'hello';
console.log(num.a)//underfine

//其他的基本数值都有构造函数
//  下面代码 视为v8引擎自身 解释  var num = 123
num.a = 'hello';
// var num = new Number(123)// String()   Number()  Boolean()  Object()  Arry()  内置函数
// //console.log(num*2)//246
// num.a = 'hello';
// delete num.a
// console.log(num)//  


var num = 4;
num.len = 3

// new Number(4).len=  3   delete

console.log(num.len)


//考点  
var Arry = [1, 2, 3, 4]
Arry.length = 2;
console.log(Arry)//[1,2]


var str = 'abcd';
str.length = 2;
//  new String('abcd').length=2  delete

console.log(str.length)//4

//  new String('abcd').length



//function String(s){
//this.length
//}

