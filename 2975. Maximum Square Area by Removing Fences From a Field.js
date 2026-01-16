
// var maximizeSquareArea = function(m, n, hFences, vFences) {
//     const MOD = 1e9 + 7;
    
//     // Add boundary fences
//     hFences.push(1, m);
//     vFences.push(1, n);
    
//     // Remove duplicates and sort
//     hFences = [...new Set(hFences)].sort((a, b) => a - b);
//     vFences = [...new Set(vFences)].sort((a, b) => a - b);
    
//     // Get all possible horizontal distances
//     const hDistances = new Set();
//     for (let i = 0; i < hFences.length; i++) {
//         for (let j = i + 1; j < hFences.length; j++) {
//             hDistances.add(hFences[j] - hFences[i]);
//         }
//     }
    
//     // Get all possible vertical distances
//     const vDistances = new Set();
//     for (let i = 0; i < vFences.length; i++) {
//         for (let j = i + 1; j < vFences.length; j++) {
//             vDistances.add(vFences[j] - vFences[i]);
//         }
//     }
    
//     // Find maximum common distance
//     let maxCommonDist = 0;
    
//     // Convert hDistances to array for iteration
//     const hDistArray = Array.from(hDistances);
//     for (const dist of hDistArray) {
//         if (vDistances.has(dist) && dist > maxCommonDist) {
//             maxCommonDist = dist;
//         }
//     }
    
//     // Return area modulo MOD, or -1 if no square found
//     if (maxCommonDist === 0) return -1;
//     return Number((BigInt(maxCommonDist) * BigInt(maxCommonDist)) % BigInt(MOD));
// };
var maximizeSquareArea = function(m, n, hFences, vFences) {
    let ret = -1;
    hFences.push(1);
    hFences.push(m);
    vFences.push(1);
    vFences.push(n);

    hFences.sort((a,b) => a - b);
    vFences.sort((a,b) => a - b);

    const s = new Set();
    const bigFences = hFences.length < vFences.length ? vFences : hFences;
    const smallFences = hFences.length < vFences.length ? hFences : vFences;

    for(let i = smallFences.length - 1; i > 0; i--){
        for(let j = i - 1; j >= 0; j--){
            s.add(smallFences[i] - smallFences[j]);
        }
    };

    let maxCommon = -1;
    for(let i = bigFences.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            const d = bigFences[i] - bigFences[j];
            if(d <= maxCommon) break;
            if(s.has(d)){
                maxCommon = Math.max(maxCommon, d);
            }
        }
    };

    if (maxCommon === -1) return -1;

  const MOD = 1000000007n;
  const D = BigInt(maxCommon);
  return Number((D * D) % MOD);

};
// Test with the example
const m = 4;
const n = 3;
const hFences = [2, 3];
const vFences = [2];
console.log(maximizeSquareArea(m, n, hFences, vFences)); // Output: 4