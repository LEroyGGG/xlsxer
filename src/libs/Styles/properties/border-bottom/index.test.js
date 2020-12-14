const self = require('.');

describe("Styles: border-bottom property", () => {
  test("transform", () => {
    expect(self.transform('yellowgreen thick')).toEqual({
      'border-bottom-color': 'FF9ACD32',
      'border-bottom-style': 'thick',
    });
  });
});
