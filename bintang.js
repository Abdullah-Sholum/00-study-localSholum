let bintang = ""

for(let i = 0; i < 6; i++) {
    for(let j = 0; j <= i; j++) {
        bintang = bintang+ "*"
    }
    bintang = bintang + "\n"
}

console.log(bintang);