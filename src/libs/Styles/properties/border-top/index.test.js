const self = require('.');

describe("Styles: border-top property", () => {
  test("transform", () => {
    expect(self.transform('yellowgreen thick')).toEqual({
      'border-top-color': '#FF9ACD32',
      'border-top-style': 'thick',
    });
  });
});
