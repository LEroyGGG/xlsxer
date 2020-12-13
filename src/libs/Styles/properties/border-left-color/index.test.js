const self = require('.');

describe("Styles: border-left-color property", () => {
  test("transform", () => {
    expect(self.transform('yellowgreen')).toEqual({
      'border-left-color': '#FF9ACD32',
    });
  });
});
