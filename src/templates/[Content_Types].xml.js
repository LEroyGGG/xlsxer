module.exports = function contentTypes(xlsx) {
  let xml = '';

  xml += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

  xml += '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">';

	xml +=   '<Default ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings" Extension="bin"/>';
	xml +=   '<Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>';
	xml +=   '<Default ContentType="application/xml" Extension="xml"/>';
	xml +=   '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml"/>';

  for (let sheet, i = 0; sheet = xlsx.sheets[i]; i++) {
    xml += '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet' + sheet.getIdx() + '.xml"/>';
  }

	xml +=   '<Override ContentType="application/vnd.openxmlformats-officedocument.theme+xml" PartName="/xl/theme/theme1.xml"/>';
	xml +=   '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml"/>';
	xml +=   '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/>';
	xml +=   '<Override ContentType="application/vnd.openxmlformats-package.core-properties+xml" PartName="/docProps/core.xml"/>';
	xml +=   '<Override ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" PartName="/docProps/app.xml"/>';

  xml += '</Types>';

  return xml;
};
