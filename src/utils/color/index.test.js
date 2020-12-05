const Color = require('./index');

describe("Utils: color", () => {
  test("Create instance: named", () => {
    const color = new Color('darkviolet');

    const [r, g, b] = color.value;

    expect(r === 148 && g === 0 && b === 211).toEqual(true);
  });

  test("Create instance: hex", () => {
    const color = new Color('#ff0000');

    const [r, g, b] = color.value;

    expect(r === 255 && g === 0 && b === 0).toEqual(true);
  });

  test("Create instance: rgb", () => {
    const color = new Color('rgb(255, 0, 0)');

    const [r, g, b] = color.value;

    expect(r === 255 && g === 0 && b === 0).toEqual(true);
  });

  test("Create instance: named error", () => {
    try {
      new Color('unknown');
    } catch (e) {
      return expect('Color named Error').toEqual('Color named Error');
    }

    expect('Color named success').toEqual('Color named Error');
  });

  test("Create instance: hex error", () => {
    try {
      new Color('#ff0g00');
    } catch (e) {
      return expect('Color hex Error').toEqual('Color hex Error');
    }

    expect('Color hex success').toEqual('Color hex Error');
  });

  test("Create instance: rgb error", () => {
    try {
      new Color('rgb(256, 0, 0)');
    } catch (e) {
      return expect('Color rgb Error').toEqual('Color rgb Error');
    }

    expect('Color rgb success').toEqual('Color rgb Error');
  });
});
