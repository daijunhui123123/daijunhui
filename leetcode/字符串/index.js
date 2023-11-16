let str = 'hello'
console.log(str[1])//  e
console.log(str.at(1))// e


// 字符串反转  
for (let i = str.length - 1; i >= 0; i--) {
    res += str[i]
}
console.log(res)// olleh

// 数组的反转  
let arr = [1, 2, 3, 4]
// arr.reverse()
// console.log(arr)//[4,3,2,1]

// const arry = str.split('')// ['h','e','l','l','o'] 字符串转变为数组 
// arr.reverse()  //   会改变原数组

// console.log(arr.join('')) //join 数组变成字符串
const s = arr.split('').reverse().join('')
console.log(s)


