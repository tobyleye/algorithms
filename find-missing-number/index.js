function findMissing(array) {
    let factorialButForSum = (n) => {
        let result = 0
        for (let i=0; i<=n; i++) {
            result += i
        }
        return result
    }

    let max = -1
    let total = 0

    for (let num of array) {
        if (num > max) {
            max = num
        }
        total += num
    }

    let supposedTotal = factorialButForSum(max)
    
    return supposedTotal - total
}

console.log(
    findMissing([8, 2, 3, 9, 4, 7, 5, 0, 6])
)

console.log(
    findMissing([2, 3, 0, 6, 1, 5])
)