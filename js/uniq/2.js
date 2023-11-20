// 引用uniq方法   引入1.js

const uniq = require('./1.js')
var result = uniq([1, 1, '1', '1'])
console.log(result)