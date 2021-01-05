// Write your tests here!
const polybius = require("../src/polybius.js")
const expect = require("chai").expect;

describe("polybius", () => {
    it("Should maintain spaces", () => {
        const input = "coding is fun"
        const expected = '314341423322 4234 125433'
        const actual  = polybius(input)
        expect(actual).to.equal(expected)
    })
    it("Should decode 42 to i/j", () => {
        const input = "314341423322 4234 125433"
        const expected = "cod(i/j)ng (i/j)s fun"
        const actual = polybius(input, false) 
        expect(actual).to.equal(expected)
    })
    it("Should ignore capital letters", () => {
        const inputOne = "CoDiNg iS fUn"
        const inputTwo = "coding is fun"
        const uppercase = polybius(inputOne)
        const lowercase = polybius(inputTwo)
        expect(uppercase).to.equal(lowercase)
    })
    it("Should translate i and j to 42", () => {
        const input = "Coding is just the best"
        const actual = polybius(input)
        const expected = "314341423322 4234 42543444 443251 21513444"
        expect(actual).to.equal(expected)
    })
    it("Should return false if the number of characters is uneven when decoding", () => {
        const input = "31434142332 4234 42543444 44325 2151344"
        const actual = polybius(input, false)
        const expected = false;
        expect(actual).to.equal(false);
    }) 
})