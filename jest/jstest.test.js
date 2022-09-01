const sum = require("./jstest");

test("1 plus 2 should be equal to 3", () => {
  expect(sum(1, 2)).toBe(3);
});
