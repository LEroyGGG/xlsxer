const createKey = require('./createKey');

describe("Rules", () => {
  test("Create key", async () => {
    const data = {
      l: 1, u: 2, m:3, p: 4, g: 5, c: 6
    };

    const key = createKey(data);

    expect(key).toEqual('[c:6][g:5][l:1][m:3][p:4][u:2]');
  });
});
