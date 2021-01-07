const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("Should return false if the given alphebet isn't exactly 26 characters long", () => {
        const input = "thinkful";
        const alphabet = "abcdef";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("Should correctly translate the message", () => {
        const input = "thinkful";
        const alphabet = "zxcvbnmasdfghjklewqrtyuiop";
        const expected = "rasjfntg";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it("Should return false if the given alphabet has duplicate characters", () => {
        const input = "thinkful";
        const alphabet = "zxcvbnmasdfghjklewqrtyuzop";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("Should maintain spaces in the message", () => {
        const input = "coding is fun";
        const alphabet = "zxcvbnmasdfghjklewqrtyuiop";
        const expected = "ckvsjm sq ntj";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const inputOne = "thinkful";
        const inputTwo = "ThInKfUl";
        const alphabet = "zxcvbnmasdfghjklewqrtyuiop";
        const uppercase = substitution(inputTwo, alphabet);
        const lowercase = substitution(inputOne, alphabet);
        expect(uppercase).to.equal(lowercase);
    });
    it("Should properly decode messages", () => {
        const input = "#kvsjm sq ntj";
        const alphabet = "zx#vbnmasdfghjklewqrtyuiop";
        const actual = substitution(input, alphabet, false);
        const expected = "coding is fun";
        expect(actual).to.equal(expected);
    });
    it("Should return false if no alphabet is passed through", () => {
        const input = "No alphabet";
        const actual = substitution(input);
        expect(actual).to.be.false;
    });
    it("Should return false if there is no input", () => {
        const actual = substitution();
        expect(actual).to.be.false;
    });
});