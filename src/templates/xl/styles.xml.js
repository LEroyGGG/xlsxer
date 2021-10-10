const createFontsList = xlsx => {
  const fonts = xlsx.styles.getFonts();

  let xml = '';

  xml += '<fonts count="' + fonts.length + '" x14ac:knownFonts="1">';

  for (let font, i = 0; font = fonts[i]; i++) {
    xml += '<font>';
    xml +=   '<sz val="' + font.size + '"/>';
    xml +=   '<color rgb="' + font.color + '"/>';
    xml +=   '<name val="' + font.family + '"/>';
    xml +=   '<family val="2"/>';
    xml +=   '<charset val="204"/>';
    xml +=   '<scheme val="minor"/>';
    xml += '</font>';
  }

  xml += '</fonts>';

  return xml;
};

const createFillsList = xlsx => {
  const fills = xlsx.styles.getBackgrounds();

  let xml = '';

  xml += '<fills count="' + fills.length + '">';

  for (let fill, i = 0; fill = fills[i]; i++) {
    xml += '<fill>';

    if (fill.pattern === 'solid') {
      xml += '<patternFill patternType="' + fill.pattern + '">';
      xml +=   '<fgColor rgb="' + fill.fill + '"/>';
      xml +=   '<bgColor indexed="64"/>';
      xml += '</patternFill>';
    } else {
      xml += '<patternFill patternType="' + fill.pattern + '"/>';
    }

    xml += '</fill>';
  }

  xml += '</fills>';

  return xml;
};

const createBordersList = xlsx => {
  const borders = xlsx.styles.getBorders();

  let xml = '';

  xml += '<borders count="' + borders.length + '">';

  const sides = ['left', 'right', 'top', 'bottom'];

  for (let border, i = 0; border = borders[i]; i++) {
    xml += '<border>';

    for (let side, j = 0; side = sides[j]; j++) {
      const style = border[side + 'Style'];
      const color = border[side + 'Color'];

      if (style) {
        xml += '<' + side + ' style="' + style + '">';
        xml +=   '<color rgb="' + color + '"/>';
        xml += '</' + side + '>';
      } else {
        xml += '<' + side + '/>';
      }
    }

    xml +=   '<diagonal/>';
    xml += '</border>';
  }

  xml += '</borders>';

  return xml;
};

const createStylesList = xlsx => {
  const styles = xlsx.styles.getStyles();
  const aligns = xlsx.styles.getAligns();

  let xml = '';

  xml += '<cellXfs count="' + styles.length + '">';

  for (let style, i = 0; style = styles[i]; i++) {
    const { font, border, background, align } = style.values;

    const { horizontal, vertical, wrapText } = aligns[align];

    if (horizontal || vertical) {
      xml += '<xf applyAlignment="1"' + (border ? ' applyBorder="1" borderId="' + border + '"' : '') + ' fillId="' + background + '" fontId="' + font + '" numFmtId="0" xfId="0">';
      xml +=   '<alignment' + (vertical ? ' vertical="' + vertical + '"': '') + (horizontal ? ' horizontal="' + horizontal + '"' : '') + (wrapText ? '  wrapText="1"' : '') + '/>';
      xml += '</xf>';
    } else {
      xml += '<xf' + (border ? ' applyBorder="1" borderId="' + border + '"' : '') + ' fillId="' + background + '" fontId="' + font + '" numFmtId="0" xfId="0" />';
    }
  }

  xml += '</cellXfs>';

  return xml;
};

module.exports = function styles(xlsx) {
  let xml = '';

  xml += '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

  xml += '<styleSheet mc:Ignorable="x14ac x16r2" xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:x16r2="http://schemas.microsoft.com/office/spreadsheetml/2015/02/main">';

  xml += createFontsList(xlsx);
  xml += createFillsList(xlsx);
  xml += createBordersList(xlsx);

  xml +=   '<cellStyleXfs count="1">';
  xml +=     '<xf borderId="0" fillId="0" fontId="0" numFmtId="0"/>';
  xml +=   '</cellStyleXfs>';

  xml += createStylesList(xlsx);

  xml +=   '<cellStyles count="1">';
  xml +=     '<cellStyle builtinId="0" name="Normal" xfId="0"/>';
  xml +=   '</cellStyles>';
  xml +=   '<dxfs count="0"/>';
  xml +=   '<tableStyles count="0" defaultPivotStyle="PivotStyleLight16" defaultTableStyle="TableStyleMedium2"/>';
  xml +=   '<extLst>';
  xml +=     '<ext uri="{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main">';
  xml +=       '<x14:slicerStyles defaultSlicerStyle="SlicerStyleLight1"/>';
  xml +=     '</ext>';
  xml +=     '<ext uri="{9260A510-F301-46a8-8635-F512D64BE5F5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main">';
  xml +=       '<x15:timelineStyles defaultTimelineStyle="TimeSlicerStyleLight1"/>';
  xml +=     '</ext>';
  xml +=   '</extLst>';
  xml += '</styleSheet>';

  return xml;
};
