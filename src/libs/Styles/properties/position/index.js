const self = {};

const list = ['static', 'fixed'];

self.validate = value => list.includes(value);

self.transform = value => {
  return {
    'position': value
  };
};

module.exports = self;
