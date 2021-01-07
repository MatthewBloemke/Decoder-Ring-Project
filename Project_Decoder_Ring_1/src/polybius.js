//function for the cypher variable, so this variable declaration is not in the main function
function cypherCreation() {
    const cypher = [];
    let index = 0;
    let alphabet = "abcdefghiklmnopqrstuvwxyz";
    for (let i = 0; i< alphabet.length ; i ++){
        let value =""
        let letter = alphabet[i];
        value += ((i % 5) +1)
        if (i % 5 === 0) {
            index ++;
        }
        value += index
        cypher.push({letter, value})
    };
    cypher.splice(9,0,{letter: 'j', value: '42'})
    return cypher;
}

function polybius(input, encode = true) {
    let pCypher = cypherCreation(); //cypher variable
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789"; //variable for decoding
    if (!input) {
        return false;
    }
    input = input.toLowerCase(); //prevents errors from capital letters
    const result = [];
    if (encode){
        for (let i = 0; i < input.length; i++){ //loops through the input, and finds each letter in the cypher
            let index = input[i];
            if (alphabet.includes(index)){ //tests if the letter is in the alphabet, otherwise it is ignored and added to the final result
                let temp = pCypher.find((cypher) => cypher.letter === index );
                result.push(temp.value);
            } else {
                result.push(index);
            }
        }     
    } else {
        if (input.includes(" ")) { //this if statement will catch any input that is not even
            let spaces = input.split(" ");
            for (let i =0; i < spaces.length; i++){
                if (spaces[i].length % 2 != 0){;
                    return false;
                }
            }
        }
        for (let i = 0; i<input.length;){ //loops through the input finds the corresponding letter for set of two numbers
            if (numbers.includes(input[i])) {
                let temp = pCypher.find((cypher) => cypher.value === (input[i] + input[i+1]));
                if (temp.value === '42'){//special case for i or j
                    result.push(`(i/j)`);
                } else {
                    result.push(temp.letter);
                }
                i += 2;
            } else {
                result.push(input[i]);
                i += 1;
            }
        }     
    }
    return result.join("");
}

module.exports = polybius;
