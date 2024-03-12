async function myAsyncFunction() {
    // 
    try {
        const result = await someAsyncFunction();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}