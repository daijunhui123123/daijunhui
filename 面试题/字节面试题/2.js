let n = 90000000000000000
let m = 71542122// 定义两个数字



// function sum(a, b) {
//     a = a.toString()
//     b = b.toString()
//     const len = a.length > b.length ? a.length : b.length
//     a = a.padStart(len, '0')
//     b = b.padStart(len, '0')
//     let carry = 0
//     let sum = ''
//     for (let i = len - 1; i >= 0; i--) {
//         const temp = Number(a[i]) + Number(b[i]) + carry
//         carry = Math.floor(temp / 10)
//         sum = (temp % 10) + sum
//     }
//     if (carry > 0) {
//         sum = carry + sum
//     }
//     return Number(sum)
// }
function sum(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    let result = '';
    let carry = 0;
    let maxLength = Math.max(num1.length, num2.length);
    for (let i = 1; i <= maxLength; i++) {
        const digit1 = parseInt(num1[num1.length - i] || 0);
        const digit2 = parseInt(num2[num2.length - i] || 0);
        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}


sum(n, m)
console.log(sum(n, m))

