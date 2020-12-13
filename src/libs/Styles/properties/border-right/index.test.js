const self = require('.');

describe("Styles: border-right property", () => {
  test("transform", () => {
    expect(self.transform('yellowgreen thick')).toEqual({
      'border-right-color': '#FF9ACD32',
      'border-right-style': 'thick',
    });
  });
});
