const n2l = require('../../../../utils/num2letter');

class Locks {
  constructor() {
    this._items = [];
  }

  add(index, span, cell) {
    const [x, y] = index;
    const [span_x, span_y] = span;

    const data = { ...cell, value: null };
    const coords = [[x, y], [x + span_x - 1, y + span_y - 1]];

    this._items.push({ data, coords });
  }

  get(index) {
    const [x, y] = index;

    for (let i = 0, len = this._items.length; i < len; i++) {
      const { coords } = this._items[i];

      const cx = coords[0][0] + (coords[1][0] - coords[0][0]) / 2;
      const cy = coords[0][1] + (coords[1][1] - coords[0][1]) / 2;

      const vx = coords[1][0] - cx;
      const vy = coords[1][1] - cy;

      if (Math.abs(cx - x) <= vx && Math.abs(cy - y) <= vy) {
        return this._items[i];
      }
    }

    return null;
  }

  getJoins() {
    return this._items.map(item => {
      const { coords } = item;

      return n2l(coords[0][0]) + coords[0][1] + ':' + n2l(coords[1][0]) + coords[1][1];
    });
  }
}

module.exports = Locks;
