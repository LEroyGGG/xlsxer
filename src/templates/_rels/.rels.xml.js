module.exports = function rels(xlsx) {
  let xml = '';

   xml += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

   xml += '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';

	 xml +=   '<Relationship Id="' + xlsx.app.getId() + '" Target="docProps/app.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"/>';
	 xml +=   '<Relationship Id="' + xlsx.core.getId() + '" Target="docProps/core.xml" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"/>';
	 xml +=   '<Relationship Id="' + xlsx.workbook.getId() + '" Target="xl/workbook.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"/>';

   xml += '</Relationships>';

  return xml;
};
