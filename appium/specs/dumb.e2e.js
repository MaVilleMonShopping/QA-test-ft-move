require("should");
const { step } = require("mocha-steps");

describe("Example", async () => {
    step("Should be true", async () => {
        const value = true;
        value.should.be.true();
    });
});