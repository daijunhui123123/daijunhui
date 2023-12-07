let arr = [2, 4, 6, 8, 10, 3, 1, 5, 7, 9]
// 找到 （选择）原数组区间中的最小值，放到当前数组的最前放，在缩小区间






function selectSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex != i) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

