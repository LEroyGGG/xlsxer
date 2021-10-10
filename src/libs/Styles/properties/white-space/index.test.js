const self = require('.');

describe("Styles: display property", () => {
  test("validate", () => {
    expect(self.validate('multiline')).toEqual(true);
    expect(self.validate('nowrap')).toEqual(true);

    expect(self.validate('normal')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('multiline')).toEqual({ 'white-space': true });
  });
});
