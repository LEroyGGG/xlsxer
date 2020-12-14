const self = require('.');

describe("Styles: border-top-color property", () => {
  test("transform", () => {
    expect(self.transform('yellowgreen')).toEqual({
      'border-top-color': 'FF9ACD32',
    });
  });
});
