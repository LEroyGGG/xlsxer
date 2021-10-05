const self = {};

self.simple = {
  '_rels/.rels': {
    name: () => '_rels/.rels',
    file: require('../../templates/_rels/.rels'),
  },
  'docProps/app.xml': {
    name: () => 'docProps/app.xml',
    file: require('../../templates/docProps/app.xml'),
  },
  'docProps/core.xml': {
    name: () => 'docProps/core.xml',
    file: require('../../templates/docProps/core.xml'),
  },
  'xl/_rels/workbook.xml.rels': {
    name: () => 'xl/_rels/workbook.xml.rels',
    file: require('../../templates/xl/_rels/workbook.xml.rels'),
  },
  'xl/sharedStrings.xml': {
    name: () => 'xl/sharedStrings.xml',
    file: require('../../templates/xl/sharedStrings.xml'),
  },
  'xl/styles.xml': {
    name: () => 'xl/styles.xml',
    file: require('../../templates/xl/styles.xml'),
  },
  'xl/workbook.xml': {
    name: () => 'xl/workbook.xml',
    file: require('../../templates/xl/workbook.xml'),
  },
  '[Content_Types].xml': {
    name: () => '[Content_Types].xml',
    file: require('../../templates/[Content_Types].xml'),
  },
};

self.themes = {
  'xl/theme/theme.xml': {
    name: (theme, idx) => `xl/theme/theme${idx + 1}.xml`,
    file: require('../../templates/xl/theme/theme.xml'),
  },
};

self.sheets = {
  'xl/worksheets/sheet.xml': {
    name: (sheet, idx) => `xl/worksheets/sheet${idx + 1}.xml`,
    file: require('../../templates/xl/worksheets/sheet.xml'),
  },
};

module.exports = self;
