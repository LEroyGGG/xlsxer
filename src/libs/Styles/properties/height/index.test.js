const self = require('.');

describe("Styles: font-size property", () => {
  test("validate", () => {
    expect(self.validate(123)).toEqual(true);
    expect(self.validate('123px')).toEqual(true);
    expect(self.validate(' 123px ')).toEqual(true);
    expect(self.validate(' 123 ')).toEqual(true);

    expect(self.validate(' _123 ')).toEqual(false);
    expect(self.validate(' qwe123 ')).toEqual(false);
    expect(self.validate('asd')).toEqual(false);
    expect(self.validate('12em')).toEqual(false);
    expect(self.validate('12%')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('123px')).toEqual(123);
    expect(self.transform(123)).toEqual(123);
  });
});
