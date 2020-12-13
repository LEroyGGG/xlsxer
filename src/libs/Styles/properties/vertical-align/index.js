const self = {};

const list = ['top', 'middle', 'bottom'];

self.validate = value => list.includes(value);

self.transform = value => {
  return {
    'vertical-align': value
  };
};

module.exports = self;
