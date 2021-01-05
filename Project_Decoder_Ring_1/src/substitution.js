function substitution(input, alphabet, encode = true) {
    let cypher = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < cypher.length; i++){ //makes sure length of alphabet is 26 and all unique characters
        if (!alphabet.includes(cypher[i])){
            return false
        }
    }
    input = input.toLowerCase() //prevents capital letter errors
    let result = []
    if (encode) {
        for (let i = 0; i < input.length; i++){
            if (input[i] === " "){ //preserves spaces
                result.push(input[i])
            } else {
                let temp = cypher.indexOf(input[i]); //finds the correct letter to switch with
                result.push(alphabet[temp])
            }
            
        }
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === " "){ //preserves spaces. Code could be updated to handle all non-alphabetic characters
                result.push(" ")
            } else {
                let temp = alphabet.indexOf(input[i]); //finds correct letter to replace and adds to result
                result.push(cypher[temp])
            }
        }
    }
    return result.join('')
}

module.exports = substitution;