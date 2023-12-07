let arr = [2, 4, 6, 8, 10, 3, 1, 5, 7, 9]

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && temp < arr[j]) {
            找到temp能插队的位置
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}