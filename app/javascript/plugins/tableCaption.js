const plugin = require("tailwindcss/plugin");

const tableCaption = plugin(function ({ addUtilities }) {
  addUtilities({
    ".caption-bottom": {
      "caption-side": "bottom !important",
    },
    ".caption-top": {
      "caption-side": "top",
    },
  });
});

module.exports = tableCaption;
