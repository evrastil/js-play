var myArray = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19,25,38];

function mergeArrays(a, b) {
    const res = []
    let posa = 0
    let posb = 0
    while (posa < a.length || posb < b.length) {
        const aval = a[posa]
        const bval = b[posb]
        if(!aval){
            res.push(bval)
            posb++
        }
        else if(!bval){
            res.push(aval)
            posa++
        }
        else if(aval<bval){
            res.push(aval)
            posa++
        }else{
            res.push(bval)
            posb++
        }

    }

    return res
}

mergeArrays(myArray, alicesArray).forEach(item => console.log(item))
