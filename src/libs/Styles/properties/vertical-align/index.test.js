const self = require('.');

describe("Styles: display property", () => {
  test("validate", () => {
    expect(self.validate('middle')).toEqual(true);

    expect(self.validate('center')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('top')).toEqual({ 'vertical-align': 'top' });
  });
});
