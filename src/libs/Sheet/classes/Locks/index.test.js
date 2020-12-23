const Locks = require('.');

describe("Sheet.Locks", () => {
  test("add", () => {
    const locks = new Locks();

    locks.add([2, 2], [2, 3], { value: null });

    expect(locks._items[0]).toEqual({ data: { value: null }, coords: [[2, 2], [3, 4]] });
  });

  test("get", () => {
    const locks = new Locks();

    locks.add([1, 3], [2, 3], { value: null });
    locks.add([5, 5], [1, 3], { value: null });

    expect(locks.get([1, 2])).toEqual(null);
    expect(locks.get([1, 3])).toEqual({ data: { value: null }, coords: [[1, 3], [2, 5]] });
    expect(locks.get([1, 4])).toEqual({ data: { value: null }, coords: [[1, 3], [2, 5]] });
    expect(locks.get([1, 5])).toEqual({ data: { value: null }, coords: [[1, 3], [2, 5]] });
    expect(locks.get([1, 6])).toEqual(null);

    expect(locks.get([2, 2])).toEqual(null);
    expect(locks.get([2, 3])).toEqual({ data: { value: null }, coords: [[1, 3], [2, 5]] });
    expect(locks.get([2, 4])).toEqual({ data: { value: null }, coords: [[1, 3], [2, 5]] });
    expect(locks.get([2, 5])).toEqual({ data: { value: null }, coords: [[1, 3], [2, 5]] });
    expect(locks.get([2, 6])).toEqual(null);

    expect(locks.get([4, 4])).toEqual(null);
    expect(locks.get([4, 5])).toEqual(null);
    expect(locks.get([4, 6])).toEqual(null);
    expect(locks.get([4, 7])).toEqual(null);
    expect(locks.get([4, 8])).toEqual(null);

    expect(locks.get([5, 4])).toEqual(null);
    expect(locks.get([5, 5])).toEqual({ data: { value: null }, coords: [[5, 5], [5, 7]] });
    expect(locks.get([5, 6])).toEqual({ data: { value: null }, coords: [[5, 5], [5, 7]] });
    expect(locks.get([5, 7])).toEqual({ data: { value: null }, coords: [[5, 5], [5, 7]] });
    expect(locks.get([5, 8])).toEqual(null);  });
});
