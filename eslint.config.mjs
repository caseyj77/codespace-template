import standard from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  standard.configs.recommended,
  {
    plugins: {
      prettier: prettier
    },
    rules: {
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "single"], // Enforce single quotes
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      "no-unused-vars": ["warn"],
      // Add more custom rules as needed
    },
  },
  {
    ignores: ["dist", "vendor", "node_modules"]
  }
];
