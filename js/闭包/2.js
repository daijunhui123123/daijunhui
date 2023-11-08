function foo() {
    var myName = '啊美';
    let test1 = 1;
    const test2 = 2;
    var innerBar = {
        getName: function () {
            console.log(test1);
            return myName
        },
        setName: function (newname) {
            myName = newname
        }
    }
    return innerBar
}
