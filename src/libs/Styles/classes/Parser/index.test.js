const Parser = require('.');

describe("Parser", () => {
  test("Parser.readFile", async () => {
    const data = [
      {
        "selectors": [
          "::defaults"
        ],
        "properties": [
          {
            "name": "width",
            "value": "50px"
          },
          {
            "name": "height",
            "value": "25px"
          },
          {
            "name": "display",
            "value": "text"
          },
          {
            "name": "font-family",
            "value": "'Calibri'"
          },
          {
            "name": "vertical-align",
            "value": "middle"
          },
          {
            "name": "text-align",
            "value": "center"
          },
          {
            "name": "font-size",
            "value": "14px"
          },
          {
            "name": "color",
            "value": "#111"
          },
          {
            "name": "border",
            "value": "none"
          },
          {
            "name": "background",
            "value": "transparent"
          }
        ]
      },
      {
        "selectors": [
          "::row(1)"
        ],
        "properties": [
          {
            "name": "position",
            "value": "fixed"
          },
          {
            "name": "height",
            "value": "36px"
          }
        ]
      },
      {
        "selectors": [
          "STATE_100",
          "STATE_200",
          "STATE_300",
          "STATE_400",
          "STATE_500",
          "STATE_ERROR"
        ],
        "properties": [
          {
            "name": "border",
            "value": "#111 thick"
          },
          {
            "name": "background-color",
            "value": "transparent"
          }
        ]
      },
      {
        "selectors": [
          "STATE_ERROR"
        ],
        "properties": [
          {
            "name": "background-color",
            "value": "red"
          }
        ]
      },
      {
        "selectors": [
          "URL"
        ],
        "properties": [
          {
            "name": "display",
            "value": "link"
          }
        ]
      },
      {
        "selectors": [
          "EMPTY"
        ],
        "properties": []
      }
    ];

    const src = [__dirname, '../../styles.test.css'];

    const result = await Parser.readFile(...src).process();

    expect(result).toEqual(data);
  });

  test("Parser.readInline", async () => {
    const styles = `
      ::defaults {
        width: 50px;
        height: 25px;
        display: text;
        font-family: 'Calibri';
        vertical-align: middle;
        text-align: center;
        font-size: 14px;
        color: #111;
      }
    `;

    const data = [
      {
        "selectors": [
          "::defaults"
        ],
        "properties": [
          {
            "name": "width",
            "value": "50px"
          },
          {
            "name": "height",
            "value": "25px"
          },
          {
            "name": "display",
            "value": "text"
          },
          {
            "name": "font-family",
            "value": "'Calibri'"
          },
          {
            "name": "vertical-align",
            "value": "middle"
          },
          {
            "name": "text-align",
            "value": "center"
          },
          {
            "name": "font-size",
            "value": "14px"
          },
          {
            "name": "color",
            "value": "#111"
          }
        ]
      }
    ];

    const result = await Parser.readInline(styles).process();

    expect(result).toEqual(data);
  });
});
