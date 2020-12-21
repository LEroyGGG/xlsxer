const Styles = require('.');

describe("Styles", () => {
  test("Styles.collect", async () => {
    const data = {
      "::row(1)": {
        "height": 36,
        "display": "text",
        "font-family": "Calibri",
        "vertical-align": "middle",
        "text-align": "center",
        "font-size": 14,
        "color": "FF111111",
        "border-top-color": null,
        "border-left-color": null,
        "border-right-color": null,
        "border-bottom-color": null,
        "border-top-style": null,
        "border-left-style": null,
        "border-right-style": null,
        "border-bottom-style": null,
        "background-color": "00000000",
        "position": "fixed"
      },
      "STATE_100": {
        "display": "text",
        "font-family": "Calibri",
        "vertical-align": "middle",
        "text-align": "center",
        "font-size": 14,
        "color": "FF111111",
        "border-top-color": "FF111111",
        "border-left-color": "FF111111",
        "border-right-color": "FF111111",
        "border-bottom-color": "FF111111",
        "border-top-style": "thick",
        "border-left-style": "thick",
        "border-right-style": "thick",
        "border-bottom-style": "thick",
        "background-color": "FF8C72B2"
      },
      "STATE_200": {
        "display": "text",
        "font-family": "Calibri",
        "vertical-align": "middle",
        "text-align": "center",
        "font-size": 14,
        "color": "FF111111",
        "border-top-color": "FF111111",
        "border-left-color": "FF111111",
        "border-right-color": "FF111111",
        "border-bottom-color": "FF111111",
        "border-top-style": "thick",
        "border-left-style": "thick",
        "border-right-style": "thick",
        "border-bottom-style": "thick",
        "background-color": "FF46A0DF"
      },
      "STATE_300": {
        "display": "text",
        "font-family": "Calibri",
        "vertical-align": "middle",
        "text-align": "center",
        "font-size": 14,
        "color": "FF111111",
        "border-top-color": "FF111111",
        "border-left-color": "FF111111",
        "border-right-color": "FF111111",
        "border-bottom-color": "FF111111",
        "border-top-style": "thick",
        "border-left-style": "thick",
        "border-right-style": "thick",
        "border-bottom-style": "thick",
        "background-color": "FFDFAB46"
      },
      "STATE_400": {
        "display": "text",
        "font-family": "Calibri",
        "vertical-align": "middle",
        "text-align": "center",
        "font-size": 14,
        "color": "FF111111",
        "border-top-color": "FF111111",
        "border-left-color": "FF111111",
        "border-right-color": "FF111111",
        "border-bottom-color": "FF111111",
        "border-top-style": "thick",
        "border-left-style": "thick",
        "border-right-style": "thick",
        "border-bottom-style": "thick",
        "background-color": "FFDF4654"
      },
      "STATE_500": {
        "display": "text",
        "font-family": "Calibri",
        "vertical-align": "middle",
        "text-align": "center",
        "font-size": 14,
        "color": "FF111111",
        "border-top-color": "FF111111",
        "border-left-color": "FF111111",
        "border-right-color": "FF111111",
        "border-bottom-color": "FF111111",
        "border-top-style": "thick",
        "border-left-style": "thick",
        "border-right-style": "thick",
        "border-bottom-style": "thick",
        "background-color": "FFDF4654"
      },
      "STATE_ERROR": {
        "display": "text",
        "font-family": "Calibri",
        "vertical-align": "middle",
        "text-align": "center",
        "font-size": 14,
        "color": "FF111111",
        "border-top-color": "FF111111",
        "border-left-color": "FF111111",
        "border-right-color": "FF111111",
        "border-bottom-color": "FF111111",
        "border-top-style": "thick",
        "border-left-style": "thick",
        "border-right-style": "thick",
        "border-bottom-style": "thick",
        "background-color": "FFAC0000"
      },
      "URL": {
        "display": "link",
        "font-family": "Calibri",
        "vertical-align": "middle",
        "text-align": "left",
        "font-size": 14,
        "color": "FF111111",
        "border-top-color": "FF111111",
        "border-left-color": "FF111111",
        "border-right-color": "FF111111",
        "border-bottom-color": "FF111111",
        "border-top-style": "thick",
        "border-left-style": "thick",
        "border-right-style": "thick",
        "border-bottom-style": "thick",
        "background-color": "00000000"
      },
      "EMPTY": {
        "display": "text",
        "font-family": "Calibri",
        "vertical-align": "middle",
        "text-align": "center",
        "font-size": 14,
        "color": "FF111111",
        "border-top-color": null,
        "border-left-color": null,
        "border-right-color": null,
        "border-bottom-color": null,
        "border-top-style": null,
        "border-left-style": null,
        "border-right-style": null,
        "border-bottom-style": null,
        "background-color": "00000000"
      }
    };

    const src = [__dirname, './styles.test.css'];

    const styles = new Styles();

    await styles.addFile(...src);

    result = styles.collect();

    expect(result).toEqual(data);
  });
});
