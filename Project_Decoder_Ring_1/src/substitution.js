function substitution(input, alphabet, encode = true) {
    let cypher = ("abcdefghijklmnopqrstuvwxyz").split("");
    if (!alphabet || !input) {
        return false
    }
    const testList = []
    for (let i = 0; i < alphabet.length; i++){ //makes sure length of alphabet is 26 and all unique characters
        if (alphabet.length != 26 || testList.includes(alphabet[i])){
            return false;
        } else {
            testList.push(alphabet[i])
        }
    }
    input = input.toLowerCase(); //prevents capital letter errors
    let result = [];
    if (encode) {
        for (let i = 0; i < input.length; i++){
            if (input[i] === " "){ //preserves spaces
                result.push(input[i]);
            } else {
                let temp = cypher.indexOf(input[i]); //finds the correct letter to switch with
                result.push(alphabet[temp]);
            }
        }
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === " "){ //preserves spaces. Code could be updated to handle all non-alphabetic characters
                result.push(input[i])
            } else {//finds correct letter to replace and adds to result
                result.push(cypher[alphabet.indexOf(input[i])]);
            }
        }
    }
    return result.join('');
}

module.exports = substitution;
