let arr = [1, 2, 3, 4, 5]


for (let item of arr) {
    console.log(item)   // 1 2 3 4 5   迭代器   
}

for (let item in arr) {
    console.log(item)   // 0 1 2 3 4   
}



let obj = {
    name: '张三',
    age: 18
}

for (let item in obj) {
    console.log(item)   // name age
}

for (let item of obj) {
    console.log(item)   // 报错
}