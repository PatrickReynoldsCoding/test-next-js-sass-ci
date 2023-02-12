
describe("Test of test", () => {
  it("tests the test", () => {
    const number = 10

    expect(number).toEqual(10);
  });
  it("tests fails the test", () => {
    const number = 10

    expect(number).toEqual(9);
  });
});
