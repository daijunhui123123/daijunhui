const coinChange = function (coins, amunt) {
    const f = {};//f[11]
    f[0] = 0;
    for (let i = 1; i <= amunt; i++) {
        f[i] = Infinity
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)
            }
        }
    }
    if (f[amunt] === Infinity) {
        return -1
    }
    return f[amunt]
}





