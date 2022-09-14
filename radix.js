function getDigit(num, digit) {
    let numStr = num.toString()
    if (digit >= numStr.length) return 0
    let res = numStr[numStr.length-digit-1]
    return parseInt(res)
}

function digitCount(num) {
    let numStr = num.toString()
    return numStr.length
}

function mostDigits(arr) {
    let maxDigits = 0
    for (let num of arr) {
        maxDigits = Math.max(maxDigits, digitCount(num))
    }
    return maxDigits
}

function radixSort() {

}

module.exports = {radixSort, getDigit, digitCount, mostDigits};