const cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15}
]

//infinite stock of item mean they can be reused to get the max val

const capacity = 20

const maxVal = (cakeTypes, capacity) => {
    const cakeBag = []
    for (let currWeightCapacity = 0; currWeightCapacity <= capacity; currWeightCapacity++) {
        let previousMaximum = 0
        cakeTypes.forEach((type) => {
            if (currWeightCapacity >= type.weight) {
                const numberOfCakesToBeUsed = Math.floor(currWeightCapacity / type.weight)
                const weightOfCakes = numberOfCakesToBeUsed * type.weight
                const unusedWeightAtCapacity = currWeightCapacity - weightOfCakes
                const totalValueOfCurrentlyUsedCake = type.value * numberOfCakesToBeUsed
                const tryFillRemainingWeightWithValueFromUnusedCapacity = cakeBag[unusedWeightAtCapacity]
                const totalCurrentValue = totalValueOfCurrentlyUsedCake + tryFillRemainingWeightWithValueFromUnusedCapacity
                previousMaximum = Math.max(totalCurrentValue, previousMaximum)
            }
        })
        cakeBag[currWeightCapacity] = previousMaximum
    }
    return cakeBag[capacity]

}

console.log(maxVal(cakeTypes, capacity)) // Returns 555 (6 of the middle type of cake and 1 of the last type of cake)