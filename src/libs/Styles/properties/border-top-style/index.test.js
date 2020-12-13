const self = require('.');

describe("Styles: border-top-style property", () => {
  test("transform", () => {
    expect(self.transform('thick')).toEqual({
      'border-top-style': 'thick',
    });
  });
});
