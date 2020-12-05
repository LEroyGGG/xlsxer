const self = {};

const list = ['top', 'middle', 'bottom'];

self.validate = value => list.includes(value);

self.transform = value => value;

module.exports = self;
