const self = {};

const list = ['top', 'middle', 'bottom'];

self.validate = value => list.includes(value);

self.transform = value => {
  value = {
    middle: 'center',
  }[value] || value;

  return {
    'vertical-align': value
  };
};

self.inheritable = true;

module.exports = self;
