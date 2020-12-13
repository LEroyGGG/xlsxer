const self = require('.');

describe("Styles: border-color property", () => {
  test("validate", () => {
    expect(self.validate('silver thick')).toEqual(true);
    expect(self.validate('#FFF thick')).toEqual(true);
    expect(self.validate('rgb(10, 15, 30) thick')).toEqual(true);

    expect(self.validate('test thick')).toEqual(false);
    expect(self.validate('#FFFF thickk')).toEqual(false);
    expect(self.validate('rgb(510, 15) thick')).toEqual(false);
  });

  // test("transform", () => {
  //   expect(self.transform('yellowgreen')).toEqual('#9ACD32');
  //   expect(self.transform([154, 205, 50])).toEqual('#9ACD32');
  //   expect(self.transform('rgb(154, 205, 50)')).toEqual('#9ACD32');
  // });
});
