const puzzle4 = (input) => {
    const arr = input.split('\n').map(piece => piece)
    const diffs = []
    arr.forEach((id, index, restOfArr) => {
        let restArrIdx = index + 1
        while (arr.length > restArrIdx) {
            const idLength = id.length
            let letterPos = 0
            let diffSize = 0
            const restOfArrId = restOfArr[restArrIdx]
            while (idLength > letterPos && diffSize < 2) {
                const currIdChar = id.charAt(letterPos)
                const restOfArrIdChar = restOfArrId.charAt(letterPos)
                if (currIdChar !== restOfArrIdChar) {
                    diffSize++
                }
                letterPos++
            }
            if (diffSize === 1) {
                diffs.push(id)
                diffs.push(restOfArrId)
            }
            restArrIdx++
        }
    }, [])
    console.log(diffs)
    let res = ''
    for (let i = 0; i < diffs[0].length; i++) {
        if (diffs[0].charAt(i) === diffs[1].charAt(i)) {
            res = res + diffs[0].charAt(i)
        }
    }
    console.log(res)
    return res
}

puzzle4('bpacnmelhhzpygfsjoxtvkwuor\n' +
    'biacnmelnizqygfsjoctvkwudr\n' +
    'bpaccmllhizyygfsjoxtvkwudr\n' +
    'rpacnmelhizqsufsjoxtvkwudr\n' +
    'bfacnmelhizqygfsjoxtvwwudp\n' +
    'bpacnmelhizqynfsjodtvkyudr\n' +
    'bpafnmelhizqpgfsjjxtvkwudr\n' +
    'bpackmelhizcygfsjoxtvkwudo\n' +
    'bmacnmilhizqygfsjoltvkwudr\n' +
    'bpafnmelhizuygfsjoxtvkwsdr\n' +
    'boacnmylhizqygfsjoxtvxwudr\n' +
    'bpbcjmelhizqygfsjoxtgkwudr\n' +
    'bpacnmglhizqygfsjixtlkwudr\n' +
    'bpacnmclhizqygfsjoxtvkwtqr\n' +
    'bpacnmelhczqygtsjoptvkwudr\n' +
    'bpacnmelhizqywfsaoxtvkbudr\n' +
    'apacnmelhizqygcsjoxtvkwhdr\n' +
    'bpacnmelrizqygfsbpxtvkwudr\n' +
    'tpkcnmelpizqygfsjoxtvkwudr\n' +
    'bpacnmelhizqlgfsjobtmkwudr\n' +
    'npacnmelhizqygffjoxtvkwudf\n' +
    'bpacnmeehqzqygqsjoxtvkwudr\n' +
    'bpecnmelhizqigfsjvxtvkwudr\n' +
    'bpacnmelhizqysfsjoxtvkdfdr\n' +
    'bpacnfelhkzqygfsjoxtvkwfdr\n' +
    'bpacnbelvizqygfsjoxthkwudr\n' +
    'bpacnoelhizqygfejoxtvkwudn\n' +
    'bpacnmelhizqygfzpkxtvkwudr\n' +
    'bpahnmelhizqyufsjoxmvkwudr\n' +
    'bpacnmelhizqygfsnoxtvkwmmr\n' +
    'bpacnmelhizqygfsjoatvkludf\n' +
    'bpacnmylhizqygfsjlxtvksudr\n' +
    'bpacnmekhpzqygysjoxtvkwudr\n' +
    'bpacnselhizqogfswoxtvkwudr\n' +
    'bpacnmelhizqprfsjoxwvkwudr\n' +
    'bpatnmelhinqygfsjoctvkwudr\n' +
    'bpacnqelhqzqygfsxoxtvkwudr\n' +
    'bpabnmelhiyqygfsjoxtykwudr\n' +
    'bpacnivlhizqygfsjoxtviwudr\n' +
    'bpkcnmylhizqygfsjoxtvkwcdr\n' +
    'bpafnmflhizqygtsjoxtvkwudr\n' +
    'bpachmelhizqygfsjixtvkwudg\n' +
    'bpacymelhizqygfsjoxtykwuar\n' +
    'bpacnkelhizqdgfsjoxtskwudr\n' +
    'bpacnmezhizqggbsjoxtvkwudr\n' +
    'bpacnmqlhizqygrsjoxzvkwudr\n' +
    'bpaczmelhizqyhfsjoxfvkwudr\n' +
    'bdacnmelhyzqygusjoxtvkwudr\n' +
    'bpacbmelhizqywfsjostvkwudr\n' +
    'bpacnmelhihzygfstoxtvkwudr\n' +
    'bpactmelhizqygfsjcxtvkwydr\n' +
    'bkacnmethizqytfsjoxtvkwudr\n' +
    'bpacnmalhizqydfskoxtvkwudr\n' +
    'spacnmelbizqygfsjoxdvkwudr\n' +
    'lpalnmelhizoygfsjoxtvkwudr\n' +
    'bpacjmeghizqygfsjoxtviwudr\n' +
    'bpacnmeqhizxygfsjoxgvkwudr\n' +
    'bpacnmelhizqygosjoxtvkkuhr\n' +
    'bpacnmelhiznbxfsjoxtvkwudr\n' +
    'bgacnmelhizqygfsjbxivkwudr\n' +
    'bpacnmelhizqygfjjowtvswudr\n' +
    'bpacnmelhizqygfsjovtgkmudr\n' +
    'bpacnmelcmzqygfspoxtvkwudr\n' +
    'bpvcnmelhizqyvfcjoxtvkwudr\n' +
    'bpacnmeahizqjgfsjoxtvkwukr\n' +
    'bpacnoelwizqygfsjoxtvkaudr\n' +
    'xpacnmelhizqygfsjoxdvkwedr\n' +
    'mpacnmelqizqygfsjoxtvkwudx\n' +
    'bppcnmelhizqygfsjfxtvkhudr\n' +
    'bpacnmclhizqyhfsjaxtvkwudr\n' +
    'opacsmelhizqygfsjmxtvkwudr\n' +
    'bpafnmelhizqjgfsjoxtvkrudr\n' +
    'bpdcnmilhizqygfsjoxtvkludr\n' +
    'bpainmelhizqygfsjtntvkwudr\n' +
    'bradnmelhizqygfsjextvkwudr\n' +
    'bpacnmelhizqygfmsoxtvkwudg\n' +
    'bpacneelhizqygvrjoxtvkwudr\n' +
    'bpacnpelhizqygfsjoxyvkwudf\n' +
    'bpacnmelhizqygfsqoqtvkwodr\n' +
    'bpacnmelhizjyghsjoxcvkwudr\n' +
    'bpacnmelmibqygfsjoxtvnwudr\n' +
    'jpacnmelaizqygfwjoxtvkwudr\n' +
    'zpachmelhizqygfsjsxtvkwudr\n' +
    'bpacnmelfizqykfsjomtvkwudr\n' +
    'bpacnmllwizqygfsjoxtvkwusr\n' +
    'bpaynmelhizqygfsjoxtvowcdr\n' +
    'jpacnmqlhizqygfsjoxtvknudr\n' +
    'bpacxmelhizqyffsjoxtvkwugr\n' +
    'apawnmelhizqygfsjtxtvkwudr\n' +
    'mpacnmelhitqigfsjoxtvkwudr\n' +
    'bpacnmelhhzqygfsjoxtvkyzdr\n' +
    'gpacnmelhizqynfsjoxtvkwudm\n' +
    'bnacnkelhizqygfsjoxtpkwudr\n' +
    'bpacnmelfizqygfsumxtvkwudr\n' +
    'bpacnmelhisqygfsjohtvowudr\n' +
    'bpacnmelhimqygxsjoxtvkwudn\n' +
    'bpscnmeliizqygfsjoxtvkwunr\n' +
    'qpacnmelhizqycfsjoxtvkwndr\n' +
    'bpacnmelhijqygfsjohtvkyudr\n' +
    'bpacnmelhizqykfsjkxtvknudr\n' +
    'bpacnqilhizqygfsjoxtvkoudr\n' +
    'bpacnmelhizqzgmsjoxtvkwurr\n' +
    'bpdcnmelhizqygfsjoutukwudr\n' +
    'bpecnmeghizqygfsjoxgvkwudr\n' +
    'bpicnmelhizqygfrjoxtvlwudr\n' +
    'bpacnmelhizfygfsroxtvkwodr\n' +
    'buacnmelhizqygjsjoxtvkvudr\n' +
    'bpacnmelhixqykfsjoxtvrwudr\n' +
    'bpacnmelhizqygvejcxtvkwudr\n' +
    'bpacnmjlhizqylfsjoxtvkwuor\n' +
    'qpacnmelhizqygfsjoxfdkwudr\n' +
    'bpfcnmemhizqygfsjoxtvknudr\n' +
    'bpacnmelhizqoffsjqxtvkwudr\n' +
    'hpacnielhiqqygfsjoxtvkwudr\n' +
    'gpacnmelhizqygfsewxtvkwudr\n' +
    'bpacnmellizqylxsjoxtvkwudr\n' +
    'bpacnmenhizqymfsjoxtvkmudr\n' +
    'bpacnfelhizqygcsjoltvkwudr\n' +
    'bpacnmelhqqqygfsjoxtvkuudr\n' +
    'bplgnmelhiqqygfsjoxtvkwudr\n' +
    'bpacnzelhizqygfgjoxtvnwudr\n' +
    'bpacnmelhizqygfsjoktvknunr\n' +
    'bpacnmdlhioqygfnjoxtvkwudr\n' +
    'epacnmelwizqyjfsjoxtvkwudr\n' +
    'bpacxmelhazfygfsjoxtvkwudr\n' +
    'bpacnmejhezqygfsjoxtskwudr\n' +
    'bpacnqelhihqyzfsjoxtvkwudr\n' +
    'bpacnbelhizqyrfsjoxtvkmudr\n' +
    'bpacnmelhizqygfsjoxtylwzdr\n' +
    'bpacnmelwizqygfsjodtvkhudr\n' +
    'bpacnnelhizqygfsjoxtwkwadr\n' +
    'bpacimelhizqygfsnoxtvkwuor\n' +
    'bpacnmelhizqyaasjoxtlkwudr\n' +
    'bpacnmelhizqyeffjoxtvkwuds\n' +
    'bpacnmenhizqygxscoxtvkwudr\n' +
    'bpacnmelhidqygfsjowtskwudr\n' +
    'bpacnmeliizqygfsjoxhvkwucr\n' +
    'bpacimelhizqygfsjoxtvktuwr\n' +
    'bpainmelhhzqygfsjzxtvkwudr\n' +
    'bpacamelhizqygfsjogtvkwbdr\n' +
    'bpccnmelgizqygfsjoxtykwudr\n' +
    'bpacnmelhizwegfsjoxtvkwadr\n' +
    'bpackmelhbzqygqsjoxtvkwudr\n' +
    'bpacymeihizqyffsjoxtvkwudr\n' +
    'bpacnielhczqygfsjoxtvkwudk\n' +
    'bpacnmejhizqygffjoxjvkwudr\n' +
    'ppacnmelhizqygfsjoxtigwudr\n' +
    'bpjcnmolhizqygfsjoxtvkwndr\n' +
    'bpacnmelcizqygrsjoxtakwudr\n' +
    'cpawnmelhizqygfsjoxmvkwudr\n' +
    'bwacnmelhizqygesjoxtakwudr\n' +
    'bpacnmelhizqygfsjexsvkwddr\n' +
    'bpaunmelhiuqygfsjoxtvkwtdr\n' +
    'bpacnmellimqygfsjextvkwudr\n' +
    'bpacnmerhizqygfsaoxvvkwudr\n' +
    'bpacnmglhizqygfsjixtukwudr\n' +
    'ppacnmelhizqygfsjoxtvkdudp\n' +
    'bpacnmedhizqygukjoxtvkwudr\n' +
    'bpccnmelhizqngfsjoxtvkwadr\n' +
    'bgacnmeldizqygfscoxtvkwudr\n' +
    'bpacngelhizsygfsjoxtvkwkdr\n' +
    'bpacnpelhizqygfsjoxctkwudr\n' +
    'bpacnmylhizqygfcjoxtvkwmdr\n' +
    'npacnmelhizqygfsjoxtwkwuds\n' +
    'bpaxnmelhizqydfsjoxyvkwudr\n' +
    'bpacnhelhizjygfsjoxtvkmudr\n' +
    'bpacnkelhczqygfnjoxtvkwudr\n' +
    'bfacnmelhizrygfsjoxtvkwodr\n' +
    'bpycnmelhizqygfofoxtvkwudr\n' +
    'qpacpselhizqygfsjoxtvkwudr\n' +
    'bpvcnmelhezqygfsjoxttkwudr\n' +
    'bpacnmwlhizqygfijoxtmkwudr\n' +
    'bsacnmelhikqygfsjoxttkwudr\n' +
    'bpccnxelhizqyafsjoxtvkwudr\n' +
    'bpacnmelhizqygfswhxtvewudr\n' +
    'vpacnmzlhizqygfsvoxtvkwudr\n' +
    'bpacnmelhihqygfsjoxtvkqurr\n' +
    'bpacnmelhixqygazjoxtvkwudr\n' +
    'bpavnmelhizqygfsjozpvkwudr\n' +
    'bpacnmclhizuygfsjoxmvkwudr\n' +
    'bpacnmelhizryufsjoxtkkwudr\n' +
    'bpacnmelhtzqygfsjobtvkwufr\n' +
    'bpacnmelhizqmlfsjoxtvkwudq\n' +
    'bpaaneelhizqygfsjlxtvkwudr\n' +
    'bpacnmelhxzqygfsjoxthkwuhr\n' +
    'bpacnmeshizqygfcjoxtvkwude\n' +
    'bpacnzqlhizqygfsxoxtvkwudr\n' +
    'bgaanmelhizqycfsjoxtvkwudr\n' +
    'bpacnmexhizqygfsroxtvkwudn\n' +
    'bpmmnmelhizqygfajoxtvkwudr\n' +
    'bpacnmelhizqylfsjoxtckwhdr\n' +
    'bpicnmelhizqyrfsjoxtvkwudi\n' +
    'zpacnmelhizvycfsjoxtvkwudr\n' +
    'bpamnmkllizqygfsjoxtvkwudr\n' +
    'bpacnmelhrzqyrfsjoxgvkwudr\n' +
    'bpadnmelhczqygfsjoxtlkwudr\n' +
    'bpacrmelhizqygrsjoxtvkiudr\n' +
    'lpacnmelhizqygfsjoxtgkwxdr\n' +
    'fpacnmalhiuqygfsjoxtvkwudr\n' +
    'bpacnmelhizqygfsjixtvfwcdr\n' +
    'bpccnmelhxzqygfkjoxtvkwudr\n' +
    'bpacnmepaizqygfsjoctvkwudr\n' +
    'tpacnmelhivqygfsxoxtvkwudr\n' +
    'kpacnfelhitqygfsjoxtvkwudr\n' +
    'baacnzelhizqygfsjoxtvkwudx\n' +
    'bcycnmeghizqygfsjoxtvkwudr\n' +
    'wpacotelhizqygfsjoxtvkwudr\n' +
    'bpacnmsshizqygrsjoxtvkwudr\n' +
    'blacnmelhizqygfsjoxtykwvdr\n' +
    'bkacnmelhizqygfsjoxuvkludr\n' +
    'bpacnmelhizaugfsjoxtvhwudr\n' +
    'fpavnmelhizqygfsgoxtvkwudr\n' +
    'bpachmelnizqygfsjextvkwudr\n' +
    'bpacnmelhizqpgfsjoxtvkwldu\n' +
    'bpacnmelhizqygfsloftvywudr\n' +
    'bpacntelhvzqygfejoxtvkwudr\n' +
    'bpacnmeldizqygfsjmxtvkdudr\n' +
    'byacnmelhizqygfsjsxtvkwudh\n' +
    'bpacnmellizqygssxoxtvkwudr\n' +
    'bpacnmelhizqygfsjootvknuir\n' +
    'bpacnmelhitqjgfsjoxivkwudr\n' +
    'bpacnmelhazaygfsjoxtvfwudr\n' +
    'bpacnzenhizqygfsjzxtvkwudr\n' +
    'bpacnmelhizqypfsdoxtvkwuar\n' +
    'bpannmelhizqygnsjoxtvkwndr\n' +
    'bracnmeldizsygfsjoxtvkwudr\n' +
    'bpacnmelhizwygfsjugtvkwudr\n' +
    'bpatnmelhizqygfsjoytvkwulr\n' +
    'upacnmelhizqygfsjurtvkwudr\n' +
    'bpaenmezhizqygfsjostvkwudr\n' +
    'bpacnmelhizpygfsjodhvkwudr\n' +
    'bpacnmelhizqygfsjogtvkguwr\n' +
    'bpacnmelhisqygfsjoxtpkuudr\n' +
    'bxacnmelhizqygfsjdxtvkfudr\n' +
    'bpacnmelhizqygfsjohqvkwudu\n' +
    'bzacnmtlhizqygfsjoxsvkwudr\n' +
    'bpacnmplhixrygfsjoxtvkwudr\n' +
    'bpacnmelhizqhgfsjomtvkwudg\n' +
    'bpacnmezhizqygfsjxxtykwudr\n' +
    'bpacnmwlhizqygfujoxtzkwudr\n' +
    'tpacnmelhizqygfsjoxkvpwudr\n' +
    'bpawsmenhizqygfsjoxtvkwudr\n' +
    'bpacnmelhizqtgfsjoxttkwuqr\n' +
    'bpkcbmelhizqygfsjoxtvkwucr\n' +
    'bpacfmekhizqygfsjoxtvkwuds\n' +
    'bpacnmethizqynfajoxtvkwudr\n' +
    'bpocnmclhizqygfsjoxtvkwukr\n' +
    'zpacnmwlhizqygfsjoxzvkwudr\n' +
    'bpacpoelhqzqygfsjoxtvkwudr\n' +
    'bpacnlelhizqyzfsjoxtvkwukr')