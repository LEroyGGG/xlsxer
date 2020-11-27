const self = require('.');

describe("Utils: types", () => {
  test("is string", () => {
    expect(self.isString('string')).toEqual(true);

    expect(self.isString(123)).toEqual(false);
    expect(self.isString(null)).toEqual(false);
  });

  test("is number", () => {
    expect(self.isNumber(123)).toEqual(true);
    expect(self.isNumber(Infinity)).toEqual(true);

    expect(self.isNumber('123')).toEqual(false);
    expect(self.isNumber(null)).toEqual(false);
    expect(self.isNumber(NaN)).toEqual(false);
  });

  test("is finite number", () => {
    expect(self.isFiniteNumber(123)).toEqual(true);
    expect(self.isFiniteNumber(-123)).toEqual(true);
    expect(self.isFiniteNumber(0)).toEqual(true);

    expect(self.isFiniteNumber(Infinity)).toEqual(false);
    expect(self.isFiniteNumber('123')).toEqual(false);
    expect(self.isFiniteNumber(null)).toEqual(false);
    expect(self.isFiniteNumber(NaN)).toEqual(false);
  });

  test("is NaN", () => {
    expect(self.isNaN(NaN)).toEqual(true);

    expect(self.isNaN(123)).toEqual(false);
  });

  test("is array", () => {
    expect(self.isArray([])).toEqual(true);

    expect(self.isArray({})).toEqual(false);
    expect(self.isArray(123)).toEqual(false);
    expect(self.isArray(null)).toEqual(false);
  });

  test("is object", () => {
    expect(self.isObject({})).toEqual(true);

    expect(self.isObject([])).toEqual(false);
    expect(self.isObject(123)).toEqual(false);
    expect(self.isObject(null)).toEqual(false);
  });
});
