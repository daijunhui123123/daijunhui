//  5！
function mul(n) {
    let res = 1;
    for (var i = 1; i <= n; i++) {
        res = res * i
    }
    return res
}


//mul(5)==5*mul(4)
function mul(n) {

    if (n === 1) {
        return 1
    }
    return n * mul(n - 1);
}

// 找规律  找出口