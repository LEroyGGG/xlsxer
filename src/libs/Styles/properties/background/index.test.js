const self = require('.');

describe("Styles: background property", () => {
  test("validate", () => {
    expect(self.validate('none')).toEqual(true);
    expect(self.validate('silver solid')).toEqual(true);
    expect(self.validate('#FFF')).toEqual(true);
    expect(self.validate('rgb(10, 15, 30)')).toEqual(true);

    expect(self.validate('test')).toEqual(false);
    expect(self.validate('#FFFFF')).toEqual(false);
    expect(self.validate('rgb(510, 15, 30)')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('none')).toEqual({ 'background-color': 'FFFFFFFF', 'background-style': 'none' });
    expect(self.transform('yellowgreen')).toEqual({ 'background-color': 'FF9ACD32', 'background-style': 'solid' });
    expect(self.transform('rgb(154, 205, 50)')).toEqual({ 'background-color': 'FF9ACD32', 'background-style': 'solid' });
  });
});
