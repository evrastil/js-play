function write(n) {
    for (let i = 0; i <= n; i++) {
        let row = 0
        for (let j = 0; j <= n; j++) {
            let res = i * j;
            if(res === 0){
                if(i!==0){
                    res +=i
                }
                if(j!==0){
                    res += j
                }
            }
            row += res
            if(j !== n){
                row += ','
            }
        }
        console.log(row)
    }
}

write(5)