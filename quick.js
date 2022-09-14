/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length-1) {
    let pivotVal = arr[start]
    let pivotIdx = start
    for (let i = start + 1; i <= end; i++) {
        if (pivotVal > arr[i]) {
            pivotIdx++
            if (pivotIdx !== i) {
                [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]]
            }
        }
    }

    if (pivotIdx !== start) {
        [arr[pivotIdx], arr[start]] = [arr[start], arr[pivotIdx]]
    }
    
    return pivotIdx
}



/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, start = 0, end = arr.length-1) {
    if (start >= end) return arr

    let idx = pivot(arr, start, end)

    quickSort(arr, start, idx - 1)
    quickSort(arr, idx + 1, end)
    return arr
}

module.exports = {pivot, quickSort};