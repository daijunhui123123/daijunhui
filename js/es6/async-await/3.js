function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("李裕民相亲")
            resolve()
        }, 2000)
    })
}
function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("李裕民结婚啦")
            resolve()
        }, 1000)

    }
    )
}
function baby() {
    console.log("李裕民生下三个孩子")
}

async function foo() {
    // return new Promise((resolve, reject) => {}
    await xq() // await ===.then
    await marry()
    baby()
}
foo()