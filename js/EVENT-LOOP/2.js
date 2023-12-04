console.log(1);//1  3  2  4  5   6

setTimeout(() => {
    console.log(2);
    new Promise((resolve) => {
        console.log(4);
        resolve()
        setTimeout(() => {
            console.log(6);
        })
    }).then(() => {
        console.log(5);
    })
}, 1000)

console.log(3);