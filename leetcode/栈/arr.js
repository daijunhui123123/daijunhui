// var arr =[1,2,3,5]

// arr.push(4)
// arr.pop()
// arr.unshift(4)
// arr.shift()
// //arr.splice(1,1)
//  arr.slice(1,3)//下表1到3 但是不包括下表3   但是不修改元素组


// var arr = new arr(4);//四个空数组

// var arr = [1, 2, 3, 4]   只是提供过程 但是  
// arr.forEach(function (item, index, arr) {
//     arr[index] = item + '1'
// })
console.log(arr)

arr.map(function (item, index, arr) {
    return item + '1'
})//提供一个新数组