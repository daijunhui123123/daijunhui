let arr = [2, 4, 6, 8, 10, 3, 1, 5, 7, 9]

// arr.sort((a, b) => a - b)  //影响原数组，升排序

// arr.sort((a, b) => b - a)// 降序


// function bubbleSort(arr) {
//     const res = []
//     while (arr.length) {
//         let min = Math.min(...arr)
//         res.push(min)
//         arr.splice(arr.indexOf(min), 1)

//     }
//     return res
// }
// console.log(bubbleSort(arr));
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr.length - i - 1; j++)
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]]
                    = [arr[j + 1], arr[j]]
    return arr
}
