const self = {};

self.pick = function pick(props, src) {
  return props.reduce((r, n) => (n in src && (r[n] = src[n]), r), {});
};

module.exports = self;
