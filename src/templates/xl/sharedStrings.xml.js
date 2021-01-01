module.exports = function sharedStrings(xlsx) {
  let xml = '';

  xml += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

  xml += '<sst count="' + xlsx.shared.count() + '" uniqueCount="' + xlsx.shared.count() + '" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">';

  const values = xlsx.shared.getValues();

  for (let value, i = 0; value = values[i]; i++) {
    xml += '<si><t>' + value + '</t></si>';
  }

  xml += '</sst>';

  return xml;
};
