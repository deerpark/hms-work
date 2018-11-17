module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "indent": ["error", 2],
    "no-alert": "off",
    "comma-dangle": "off",
    "arrow-parens": ["error", "as-needed"],
    "multiline-ternary": ["error", "never"],
    "no-underscore-dangle": "off",
    "no-param-reassign": ["error", { "props": false }],
    "no-bitwise": "off",
    "max-len": [
      "error",
      {
        "code": 300,
      }
    ]
  },
  "globals": {
    "confirm": true,
    "alert": true,
    "window": true,
    "document": true,
    "sessionStorage": true,
    "localStorage": true,
    "_": true,
  }
};
