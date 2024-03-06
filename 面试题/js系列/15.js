//  手写 instanceof
function instanceOf(left, right) {
    let prototype = right.prototype
    left = left.__proto__
    while (prototype !== right) {
        if (left === null) return false
        left = left.__proto__
    }

    return true
}
let c = []

console.log(instanceOf(c, Array))  //  true  c.__proto___===Array.prototype
console.log(instanceOf(c, Object))  //  true    c.__proto___.__proto___===Array.prototype
