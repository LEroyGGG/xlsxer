const self = require('.');

describe("Styles: border-right-color property", () => {
  test("transform", () => {
    expect(self.transform('yellowgreen')).toEqual({
      'border-right-color': 'FF9ACD32',
    });
  });
});
