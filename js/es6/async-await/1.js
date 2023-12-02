function a(cd) {
    setTimeout(() => {
        console.log("hello")
        cd()
    }, 1000)
}
function b() {
    // setTimeout(() => {
    //     console.log("nihao")
    // }, 500)
    console.log("nihao")
}

a(b)

