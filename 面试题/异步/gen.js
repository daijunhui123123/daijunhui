function a() {
    setTimeout(() => {
        console.log("a");
    }, 1000);
}

function b() {
    console.log("b");
}


function b() {
    yield a()
}