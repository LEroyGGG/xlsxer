const path = require('path');

const self = require('.');

describe("Fs", () => {
  test("readFile", async () => {
    const src = path.resolve(__dirname, 'data.test.txt');

    const content = await self.readFile(src);

    expect(content).toEqual('QWERTY');
  });
});
