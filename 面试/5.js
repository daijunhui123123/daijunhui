let n = 90000000000000000
let m = 71542122// 定义两个数字

// function sum(num1, num2) {
//     a = num1.toString()
//     b = num2.toString()
//     let len = Math.max(num1.length, num1.length)
//     a = a.padStart(len, '0')
//     b = b.padStart(len, '0')
//     let result = ''
//     let carry = 0
//     for (let i = len - 1; i >= 0; i--) {
//         sum = Number(a[len - i]) + Number(b[len - i]) + c
//         carry = Math.floor(sum / 10)
//         result = result + (sum % 10)
//     }
//     if (carry) {
//         result = '1' + result
//     }

//     return Number(result)

// }
function sum(a, b) {
    a = a.toString()
    b = b.toString()
    console.log(a);

    const len = Math.max(a.length, b.length)
    a = a.padStart(len, '0')
    b = b.padStart(len, '0')

    let result = ''
    let carry = 0
    for (let i = len - 1; i >= 0; i--) {
        // a[i] b[i]  2   4
        const n = (+a[i]) + (+b[i]) + carry    // Number(a[i]) + Number(b[i])  18
        carry = Math.floor(n / 10)
        result = (n % 10) + result
    }
    if (carry) {
        result = '1' + result
    }

    return Number(result)
}

console.log(sum(n, m))