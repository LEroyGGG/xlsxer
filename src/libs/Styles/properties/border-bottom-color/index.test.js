const self = require('.');

describe("Styles: border-bottom-color property", () => {
  test("transform", () => {
    expect(self.transform('yellowgreen')).toEqual({
      'border-bottom-color': 'FF9ACD32',
    });
  });
});
