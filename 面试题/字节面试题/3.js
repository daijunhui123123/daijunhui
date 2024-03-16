// let arr = [1, 1, '2', 3, 1, 2, { name: xiaoming, id: { id: 1 } }
//     , { name: xiaoming, id: { id: 1 } }
// ]


// // let arr = [1, 1, 3, 1, 2]

// // let newArr = [...new Set(arr)]//  根据  ===来判断

// // console.log(newArr)


// // let arr2 = arr.map(item => {
// //     return JSON.stringify(item)
// // })

// // let newArr2 = new Set(arr2)
// // let newArr3 = [...newArr2].map(item => {
// //     return JSON.parse(item)
// // })

// // function unique(arr) {
// //     let newArr = []
// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = i + 1; j < newArr.length - i; j++) {
// //             if (typeof arr[i] === 'object' ||
// //                 typeof arr[j] === 'object') {

// //             } else {
// //                 if (arr[i] === arr[j]) {
// //                     newArr.push(arr[j])
// //                     i++
// //                 }
// //             }
// //         }
// //     }
// // }


// // function uniqueObj(obj1, obj2) {

// // }

// function unique() {
//     let res = []
//     for (let item of arr) {
//         let isFind = false
//         for (let resItem of res) {
//             if (equals(item, resItem)) {

//             }
//         }
//     }
// }


// function equals(obj1, obj2) {
//     if (typeof obj1 === 'object' && typeof obj1 == null
//         && typeof obj2 === 'object' && typeof obj2 == null) {
//         if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//             return false
//         }
//         for (let key in obj1) {
//             if (obj2.hasOwnProperty(key)) {
//                 if (!equals(obj1[key], obj2[key])) {
//                     return false
//                 }
//             } else {
//                 return false
//             }
//         }
//         return true
//     } else {
//         return false
//     }
// }

let arr = [1, 1, '2', 3, 1, 2,
    { name: '张三', id: { n: 1 }, a: undefined },
    { name: '张三', id: { n: 1 }, a: undefined },
    { name: '张三', id: { n: 2 } },
]
// let newArr = [...new Set(arr)]  //  { name: '张三', id: {n: 1} } === { name: '张三', id: {n: 1} }
// console.log(newArr);


// let arr2 = arr.map((item) => {
//   return JSON.stringify(item);
// })
// let newArr = new Set(arr2);
// newArr = Array.from(newArr).map((item) => {
//   return JSON.parse(item)
// })
// console.log(newArr);

function uniqueArr(arr) {
    let res = []
    for (let item of arr) {
        let isFind = false

        for (let resItem in res) {
            if (equal(item, resItem)) {
                isFind = true
                break;
            }
        }

        if (!isFind) res.push(item);
    }
    return res
}

function equal(v1, v2) {
    if ((typeof v1 === 'object' && v1 !== null) && (typeof v2 === 'object' && v2 !== null)) { // 都是引用类型
        if (Object.keys(v1).length !== Object.keys(v2).length) return false

        for (let key in v1) {
            if (v2.hasOwnProperty(key)) {
                if (!equal(v1[key], v2[key])) {
                    return false
                }
            } else {
                return false
            }
        }
        return true
    } else {
        return v1 === v2
    }

}



console.log(uniqueArr(arr))