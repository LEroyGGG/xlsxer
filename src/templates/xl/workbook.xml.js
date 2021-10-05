module.exports = function workbook(xlsx) {
  let xml = '';

  xml += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

  xml += '<workbook mc:Ignorable="x15" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main">';
  xml +=   '<fileVersion appName="xl" lastEdited="6" lowestEdited="6" rupBuild="14420"/>';
  xml +=   '<workbookPr defaultThemeVersion="164011"/>';
  xml +=   '<mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006">';
  xml +=     '<mc:Choice Requires="x15">';
  xml +=       '<x15ac:absPath url="C:\\" xmlns:x15ac="http://schemas.microsoft.com/office/spreadsheetml/2010/11/ac"/>';
  xml +=     '</mc:Choice>';
  xml +=   '</mc:AlternateContent>';
  xml +=   '<bookViews>';
  xml +=     '<workbookView windowHeight="12300" windowWidth="28800" xWindow="0" yWindow="0"/>';
  xml +=   '</bookViews>';
  xml +=   '<sheets>';

  for (let sheet, i = 0; sheet = xlsx.sheets[i]; i++) {
    xml +=   '<sheet name="' + sheet.getName() + '" r:id="' + sheet.getXlId() + '" sheetId="' + sheet.getIdx() + '"/>';
  }

  xml +=   '</sheets>';
  xml +=   '<calcPr calcId="162913"/>';
  xml +=   '<extLst>';
  xml +=     '<ext uri="{140A7094-0E35-4892-8432-C4D2E57EDEB5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main">';
  xml +=       '<x15:workbookPr chartTrackingRefBase="1"/>';
  xml +=     '</ext>';
  xml +=   '</extLst>';
  xml += '</workbook>';

  return xml;
};
