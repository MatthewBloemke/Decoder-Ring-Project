

function caesar(input, shift, encode = true) {
    const cypher = 'abcdefghijklmnopqrstuvwxyz'
    //removes any chance for uppercase error
    input = input.toLowerCase()
    //tests the shift value to make sure it is valid
    if (shift === 0 || shift > 25 || shift < -25 || shift === undefined){
        return false
    }
    //sets the shift to a negative value if the message is being decoded
    if (!encode){
        shift = -shift
    }
    //final value declaration
    let result = ""
    //iterates through each value of the input
    for (let i = 0; i < input.length; i++){
        //checks for non-alphabetic characters, if a character isn't included in the cypher variable, it is immediately added to the final answer
        if (cypher.includes(input[i].toLowerCase())) {
            //checks if the current input value is equal to any value in the cypher
            for (let j = 0; j<cypher.length; j++) {
                if (input[i] === cypher[j]) {
                    //wraps the shift to the beginning if the shift were to go too far
                    if (j+shift > (cypher.length-1)) {
                        result += cypher[(j+shift-cypher.length)]
                        break
                    //wraps the shift to the end if it goes to far to the left
                    } else if (j+shift < 0) {
                        result += cypher[(j+shift+cypher.length)]
                        break
                    //normal case of shift
                    } else {
                        result += cypher[(j+shift)]
                        break
                    }
                }
            }
        } else {
            result += input[i]
        }
    }
    return result
}

module.exports = caesar;
