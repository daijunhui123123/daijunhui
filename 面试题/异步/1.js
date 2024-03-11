function a(cb) {
    setTimeout(() => {
        console.log("a");
        cb()
    }, 1000)
}

function b() {
    console.log("b");
}

a(b)
