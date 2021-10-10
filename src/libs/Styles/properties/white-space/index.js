const self = {};

const list = ['multiline', 'nowrap'];

self.validate = value => list.includes(value);

self.transform = value => {
  value = {
    multiline: true,
    nowrap: false,
  }[value];

  return {
    'white-space': value
  };
};

self.inheritable = true;

module.exports = self;
