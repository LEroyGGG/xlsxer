const self = require('./matchers');

const {
  MARK_FILE_START, MARK_FILE_END,
  TYPE_FILE_START, TYPE_FILE_END,
  TYPE_BLOCK_START, TYPE_BLOCK_END,
  TYPE_SELECTOR, TYPE_PROPERTIES,
} = require('./constants');

describe("Parser matches", () => {
  test("recognize", () => {
    expect(self.recognize(MARK_FILE_START)).toEqual(TYPE_FILE_START);
    expect(self.recognize(MARK_FILE_END)).toEqual(TYPE_FILE_END);

    expect(self.recognize('{')).toEqual(TYPE_BLOCK_START);
    expect(self.recognize('}')).toEqual(TYPE_BLOCK_END);

    expect(self.recognize('NAME', TYPE_FILE_START)).toEqual(TYPE_SELECTOR);
    expect(self.recognize('NAME', TYPE_BLOCK_END)).toEqual(TYPE_SELECTOR);
    expect(self.recognize('property: value;', TYPE_BLOCK_START)).toEqual(TYPE_PROPERTIES);
  });

  const dummy = { createError: text => new Error('Dummy error: ' + text) };

  test("[TYPE_FILE_START]", () => {
    try {
      self[TYPE_FILE_START].call(dummy, MARK_FILE_START, undefined, undefined);

      expect(true).toEqual(true);
    } catch (e) {
       expect('TYPE_FILE_START').toEqual('Match throw an error');
    }
  });

  test("[TYPE_FILE_END]", () => {
    try {
      self[TYPE_FILE_END].call(dummy, MARK_FILE_END, TYPE_BLOCK_END, '}');

      expect(true).toEqual(true);
    } catch (e) {
       expect('TYPE_FILE_END').toEqual('Match throw an error');
    }

    try {
      self[TYPE_FILE_END].call(dummy, MARK_FILE_END, TYPE_PROPERTIES, 'property: value;');

      expect('TYPE_FILE_END').toEqual('Match should throw an error');
    } catch (e) {
      expect(true).toEqual(true);
    }
  });

  test("[TYPE_BLOCK_START]", () => {
    try {
      self[TYPE_BLOCK_START].call(dummy, '{', TYPE_SELECTOR, 'NAME');

      expect(true).toEqual(true);
    } catch (e) {
       expect('TYPE_BLOCK_START').toEqual('Match throw an error');
    }

    try {
      self[TYPE_BLOCK_START].call(dummy, '{', TYPE_PROPERTIES, 'property: value;');

      expect('TYPE_BLOCK_START').toEqual('Match should throw an error');
    } catch (e) {
      expect(true).toEqual(true);
    }
  });

  test("[TYPE_BLOCK_END]", () => {
    try {
      self[TYPE_BLOCK_END].call(dummy, '}', TYPE_PROPERTIES, 'property: value;');

      expect(true).toEqual(true);
    } catch (e) {
       expect('TYPE_BLOCK_END').toEqual('Match throw an error');
    }

    try {
      self[TYPE_BLOCK_END].call(dummy, '}', TYPE_BLOCK_START, '{');

      expect(true).toEqual(true);
    } catch (e) {
       expect('TYPE_BLOCK_END').toEqual('Match throw an error');
    }

    try {
      self[TYPE_BLOCK_END].call(dummy, '}', TYPE_SELECTOR, 'NAME');

      expect('TYPE_BLOCK_END').toEqual('Match should throw an error');
    } catch (e) {
      expect(true).toEqual(true);
    }
  });

  test("[TYPE_SELECTOR]", () => {
    try {
      const block = self[TYPE_SELECTOR].call(dummy, 'NAME_1, NAME_2', TYPE_FILE_START, MARK_FILE_START);

      expect(block).toEqual({ type: TYPE_SELECTOR, items: ['NAME_1', 'NAME_2'] });
    } catch (e) {
       expect('TYPE_SELECTOR').toEqual('Match throw an error');
    }

    try {
      const block = self[TYPE_SELECTOR].call(dummy, '    NAME_1, NAME_2     ', TYPE_BLOCK_END, '}');

      expect(block).toEqual({ type: TYPE_SELECTOR, items: ['NAME_1', 'NAME_2'] });
    } catch (e) {
      expect('TYPE_SELECTOR').toEqual('Match throw an error');
    }

    try {
      self[TYPE_SELECTOR].call(dummy, 'NAME_1, NAME_2', TYPE_PROPERTIES, 'property: value;');

      expect('TYPE_SELECTOR').toEqual('Match should throw an error');
    } catch (e) {
      expect(true).toEqual(true);
    }
  });

  test("[TYPE_PROPERTIES]", () => {
    const props = `
      color: #000;
      font-size: 15px;
    `;

    try {
      const block = self[TYPE_PROPERTIES].call(dummy, props, TYPE_BLOCK_START, '{');

      expect(block).toEqual({ type: TYPE_PROPERTIES, items: [{ name: 'color', value: '#000' }, { name: 'font-size', value: '15px' }] });
    } catch (e) {
      console.log(e);
      expect('TYPE_PROPERTIES').toEqual('Match throw an error');
    }

    try {
      self[TYPE_PROPERTIES].call(dummy, props, TYPE_SELECTOR, 'nAME');

      expect('TYPE_PROPERTIES').toEqual('Match should throw an error');
    } catch (e) {
      expect(true).toEqual(true);
    }
  });
});
