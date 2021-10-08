const self = require('.');

describe("Styles: background-color property", () => {
  test("validate", () => {
    expect(self.validate('none')).toEqual(true);
    expect(self.validate('gray125')).toEqual(true);
    expect(self.validate('solid')).toEqual(true);

    expect(self.validate('test')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('none')).toEqual({ 'background-style': 'none' });
  });
});
