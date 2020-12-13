const self = require('.');

describe("Styles: border-bottom-style property", () => {
  test("transform", () => {
    expect(self.transform('thick')).toEqual({
      'border-bottom-style': 'thick',
    });
  });
});
