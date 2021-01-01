module.exports = function workbook(xlsx) {
  let xml = '';

  xml += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

  xml += '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
  xml +=   '<Relationship Id="' + xlsx.styles.getId() + '" Target="styles.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"/>';

  for (let theme, i = 0; theme = xlsx.themes[i]; i++) {
    xml += '<Relationship Id="' + theme.getId() + '" Target="theme/theme' + theme.getIdx() + '.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"/>';
  }

  for (let sheet, i = 0; sheet = xlsx.sheets[i]; i++) {
    xml += '<Relationship Id="' + sheet.getId() + '" Target="worksheets/sheet' + sheet.getIdx() + '.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"/>';
  }

  xml +=   '<Relationship Id="' + xlsx.shared.getId() + '" Target="sharedStrings.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"/>';
  xml += '</Relationships>';

  return xml;
};
