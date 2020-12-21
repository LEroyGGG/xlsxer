const self = {};

self.font = { 'font-family': 'family', 'font-size': 'size', 'color': 'color' };

self.border = {
  'border-top-color': 'borderTopColor', 'border-top-style': 'borderTopStyle',
  'border-left-color': 'borderLeftColor', 'border-left-style': 'borderLeftStyle',
  'border-right-color': 'borderRightColor', 'border-right-style': 'borderRightStyle',
  'border-bottom-color': 'borderBottomColor', 'border-bottom-style': 'borderBottomStyle',
};

self.background = { 'background-color': 'fill' };

self.align = { 'text-align': 'horizontal', 'verical-align': 'verical' };

module.exports = self;
