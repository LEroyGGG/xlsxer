module.exports = function app(xlsx) {
  let xml = '';

  xml += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

  xml += '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">';
  xml +=   '<Application>' + xlsx.app.getName() + '</Application>';
	xml +=   '<DocSecurity>0</DocSecurity>';
	xml +=   '<ScaleCrop>false</ScaleCrop>';
	xml +=   '<HeadingPairs>';
	xml +=     '<vt:vector baseType="variant" size="2">';
	xml +=       '<vt:variant>';
	xml +=         '<vt:lpstr>Worksheets</vt:lpstr>';
	xml +=       '</vt:variant>';
  xml +=       '<vt:variant>';
	xml +=         '<vt:i4>' + xlsx.sheets.length + '</vt:i4>';
	xml +=       '</vt:variant>';
	xml +=     '</vt:vector>';
	xml +=   '</HeadingPairs>';
	xml +=   '<TitlesOfParts>';
  xml +=     '<vt:vector baseType="lpstr" size="' + xlsx.sheets.length + '">';

  for (let sheet, i = 0; sheet = xlsx.sheets[i]; i++) {
    xml +=     '<vt:lpstr>' + sheet.getName() + '</vt:lpstr>';
  }

  xml +=     '</vt:vector>';
  xml +=   '</TitlesOfParts>';
  xml +=   '<Company/>';
  xml +=   '<LinksUpToDate>false</LinksUpToDate>';
  xml +=   '<SharedDoc>false</SharedDoc>';
  xml +=   '<HyperlinksChanged>false</HyperlinksChanged>';
  xml +=   '<AppVersion>' + xlsx.app.getVersion() + '</AppVersion>';
  xml += '</Properties>';

  return xml;
};
