const self = {};

const list = ['text', 'percent', 'link'];

self.validate = value => list.includes(value);

self.transform = value => {
  return {
    'display': value
  };
}
module.exports = self;
