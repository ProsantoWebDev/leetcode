/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stake = [];
    const map ={
        ")":"(",
        "}":"{",
        "]":"["
    }
    for(let char of s){
        if(char in map){
            stake.push(char)
        }else{
            
        }
    }
};

s = "()"
s2= "()[]{}"
s3 = "(]"
s4 = "([])"
s = "([)]"
