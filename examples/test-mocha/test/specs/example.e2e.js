describe("Mocha Example", () => {
  let variableOne = 1;
  let variableTwo = 1;
  before("Before all tests hook", () => {
    console.log("Before Hook");
    variableOne++;
  });

  beforeEach("Before each one of the tests hook", () => {
    console.log("BeforeEach Hook");
    variableTwo++;
  });

  after("After all test hook", () => {
    console.log("After Hook");
  });

  afterEach("After each one of the tests hook", () => {
    console.log("AfterEach Hook");
  });

  it("Test One", async () => {
    console.log("Beginning of Test One");
    console.log(`variableOne = ${variableOne}`);
    console.log(`variableTwo = ${variableTwo}`);
    console.log("End of Test One");
  });

  it("Test Two", async () => {
    console.log("Beginning of Test Two");
    console.log(`variableOne = ${variableOne}`);
    console.log(`variableTwo = ${variableTwo}`);
    console.log("End of Test Two");
  });

  it("Test Three", async () => {
    console.log("Beginning of Test Three");
    console.log(`variableOne = ${variableOne}`);
    console.log(`variableTwo = ${variableTwo}`);
    console.log("End of Test Three");
  });

  it("This test is pending and will need implementation");

  it.skip("This test is skipped and will not be executed", () => {
    console.log("This test is skipped and we should not see this comment");
  });

  it("Conditional skip", function () {
    if (true) {
      this.skip();
    }
  });
});

describe("Mocha Scenario", function() {
  it("Mocha Test", function() {
    // this is a Mocha test
  });
  it("Mocha Test with async", async function() {
    // this is a Mocha test with async syntax
  });
});

describe("Mocha Scenario arrow functions", () => {
  it("Mocha Test", () => {
    // this is a Mocha test
  });
  it("Mocha Test with async", async () => {
    // this is a Mocha test with async syntax
  });
});


