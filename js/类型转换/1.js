// if (1) {
//     // console.log("hello ")
// }
// let arr = [1, 2, 3, 4, 5, 6]
console.log(Boolean())//false
console.log(Boolean('123'))
console.log(Boolean(''))//false
console.log(Boolean(0))
console.log(Boolean(null))//false
console.log(Boolean(undefined))//false
console.log(Boolean(NaN))// false

console.log(Number(false));//0
console.log(Number(true))//1
console.log(Number('123')) //123
console.log(Number('hallo')) //NaN
console.log(Number(undefined))// NaN

console.log(String())//''
console.log(String(123))//'123'


console.log(Object('hello'))// String{'hello'}
console.log(Object('underfined'))// {}
console.log(Object('null'))// {}