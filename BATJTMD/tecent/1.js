// 函数要注意什么？
//编写一个 函数，返回一个美国座机格式的电话号码（123） 4567-890
//输入的数字数组
//输入是数字数组【1，2，3，4，5，6，7，8，9】
//不要急于写功能，先写注释
//大厂的可读性升值比功能重要一个等级  不用读代码，看完注释就可以拿来用
//  10w人 5w+合作
/* 
*  @func  返回美国格式的座机号码
* @param {Array}  nums[123456789] 电话号码
* @return {string} (123)456-789
* @author  djh 2023/10/31
*/
function createPhoneNumber(nums) {
    return "(" + nums[0] + nums[1] + nums[2] + ")"
        + nums[3] + nums[4] + nums[5] + "-"
        + nums[6] + nums[7] + nums[8] + nums[9]
}










//js 里的函数还能怎么写？ es6+语法
//const createrPhoneNumber =(nums)  =>{} 
/* let createPhoneNumber // undefined 类型未定义  let 声明了undefined的变量
createPhoneNumber = function (nums) { // 函数表达式来定义一个函数
    return "(" + nums[0] + nums[1] + nums[2]
        + ")" + nums[3] + nums[4] + nums[5]
        + "-" + nums[6] + nums[7] + nums[8] + nums[9]
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) */
//箭头函数 es6 简介的函数
let createPhoneNumber // undefined 类型未定义  let 声明了undefined的变量
createPhoneNumber = (nums) => { // 函数表达式来定义一个函数
    return "(" + nums[0] + nums[1] + nums[2]
        + ")" + nums[3] + nums[4] + nums[5]
        + "-" + nums[6] + nums[7] + nums[8] + nums[9]
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])// 箭头函数
//简介的箭头函数  es6  funtion可以省略 代码体只有返回值  可以省略return
const createPhoneNumber = (nums) =>
    "(" + nums[0] + nums[1] + nums[2]
    + ")" + nums[3] + nums[4] + nums[5]
    + "-" + nums[6] + nums[7] + nums[8] + nums[9]
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// 还有别的实现
