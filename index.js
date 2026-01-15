squares = [[0,0,2],[1,1,1]]
for (let i = 0; i < squares.length; i++) {
        let x = squares[i][0] 
        let y = squares[i][1];
        let l = squares[i][2];
        let total = l * l;
        console.log(l)
        console.log(`total:${total}`)
    }


//     3453. Separate Squares I(javascript)
// You are given a 2D integer array squares. Each squares[i] = [xi, yi, li] represents the coordinates of the bottom-left point and the side length of a square parallel to the x-axis.

// Find the minimum y-coordinate value of a horizontal line such that the total area of the squares above the line equals the total area of the squares below the line.

// #LeetCode #JavaScript #CodingInterview #Algorithm #DataStructures #Programming #SoftwareEngineering #TechInterview #CodeChallenge #WebDevelopment #100DaysOfCode #Developer #CodingLife
