const self = {};

self.font = { 'font-family': 'family', 'font-size': 'size', 'color': 'color' };

self.border = {
  'border-top-color': 'topColor', 'border-top-style': 'topStyle',
  'border-left-color': 'leftColor', 'border-left-style': 'leftStyle',
  'border-right-color': 'rightColor', 'border-right-style': 'rightStyle',
  'border-bottom-color': 'bottomColor', 'border-bottom-style': 'bottomStyle',
};

self.background = { 'background-color': 'fill', 'background-style': 'pattern' };

self.align = { 'text-align': 'horizontal', 'verical-align': 'verical' };

module.exports = self;
