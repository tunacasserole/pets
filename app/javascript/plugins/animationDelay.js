const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      },
      {
        values: theme("animationDelay"),
      }
    );
  },
  {
    theme: {
      animationDelay: {
        100: "100ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        900: "900ms",
      },
    },
  }
);

module.exports = animationDelay;
