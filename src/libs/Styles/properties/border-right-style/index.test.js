const self = require('.');

describe("Styles: border-right-style property", () => {
  test("transform", () => {
    expect(self.transform('thick')).toEqual({
      'border-right-style': 'thick',
    });
  });
});
