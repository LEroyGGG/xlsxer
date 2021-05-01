const self = require('.');

describe("Utils: common", () => {
  test("idGenerator", () => {
    let next;

    next = self.idGenerator();

    expect(next()).toEqual(1);
    expect(next()).toEqual(2);

    next = self.idGenerator('rid');

    expect(next()).toEqual('rid1');
    expect(next()).toEqual('rid2');
  });

  test("pick", () => {
    expect(self.pick(['a', 'c', 'd'], { a: 1, b: 2, c: 3 })).toEqual({ a: 1, c: 3 });
  });
});
