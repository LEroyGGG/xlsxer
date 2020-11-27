const self = require('.');

describe("Utils: common", () => {
  test("pick", () => {
    expect(self.pick(['a', 'c', 'd'], { a: 1, b: 2, c: 3 })).toEqual({ a: 1, c: 3 });
  });
});
