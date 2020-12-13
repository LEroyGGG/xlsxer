const self = require('.');

describe("Styles: border-left-style property", () => {
  test("transform", () => {
    expect(self.transform('thick')).toEqual({
      'border-left-style': 'thick',
    });
  });
});
