//function for the cypher variable, so this variable declaration is not in the main function
function cypherCreation() {
    let cypher = [
        {letter: "a" , value: '11'},
        {letter: "b" , value: '21'},
        {letter: "c" , value: '31'},
        {letter: "d" , value: '41'},
        {letter: "e" , value: '51'},
        {letter: "f" , value: '12'},
        {letter: "g" , value: '22'},
        {letter: "h" , value: '32'},
        {letter: "i" , value: '42'},
        {letter: "j" , value: '42'},
        {letter: "k" , value: '52'},
        {letter: "l" , value: '13'},
        {letter: "m" , value: '23'},
        {letter: "n" , value: '33'},
        {letter: "o" , value: '43'},
        {letter: "p" , value: '53'},
        {letter: "q" , value: '14'},
        {letter: "r" , value: '24'},
        {letter: "s" , value: '34'},
        {letter: "t" , value: '44'},
        {letter: "u" , value: '54'},
        {letter: "v" , value: '15'},
        {letter: "w" , value: '25'},
        {letter: "x" , value: '35'},
        {letter: "y" , value: '45'},
        {letter: "z" , value: '55'},
    ]
    return cypher
}


function polybius(input, encode = true) {
    let pCypher = cypherCreation() //cypher variable
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789" //variable for decoding
    input = input.toLowerCase() //prevents errors from capital letters
    const result = []
    if (encode){
        for (let i = 0; i < input.length; i++){ //loops through the input, and finds each letter in the cypher
            let index = input[i]
            if (alphabet.includes(index)){ //tests if the letter is in the alphabet, otherwise it is ignored and added to the final result
                let temp = pCypher.find((cypher) => cypher.letter === index )
                result.push(temp.value)
            } else {
                result.push(index)
            }
        }     
    } else {
        //this if statement will catch any input that is not even
        if (input.includes(" ")) {
            let spaces = input.split(" ")
            for (let i =0; i < spaces.length; i++){
                if (spaces[i].length % 2 != 0){
                    return false
                }
            }
        }
        for (let i = 0; i<input.length;){ //loops through the input finds the corresponding letter for set of two numbers
            if (numbers.includes(input[i])) {
                let temp = pCypher.find((cypher) => cypher.value === (input[i] + input[i+1]))
                if (temp.value === '42'){//special case for i or j
                    result.push(`(i/j)`)
                } else {
                    result.push(temp.letter)
                }
                i += 2;
            } else {
                result.push(input[i])
                i += 1;
            }
        }     
    }
    return result.join("")
}

module.exports = polybius;
