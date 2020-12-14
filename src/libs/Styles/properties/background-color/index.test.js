const self = require('.');

describe("Styles: background-color property", () => {
  test("validate", () => {
    expect(self.validate('silver')).toEqual(true);
    expect(self.validate('#FFF')).toEqual(true);
    expect(self.validate('rgb(10, 15, 30)')).toEqual(true);

    expect(self.validate('test')).toEqual(false);
    expect(self.validate('#FFFFF')).toEqual(false);
    expect(self.validate('rgb(510, 15, 30)')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('yellowgreen')).toEqual({ 'background-color': 'FF9ACD32' });
    expect(self.transform([154, 205, 50])).toEqual({ 'background-color': 'FF9ACD32' });
    expect(self.transform('rgb(154, 205, 50)')).toEqual({ 'background-color': 'FF9ACD32' });
  });
});
