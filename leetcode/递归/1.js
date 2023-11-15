var arr = [1, [2, [3, 4]]]//[1,2,3,4]

// for(var i=0;i<arr.length;i++){
//     let res=[];
//     if(!Array.isArray(arr[i])){
//         res.push(arr[i])
//     }else
//     {
//         let item=arr[i];


//         }
//     }
// }


// arr.flat()  内置函数  使数值扁平化  ;（）括号里的数值表示 变几数组

var newArry = arr.flat(3);
console.log(newArry)   //  newArry[1,2,3,4]
var newArry = arr.flat(Infinity);// 直接可以写  无论多少个维数组
console.log(newArry)////  newArry[1,2,3,4]



// function flaten(arr) {
//     let res = []
//     for (var i = 0; i < arr.length; i++) {
//         if (!Array.isArray(arr[i])) {
//             let newArry=flaten(arr[i])//  无限套娃  
//         res=res.concat(newArry)
//         } else {
//            res= res.push(arr[i])
//         }
//     }
//     return  res
// }
let res = []
function flaten(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            flaten(arr[i])//  无限套娃  

        } else {
            res = res.push(arr[i])
        }
    }
    return res
}


flaten(arr)