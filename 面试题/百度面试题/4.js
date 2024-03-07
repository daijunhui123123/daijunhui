// 1 1 2 3 5 8 13 21

// function  fb(n){
//     if(n===1||n===2){
//         return 1;
//     }
//     return fb(n-1)+fb(n-2);
// }


//动态规划

function fb(n) {
    let arr = [];
    arr[1] = 1;
    arr[2] = 1;
    for (let i = 0; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
}

// 72题   