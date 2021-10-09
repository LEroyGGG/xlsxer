const setupDefaultCellSize = sheet => {
  const [width, height] = sheet.getCellSize();

  return '<sheetFormatPr defaultColWidth="' + width + '" defaultRowHeight="' + height + '" customHeight="1" x14ac:dyDescent="0.25"/>';
};

const createColsList = sheet => {
  const groups = sheet.getColumnSize();

  if (!groups.length) return '';

  let xml = '';

  xml += '<cols>';

  for (let item, i = 0; item = groups[i]; i++) {
    xml += '<col customWidth="1" max="' + item.to + '" min="' + item.from + '" width="' + item.width + '"/>';
  }

  xml += '</cols>';

  return xml;
};

const createDataList = sheet => {
  const rows = sheet.getData();

  let xml = '';

  xml += '<sheetData>';

  for (let row, i = 0; row = rows[i]; i++) {
    const { height, spans, cells } = row;

    xml += '<row' + (height ? ' customHeight="1" ht="' + height + '"' : '') + ' r="' + (i + 1) + '"' + (spans ? ' spans="' + spans + '"' : '') + ' x14ac:dyDescent="0.25">';

    for (let cell, j = 0; cell = cells[j]; j++) {
      const style = cell.getStyle();
      const value = cell.getValue();

      xml += '<c r="' + cell.getName() + '"' + (style ? ' s="' + style + '"': '') + (cell.isShared() ? ' t="s"' : '') + '>';
      xml +=   '<v>' + (value != null ? value : '') + '</v>';
      xml += '</c>';
    }

    xml += '</row>';
  }

  xml += '</sheetData>';

  return xml;
};

const createMergeCells = sheet => {
  let xml = '';

  const merges = sheet.getMergedCells();

  if (!merges.length) return xml;

  xml += '<mergeCells count="' + merges.length + '">';

  for (let merge, i = 0; merge = merges[i]; i++) {
    xml += '<mergeCell ref="' + merge + '"/>';
  }

  xml += '</mergeCells>';

  return xml;
};

module.exports = function sheet(xlsx, sheet) {
  let xml = '';

  xml += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

  xml += '<worksheet mc:Ignorable="x14ac" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">';
  xml +=   '<dimension ref="' + sheet.getDimension() + '"/>';

  xml +=   '<sheetViews>';
  xml +=     '<sheetView tabSelected="1" workbookViewId="0">';
  xml +=       '<sheetView workbookViewId="0"/>';
  xml +=     '</sheetView>';
  xml +=   '</sheetViews>';

  xml += setupDefaultCellSize(sheet);

  xml += createColsList(sheet);
  xml += createDataList(sheet);

  xml += createMergeCells(sheet);

  xml +=   '<pageMargins bottom="0.75" footer="0.3" header="0.3" left="0.7" right="0.7" top="0.75"/>';
  xml +=   '<pageSetup horizontalDpi="300" orientation="portrait" r:id="rId1" verticalDpi="300"/>';
  xml += '</worksheet>';

  return xml;
};
