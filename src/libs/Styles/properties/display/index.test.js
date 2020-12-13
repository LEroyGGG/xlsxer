const self = require('.');

describe("Styles: display property", () => {
  test("validate", () => {
    expect(self.validate('percent')).toEqual(true);

    expect(self.validate('test')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('percent')).toEqual({ 'display': 'percent' });
  });
});
