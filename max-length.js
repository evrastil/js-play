const solution = (A) => {
    let sum = 0
    let max = 0

    const calculated = new Map()
    A.forEach((item, index) => {
        sum = sum + item
        if (sum > 0) {
            calculated.set(index, sum)
        } else if (sum < 0) {
            const temp = calculated.get(index - 1) + sum
            if (temp >= 0) {
                calculated.set(index, temp)
            }else{
                sum = 0
            }

        } else {
            calculated.set(index, sum)
        }

    })


    return max

}

A = [1, 0, -1, -1, 0, 1, 0, 0, -1, -1] //8 max length
console.log(solution(A))