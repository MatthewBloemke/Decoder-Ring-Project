function caesar(input, shift, encode = true) {
    const cypher = ('abcdefghijklmnopqrstuvwxyz').split("");
    if (shift === 0 || shift > 25 || shift < -25 || shift === undefined || input === undefined){
        return false;
    }
    input = input.toLowerCase();
    if (!encode){
        shift = -shift;
    }
    let result = "";
    for (let i = 0; i < input.length; i++){
        index = cypher.indexOf(input[i])
        if (index === -1) {
            result += input[i];
        } else if (index+shift > (cypher.length-1)) {
            result += cypher[(index+shift-cypher.length)];
        } else if (index+shift < 0) {
            result += cypher[(index+shift+cypher.length)];
        } else {
            result += cypher[(index+shift)];
        }
    }
    return result;
}

module.exports = caesar;
