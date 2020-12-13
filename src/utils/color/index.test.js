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

  test("Create instance: invalid color name", () => {
    const color = new Color('unknown');

    expect(color.isValid).toEqual(false);
  });

  test("Create instance: invalid color hex", () => {
    const color = new Color('ff0g00');

    expect(color.isValid).toEqual(false);
  });

  test("Create instance: invalid color hexAlpha", () => {
    const color = new Color('ff0000gf');

    expect(color.isValid).toEqual(false);
  });

  test("Create instance: invalid color rgb", () => {
    const color = new Color('rgb(256, 0, 0)');

    expect(color.isValid).toEqual(false);
  });

  test("Create instance: invalid color rgbAlpha", () => {
    const color = new Color('rgb(255, 0, 0, 2)');

    expect(color.isValid).toEqual(false);
  });
});
