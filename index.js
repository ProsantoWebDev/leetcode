squares = [[0,0,2],[1,1,1]]
for (let i = 0; i < squares.length; i++) {
        let x = squares[i][0] 
        let y = squares[i][1];
        let l = squares[i][2];
        let total = l * l;
        console.log(l)
        console.log(`total:${total}`)
    }