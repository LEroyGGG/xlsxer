const self = require('.');

describe("Styles: font-family property", () => {
  test("validate", () => {
    expect(self.validate('Calibri')).toEqual(true);

    expect(self.validate(null)).toEqual(false);
    expect(self.validate(123)).toEqual(false);
    expect(self.validate({})).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('Calibri')).toEqual({ 'font-family': 'Calibri' });
  });
});
