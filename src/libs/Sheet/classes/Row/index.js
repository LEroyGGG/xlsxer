const Cell = require('../Cell');

class Row {
  constructor(i, data, locks) {
    this._index = i;
    this._data = data;
    this._locks = locks;

    this._collected = null;

    this._cells = [];
  }

  collect() {
    if (this._collected) return this._collected;

    let idx_x = 0, idx_y = this._index;

    this._collected = [];

    for (let i = 0, len = this._data.length; i < len; idx_x += 1) {
      const coords = [idx_x, idx_y];

      let lock = this._locks.get(coords);
      let item = null;

      if (lock) {
        const { colSpan, rowSpan, ...data } = lock.data;

        item = { ...data, lockedBy: lock.coords[0] };
      } else {
        const { colSpan = 1, rowSpan = 1 } = item = this._data[i++];

        if (colSpan > 1) {
          for (let j = idx_x + 1, len = idx_x + colSpan; j < len; j++) {
            const blocker = this._locks.get([j, idx_y]);

            if (blocker) {
              console.warn(`Cell with the coordinates [${j}, ${idx_y}] already locked by [${blocker.coords[0][0]}, ${blocker.coords[0][1]}]`);
            }
          }
        }

        if (colSpan > 1 || rowSpan > 1) {
          this._locks.add(coords, [colSpan, rowSpan], item);
        }
      }

      this._collected.push(item);
    }

    return this._collected;
  }

  combine() {
    const collected = this.collect();

    this.cells = collected.map((data, i) => new Cell([this._index, i], data));
  }
}

module.exports = Row;
