module.exports = function theme(xlsx, theme) {
	return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
		<a:theme name="Office Theme" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
			<a:themeElements>
				<a:clrScheme name="Office">
				</a:clrScheme>
				<a:fontScheme name="Office">
				</a:fontScheme>
				<a:fmtScheme name="Office">
					<a:fillStyleLst>
					</a:fillStyleLst>
					<a:lnStyleLst>
					</a:lnStyleLst>
					<a:effectStyleLst>
						<a:effectStyle>
							<a:effectLst/>
						</a:effectStyle>
						<a:effectStyle>
							<a:effectLst/>
						</a:effectStyle>
						<a:effectStyle>
							<a:effectLst>
								<a:outerShdw algn="ctr" blurRad="57150" dir="5400000" dist="19050" rotWithShape="0">
									<a:srgbClr val="000000">
										<a:alpha val="63000"/>
									</a:srgbClr>
								</a:outerShdw>
							</a:effectLst>
						</a:effectStyle>
					</a:effectStyleLst>
					<a:bgFillStyleLst>
					</a:bgFillStyleLst>
				</a:fmtScheme>
			</a:themeElements>
			<a:objectDefaults/>
			<a:extraClrSchemeLst/>
			<a:extLst>
				<a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}">
					<thm15:themeFamily id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" name="Office Theme" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}" xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main"/>
				</a:ext>
			</a:extLst>
		</a:theme>
	`;
};
