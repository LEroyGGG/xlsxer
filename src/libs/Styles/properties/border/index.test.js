const self = require('.');

describe("Styles: border-color property", () => {
  test("validate", () => {
    expect(self.validate('silver thick')).toEqual(true);
    expect(self.validate('#FFF thick')).toEqual(true);
    expect(self.validate('rgb(10, 15, 30) thick')).toEqual(true);

    expect(self.validate('test thick')).toEqual(false);
    expect(self.validate('#FFFF thickk')).toEqual(false);
    expect(self.validate('rgb(510, 15) thick')).toEqual(false);

    expect(self.validate('thick rgb(15, 15, 15) thick')).toEqual(false);
    expect(self.validate('rgb(15, 15, 15) thick rgb(15, 15, 15)')).toEqual(false);
  });

  test("transform", () => {
    expect(self.transform('yellowgreen thick')).toEqual({
      'border-top-color': '#FF9ACD32',
      'border-left-color': '#FF9ACD32',
      'border-right-color': '#FF9ACD32',
      'border-bottom-color': '#FF9ACD32',
      'border-top-style': 'thick',
      'border-left-style': 'thick',
      'border-right-style': 'thick',
      'border-bottom-style': 'thick',
    });
  });
});
