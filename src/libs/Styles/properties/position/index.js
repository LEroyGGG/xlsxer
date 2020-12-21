const self = {};

const list = ['static', 'fixed'];

self.validate = value => list.includes(value);

self.transform = value => {
  return {
    'position': value
  };
};

self.inheritable = true;

module.exports = self;
