const self = require('.');

describe("Styles: border-left property", () => {
  test("transform", () => {
    expect(self.transform('yellowgreen thick')).toEqual({
      'border-left-color': '#FF9ACD32',
      'border-left-style': 'thick',
    });
  });
});
