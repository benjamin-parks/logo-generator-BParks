const Shapes = require('./shapes.js');

describe("Length Over 3 or less than 1", () => {
    it("Throw error if user inputs more than 3 characters in logo text", () => {
        expect(() => new Shapes("abcd", "black", "Circle", "red")).toThrow();
    });
});


describe("Require real text color/hexcode", () => {
    it("Throw error if user inputs incorrect color hexcode", () => {
        expect(() => new Shapes("abc", "blackee", "Circle", "red")).toThrow();
    });
});

describe("Require real shape color/hexcode", () => {
    it("Throw error if user inputs incorrect color hexcode", () => {
        expect(() => new Shapes("abc", "black", "Circle", "redererer")).toThrow();
    });
});