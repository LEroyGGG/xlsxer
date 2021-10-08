const Cell = require('../Cell');

class Row {
  constructor(i, data, settings, locks) {
    this._index = i;
    this._data = data;
    this._settings = settings;
    this._locks = locks;

    this._size = 0;

    this._styles = null;
    this._collected = null;

    this._cells = [];

    this.combine();
  }

  set(values) {
    if ('styles' in values) {
      this._styles = values.styles;

      this._cells.forEach(cell => cell.set({ styles: this._styles }));
    }

    return this;
  }

  collect() {
    if (this._collected) return this._collected;

    let idx_x = 0, idx_y = this._index;

    this._collected = [];

    for (let i = 0, len = this._data.length; i < len; idx_x += 1) {
      const coords = [idx_x, idx_y];

      let lock = this._locks.get(coords);
      let item = null;

      const src = this._data[i];

      if (lock) {
        const { colSpan, rowSpan, ...data } = lock.data;

        item = { ...data, lockedBy: lock.coords[0] };
      } else {
        const { colSpan = 1, rowSpan = 1 } = item = src;

        i += 1;

        if (colSpan > 1) {
          for (let j = idx_x + 1, len = idx_x + colSpan; j < len; j++) {
            const blocker = this._locks.get([j, idx_y]);

            if (blocker) {
              throw new Error(`Cell with the coordinates [${j}, ${idx_y}] already locked by [${blocker.coords[0][0]}, ${blocker.coords[0][1]}]`);
            }
          }
        }

        if (colSpan > 1 || rowSpan > 1) {
          this._locks.add(coords, [colSpan, rowSpan], item);
        }
      }

      this._collected.push(item);

      if (i === len) {
        this._size = idx_x + 1 + (src.colSpan || 1) - 1;
      }
    }

    return this._collected;
  }

  combine() {
    const collected = this.collect();

    this._cells = collected.map((data, i) => new Cell([this._index, i], data, this._styles));
  }

  getSize() {
    return this._size;
  }

  getData() {
    const cells = this._cells;
    const spans = '1:' + this._size;

    return { cells, spans };
  }
}

module.exports = Row;
