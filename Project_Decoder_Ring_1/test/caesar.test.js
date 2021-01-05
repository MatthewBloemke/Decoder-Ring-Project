// Write your tests here!
const caesar = require("../src/caesar.js")
const expect = require("chai").expect;

describe ("caesar", () => {
    it("Should return false if the shift value is 0", () => {
        const input = "thinkful";
        const shift = 0;
        const expected = false;
        const actual = caesar(input,shift)
        expect(actual).to.equal(expected)
    })
    it("Should return false if the shift value is greater than 25", () => {
        const input = "thinkful";
        const shift = 26;
        const expected = false;
        const actual = caesar(input,shift)
        expect(actual).to.equal(expected)
    })
    it("Should return false if the shift value is less than -25", () => {
        const input = "thinkful";
        const shift = -30;
        const expected = false;
        const actual = caesar(input,shift)
        expect(actual).to.equal(expected)
    })
    it("Should return false if the shift value is not there", () => {
        const input = "thinkful";
        const expected = false;
        const actual = caesar(input)
        expect(actual).to.equal(expected)
    })
    it("Should ignore capital letters", () => {
        const inputOne = 'ThInKfUl';
        const inputTwo = "thinkful";
        const shift = 5
        const lowercase = caesar(inputTwo, shift)
        const uppercase = caesar(inputOne, shift)
        expect(uppercase).to.equal(lowercase)
    })
    it("Should handle shifts that go past the alphabet", () => {
        const input = "Zebra time"
        const shift = 5
        const expected = "ejgwf ynrj"
        const actual = caesar(input,shift)
        expect(actual).to.equal(expected)
    })
    it("Should maintain spaces and nonalphabetic symbols", () => {
        const input = "10Zebra %*Time!"
        const shift = -3
        const expected = "10wbyox %*qfjb!"
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    it("Should properly decode messages", () => {
        const input = "10wbyox %*qfjb!"
        const shift = -3
        const expected = "10zebra %*time!"
        const actual = caesar(input,shift,false)
        expect(actual).to.equal(expected)
    })
})