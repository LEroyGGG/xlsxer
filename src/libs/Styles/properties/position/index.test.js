const self = require('.');

describe("Styles: position property", () => {
  test("validate", () => {
    expect(self.validate('static')).toEqual(true);

    expect(self.validate('absolute')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('fixed')).toEqual({ 'position': 'fixed' });
  });
});
