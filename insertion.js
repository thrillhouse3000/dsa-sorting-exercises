function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let el = arr[i]
        let j = i - 1
        while((j > -1) && (el < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = el
    }
    return arr
}

module.exports = insertionSort;