module.exports = function core(xlsx) {
  let xml = '';

  xml += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

  xml += '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';
  xml +=   '<dc:creator>' + xlsx.document.getAuthor() + '</dc:creator>';
  xml +=   '<cp:lastModifiedBy>' + (xlsx.document.getModifier() || xlsx.document.getAuthor()) + '</cp:lastModifiedBy>';

  xml +=   '<dcterms:created xsi:type="dcterms:W3CDTF">' + xlsx.document.getCreateDate().toISOString().replace(/\.\d{3}/, '') + '</dcterms:created>';
  xml +=   '<dcterms:modified xsi:type="dcterms:W3CDTF">' + (xlsx.document.getModifyDate() || xlsx.document.getCreateDate()).toISOString().replace(/\.\d{3}/, '') + '</dcterms:modified>';
  xml += '</cp:coreProperties>';

  return xml;
};
