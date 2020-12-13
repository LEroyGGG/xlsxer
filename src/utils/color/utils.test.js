const self = require('./utils');

describe("Utils: color utils", () => {
  test("validate", () => {
    expect(self.validate('sienna')).toEqual(true);
    expect(self.validate([13, 63, 185])).toEqual(true);
    expect(self.validate('rgb(13, 63, 185)')).toEqual(true);
    expect(self.validate('#17afbc')).toEqual(true);
    expect(self.validate('#17afbc11')).toEqual(true);

    expect(self.validate(null)).toEqual(false);
    expect(self.validate('qwerty')).toEqual(false);
    expect(self.validate([13, 63, 300])).toEqual(false);
    expect(self.validate('rgb(13, 63, 300)')).toEqual(false);
    expect(self.validate('#17gfbc')).toEqual(false);
    expect(self.validate('#17afbc11b')).toEqual(false);
  });

  test("validate named", () => {
    expect(self.validate.named('sienna')).toEqual(true);

    expect(self.validate.named('qwerty')).toEqual(false);
  });

  test("validate hex", () => {
    expect(self.validate.hex('#17afbc')).toEqual(true);
    expect(self.validate.hex('#17AFBC')).toEqual(true);
    expect(self.validate.hex('#17f')).toEqual(true);

    expect(self.validate.hex('#17gfbc')).toEqual(false);
    expect(self.validate.hex('#17dfbca')).toEqual(false);
    expect(self.validate.hex('#17')).toEqual(false);
    expect(self.validate.hex(123)).toEqual(false);
    expect(self.validate.hex(null)).toEqual(false);
  });

  test("validate rgb", () => {
    expect(self.validate.rgb('rgb( 0, 91, 255)')).toEqual(true);
    expect(self.validate.rgb([0, 91, 255])).toEqual(true);

    expect(self.validate.rgb(null)).toEqual(false);
    expect(self.validate.rgb('rgb(-15, 91, 255)')).toEqual(false);
    expect(self.validate.rgb('rgb(15, 91, 755)')).toEqual(false);
  });

  test("parse", () => {
    expect(self.parse('sienna')).toEqual([160, 82, 45, 1]);
    expect(self.parse([160, 82, 45])).toEqual([160, 82, 45, 1]);
    expect(self.parse('rgb(160, 82, 45)')).toEqual([160, 82, 45, 1]);
    expect(self.parse('#A0522D')).toEqual([160, 82, 45, 1]);
  });

  test("parse named", () => {
    expect(self.parse('sienna')).toEqual([160, 82, 45, 1]);
  });

  test("parse hex", () => {
    expect(self.parse('#A0522D')).toEqual([160, 82, 45, 1]);
  });

  test("parse rgb", () => {
    expect(self.parse([160, 82, 45])).toEqual([160, 82, 45, 1]);
    expect(self.parse('rgb(160, 82, 45)')).toEqual([160, 82, 45, 1]);
    expect(self.parse('rgba(160, 82, 45, 0.4)')).toEqual([160, 82, 45, 0.4]);
  });
});
