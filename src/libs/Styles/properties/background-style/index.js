const Color = require('../../../../utils/color');

const list = ['none', 'gray125', 'solid'];

const self = {};

self.validate = value => list.includes(value);

self.transform = value => {
  return {
    'background-style': value
  };
};

self.inheritable = true;

module.exports = self;
