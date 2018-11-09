function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
function shuffle(arr){
    let temp;
    for (let i = 0; i < arr.length -1; i++) {
        const rand = getRandom(0, arr.length-1);
        // [arr[i], arr[rand]] = [arr[rand], arr[i]]        
        temp = arr[i]
        arr[i] = arr[rand]
        arr[rand] = temp
    }
    return arr
}

shuffle([1,2,3,4,5,6,7,8,9]).forEach(e => console.log(e));