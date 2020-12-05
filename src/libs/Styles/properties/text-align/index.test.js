const self = require('.');

describe("Styles: display property", () => {
  test("validate", () => {
    expect(self.validate('left')).toEqual(true);

    expect(self.validate('middle')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('center')).toEqual('center');
  });
});
